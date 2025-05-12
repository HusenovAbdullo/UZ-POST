<template>
   <div>
      <!-- Preloader Start Here -->
      <div>
         <!-- Preloader -->
         <div class="preloader__wrap" v-if="isLoading"
            style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #fff; z-index: 9999;">
            <div class="preloader__box">
               <img src="https://new.pochta.uz/media/animatsion_uO6r2mN.gif" alt="Loading" class="preloader-img">
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
                        <router-link to="/" class="logo-container" @click="refreshPage">
                           <img
                              src="https://new.pochta.uz/media/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.svg"
                              alt="logo" class="responsive-hide" />


                        </router-link>
                        <!-- how-work.html shuni o'rniga qo'yilgan -->
                        <router-link to="/" class="pra mdnone inter fw-400">
                           {{ $t('for_individuals') }}
                        </router-link>
                        <!-- about.html shuni o'rniga qo'yilgan -->
                        <router-link to="/yuridik" class="pra mdnone inter fw-400">
                           {{ $t('for_legal_entities') }}
                        </router-link>
                        <!-- <a class="pra mdnone inter fw-400">{{ $t('for_legal_entities') }}</a> -->
                     </div>
                     <div class="header__topsearch d-flex align-items-center">
                        <form action="#"
                           class="search__component mb-55 d-flex align-items-center justify-content-between wow fadeInUp"
                           @submit.prevent="fetchTrackingData">
                           <input type="text" id="trackingNumberInput" v-model="trackingNumber"
                              placeholder="CC123456789UZ" class="faded-placeholder" @keyup.enter="fetchTrackingData">
                           <button type="button" class="cmn--btni1 d-flex align-items-center"
                              @click="fetchTrackingData">
                              <span><i class="bi bi-search fz-12"></i></span>
                              <span>{{ $t('tracking') }}</span>
                           </button>
                        </form>
                     </div>


                  </div>
               </div>
            </div>
            <header class="header-section">
               <div class="container">
                  <div class="header-wrapper">
                     <div class="logo-menu2 d-xl-none">

                        <router-link to="/" class="small__logo">
                           <img src="https://new.pochta.uz/media/logo-1.svg" alt="logo" class="responsive-logo">
                        </router-link>

                     </div>

                     <div class="l">
                        <l>.</l>
                     </div>
                     <ul class="main-menu">
                        <li v-for="menuItem in menuElementsItems" :key="menuItem.id">
                           <template v-if="menuItem.link_uz">
                              <router-link :to="menuItem.link_uz">
                                 {{ menuItem[`name_${$i18n.locale}`] || menuItem.name_uz }}
                              </router-link>
                           </template>
                           <template v-else>
                              {{ menuItem[`name_${$i18n.locale}`] || menuItem.name_uz }}
                              <i class="bi bi-chevron-down"></i>

                              <ul class="sub-menu" style="top: 60%;">
                                 <li v-for="subItem in menuItem.elements" :key="subItem.id">
                                    <template v-if="subItem.link_uz">
                                       <!-- Agar link http yoki https bilan boshlansa, oddiy a tegini ishlatamiz -->
                                       <a v-if="isExternalLink(subItem.link_uz)" :href="subItem.link_uz"
                                          class="custom-link" target="_blank">
                                          <span style="text-transform: none;">{{ subItem[`name_${$i18n.locale}`] ||
                                             subItem.name_uz }}</span>
                                       </a>
                                       <!-- Agar link router uchun bo'lsa, router-link ishlatiladi -->
                                       <router-link v-else :to="`/${$i18n.locale}${subItem.link_uz}`"
                                          class="custom-link">
                                          <span style="text-transform: none;">
                                             {{ subItem[`name_${$i18n.locale}`] || subItem.name_uz }}
                                          </span>
                                       </router-link>

                                    </template>
                                    <!-- Agar link_uz bo'lmasa, boshqa holatdagi linklar -->
                                    <template v-else>
                                       <router-link :to="getLink(subItem)" class="custom-link"
                                          @click="maybeReload(getLink(subItem).path)">
                                          <span style="text-transform: none;">
                                             {{ subItem[`name_${$i18n.locale}`] || subItem.name_uz }}
                                          </span>
                                       </router-link>
                                    </template>

                                 </li>
                              </ul>
                           </template>
                        </li>
                     </ul>
                     <div class="menu__right__components d-flex align-items-center">
                        <div class="menu__components d-flex align-items-center" style="        gap: 5px;">
                           <div class="dropdown" title="Til">
                              <a href="#" class="link glose__icon d-flex align-items-center" data-bs-toggle="dropdown"
                                 data-bs-offset="0,14" aria-expanded="true">
                                 <span v-if="currentLanguage === 'uz'">Uz</span>
                                 <span v-else-if="currentLanguage === 'ru'">Ru</span>
                              </a>
                              <div class="dropdown-menu dropdown-start" data-popper-placement="bottom-start">
                                 <ul class="list">
                                    <li>
                                       <a href="#" class="link d-inline-block dropdown-item"
                                          @click.prevent="changeLanguage('uz')">
                                          <span class="d-block bborder pb-1">Uz</span>
                                       </a>
                                       <a href="#" class="link d-inline-block dropdown-item"
                                          @click.prevent="changeLanguage('ru')">
                                          <span class="d-block">Ru</span>
                                       </a>
                                    </li>
                                 </ul>
                              </div>

                           </div>
                           <div class="dropdown ochirish" title="Xarita">
                              <router-link to="/map" class="link glose__icon d-flex align-items-center">
                                 <i class="bi-geo-alt"></i>
                              </router-link>
                           </div>

                           <div class="dropdown ochirish" title="Yordam">
                              <router-link to="/aloqa" class="link glose__icon d-flex align-items-center">
                                 <i class="bi bi-life-preserver"></i>
                              </router-link>
                           </div>

                           <div id="app">
                              <div class="dropdown ochirish" title="Maxsus imkoniyatlar">
                                 <a @click="toggleSpecialOptions" class="link glose__icon d-flex align-items-center">
                                    <i class="bi bi-eye"></i>
                                 </a>
                              </div>

                              <div v-if="menuOpen" class="popup-menu">
                                 <button @click="setAccessibilityMode('simple')" :class="{ active: !isColorblind }"
                                    style="margin-top: 30px;">
                                    <i class="bi bi-sun"></i> {{ $t('oddiy') }}
                                 </button>
                                 <button @click="setAccessibilityMode('colorblind')" :class="{ active: isColorblind }"
                                    style="margin-top: 30px;">
                                    <i class="bi bi-moon"></i> {{ $t('rangsiz') }}
                                 </button>
                                 <!-- <button @click="toggleImages" :class="{ active: hideImages }">
                                    <i class="bi bi-image"></i> Rasmlarni o‘chirish
                                 </button> -->
                                 <button @click="toggleSpecialOptions" class="close-btn"
                                    style="padding: 0px 4px; top: 1px; right: 10px;">✖</button>
                              </div>

                           </div>


                           <div class="dropdown profie__dropdown">
                              <a href="#" class="link user__active" data-bs-toggle="dropdown" data-bs-offset="0,16"
                                 aria-expanded="true">
                                 <img
                                    src="https://new.pochta.uz/media/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jfif"
                                    alt="image" class="img-fluid rounded-circle object-fit-cover" />

                              </a>
                              <div v-if="userToken" class="dropdown-menu dropdown-menu-end"
                                 data-popper-placement="bottom-end">
                                 <div class="p-6">
                                    <div class="d-flex align-items-center gap-3 max-width">
                                       <div class="jerny__uer ralt">
                                          <img
                                             src="https://new.pochta.uz/media/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.png"
                                             alt="image"
                                             class="img-fluid jenny rounded-circle object-fit-cover flex-shrink-0" />

                                          <i
                                             class="bi bi-check checks d-flex align-items-center justify-content-center"></i>
                                       </div>
                                       <div class="flex-grow-1">
                                          <h5 class="fz-20 fw-600 title inter mb-0">{{ $t('welcome') }}</h5>
                                          <h5 class="fz-20 fw-600 title inter mb-0">
                                             {{ $t('guest') }} {{ userName }}
                                          </h5>
                                          <span class="d-block fw-400 inter pra fz-16"><a
                                                href="https://pixner.net/cdn-cgi/l/email-protection"
                                                class="__cf_email__"
                                                data-cfemail="337a5d555c0a06735e525a5f1d505c5e"></a></span>
                                       </div>
                                    </div>
                                    <div class="switch text-center mt-4 bborderdash pb-24 mb-24">
                                       <router-link to="/tahrirlash" class="cmn--btn outline__btn">
                                          <span>{{ $t('edit') }}</span>
                                       </router-link>
                                    </div>
                                    <span class="fz-12 pra d-block fw-400 inter mb-16">
                                       {{ $t('my_account') }}
                                    </span>
                                    <ul class="list">
                                       <li class="mb-16">
                                          <router-link to="/profil"
                                             class="link d-flex align-items-center gap-2 dropdown-item">
                                             <i class="bi bi-person-check fz-20"></i>
                                             <span class="d-block fz-16 pra fw-500 inter">{{ $t('profile') }}</span>
                                          </router-link>
                                       </li>
                                       <li class="mb-16">
                                          <router-link to="/aloqa"
                                             class="link d-flex align-items-center gap-2 dropdown-item">
                                             <i class="bi bi-file-earmark-plus fz-20"></i>
                                             <span class="d-block fz-16 pra fw-500 inter">{{ $t('send_request')
                                             }}</span>
                                          </router-link>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                 <div class="p-6">
                                    <div class="d-flex align-items-center gap-3 max-width">
                                       <div class="jerny__uer ralt">
                                          <img
                                             src="https://new.pochta.uz/media/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.png"
                                             alt="image"
                                             class="img-fluid jenny rounded-circle object-fit-cover flex-shrink-0" />

                                          <i
                                             class="bi bi-check checks d-flex align-items-center justify-content-center"></i>
                                       </div>
                                       <div class="flex-grow-1">
                                          <h5 class="fz-20 fw-600 title inter mb-0">{{ $t('welcome') }}</h5>

                                          <span class="d-block fw-400 inter pra fz-16"><a
                                                href="https://pixner.net/cdn-cgi/l/email-protection"
                                                class="__cf_email__"
                                                data-cfemail="337a5d555c0a06735e525a5f1d505c5e"></a></span>
                                       </div>
                                    </div>
                                    <span class="fz-12 pra d-block fw-400 inter mb-16">
                                       {{ $t('my_account') }}
                                    </span>
                                    <ul class="list">
                                       <li class="mb-16">
                                          <router-link to="/singin"
                                             class="link d-flex align-items-center gap-2 dropdown-item">
                                             <i class="bi bi-person-check fz-20"></i>
                                             <span class="d-block fz-16 pra fw-500 inter">{{ $t('register') }}</span>
                                          </router-link>
                                       </li>
                                       <li class="mb-16">
                                          <router-link to="/aloqa"
                                             class="link d-flex align-items-center gap-2 dropdown-item">
                                             <i class="bi bi-file-earmark-plus fz-20"></i>
                                             <span class="d-block fz-16 pra fw-500 inter">{{ $t('send_inquiry')
                                             }}</span>
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
         <div v-if="loading" class="loader truckWrapper">
            <div v-if="loading" class="loader truckWrapper" id="loader">
               <img src="https://new.pochta.uz/media/animatsion.gif" alt="Yuklanmoqda..." class="loaderImage">
            </div>
         </div>

         <!-- Popup Section -->
         <div v-if="trackingData" id="trackingPopup" class="popup">
            <div class="popup-content">
               <section class="task__sectiontop ralt pt-120 pb-120">
                  <span class="close-btn" @click="closePopup">&times;</span>
                  <div class="container">

                     <div class="row ralt g-4" v-if="trackingData">

                        <h2 class="title wow fadeInUp mb-24" style="text-align: center;" id="trackingNumberDisplay">{{
                           trackingData.number }}
                        </h2>
                        <div v-if="trackingData.senderCountry"
                           class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown">
                           <div class="task__item round16 bgwhite d-flex align-items-center">
                              <div class="thumb">
                                 <img src="https://uz.post/assets/img/bn/profile.png" alt="img">
                              </div>
                              <div class="content">
                                 <h3 class="inter title2 mb-24">{{ $t('sender') }}</h3>
                                 <p v-if="trackingData.senderCountry" class="fz-16 fw-400 inter pra mb-40">
                                    <strong>{{ $t('country') }} </strong> <br>
                                    <span id="senderCountry" class="textrang">{{ trackingData.senderCountry }}</span>
                                 </p>
                                 <p v-if="trackingData.senderAddress" class="fz-16 fw-400 inter pra mb-40">
                                    <strong>{{ $t('address5') }}</strong> <br>
                                    <span id="senderAddress" class="textrang">{{ trackingData.senderAddress }}</span>
                                 </p>

                                 <p v-if="trackingData.senderPostcode" class="fz-16 fw-400 inter pra mb-40">
                                    <strong>{{ $t('postal_code') }}</strong> <br>
                                    <span id="senderPostcode" class="textrang">{{ trackingData.senderPostcode }}</span>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div v-if="trackingData.recipientCountry"
                           class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp">
                           <div class="task__item round16 bgwhite d-flex align-items-center">
                              <div class="thumb">
                                 <img src="https://uz.post/assets/img/bn/profile.png" alt="img">
                              </div>
                              <div class="content">
                                 <h3 class="inter title2 mb-24">{{ $t('receiver') }}</h3>
                                 <p v-if="trackingData.recipientCountry" class="fz-16 fw-400 inter pra mb-40">
                                    <strong>{{ $t('country') }} </strong> <br>
                                    <span id="recipientCountry" class="textrang">{{ trackingData.recipientCountry
                                    }}</span>
                                 </p>
                                 <p v-if="trackingData.recipientAddress" class="fz-16 fw-400 inter pra mb-40">
                                    <strong>{{ $t('address5') }}</strong> <br>
                                    <span id="recipientAddress" class="textrang">{{ trackingData.recipientAddress
                                    }}</span>
                                 </p>
                                 <p v-if="trackingData.recipientPostcode" class="fz-16 fw-400 inter pra mb-40">
                                    <strong>{{ $t('postal_code') }}</strong> <br>
                                    <span id="recipientPostcode" class="textrang">{{ trackingData.recipientPostcode
                                    }}</span>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-12 col-lg-12">
                           <div class="service__detailswrapper">
                              <div class="trending__based mb-40 bgwhite round16 shadow1">
                                 <div class="based__content border round16 bgwhite">
                                    <div class="freelancer__education bborderdash pb-30 mb-30">
                                       <h3 class="title2">{{ $t('kuzatuv') }}</h3>
                                       <h1 v-if="trackingData.errorMessage" class="title wow fadeInUp mb-24 center"
                                          style="color: red; font-size: 20px;">
                                          {{ trackingData.errorMessage }}
                                       </h1>
                                       <ul class="blog__categories" id="combinedTracking">
                                          <li v-for="(event, index) in combinedTracking" :key="index">
                                             <a class="d-flex align-items-center">
                                                <span class="fz-12 fw-500 title inter">{{ event.date.toLocaleString()
                                                }}</span>
                                                <span class="cateicon">
                                                   <img
                                                      :src="`https://uz.post/assets/img/flags/${event.country_code.toLowerCase()}.svg`"
                                                      alt="flag" class="flag-icon">
                                                </span>
                                                <span class="fz-12 d-block fw-500 inter success2 region-info">{{
                                                   event.region }}</span>
                                                <span class="fz-12 d-block fw-500 inter success2 region-info">{{
                                                   event.data }}</span>
                                                <span class="fz-12 fw-500 inter title d-block">{{ event.location
                                                }}</span>
                                                <span>
                                                   <span class="fz-12 fw-500 inter success2 d-block">{{ event.status
                                                   }}</span>
                                                   <span v-if="event.malumot" class="fz-12 fw-500 inter success2"
                                                      style="color: brown; display: block; font-size: 10px; opacity: 0.6;">
                                                      {{ event.malumot }}
                                                   </span>
                                                   <span v-if="event.malumot2" class="fz-12 fw-500 inter success2"
                                                      style="color: brown; display: block; font-size: 10px; opacity: 0.6;">
                                                      {{ event.malumot2 }}
                                                   </span>
                                                </span>
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
            </div>
         </div>
      </section>
   </div>
