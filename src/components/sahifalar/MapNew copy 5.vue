<template>
    <section class="setting__section pb-120">
       <div class="container__customizemain pb-120 round16" style="padding-top: 10px;">
          <div class="container">
             <div class="row g-4">
                <div class="col-lg-12">
                   <div class="overview__gitwrapper bgwhite round16 border p-3 d-flex flex-column align-items-center">
                      <div class="d-flex" style="gap: 10px; border-bottom: 10px solid #ffffff;">
                         <button class="burchak outline__btn" :class="{ 'active-btn': activeButton === 'all' }"
                            @click="filterData('all')" style="font-size: 14px; padding: 8px 15px;">
                            {{ $t('all') }}
                         </button>
                         <button class="burchak outline__btn" :class="{ 'active-btn': activeButton === 'one_step' }"
                            @click="filterData('one_step')" style="font-size: 14px; padding: 8px 15px;">
                            {{ $t('one_step') }}
                         </button>
                         <button class="burchak outline__btn" :class="{ 'active-btn': activeButton === 'EMS' }"
                            @click="filterData('EMS')" style="font-size: 14px; padding: 8px 15px;">
                            EMS
                         </button>
                      </div>
                      <div class="tabs d-flex" style="gap: 5px; align-self: flex-start !important;">
                         <button class="tab-btn" :class="{ 'active-tab': activeTab === 'apidagi_nomlar' }"
                            @click="setActiveTab('apidagi_nomlar')">
                            {{ $t('manzilbilan') }}
                         </button>
                         <button class="tab-btn" :class="{ 'active-tab': activeTab === 'kocha_nomi' }"
                            @click="setActiveTab('kocha_nomi')">
                            {{ $t('bolimizlash') }}
                         </button>
                      </div>
                      <div class="search-wrapper" style="align-self: flex-start !important;">
                         <!-- Ko‘cha nomi qidirish bo‘limi (activeTab === 'apidagi_nomlar') -->
                         <form v-if="activeTab === 'apidagi_nomlar'">
                            <input type="text" :placeholder="$t('mahallanomi')" class="search-input"
                               @input="searchLocation($event.target.value)" />
                            <div class="search-icon">
                               <i class="bi bi-search fz-12"></i> {{ $t('search') }}
                            </div>
                         </form>
                         <!-- Pochta bo‘limi qidirish bo‘limi (activeTab === 'kocha_nomi') -->
                         <form v-if="activeTab === 'kocha_nomi'">
                            <input type="text" :placeholder="$t('aloqanomi')" class="search-input"
                               @input="searchPostOffices($event.target.value)" />
                            <div class="search-icon">
                               <i class="bi bi-search fz-12"></i> {{ $t('search') }}
                            </div>
                         </form>
 
                         <!-- Natijalar ro‘yxati: ko‘cha qidiruvi uchun -->
                         <ul v-if="activeTab === 'apidagi_nomlar' && searchResults.length" class="search-results">
                            <li v-for="location in searchResults" :key="location.lat" @click="selectLocation(location)">
                               {{ location.address }}
                            </li>
                         </ul>
 
                         <!-- Natijalar ro‘yxati: pochta bo‘limi qidiruvi uchun -->
                         <ul v-if="activeTab === 'kocha_nomi' && searchResults.length" class="search-results">
                            <li v-for="office in searchResults" :key="office.index" @click="selectOffice(office)">
                               {{ office.index }} – {{ office.name_uz }}
                            </li>
                         </ul>
                      </div>
                      <div class="map-container mt-4">
                         <div id="map" class="yandex-map-container"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
 </template>
 
 <script>
 export default {
    data() {
       return {
          offices: [], // API'dan kelgan barcha pochta bo‘limlari
          lang: 'uz', // Default til
          searchResults: [], // Izlash natijalari
          selectedLocation: null, // Foydalanuvchi tanlagan joy
          filteredOffices: [], // Filtrlangan bo‘limlar
          activeButton: 'all', // Faol tugma
          activeTab: 'apidagi_nomlar',
          searchQuery: '',
          selectedOffice: null,
       };
    },
    async beforeMount() {
       await this.fetchPostOffices();
       this.filterData("all"); // Sahifa yuklanganda barcha ofislar ko'rsin
       this.loadYandexMap();
       await this.fetchInitialPostOffices();
    },
    methods: {
 
       async fetchInitialPostOffices() {
          try {
             const response = await fetch("https://new.pochta.uz/api/v1/maps/new/post/offices/");
             const data = await response.json();
             this.offices = data.result || [];
             this.filteredOffices = this.offices; // Barcha bo‘limlar xaritada
          } catch (error) {
             console.error("API dan pochta bo‘limlarini olishda xatolik:", error);
          }
       },
 
       // Bu yerda qidiruv uchun boshqa endpointdan ma'lumot olinmoqda
       async searchPostOffices(query) {
          try {
             // Agar foydalanuvchi 3 yoki undan ko‘p belgidan so‘ng qidirsa
             if (query.length > 2) {
                const response = await fetch("https://new.pochta.uz/api/v1/maps/post/offices/");
                const data = await response.json();
                this.offices = data.result || [];
 
                const lowerQuery = query.toLowerCase();
                const fieldsToSearch = [
                   "index",
                   "name_uz",
                   "name_eng",
                   "name_ru",
                   "region"
                ];
 
                // JSON ichidagi har bir 'postal_office' obyektining kerakli maydonlarida qidiramiz
                this.searchResults = this.offices
                   .filter(item => {
                      const office = item.postal_office;
                      return fieldsToSearch.some(field => {
                         const value = office[field];
                         return value && value.toString().toLowerCase().includes(lowerQuery);
                      });
                   })
                   .map(item => item.postal_office)
                   .slice(0, 5); // 5 ta eng mos natija
             } else {
                this.searchResults = [];
             }
          } catch (error) {
             console.error("API dan pochta bo‘limlarini olishda xatolik:", error);
          }
       },
 
 
 
       // Xaritada manzil qidirish
       async searchLocationOnMap(query) {
          if (!query) {
             this.searchResults = [];
             return;
          }
 
          const lang = this.$i18n.locale === 'uz' ? 'uz_UZ' : this.$i18n.locale === 'ru' ? 'ru_RU' : 'en_US';
 
          try {
             const response = await fetch(
                `https://geocode-maps.yandex.ru/1.x/?apikey=4e800151-dbdd-48aa-b855-19793d520a37&geocode=${query}&format=json&results=5&kind=street&bbox=55.0,37.0~73.0,46.0&rspn=1&lang=${lang}`
             );
             const data = await response.json();
 
             this.searchResults = data.response.GeoObjectCollection.featureMember.map(item => {
                const geoObject = item.GeoObject;
                return {
                   name: geoObject.name,
                   address: geoObject.metaDataProperty.GeocoderMetaData.text,
                   lat: parseFloat(geoObject.Point.pos.split(" ")[1]),
                   lng: parseFloat(geoObject.Point.pos.split(" ")[0]),
                };
             });
          } catch (error) {
             console.error("Joylashuvni izlashda xatolik:", error);
          }
       },
 
       // Pochta ofisini tanlash
       selectOffice(office) {
          this.selectedOffice = office;
          // Qidiruv natijalarini tozalash
          this.searchResults = [];
 
          if (office.lat && office.lng) {
             // Marker yaratish
             const placemark = new window.ymaps.Placemark(
                [parseFloat(office.lat), parseFloat(office.lng)],
                {
                   balloonContent: `<strong>${office.name_uz}</strong><br><strong>Indeks:</strong> ${office.index}<br>
        <strong>Xalq global:</strong> ${office.xalq_global}<br>
        <strong>Zoodmal:</strong> ${office.zoodmall}<br>
        <strong>Uzum:</strong> ${office.uzum}<br>
        <strong>Ozon:</strong> ${office.ozon}<br>
        <strong>EMS:</strong> ${office.EMS}<br>
        <strong>Bir qadam:</strong> ${office.one_step}<br>
     <strong>Viloyat:</strong> ${office.region}<br>
        <strong>Tuman:</strong> ${office.district}<br>
        <strong>Geolokatsiya:</strong> <a href="${office.geolocation}" target="_blank">Ko‘rish</a>
                    `
                },
                {
                   iconLayout: 'default#image',
                   iconImageHref: 'https://new.pochta.uz/media/UzPost_for_ma1p.svg',
                   iconImageSize: [30, 30],
                   iconImageOffset: [-15, -15]
                }
             );
 
             placemark.events.add('click', () => {
                this.fetchOfficeDetail(office.index, placemark);
             });
             this.map.geoObjects.add(placemark);
             this.map.setCenter([parseFloat(office.lat), parseFloat(office.lng)], 15);
             placemark.balloon.open();
 
             // To'liq ma'lumotlarni olish: API dan kelgan obyektlar ichidan mos keluvchini topish
             const officeData = this.offices.find(item => item.postal_office.index === office.index);
 
             if (officeData && officeData.locations && officeData.locations.locations.length) {
                // Avvalgi poligon mavjud bo'lsa, olib tashlash
                if (this.currentPolygon) {
                   this.map.geoObjects.remove(this.currentPolygon);
                }
                // Yangi poligon yaratish
                this.currentPolygon = new window.ymaps.Polygon(
                   [officeData.locations.locations],
                   {
                      hintContent: office.name_uz,
                      balloonContent: `<strong>${office.name_uz}</strong><br><strong>Indeks:</strong> ${office.index}`
                   },
                   {
                      fillColor: officeData.locations.fill,
                      fillOpacity: parseFloat(officeData.locations.fill_opacity),
                      strokeColor: officeData.locations.stroke,
                      strokeWidth: parseFloat(officeData.locations.stroke_width),
                      strokeOpacity: parseFloat(officeData.locations.stroke_opacity)
                   }
                );
                this.map.geoObjects.add(this.currentPolygon);
                // Xarita chegaralarini poligon atrofida sozlash (ixtiyoriy)
                const bounds = this.currentPolygon.geometry.getBounds();
                this.map.setBounds(bounds, { checkZoomRange: true, zoomMargin: 20 });
             }
          }
       }
       ,
       setActiveTab(tab) {
          this.activeTab = tab;
          // this.fetchInitialPostOffices();
       },
       filterData(type) {
          this.activeButton = type;
          console.log(this.offices)
          let iconUrl = 'https://new.pochta.uz/media/UzPost_for_ma1p.svg'; // Default icon
          if (type === "all") {
             this.filteredOffices = this.offices
                .filter(office => office.postal_office) // postal_office mavjudligini tekshiramiz
                .map(office => office.postal_office);   // faqat postal_office obyektini olamiz            console.log(this.filteredOffices)
             // if (this.filteredOffices.length === 0) {
             //    this.filteredOffices = this.offices
             //       .filter(office => office.postal_office) // postal_office mavjudligini tekshiramiz
             //       .map(office => office.postal_office);   // faqat postal_office obyektini olamiz
             // }
          } else if (type === "one_step") {
             this.filteredOffices = this.offices.filter(office => office.one_step === "Bor");
             if (this.filteredOffices.length === 0) {
                // Agar yuqoridagi filter natijasi bo‘sh bo‘lsa, postal_office obyektlarini olish:
                this.filteredOffices = this.offices
                   .filter(office => office.postal_office && office.postal_office.one_step === "Bor")
                   .map(office => office.postal_office);
             }
             iconUrl = 'https://new.pochta.uz/media/1Q_for_map.svg';
          } else if (type === "EMS") {
             this.filteredOffices = this.offices.filter(office => office.ems_international_post === "Bor");
             if (this.filteredOffices.length === 0) {
                // Agar yuqoridagi filter natijasi bo‘sh bo‘lsa, postal_office obyektlarini olish:
                this.filteredOffices = this.offices
                   .filter(office => office.postal_office && office.postal_office.EMS === "Bor")
                   .map(office => office.postal_office);
             }
             iconUrl = 'https://new.pochta.uz/media/Ems_for_map.svg';
          }
 
          this.updateMap(iconUrl); // Xaritada yangilash
       },
 
       updateMap(iconUrl) {
          if (!this.map) return;
 
          this.map.geoObjects.removeAll(); // Avvalgi markerlarni tozalash
 
          const clusterer = new window.ymaps.Clusterer({
             preset: 'islands#invertedOrangeClusterIcons',
             groupByCoordinates: false,
             clusterDisableClickZoom: false,
             clusterOpenBalloonOnClick: true,
          });
          const placemarks = this.filteredOffices.map(office => {
             // console.log(office.lat)
             if (office.lat && office.lng) {
                const placemark = new window.ymaps.Placemark(
                   [parseFloat(office.lat), parseFloat(office.lng)],
                   {
                      balloonContent: `<strong>Indeks:</strong> ${office.index || "Noma’lum"}<br>
                     <strong>Geolokatsiya:</strong> <a href="https://maps.yandex.ru/?ll=${office.lng},${office.lat}&z=15" target="_blank">Ko‘rish</a>`
                   },
                   {
                      iconLayout: 'default#image',
                      iconImageHref: iconUrl, // O'zgaruvchan icon
                      iconImageSize: [30, 30],
                      iconImageOffset: [-15, -15]
                   }
                );
 
                placemark.events.add('click', async () => {
                   await this.fetchOfficeDetail(office.index, placemark);
                });
 
                return placemark;
             }
          }).filter(Boolean);
 
          clusterer.add(placemarks);
          this.map.geoObjects.add(clusterer);
       },
       async searchLocation(query) {
          if (!query) {
             this.searchResults = [];
             return;
          }
 
          // Sahifaning joriy tilini aniqlash
          const lang = this.$i18n.locale === 'uz' ? 'uz_UZ' : this.$i18n.locale === 'ru' ? 'ru_RU' : 'en_US';
 
          try {
             const response = await fetch(
                `https://geocode-maps.yandex.ru/1.x/?apikey=4e800151-dbdd-48aa-b855-19793d520a37&geocode=${query}&format=json&results=5&kind=street&bbox=55.0,37.0~73.0,46.0&rspn=1&lang=${lang}`
             );
             const data = await response.json();
 
             this.searchResults = data.response.GeoObjectCollection.featureMember.map(item => {
                const geoObject = item.GeoObject;
                return {
                   name: geoObject.name,
                   address: geoObject.metaDataProperty.GeocoderMetaData.text,
                   lat: parseFloat(geoObject.Point.pos.split(" ")[1]),
                   lng: parseFloat(geoObject.Point.pos.split(" ")[0]),
                };
             });
          } catch (error) {
             console.error("Joylashuvni izlashda xatolik:", error);
          }
       },
       async selectLocation(location) {
          this.selectedLocation = location;
          this.searchResults = []; // Natijalarni tozalash
 
          try {
             const response = await fetch(
                `https://new.pochta.uz/api/v1/maps/new/post/offices/by-address/?lat=${location.lat}&lng=${location.lng}`
             );
             const data = await response.json();
 
             if (data.result && data.result.postal_office) {
                const postalOffice = data.result.postal_office;
                const locations = data.result.locations.locations; // Hudud koordinatalari
 
                // **Dinamik ma'lumotlarni faqat mavjud bo'lsa chiqarish**
                const infoData = [
                   postalOffice.name_uz ? `<strong></strong> ${postalOffice.name_uz}` : '',
                   postalOffice.index ? `<strong>${this.$t("index")}:</strong> ${postalOffice.index}` : '',
                   postalOffice.region ? `<strong>${this.$t("hudud")}:</strong> ${postalOffice.region}` : '',
                   postalOffice.city ? `<strong>${this.$t("shahar")}:</strong> ${postalOffice.city}` : '',
                   postalOffice.district ? `<strong>${this.$t("district")}:</strong> ${postalOffice.district}` : '',
                   postalOffice.street ? `<strong>${this.$t("street")}:</strong> ${postalOffice.street}` : '',
                   postalOffice.house ? `<strong>${this.$t("uy")}:</strong> ${postalOffice.house}` : '',
                   postalOffice.working_hours ? `<strong>${this.$t("working_hours")}:</strong> ${postalOffice.working_hours}` : '',
                   postalOffice.EMS ? `<strong>${this.$t("EMS")}:</strong> ${postalOffice.EMS}` : '',
                   postalOffice.one_step ? `<strong>${this.$t("one_step")}:</strong> ${postalOffice.one_step}` : '',
                   postalOffice.geolocation ? `<strong>${this.$t("Geolokatsiya")}:</strong> <a href="${postalOffice.geolocation}" target="_blank">${this.$t("korish")}</a>` : ''
                ];
 
                // **Bo'sh bo'lgan ma'lumotlarni chiqarib tashlash**
                const info = infoData.filter(item => item !== '').join('<br>');
 
                // Markerni yaratish va ma’lumotlarini qo‘shish
                const placemark = new window.ymaps.Placemark([location.lat, location.lng], {
                   balloonContent: info
                }, {
                   iconLayout: 'default#image',
                   iconImageHref: 'https://new.pochta.uz/media/address_selected_point.svg',
                   iconImageSize: [30, 30],
                   iconImageOffset: [-15, -15]
                });
 
                this.map.geoObjects.add(placemark);
                placemark.balloon.open();
 
                // Avvalgi poligonni o‘chirish
                if (this.currentPolygon) {
                   this.map.geoObjects.remove(this.currentPolygon);
                }
 
                // **Poligon yaratish va rang berish**
                this.currentPolygon = new window.ymaps.Polygon([locations], {
                   hintContent: postalOffice.name_uz,
                   balloonContent: info
                }, {
                   fillColor: data.result.locations.fill, // JSON dagi rang
                   fillOpacity: parseFloat(data.result.locations.fill_opacity),
                   strokeColor: data.result.locations.stroke,
                   strokeWidth: parseFloat(data.result.locations.stroke_width),
                   strokeOpacity: parseFloat(data.result.locations.stroke_opacity),
                });
 
                this.map.geoObjects.add(this.currentPolygon);
 
                // **Hududni xaritaga moslashtirish (to‘liq ko‘rinishi uchun)**
                const bounds = this.currentPolygon.geometry.getBounds(); // Hudud chegaralarini olish
                this.map.setBounds(bounds, { checkZoomRange: true, zoomMargin: 20 });
 
             }
          } catch (error) {
             console.error("Pochta bo‘limini olishda xatolik:", error);
          }
       },
       // Barcha pochta bo‘limlarini API dan yuklab olish
       async fetchPostOffices() {
          try {
             const response = await fetch("https://new.pochta.uz/api/v1/maps/post/offices/");
             const data = await response.json();
             this.offices = data.result || []; // Barcha ma'lumotlarni saqlab qo'yamiz
          } catch (error) {
             console.error("API dan pochta bo‘limlarini olishda xatolik:", error);
          }
       }
       ,
       async fetchOfficeDetail(index, placemark) {
          try {
             const response = await fetch(`https://new.pochta.uz/api/v1/maps/new/post/offices/detail/${index}/`);
             const data = await response.json();
             const postalOffice = data.result.postal_office || {};
 
             // Ma'lumotlarni (null yoki bo'sh bo'lsa ham) to'g'ridan-to'g'ri yozish o'rniga, "||" bilan tekshiruvdan o‘tkazish foydali bo‘lishi mumkin.
             const nameUz = postalOffice.name_uz || '';
             const idx = postalOffice.index || '';
             const EMS = postalOffice.EMS || 'Yo‘q';
             const oneStep = postalOffice.one_step || 'Yo‘q';
             const region = postalOffice.region || '';
             const district = postalOffice.district || '';
             const street = postalOffice.street || '';
             const workingHours = postalOffice.working_hours || '';
             const geolocation = postalOffice.geolocation || '#';
 
             // Ballon ichida ko‘rsatmoqchi bo‘lgan matnni shu yerda to‘liq shakllantiramiz:
             const info = `
        <strong>${nameUz}</strong><br>
        <strong>Indeks:</strong> ${idx}<br>
        <strong>EMS:</strong> ${EMS}<br>
        <strong>Bir Qadam:</strong> ${oneStep}<br>
        <strong>Hudud:</strong> ${region}<br>
        <strong>Tuman:</strong> ${district}<br>
        <strong>Ko‘cha:</strong> ${street}<br>
        <strong>Ish vaqti:</strong> ${workingHours}<br>
        <strong>Geolokatsiya:</strong> <a href="${geolocation}" target="_blank">Ko‘rish</a>
      `;
 
             // Tayyor matnni placemark ballooniga o‘rnatamiz:
             placemark.properties.set('balloonContent', info);
 
             // Agar poligon ham bo‘lsa, avval eski poligonni o‘chiramiz:
             if (this.currentPolygon) {
                this.map.geoObjects.remove(this.currentPolygon);
             }
 
             // Poligon chizish uchun API'dan kelgan locations ma'lumotini olamiz
             const locations = data.result.locations;
             if (locations && locations.locations) {
                this.currentPolygon = new window.ymaps.Polygon(
                   [locations.locations],
                   {
                      hintContent: nameUz,
                      balloonContent: info
                   },
                   {
                      fillColor: locations.fill,
                      fillOpacity: parseFloat(locations.fill_opacity),
                      strokeColor: locations.stroke,
                      strokeWidth: parseFloat(locations.stroke_width),
                      strokeOpacity: parseFloat(locations.stroke_opacity)
                   }
                );
 
                this.map.geoObjects.add(this.currentPolygon);
 
                // Poligonni xaritada to‘liq ko‘rinadigan qilib markazlash
                const bounds = this.currentPolygon.geometry.getBounds();
                this.map.setBounds(bounds, { checkZoomRange: true, zoomMargin: 20 });
             }
          } catch (error) {
             console.error("Aloqa bo‘lim ma'lumotlarini olishda xatolik:", error);
          }
       }
       ,
       loadYandexMap() {
          if (document.getElementById("yandex-maps-script")) {
             this.initMap();
             return;
          }
          const script = document.createElement("script");
          script.id = "yandex-maps-script";
          script.src = "https://api-maps.yandex.ru/2.1/?apikey=4e800151-dbdd-48aa-b855-19793d520a37&lang=ru_RU";
          script.type = "text/javascript";
          script.onload = () => {
             this.initMap();
          };
          document.head.appendChild(script);
       },
       initMap() {
          if (window.ymaps) {
             window.ymaps.ready(() => {
                this.map = new window.ymaps.Map("map", {
                   center: [41.2995, 66.2401],
                   zoom: 6,
                   controls: ["zoomControl", "fullscreenControl"]
                });
 
                const clusterer = new window.ymaps.Clusterer({
                   preset: 'islands#invertedOrangeClusterIcons', // Klaster ikonkasi dizaynini sozlash
                   groupByCoordinates: false,
                   clusterDisableClickZoom: false,
                   clusterOpenBalloonOnClick: true,
                   clusterIcons: [
                      {
                         href: 'https://new.pochta.uz/media/icons8-final-state-80_1.png', // Maxsus klaster svg tasviri
                         size: [50, 50], // Klaster o'lchami
                         offset: [-20, -20], // Klaster tasvirining koordinatalar balansi
                      },
                   ],
                   clusterIconContentLayout: window.ymaps.templateLayoutFactory.createClass(
                      '<div style="color: white; font-weight: bold; font-size: 14px; text-align: center;">{{ properties.geoObjects.length }}</div>'
                   ), // Klaster ichidagi raqam formatini belgilash
                });
 
 
                const placemarks = [];
 
                this.offices.forEach(office => {
                   if (office.lat && office.lng) {
                      const lat = parseFloat(office.lat);
                      const lng = parseFloat(office.lng);
                      const placemark = new window.ymaps.Placemark([lat, lng], {
                         balloonContent: `
                                     <strong>Indeks:</strong> ${office.index || "Noma’lum"}<br>
                                     <strong>Geolokatsiya:</strong> <a href="https://maps.yandex.ru/?ll=${lng},${lat}&z=15" target="_blank">Ko‘rish</a>
                                 `
                      }, {
                         iconLayout: 'default#image',
                         iconImageHref: 'https://new.pochta.uz/media/UzPost_for_ma1p.svg',
                         iconImageSize: [30, 30],
                         iconImageOffset: [-15, -15]
                      });
 
                      placemark.events.add('click', () => {
                         this.fetchOfficeDetail(office.index, placemark);
                      });
 
                      placemarks.push(placemark);
                   }
                });
 
                clusterer.add(placemarks);
                this.map.geoObjects.add(clusterer);
             });
          }
       }
    }
 };
 </script>
 
 
 
 
 
 
 
 
 
 
 <style scoped>
 .search-container {
    position: relative;
    width: 100%;
 }
 
 .search-input {
    padding: 8px 100px 8px 12px;
    /* Chap tomondan joy qoldiramiz */
    font-size: 12px;
    border: 1px solid var(--base);
    border-radius: 4px;
    width: 100%;
 }
 
 .search-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #666;
    cursor: pointer;
 }
 
 .search-wrapper {
    position: relative;
    width: 90%;
 }
 
 .search-results {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    /* top: calc(100% + 5px); */
    /* Izlash maydonidan biroz pastda */
    left: 0;
    width: 100%;
    /* Kengligi izlash maydoniga mos */
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 }
 
 .search-results li {
    padding: 10px;
    cursor: pointer;
 }
 
 .search-results li:hover {
    background: #f5f5f5;
 }
 
 
 
 
 .search-results {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    /* top: 62px; */
    left: 0;
    width: 100%;
    background: #183e98;
    border: 1px solid #ddd;
    border-radius: 4px;
    z-index: 1000;
 }
 
 .search-results li {
    padding: 10px;
    cursor: pointer;
 }
 
 .search-results li:hover {
    background: #f07824;
 }
 
 
 
 #map {
    width: 100%;
    height: 650px;
    border: 1px solid #ccc;
    border-radius: 8px;
 }
 
 .suggestions-list {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    max-height: 213px;
    overflow-y: auto;
    border: 1px solid #183e98;
    border-radius: 4px;
    z-index: 1000;
    background-color: #183e98 !important;
 }
 
 .suggestion-item {
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
    color: white;
 }
 
 .suggestion-item:hover {
    background-color: #f07824;
    color: #183e98;
 }
 
 
 
 
 .suggestions-list {
    list-style: none;
    margin: 0;
    padding: 0;
    background: white;
    border: 1px solid #ccc;
    max-height: 150px;
    overflow-y: auto;
 
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    max-height: 213px;
    overflow-y: auto;
    border: 1px solid #183e98;
    border-radius: 4px;
    background-color: #183e98 !important;
    position: absolute;
    /* Natija oynasini izlash maydoniga yopishtirish */
    top: calc(100% + 5px);
    /* Maydonning pastki qismidan 5px masofada joylashtirish */
    left: 0;
    z-index: 1000;
 }
 
 .suggestions-list li {
    padding: 8px;
    cursor: pointer;
 }
 
 .suggestions-list li:hover {
    background: #f0f0f0;
 }
 
 .popup {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
    background: white;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
 }
 
 .filter-buttons-wrapper {
    display: flex;
    gap: 10px;
    /* Tugmalar orasidagi masofa */
    justify-content: center;
 }
 
 
 /* Responsive Styling */
 @media (max-width: 780px) {
    .flex-container {
       display: flex;
       flex-direction: column;
       align-items: stretch;
    }
 
    .filter-buttons-wrapper {
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
       gap: 10px;
       margin-bottom: 10px;
    }
 
 
    .search-wrapper {
       flex-direction: row;
       align-items: center;
       /* gap: 5px; */
    }
 
    .search-form input {
       border-radius: 4px;
       /* margin-bottom: 10px; */
    }
 
    .search-form button {
       border-radius: 4px;
    }
 }
 
 body {
    margin: 0;
    font-family: Arial, sans-serif;
 }
 
 #map {
    display: flex;
    flex-direction: column;
 }
 
 .map-container {
    width: 100%;
    /* max-width: 1200px; */
    height: 650px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
 }
 
 #map.leaflet-map-container {
    width: 100%;
    height: 100%;
 }
 
 .container__customizemain {
    max-width: 1600px;
    background: #F8F9FC;
    position: relative;
    margin: 0 auto;
    margin-top: 120px;
 }
 
 .flex-container {
    display: flex;
    align-items: center;
    gap: 10px;
 }
 
 .suggestions-list {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    max-height: 213px;
    overflow-y: auto;
    border: 1px solid #183e98;
    border-radius: 4px;
    z-index: 1000;
    background-color: #183e98 !important;
 }
 
 .suggestion-item {
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
    color: white;
    /* Matn rangini o'zgartirish */
 }
 
 .suggestion-item:hover {
    background-color: #f07824;
    /* Tugmani faol holatdagi rangi */
    color: #183e98;
    /* Matn rangi */
 }
 
 .burchak:hover {
    background-color: #f07824;
    /* Button background turns yellow on hover */
    color: #ffffff;
    /* Text color turns white */
 }
 
 .burchak {
    border-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
 }
 
 .active-btn {
    background-color: #f07824;
    /* Tugmaning faol holatdagi rangi */
    color: white;
    /* Matn rangi */
    border: 1px solid #f07824;
    /* Ramka rangi */
 }
 
 
 
 
 
 
 
 
 
 
 .tabs {
    display: flex;
    border-bottom: 2px solid #ffffff;
    gap: 5px;
 }
 
 .tab-btn {
    background: none;
    border: 1px solid #19398a;
    ;
    padding: 3px 6px;
    font-size: 12px;
    cursor: pointer;
    /* font-weight: bold; */
    transition: all 0.3s ease;
    border-radius: 4px 4px 0 0;
    color: #19398A;
    margin-bottom: -3px;
 }
 
 .active-tab {
    color: #fff;
    background-color: #19398A;
    border: 1px solid #19398A;
 }
 
 .tab-btn:hover {
    background-color: rgb(240 120 36);
    border: 1px solid #19398A;
 }
 
 
 
 .search-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
 }
 
 .search-icon {
    position: absolute;
    right: 10px;
    font-size: 12px;
    color: gray;
 }
 
 
 
 
 
 
 
 
 .search-input {
    width: 100%;
    padding: 8px;
    border: 1px solid #19398a;
    border-radius: 4px;
    border-top-left-radius: 0px;
 }
 
 .list-group-item {
    cursor: pointer;
 }
 
 
 
 
 
 
 
 
 
 
 @media (max-width: 576px) {
 
 
 
 
 
 
    /* Qidiruv inputni butun kenglikda ko'rsatish */
    .search-wrapper {
       width: 100% !important;
    }
 
 }
 </style>