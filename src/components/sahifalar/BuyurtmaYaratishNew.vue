<template>
    <div v-if="toastMessage" id="toast-container" :class="toastType">
       {{ toastMessage }}
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
                            Buyurtma yaratish
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
                            </div>
                            <br />
                            <h3 class="title mb-20">
                               Kimdan
                            </h3>
                            <div class="row g-4 justify-content-right">
                               <div class="col-lg-4 viloyat" style="max-width: 40%; flex: 0 0 40%;">
                                  <div class="frm__grp" style="position: relative;" v-if="profile">
                                     <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                     <input type="text" id="from" name="from" class="form-control" placeholder="Kimdan"
                                        v-model="senderName">
                                  </div>
                               </div>
 
                               <div class="col-lg-4 tuman">
                                  <div class="frm__grp">
                                     <label for="phone_number2" class="fz-18 fw-500 inter title mb-16"></label>
                                     <input type="text" id="phone_number" name="phone_number" class="form-control"
                                        placeholder="Telefon raqam" v-model="senderPhone">
                                  </div>
                               </div>
                            </div>
                            <br>
 
 
 
 
 
                            <h3 class="title mb-20">
                               Qayerdan
                            </h3>
                            <form @submit.prevent="calculatePrice" class="write__review">
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
 
                                  <div class="col-lg-4 tuman">
                                     <div class="frm__grp">
                                        <label for="district1" class="fz-18 fw-500 inter title mb-16"></label>
                                        <select id="district1" name="district1" class="form-control"
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
                                              placeholder="Manzil" v-model="senderAddress">
 
                                        </div>
                                     </div>
                                  </div>
                                  <p style="color: blek; font-size: small;">Jo‘natuvchining shaharini yoki manzilini
                                     kiriting.</p>
                                  <br>
                                  <br>
                                  <h3 class="title mb-20">
                                     Kimga
                                  </h3>
                                  <div class="row g-4 justify-content-right">
                                     <div class="col-lg-4 viloyat" style="max-width: 40%; flex: 0 0 40%;">
                                        <div class="frm__grp">
                                           <label for="To" class="fz-18 fw-500 inter title mb-16"></label>
                                           <input type="text" id="to_whom" name="to_whom" class="form-control"
                                              placeholder="Kimga" v-model="receiverName">
                                        </div>
                                     </div>
 
                                     <!-- District Tanlash -->
                                     <div class="col-lg-4 tuman">
                                        <div class="frm__grp">
                                           <label for="phone_number2" class="fz-18 fw-500 inter title mb-16"></label>
                                           <input type="text" id="phone_number2" name="phone_number2"
                                              class="form-control" placeholder="Telefon raqam" v-model="receiverPhone">
                                        </div>
                                     </div>
 
 
                                  </div>
                                  <h3 class="title mb-20" style="margin-top: 30px;">
                                     Qayerga
                                  </h3>
 
                                  <div class="tabi bor" style="--bs-gutter-y: 5rem;     position: relative; top: -60px;">
                                     <button class="tablinks1" :class="{ active: $route.activeTab === 'Index' }"
                                        @click="activeTab = 'Index'" style="display: block;">
                                        <p>Index</p>
                                     </button>
                                     <button class="tablinks1" :class="{ active: activeTab === 'Manzil' }"
                                        @click="activeTab = 'Manzil'" id="firstTab" style="display: block;">
                                        <p>Manzil</p>
                                     </button>
                                     <button class="tablinks1" :class="{ active: activeTab === 'Pochtam' }"
                                        @click="activeTab = 'Pochtam'">
                                        <p>Pochtomat</p>
                                     </button>
                                     <button class="tablinks1" :class="{ active: activeTab === 'Davlat' }"
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
                                                 <label for="district2" class="fz-18 fw-500 inter title mb-16"></label>
                                                 <select id="district2" name="district2" class="form-control"
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
                                                       placeholder="Manzil" v-model="receiverAddress">
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
                                     <button type="submit" class="cmn--btn">
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
 
 
                         <button type="button" class="cmn--btn" @click="createOrder">
                            <span>
                               Buyurtmani rasmiylashtirish
                            </span>
                            <span>
                               <i class="bi bi-arrow-up-right"></i>
                            </span>
                         </button>
 
                         <p v-if="showContactMessage" style="color: green; font-size: small; margin-top: 10px;">
                            O'zingizga yaqin <a href="/map" style="color: blue; text-decoration: underline;">aloqa
                               bo'limiga</a> murojaat qiling!
                         </p>
                         <p v-show="isOrderVisible" style="color: green; font-size: 20px; margin-top: 10px;">
                            Ushbu shtrix kodni <a href="/profil"><strong>{{ orderNumber }}</strong></a>, jo'natma bilan birgalikda o'zingizga
                            yaqin
                            <a href="/map" style="color: blue; text-decoration: underline;">aloqa
                               bo'limiga </a>yetkazing.
                         </p>
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
         orderNumber: '',
          isOrderVisible: false, // Tegni ko'rsatish/yashirish holati
          toastMessage: null,
          toastType: 'success', // yoki 'error'
          token: localStorage.getItem("id_token"),
          senderName: '',
          senderPhone: '',
          senderAddress: this.$route.query.address || '',
          receiverPhone: '',
          receiverAddress: '',
          receiverName: '',
          profile: null,
          index: this.$route.query.index || null,
          weight: this.$route.query.weight,
          activeTab: this.$route.activeTab,
          services: [], // Xizmatlar ro'yxati
          activeService: this.$route.activeService || null, // Faol xizmat IDsi
          regions1: {},
          regions2: {},
          locations: {},
          selectedProvince3: '', // Regionlar ro'yxati
          selectedProvince1: this.$route.query.province1 || '',
          selectedProvince2: this.$route.query.province2 || '',
          selectedDistrict2: this.$route.query.district2 || '', // Tanlangan viloyat
          selectedDistrict1: this.$route.query.district1 || '', // Tanlangan tuman
          districts1: {},
          districts2: {}, // Districtlar ro'yxati
          provinces: {}, // Davlatlar ro'yxati
          totalPrice: this.$route.query.totalPrice || 0,
          showContactMessage: false,
          showtotalMessage: false,// Xabarni ko'rsatish uchun bayroq
       };
    },
    methods: {
       showToast(message, type) {
          this.toastMessage = message;
          this.toastType = type;
 
          // 5 soniyadan keyin xabarni yashirish
          setTimeout(() => {
             this.toastMessage = null;
          }, 5000);
       },
 
 
       async createOrder() {
          if (this.activeTab === 'Index') {
             try {
                const params = new URLSearchParams({
                   Weight: this.weight / 1000,
                   ServiceTypeId: this.activeService,
                   FromJurisDictionId: this.selectedDistrict1,
                   Index: this.index,
                   SenderName: this.senderName,
                   SenderPhoneNumber: this.senderPhone,
                   SenderAddress: this.senderAddress,
                   ReseipmentName: this.receiverName,
                   ReseipmentPhoneNumber: this.receiverPhone,
                   ReseipmentAddress: this.receiverAddress,
                });
                console.log(this.token)
                const url = `https://new.pochta.uz/api/v1/calculator/create/order/index/?${params.toString()}`;
 
                // So'rov yuborish
                const response = await axios.post(url, null, {
                   headers: {
                      'Authorization': `Bearer ${this.token}`,
                      'Content-Type': 'application/json',
                      'Accept': 'application/json',
                   }
                });
 
                if (response.status === 200) {
                   this.showToast('Buyurtma yaratildi!', 'success');
                   this.orderNumber = response.data.data.order_number; // Shtrix kodni saqlash
                   console.log(this.orderNumber)
                   this.isOrderVisible = true; // Tegni ko'rsatish
                   console.log(response)
                } else {
                   this.isOrderVisible = false; // Tegni yashirish
 
                   this.showToast('Buyurtma yaratishda xatolik yuz berdi.', 'error');
                }
             } catch (error) {
                console.error(error);
                this.isOrderVisible = false; // Tegni yashirish
 
                this.showToast('Buyurtma yaratishda xatolik yuz berdi.', 'error');
             }
          }
          else if (this.activeTab === 'Manzil') {
             try {
                const params = new URLSearchParams({
                   Weight: this.weight / 1000,
                   ServiceTypeId: this.activeService,
                   FromJurisDictionId: this.selectedDistrict1,
                   ToJurisDictionId: this.selectedDistrict2,
                   SenderName: this.senderName,
                   SenderPhoneNumber: this.senderPhone,
                   SenderAddress: this.senderAddress,
                   ReseipmentName: this.receiverName,
                   ReseipmentPhoneNumber: this.receiverPhone,
                   ReseipmentAddress: this.receiverAddress,
                });
                console.log(this.token)
                const url = `https://new.pochta.uz/api/v1/calculator/create/order/?${params.toString()}`;
 
                // So'rov yuborish
                const response = await axios.post(url, null, {
                   headers: {
                      'Authorization': `Bearer ${this.token}`,
                      'Content-Type': 'application/json',
                      'Accept': 'application/json',
                   }
                });
                if (response.status === 200) {
                   this.showToast('Buyurtma yaratildi!', 'success');
                   console.log(response)
 
                } else {
                   this.showToast('Buyurtma yaratishda xatolik yuz berdi.', 'error');
                }
             } catch (error) {
                console.error(error);
                this.showToast('Buyurtma yaratishda xatolik yuz berdi.', 'error');
             }
          }
          else {
             this.showToast("Aloqa bolimiga murojaat qiling!", 'error');
             this.showContactMessage = true;
          }
       },
       async fetchProfile() {
          const token = localStorage.getItem("id_token");
          if (!token) {
             alert("Token mavjud emas! Iltimos, qayta kiriting.");
             return;
          }
 
          try {
             const response = await axios.get(
                "https://new.pochta.uz/api/v1/public/profile/",
                {
                   headers: {
                      Authorization: `Bearer ${token}`, // Bearer tokenni yuborish
                   },
                }
             );
             this.profile = response.data;
          } catch (error) {
             console.error("Profilni olishda xatolik yuz berdi:", error);
             alert("Profil ma'lumotlarini olishda xatolik yuz berdi.");
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
             // Regionlarni saqlash
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
          console.log(typeof this.selectedProvince1)
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
                      ParentId: this.$route.params.province1 || this.selectedProvince1, // Region IDsi bilan so'rov yuborish
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
             // Agar region tanlanmagan bo'lsa, districtlarni to'ldirishni to'xtatish
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
             // API'dan olingan viloyatlarni provinces arrayga saqlash
             this.provinces = response.data.data
          } catch (error) {
             console.error("Davlatlarni olishda xatolik:", error);
          }
       },
 
 
       async calculatePrice() {
          if (this.activeTab === 'Index') {
             console.log(this.activeTab)
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
                this.totalPrice = response.data[0].data.list[0].price.total;
                this.showtotalMessage = true
                console.log(this.totalPrice)
             } catch (error) {
                console.error("Narxni hisoblashda xatolik:", error);
             }
          }
          if (this.activeTab === 'Manzil') {
             console.log(this.activeTab)
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
                this.totalPrice = response.data[0].data.list[0].price.total;
                this.showtotalMessage = true
 
             } catch (error) {
                console.error("Narxni hisoblashda xatolik", error);
             }
          }
          if (this.activeTab === 'Davlat') {
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
                this.totalPrice = response.data[0].data.list[0].price.total;
                this.showtotalMessage = true
 
             } catch (error) {
                console.log("Narxni hisoblashda xatolik", error)
             }
          }
       },
    },
 
 
    created() {
       this.fetchProfile();
    },
    mounted() {
       this.fetchRegions1();
       this.fetchDistricts1();
       this.fetchRegions2();
       this.fetchDistricts2();
       this.fetchServices();
       this.fetchProvinces();
    },
 };
 </script>
 
 <style>
 #toast-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: block;
 }
 
 .success {
    background-color: #4caf50;
 }
 
 .error {
    background-color: #f44336;
 }
 
 .toast {
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    min-width: 250px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
 }
 
 .toast.success {
    background-color: #4caf50;
 }
 
 .toast.error {
    background-color: #f44336;
 }
 
 @keyframes fadein {
    from {
       opacity: 0;
       transform: translateY(20px);
    }
 
    to {
       opacity: 1;
       transform: translateY(0);
    }
 }
 
 @keyframes fadeout {
    from {
       opacity: 1;
       transform: translateY(0);
    }
 
    to {
       opacity: 0;
       transform: translateY(20px);
    }
 }
 
 
 
 
 
 .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
 }
 
 .modal.show {
    visibility: visible;
    opacity: 1;
 }
 
 .modal-content {
    position: relative;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    width: 80%;
    max-width: 600px;
 }
 
 /* X tugmasi uchun styling */
 .close-btn {
    position: absolute;
    top: -8px;
    right: 10px;
    color: black;
    /* Qora rang */
    font-size: 24px;
    cursor: pointer;
 }
 
 .close-btn:hover {
    color: red;
    /* Tugmani ustiga kelinganda qizil rang */
 }
 
 #map-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 18px;
 }
 
 #map-btn:hover {
    background-color: #0056b3;
 }
 
 
 body {
    font-family: Arial;
    margin: 0;
 }
 
 /* Style the tab container */
 .tab {
    display: flex;
    justify-content: space-between;
    border: 1px solid #e0e2e7;
    background-color: #e6effd;
 }
 
 /* Style each tab */
 .tab button {
    background-color: inherit;
    flex: 1;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 2px;
    transition: 0.3s;
    font-size: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 }
 
 /* Change background color of buttons on hover */
 .tab button:hover {
    background-color: rgba(13, 71, 161, 0.2);
 }
 
 /* Create an active/current tablink class */
 .tab button.active {
    background-color: rgb(197 212 235);
 }
 
 /* Style the tab content */
 .tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #cccccc00;
    border-top: none;
 }
 
 /* Style the tab content */
 .bor {
    box-sizing: border-box;
    border-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
 }
 
 button.tablinks1 {
    box-sizing: border-box;
    border-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
 }
 
 
 .tabi.bor {
    border: 1px solid #dfe0e4;
    padding: 0px;
    text-align: left;
 }
 
 body {
    font-family: Arial;
    margin: 0;
 }
 
 /* Style the tab container */
 .tabi {
    display: flex;
    justify-content: space-between;
    border: 1px solid #00000047;
    background-color: #f3f6fa;
    padding: 10px;
    border: 1px solid black;
 }
 
 /* Style each tab */
 .tabi button {
    background-color: inherit;
    flex: 1;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 2px;
    transition: 0.3s;
    font-size: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 }
 
 /* Change background color of buttons on hover */
 .tabi button:hover {
    background-color: rgba(13, 71, 161, 0.2);
 }
 
 /* Create an active/current tablink class */
 .tabi button.active {
    background-color: rgba(13, 71, 161, 0.2);
 }
 
 /* Style the tab content */
 .tabicontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #cccccc00;
    border-top: none;
 }
 
 /* Style the tab content */
 .bor {
    box-sizing: border-box;
    border-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
 }
 
 .tabi.bor {
    --bs-gutter-y: 1.5rem;
 }
 
 button#defaultOpen {
    border-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
 }
 
 button.tablinks {
    border-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
 }
 
 .viloyat,
 .tuman,
 .manzil {
    flex: 0 0 27%;
    max-width: 27%;
 }
 
 .manzil {
    flex: 0 0 46%;
    max-width: 46%;
 }
 
 @media (max-width: 1400px) {
 
    .viloyat,
    .tuman,
    .manzil {
       flex: 0 0 100%;
       max-width: 100%;
    }
 }
 
 form.write__review {
    padding: 0px 0px;
 }
 
 .tabi.bor {
    width: 100%;
 }
 
 a.cmn--btn.mt-30.d-flex.justify-content-center.d-block {
    background: #183e98;
 }
 </style>