</template>
<script>
import axios from "axios";


export default {
   data() {
      return {
         userName: '',
         trackingNumber: '',
         loading: false,
         trackingData: null,
         combinedTracking: [],
         errorMessage: null,
         isLoading: false,
         locale: this.$i18n.locale,
         currentLocale: this.$i18n.locale, // Joriy tilni yuklaymiz
         menuElements: [],
         menuElementsItems: [],
         userToken: null, // Boshlang'ich qiymat
         currentLanguage: 'uz', // Boshqa tilda boshlang'ich qiymat o'zgartiriladi
         menuOpen: false,
         mode: 'simple',
         hideImages: false,
         isColorblind: false,
      };
   },
   created() {
      this.fetchMenuElements();
   },
   mounted() {
      const savedMode = localStorage.getItem('accessibilityMode');
      if (savedMode === 'colorblind') {
         this.setAccessibilityMode('colorblind');
      }
      const savedHideImages = localStorage.getItem('hideImages');
      this.hideImages = savedHideImages === 'true';
      // Misol uchun, localStorage orqali tokenni o'qing
      this.userToken = localStorage.getItem("id_token"); // Agar token mavjud bo'lsa, qiymatni o'rnatadi
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
         this.changeLanguage(savedLanguage);
      } else {
         this.changeLanguage('uz');
      }
   },
   methods: {
      setAccessibilityMode(mode) {
         if (mode === 'colorblind') {
            this.isColorblind = true;
            localStorage.setItem('accessibilityMode', 'colorblind');
            document.body.style.filter = 'grayscale(100%)'; // Grayscale qo'shish
         } else {
            this.isColorblind = false;
            localStorage.removeItem('accessibilityMode');
            document.body.style.filter = ''; // Grayscale ni o'chirish
         }
      }
      ,
      setMode(mode) {
         if (mode === 'simple') {
            this.isColorblind = false;
         }
      },
      toggleSpecialOptions() {
         this.menuOpen = !this.menuOpen;
      },






      toggleImages() {
         this.hideImages = !this.hideImages;
         document.body.classList.toggle('hide-images', this.hideImages);
      },
      maybeReload(path) {
         if (path.includes('/headeritem/')) { // Faqat "/sahifalar/" yo'liga refresh beradi
            setTimeout(() => {
               window.location.reload();
            }, 100);
         }
      },
      isExternalLink(link) {
         return link.startsWith('http://') || link.startsWith('https://');
      },
      getLink(link) {
         const lang = this.$i18n.locale || "uz"; // Tilni aniqlash

         if (link.link_uz) {
            return {
               path: link.link_uz,
               params: { name_uz: link.name_uz }, // name_uz parametrini uzatadi
            };
         }

         return {
            path: `/${lang}/headeritem/${this.generateSlug(link.name_uz)}`, // Slug shaklida yo'naltirish
            query: { id: link.id }, // id parametri bilan
         };
      },
      async fetchMenuElements() {
         try {
            const response = await axios.get("https://new.pochta.uz/api/v1/public/menu-elements/");
            this.menuElements = (response.data || []).filter(item => item.status === true);
            if (this.menuElements.length > 0) {
               this.menuElementsItems = this.menuElements || [];
            } else {
               this.menuElementsItems = [];
            }
         } catch (error) {
            console.error("Menu ma'lumotlarini yuklashda xatolik:", error);
         }
      },
      generateSlug(name) {
         return name
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-') // Bo'sh joylarni "-" bilan almashtiradi
            .replace(/[^a-z0-9-]/g, ''); // Maxsus belgilarni olib tashlaydi
      }
      ,
      changeLanguage(lang) {
         this.$i18n.locale = lang; // Vue-i18n orqali tilni o'zgartirish
         localStorage.setItem('language', lang); // Tanlangan tilni saqlash
         this.currentLanguage = lang;

         // Hozirgi yo‘nalishni yangi til bilan o‘zgartirish
         const currentPath = this.$route.fullPath.replace(/^\/(uz|ru)/, ''); // Eski tilni olib tashlash
         this.$router.push({ path: `/${lang}${currentPath}`, query: this.$route.query });
      },

      refreshPage(event) {
         // Sahifa yangilanayotgani uchun Vue Router hodisasini to'xtatamiz
         event.preventDefault();
         // Manzilni yangilash
         window.location.href = "/";
      },
      fetchTrackingData() {
         this.loading = true;
         this.trackingData = null;
         this.combinedTracking = [];
         this.errorMessage = null;

         // Check if the tracking number starts with CZ, RZ, or E
         const trackingNumberPrefix = this.trackingNumber.substring(0, 2); // Get the first 2 characters of the tracking number
         let apiUrl = '';

         if (['CZ', 'RZ', 'E'].includes(trackingNumberPrefix)) {
            apiUrl = `https://tracking.pochta.uz/api/v1/public/new/${this.trackingNumber}/`;
         } else {
            apiUrl = `https://tracking.pochta.uz/api/v1/public/test/${this.trackingNumber}/`;
         }

         const xhr = new XMLHttpRequest();
         xhr.open('GET', apiUrl, true);
         xhr.onload = () => {
            this.loading = false;
            if (xhr.status >= 200 && xhr.status < 300) {
               const data = JSON.parse(xhr.responseText);
               if (Array.isArray(data) && data.length > 0 && data[0].OperationalMailitems) {
                  const mailItem = data[0].OperationalMailitems.TMailitemInfoFromScanning[0];
                  this.trackingData = {
                     number: mailItem.InternationalId,
                     senderCountry: mailItem.OrigCountry.Name || '',
                     senderAddress: mailItem.OrigAddress || '',
                     senderPostcode: mailItem.OrigPostcode || '',
                     recipientCountry: mailItem.DestCountry.Name || '',
                     recipientAddress: mailItem.DestAddress || '',
                     recipientPostcode: mailItem.DestPostcode || ''
                  };

                  this.processEvents(mailItem.Events.TMailitemEventScanning, mailItem.DestCountry.Code);
               } else {
                  this.processAlternativeData(data);
               }
            } else if (xhr.status === 404) {
               // 404 xatolik uchun popup ko‘rsatish
               this.trackingData = {
                  number: this.trackingNumber,
                  errorMessage: 'Ma\'lumot topilmadi' // Xatolik xabari
               };
            } else {
               this.errorMessage = 'Ma\'lumot topilmadi';
            }
         };
         xhr.onerror = () => {
            this.loading = false;
            this.errorMessage = 'So\'rovni yuborishda xatolik yuz berdi';
         };
         xhr.send();
      },

      processEvents(events, countryCode) {
         const lang = this.$i18n?.locale || 'uz'; // Masalan, Vue I18n ishlatsangiz
         this.combinedTracking = events.map(event => ({
            date: new Date(event.LocalDateTime),
            date1: new Date(event.GmtDateTime),
            location: event.EventOffice.Name,
            status: this.getLocalizedStatus(event.IPSEventType, lang), // Statusni lokalizatsiya qilish
            malumot: event.RetentionReason?.Name || '',
            malumot2: event.NonDeliveryReason?.Name || '',
            country_code: countryCode
         })).sort((a, b) => b.date - a.date);
      },
      processAlternativeData(data) {
            this.trackingData = {
                number: data.header?.data?.order_number || data.gdeposilka?.data?.tracking_number || 'Ma\'lumot yo\'q',
                senderCountry: data.header?.data?.locations?.[0]?.address_city || '',
                senderAddress: data.header?.data?.locations?.[0]?.address || '',
                senderPostcode: data.header?.data?.locations?.[0]?.postcode || '',
                recipientCountry: data.header?.data?.locations?.[1]?.address_city || '',
                recipientAddress: data.header?.data?.locations?.[1]?.address || '',
                recipientPostcode: data.header?.data?.locations?.[1]?.postcode || ''
            };
            let TemuList = [];
            let shipoxList = [];
            let gdeposilkaList = [];
            if (data.data) {
                TemuList = data.data.map(item => {
                    let date = new Date(item.date);

                    // Sekundlarni olib tashlash
                    date.setSeconds(0, 0);

                    // Soatga 5 qo'shish

                    return {
                        date: date, // Mana, endi o'zgartirilgan `Date` ob'ekti chiqadi
                        data: item.data || 'UzPost',
                        location: item.warehouse?.name || '',
                        status: item["IPSEventType"]["Name"],
                        country_code: 'UZ'
                    };
                });
                TemuList = TemuList.reverse();
            }

            if (data.shipox?.data?.list) {
                shipoxList = data.shipox.data.list.map(item => ({
                    date: new Date(item.date),
                    data: item.data || 'UzPost',
                    location: item.warehouse?.name || '',
                    status: this.getLocalizedStatus(item),
                    country_code: 'UZ'
                }));
            }

            if (data.gdeposilka?.data?.checkpoints) {
                gdeposilkaList = data.gdeposilka.data.checkpoints.map(item => ({
                    date: new Date(item.time),
                    location: item.location_translated,
                    region: item.courier.name,
                    status: this.getLocalizedStatus(item),
                    country_code: item.courier.country_code
                }));
            }

            const sortedShipoxList = shipoxList.sort((a, b) => new Date(b.date) - new Date(a.date));
            const sortedGdeposilkaList = gdeposilkaList.sort((a, b) => new Date(b.date) - new Date(a.date));

            if (TemuList.length === 0) {
                // Agar TemuList bo'sh bo'lsa, shipoxList va gdeposilkaList-ni sanaga qarab birlashtiramiz
                this.combinedTracking =
                    new Date(sortedShipoxList[0]?.date) > new Date(sortedGdeposilkaList[0]?.date)
                        ? [...sortedShipoxList, ...sortedGdeposilkaList]
                        : [...sortedGdeposilkaList, ...sortedShipoxList];
            } else {
                // Agar TemuList bo'sh bo'lmasa, TemuList-ni combinedTracking-ga qo'shamiz
                this.combinedTracking = [...TemuList];
            }
        },
      // getLocalizedStatus(item) {
      //    const lang = this.$i18n.locale; // Hozirgi tilni aniqlash
      //    if (lang === 'uz') {
      //       return item.status_uz;
      //    } else if (lang === 'ru') {
      //       return item.status_ru;
      //    } else {
      //       return item.status_desc || 'Status unknown';
      //    }
      // },
      getLocalizedStatus(data) {
         const lang = this.$i18n.locale; // Hozirgi tilni aniqlash
         if (!data) return 'Status noaniq';

         if ('LocalName_uz' in data || 'LocalName_ru' in data || 'Name' in data) {
            if (lang === 'uz') return data.LocalName_uz || data.Name;
            if (lang === 'ru') return data.LocalName_ru || data.Name;
            return data.Name;
         }

         if ('status_uz' in data || 'status_ru' in data || 'status_desc' in data) {
            if (lang === 'uz') return data.status_uz;
            if (lang === 'ru') return data.status_ru;
            return data.status_desc || 'Status unknown';
         }

         return 'Status noaniq';
      },
      getStatusText(statusDesc) {
         return statusDesc || 'Status noaniq';
      },
      closePopup() {
         this.trackingData = null;
         this.combinedTracking = [];
      }
   }
};

