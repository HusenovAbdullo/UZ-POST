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
                           aria-controls="nav-profile" aria-selected="false">
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
                              <span class="fz-24 fw-600 inter pra">{{ $t('process_shipment') }}                              </span>
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
                                             <td class="fz-20 fw-500 pra inter">Date</td>
                                             <td class="fz-20 fw-500 pra inter">Transaction</td>
                                             <td class="fz-20 fw-500 pra inter">Service</td>
                                             <td class="fz-20 fw-500 pra inter">Order</td>
                                             <td class="fz-20 fw-500 pra inter">Currency</td>
                                             <td class="fz-20 fw-500 pra inter">Total</td>
                                             <td class="text-uppercase fz-20 fw-500 pra inter">Pdf</td>
                                          </tr>
                                          <!-- <tr>
                                             <td class="fz-16 fw-400 inter pra">03/05/2023</td>
                                             <td class="fz-16 fw-400 inter pra">55700223</td>
                                             <td class="fz-16 fw-400 inter pra">Machine Learning</td>
                                             <td class="fz-16 fw-400 inter pra">3</td>
                                             <td class="fz-16 fw-400 inter pra">$</td>
                                             <td class="fz-16 fw-400 inter pra">$215.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">03/05/2023</td>
                                             <td class="fz-16 fw-400 inter pra">55700223</td>
                                             <td class="fz-16 fw-400 inter pra">Deep Learning</td>
                                             <td class="fz-16 fw-400 inter pra">4</td>
                                             <td class="fz-16 fw-400 inter pra">€</td>
                                             <td class="fz-16 fw-400 inter pra">€654.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">27/06/2023</td>
                                             <td class="fz-16 fw-400 inter pra">34034474</td>
                                             <td class="fz-16 fw-400 inter pra">Robotics </td>
                                             <td class="fz-16 fw-400 inter pra">5</td>
                                             <td class="fz-16 fw-400 inter pra">¥</td>
                                             <td class="fz-16 fw-400 inter pra">¥956.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">09/07/2023</td>
                                             <td class="fz-16 fw-400 inter pra">58276066</td>
                                             <td class="fz-16 fw-400 inter pra">Data Analytics</td>
                                             <td class="fz-16 fw-400 inter pra">2</td>
                                             <td class="fz-16 fw-400 inter pra">₽</td>
                                             <td class="fz-16 fw-400 inter pra">₽546.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">15/07/2023</td>
                                             <td class="fz-16 fw-400 inter pra">43397744</td>
                                             <td class="fz-16 fw-400 inter pra">Virtual Assistants</td>
                                             <td class="fz-16 fw-400 inter pra">$</td>
                                             <td class="fz-16 fw-400 inter pra">₽</td>
                                             <td class="fz-16 fw-400 inter pra">$156.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">17/07/2023</td>
                                             <td class="fz-16 fw-400 inter pra">37890606</td>
                                             <td class="fz-16 fw-400 inter pra">Healthcare AI</td>
                                             <td class="fz-16 fw-400 inter pra">1</td>
                                             <td class="fz-16 fw-400 inter pra">$</td>
                                             <td class="fz-16 fw-400 inter pra">$96.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">19/07/2023</td>
                                             <td class="fz-16 fw-400 inter pra">76031847</td>
                                             <td class="fz-16 fw-400 inter pra">AI in Finance</td>
                                             <td class="fz-16 fw-400 inter pra">6</td>
                                             <td class="fz-16 fw-400 inter pra">€</td>
                                             <td class="fz-16 fw-400 inter pra">€856.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">21/07/2023</td>
                                             <td class="fz-16 fw-400 inter pra">66277431</td>
                                             <td class="fz-16 fw-400 inter pra">NLP Language</td>
                                             <td class="fz-16 fw-400 inter pra">3</td>
                                             <td class="fz-16 fw-400 inter pra">€</td>
                                             <td class="fz-16 fw-400 inter pra">€856.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">23/08/2023</td>
                                             <td class="fz-16 fw-400 inter pra">11081197</td>
                                             <td class="fz-16 fw-400 inter pra">Machine Learning</td>
                                             <td class="fz-16 fw-400 inter pra">4</td>
                                             <td class="fz-16 fw-400 inter pra">€</td>
                                             <td class="fz-16 fw-400 inter pra">€756.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">04/09/2023</td>
                                             <td class="fz-16 fw-400 inter pra">66538135</td>
                                             <td class="fz-16 fw-400 inter pra">Machine Learning</td>
                                             <td class="fz-16 fw-400 inter pra">4</td>
                                             <td class="fz-16 fw-400 inter pra">€</td>
                                             <td class="fz-16 fw-400 inter pra">€356.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr> -->
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                           </div>
                           <ul class="pagination justify-content-center mt-40">
                              <li>
                                 <a href="#0">
                                    <i class="bi bi-chevron-left base"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="#0">
                                    1
                                 </a>
                              </li>
                              <li>
                                 <a href="#0">
                                    2
                                 </a>
                              </li>
                              <li>
                                 <a href="#0">
                                    3
                                 </a>
                              </li>
                              <li>
                                 <a href="#0">
                                    ...
                                 </a>
                              </li>
                              <li>
                                 <a href="#0">
                                    <i class="bi bi-chevron-right base"></i>
                                 </a>
                              </li>
                           </ul>
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
      };
   },
   mounted() {
      this.fetchProfileData();
   },
   methods: {
      async fetchProfileData() {
         try {
            const token = localStorage.getItem('id_token');
            if (!token) {
               this.$router.push({ name: 'profil' });
               return;
            }

            const response = await fetch('https://new.pochta.uz/api/v1/public/profile/', {
               method: 'GET',
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });

            if (!response.ok) {
               throw new Error('API fetch failed');
            }

            const data = await response.json();
            this.profile = data;
         } catch (error) {
            console.error('Error fetching profile data:', error);
            this.$router.push({ name: 'profil' });
         }
      },
      handleLogout() {
         localStorage.removeItem('id_token');
         this.$router.push({ name: 'home' });
      },
   },
};
</script>
