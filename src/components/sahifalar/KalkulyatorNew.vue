<template>
   <div id="error-message" class="error-message" style="display: none;">
      Narxni hisoblashda xatolik!
   </div>
   <div id="error-posilka" class="error-posilka" style="display: none;">
      Posilka xizmatida vazni 30 kgdan oshmasligi kerak!
   </div>
   <div id="error-maydapaket" class="error-maydapaket" style="display: none;">
      Mayda paket vazni 2kg dan oshmasligi kerak!
   </div>
   <div id="error-xat" class="error-xat" style="display: none;">
      Xat vazni 2kg dan oshmasligi kerak!
   </div>
   <div id="error-birqadam" class="error-birqadam" style="display: none;">
      Bir qadam vazni 20 kgdan oshmasligi kerak!
   </div>
   <div id="error-message1" class="error-message1" style="display: none;">
      Barcha maydonlarni to'ldiring
   </div>
   <section class="banner__breadcumn ralt">
      <div id="searchPopup" class="search__popup">
         <form action="#" class="popup-content d-flex align-items-center">
            <input type="text" placeholder="Search Here">
            <button id="closeButton">
               <i class="bi bi-x-lg"></i>
            </button>
         </form>
      </div>

      <div class="breadcumnd__wrapper">
         <div class="container">
            <div class="profile__wrapper">
               <div class="row g-4 align-items-center justify-content-between">
                  <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                     <div class="breadcumnd__content">
                        <span class="d4 mb-24">
                           Kalkulyator
                        </span>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section class="profile__section sectionbg9 pb-120">
      <div class="container">
         <div class="profile__customize">
            <div class="row g-4">
               <div class="col-xl-8 col-lg-8">
                  <div class="chatbot__developers">
                     <div class="chatbot__items featiredjob__details round16 mb-24 shadow2 bgwhite">
                        <p class="title mb-20" style="font-size: 32px;">
                           Posilka yoki xatni joylashtiring
                        </p>
                        <p class="fz-18 fw-400 inter pra" style="color: #183e98;">
                           Xarajatlarni va etkazib berish vaqtini hisoblang
                        </p>
                        <br>

                        <div class="tab bor">
                           <button v-for="service in services" :key="service.id" class="tablinks"
                              :class="{ active: activeService === service.id }" @click="selectService(service.id)">
                              <img :src="service.image" alt="" style="width:30px;height:30px;" />
                              <p>{{ service.name }}</p>
                           </button>
                        </div>
                        <br>

                        <div v-for="service in services" :key="service.id" :id="service.id" class="tabcontent"
                           style="display: block;" v-show="activeService === service.id">
                           <div class="tab bor" style="color: #222E48;">
                              <p v-if="service.id === 136">
                                 Posilka — bu jo’natishga ruxsat etilgan sanoat tovarlari, oziq-ovqat mahsulotlari,
                                 madaniy-maishiy va boshqa tovarlar solingan pochta jo’natmasi turi.
                              </p>
                              <p v-if="service.id === 135">
                                 Mayda paketlar — kichik va sinmaydigan predmetlarni jo’natishning qulay usulidir. Ushbu
                                 jo'natma turida kiyim-kechak, aksessuarlar va boshqa kichik sinmaydigan mahsulotlarni
                                 yuborish mumkin.
                              </p>
                              <p v-if="service.id === 33">
                                 Xat - bu ichida yozma xat-xabar, hujjatlar bo’lgan pochta jo'natmasi
                              </p>
                              <p v-if="service.id === 209">
                                 “Bir Qadam” xizmati orqali jo'natmalaringizni 1 KUNda butun O'zbekiston bo'ylab
                                 belgilangan bo'limlar orasida yetkazib beramiz.
                              </p>
                           </div>
                           <br />

                           <h3 class="title mb-20">
                              Qayerdan
                           </h3>
                           <br>

                           <form class="write__review">
                              <div class="row g-4 justify-content-center">
                                 <!-- Region Tanlash -->


                                 <div class="col-lg-4 viloyat">
                                    <div class="frm__grp">
                                       <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                       <select id="province" name="province" class="form-control"
                                          v-model="selectedProvince1" @change="fetchDistricts1">
                                          <option value="" disabled selected>Viloyat tanlang</option>
                                          <option v-for="(name, id) in regions1" :key="name" :value="name">
                                             {{ id }}
                                          </option>
                                       </select>
                                    </div>
                                 </div>

                                 <!-- District Tanlash -->
                                 <div class="col-lg-4 tuman">
                                    <div class="frm__grp">
                                       <label for="district" class="fz-18 fw-500 inter title mb-16"></label>
                                       <select id="district" name="district" class="form-control"
                                          v-model="selectedDistrict1">
                                          <option value="" disabled selected>Tuman tanlang</option>
                                          <option v-for="(name, id) in districts1" :key="id" :value="name.id">
                                             {{ name.name }}
                                          </option>
                                       </select>
                                    </div>
                                 </div>

                                 <div class="col-lg-4 manzil">
                                    <div class="frm__grp">
                                       <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                       <div style="position: relative;">
                                          <input type="text" id="address" name="address" class="form-control"
                                             placeholder="Manzil" v-model="address">
                                       </div>
                                    </div>
                                 </div>
                                 <p style="color: blek; font-size: small;">Jo‘natuvchining shaharini yoki manzilini
                                    kiriting.</p>
                                 <br>
                                 <br>

                                 <h3 class="title mb-20" style="margin-top: 30px;">
                                    Qayerga
                                 </h3>

                                 <div class="tabi bor" style="--bs-gutter-y: 5rem;     position: relative; top: -60px;">
                                    <button class="tablinks1" type="button"
                                       :class="{ active: $route.activeTab === 'Index' }" @click="activeTab = 'Index'"
                                       style="display: block;">
                                       <p>Index</p>
                                    </button>
                                    <button class="tablinks1" type="button" :class="{ active: activeTab === 'Manzil' }"
                                       @click="activeTab = 'Manzil'" id="firstTab" style="display: block;">
                                       <p>Manzil</p>
                                    </button>
                                    <button class="tablinks1" type="button" :class="{ active: activeTab === 'Pochtam' }"
                                       @click="activeTab = 'Pochtam'">
                                       <p>Pochtomat</p>
                                    </button>
                                    <button class="tablinks1" type="button" :class="{ active: activeTab === 'Davlat' }"
                                       @click="activeTab = 'Davlat'">
                                       <p>Boshqa mamlakatga</p>
                                    </button>
                                 </div>

                                 <div id="Index" class="tabcontent1" v-show="activeTab === 'Index'">
                                    <div class="col-lg-4 index">
                                       <div class="frm__grp">
                                          <label for="index" class="fz-18 fw-500 inter title mb-16"></label>
                                          <input style="    position: relative; top: -60px;" type="text" id="index"
                                             name="index" class="form-control" placeholder="Indeksni kiriting"
                                             v-model="index" />
                                       </div>
                                    </div>
                                    <p style="color: black; font-size: small; position: relative; top: -55px;">
                                       <router-link :to="{ name: 'map' }" style="color: blue;">
                                          Indeks
                                       </router-link>
                                       bo‘yicha jo‘natish faqat O‘zbekiston bo‘ylab mavjud. Jo'natma talab qilib
                                       olinadigan bo‘limga yetkaziladi. Qabul qiluvchi jo'natma kelganini bilishi uchun
                                       rasmiylashtirishda kuzatuv uchun trek-raqamni qabul qiluvchiga yuboring.
                                    </p>

                                 </div>


                                 <br>
                                 <br>
                                 <br>
                                 <br>
                                 <div id="Manzil" class="tabcontent1" v-show="activeTab === 'Manzil'">
                                    <form action="#0" class="write__review" style="margin-top: 20px;">
                                       <div class="row g-4 justify-content-center"
                                          style="    position: relative; top: -60px;">
                                          <div class="col-lg-4 viloyat2">
                                             <div class="frm__grp">
                                                <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                                <select id="province" name="province" class="form-control"
                                                   v-model="selectedProvince2" @change="fetchDistricts2">
                                                   <option value="" disabled selected>Viloyat tanlang</option>
                                                   <option v-for="(name, id) in regions2" :key="name" :value="name">
                                                      {{ id }}
                                                   </option>
                                                </select>
                                             </div>
                                          </div>

                                          <div class="col-lg-4 tuman">
                                             <div class="frm__grp">
                                                <label for="district" class="fz-18 fw-500 inter title mb-16"></label>
                                                <select id="district" name="district" class="form-control"
                                                   v-model="selectedDistrict2">
                                                   <option value="" disabled selected>Tuman tanlang</option>
                                                   <option v-for="(name, id) in districts2" :key="id" :value="name.id">
                                                      {{ name.name }}
                                                   </option>
                                                </select>
                                             </div>
                                          </div>

                                          <div class="col-lg-4 manzil">
                                             <div class="frm__grp">
                                                <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                                <div style="position: relative;">
                                                   <input type="text" id="address" name="address" class="form-control"
                                                      placeholder="Manzil">
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <p style="color: blek; font-size: small; position: relative; top: -55px;">Aniqroq
                                          hisob-kitob uchun to‘liq manzilni kiriting</p>
                                    </form>
                                 </div>
                                 <div id="Pochtam" class="tabcontent1" v-show="activeTab === 'Pochtam'"
                                    style="    position: relative; top: -60px;">
                                    <h6 style="color: red; font-size: small;">Bu xizmat hozircha mavjud emas </h6>
                                 </div>
                                 <div id="Davlat" class="tabcontent1" v-show="activeTab === 'Davlat'">
                                    <div class="col-lg-4 index" style="width: 90%;">
                                       <div class="col-lg-4 viloyat" style="    position: relative; top: -60px;">
                                          <div class="frm__grp">
                                             <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                             <select id="province" name="province" class="form-control"
                                                style="    width: 200%;" v-model="selectedProvince3">
                                                <option value="" disabled selected>Qabul qiluvchi mamlakat</option>
                                                <option v-for="province in provinces" :key="province.id"
                                                   :value="province.id">
                                                   {{ province.name }}
                                                </option>
                                             </select>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <h3 class="title mb-20" style="    position: relative; top: -40px;">

                                 </h3>
                                 <div class="row" style="    position: relative; top: -60px;">
                                    <div class="col-lg-6 vesi left-align">
                                       <div class="frm__grp">
                                          <label for="vesi" class="fz-180 fw-500 inter title mb-16">Og'irligi</label>
                                          <input type="number" id="vesi" name="vesi" class="form-control"
                                             placeholder="gramm" v-model="weight">
                                       </div>
                                    </div>
                                    <div class="col-lg-6 vesi left-align">
                                       <div class="frm__grp">
                                          <label for="size" class="fz-180 fw-500 inter title mb-16">Hajmi</label>
                                          <select id="size" name="size" class="form-control">
                                             <option value="" disabled selected>Tanlang</option>
                                             <option value="10x20x30">10x20x30</option>
                                             <option value="25x30x40">25x30x40</option>
                                             <option value="35x38x45">35x38x45</option>
                                          </select>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="frm__grp mt-30" style="position: relative; top: -40px;">
                                    <button type="button" class="cmn--btn" @click="validateForm">
                                       <span>Hisoblash</span>
                                    </button>
                                 </div>
                              </div>
                           </form>


                        </div>




                     </div>
                  </div>
               </div>

               <div class="col-xl-4 col-lg-4">
                  <div class="basic__skilled__wrapper">
                     <div class="basic__boxskill mb-24 round16 bgwhite">
                        <span class="fz-18 d-block title inter mb-10 bborderdash">
                           Yuk tashish vaqtlari va xarajatlarini hisoblash uchun shaklni to'ldiring
                        </span>
                        <div class="form__price pb-24 d-flex align-items-center bborderdash">
                           <i class="bi bi-tags tags__icon"></i>
                           <span class="fz-16 d-flex align-items-center gap-2 fw-400 inter title">
                              Taxminan:
                              <span class="fssizing d-flex align-items-start gap-1">
                                 {{ totalPrice + " so'm" }}
                              </span>
                           </span>

                        </div>
                        <p v-if="showtotalMessage" style="color: red; font-size: small;">Yuqoridagi summa berilgan
                           og'irlikka nisbatan
                           o'zgarishi mumkin.</p>


                        <button type="button" class="cmn--btn" @click="nextPage">
                           <span>
                              Buyurtmani yaratish
                           </span>
                           <span>
                              <i class="bi bi-arrow-up-right"></i>
                           </span>
                        </button>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>

