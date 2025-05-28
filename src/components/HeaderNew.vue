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
                     <ul class="main-menu desktop-only">
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
                                    <i></i> {{ $t('oddiy') }}
                                 </button>
                                 <button @click="setAccessibilityMode('colorblind')" :class="{ active: isColorblind }"
                                    style="margin-top: 30px;">
                                    <i></i> {{ $t('rangsiz') }}
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
                        <div class="header-bar d-lg-none" @click="isMobileMenuOpen = true">
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
                  <button class="close-btn" @click="closePopup">X</button>
                  <div class="container">

                     <div class="row ralt g-4" v-if="trackingData">

                        <h2 class="title wow fadeInUp mb-24" style="text-align: center;" id="trackingNumberDisplay">{{
                           trackingData.number }}
                        </h2>

                        <div class="row d-flex align-items-stretch">
                           <div v-if="trackingData.senderCountry" class="col-xl-6 col-lg-6 col-md-12 mb-4">
                              <div class="task__item round16 bgwhite d-flex align-items-center h-100">
                                 <div class="thumb">
                                    <img src="https://uz.post/assets/img/bn/profile.png" alt="img" />
                                 </div>
                                 <div class="content">
                                    <h3 class="inter title2 mb-24">{{ $t('sender') }}</h3>
                                    <p v-if="trackingData.senderCountry" class="fz-16 fw-400 inter pra mb-10">
                                       <strong>{{ $t('country') }}</strong> <br />
                                       <span id="senderCountry" class="textrang">{{ trackingData.senderCountry }}</span>
                                    </p>
                                    <p v-if="trackingData.senderAddress" class="fz-16 fw-400 inter pra mb-10">
                                       <strong>{{ $t('address5') }}</strong> <br />
                                       <span id="senderAddress" class="textrang">{{ trackingData.senderAddress }}</span>
                                    </p>
                                    <p v-if="trackingData.senderPostcode" class="fz-16 fw-400 inter pra mb-10">
                                       <strong>{{ $t('postal_code') }}</strong> <br />
                                       <span id="senderPostcode" class="textrang">{{ trackingData.senderPostcode
                                       }}</span>
                                    </p>
                                 </div>
                              </div>
                           </div>

                           <div v-if="trackingData.recipientCountry" class="col-xl-6 col-lg-6 col-md-12 mb-4">
                              <div class="task__item round16 bgwhite d-flex align-items-center h-100">
                                 <div class="thumb">
                                    <img src="https://uz.post/assets/img/bn/profile.png" alt="img" />
                                 </div>
                                 <div class="content">
                                    <h3 class="inter title2 mb-24">{{ $t('receiver') }}</h3>
                                    <p v-if="trackingData.recipientCountry" class="fz-16 fw-400 inter pra mb-10">
                                       <strong>{{ $t('country') }}</strong> <br />
                                       <span id="recipientCountry" class="textrang">{{ trackingData.recipientCountry
                                       }}</span>
                                    </p>
                                    <p v-if="trackingData.recipientAddress" class="fz-16 fw-400 inter pra mb-10">
                                       <strong>{{ $t('address5') }}</strong> <br />
                                       <span id="recipientAddress" class="textrang">{{ trackingData.recipientAddress
                                       }}</span>
                                    </p>
                                    <p v-if="trackingData.recipientPostcode" class="fz-16 fw-400 inter pra mb-10">
                                       <strong>{{ $t('postal_code') }}</strong> <br />
                                       <span id="recipientPostcode" class="textrang">{{ trackingData.recipientPostcode
                                       }}</span>
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>


                        <div class="mobile-timeline" v-show="isMobile">
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

                                          <!-- Timeline Tracking Start -->
                                          <div class="timeline-wrapper">
                                             <div v-for="(event, index) in combinedTracking" :key="index"
                                                class="timeline-row">
                                                <div class="icon-column">
                                                   <img v-if="index === 0" src="https://new.pochta.uz/media/circle1.svg"
                                                      class="icon-main" />
                                                   <img v-else src="https://new.pochta.uz/media/circle.svg"
                                                      class="icon-circle" />
                                                   <div v-if="index !== combinedTracking.length - 1" class="icon-line">
                                                   </div>
                                                </div>
                                                <div class="content-column">
                                                   <div class="status-text">{{ event.status }}</div>
                                                   <div class="date-text">{{ event.date.toLocaleDateString() }} / {{
                                                      event.date.toLocaleTimeString() }}</div>
                                                </div>
                                             </div>
                                          </div>







                                          <!-- Timeline Tracking End -->

                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <!-- Mobilga mo‘ljallangan timeline kodlari shu yerda -->
                        </div>
                        <div class="desktop-timeline" v-show="!isMobile">

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
                           <!-- Kompyuterga mo‘ljallangan list ko‘rinishdagi kodlar shu yerda -->
                        </div>


                     </div>
                  </div>
               </section>
            </div>
         </div>
      </section>
   </div>

   <!-- Mobil menyu (hamburger bosilganda) -->
   <div v-if="isMobileMenuOpen" class="mobile-fullscreen-menu">
      <div class="menu-header">
         <button class="close-btn" @click="isMobileMenuOpen = false">&times;</button>
      </div>

      <!-- Shaxs turi -->
      <div class="person-toggle">
         <button :class="{ active: selectedPersonType === 'individual' }" @click="selectedPersonType = 'individual'">
            {{ $t('for_individuals') }}
         </button>
         <button :class="{ active: selectedPersonType === 'legal' }" @click="selectedPersonType = 'legal'">
            {{ $t('for_legal_entities') }}
         </button>
      </div>



      <!-- Trek-kod bo‘yicha qidiruv -->
      <form class="track-form-modern" @submit.prevent="fetchTrackingData">
         <input v-model="trackingNumber" placeholder="CC123456789UZ" @keyup.enter="fetchTrackingData" />
         <button type="button" @click="fetchTrackingData">
            <i class="bi bi-search"></i>
            {{ $t('tracking') }}
         </button>
      </form>


      <!-- Profil -->
      <div class="profile-section">
         <img src="https://new.pochta.uz/media/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jfif"
            alt="profile" />
         <span>{{ $t('welcome') }}</span>
      </div>

      <!-- Menyu ro‘yxati -->
      <ul class="accordion-menu">
         <li v-for="(item, index) in menuElementsItems" :key="item.id">
            <!-- Accordion header -->
            <div class="accordion-header" :class="{ active: openedMenu === index }" @click="toggleAccordion(index)">
               <span>{{ item[`name_${$i18n.locale}`] || item.name_uz }}</span>
               <img v-if="!item.link_uz" :class="{ rotated: openedMenu === index }"
                  src="https://new.pochta.uz/media/sayt.svg" alt="chevron" class="arrow-icon" />
            </div>

            <!-- Accordion body -->
            <transition name="fade">
               <ul v-show="openedMenu === index" class="accordion-body">
                  <li v-for="sub in item.elements" :key="sub.id" class="accordion-subitem">

                     <!-- Agar link_uz mavjud bo‘lsa -->
                     <template v-if="sub.link_uz">
                        <!-- Tashqi havola -->
                        <a v-if="isExternalLink(sub.link_uz)" :href="sub.link_uz" class="custom-link" target="_blank">
                           {{ sub[`name_${$i18n.locale}`] || sub.name_uz }}
                        </a>

                        <!-- Router-link havola -->
                        <router-link v-else :to="`/${$i18n.locale}${sub.link_uz}`" class="custom-link">
                           {{ sub[`name_${$i18n.locale}`] || sub.name_uz }}
                        </router-link>
                     </template>

                     <!-- Agar link_uz yo‘q bo‘lsa -->
                     <template v-else>
                        <router-link :to="getLink(sub)" class="custom-link" @click="maybeReload(getLink(sub).path)">
                           {{ sub[`name_${$i18n.locale}`] || sub.name_uz }}
                        </router-link>
                     </template>

                  </li>
               </ul>
            </transition>
         </li>
      </ul>



      <!-- Xarita va Yordam -->
      <div class="footer-buttons">
         <div class="footer-icon-wrapper">
            <router-link to="/map" class="footer-icon-link">
               <div class="circle-icon">
                  <i class="bi bi-geo-alt"></i>
               </div>
               <span class="footer-label">Xarita</span>
            </router-link>
         </div>
         <div class="footer-icon-wrapper">
            <router-link to="/aloqa" class="footer-icon-link">
               <div class="circle-icon">
                  <i class="bi bi-life-preserver"></i>
               </div>
               <span class="footer-label">Yordam</span>
            </router-link>
         </div>
      </div>

   </div>



