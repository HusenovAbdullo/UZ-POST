<template>
   <section class="banner__breadcumn ralt">

      <!--Search Popup-->
      <div id="searchPopup" class="search__popup">
         <form action="#" class="popup-content d-flex align-items-center">
            <input type="text" placeholder="Search Here">
            <button id="closeButton">
               <i class="bi bi-x-lg"></i>
            </button>
         </form>
      </div>
      <!--Search Popup-->

      <div class="breadcumnd__wrapper">
         <div class="container">
            <div class="profile__wrapper">
               <div class="row g-4 align-items-center justify-content-between">
                  <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                     <div class="breadcumnd__content">
                        <span class="d4 mb-24">
                           {{ $t('personal_cabinet') }}
                        </span>
                     </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-5">
                     <div class="logout__btn">
                        <a href="#" class="cmn--logout" @click.prevent="handleLogout">
                           <span>
                              <i class="bi bi-box-arrow-right"></i>
                           </span>
                           <span class="fz-16 fw-600 inter">
                              {{ $t('logout') }}
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- Hero Section End -->

   <!-- profile section Here -->
   <section class="profile__section sectionbg pb-120">
      <div class="container">
         <div class="profile__customize">
            <div class="row g-4">
               <div class="col-lg-4">
                  <div class="main__profile__sidebar">
                     <div class="darrell__profile round16 mb-24 border bgwhite">
                        <div class="profile__check ralt">
                           <img src="assets/img/bn/profile.jpg" alt="profile">
                           <i class="bi bi-check"></i>
                        </div>
                        <div class="darrell__content mt-40 text-center">
                           <h4 class="title mb-16">
                              {{ profile.first_name || '' }}
                           </h4>


                           <ul
                              class="d-flex mt-24 justify-content-center employer__listbase flex-wrap tranding__listbase align-items-center">
                              <li v-if="profile.region">
                                 <span class="fz-16 fw-400 inter pra">
                                    <i class="bi bi-geo-alt base"></i>
                                    {{ profile.region }}
                                 </span>
                              </li>

                              <li v-if="profile.index" class="d-flex gap-2 fz-16 fw-500 inter title">
                                 <i class="bi bi-star-fill ratting"></i>
                                 Index <span class="pra fz-14">{{ profile.index }}</span>
                              </li>

                           </ul>
                           <ul class="social justify-content-center mt-30 mb-40 d-flex align-items-center">
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-telegram base"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-facebook base"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-instagram base"></i>
                                 </a>
                              </li>

                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-linkedin base"></i>
                                 </a>
                              </li>

                           </ul>
                           <router-link to="/tahrirlash" class="cmn--btn outline__btn">
                              <span>{{ $t('edit_profile') }}
                              </span>
                              <span>
                                 <i class="bi bi-arrow-up-right"></i>
                              </span>
                           </router-link>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-8">
                  <div class="create__gigpublist border round16 bgwhite">
                     <div class="nav mb-40 border round16 d-flex align-items-center nav-tabs" role="tablist">
                        <button class="nav-link fz-16 fw-500 pra d-flex align-items-center gap-1 active"
                           id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab"
                           aria-controls="nav-home" aria-selected="true">
                           <i class="bi bi-file-earmark-plus"></i>
                           {{ $t('process_shipment') }}
                        </button>
                        <button class="nav-link fz-16 fw-500 pra d-flex align-items-center gap-1" id="nav-profile-tab"
                           data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab"
                           aria-controls="nav-profile" aria-selected="false" @click="fetchOrders">
                           <i class="bi bi-file-earmark-bar-graph"></i>
                           {{ $t('my_shipments') }}
                        </button>

                     </div>
                     <div class="tab-content">
                        <div class="tab-pane base fade show active" id="nav-home" role="tabpanel"
                           aria-labelledby="nav-home-tab">
                           <router-link to="/ordering" class="gig__box d-block border text-center round16 bgwhite">
                              <span class="icon round100 d-flex align-items-center justify-content-center">
                                 <i class="bi bi-plus-lg"></i>
                              </span>
                              <span class="fz-24 fw-600 inter pra">{{ $t('process_shipment') }} </span>
                           </router-link>
                        </div>
                        <div class="tab-pane base fade" id="nav-profile" role="tabpanel"
                           aria-labelledby="nav-profile-tab">
                           <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                              <div class="overview__gitwrapper bgwhite round16 border">
                                 <h3 class="pb-40 bborderdash mb-40 title">
                                    {{ $t('my_shipments') }}
                                 </h3>
                                 <!-- <div class="d-flex billing__history mb-30 align-items-center gap-3 flex-wrap tort">
                                    <select name="range">
                                       <option value="1">
                                          Data Range
                                       </option>
                                       <option value="1">
                                          ...
                                       </option>
                                       <option value="1">
                                          ...
                                       </option>
                                    </select>
                                    <select name="range">
                                       <option value="1">
                                          Transaction
                                       </option>
                                       <option value="1">
                                          Card
                                       </option>
                                       <option value="1">
                                          Card
                                       </option>
                                    </select>
                                    <select name="range">
                                       <option value="1">
                                          Service
                                       </option>
                                       <option value="1">
                                          ...
                                       </option>
                                       <option value="1">
                                          ...
                                       </option>
                                    </select>
                                    <select name="range">
                                       <option value="1">
                                          Currency
                                       </option>
                                       <option value="1">
                                          ...
                                       </option>
                                       <option value="1">
                                          ...
                                       </option>
                                    </select>
                                    <form action="#0"
                                       class="billing__form round100 border d-flex align-items-center justify-content-between"
                                       style="border-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px;">
                                       <input type="text" placeholder="Search">
                                       <i class="bi bi-search fz-18 title"></i>
                                    </form>
                                 </div> -->
                                 <div class="billing__table">
                                    <table class="table">
                                       <tbody>
                                          <tr>
                                             <td class="fz-20 fw-500 pra inter">{{ $t('order_number') }}</td>
                                             <td class="fz-20 fw-500 pra inter">{{ $t('shipment_type') }}</td>
                                             <td class="fz-20 fw-500 pra inter">{{ $t('delivery_address') }}</td>
                                             <td class="fz-20 fw-500 pra inter">{{ $t('created_date') }}</td>
                                             <td class="fz-20 fw-500 pra inter">{{ $t('price') }}</td>
                                             <td class="fz-20 fw-500 pra inter">{{ $t('status') }}</td>
                                          </tr>


                                          <tr v-for="order in orders" :key="order.barcode">
                                             <td class="fz-16 fw-400 inter pra">{{ order.barcode }}</td>
                                             <td class="fz-16 fw-400 inter pra">{{ order.shipment_type }}</td>
                                             <td class="fz-16 fw-400 inter pra">{{ order.to_jurisdiction }}</td>
                                             <td class="fz-16 fw-400 inter pra">{{ formatDate(order.created_at) }}</td>
                                             <td class="fz-16 fw-400 inter pra">{{ order.price }}</td>
                                             <td class="fz-16 fw-400 inter pra">
                                                <span v-if="order.order_status" class="text-success">Active</span>
                                                <span v-else class="text-danger">Inactive</span>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                           </div>

                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- profile section End -->