</template>


<script>
import axios from "axios";

export default {
   data() {
      return {
         address: '',
         index: null,
         weight: null,
         activeTab: 'Index',
         services: [], // Xizmatlar ro'yxati
         activeService: null, // Faol xizmat IDsi
         regions1: {},
         regions2: {},
         locations: {},
         selectedProvince3: '', // Regionlar ro'yxati
         selectedProvince1: '',
         selectedProvince2: '',
         selectedDistrict2: '', // Tanlangan viloyat
         selectedDistrict1: '', // Tanlangan tuman
         districts1: {},
         districts2: {}, // Districtlar ro'yxati
         provinces: {}, // Davlatlar ro'yxati
         totalPrice: 0,
         showError: false,
         showtotalMessage: false,// Xabarni ko'rsatish uchun bayroq
      };
   },
   methods: {
      nextPage() {
         const selectedService = this.services.find(service => service.id === this.activeService);
         if (this.activeTab === 'Index') {
            // Ma'lumotlarni ordering sahifasiga jo'natish
            this.$router.push({
               name: 'ordering',
               query: {
                  index: this.index,
                  province1: this.selectedProvince1,
                  district1: this.selectedDistrict1,
                  address: this.address,
                  weight: this.weight,
                  serviceId: this.activeService,
                  serviceName: selectedService.name,
                  activeTab: this.activeTab,
                  totalPrice: this.totalPrice,
               }
            });
         }
         if (this.activeTab === 'Manzil') {
            this.$router.push({
               name: 'ordering',
               query: {
                  index: this.index,
                  province1: this.selectedProvince1,
                  district1: this.selectedDistrict1,
                  address: this.address,
                  weight: this.weight,
                  serviceId: this.activeService, // tanlangan service ID
                  activeTab: this.activeTab,
                  province2: this.selectedProvince2,
                  district2: this.selectedDistrict2
               }
            });
         }
         if (this.activeTab === 'Pochtam') {
            // Ma'lumotlarni ordering sahifasiga jo'natish
            this.$router.push({
               name: 'ordering',
               query: {
                  index: this.index,
                  province: this.selectedProvince1,
                  district: this.selectedDistrict1,
                  address: this.address,
                  weight: this.weight,
                  serviceId: this.activeService,
                  serviceName: this.serviceName, // tanlangan service ID
                  activeTab: this.activeTab
               }
            });
         }
         if (this.activeTab === 'Davlat') {
            // Ma'lumotlarni ordering sahifasiga jo'natish
            this.$router.push({
               name: 'ordering',
               query: {
                  index: this.index,
                  province: this.selectedProvince1,
                  district: this.selectedDistrict1,
                  address: this.address,
                  weight: this.weight,
                  serviceId: this.activeService, // tanlangan service ID
                  activeTab: this.activeTab,
                  totalPrice: this.totalPrice
               }
            });
         }
      },






      async fetchServices() {
         try {
            const response = await axios.get("https://new.pochta.uz/api/v1/calculator/services/");
            const allowedServices = ["Posilka", "Xat", "Bir Qadam", "Mayda paketlar"];
            this.services = response.data.service_types.data.list
               .filter((service) => allowedServices.includes(service.name))
               .map((service) => ({
                  id: service.id,
                  name: service.name,
                  image: this.getServiceSVG(service.name),
               }));
            if (this.services.length > 0) {
               this.activeService = this.services[0].id;
            }
         } catch (error) {
            console.error("Xizmatlarni olishda xatolik:", error);
         }
      },



      getServiceSVG(serviceName) {
         switch (serviceName) {
            case "Posilka":
               return "assets/img/kalkulyator/posilka.svg";
            case "Xat":
               return "assets/img/kalkulyator/xat.svg";
            case "Bir Qadam":
               return "assets/img/kalkulyator/bir.svg";
            case "Mayda paketlar":
               return "assets/img/kalkulyator/paket.svg";
            default:
               return "@/assets/svg/default.svg";
         }
      },


      selectService(serviceId) {
         this.activeService = serviceId;
      },


      async fetchRegions1() {
         try {
            const response = await axios.get(
               "https://new.pochta.uz/api/v1/calculator/regions/uzb/"
            );
            this.regions1 = response.data;
         } catch (error) {
            console.error("Regionlarni olishda xatolik:", error);
         }
      },


      async fetchRegions2() {
         try {
            const response = await axios.get(
               "https://new.pochta.uz/api/v1/calculator/regions/uzb/"
            );
            // Regionlarni saqlash
            this.regions2 = response.data;
         } catch (error) {
            console.error("Regionlarni olishda xatolik:", error);
         }
      },

      async fetchDistricts1() {
         if (!this.selectedProvince1) {
            // Agar region tanlanmagan bo'lsa, districtlarni to'ldirishni to'xtatish
            this.districts1 = {}; // Districtlarni tozalash
            return;
         }
         try {
            const response = await axios.get(
               "https://new.pochta.uz/api/v1/calculator/locations-district/uzb/",
               {
                  params: {
                     ParentId: this.selectedProvince1, // Region IDsi bilan so'rov yuborish
                  },
               }
            );
            this.districts1 = response.data.data;
         } catch (error) {
            console.error("Districtlarni olishda xatolik:", error);
         }
      },


      async fetchDistricts2() {
         if (!this.selectedProvince2) {
            this.districts2 = {}; // Districtlarni tozalash
            return;
         }
         try {
            const response = await axios.get(
               "https://new.pochta.uz/api/v1/calculator/locations-district/uzb/",
               {
                  params: {
                     ParentId: this.selectedProvince2, // Region IDsi bilan so'rov yuborish
                  },
               }
            );
            this.districts2 = response.data.data;
         } catch (error) {
            console.error("Districtlarni olishda xatolik:", error);
         }
      },


      async fetchProvinces() {
         try {
            const response = await axios.get(
               "https://new.pochta.uz/api/v1/calculator/locations-others/uzb/"
            );
            this.provinces = response.data.data
         } catch (error) {
            console.error("Davlatlarni olishda xatolik:", error);
         }
      },
      validateForm() {
         if (this.activeTab === 'Index') {
            if (!this.selectedProvince1 || !this.selectedDistrict1 || !this.index || !this.weight) {
               this.totalPrice = 0;
               document.getElementById("error-message1").style.display = "block";
               setTimeout(() => {
                  document.getElementById("error-message1").style.display = "none";
               }, 5000);
            }
            else {
               this.showError = false;
               this.calculatePrice(); // Narxni hisoblash funksiyasini chaqirish
            }
         }
         if (this.activeTab === 'Manzil') {
            if (!this.selectedProvince1 || !this.selectedDistrict1 || !this.selectedDistrict2 || !this.weight) {
               this.totalPrice = 0;

               document.getElementById("error-message1").style.display = "block";
               setTimeout(() => {
                  document.getElementById("error-message1").style.display = "none";
               }, 5000);
            }
            else {
               this.showError = false;
               this.calculatePrice(); // Narxni hisoblash funksiyasini chaqirish
            }
         }
         if (this.activeTab === 'Davlat') {
            if (!this.selectedProvince1 || !this.selectedProvince3 || !this.weight) {
               this.totalPrice = 0;

               document.getElementById("error-message1").style.display = "block";
               setTimeout(() => {
                  document.getElementById("error-message1").style.display = "none";
               }, 5000);
            }
            else {
               this.showError = false;
               this.calculatePrice(); // Narxni hisoblash funksiyasini chaqirish
            }
         }



      },

      async calculatePrice() {
         if (this.activeTab === 'Index') {
            this.totalPrice = 0;
            try {
               const response = await axios.get(
                  "https://new.pochta.uz/api/v1/calculator/order-price-index/",
                  {
                     params: {
                        ServiceTypeId: this.activeService,
                        FromJurisdictionId: this.selectedDistrict1,
                        Weight: this.weight / 1000,
                        Index: this.index,
                     },
                  }
               );
               if (this.activeService === 136 && this.weight > 30000) {
                  document.getElementById("error-posilka").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-posilka").style.display = "none";
                  }, 5000);
                  this.totalPrice = 0;
               }

               if (this.activeService === 135 && this.weight > 2000) {
                  document.getElementById("error-maydapaket").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-maydapaket").style.display = "none";
                  }, 5000);
                  this.totalPrice = 0;
               }
               if (this.activeService === 33 && this.weight > 2000) {
                  document.getElementById("error-xat").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-xat").style.display = "none";
                  }, 5000);
                  this.totalPrice = 0;
               }
               if (this.activeService === 209 && this.weight > 20000) {
                  document.getElementById("error-birqadam").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-birqadam").style.display = "none";
                  }, 5000);
                  this.totalPrice = 0;
               }
               if (response.data[0].total === 0) {
                  document.getElementById("error-message").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-message").style.display = "none";
                  }, 5000);
                  this.totalPrice = 0;
               }



               this.totalPrice = response.data[0].data.list[0].price.total;
               this.showtotalMessage = true;

               document.getElementById("error-message").style.display = "none";


            } catch (error) {
               console.error("Narxni hisoblashda xatolik:", error);
               document.getElementById("error-message").style.display = "block";
               setTimeout(() => {
                  document.getElementById("error-message").style.display = "none";
               }, 5000);
               this.totalPrice = 0;

            }
         }
         if (this.activeTab === 'Manzil') {
            this.totalPrice = 0;

            try {
               const response = await axios.get(
                  "https://new.pochta.uz/api/v1/calculator/order-price/",
                  {
                     params: {
                        ServiceTypeId: this.activeService,
                        FromJurisdictionId: this.selectedDistrict1,
                        Weight: this.weight / 1000,
                        ToJurisdictionId: this.selectedDistrict2,
                     }
                  }
               );
               if (this.activeService === 136 && this.weight > 30000) {
                  document.getElementById("error-posilka").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-posilka").style.display = "none";
                  }, 5000);
               }

               if (this.activeService === 135 && this.weight > 2000) {
                  document.getElementById("error-maydapaket").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-maydapaket").style.display = "none";
                  }, 5000);
               }
               if (this.activeService === 33 && this.weight > 2000) {
                  document.getElementById("error-xat").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-xat").style.display = "none";
                  }, 5000);
               }
               if (this.activeService === 209 && this.weight > 20000) {
                  document.getElementById("error-birqadam").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-birqadam").style.display = "none";
                  }, 5000);
               }
               if (response.data[0].total === 0) {
                  document.getElementById("error-message").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-message").style.display = "none";
                  }, 5000);



               }
               this.totalPrice = response.data[0].data.list[0].price.total;
               this.showtotalMessage = true;

               document.getElementById("error-message").style.display = "none";


            } catch (error) {
               document.getElementById("error-message").style.display = "block";
               setTimeout(() => {
                  document.getElementById("error-message").style.display = "none";
               }, 5000);

            }
         }
         if (this.activeTab === 'Davlat') {
            this.totalPrice = 0;

            try {
               const response = await axios.get(
                  "https://new.pochta.uz/api/v1/calculator/order-price/",
                  {
                     params: {
                        ServiceTypeId: this.activeService,
                        FromJurisdictionId: this.selectedDistrict1,
                        Weight: this.weight / 1000,
                        ToJurisdictionId: this.selectedProvince3
                     }
                  }
               );
               if (this.activeService === 136 && this.weight > 30000) {
                  document.getElementById("error-posilka").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-posilka").style.display = "none";
                  }, 5000);
               }
               if (this.activeService === 135 && this.weight > 2000) {
                  document.getElementById("error-maydapaket").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-maydapaket").style.display = "none";
                  }, 5000);
               }
               if (this.activeService === 33 && this.weight > 2000) {
                  document.getElementById("error-xat").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-xat").style.display = "none";
                  }, 5000);
               }
               if (this.activeService === 209 && this.weight > 20000) {
                  document.getElementById("error-birqadam").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-birqadam").style.display = "none";
                  }, 5000);
               }
               if (response.data[0].total === 0) {
                  document.getElementById("error-message").style.display = "block";
                  setTimeout(() => {
                     document.getElementById("error-message").style.display = "none";
                  }, 5000);



               }
               this.totalPrice = response.data[0].data.list[0].price.total;
               this.showtotalMessage = true;

               document.getElementById("error-message").style.display = "none";
            } catch (error) {
               document.getElementById("error-message").style.display = "block";
               setTimeout(() => {
                  document.getElementById("error-message").style.display = "none";
               }, 5000);

            }
         }
      },
   },
   mounted() {
      // Komponent yuklanishi bilan regionlar, xizmatlar va davlatlarni olish
      this.fetchRegions1();
      this.fetchRegions2();
      this.fetchServices();
      this.fetchProvinces();
      // Davlatlar ro'yxatini olish
   },
};
</script>