document.querySelectorAll('.sub-menu li').forEach(item => {
   item.addEventListener('mouseenter', () => {
      const link = item.querySelector('a');
      if (link) {
         link.style.color = 'white';
         link.style.backgroundColor = '#183e98';
      }
   });
   item.addEventListener('mouseleave', () => {
      const link = item.querySelector('a');
      if (link) {
         link.style.color = 'black';
         link.style.backgroundColor = 'transparent';
      }
   });
});


</script>























<style scoped>
/* Sub-menu uchun asosiy uslub */
.sub-menu {
   background-color: white;
   /* Orqa fon oq */
   border: 1px solid #ccc;
   /* Chegara */
   list-style: none;
   padding: 0;
   margin: 0;
   display: none;
   /* Menyu yashirin bo'ladi */
   position: absolute;
   z-index: 1000;
}

/* Sub-menu ichidagi <li> uslubi */
.sub-menu li {
   padding: 1px;
   cursor: pointer;
   transition: background-color 0.3s ease, color 0.3s ease;
   /* Silliq o‘tish */
}

/* <li> ichidagi <a> uchun asosiy uslub */
.sub-menu li a {
   color: black;
   /* Oqim holatida qora yozuv */
   text-decoration: none;
   display: block;
   /* Link butun <li>ni qamrab oladi */
   width: 100%;
}

