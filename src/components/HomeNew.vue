<template>
    <section class="slideshow-container" id="slideshow">
        <div class="container">
            <div class="header-wrapper" style="position: relative; z-index: 1;">
                <!-- Slideshow -->
                <img :src="currentImage" alt="" class="banner-image" />
                <div class="button-container">
                    <!-- Tugmalarni API'dan kelayotgan ma'lumotlar asosida yaratish -->
                    <router-link v-for="(link, index) in currentLinks" :key="index" :to="link.url"
                        class="cmn--btn custom-button">
                        <span>{{ link.title }}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <!-- timely worktwo Here 6 taliksadasdasdasdEDsS -->
    <section class="categoris__section sectionbg pb-220 pt-220" style="background-color: #ffffff;">
        <div class="background-overlay"></div>
        <div class="container">
            <br>
            <br>
            <div class="row g-4 mb-40 justify-content-center">
                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
                    <div class="categoris__item round16 bgwhite border">
                        <div class="boxes  kat">
                            <div class="icon mb-24">
                                <img src="assets/img/categories/6.svg" alt="icon">
                            </div>
                            <div class="content">
                                <h4 class="mb-10 title">
                                    <router-link to="/map" class="titleq">
                                        {{ $t('search_branch') }}
                                    </router-link>
                                </h4>
                            </div>
                        </div>
                        <router-link to="/map" class="d-flex readmore align-items-center gap-2">
                            <span class="fz-16 transition fw-600 base inter">
                                {{ $t('more_details') }}
                            </span>
                            <span>
                                <i class="bi bi-arrow-right transition fz-18 base"></i>
                            </span>
                        </router-link>
                    </div>
                </div>
                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
                    <div class="categoris__item round16 bgwhite border">
                        <div class="boxes  kat">
                            <div class="icon mb-24 ">
                                <img src="assets/img/categories/1.svg" alt="icon">
                            </div>
                            <div class="content">
                                <h4 class="mb-10 title">
                                    <a href="/yangiliklar" class="titleq">
                                        {{ $t('news') }}
                                    </a>
                                </h4>
                                <br>
                            </div>
                        </div>
                        <router-link to="/yangiliklar" class="d-flex readmore align-items-center gap-2">
                            <span class="fz-16 transition fw-600 base inter">
                                {{ $t('more_details') }}
                            </span>
                            <span>
                                <i class="bi bi-arrow-right transition fz-18 base"></i>
                            </span>
                        </router-link>
                    </div>
                </div>
                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
                    <div class="categoris__item round16 bgwhite border">
                        <div class="boxes  kat">
                            <div class="icon mb-24 ">
                                <img src="assets/img/categories/3.svg" alt="icon">
                            </div>
                            <div class="content">
                                <h4 class="mb-10 title">
                                    <router-link to="/Kalkulyator" class="titleq">
                                        {{ $t('shipment_calculator') }}
                                    </router-link>
                                </h4>
                            </div>
                        </div>
                        <router-link to="/Kalkulyator" class="d-flex readmore align-items-center gap-2">
                            <span class="fz-16 transition fw-600 base inter">
                                {{ $t('more_details') }}
                            </span>
                            <span>
                                <i class="bi bi-arrow-right transition fz-18 base"></i>
                            </span>
                        </router-link>
                    </div>
                </div>
                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
                    <div class="categoris__item round16 bgwhite border">
                        <div class="boxes  kat">
                            <div class="icon mb-24 ">
                                <img src="assets/img/categories/2.svg" alt="icon">
                            </div>
                            <div class="content">
                                <h4 class="mb-10 title">
                                    <router-link to="/ordering" class="titleq">
                                        {{ $t('online_registration') }}
                                    </router-link>
                                </h4>
                            </div>
                        </div>
                        <router-link to="/ordering" class="d-flex readmore align-items-center gap-2">
                            <span class="fz-16 transition fw-600 base inter">
                                {{ $t('more_details') }}
                            </span>
                            <span>
                                <i class="bi bi-arrow-right transition fz-18 base"></i>
                            </span>
                        </router-link>
                    </div>
                </div>
                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
                    <div class="categoris__item round16 bgwhite border">
                        <div class="boxes  kat">
                            <div class="icon mb-24 ">
                                <img src="assets/img/categories/4.svg" alt="icon">
                            </div>
                            <div class="content">
                                <h4 class="mb-10 title">
                                    <router-link to="/index" class="titleq">
                                        {{ $t('my_post_index') }}
                                    </router-link>
                                </h4>
                            </div>
                        </div>
                        <router-link to="/index" class="d-flex readmore align-items-center gap-2">
                            <span class="fz-16 transition fw-600 base inter">
                                {{ $t('more_details') }}
                            </span>
                            <span>
                                <i class="bi bi-arrow-right transition fz-18 base"></i>
                            </span>
                        </router-link>
                    </div>
                </div>
                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
                    <div class="categoris__item round16 bgwhite border">
                        <div class="boxes  kat">
                            <div class="icon mb-24 ">
                                <img src="assets/img/categories/5.svg" alt="icon">
                            </div>
                            <div class="content">
                                <h4 class="mb-10 title">
                                    <router-link to="/aloqa" class="titleq">
                                        {{ $t('send_inquiry') }}
                                    </router-link>
                                </h4>
                            </div>
                        </div>
                        <router-link to="/aloqa" class="d-flex readmore align-items-center gap-2">
                            <span class="fz-16 transition fw-600 base inter">
                                {{ $t('more_details') }}
                            </span>
                            <span>
                                <i class="bi bi-arrow-right transition fz-18 base"></i>
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
    <!-- Categoris section Here -->
    <section class="service__section pt-220 pb-220 bg__tblr">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-6 col-xl-8 col-lg-8">
                    <div class="section__title text-center mb-60">
                        <h4 class="sub ralt base mb-16 wow fadeInUp" data-wow-duration="1.1s">
                        </h4>
                        <h2 class="title2 mb-24 wow fadeInUp" data-wow-duration="1.2s">
                            {{ $t('news') }}
                        </h2>
                        <p class="ptext2 fz-16 fw-400 inter wow fadeInUp" data-wow-duration="1.4s">
                        </p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center g-4">
                <div v-for="(news, index) in latestNews" :key="index"
                    class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div class="service__item shadow2 round16 p-8 bgwhite">
                        <router-link :to="`/yangilik/${news.id}`" class="thumb round16 w-100">
                            <template v-if="news.save_image">
                                <img :src="news.save_image" class="round16 w-100" :alt="news.title" />
                            </template>
                            <template v-else-if="news.video">
                                <video controls class="round16 w-100">
                                    <source :src="news.video" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </template>
                        </router-link>
                        <div class="service__content">
                            <h5 class="mb-16">
                                <router-link :to="`/yangilik/${news.id}`" class="titley">
                                    {{ news[`title_${$i18n.locale}`] || news.title_uz }}
                                </router-link>
                                <router-link :to="`/yangilik/${news.id}`" class="titlet">
                                    {{ news[`description_${$i18n.locale}`] || news.description_uz }}
                                </router-link>
                            </h5>
                            <div class="d-flex pb-20 mb-20 align-items-center justify-content-between">
                                <div class="d-flex gap-2 fz-12 fw-600 inter title3">
                                    <i class="ratting"></i>
                                    {{ formatDate(news.date) }}
                                </div>
                                <span class="fz-16 fw-400 inter pra">
                                    <span class="bi bi-eye fz-12 fw-600 base inter title4">
                                        {{ news.views }}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="text-center mt-40">
                <router-link to="/yangiliklar" class="cmn--btn outline__btn" style="text-transform: none;">
                    <span>
                        {{ $t('view_all') }}
                    </span>
                    <span class="ps-1">
                        <i class="bi bi-arrow-up-right"></i>
                    </span>
                </router-link>
            </div>
        </div>
    </section>
    <!-- Categoris section End -->
    <!-- task categorish Section Here -->
    <section class="app__section ralt bg__all2 pb-120 pt-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-6 col-xl-8 col-lg-8">
                    <div class="section__title text-center ralt mb-60">
                        <h4 class="sub ralt base mb-16 wow fadeInUp" data-wow-duration="1.1s">
                        </h4>
                        <h2 class="title2 wow fadeInUp mb-24" data-wow-duration="1.2s">
                            {{ $t('services') }}
                        </h2>
                        <p class="pra fz-16 inter fw-400">
                        </p>
                    </div>
                </div>
            </div>
            <div class="row ralt g-4">
                <div v-for="service in services.slice(-4)" :key="service.id"
                    class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown">
                    <div class="task__item round16 bgwhite d-flex align-items-center">
                        <div class="thumb">
                            <img v-if="service.save_image" :src="service.save_image.replace('http://', 'https://')"
                                :alt="service[locale + '_title']" />
                        </div>
                        <div class="content">
                            <h3 class="inter title mb-24">
                                {{ service[`title_${$i18n.locale}`] || service.title_uz }}
                            </h3>
                            <p class="fz-14 fw-400 inter pra mb-40">
                                {{ service[`description_${$i18n.locale}`] || service.description_uz }}
                            </p>
                            <router-link :to="`/xizmat/${service.id}`" class="cmn--btn outline__btn">
                                <span>
                                    {{ $t('more_details') }}
                                </span>
                                <span>
                                    <i class="bi bi-arrow-up-right"></i>
                                </span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-40">
            <router-link to="/xizmatlar" class="cmn--btn outline__btn">
                <span>
                    {{ $t('view_all') }}
                </span>
                <span class="ps-1">
                    <i class="bi bi-arrow-up-right"></i>
                </span>
            </router-link>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="container">
            <div class="divider">
                <span>{{ $t('cooperating_with_us') }}</span>
            </div>
        </div>
    </section>
    <!-- task categorish Section End -->
    <!-- Perfoming section Here -->
    <section class="perfoming__section bgwhite overhid pt-220 pb-220  sectionbg5" style="color: #ffffff;">
        <div class="container5" style="color: #ffffff;">
            <div class="company__wrap owl-thmee owl-carousel sectionbg5" style="color: #ffffff;">
                <div class="company__logo">
                    <img src="assets/img/companiy2/zood.png" alt="company">
                </div>
                <div class="company__logo">
                    <img src="assets/img/companiy2/ems.png" alt="company">
                </div>
                <div class="company__logo">
                    <img src="assets/img/companiy2/xalq.png" alt="company">
                </div>
                <div class="company__logo">
                    <img src="assets/img/companiy2/ali.png" alt="company">
                </div>
                <div class="company__logo">
                    <img src="assets/img/companiy2/uzum.png" alt="company">
                </div>
                <div class="company__logo">
                    <img src="assets/img/companiy2/temu.png" alt="company">
                </div>
                <div class="company__logo">
                    <img src="https://new.pochta.uz/media/Asset_1.jpg" alt="company">
                </div>
            </div>
        </div>
    </section>
    <!-- Perfoming section End -->


    <!-- Perfoming section Here -->
    <section class="perfoming__section bgwhite overhid pt-220 pb-220">
        <div class="container">
            <div class="perfoming__content">
                <div class="section__title mb-40">
                    <h4 class="sub ralt base mb-16 wow fadeInUp" data-wow-duration="1.1s">

                    </h4>
                    <h2 class="title2 mb-20 wow fadeInUp orta" data-wow-duration="1.2s">
                        {{ $t('about_multibrand_points') }}
                    </h2>
                    <br>
                    <p class="ptext2 fz-16 fw-400 inter wow fadeInUp orta" data-wow-duration="1.4s">
                        {{ $t('multibrand_points_description') }}
                    </p>
                </div>
            </div>
        </div>
        <div class="containeri">
            <div class="perfoming__content">
                <br>
                <br>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col wow fadeInDown">
                        <div class="perfoming__item d-flex">
                            <div
                                class="cmn__ibox transition d-flex align-items-center1 justify-content-center boxes1 round50">
                                <img src="assets/img/custom-icon/5.png" alt="machine">
                            </div>
                            <div class="content">
                                <p class="fz-14 fw-400 inter pra">
                                    {{ $t('multibrand_ordering') }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col wow fadeInDown">
                        <div class="perfoming__item d-flex">
                            <div
                                class="cmn__ibox transition d-flex align-items-center1 justify-content-center boxes1 round50">
                                <img src="assets/img/custom-icon/5.png" alt="machine">
                            </div>
                            <div class="content">
                                <p class="fz-14 fw-400 inter pra">
                                    {{ $t('uzpost_availability') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <br>
                <br>
                <br>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col wow fadeInDown">
                        <div class="perfoming__item d-flex">
                            <div
                                class="cmn__ibox transition d-flex align-items-center1 justify-content-center boxes1 round50">
                                <img src="assets/img/custom-icon/5.png" alt="machine">
                            </div>
                            <div class="content">
                                <p class="fz-14 fw-400 inter pra">
                                    {{ $t('convenience_saving') }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col wow fadeInDown">
                        <div class="perfoming__item d-flex">
                            <div
                                class="cmn__ibox transition d-flex align-items-center1 justify-content-center boxes1 round50">
                                <img src="assets/img/custom-icon/5.png" alt="machine">
                            </div>
                            <div class="content">
                                <p class="fz-14 fw-400 inter pra">
                                    {{ $t('cash_on_delivery') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- Perfoming section End -->
    <!-- Categoris section Here -->
    <!-- <section class="freelancer__section1 ralt pt-120 pb-120 sectionbg5">
        <div class="container">
            <div class="row">
                <div class="col-xxl-6 col-xl-8 col-lg-8">
                    <div class="section__title ralt mb-40">
                        <h4 class="sub ralt base mb-16 wow fadeInUp" data-wow-duration="1.1s">

                        </h4>
                        <h2 class="title5 wow fadeInUp fz-32" data-wow-duration="1.2s">
                            Hamkor marketpleys va onlayn-do'konlar
                        </h2>
                        <p class="fz-18 fw-400 inter pra">
                            Sizni qiziqtirgan platformani tanlab, hamkorlik tafsilotlarini bilib olishingiz mumkin
                        </p>
                    </div>
                </div>
            </div>
            <div class="freelancer__wrapper owl-theme owl-carousel">
                <div class="frelancer__item shadow2 round16 bgwhite1">
                    <router-link to="/xizmat" class="thumb round16 boyi">
                        <img src="assets/img/uzum/uzum.png" class="round16 boyi" alt="service" style="width: 100%;">
                    </router-link>
                    <div class="d-flex pb-1 align-items-center justify-content-between">
                        <div class="d-flex fz-22 fw-400 gap-2 inter pra align-items-center title6" style="
                     font-size: 22px; color: #183E98;">
                            uzum.uz
                        </div>
                        <div class="d-flex fz-18 fw-400 gap-2 inter pra align-items-center">
                            Batafsil
                        </div>
                    </div>
                </div>
                <div class="frelancer__item shadow2 round16 bgwhite1">
                    <router-link to="/xizmat" class="thumb round16 boyi">
                        <img src="assets/img/uzum/xalq.png" class="round16 boyi" alt="service" style="width: 100%;">
                    </router-link>
                    <div class="d-flex pb-1 align-items-center justify-content-between">
                        <div class="d-flex fz-22 fw-400 gap-2 inter pra align-items-center title6" style="
                     font-size: 22px; color: #183E98;">
                            xalq global
                        </div>
                        <div class="d-flex fz-18 fw-400 gap-2 inter pra align-items-center">
                            Batafsil
                        </div>
                    </div>
                </div>
                <div class="frelancer__item shadow2 round16 bgwhite1">
                    <router-link to="/xizmat" class="thumb round16 boyi">
                        <img src="assets/img/uzum/zood.png" class="round16 boyi" alt="service" style="width: 100%;">
                    </router-link>
                    <div class="d-flex pb-1 align-items-center justify-content-between">
                        <div class="d-flex fz-22 fw-400 gap-2 inter pra align-items-center title6" style="
                     font-size: 22px; color: #183E98;">
                            zoodmall.uz
                        </div>
                        <div class="d-flex fz-18 fw-400 gap-2 inter pra align-items-center">
                            Batafsil
                        </div>
                    </div>
                </div>
                <div class="frelancer__item shadow2 round16 bgwhite1">
                    <router-link to="/xizmat" class="thumb round16 boyi">
                        <img src="assets/img/uzum/ali.png" class="round16 boyi" alt="service" style="width: 100%;">
                    </router-link>
                    <div class="d-flex pb-1 align-items-center justify-content-between">
                        <div class="d-flex fz-22 fw-400 gap-2 inter pra align-items-center title6" style="
                     font-size: 22px; color: #183E98;">
                            aliexpress.com
                        </div>
                        <div class="d-flex fz-18 fw-400 gap-2 inter pra align-items-center">
                            Batafsil
                        </div>
                    </div>
                </div>
                <div class="frelancer__item shadow2 round16 bgwhite1">
                    <router-link to="/xizmat" class="thumb round16 boyi">
                        <img src="assets/img/uzum/uzum.png" class="round16 boyi" alt="service" style="width: 100%;">
                    </router-link>
                    <div class="d-flex pb-1 align-items-center justify-content-between">
                        <div class="d-flex fz-22 fw-400 gap-2 inter pra align-items-center title6" style="
                     font-size: 22px; color: #183E98;">
                            uzum.uz
                        </div>
                        <div class="d-flex fz-18 fw-400 gap-2 inter pra align-items-center">
                            Batafsil
                        </div>
                    </div>
                </div>
                <div class="frelancer__item shadow2 round16 bgwhite1">
                    <router-link to="/xizmat" class="thumb round16 boyi">
                        <img src="assets/img/uzum/xalq.png" class="round16 boyi" alt="service" style="width: 100%;">
                    </router-link>
                    <div class="d-flex pb-1 align-items-center justify-content-between">
                        <div class="d-flex fz-22 fw-400 gap-2 inter pra align-items-center title6" style="
                     font-size: 22px; color: #183E98;">
                            aliexpress.com
                        </div>
                        <div class="d-flex fz-18 fw-400 gap-2 inter pra align-items-center">
                            Batafsil
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- Categoris section End -->
    <!-- App Here -->
    <section class="app__section ralt bg__all pt-120">
        <div class="container">
            <div class="row g-4 flex-row-reverse align-items-center justify-content-between">
                <div class="col-xl-6 col-lg-7">
                    <div class="app__content">
                        <div class="section__title mb-30">
                            <h4 class="sub ralt title6 mb-16 wow fadeInDown">
                                {{ $t('download_app') }}
                            </h4>
                            <h2 class="title2 mb-40 wow fadeInUp">
                                {{ $t('app_description') }}
                            </h2>
                            <p class="ptext2 fz-18 fw-400 inter wow fadeInDown title7">
                                {{ $t('app_platforms') }}
                            </p>
                        </div>
                        <div class="app__store d-flex align-items-center gap-3 flex-wrap wow fadeInDown">
                            <a href="https://apps.apple.com/uz/app/uzpost/id1617774039">
                                <img src="assets/img/app/appstore.png" alt="app">
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.uzpost.consumer&hl=uz&gl=US">
                                <img src="assets/img/app/googlepaly.png" alt="app">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5">
                    <div class="app__thumb ralt">
                        <img src="assets/img/app/mob3.png" alt="card" class="" width="500" height="700">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- App End -->
    <section class="app__section ralt bg__all pt-120">
        <div class="container">
            <div>
                <div>
                    <br>
                    <h3 class="fw-600 inter title2 bborderdash pb-24 mb-24">
                        <strong>{{ $t('faq') }}</strong>
                    </h3>
                    <div class="faq__qustion">
                        <div class="accordion__wrap">
                            <div class="accordion" id="accordionExample">
                                <!--Accordion items-->
                                <div class="accordion-item wow fadeInDown" data-wow-duration="0.7s">
                                    <div class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo" style="
                                 border-radius: 4px;
                                 border-top-left-radius: 4px;
                                 border-top-right-radius: 4px;
                                 border-bottom-right-radius: 4px;
                                 border-bottom-left-radius: 4px;
                             ">
                                            {{ $t('faq_find_branch') }}
                                        </button>
                                        <div id="collapseTwo" class="accordion-collapse collapse"
                                            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body" style="
                                 border-radius: 4px;
                                 border-top-left-radius: 4px;
                                 border-top-right-radius: 4px;
                                 border-bottom-right-radius: 4px;
                                 border-bottom-left-radius: 4px;
                             ">
                                                <p>
                                                    <router-link to="map" class="textrang" target="_blank">
                                                        <strong><span>{{ $t('sections_map') }}</span></strong>
                                                    </router-link>

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--Accordion items-->
                                <div class="accordion-item wow fadeInDown" data-wow-duration="0.9s">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne" style="
                                 border-radius: 4px;
                                 border-top-left-radius: 4px;
                                 border-top-right-radius: 4px;
                                 border-bottom-right-radius: 4px;
                                 border-bottom-left-radius: 4px;
                             ">
                                            {{ $t('faq_tariffs') }}
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body" style="
                              border-radius: 4px;
                              border-top-left-radius: 4px;
                              border-top-right-radius: 4px;
                              border-bottom-right-radius: 4px;
                              border-bottom-left-radius: 4px;
                          ">
                                            <p>

                                                <router-link to="/headeritem/respublika-ichidagi-xizmatlar?id=13"
                                                    class="textrang">
                                                    <strong><span>{{ $t('services_rates') }}</span></strong>
                                                </router-link>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <!--Accordion items-->
                                <div class="accordion-item wow fadeInDown" data-wow-duration="1s">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree" style="
                                 border-radius: 4px;
                                 border-top-left-radius: 4px;
                                 border-top-right-radius: 4px;
                                 border-bottom-right-radius: 4px;
                                 border-bottom-left-radius: 4px;
                             ">
                                            {{ $t('faq_tracking') }}
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body" style="
                              border-radius: 4px;
                              border-top-left-radius: 4px;
                              border-top-right-radius: 4px;
                              border-bottom-right-radius: 4px;
                              border-bottom-left-radius: 4px;
                          ">
                                            <p>
                                                {{ $t('tracking_instruction') }} {{ $t('tracking_code_format') }}



                                                <br><img src="assets/img/aralash/kuzatish1.png" alt="Rasm" width="300"
                                                    height="200">
                                                <br>
                                                <strong>{{ $t('tracking_code_types_heading') }}</strong>
                                                <br>{{ $t('tracking_code_type_C') }}
                                                <br>{{ $t('tracking_code_type_R') }}
                                                <br>{{ $t('tracking_code_type_L') }}
                                                <br>{{ $t('tracking_code_type_E') }}
                                                <br>{{ $t('tracking_code_type_V') }}
                                                <br>{{ $t('tracking_code_type_A') }}
                                                <br>{{ $t('tracking_code_type_U') }}
                                                <br>{{ $t('tracking_code_type_Z') }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <!--Accordion items-->
                                <div class="accordion-item wow fadeInDown" data-wow-duration="1.1s">
                                    <h2 class="accordion-header" id="headingOner">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseOner"
                                            aria-expanded="true" aria-controls="collapseOner" style="
                                 border-radius: 4px;
                                 border-top-left-radius: 4px;
                                 border-top-right-radius: 4px;
                                 border-bottom-right-radius: 4px;
                                 border-bottom-left-radius: 4px;
                             ">
                                            {{ $t('faq_post_index') }}
                                        </button>
                                    </h2>
                                    <div id="collapseOner" class="accordion-collapse collapse"
                                        aria-labelledby="headingOner" data-bs-parent="#accordionExample">
                                        <div class="accordion-body" style="
                              border-radius: 4px;
                              border-top-left-radius: 4px;
                              border-top-right-radius: 4px;
                              border-bottom-right-radius: 4px;
                              border-bottom-left-radius: 4px;
                          ">
                                            <p>
                                                {{ $t('department_index') }} -
                                                <router-link to="/map" class="textrang">
                                                    <strong><span>{{ $t('my_index') }}</span></strong>
                                                </router-link>

                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <!--Accordion items-->
                                <div class="text-center mt-40">
                                    <router-link to="/savollar" class="cmn--btn outline__btn"
                                        style="text-transform: none;">
                                        <span>
                                            {{ $t('view_all') }}
                                        </span>
                                        <span class="ps-1">
                                            <i class="bi bi-arrow-up-right"></i>
                                        </span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="app__section ralt bg__all1 pb-120 pt-120">
        <div class="container">
            <div class="row">
                <div class="col-xxl-6 col-xl-8 col-lg-8">
                    <div class="section__title ralt mb-40">
                        <h4 class="sub ralt base mb-16 wow fadeInUp" data-wow-duration="1.1s">
                        </h4>
                        <h2 class="title2 wow fadeInUp" data-wow-duration="1.2s">
                            {{ $t('mark_catalog') }}
                        </h2>
                    </div>
                </div>
            </div>
            <div class="container4 d-flex flex-wrap gap-3">
                <div v-for="item in marks" :key="item.id" class="frelancer__item shadow2 round16 bgwhite eni">
                    <a :href="`/marka2/${item.id}`" class="thumb round16 w-100">
                        <img :src="item[`save_image_${$i18n.locale}`]?.replace('http://', 'https://') || item.save_image_uz"
                            class="round16 w-100" alt="service" />
                    </a>
                    <h5 class="mt-24 mb-20">
                        <a :href="`/marka2/${item.id}`" class="titley">
                            {{ truncateTitle(item[`title_${$i18n.locale}`] || item.title_uz, 45) }}
                        </a>
                    </h5>
                    <div class="d-flex bborderdash pb-20 align-items-center justify-content-between">
                        <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                            <i class="bi bi-stopwatch"></i>
                            {{ item.years || '-' }}
                        </div>
                        <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                            <i class="bi bi-bar-chart"></i>
                            {{ item[`marks_count_${$i18n.locale}`] || '-' }}
                        </div>
                    </div>
                    <div class="d-flex align-items-center mt-20 justify-content-between">
                        <span class="fz-18 fw-600 inter base">
                            {{ formatPrice(item[`price_${$i18n.locale}`]) }}
                        </span>
                        <div class="cmn__ibox boxes1 round50 d-flex align-items-center justify-content-center">
                            <a :href="`/marka2/${item.id}`">
                                <i class="bi bi-chevron-right title fz-16"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-40">
                <router-link to="/markalar" class="cmn--btn outline__btn" style="text-transform: none;">
                    <span>
                        {{ $t('view_all') }}
                    </span>
                    <span class="ps-1">
                        <i class="bi bi-arrow-up-right"></i>
                    </span>
                </router-link>
            </div>
        </div>
    </section>

    <section class="company__sectioni bgwhite pb-060 pt-060">
        <div class="container">
            <div class="row g-4">
                <div class="col-xl-8 col-lg-8">
                    <!-- Additional content can go here -->
                </div>
                <div class="based__content border round16 bgwhite">
                    <div class="freelancer__profile bborderdash pb-24 mb-24 align-items-center d-flex">
                        <div class="box__add">
                            <h3 class="mb-10 title">
                                {{ $t('central_bank_exchange_rates') }}
                            </h3>
                        </div>
                    </div>
                    <ul id="currency-list" class=" d-flex align-items-center justify-content-between">
                        <!-- List items will be dynamically inserted here -->
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!--service grid end-->
    <!-- Company Logo Here -->
    <section class="company__section bgwhite pb-060 pt-060">

        <div class="container">
            <div class="company__wrap owl-carousel">
                <div class="company__logo">
                    <img src="assets/img/company/company1.png" alt="company">
                </div>
                <div class="company__logo">
                    <img src="assets/img/company/company2.png" alt="company">
                </div>
                <div class="company__logo">
                    <img src="assets/img/company/company3.png" alt="company">
                </div>
                <div class="company__logo">
                    <img src="assets/img/company/company4.png" alt="company">
                </div>
            </div>
        </div>
    </section>
    <!-- Company Logo End -->
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            marks: [],
            latestNews: [],
            services: [],
            banners: [], // API'dan kelayotgan bannerlar
            currentBannerIndex: 0, // Hozirgi ko'rsatilayotgan banner indeksi
            locale: this.$i18n.locale === "uz" ? "description_uz" : "description_ru",
        };
    },
    computed: {
        // Hozirgi ko'rsatilayotgan bannerning rasmi
        currentImage() {
            const locale = this.$i18n.locale || "uz";
            if (this.banners.length > 0) {
                const currentBanner = this.banners[this.currentBannerIndex];
                return locale === "ru" ? currentBanner.image_ru : currentBanner.image_uz;
            }
            return "";
        },
        // Hozirgi banner uchun tugmalar
        currentLinks() {
            const locale = this.$i18n.locale || "uz";
            if (this.banners.length > 0) {
                const currentBanner = this.banners[this.currentBannerIndex];
                return currentBanner.links.map(link => ({
                    title: locale === "ru" ? link.title_ru : link.title_uz,
                    url: locale === "ru" ? link.link_ru : link.link_uz,
                }));
            }
            return [];
        },
    },
    methods: {
        async fetchServices() {
            try {
                const response = await axios.get("https://new.pochta.uz/api/v1/public/services/");
                this.services = response.data;
            } catch (error) {
                console.error("API fetch error: ", error);
            }
        },
        fetchData() {
            axios
                .get('https://new.pochta.uz/api/v1/public/marks/')
                .then((response) => {
                    this.marks = response.data.slice(-4); // Oxirgi 5 ta element olish
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        },
        truncateTitle(title, length) {
            return title?.length > length ? title.substring(0, length) + '...' : title;
        },
        formatPrice(price) {
            return price ? `${price} ${this.$t('summ')}` : this.$t('unknown_price');
        },
        async fetchNews() {
            try {
                const response = await axios.get("https://new.pochta.uz/api/v1/public/uz-post-news/");
                this.latestNews = response.data.slice(-4).reverse().map((news) => {
                    let videoUrl = null;
                    if (!news.save_image) {
                        const videos = news[`video_${this.$i18n.locale}`] || [];
                        if (videos.length > 0) {
                            videoUrl = videos[0].file.replace("http://", "https://");
                        }
                    }
                    return {
                        ...news,
                        save_image: news.save_image ? this.ensureHttps(news.save_image) : null,
                        video: videoUrl,
                    };
                });
            } catch (error) {
                console.error("Yangiliklarni olishda xato:", error);
            }
        }
        ,
        ensureHttps(url) {
            // Agar URL HTTP bo'lsa, uni HTTPS'ga almashtiramiz
            if (url?.startsWith("http://")) {
                return url.replace("http://", "https://");
            }
            return url;
        },
        formatDate(dateString) {
            const date = new Date(dateString); // Stringni Date obyektiga aylantirish
            const day = String(date.getDate()).padStart(2, '0'); // Kuni (2 xonali)
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Oyi (2 xonali)
            const year = date.getFullYear(); // Yili
            return `${day}.${month}.${year}`; // "DD.MM.YYYY" formatida qaytarish
        },
        // API'dan banner ma'lumotlarini olish
        async fetchBanners() {
            try {
                const response = await axios.get("https://new.pochta.uz/api/v1/public/banners/");
                this.banners = response.data.filter(
                    banner => banner.status && banner.fizlitso_status
                ).map(banner => ({
                    ...banner,
                    image_uz: this.ensureHttps(banner.image_uz),
                    image_ru: this.ensureHttps(banner.image_ru),
                }));

            } catch (error) {
                console.error("Bannerni olishda xato:", error);
            }
        },
        // Bannerlarni avtomatik ravishda almashtirish
        startBannerSlideshow() {
            setInterval(() => {
                if (this.banners.length > 0) {
                    this.currentBannerIndex =
                        (this.currentBannerIndex + 1) % this.banners.length;
                }
            }, 5000); // Har 5 soniyada bannerni o'zgartirish
        },
    },
    mounted() {
        this.fetchData();
        this.fetchNews();
        this.fetchServices();
        // Bannerlarni olish va slideshow'ni boshlash
        this.fetchBanners().then(() => {
            this.startBannerSlideshow();
        });
    },
};
</script>





<style scoped>
.banner-image {
    width: 100%;
    height: auto;
    display: block;
}

.container4 {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.frelancer__item {
    background: white;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
}


/* Elementlar gorizontal tarzda chiqishi uchun */
.freelancer__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    /* Kartalar orasidagi masofa */
}

.frelancer__item {
    flex: 1 1 calc(25% - 1.5rem);
    /* Har biri 4 qismga teng */
    /* max-width: calc(% - 1.5rem); */
    /* Katta ekranlar uchun cheklash */
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
}

@media (max-width: 768px) {
    .frelancer__item {
        flex: 1 1 calc(50% - 1.5rem);
        /* Mobilda 2 ta ustun */
    }
}

@media (max-width: 480px) {
    .frelancer__item {
        flex: 1 1 100%;
        /* Juda kichik ekranda 1 ta ustun */
    }
}

/* Umumiy rasm uslubi */
.header-wrapper img {
    max-width: 100%;
    height: auto;
    /* Rasm nisbatlarini saqlab qoladi */
    display: block;
    margin: 0 auto;
    /* Rasmni markazlashtirish uchun */
}

/* Kichik ekranlar uchun maxsus uslublar */
@media (max-width: 768px) {
    .header-wrapper img {
        max-width: 90%;
        /* Rasm ekran kengligining 90% gacha qisqaradi */
    }
}

/* Juda kichik ekranlar uchun (mobil telefonlar) */
@media (max-width: 480px) {
    .header-wrapper img {
        max-width: 100%;
        height: auto;
    }
}

@media (max-width: 768px) {

    /* 768px yoki undan kichik ekranlar uchun */
    .button-container {
        display: flex;
        flex-direction: column;
        /* Tugmalarni ustma-ust joylashtiradi */
        gap: 10px;
        /* Tugmalar orasidagi masofani moslaydi */
        align-items: center;
        /* Tugmalarni markazlaydi */
        margin-top: 20px;
        /* Yuqori chetidan masofa */
    }
}

@media (max-width: 480px) {

    /* 480px yoki undan kichik ekranlar uchun */
    .button-container {
        margin-top: 50px;
        /* Yuqoridan masofani oshiradi */
    }
}

@media screen and (max-width: 1000px) {
    .button-container {
        display: none;
    }
}

.freelancer__wrapper2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* Elementlarni markazga hizalash */
    gap: 16px;
    /* Elementlar orasidagi masofa */
}



@media (max-width: 992px) {
    .frelancer__item2 {
        flex: 1 1 calc(50% - 16px);
        /* O'rta ekran uchun 2 ustun */
        max-width: calc(50% - 16px);
    }
}

@media (max-width: 576px) {
    .frelancer__item2 {
        flex: 1 1 100%;
        /* Kichik ekran uchun 1 ustun */
        max-width: 100%;
    }
}

.custom-button span {
    text-transform: none;
}

.service__item {
    display: flex;
    flex-direction: column;
    /* Tarkibni ustun shaklida joylashtiradi */
    justify-content: space-between;
    /* Pastki elementlarni chekka joylarga itaradi */
    height: 100%;
    /* Kartochkaning balandligini teng qiladi */
    min-height: 300px;
    /* Minimal balandlik */
}

.thumb {
    flex-shrink: 0;
    /* Rasm qisqarib qolmasligi uchun */
}

.service__content {
    flex-grow: 1;
    /* Tarkib qismini bo‘sh joyni to‘ldirish uchun */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.titley,
.titlet {
    display: -webkit-box;
    /* Flexboxga o'xshash usul */
    -webkit-line-clamp: 2;
    /* Ikki qator bilan cheklaydi */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    /* Oxiriga uch nuqta qo'shadi */
    white-space: normal;
}




@media (max-width: 1200px) {
    .task__item {
        flex-direction: column;
        /* Elementlarni vertikal qilib o'rnatadi */
        text-align: center;
        /* Kontentni markazlashtiradi */
    }

    .task__item .thumb {
        margin-bottom: 20px;
        /* Rasmlar va kontent orasida masofa qo'shadi */
        flex: 0 0 auto;
        /* Rasm qisqarishini oldini oladi */
    }

    .task__item .content {
        flex: 1 1 auto;
        /* Kontent qismini to'ldiradi */
    }

    .task__item img {
        max-width: 100%;
        /* height: auto; */
        margin: 0 auto;
        /* Rasmlarni markazlashtiradi */
    }

    .container {
        padding: 0 15px;
        /* Yon tomondagi bo'shliqni sozlaydi */
    }
}
</style>