<style>
.error-message1 {
   position: fixed;
   bottom: 20px;
   /* Ekraning pastki qismidan 20px yuqoriga */
   right: 20px;
   /* Ekranning o'ng qismidan 20px ichkariga */
   background-color: red;
   /* Xatolik rangini qizil qilish */
   color: white;
   /* Matn rangini oq qilish */
   padding: 10px 20px;
   /* Xabarni biroz o'ralash */
   border-radius: 5px;
   /* Burchaklarni yumaloq qilish */
   font-size: 16px;
   /* Matnning o'lchamini sozlash */
   display: none;
   /* Dastlab yashirish */
   z-index: 9999;
   /* Boshqa elementlardan yuqorida bo'lishi uchun */
}

.tablinks.active {
   background-color: #183e98;
   color: white;
}

.tabcontent {
   display: none;
}

.tabcontent[style*="display: block;"] {
   display: block;
}

.error-posilka {
   position: fixed;
   bottom: 20px;
   /* Ekraning pastki qismidan 20px yuqoriga */
   right: 20px;
   /* Ekranning o'ng qismidan 20px ichkariga */
   background-color: red;
   /* Xatolik rangini qizil qilish */
   color: white;
   /* Matn rangini oq qilish */
   padding: 10px 20px;
   /* Xabarni biroz o'ralash */
   border-radius: 5px;
   /* Burchaklarni yumaloq qilish */
   font-size: 16px;
   /* Matnning o'lchamini sozlash */
   display: none;
   /* Dastlab yashirish */
   z-index: 9999;
   /* Boshqa elementlardan yuqorida bo'lishi uchun */
}

