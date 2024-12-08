<template>
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
                              <p>
                                 Posilka — bu jo’natishga ruxsat etilgan sanoat tovarlari, oziq-ovqat mahsulotlari,
                                 madaniy-maishiy va boshqa tovarlar solingan pochta jo’natmasi turi.
                              </p>
                           </div>
                           <br />

                           <h4 class="title mb-20">
                              Yuboruvchi manzili
                           </h4>

                           <form @submit.prevent="calculatePrice" class="write__review">
                              <div class="row g-4 justify-content-center">
                                 <!-- Region Tanlash -->


                                 <div class="col-lg-4 viloyat">
                                    <div class="frm__grp">
                                       <label for="province" class="fz-18 fw-500 inter title mb-16">Viloyat</label>
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
                                       <label for="district" class="fz-18 fw-500 inter title mb-16">Tuman</label>
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
                                             placeholder="Manzil">
                                       </div>
                                    </div>
                                 </div>

                                 <div class="tabi bor">
                                    <button class="tablinks1" :class="{ active: activeTab === 'Index' }"
                                       @click="activeTab = 'Index'" id="firstTab" style="display: block;">
                                       <p>Index</p>
                                    </button>
                                    <button class="tablinks1" :class="{ active: activeTab === 'Manzil' }"
                                       @click="activeTab = 'Manzil'" style="display: block;">
                                       <p>Manzil</p>
                                    </button>
                                    <button class="tablinks1" :class="{ active: activeTab === 'Pochtam' }"
                                       @click="activeTab = 'Pochtam'">
                                       <p>Pochtomat</p>
                                    </button>
                                    <button class="tablinks1" :class="{ active: activeTab === 'Davlat' }"
                                       @click="activeTab = 'Davlat'">
                                       <p>Davlat</p>
                                    </button>
                                 </div>

                                 <div id="Index" class="tabcontent1" v-show="activeTab === 'Index'">
                                    <div class="col-lg-4 index">
                                       <div class="frm__grp">
                                          <label for="index" class="fz-18 fw-500 inter title mb-16"></label>
                                          <input type="text" id="index" name="index" class="form-control"
                                             placeholder="Index" v-model="index" />
                                       </div>
                                    </div>
                                 </div>

                                 <br>
                                 <br>
                                 <br>
                                 <br>
                                 <div id="Manzil" class="tabcontent1" v-show="activeTab === 'Manzil'">
                                    <form action="#0" class="write__review">
                                       <div class="row g-4 justify-content-center">
                                          <div class="col-lg-4 viloyat2">
                                             <div class="frm__grp">
                                                <label for="province"
                                                   class="fz-18 fw-500 inter title mb-16">Viloyat</label>
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
                                                <label for="district"
                                                   class="fz-18 fw-500 inter title mb-16">Tuman</label>
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
                                    </form>
                                 </div>
                                 <div id="Pochtam" class="tabcontent1" v-show="activeTab === 'Pochtam'">
                                    <h3>Bu xizmat hozircha mavjud emas </h3>
                                 </div>
                                 <div id="Davlat" class="tabcontent1" v-show="activeTab === 'Davlat'">
                                    <div class="col-lg-4 index">
                                       <div class="col-lg-4 viloyat">
                                          <div class="frm__grp">
                                             <label for="province" class="fz-18 fw-500 inter title mb-16">Davlatni
                                                tanlang</label>
                                             <select id="province" name="province" class="form-control"
                                                v-model="selectedProvince3">
                                                <option value="" disabled selected>Davlat</option>
                                                <option v-for="province in provinces" :key="province.id"
                                                   :value="province.id">
                                                   {{ province.name }}
                                                </option>
                                             </select>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <h2 class="title mb-20">
                                    Yetkazib berish imkoniyatlari
                                 </h2>
                                 <div class="row">
                                    <div class="col-lg-6 vesi left-align">
                                       <div class="frm__grp">
                                          <label for="vesi" class="fz-180 fw-500 inter title mb-16"></label>
                                          <input type="number" id="vesi" name="vesi" class="form-control"
                                             placeholder="Og'irligi gramm" v-model="weight">
                                       </div>
                                    </div>
                                    <div class="col-lg-6 vesi left-align">
                                       <div class="frm__grp">
                                          <label for="size" class="fz-180 fw-500 inter title mb-16"></label>
                                          <select id="size" name="size" class="form-control">
                                             <option value="" disabled selected>Hajmini tanlang</option>
                                             <option value="10x20x30">10x20x30</option>
                                             <option value="25x30x40">25x30x40</option>
                                             <option value="35x38x45">35x38x45</option>
                                          </select>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="frm__grp mt-30">
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
                              Jami
                              <span class="fssizing d-flex align-items-start gap-1">
                                 {{ totalPrice + " so'm" }}
                              </span>
                           </span>
                        </div>

                        <a href="#0" class="cmn--btn mt-30 d-flex justify-content-center d-block">
                           <span>
                              Buyurtmani yaratish
                           </span>
                           <span>
                              <i class="bi bi-arrow-up-right"></i>
                           </span>
                        </a>
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
      };
   },
   methods: {
      // Xizmatlarni olish
      async fetchServices() {
         if (this.activeTab === 'Index') {

            try {
               const response = await axios.get(
                  "https://new.pochta.uz/api/v1/calculator/services/"
               );
               // Xizmatlarni olish va formatlash
               this.services = response.data.service_types.data.list.map((service) => ({
                  id: service.id,
                  name: service.name,
                  image: service.image,
               }));
               // Birinchi xizmatni faol deb belgilash
               if (this.services.length > 0) {
                  this.activeService = this.services[0].id;
               }
            } catch (error) {
               console.error("Xizmatlarni olishda xatolik:", error);
            }
         }
      },
      // Xizmatni tanlash
      selectService(serviceId) {
         this.activeService = serviceId;
      },
      // Regionlarni olish
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

      // Districtlarni olish
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
      // Province (Davlat) select'ni to'ldirish
      async fetchProvinces() {
         try {
            const response = await axios.get(
               "https://new.pochta.uz/api/v1/calculator/locations-others/uzb/"
            );
            // API'dan olingan viloyatlarni provinces arrayga saqlash
            this.provinces = response.data.data
            console.log(this.provinces)
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
                        service_type_id: this.activeService,
                        fromjurisdiction_id: this.selectedDistrict1,
                        weight: this.weight / 1000,
                        index: this.index,
                     },
                  }
               );
               this.totalPrice = response.data[0].data.list[0].price.total;
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
            } catch (error) {
               console.error("Narxni hisoblashda xatolik", error);
            }
         }
         if (this.activeTab === 'Davlat'){
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
            }catch (error) {
               console.log("Narxni hisoblashda xatolik", error)
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
/* Stilni kerakli joylarda o'zingiz moslab o'zgartirishingiz mumkin */
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
</style>
