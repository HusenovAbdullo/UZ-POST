<template>
   <div>
      <!-- Preloader Start Here -->
      <div>
         <!-- Preloader -->
         <div class="preloader__wrap" v-if="isLoading"
            style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #fff; z-index: 9999;">
            <div class="preloader__box">
               <img src="assets/img/logo/rechage.png" alt="Loading" class="preloader-img">
            </div>
         </div>
         <slot />
      </div>

      <!-- Hero Section Here -->
      <section class="banner__section bg__img1 ralt ">

         <!-- Header Here -->
         <div class="header__section__attachment">
            <div class="aihire__headertopi">
               <div class="container">
                  <div class="haderbar__top d-flex align-items-center  justify-content-between">
                     <div class="logo__left d-flex align-items-center">
                        <router-link to="/" class="logo-container">
                           <img src="assets/img/logo/logo.svg" alt="logo" class="responsive-hide" />
                        </router-link>
                        <!-- how-work.html shuni o'rniga qo'yilgan -->
                        <router-link to="/" class="pra mdnone inter fw-400">
                           Jismoniy shaxslar uchun
                        </router-link>
                        <!-- about.html shuni o'rniga qo'yilgan -->
                        <router-link to="/yuridik" class="pra mdnone inter fw-400">
                           Yuridik shaxslar uchun
                        </router-link>
                     </div>
                     <div class="header__topsearch d-flex align-items-center">
                        <form action="#"
                           class="search__component mb-55 d-flex align-items-center justify-content-between wow fadeInUp">
                           <input type="text" id="trackingNumberInput" placeholder="CC123456789UZ"
                              class="faded-placeholder">
                           <button type="button" class="cmn--btni1 d-flex align-items-center"
                              onclick="fetchTrackingData()">
                              <span><i class="bi bi-search fz-12"></i></span>
                              <span>Kuzatish</span>
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <header class="header-section">
               <div class="container">
                  <div class="header-wrapper">
                     <div class="logo-menu d-xl-none">
                        <a href="index.html" class="small__logo">
                           <img src="assets/img/logo/logolisht.png" alt="logo">
                        </a>
                     </div>
                     <div class="l">
                        <l>.</l>
                     </div>
                     <ul class="main-menu">
                        <li>
                           <a href="javascript:void(0)" class="fz-24">
                              Yuborish
                              <i class="bi bi-chevron-down"></i>
                           </a>
                           <ul class="sub-menu">
                              <li>
                                 <router-link to="/profil">
                                    <span style="text-transform: capitalize;">Shaxsiy </span>
                                    <span style="text-transform: lowercase;">kabinet</span>
                                 </router-link>
                              </li>
                              <li>
                                 <router-link to="/tariflar" class="custom-link">
                                    <span style="text-transform: capitalize;">Jo'natma </span>
                                    <span style="text-transform: lowercase;">turlari</span>
                                 </router-link>
                              </li>
                              <li>
                                 <router-link to="/tariflar" class="custom-link">
                                    <span style="text-transform: capitalize;">Taqiqlangan </span>
                                    <span style="text-transform: lowercase;">joylanmalar</span>
                                 </router-link>
                              </li>
                              <li>
                                 <router-link to="/tariflar" class="custom-link">
                                    <span style="text-transform: capitalize;">O'zbekiston </span>
                                    <span style="text-transform: lowercase;">bo'ylab </span>
                                    <span style="text-transform: lowercase;">yuborish</span>
                                 </router-link>
                              </li>
                              <li>
                                 <router-link to="/tariflar" class="custom-link">
                                    <span style="text-transform: capitalize;">Xalqaro </span>
                                    <span style="text-transform: lowercase;">jo'natmalar</span>
                                 </router-link>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <router-link to="/tariflar">
                              Tariflar
                           </router-link>
                        </li>
                        <li>
                           <router-link to="/xizmatlar">
                              Xizmatlar
                           </router-link>
                        </li>
                        <li>
                           <a href="javascript:void(0)">
                              Onlayn xizmatlar
                              <i class="bi bi-chevron-down"></i>
                           </a>
                           <ul class="sub-menu">
                              <li>
                                 <router-link to="/tracking" class="link-style">
                                    <span style="text-transform: capitalize;">Jo'natmani </span>
                                    <span style="text-transform: lowercase;">kuzatish</span>
                                 </router-link>
                              </li>
                              <li>
                                 <a href="https://hybrid.pochta.uz/">
                                    <span style="text-transform: capitalize;">Gibrid </span> <span
                                       style="text-transform: lowercase;">pochta</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://e-obuna.uz/">
                                    <span style="text-transform: capitalize;">gazeta </span> <span
                                       style="text-transform: lowercase;"> va jurnallarga onlayn obuna</span>
                                 </a>
                              </li>
                              <li>
                                 <router-link to="/kalkulyator" class="link-style">
                                    <span style="text-transform: capitalize;">Jo'natma </span>
                                    <span style="text-transform: lowercase;">kalkulyatori</span>
                                 </router-link>
                              </li>
                              <li>
                                 <router-link to="/aloqa" class="custom-link">
                                    <span style="text-transform: capitalize;">Murojaat </span>
                                    <span style="text-transform: lowercase;">yuborish</span>
                                 </router-link>
                              </li>
                              <li>
                                 <router-link to="/tracking" class="custom-link">
                                    <span style="text-transform: capitalize;">Pochta </span>
                                    <span style="text-transform: lowercase;">indeksim</span>
                                 </router-link>
                              </li>
                           </ul>
                        </li>
                     </ul>
                     <div class="menu__right__components d-flex align-items-center">
                        <div class="menu__components d-flex align-items-center">
                           <div class="dropdown">
                              <a href="#" class="link glose__icon d-flex align-items-center" data-bs-toggle="dropdown"
                                 data-bs-offset="0,14" aria-expanded="true">
                                 <i class="bi bi-globe"></i>
                              </a>
                              <div class="dropdown-menu dropdown-start" data-popper-placement="bottom-start">
                                 <ul class="list">
                                    <li>
                                       <a href="#" class="link d-inline-block dropdown-item">
                                          <span class="d-block bborder pb-1"> Uz </span>
                                       </a>
                                       <a href="#" class="link d-inline-block dropdown-item">
                                          <span class="d-block "> Ru </span>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div class="dropdown">
                              <a href="#" class="link glose__icon d-flex align-items-center" data-bs-toggle="dropdown"
                                 data-bs-offset="0,14" aria-expanded="true">
                                 <i class="bi-geo-alt"></i>
                              </a>
                           </div>
                           <div class="dropdown">
                              <router-link to="/aloqa" class="link glose__icon d-flex align-items-center">
                                 <i class="bi bi-life-preserver"></i>
                              </router-link>
                              <!-- <router-link to="/aloqa" class="link glose__icon d-flex align-items-center"
                                 data-bs-toggle="dropdown" data-bs-offset="0,14" aria-expanded="true">
                                 <i class="bi bi-life-preserver"></i>
                              </router-link> -->
                           </div>
                           <div class="dropdown profie__dropdown">
                              <a href="#" class="link user__active" data-bs-toggle="dropdown" data-bs-offset="0,16"
                                 aria-expanded="true">
                                 <img src="assets/img/bn/profile.jpg" alt="image"
                                    class="img-fluid rounded-circle objec-fit-cover">
                              </a>
                              <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                 <div class="p-6">
                                    <div class="d-flex align-items-center gap-3 max-width">
                                       <div class="jerny__uer ralt">
                                          <img src="assets/img/bn/profile.png" alt="image"
                                             class="img-fluid jenny rounded-circle object-fit-cover flex-shrink-0">
                                          <i
                                             class="bi bi-check checks d-flex align-items-center justify-content-center"></i>
                                       </div>
                                       <div class="flex-grow-1">
                                          <h5 class="fz-20 fw-600 title inter mb-0">Abdullo</h5>
                                          <span class="d-block fw-400 inter pra fz-16"><a
                                                href="https://pixner.net/cdn-cgi/l/email-protection"
                                                class="__cf_email__"
                                                data-cfemail="337a5d555c0a06735e525a5f1d505c5e"></a></span>
                                       </div>
                                    </div>
                                    <div class="switch text-center mt-4 bborderdash pb-24 mb-24">
                                       <router-link to="/tahrirlash" class="cmn--btn outline__btn">
                                          <span>Tahrirlash</span>
                                       </router-link>
                                    </div>
                                    <span class="fz-12 pra d-block fw-400 inter mb-16">
                                       Hisobim
                                    </span>
                                    <ul class="list">
                                       <li class="mb-16">
                                          <router-link to="/profil"
                                             class="link d-flex align-items-center gap-2 dropdown-item">
                                             <i class="bi bi-person-check fz-20"></i>
                                             <span class="d-block fz-16 pra fw-500 inter">Profil</span>
                                          </router-link>
                                       </li>
                                       <li class="mb-16">
                                          <router-link to="/aloqa"
                                             class="link d-flex align-items-center gap-2 dropdown-item">
                                             <i class="bi bi-file-earmark-plus fz-20"></i>
                                             <span class="d-block fz-16 pra fw-500 inter">Murijat yuborish</span>
                                          </router-link>
                                       </li>
                                       <li class="mb-16">
                                          <router-link to="/chat"
                                             class="link d-flex align-items-center gap-2 dropdown-item">
                                             <i class="bi bi-chat-text fz-20"></i>
                                             <span class="d-block fz-16 pra fw-500 inter">Chat</span>
                                          </router-link>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="header-bar d-lg-none">
                           <span></span>
                           <span></span>
                           <span></span>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
         </div>
         <!-- Header End -->
         <div class="loader hidden truckWrapper" id="loader">
            <video autoplay muted loop class="loaderVideo">
               <source src="assets/img/bosh/postman7.mp4" type="video/mp4">
               Your browser does not support the video tag.
            </video>
         </div>
         <!-- Include your popup section here -->
         <div id="trackingPopup" class="popup hidden">
            <div class="popup-content">
               <section class="task__sectiontop ralt pt-120 pb-120">
                  <span class="close-btn" onclick="closePopup()">&times;</span>
                  <div class="container">
                     <div class="row justify-content-center">
                        <div class="col-xxl-6 col-xl-8 col-lg-8">
                           <div class="section__title text-center ralt mb-60">
                              <h2 class="title wow fadeInUp mb-24" id="trackingNumberDisplay"></h2>
                           </div>
                        </div>
                     </div>
                     <div class="row ralt g-4">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown">
                           <div class="task__item round16 bgwhite d-flex align-items-center">
                              <div class="thumb">
                                 <img src="assets/img/task/tast1.jpg" alt="img">
                              </div>
                              <div class="content">
                                 <h3 class="inter title mb-24">Yuboruvchi</h3>
                                 <p class="fz-16 fw-400 inter pra mb-40">
                                    <strong>Mamlakat:</strong> <br>
                                    <span id="senderCountry" class="textrang"></span>
                                 </p>
                                 <p class="fz-16 fw-400 inter pra mb-40">
                                    <strong>Manzil:</strong> <br>
                                    <span id="senderAddress" class="textrang"></span>
                                 </p>
                                 <p class="fz-16 fw-400 inter pra mb-40">
                                    <strong>Pochta indeksi:</strong> <br>
                                    <span id="senderPostcode" class="textrang"></span>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp">
                           <div class="task__item round16 bgwhite d-flex align-items-center">
                              <div class="thumb">
                                 <img src="assets/img/task/tast2.jpg" alt="img">
                              </div>
                              <div class="content">
                                 <h3 class="inter title mb-24">Qabul qiluvchi</h3>
                                 <p class="fz-16 fw-400 inter pra mb-40">
                                    <strong>Mamlakat:</strong> <br>
                                    <span id="recipientCountry" class="textrang"></span>
                                 </p>
                                 <p class="fz-16 fw-400 inter pra mb-40">
                                    <strong>Manzil:</strong> <br>
                                    <span id="recipientAddress" class="textrang"></span>
                                 </p>
                                 <p class="fz-16 fw-400 inter pra mb-40">
                                    <strong>Pochta indeksi:</strong> <br>
                                    <span id="recipientPostcode" class="textrang"></span>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                           <div class="service__detailswrapper">
                              <div class="trending__based mb-40 bgwhite round16 shadow1">
                                 <div class="based__content border round16 bgwhite">
                                    <div class="freelancer__education bborderdash pb-30 mb-30">
                                       <span class="fz-20 mb-24 d-block inter title fw-600">Kuzatuv</span>
                                       <ul class="blog__categories" id="combinedTracking">
                                          <!-- Shipox kuzatuv ma'lumotlari shu yerga kiritiladi -->
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </section>
   </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
   // Sahifa yuklanib bo'lgach, preloaderni yashiramiz
   setTimeout(() => {
      isLoading.value = false;
   }, 1000); // Yuklanish davomiyligi (ms)
});
</script>