.error-birqadam {
   position: fixed;
   bottom: 20px;
   /* Ekraning pastki qismidan 20px yuqoriga */
   right: 20px;
   /* Ekranning o'ng qismidan 20px ichkariga */
   background-color: red;
   /* Xatolik rangini qizil qilish */
   color: white;
   /* Matn rangini oq qilish */
   padding: 10px 20px;
   /* Xabarni biroz o'ralash */
   border-radius: 5px;
   /* Burchaklarni yumaloq qilish */
   font-size: 16px;
   /* Matnning o'lchamini sozlash */
   display: none;
   /* Dastlab yashirish */
   z-index: 9999;
   /* Boshqa elementlardan yuqorida bo'lishi uchun */
}

.error-xat {
   position: fixed;
   bottom: 20px;
   /* Ekraning pastki qismidan 20px yuqoriga */
   right: 20px;
   /* Ekranning o'ng qismidan 20px ichkariga */
   background-color: red;
   /* Xatolik rangini qizil qilish */
   color: white;
   /* Matn rangini oq qilish */
   padding: 10px 20px;
   /* Xabarni biroz o'ralash */
   border-radius: 5px;
   /* Burchaklarni yumaloq qilish */
   font-size: 16px;
   /* Matnning o'lchamini sozlash */
   display: none;
   /* Dastlab yashirish */
   z-index: 9999;
   /* Boshqa elementlardan yuqorida bo'lishi uchun */
}

