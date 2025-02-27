<template>
   <div id="error-message" class="error-message" style="display: none;">
      {{ $t('price_calculation_failed') }}
   </div>
   <div id="error-posilka" class="error-posilka" style="display: none;">
      {{ $t('parcel_weight_exceeded') }}
   </div>
   <div id="error-maydapaket" class="error-maydapaket" style="display: none;">
      {{ $t('small_packet_weight_exceeded') }}
   </div>
   <div id="error-xat" class="error-xat" style="display: none;">
      {{ $t('letter_weight_exceeded') }}
   </div>
   <div id="error-birqadam" class="error-birqadam" style="display: none;">
      {{ $t('single_step_weight_exceeded') }}
   </div>
   <div id="error-message1" class="error-message1" style="display: none;">
      {{ $t('fill_all_fields') }}
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
                        <span class="d41 mb-24">
                           {{ $t('calculator') }}
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
                           {{ $t('place_parcel') }}
                        </p>
                        <p class="fz-18 fw-400 inter pra" style="color: #183e98;">
                           {{ $t('calculate_time_cost') }}
                        </p>
                        <br>

                        <div class="tab bor">
                           <button v-for="service in services" :key="service.id" class="tablinks"
                              :class="{ active: activeService === service.id }" @click="selectService(service.id)">
                              <img :src="service.image" alt="" style="width:30px;height:30px;" />
                              <p>
                                 <!-- Shartli tarjimalar -->
                                 <span v-if="service.id === 136">{{ $t('parcel') }}</span>
                                 <span v-else-if="service.id === 135">{{ $t('Small_packages') }}</span>
                                 <span v-else-if="service.id === 33">{{ $t('letter') }}</span>
                                 <span v-else-if="service.id === 209">Bir qadam</span>
                                 <span v-else>{{ service.name[currentLanguage] }}</span>
                              </p>
                           </button>
                        </div>


                        <br>

                        <div v-for="service in services" :key="service.id" :id="service.id" class="tabcontent"
                           style="display: block;" v-show="activeService === service.id">
                           <div class="tab bor" style="color: #183e98;">
                              <p v-if="service.id === 136" class="service-description">
                                 {{ $t('parcel_info') }}
                              </p>
                              <p v-if="service.id === 135" class="service-description">
                                 {{ $t('parcel_small_info') }}
                              </p>
                              <p v-if="service.id === 33" class="service-description">
                                 {{ $t('letter_info') }}
                              </p>
                              <p v-if="service.id === 209" class="service-description">
                                 {{ $t('bir_qadam_info') }}
                              </p>
                           </div>
                           <br />



                           <form class="write__review">
                              <div class="row g-4 justify-content-center">
                                 <!-- Region Tanlash -->
                                 <div class="bordered-container">
                                    <h3 class="title mb-20">
                                       {{ $t('from_where') }}
                                    </h3>
                                    <div class="flex-container">
                                       <div class="col-lg-4 viloyat"
                                          :class="{ error: !selectedProvince1 && showErrorRegion1 }">

                                          <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                          <div class="select-wrapper">
                                             <select id="province" name="province" class="form-control"
                                                v-model="selectedProvince1" @change="fetchDistricts1">
                                                <option value="" disabled selected>{{ $t('choose_region') }}</option>
                                                <option v-for="(name, id) in regions1" :key="name" :value="name">
                                                   {{ id }}
                                                </option>
                                             </select>
                                             <span v-if="!selectedProvince1" class="red-star">*</span>
                                          </div>
                                       </div>

                                       <!-- District Tanlash -->
                                       <div class="col-lg-4 tuman"
                                          :class="{ error: !selectedDistrict1 && showErrorDistrict1 }">

                                          <label for="district" class="fz-18 fw-500 inter title mb-16"></label>
                                          <div class="select-wrapper">
                                             <select id="district" name="district" class="form-control"
                                                v-model="selectedDistrict1">
                                                <option value="" disabled selected>
                                                   {{ $t('choose_district') }}
                                                </option>
                                                <option v-for="(name, id) in districts1" :key="id" :value="name.id">
                                                   {{ name.name }}
                                                </option>
                                             </select>
                                             <span v-if="!selectedDistrict1" class="red-star">*</span>
                                          </div>
                                       </div>






                                       <div class="col-lg-4 manzil">
                                          <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                          <div class="select-wrapper">

                                             <div style="position: relative;">
                                                <input type="text" id="address" name="address" class="form-control"
                                                   :placeholder="$t('Address')" v-model="address">
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <p style="color: blek; font-size: small;">{{ $t('sender_address') }}</p>
                                 </div>
                                 
                                 <div class="bordered-container">

                                    <h3 class="title mb-20" style="margin-top: 30px;">
                                       {{ $t('to_where') }}
                                    </h3>

                                    <div class="tabi bor"
                                       style="--bs-gutter-y: 5rem;     position: relative; top: 10px;">
                                       <button class="tablinks1" type="button"
                                          :class="{ active: activeTab === 'Index' }" @click="activeTab = 'Index'"
                                          >
                                          <p>{{ $t('index') }}</p>
                                       </button>
                                       <button class="tablinks1" type="button"
                                          :class="{ active: activeTab === 'Manzil' }" @click="activeTab = 'Manzil'"
                                          id="firstTab" >
                                          <p>{{ $t('address2') }}</p>
                                       </button>
                                       <button class="tablinks1" type="button"
                                          :class="{ active: activeTab === 'Pochtam' }" @click="activeTab = 'Pochtam'">
                                          <p>{{ $t('postomat') }}</p>
                                       </button>
                                       <button class="tablinks1" type="button"
                                          :class="{ active: activeTab === 'Davlat' }" @click="activeTab = 'Davlat'"
                                          v-if="activeService !== 209">
                                          <!-- Agar "Bir qadam" tanlanmagan bo‘lsa ko‘rinadi -->
                                          <p>{{ $t('other_countries') }}</p>
                                       </button>
                                    </div>
                                    <div class="flex-container" style="top: 10px;">
                                       <div id="Index" class="tabcontent1" v-show="activeTab === 'Index'">
                                          <div class="col-lg-4 index">
                                             <label for="index" class="fz-18 fw-500 inter title mb-16">
                                             </label>
                                             <div class="input-wrapper">
                                                <input style="    position: relative; top: 15x;" type="text" id="index"
                                                   name="index" class="form-control" :placeholder="$t('enter_index')"
                                                   v-model="index" />
                                                <span v-if="!index" class="red-starinput">*</span>
                                             </div>
                                          </div>
                                          <p style="color: black; font-size: small; position: relative; top: 10px;">
                                             <router-link :to="{ name: 'map' }" style="color: blue;">
                                                {{ $t('index') }}
                                             </router-link>
                                             {{ $t('index_note') }}
                                          </p>
                                       </div>
                                    </div>

                                    <div id="Manzil" class="tabcontent1" v-show="activeTab === 'Manzil'">
                                       <div class="flex-container">
                                          <div class="col-lg-4 viloyat"
                                             :class="{ error: !selectedProvince2 && showErrorRegion2 }">
                                             <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                             <div class="select-wrapper">
                                                <select id="province" name="province" class="form-control"
                                                   v-model="selectedProvince2" @change="fetchDistricts2">
                                                   <option value="" disabled selected>{{ $t('choose_region') }}
                                                   </option>
                                                   <option v-for="(name, id) in regions2" :key="name" :value="name">
                                                      {{ id }}
                                                   </option>
                                                </select>
                                                <span v-if="!selectedProvince2" class="red-star">*</span>
                                             </div>
                                          </div>

                                          <div class="col-lg-4 tuman"
                                             :class="{ error: !selectedDistrict2 && showErrorDistrict2 }">
                                             <label for="district" class="fz-18 fw-500 inter title mb-16"></label>
                                             <div class="select-wrapper">
                                                <select id="district" name="district" class="form-control"
                                                   v-model="selectedDistrict2">
                                                   <option value="" disabled selected>
                                                      {{ $t('choose_district') }}
                                                   </option>
                                                   <option v-for="(name, id) in districts2" :key="id" :value="name.id">
                                                      {{ name.name }}
                                                   </option>
                                                </select>
                                                <span v-if="!selectedDistrict2" class="red-star">*</span>
                                             </div>
                                          </div>

                                          <div class="col-lg-4 manzil">
                                             <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                             <div class="select-wrapper">

                                                <div style="position: relative;">
                                                   <input type="text" id="address" name="address" class="form-control"
                                                      :placeholder="$t('recipient_address')">
                                                </div>
                                             </div>
                                          </div>


                                       </div>
                                       <p style="color: blek; font-size: small; position: relative; top: 10px;">
                                          {{ $t('address_note') }}</p>
                                    </div>

                                    <div class="flex-container">

                                       <div id="Pochtam" class="tabcontent1" v-show="activeTab === 'Pochtam'"
                                          style="    position: relative; top: 10px;">
                                          <h6 style="color: red; font-size: small;">{{ $t('service_unavailable') }}
                                          </h6>
                                       </div>
                                    </div>
                                    <div id="Davlat" class="tabcontent1" v-show="activeTab === 'Davlat'">
                                       <div class="flex-container">
                                          <div class="col-lg-4 viloyat"
                                             :class="{ error: !selectedProvince3 && showErrorProvince3 }">
                                             <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                             <div class="select-wrapper">
                                                <select id="province" name="province" class="form-control"
                                                   style="    width: 100%;" v-model="selectedProvince3">
                                                   <option value="" disabled selected>{{ $t('Host_Country') }}
                                                   </option>
                                                   <option v-for="province in provinces" :key="province.id"
                                                      :value="province.id">
                                                      {{ province.name }}
                                                   </option>
                                                </select>
                                                <span v-if="!selectedProvince3" class="red-star">*</span>
                                             </div>
                                          </div>

                                       </div>
                                    </div>
                                 </div>
                                 <div class="row" style="    position: relative; top: -60px;">
                                    <div class="col-lg-6 vesi left-align">
                                       <div class="frm__grp">
                                          <label for="vesi" class="fz-180 fw-500 inter title mb-16">{{ $t('weight')
                                          }}</label>
                                          <div class="input-wrapper">

                                             <input type="number" id="vesi" name="vesi" class="form-control"
                                                :placeholder="$t('choose_weight_unit')" v-model="weight">
                                             <span v-if="!weight" class="red-star">*</span>
                                          </div>
                                       </div>
                                    </div>
                                    <!-- <div class="col-lg-6 vesi left-align">
                                       <div class="frm__grp">
                                          <label for="size" class="fz-180 fw-500 inter title mb-16">{{ $t('size')
                                             }}</label>
                                          <select id="size" name="size" class="form-control">
                                             <option value="" disabled selected>{{ $t('choose_size') }}</option>
                                             <option value="10x20x30">10x20x30</option>
                                             <option value="25x30x40">25x30x40</option>
                                             <option value="35x38x45">35x38x45</option>
                                          </select>
                                       </div>
                                    </div> -->
                                 </div>
                                 <div class="frm__grp mt-30" style="position: relative; top: -40px;">
                                    <button type="button" class="cmn--btn" @click="validateForm">
                                       <span>{{ $t('calculate') }}</span>
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
                           {{ $t('cost_estimation') }}
                        </span>
                        <div class="form__price pb-24 d-flex align-items-center bborderdash">
                           <i class="bi bi-tags tags__icon"></i>
                           <span class="fz-16 d-flex align-items-center gap-2 fw-400 inter title">
                              {{ $t('approximate_cost') }}
                              <span class="fssizing d-flex align-items-start gap-1">
                                 {{ totalPrice + $t('summ') }}
                              </span>
                           </span>

                        </div>
                        <p v-if="showtotalMessage" style="color: red; font-size: small;">
                           {{ $t('stated_amount_may') }}
                        </p>


                        <button type="button" class="cmn--btn" @click="nextPage">
                           <span>
                              {{ $t('create_order') }}
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
               return "https://new.pochta.uz/media/posilka.svg";
            case "Xat":
               return "https://new.pochta.uz/media/xat.svg";
            case "Bir Qadam":
               return "https://new.pochta.uz/media/bir.svg";
            case "Mayda paketlar":
               return "https://new.pochta.uz/media/paket.svg";
            default:
               return "https://new.pochta.uz/media/default.svg";
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
.bordered-container {
   border: 2px solid black;
   padding: 15px;
   margin: 20px;
   border-radius: 10px;
   background-color: #e6effd;
}

