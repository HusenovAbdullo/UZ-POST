<template>
    <section class="slideshow-container" id="slideshow">
        <div class="container">
            <div class="header-wrapper">
                <img src="assets/img/bosh/2.png" alt="Image 1" class="desktop-img">
                <img src="assets/img/bosh/image1-mobile.jpg" alt="Image 1 Mobile" class="mobile-img">
                <div class="button-container" style="display: flex; gap: 7px; ">
                    <router-link to="/xizmat" class="cmn--btn custom-button">
                        <span>
                            Xizmat haqida batafsil
                        </span>
                    </router-link>
                    <router-link to="/map" class="cmn--btn custom-button">
                        <span>
                            "Bir Qadam" bo'limlari xaritasi
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <!-- timely worktwo Here 6 talik -->
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
                                        Pochta bo'limni qidirish
                                    </router-link>
                                </h4>
                            </div>
                        </div>
                        <router-link to="/map" class="d-flex readmore align-items-center gap-2">
                            <span class="fz-16 transition fw-600 base inter">
                                Batafsil
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
                                    <a class="titleq">
                                        Yangiliklar
                                    </a>
                                </h4>
                                <br>
                            </div>
                        </div>
                        <router-link to="/yangiliklar" class="d-flex readmore align-items-center gap-2">
                            <span class="fz-16 transition fw-600 base inter">
                                Batafsil
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
                                        Jo'natma kalkulyatori
                                    </router-link>
                                </h4>
                            </div>
                        </div>
                        <router-link to="/Kalkulyator" class="d-flex readmore align-items-center gap-2">
                            <span class="fz-16 transition fw-600 base inter">
                                Batafsil
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
                                    <router-link to="/kalkulyator" class="titleq">
                                        Jo'natmani rasmiylashtirish
                                    </router-link>
                                </h4>
                            </div>
                        </div>
                        <router-link to="/kalkulyator" class="d-flex readmore align-items-center gap-2">
                            <span class="fz-16 transition fw-600 base inter">
                                Batafsil
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
                                    <router-link to="/map" class="titleq">
                                        Mening pochta indeksim
                                    </router-link>
                                </h4>
                            </div>
                        </div>
                        <router-link to="/map" class="d-flex readmore align-items-center gap-2">
                            <span class="fz-16 transition fw-600 base inter">
                                Batafsil
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
                                        Xabar yuborish
                                    </router-link>
                                </h4>
                            </div>
                        </div>
                        <router-link to="/aloqa" class="d-flex readmore align-items-center gap-2">
                            <span class="fz-16 transition fw-600 base inter">
                                Batafsil
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
    <section class="service__section pt-220 pb-220  bg__tblr">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-6 col-xl-8 col-lg-8">
                    <div class="section__title text-center mb-60">
                        <h4 class="sub ralt base mb-16 wow fadeInUp" data-wow-duration="1.1s">
                        </h4>
                        <h2 class="title2 mb-24 wow fadeInUp" data-wow-duration="1.2s">
                            Yangiliklar
                        </h2>
                        <p class="ptext2 fz-16 fw-400 inter wow fadeInUp" data-wow-duration="1.4s">
                        </p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center g-4">
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div class="service__item shadow2 round16 p-8 bgwhite">
                        <router-link to="/yangilik3" class="thumb round16 w-100">
                            <img src="assets/img/service/bayroq.jpg" class="round16 w-100" alt="service" />
                        </router-link>
                        <div class="service__content">
                            <div class="d-flex mb-16 align-items-center justify-content-between">
                                <div class="d-flex gap-2 fz-16 fw-600 inter title">
                                </div>
                            </div>
                            <h5 class="mb-16">
                                <router-link to="/yangilik3" class="titley">
                                    Davlat bayrog‘i – mustaqillik ramzi
                                </router-link>
                                <br>
                                <br>
                                <router-link to="/yangilik3" class="titlet">
                                    O‘zbekiston aholisini davlatimiz mustaqilligi va asosiy qadriyatlarimizni aks
                                    ettiruvchi davlat bayrog‘i qabul qilingan kun bilan tabriklaymiz. Yurtimizning
                                    barcha fuqarolarini tabriklaymiz hamda shaxsiy, kasbiy va ijtimoiy hayotda
                                    baxt-saodat va farovonlik tilaymiz
                                </router-link>
                            </h5>
                            <div class="d-flex pb-20 mb-20 align-items-center justify-content-between">
                                <div class="d-flex gap-2 fz-12 fw-600 inter title3">
                                    <i class=" ratting"></i>
                                    14.06.24
                                </div>
                                <span class="fz-16 fw-400 inter pra">
                                    <span class="bi bi-eye fz-12 fw-600 base inter title4"> 456</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div class="service__item shadow2 round16 p-8 bgwhite">
                        <router-link to="/yangilik4" class="thumb round16 w-100">
                            <img src="assets/img/service/2.jpg" class="round16 w-100" alt="service" />
                        </router-link>
                        <div class="service__content">
                            <div class="d-flex mb-16 align-items-center justify-content-between">
                                <div class="d-flex gap-2 fz-16 fw-600 inter title">
                                </div>
                            </div>
                            <h5 class="mb-16">
                                <router-link to="/yangilik4" class="titley">
                                    “O‘zbekiston pochtasi” AJ aksiyadorlarining navbatdan tashqari umumiy yig‘ilishi
                                    o‘tkazilishi to‘g‘risida xabarnoma
                                </router-link>
                                <br>
                                <br>
                                <router-link to="/yangilik4" class="titlet">
                                    Aksiyadorlarni ro‘yxatga olish soat 09:00 dan 10:55 gacha amalga oshiriladi....
                                </router-link>
                            </h5>
                            <div class="d-flex pb-20 mb-20 align-items-center justify-content-between">
                                <div class="d-flex gap-2 fz-12 fw-600 inter title3">
                                    <i class=" ratting"></i>
                                    14.06.24
                                </div>
                                <span class="fz-16 fw-400 inter pra">
                                    <span class="bi bi-eye fz-12 fw-600 base inter title4"> 456</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div class="service__item shadow2 round16 p-8 bgwhite">
                        <router-link to="/yangilik5" class="thumb round16 w-100">
                            <img src="assets/img/service/ustozlar.jpg" class="round16 w-100" alt="service">
                        </router-link>
                        <div class="service__content">
                            <div class="d-flex mb-16 align-items-center justify-content-between">
                                <div class="d-flex gap-2 fz-16 fw-600 inter title">
                                </div>
                            </div>
                            <h5 class="mb-16">
                                <router-link to="/yangilik5" class="titley">
                                    21-oktyabr – O‘zbek tili bayrami kuni
                                </router-link>
                                <br>
                                <br>
                                <router-link to="/yangilik5" class="titlet">
                                    Unda O‘zbekiston Yozuvchilar uyushmasi a’zosi, shoir, “Shuhrat” medali sohibi Turob
                                    Niyoz qatnashib, ishtirokchilarga o‘zbek tilining ahamiyati va jamiyatimizda tutgan
                                    o‘rni to‘g‘risida gapirdi:
                                </router-link>
                            </h5>
                            <div class="d-flex pb-20 mb-20 align-items-center justify-content-between">
                                <div class="d-flex gap-2 fz-12 fw-600 inter title3">
                                    <i class=" ratting"></i>
                                    14.06.24
                                </div>
                                <span class="fz-16 fw-400 inter pra">
                                    <span class="bi bi-eye fz-12 fw-600 base inter title4"> 456</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div class="service__item shadow2 round16 p-8 bgwhite">
                        <router-link to="/yangilik6" class="thumb round16 w-100">
                            <img src="assets/img/service/e38d18fbac6a40a5a905a396029bc51f.png" class="round16 w-100"
                                alt="service">
                        </router-link>
                        <div class="service__content">
                            <div class="d-flex mb-16 align-items-center justify-content-between">
                                <div class="d-flex gap-2 fz-16 fw-600 inter title">
                                </div>
                            </div>
                            <h5 class="mb-16">
                                <router-link to="/yangilik6" class="titley">
                                    “ANTIKORRUPSIYA/расмий” telegram-kanalida 2024-yil 16-oktyabr sanasida 13:26 da
                                    “Pochta bo‘linmasi sotilganligi tasdiqlanmoqda” sarlavhasi bilan joylashtirilgan
                                    postga nisbatan RASMIY MUNOSABAT
                                </router-link>
                                <br>
                                <router-link to="/yangilik6" class="titlet">
                                </router-link>
                            </h5>
                            <div class="d-flex pb-20 mb-20 align-items-center justify-content-between">
                                <div class="d-flex gap-2 fz-12 fw-600 inter title3">
                                    <i class=" ratting"></i>
                                    14.06.24
                                </div>
                                <span class="fz-16 fw-400 inter pra">
                                    <span class="bi bi-eye fz-12 fw-600 base inter title4"> 456</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-40">
                <router-link to="/yangiliklar" class="cmn--btn outline__btn">
                    <span>
                        Barchasini ko'rish
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
                            Xizmatlar
                        </h2>
                        <p class="pra fz-16 inter fw-400">
                        </p>
                    </div>
                </div>
            </div>
            <div class="row ralt g-4">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown">
                    <div class="task__item round16 bgwhite d-flex align-items-center">
                        <div class="thumb">
                            <img src="assets/img/task/bir qadam.png" alt="img">
                        </div>
                        <div class="content">
                            <h3 class="inter title mb-24">
                                "Bir Qadam" xizmati
                            </h3>
                            <p class="fz-14 fw-400 inter pra mb-40">
                                "Bir Qadam" - bu O'zbekiston bo'ylab belgilangan bo'limlar orasida 1 KUN ichida yetkazib
                                berish
                                xizmati.
                            </p>
                            <router-link to="/xizmat" class="cmn--btn outline__btn">
                                <span>
                                    Batafsil
                                </span>
                                <span>
                                    <i class="bi bi-arrow-up-right"></i>
                                </span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp">
                    <div class="task__item round16 bgwhite d-flex align-items-center">
                        <div class="thumb">
                            <img src="assets/img/task/courier service.png" alt="img">
                        </div>
                        <div class="content">
                            <h3 class="inter title mb-24">
                                Kuryerlik xizmati
                            </h3>
                            <p class="fz-14 fw-400 inter pra mb-40">
                                Jo'natmalarni ixtiyoriy pochta bo'limidan O'zbekiston bo'ylab adresatlargacha yetkazib
                                berish
                                xizmati
                            </p>
                            <router-link to="/kuryerlikXizmati" class="cmn--btn outline__btn">
                                <span>
                                    Batafsil
                                </span>
                                <span>
                                    <i class="bi bi-arrow-up-right"></i>
                                </span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <!--<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown">-->
                <!--    <div class="task__item round16 bgwhite d-flex align-items-center">-->
                <!--        <div class="thumb">-->
                <!--            <img src="assets/img/task/3.png" alt="img">-->
                <!--        </div>-->
                <!--        <div class="content">-->
                <!--            <h3 class="inter title mb-24">-->
                <!--                EMS: Xalqaro Tezkor Pochta-->
                <!--            </h3>-->
                <!--            <p class="fz-14 fw-400 inter pra mb-40">-->
                <!--                Ushbu xizmat jo'natmalarni butun dunyo bo'ylab 7-15 kun ichida yetkazib berish-->
                <!--                garovidir.-->
                <!--            </p>-->
                <!--            <br>-->
                <!--            <router-link to="/xalqaroPochta" class="cmn--btn outline__btn">-->
                <!--                <span>-->
                <!--                    Batafsil-->
                <!--                </span>-->
                <!--                <span>-->
                <!--                    <i class="bi bi-arrow-up-right"></i>-->
                <!--                </span>-->
                <!--            </router-link>-->
                <!--        </div>-->
                <!--    </div>-->
                <!--</div>-->
                <!--<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp">-->
                <!--    <div class="task__item round16 bgwhite d-flex align-items-center">-->
                <!--        <div class="thumb">-->
                <!--            <img src="assets/img/task/buyurt.png" alt="img">-->
                <!--        </div>-->
                <!--        <div class="content">-->
                <!--            <h3 class="inter title mb-24">-->
                <!--                Buyurtmalarni pochta bo'limlarida qabul qilish-->
                <!--            </h3>-->
                <!--            <p class="fz-14 fw-400 inter pra mb-40">-->
                <!--                Marketpleys va onlayn-do'konlardan jo'natmalarni UzPost bo'limlarida qabul qilish-->
                <!--            </p>-->
                <!--            <router-link to="/pochtaBolimi" class="cmn--btn outline__btn">-->
                <!--                <span>-->
                <!--                    Batafsil-->
                <!--                </span>-->
                <!--                <span>-->
                <!--                    <i class="bi bi-arrow-up-right"></i>-->
                <!--                </span>-->
                <!--            </router-link>-->
                <!--        </div>-->
                <!--    </div>-->
                <!--</div>-->
            </div>
        </div>
        <!-- <div class="text-center mt-40">
            <router-link to="/xizmatlar" class="cmn--btn outline__btn">
                <span>
                    Barchasini ko'rish
                </span>
                <span class="ps-1">
                    <i class="bi bi-arrow-up-right"></i>
                </span>
            </router-link>
        </div> -->
        <br>
        <br>
        <br>
        <br>
        <div class="container">
            <div class="divider">
                <span>BIZ BILAN HAMKORLIK QILMOQDA</span>
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
                        UzPost multibrend topshirish punktlari haqida
                    </h2>
                    <br>
                    <p class="ptext2 fz-16 fw-400 inter wow fadeInUp orta" data-wow-duration="1.4s">
                        Multibrend topshirish punktlari - bu marketpleys va onlayn-do'kon xaridorlariga buyurtmalarni
                        UzPost
                        bo'limlarida topshirish imkoniyati. UzPost bo'limlari mijozlar uchun yaqin va qulay.
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
                                    Turli xil bizning hamkor marketpleys/onlayn-do'konlardan UzPost bo'limlarini tablab
                                    buyurtma bering
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
                                    UzPost bo'limlari butun O'zbekiston bo'ylab tumanlar miqyosigacha mavjud.
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
                                    Agar pochta bo‘limi do‘konlarning alohida topshirish punktlariga qaraganda yaqinroq
                                    bo‘lsa, bu vaqt va kuchni tejaydi.
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
                                    Ba'zi hamkor marketpleys/onlayn-do'konlardan qilingan buyurtmalar uchun to'lovni
                                    qabul qilish
                                    vaqtida ham amalga oshirsa bo'ladi.Qisqacha ma'lumot yoziladi
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
    <section class="app__section ralt bg__all pb-120 pt-120">
        <div class="container">
            <div class="row g-4 flex-row-reverse align-items-center justify-content-between">
                <div class="col-xl-6 col-lg-7">
                    <div class="app__content">
                        <div class="section__title mb-30">
                            <h4 class="sub ralt title6 mb-16 wow fadeInDown">
                                Ilovamizni yuklab oling va yangiliklardan xabardor bo'lib turing!
                            </h4>
                            <h2 class="title2 mb-40 wow fadeInUp">
                                UzPost mobil ilovasini yuklab oling va qulayliklardan foydalaning!
                            </h2>
                            <p class="ptext2 fz-18 fw-400 inter wow fadeInDown title7">
                                Ilova App Store va Google Play platformalarida mavjud
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
                        <img src="assets/img/app/mob.png" alt="card" class="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- App End -->
    <section class="app__section ralt bg__all pb-120 pt-120">
        <div class="container">
            <div>
                <div>
                    <br>
                    <h3 class="fw-600 inter title2 bborderdash pb-24 mb-24">
                        <strong>Koʻp beriladigan savollar</strong>
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
                                            Eng yaqin bo'limni qanday topish mumkin?
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
                                                        <strong><span>BO'LIMLAR XARITASI</span></strong>
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
                                            UzPost xizmatlari tariflari bilan qayerda tanishib chiqsa bo'ladi?
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
                                                Xizmatlar tariflari bilan
                                                <router-link :to="{ path: '/tariflar', query: { id: 806 } }"
                                                    class="textrang">
                                                    <strong><span>bu yerda</span></strong>
                                                </router-link> tanishishingiz mumkin!
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
                                            Jo'natmani qanday kuzatish mumkin?
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
                                                Pochta jo'natmalarini ushbu saytning bosh sahifasida mavjud bo'lgan
                                                jo'natmalarni kuzatish funksiyasi orqali jo'natma trek-kodini kiritish
                                                yo'li bilan amalga oshirish mumkin. Trek-kod boshida “ikkita harf”,
                                                keyin “to'qqizta raqam” va oxirida “ikkita harf” ko'rinishida bo'ladi.
                                                Misol uchun, RF270145546CN.



                                                <br><img src="assets/img/aralash/kuzatish.png" alt="Rasm"><br>
                                                <strong>Trek kodi harf bilan boshlanadigan jo'natish turlari:</strong>
                                                <br>"C" - oddiy posilka (2 kg dan ortiq), yetkazib berilgunga qadar
                                                kuzatuv
                                                <br>"R" - mayda paket (2 kg dan kam), yetkazib berilgunga qadar kuzatuv
                                                <br>"L" - mayda paket (2 kg dan kam), yetkazib berilgunga qadar kuzatuv,
                                                qabul qiluvchi mamlakatning pochta operatori orqali qidirilmaydi
                                                <br>"E" - tezkor jo'natish (EMS), ikkinchi harf tartibli hisoblanib,
                                                yetkazib berilgunga qadar kuzatuv
                                                <br>"V" - sug'urtali xat
                                                <br>"A" - mayda paket, qabul qiluvchi mamlakat tomonidan kuzatilmaydi,
                                                qabul qiluvchi mamlakatning pochta operatori orqali qidirilmaydi
                                                <br>"U" - mayda paket, qabul qiluvchi mamlakat tomonidan kuzatilmaydi,
                                                qabul qiluvchi mamlakatning pochta operatori orqali qidirilmaydi
                                                <br>"Z" - mayda paket, qabul qiluvchi mamlakat bo'yicha qisman kuzatuv
                                                (faqat qabul qiluvchining pochta bo'limiga kelganligi haqida ma'lumot)
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
                                            Mening indeksim nima?
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
                                                Siz belgilangan manzilga xizmat ko'rsatadigan bo'lim indeksini bu yerda
                                                aniqlashingiz mumkin -
                                                <router-link to="/map" class="textrang">
                                                    <strong><span>MENING INDEKSIM</span></strong>
                                                </router-link>

                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <!--Accordion items-->
                                <div class="text-center mt-40">
                                    <router-link to="/savollar" class="cmn--btn outline__btn">
                                        <span>
                                            Barchasini ko'rish
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
                        <h4 class="sub ralt base mb-16 wow fadeInUp" data-wow-duration="1.1s"></h4>
                        <h2 class="title2 wow fadeInUp" data-wow-duration="1.2s">Markalar katalogi</h2>
                    </div>
                </div>
            </div>
            <div class="freelancer__wrapper d-flex flex-wrap justify-content-center gap-4">
                <div class="frelancer__item shadow2 round16 bgwhite eni" v-for="(mark, index) in marksToShow"
                    :key="index">
                    <router-link :to="'/marka2/' + mark.id" class="thumb round16 w-100">
                        <img :src="fixImageUrl(mark.save_image_uz)" class="round16 w-100" :alt="mark.title_uz" />
                    </router-link>
                    <h5 class="mt-24 mb-20">
                        <router-link :to="'/marka2/' + mark.id" class="titley">{{ mark.title_uz }}</router-link>
                    </h5>
                    <div class="d-flex bborderdash pb-20 align-items-center justify-content-between">
                        <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                            <i class="bi bi-stopwatch"></i>
                            {{ mark.years }}
                        </div>
                        <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                            <i class="bi bi-bar-chart"></i>
                            {{ mark.count_number || 0 }}
                        </div>
                    </div>
                    <div class="d-flex align-items-center mt-20 justify-content-between">
                        <span class="fz-18 fw-600 inter base">{{ mark.price_uz || 'Narx mavjud emas' }} so'm</span>
                        <router-link :to="'/marka2/' + mark.id"
                            class="cmn__ibox boxes1 round50 d-flex align-items-center justify-content-center">
                            <i class="bi bi-chevron-right title fz-16"></i>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="text-center mt-40">
                <router-link to="/markalar2" class="cmn--btn outline__btn">
                    <span>Barchasini ko'rish</span>
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
                                Markaziy bank valyuta kurslari
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
import axios from "axios";

export default {
    data() {
        return {
            marks: [],
        };
    },
    computed: {
        marksToShow() {
            return this.marks.slice(-4);
        },
    },
    methods: {
        fixImageUrl(url) {
            return url.startsWith("http:") ? url.replace("http:", "https:") : url;
        },
    },
    mounted() {
        axios
            .get("https://new.pochta.uz/api/v1/public/marks-page/")
            .then((response) => {
                if (response.data.results && Array.isArray(response.data.results)) {
                    this.marks = response.data.results;
                } else {
                    console.error("Kutilgan formatdagi ma'lumotlar kelmadi");
                }
            })
            .catch((error) => {
                console.error("API'dan ma'lumot olishda xatolik:", error);
            });
    },
};
</script>

<style scoped>
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
    max-width: calc(25% - 1.5rem);
    /* Katta ekranlar uchun cheklash */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
</style>