</template>
<script>
import axios from "axios";

export default {
   data() {
      return {
         profile: {
            first_name: '',
            last_name: null,
            image: null,
            region: null,
            phone_number: '',
            orders: [],
         },
         orders: [],      // Buyurtmalar ro‘yxati
         isLoading: true, // Ma’lumot yuklanayotganini bildiruvchi flag
      };
   },
   created() {
      this.fetchProfileData(); // Profil ma'lumotlarini olish
   },
   methods: {
      // Buyurtmalarni olish funksiyasi
      async fetchOrders() {
         this.isLoading = true; // Yuklanish boshlanadi
         const token = localStorage.getItem("id_token");

         if (!token) {
            console.error("Token topilmadi");
            return;
         }

         try {
            const response = await axios.get("https://new.pochta.uz/api/v1/public/profile/", {
               headers: { Authorization: `Bearer ${token}` },
            });

            this.orders = response.data.orders.filter(order => order.order_status === true);
         } catch (error) {
            console.error("Buyurtmalarni olishda xatolik:", error);
         } finally {
            this.isLoading = false; // Yuklanish tugadi
         }
      },

      // Sana formatini to‘g‘ri chiqarish
      formatDate(date) {
         const options = { year: 'numeric', month: 'long', day: 'numeric' };
         return new Date(date).toLocaleDateString(undefined, options);
      },

      // Profil ma'lumotlarini olish
      async fetchProfileData() {
         this.isLoading = true; // Yuklanish boshlanadi
         const token = localStorage.getItem("id_token");

         if (!token) {
            this.$router.push({ name: "profil" });
            return;
         }

         try {
            const response = await axios.get("https://new.pochta.uz/api/v1/public/profile/", {
               headers: { Authorization: `Bearer ${token}` },
            });

            this.profile = response.data;
         } catch (error) {
            console.error("Profil ma'lumotlarini olishda xatolik:", error);
            this.$router.push({ name: "profil" });
         } finally {
            this.isLoading = false; // Yuklanish tugadi
         }
      },

      // Logout qilish funksiyasi
      handleLogout() {
         localStorage.removeItem("id_token");
         this.$router.push({ name: "home" });
      },
   },
};
</script>