/* Hover effekti: <li> fon ko‘k, <a> yozuv oq */
.sub-menu li:hover {
   background-color: #ffffff;
   /* Ko'k fon */
}

.sub-menu li:hover a {
   color: white !important;
   /* Oq yozuv, !important ustuvorligini oshiradi */
}

/* Ochiq menyu uchun ko'rsatiladigan holat */
li:hover .sub-menu {
   display: block;
   /* Menyu ko'rsatiladi */
}

.burchak {
   border-radius: 4px;
   border-top-left-radius: 4px;
   border-top-right-radius: 4px;
   border-bottom-right-radius: 4px;
   border-bottom-left-radius: 4px;
   margin-left: -1px;
}

/* Hover effektini to‘liq ishlashi uchun yuqori ustuvorlik */
li:hover>.sub-menu li:hover>a {
   color: white !important;
   /* Oq yozuv */
   background-color: #183e98 !important;
   /* Ko'k fon */
}

/* Asosiy linkning boshlang‘ich rangi */
li .sub-menu li a {
   color: black !important;
   /* Oqim qora */
}


/* Ekran kengligi 500px dan kichik bo'lsa */
/* @media (max-width: 500px) {
   .logo-menu2 {
      display: none;
      
   }
} */

@media (max-width: 500px) {
   .ochirish {
      display: none;
   }
}