</template>
<script>
import axios from "axios";

import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(false)

function checkIsMobile() {
   isMobile.value = window.innerWidth < 768
}

onMounted(() => {
   checkIsMobile()
   window.addEventListener('resize', checkIsMobile)
})

onBeforeUnmount(() => {
   window.removeEventListener('resize', checkIsMobile)
})



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
         isMobileMenuOpen: false,
         selectedPersonType: 'individual', // 'individual' yoki 'legal'
         openedMenu: null,
      };
   },
   watch: {
      selectedPersonType(newVal) {
         if (newVal === 'individual') {
            this.$router.push('/');
         } else if (newVal === 'legal') {
            this.$router.push('/yuridik');
         }
      }
   },
   created() {
      this.fetchMenuElements();
   },
   mounted() {
      // ROUTE asosida person type ni aniqlash
      if (this.$route.path.includes('/yuridik')) {
         this.selectedPersonType = 'legal';
      } else {
         this.selectedPersonType = 'individual';
      }
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
      closeMobileMenu() {
         this.isMobileMenuOpen = false;
      },
      toggleAccordion(index) {
         const item = this.menuElementsItems[index];
         // Faqat agar link_uz yo'q bo‘lsa, accordion ochiladi
         if (!item.link_uz) {
            this.openedMenu = this.openedMenu === index ? null : index;
         } else {
            // Aks holda sahifaga yo'naltiriladi
            this.$router.push(item.link_uz);
            this.isMobileMenuOpen = false; // menyuni yopish
         }
      }
      ,
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

         // 📌 Mobil menyuni yopish
         if (this.isMobileMenuOpen) {
            this.isMobileMenuOpen = false;
         }

         const trackingNumberPrefix = this.trackingNumber.substring(0, 2);
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
               this.trackingData = {
                  number: this.trackingNumber,
                  errorMessage: 'Ma\'lumot topilmadi'
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






.timeline-wrapper {
   display: flex;
   flex-direction: column;
   padding: 0 12px;
   background: #ffffff;
   gap: 12px;
}

.timeline-row {
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   gap: 14px;
   position: relative;
}

.icon-column {
   position: relative;
   width: 24px;
   min-width: 24px;
}

.icon-main {
   width: 24px;
   height: 24px;
   margin-top: 2px;
}

.icon-circle {
   width: 24px;
   height: 24px;
   margin-top: 2px;
}

.icon-line {
   position: absolute;
   top: 28px;
   left: 11px;
   width: 2px;
   height: calc(100% - 28px);
   background-image: url('https://new.pochta.uz/media/line.svg');
   background-repeat: repeat-y;
   background-size: contain;
   min-height: 60px;
   /* Qo‘shing */
}


.content-column {
   display: flex;
   flex-direction: column;
   gap: 4px;
}

.status-text {
   font-family: 'Roboto Condensed', sans-serif;
   font-size: 15px;
   color: #4D4D4D;
   letter-spacing: 0.5px;
}

.date-text {
   font-family: 'Roboto Condensed', sans-serif;
   font-size: 10px;
   color: #A7A9B7;
   letter-spacing: 0.2px;
}

.mobile-timeline {
   display: none;
}

.desktop-timeline {
   display: block;
}

@media (max-width: 767px) {
   .mobile-timeline {
      display: block !important;
   }

   .desktop-timeline {
      display: none !important;
   }
}


/* Mobil qurilmalar uchun */
@media (max-width: 768px) {
   .task__item {
      display: flex;
      align-items: center;
      padding: 16px;
      gap: 16px;
      text-align: left;
   }

   .task__item .thumb img {
      width: 80px;
      height: 80px;
      object-fit: contain;
   }

   .task__item .content {
      flex: 1;
   }

   .task__item .content h3 {
      font-size: 18px;
      margin-bottom: 8px;
   }

   .task__item .content p {
      font-size: 12px;
      margin-bottom: 4px;
   }
}

@media (min-width: 992px) {
   .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
   }
}

@media (min-width: 768px) {
   .col-md-12 {
      flex: 0 0 auto;
      width: 50%;
   }
}

.close-btn {
   position: absolute;
   top: -1px;
   right: 2px;
   background-color: #f07824;
   color: #fff;
   border: none;
   padding: 1px 8px;
   border-radius: 4px;
   font-weight: bold;
   cursor: pointer;
   transition: background-color 0.3s ease;
   z-index: 10;
}

.close-btn:hover {
   background-color: #d8651e;
}




.mobile-fullscreen-menu {
   position: fixed;
   top: 0;
   right: 0;
   /* o‘ng tomondan chiqadi */
   width: 320px;
   height: 100vh;
   background: #003580;
   color: white;
   z-index: 9999;
   overflow-y: auto;
   padding: 45px 8px 8px 8px;
   transition: transform 0.3s ease;
   transform: translateX(0);
   /* ochilgan holatda */
   box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
   border-left: 1px solid rgba(255, 255, 255, 0.1);
   border-top-left-radius: 8px;
   border-bottom-left-radius: 8px;
}



.menu-header {
   display: flex;
   justify-content: flex-end;
}

.menu-header .close-btn {
   font-size: 28px;
   background: none;
   border: none;
   color: white;
}

.person-toggle {
   display: flex;
   gap: 8px;
   justify-content: center;
   margin-bottom: 16px;
}

.person-toggle button {
   flex: 1;
   padding: 1px;
   border: none;
   border-radius: 4px;
   background: #ffffff22;
   color: white;
   font-size: 12px;
}

.person-toggle button.active {
   background: white;
   color: #003580;
   /* font-weight: bold; */
}

.track-form {
   display: flex;
   gap: 8px;
   margin-bottom: 16px;
}

.track-form input {
   flex: 1;
   padding: 8px;
   border-radius: 4px;
   border: none;
}

.track-form button {
   padding: 8px 12px;
   background: #f07824;
   border: none;
   border-radius: 4px;
   color: white;
}

.profile-section {
   display: flex;
   align-items: center;
   gap: 12px;
   margin: 20px 0;
}

.profile-section img {
   width: 40px;
   height: 40px;
   border-radius: 50%;
}

.mobile-menu-list {
   list-style: none;
   padding: 0;
   margin: 0;
}

.mobile-menu-list>li {
   margin-bottom: 10px;
}

.mobile-menu-list a {
   color: white;
   text-decoration: none;
   font-size: 16px;
}

.mobile-menu-list ul {
   margin-left: 16px;
   margin-top: 4px;
}

.footer-buttons {
   margin-top: 40px;
   display: flex;
   justify-content: space-around;
   color: white;
}

.footer-icon {
   color: white;
   font-size: 18px;
   text-decoration: none;
}


.person-toggle-wrapper {
   display: flex;
   gap: 14px;
   width: 330px;
   height: 32px;
   border: 1px solid #386EC2;
   border-radius: 4px;
   padding: 0;
}

.person-button {
   flex: 1;
   height: 32px;
   padding: 4px 8px;
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 12px;
   line-height: 24px;
   color: #FFFFFF;
   background: transparent;
   border: none;
   border-radius: 4px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
}

.person-button.active {
   background-color: #386EC2;
   color: #FFFFFF;
}



.person-toggle {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   gap: 0px;
   /* width: 330px; */
   height: 32px;
   border: 1px solid #386EC2;
   border-radius: 4px;
   overflow: hidden;
   margin: 0 auto 28px auto;
   background-color: transparent;
}

.person-toggle button {
   flex: 1;
   height: 32px;
   background-color: transparent;
   border: none;
   font-family: 'Roboto', sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 11px;
   color: #FFFFFF;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 4px 8px;
   transition: all 0.3s ease;
   border-radius: 0;
}

.person-toggle button.active {
   background-color: #386EC2;
   color: #FFFFFF;
}


@media (min-width: 768px) {
   .person-toggle {
      display: none;
   }
}

.track-form-modern {
   position: relative;
   max-width: 400px;
   width: 100%;
   display: flex;
   margin: 0 auto;
   border-radius: 4px;
   overflow: hidden;
   background-color: white;
   border: 1px solid #FDFDFD;
   width: 300px;
   margin: 0 0 28px 0;
   /* Chap tomonga yopishadi */
}

.track-form-modern input {
   /* flex: 1; */
   padding: 12px 2px;
   border: none;
   outline: none;
   font-size: 12px;
   background-color: #003580;
   color: #000;
   /* border-radius: 8px 0 0 8px; */
}

.track-form-modern input::placeholder {
   color: rgba(0, 0, 0, 0.4);
}

.track-form-modern button {
   display: flex;
   align-items: center;
   gap: 6px;
   /* padding: 12px 16px; */
   background-color: white;
   color: #003580;
   border: none;
   font-weight: 500;
   font-size: 12px;
   border-radius: 0 8px 8px 0;
   cursor: pointer;
   transition: background-color 0.2s ease;

}

@media (max-width: 768px) {
   .track-form-modern {
      max-width: 248px;
      height: 36px;
   }


}


.track-form-modern button:hover {
   background-color: #f2f2f2;
}


.accordion-menu {
   display: flex;
   flex-direction: column;
   padding: 0;
   margin: 0;
   /* width: 319px; */
   background-color: #003580;
   color: white;
}

.accordion-item {
   border-bottom: 1px solid #386EC2;
}

.accordion-header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
   font-family: 'Roboto Condensed', sans-serif;
   font-size: 18px;
   font-weight: 500;
   line-height: 24px;
   cursor: pointer;
   background-color: #0D47A1;
}

