<template>
    <!-- Hero Sections Here -->
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
        <div class="profile__wrappers setting__breadcumnd">
            <div class="row g-4 align-items-center justify-content-between">
                <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                    <div class="breadcumnd__content">
                        <span class="d4 mb-24">
                            Tariflar
                        </span>
                        <!-- <ul class="breadcun__list flex-wrap gap-1 d-flex align-items-center">
                 <li>
                    <a href="index.html" class="fz-16 fw-400 inter text-white">
                       Home
                    </a>
                 </li>
                 <li>
                    <i class="bi bi-chevron-right"></i>
                 </li>
                 <li>
                    <a href="#0" class="fz-16 fw-400 inter text-white">
                       User Profile
                    </a>
                 </li>
                 <li>
                    <i class="bi bi-chevron-right"></i>
                 </li>
                 <li>
                    <a href="#0" class="fz-16 fw-400 inter base2">
                       Payments
                    </a>
                 </li>
              </ul> -->
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</section>
<!-- Hero Section End -->

<!-- description body Section Here -->
<section class="setting__section pb-120">
<div class="container__customizemain pb-120 round16" style="max-width: 1400px;">
    <img class="rasmm pb-120 round16" src="assets/img/Xizmatlar/1.jpg" alt="Misol rasm tavsifi" width="1398"
        height="950">
    <img class="rasmm pb-120 round16" src="assets/img/Xizmatlar/1.png" alt="Misol rasm tavsifi" width="1398"
        height="950">
    <img class="rasmm pb-120 round16" src="assets/img/Xizmatlar/2.png" alt="Misol rasm tavsifi" width="1398"
        height="950">
    <img class="rasmm pb-120 round16" src="assets/img/Xizmatlar/3.png" alt="Misol rasm tavsifi" width="1398"
        height="950">
    <img class="rasmm pb-120 round16" src="assets/img/Xizmatlar/4.png" alt="Misol rasm tavsifi" width="1398"
        height="950">

    <div class="container">
        <!-- <div class="row g-4">
            <div class="col-lg-3">
                <div class="setting__tabs p-8 round16 border bgwhite">
                    <ul class="nav border-0 round16 nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="barcha_tariflar-tab" data-bs-toggle="tab"
                                data-bs-target="#Barcha_tariflar" type="button" role="tab" aria-controls="home"
                                aria-selected="false">
                                Barcha tariflar
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pochta_aloqasining_asosiy_xizmatlar-tab"
                                data-bs-toggle="tab" data-bs-target="#pochta_aloqasining_asosiy_xizmatlar"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">
                                Pochta aloqasining asosiy xizmatlar
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="kuryerlik_xizmatlari-tab" data-bs-toggle="tab"
                                data-bs-target="#kuryerlik_xizmatlari" type="button" role="tab"
                                aria-controls="contact" aria-selected="false">
                                Kuryerlik xizmatlari
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="bir_qadam-tab" data-bs-toggle="tab"
                                data-bs-target="#bir_qadam" type="button" role="tab" aria-controls="payment"
                                aria-selected="false">
                                “Bir Qadam” xizmati
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="tolovlar-tab" data-bs-toggle="tab"
                                data-bs-target="#tolovlar" type="button" role="tab" aria-controls="payment"
                                aria-selected="false">
                                Tolovlar
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="boshqalar_tab" data-bs-toggle="tab"
                                data-bs-target="#boshqalar" type="button" role="tab" aria-controls="payment"
                                aria-selected="false">
                                Boshqalar
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="Barcha_tariflar" role="tabpanel"
                        aria-labelledby="barcha_tariflar-tab">
                        <div class="overview__gitwrapper bgwhite round16 border">
                            <h3 class="pb-40 bborderdash mb-40 title">
                                Barcha tariflar
                            </h3>
                            <div class="accordion-body" style="color: black;">
                            </div>

                            <div id="blogs"></div>


                        </div>
                    </div>
                    <div class="tab-pane fade " id="pochta_aloqasining_asosiy_xizmatlar" role="tabpanel"
                        aria-labelledby="pochta_aloqasining_asosiy_xizmatlar-tab">
                        <div class="overview__gitwrapper bgwhite round16 border">
                            <h3 class="pb-40 bborderdash mb-40 title">
                                Pochta aloqasining asosiy xizmatlar
                            </h3>
                            <div class="accordion-body" style="color: black;">
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade " id="kuryerlik_xizmatlari" role="tabpanel"
                        aria-labelledby="kuryerlik_xizmatlari-tab">
                        <div class="overview__gitwrapper bgwhite round16 border">
                            <h3 class="pb-40 bborderdash mb-40 title">
                                Kuryerlik xizmatlari
                            </h3>
                            <div class="accordion-body" style="color: black;">
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade " id="bir_qadam" role="tabpanel" aria-labelledby="bir_qadam-tab">
                        <div class="overview__gitwrapper bgwhite round16 border">
                            <h3 class="pb-40 bborderdash mb-40 title">
                                “Bir Qadam” xizmati
                            </h3>
                            <div class="accordion-body" style="color: black;">
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade " id="tolovlar" role="tabpanel" aria-labelledby="tolovlar-tab">
                        <div class="overview__gitwrapper bgwhite round16 border">
                            <h3 class="pb-40 bborderdash mb-40 title">
                                To'lovlar
                            </h3>
                            <div class="accordion-body" style="color: black;">
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade " id="boshqalar" role="tabpanel" aria-labelledby="boshqalar-tab">
                        <div class="overview__gitwrapper bgwhite round16 border">
                            <h3 class="pb-40 bborderdash mb-40 title">
                                Boshqalar
                            </h3>
                            <div class="accordion-body" style="color: black;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</div>
</section>
<!-- description body Section End -->
</template>