span {
   text-transform: none;
   /* Hammasini asl ko'rinishga qaytaradi */
}

span:first-letter {
   text-transform: capitalize;
   /* Faqat birinchi harfni bosh qiladi */
}







/* 750px dan kichik ekranlar uchun qo'llanadigan uslublar */
@media (max-width: 750px) {

   /* Popupni markazga joylashtirish */
   /* Popupning umumiy uslubi (750px dan katta ekranlar uchun eski ko'rinish) */
   .popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      background-color: white;
      /* border-radius: 8px; */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      z-index: 1000;
   }

   .popup-content {
      padding: 20px;
   }

   .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 20px;
      color: #333;
      cursor: pointer;
   }

   /* Matnlarni markazlash va joylashtirish */
   .popup h2 {
      text-align: center;
      font-size: 18px;
      margin-bottom: 15px;
      font-weight: bold;
      color: #183e98;
   }

   ul.blog__categories {
      list-style: none;
      padding: 0;
      margin: 0;
   }

   ul.blog__categories li {
      /* display: flex; */
      flex-direction: column;
      padding: 10px;
      border-bottom: 1px solid #f0f0f0;
   }

   ul.blog__categories li a {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      color: #333;
   }

   ul.blog__categories li span {
      font-size: 14px;
      /* color: #555; */
   }

   /* Flag uchun rasmni moslashtirish */
   .flag-icon {
      width: 20px;
      height: auto;
      margin-right: 8px;
   }

   /* Mobil qurilmalarga moslashtirish faqat ekran kengligi 750px dan kichik bo'lsa */
   @media (max-width: 750px) {
      .popup {
         width: 90%;
         max-width: none;
      }

      ul.blog__categories li {
         flex-direction: column;
         align-items: flex-start;
      }

      ul.blog__categories li a {
         flex-direction: column;
         align-items: flex-start;
      }

      ul.blog__categories li span {
         font-size: 12px;
      }

      .popup {
         position: fixed;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         width: 400px;
         background-color: white;
         z-index: 1100;
         /* Yuqori qiymat beriladi */
         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
         overflow: hidden;
      }

      .header-section {
         position: relative;
         z-index: 100;
         /* Pastroq qiymat qo'yiladi */
      }

      .sub-menu {
         z-index: 100;
         /* Menyular pastroq bo'lishi uchun */
      }

   }

}

.loaderImage {
   width: 600px;
   /* Rasm kengligi */
   height: auto;
   /* Asl nisbatni saqlash */
}

.close-btn:hover {
   color: #ffffff;
}
</style>