.error-maydapaket {
   position: fixed;
   bottom: 20px;
   /* Ekraning pastki qismidan 20px yuqoriga */
   right: 20px;
   /* Ekranning o'ng qismidan 20px ichkariga */
   background-color: red;
   /* Xatolik rangini qizil qilish */
   color: white;
   /* Matn rangini oq qilish */
   padding: 10px 20px;
   /* Xabarni biroz o'ralash */
   border-radius: 5px;
   /* Burchaklarni yumaloq qilish */
   font-size: 16px;
   /* Matnning o'lchamini sozlash */
   display: none;
   /* Dastlab yashirish */
   z-index: 9999;
   /* Boshqa elementlardan yuqorida bo'lishi uchun */
}

.error-message {
   position: fixed;
   bottom: 20px;
   /* Ekraning pastki qismidan 20px yuqoriga */
   right: 20px;
   /* Ekranning o'ng qismidan 20px ichkariga */
   background-color: red;
   /* Xatolik rangini qizil qilish */
   color: white;
   /* Matn rangini oq qilish */
   padding: 10px 20px;
   /* Xabarni biroz o'ralash */
   border-radius: 5px;
   /* Burchaklarni yumaloq qilish */
   font-size: 16px;
   /* Matnning o'lchamini sozlash */
   display: none;
   /* Dastlab yashirish */
   z-index: 9999;
   /* Boshqa elementlardan yuqorida bo'lishi uchun */
}
</style>