.accordion-body {
   display: flex;
   flex-direction: column;
   gap: 17px;
   padding: 5px 0 10px 25px;
   background-color: #003580;
}

.accordion-subitem a {
   color: white;
   font-size: 18px;
   font-family: 'Roboto Condensed', sans-serif;
   text-decoration: none;
}

.arrow-icon {
   width: 16px;
   height: 16px;
   transition: transform 0.3s ease;
}

.rotated {
   transform: rotate(180deg);
}

.fade-enter-active,
.fade-leave-active {
   transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
   height: 0;
}

.arrow-icon {
   width: 16px;
   height: 16px;
   transition: transform 0.3s ease;
}

.rotated {
   transform: rotate(180deg);
}

.accordion-header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
   font-family: 'Roboto Condensed', sans-serif;
   font-size: 18px;
   font-weight: 500;
   line-height: 24px;
   cursor: pointer;
   background-color: #003580;
   /* default */
   transition: background-color 0.3s ease;
}

.accordion-header.active {
   background-color: #0D47A1;
   /* faollashtirilgan (ochilgan) bo‘lim */
}

.yordamcha {
   display: block;
   width: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 40px;
   border-radius: 50%;
   background: var(--white);
   border: 1px solid var(--border);
   align-items: center !important;
}

.footer-buttons {
   display: flex;
   justify-content: center;
   gap: 24px;
   margin-top: 30px;
   padding-left: 20px;
   /* Chapga yopishish */
   justify-content: flex-start;
   /* Chap tomonga hizalash */
}

.footer-icon-wrapper {
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   align-items: flex-start;
   /* Matnlar ham chapga hizalanadi */
}

.footer-icon-link {
   display: flex;
   flex-direction: column;
   align-items: center;
   text-decoration: none;
}

.circle-icon {
   background-color: white;
   width: 48px;
   height: 48px;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
}

.circle-icon i {
   color: #003580;
   font-size: 20px;
}

.footer-label {
   color: white;
   font-size: 14px;
   margin-top: 8px;
   font-weight: 500;
   font-family: 'Roboto Condensed', sans-serif;
}

/* faqat katta ekranlarda ko‘rsatiladi */


/* 768px dan kichik ekranlarda yashiriladi */
@media (max-width: 767px) {
   .desktop-only {
      display: none !important;
   }
}

.track-form-modern input::placeholder {
   color: #ffffff93;
   opacity: 1;
   /* To‘liq ko‘rinishi uchun */
}

.track-form-modern input {
   color: #9C9C9C80;
}

.person-toggle button.active {
   background-color: #386EC2;
   color: #ffffff;
   /* font-weight: bold; */
}
</style>