.flex-container {
   display: flex;
   flex-direction: row;
   gap: 5px;
   margin-top: 20px;
   flex-wrap: wrap;
}


.col-lg-4 {
   flex: 1 1 calc(33.33% - 10px);
   /* 3 ta element yonma-yon */
   min-width: 100px;
}

.viloyat {
   order: 1;
   /* Viloyat birinchi */
}

.tuman {
   order: 2;
   /* Tuman ikkinchi */
}

.manzil {
   order: 3;
   /* Manzil uchinchi */
}

p {
   color: black;
}

.select-wrapper {
   width: 200px;
   /* Kengligini 150px qilish */
   padding: 5px;
   /* Ichki bo'shliqni kamaytirish */
}

.select-wrapper select {
   width: 100%;
   /* Select maydonining kengligini 100% qilish */
   padding: 8px;
   /* Select maydonidagi ichki bo'shliqni kamaytirish */
   font-size: 14px;
   /* Shrify o'lchamini kichiklashtirish */
   box-sizing: border-box;
   -webkit-appearance: none;
   appearance: none;
}

/* Media Query for smaller screens (e.g., mobile devices) */
@media (max-width: 768px) {
   .flex-container {
      flex-wrap: wrap;
      flex-direction: row;
   }

   .col-lg-4 {
      flex: 1 1 100%;
      /* Make each column take up the full width on smaller screens */
      margin-bottom: 15px;
      /* Add some space between the columns */
   }

   .viloyat,
   .tuman .manzil {
      flex: 1 1 calc(50% - 5px);
      /* Viloyat va tuman yonma-yon */
      min-width: 48%;
   }

}


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

.select-wrapper {
   position: relative;
}

.red-star {
   color: red;
   font-weight: bold;
   position: absolute;
   top: 30%;
   right: 10px;
   transform: translateY(-50%);
   font-size: 18px;
}

.input-wrapper {
   position: relative;
}

.red-starinput {
   color: red;
   font-weight: bold;
   position: absolute;
   top: 10px;
   right: 5px;
   transform: translateY(-50%);
   font-size: 18px;
}

.select-wrapperother {
   position: relative;
}

.red-starother {
   color: red;
   font-weight: bold;
   position: absolute;
   top: 10px;
   right: -170px;
   transform: translateY(-50%);
   font-size: 18px;
}


.service-description {
   flex: 1;
   /* Har bir gap bir xil joy egallaydi */
   min-height: 100px;
   /* Minimal balandlik */
   padding: 10px;
   box-sizing: border-box;
   text-align: justify;
}
</style>
