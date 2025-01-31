<template>
   <div id="error-message" class="error-message" style="display: none;">
      {{ $t('Error_in_price') }}
   </div>
   <div id="error-posilka" class="error-posilka" style="display: none;">
      {{ $t('package_weight') }}
   </div>
   <div id="error-maydapaket" class="error-maydapaket" style="display: none;">
      {{ $t('package_weight_small') }}
   </div>
   <div id="error-xat" class="error-xat" style="display: none;">
      {{ $t('letter_weight') }}
   </div>
   <div id="error-birqadam" class="error-birqadam" style="display: none;">
      {{ $t('parcel_single') }}
   </div>
   <div id="error-message1" class="error-message1" style="display: none;">
      {{ $t('Fill_in_all') }}
   </div>
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
                           {{ $t('create_order') }}
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
                           {{ $t('Place_package_letter') }}
                        </p>
                        <p class="fz-18 fw-400 inter pra" style="color: #183e98;">
                           {{ $t('Calculate_cost_time') }}
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
                           <h3 class="title mb-20">
                              {{ $t('from') }}
                           </h3>
                           <div class="row g-4 justify-content-right">
                              <div class="col-lg-4 viloyat" style="max-width: 40%; flex: 0 0 40%;">
                                 <div class="frm__grp" style="position: relative;" v-if="profile">
                                    <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                    <div class="input-wrapperfrom">
                                       <input type="text" id="from" name="from" class="form-control"
                                          :placeholder="$t('from')" v-model="senderName">
                                       <span v-if="!senderName" class="red-starinputfrom">*</span>
                                    </div>

                                 </div>
                              </div>

                              <div class="col-lg-4 tuman">
                                 <div class="frm__grp">
                                    <label for="phone_number2" class="fz-18 fw-500 inter title mb-16"></label>
                                    <div class="input-wrapperphone">
                                       <input type="text" id="phone_number" name="phone_number" class="form-control"
                                          :placeholder="$t('phone_number')" v-model="senderPhone">
                                       <span v-if="!senderPhone" class="red-starphone">*</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <br>





                           <h3 class="title mb-20">
                              {{ $t('from_where') }}
                           </h3>
                           <form class="write__review">
                              <div class="row g-4 justify-content-center">
                                 <!-- Region Tanlash -->


                                 <div class="col-lg-4 viloyat">
                                    <div class="frm__grp" :class="{ error: !selectedProvince1 && showErrorRegion1 }">
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
                                 </div>


                                 <div class="col-lg-4 tuman">
                                    <div class="frm__grp" :class="{ error: !selectedDistrict1 && showErrorDistrict1 }">
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
                                 </div>

                                 <div class="col-lg-4 manzil">
                                    <div class="frm__grp">
                                       <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                       <div style="position: relative;">
                                          <div class="input-wrapperfrom">

                                             <input type="text" id="address" name="address" class="form-control"
                                                :placeholder="$t('Address')" v-model="senderAddress">
                                             <span v-if="!senderAddress" class="red-starinputfrom">*</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <p style="color: blek; font-size: small;">{{ $t('enter_city_address') }}</p>
                                 <br>
                                 <br>
                                 <h3 class="title mb-20">
                                    {{ $t('to_whom') }}
                                 </h3>
                                 <div class="row g-4 justify-content-right">
                                    <div class="col-lg-4 viloyat" style="max-width: 40%; flex: 0 0 40%;">
                                       <div class="frm__grp">
                                          <label for="To" class="fz-18 fw-500 inter title mb-16"></label>
                                          <div class="input-wrapperfrom">

                                             <input type="text" id="to_whom" name="to_whom" class="form-control"
                                                :placeholder="$t('to_whom')" v-model="receiverName">
                                             <span v-if="!receiverName" class="red-starinputfrom">*</span>

                                          </div>
                                       </div>
                                    </div>

                                    <!-- District Tanlash -->
                                    <div class="col-lg-4 tuman">
                                       <div class="frm__grp">
                                          <label for="phone_number2" class="fz-18 fw-500 inter title mb-16"></label>
                                          <div class="input-wrapperphone">
                                             <input type="text" id="phone_number2" name="phone_number2"
                                                class="form-control" :placeholder="$t('phone_number')"
                                                v-model="receiverPhone">
                                             <span v-if="!receiverPhone" class="red-starphone">*</span>
                                          </div>
                                       </div>
                                    </div>


                                 </div>
                                 <h3 class="title mb-20" style="margin-top: 30px;">
                                    {{ $t('to_where') }}
                                 </h3>

                                 <div class="tabi bor" style="--bs-gutter-y: 5rem;     position: relative; top: -60px;">
                                    <button class="tablinks1" type="button"
                                       :class="{ active: $route.activeTab === 'Index' }" @click="activeTab = 'Index'"
                                       style="display: block;">
                                       <p>{{ $t('index') }}</p>
                                    </button>
                                    <button class="tablinks1" type="button" :class="{ active: activeTab === 'Manzil' }"
                                       @click="activeTab = 'Manzil'" id="firstTab" style="display: block;">
                                       <p>{{ $t('address2') }}</p>
                                    </button>
                                    <button class="tablinks1" type="button" :class="{ active: activeTab === 'Pochtam' }"
                                       @click="activeTab = 'Pochtam'">
                                       <p>{{ $t('postomat') }}</p>
                                    </button>
                                    <button class="tablinks1" type="button" :class="{ active: activeTab === 'Davlat' }"
                                       @click="activeTab = 'Davlat'" v-if="activeService !== 209">
                                       <!-- Agar "Bir qadam" tanlanmagan bo‘lsa ko‘rinadi -->
                                       <p>{{ $t('other_countries') }}</p>
                                    </button>
                                 </div>

                                 <div id="Index" class="tabcontent1" v-show="activeTab === 'Index'">
                                    <div class="col-lg-4 index">
                                       <div class="frm__grp">

                                          <label for="index" class="fz-18 fw-500 inter title mb-16">
                                          </label>
                                          <div class="input-wrapper">

                                             <input style="    position: relative; top: -60px;" type="text" id="index"
                                                name="index" class="form-control" :placeholder="$t('enter_index')"
                                                v-model="index" />
                                             <span v-if="!index" class="red-starinput">*</span>
                                          </div>
                                       </div>
                                    </div>
                                    <p style="color: black; font-size: small; position: relative; top: -55px;">
                                       <router-link :to="{ name: 'map' }" style="color: blue;">
                                          {{ $t('index') }}
                                       </router-link>
                                       {{ $t('index_note') }}
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
                                          <div class="col-lg-4 viloyat">
                                             <div class="frm__grp"
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
                                          </div>

                                          <div class="col-lg-4 tuman">
                                             <div class="frm__grp"
                                                :class="{ error: !selectedDistrict2 && showErrorDistrict2 }">
                                                <label for="district" class="fz-18 fw-500 inter title mb-16"></label>
                                                <div class="select-wrapper">
                                                   <select id="district" name="district" class="form-control"
                                                      v-model="selectedDistrict2">
                                                      <option value="" disabled selected>
                                                         {{ $t('choose_district') }}
                                                      </option>
                                                      <option v-for="(name, id) in districts2" :key="id"
                                                         :value="name.id">
                                                         {{ name.name }}
                                                      </option>
                                                   </select>
                                                   <span v-if="!selectedDistrict2" class="red-star">*</span>
                                                </div>
                                             </div>
                                          </div>

                                          <div class="col-lg-4 manzil">
                                             <div class="frm__grp">
                                                <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                                <div class="input-wrapperfrom">

                                                   <input type="text" id="address" name="address" class="form-control"
                                                      :placeholder="$t('recipient_address')" v-model="senderAddress">
                                                   <span v-if="!senderAddress" class="red-starinputfrom">*</span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <p style="color: blek; font-size: small; position: relative; top: -55px;">
                                          {{ $t('address_note') }}</p>
                                    </form>
                                 </div>
                                 <div id="Pochtam" class="tabcontent1" v-show="activeTab === 'Pochtam'"
                                    style="    position: relative; top: -60px;">
                                    <h6 style="color: red; font-size: small;">{{ $t('service_unavailable') }} </h6>
                                 </div>
                                 <div id="Davlat" class="tabcontent1" v-show="activeTab === 'Davlat'">
                                    <div class="col-lg-4 viloyat" style="position: relative; top: -60px;">
                                       <div class="frm__grp"
                                          :class="{ error: !selectedProvince3 && showErrorProvince3 }">>
                                          <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                          <div class="select-wrapper">
                                             <select id="province" name="province" class="form-control"
                                                style="    width: 100%;" v-model="selectedProvince3">
                                                <option value="" disabled selected>{{ $t('Host_Country') }}</option>
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
                                 <h3 class="title mb-20" style="    position: relative; top: -40px;">

                                 </h3>
                                 <div class="row" style="    position: relative; top: -60px;">
                                    <div class="col-lg-6 vesi left-align">
                                       <div class="frm__grp">
                                          <label for="vesi" class="fz-180 fw-500 inter title mb-16">{{ $t('weight')
                                             }}</label>
                                          <div class="input-wrapper">

                                             <input type="number" id="vesi" name="vesi" class="form-control"
                                                :placeholder="$t('choose_weight_unit')" v-model="weight">
                                             <span v-if="!weight" class="red-star">*</span>
                                             <!-- Yulduzcha faqat input bo'sh bo'lsa ko'rinadi -->

                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-lg-6 vesi left-align">
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
                                    </div>
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
                           {{ $t('cost_estimation') }} </span>
                        <div class="form__price pb-24 d-flex align-items-center bborderdash">
                           <i class="bi bi-tags tags__icon"></i>
                           <span class="fz-16 d-flex align-items-center gap-2 fw-400 inter title">
                              {{ $t('approximate_cost') }}
                              <span class="fssizing d-flex align-items-start gap-1">
                                 {{ totalPrice + $t('summ') }}
                              </span>
                           </span>

                        </div>
                        <p v-if="showtotalMessage" style="color: red; font-size: small;"> {{ $t('stated_amount_may') }}
                        </p>


                        <button type="button" class="cmn--btn" @click="validateOrder">
                           <span>
                              {{ $t('place_order') }} </span>
                           <span>
                              <i class="bi bi-arrow-up-right"></i>
                           </span>
                        </button>

                        <p v-if="showContactMessage" style="color: green; font-size: small; margin-top: 10px;">
                           {{ $t('branch_Contact') }}
                        </p>
                        <p v-show="isOrderVisible" style="color: green; font-size: 20px; margin-top: 10px;">
                           {{ $t('This_barcode') }}
                           <a href="/profil"><strong>{{ orderNumber }}</strong></a><button @click="copyOrderNumber"
                              class="copy-button">
                              <i class="fa fa-copy" style="color: green; font-size: 15px;"></i> <!-- Icon -->
                           </button>{{ $t('Deliver_shipment') }}
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
         showtotalMessage: false,
         showError: false,
         // Xabarni ko'rsatish uchun bayroq
      };
   },
   methods: {

      copyOrderNumber() {
         const el = document.createElement('textarea'); // Yangi textarea yaratamiz
         el.value = this.orderNumber; // orderNumber ni textarea ga joylashtiramiz
         document.body.appendChild(el); // Body ga qo'shamiz
         el.select(); // Tanlash
         document.execCommand('copy'); // Nusxalash
         document.body.removeChild(el); // Textarea ni body dan olib tashlaymiz

         // Istalgan xabarni foydalanuvchiga ko'rsatish uchun
      },


      showToast(message, type) {
         this.toastMessage = message;
         this.toastType = type;

         // 5 soniyadan keyin xabarni yashirish
         setTimeout(() => {
            this.toastMessage = null;
         }, 5000);
      },

      validateOrder() {
         if (this.activeTab === 'Index') {
            if (!this.senderName || !this.senderPhone || !this.senderAddress || !this.selectedProvince1 || !this.selectedDistrict1 || !this.receiverName || !this.receiverPhone || !this.index || !this.weight) {
               this.totalPrice = 0;
               document.getElementById("error-message1").style.display = "block";
               setTimeout(() => {
                  document.getElementById("error-message1").style.display = "none";
               }, 5000);
            }
            else {
               this.showError = false;
               this.createOrder(); // Narxni hisoblash funksiyasini chaqirish
            }
         }
         if (this.activeTab === 'Manzil') {
            if (!this.senderName || !this.senderPhone || !this.senderAddress || !this.selectedProvince1 || !this.selectedDistrict1 || !this.receiverName || !this.receiverPhone || !this.selectedDistrict2 || !this.weight) {
               this.totalPrice = 0;

               document.getElementById("error-message1").style.display = "block";
               setTimeout(() => {
                  document.getElementById("error-message1").style.display = "none";
               }, 5000);
            }
            else {
               this.showError = false;
               this.createOrder(); // Narxni hisoblash funksiyasini chaqirish
            }
         }
         if (this.activeTab === 'Davlat') {
            if (!this.senderName || !this.senderPhone || !this.senderAddress || !this.selectedProvince1 || !this.selectedDistrict1 || !this.receiverName || !this.receiverPhone || !this.selectedProvince3 || !this.weight) {
               this.totalPrice = 0;

               document.getElementById("error-message1").style.display = "block";
               setTimeout(() => {
                  document.getElementById("error-message1").style.display = "none";
               }, 5000);
            }
            else {
               this.showError = false;
               this.createOrder(); // Narxni hisoblash funksiyasini chaqirish
            }
         }
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
               const url = `https://new.pochta.uz/api/v1/calculator/create/order/index/?${params.toString()}`;

               // So'rov yuborish
               const response = await axios.post(url, null, {
                  headers: {
                     'Authorization': `Bearer ${this.token}`,
                     'Content-Type': 'application/json',
                     'Accept': 'application/json',
                  }
               });

               if (response.status === 200 && response.data.data.order_number) {
                  this.showToast(this.$t('Order_created'), 'success');
                  this.orderNumber = response.data.data.order_number; // Shtrix kodni saqlash
                  this.isOrderVisible = true; // Tegni ko'rsatish
               } else {
                  this.isOrderVisible = false; // Tegni yashirish

                  this.showToast(this.$t('error_occurred'), 'error');
               }
            } catch (error) {
               this.isOrderVisible = false; // Tegni yashirish

               this.showToast(this.$t('error_occurred'), 'error');
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
               const url = `https://new.pochta.uz/api/v1/calculator/create/order/?${params.toString()}`;

               // So'rov yuborish
               const response = await axios.post(url, null, {
                  headers: {
                     'Authorization': `Bearer ${this.token}`,
                     'Content-Type': 'application/json',
                     'Accept': 'application/json',
                  }
               });
               if (response.status === 200 && response.data.data.order_number) {
                  this.showToast(this.$t('Order_created'), 'success');
                  this.orderNumber = response.data.data.order_number; // Shtrix kodni saqlash
                  this.isOrderVisible = true; // Tegni ko'rsatish

               } else {
                  this.showToast(this.$t('error_occurred'), 'error');
               }
            } catch (error) {
               this.showToast(this.$t('error_occurred'), 'error');
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
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
/* Importing Font Awesome */

.copy-button {
   background: none;
   /* No background color */
   border: none;
   /* No border */
   cursor: pointer;
   /* Show pointer cursor on hover */
   display: inline-flex;
   /* Align the icon inline */
   align-items: center;
   /* Center the icon vertically */
   margin-left: 10px;
   /* Add space between order number and button */
}

.copy-button i {
   font-size: 20px;
   /* Icon size */
   color: green;
   /* Icon color */
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

.input-wrapperfrom {
   position: relative;
}

.red-starinputfrom {
   color: red;
   font-weight: bold;
   position: absolute;
   top: 10px;
   right: 5px;
   transform: translateY(-50%);
   font-size: 18px;
}

.input-wrapperphone {
   position: relative;
}

.red-starphone {
   color: red;
   font-weight: bold;
   position: absolute;
   top: 10px;
   right: 5px;
   transform: translateY(-50%);
   font-size: 18px;
}
</style>