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
                <div class="profile__wrapper">
                    <div class="row g-4 align-items-center justify-content-between">
                        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                            <div class="breadcumnd__content">
                                <span class="d4 mb-24">
                                    Markalar katalogi
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->

    <!--service grid here-->
    <section class="service__grid pt-120 pb-120 sectionbg2">
        <div class="container">
            <div class="row g-4">
                <div class="col-xl-4 col-lg-4">
                    <div class="card__sidebar side__sticky round16">
                        <div class="card__common__item bgwhite round16">
                            <h4 class="head fw-600 bborderdash title pb-24 mb-24">
                                Filtr
                            </h4>
                            <form action="#0"
                                class="d-flex mb-24 filter__search align-items-center justify-content-between">
                                <input type="text" placeholder="Izlash">
                                <i class="bi bi-search"></i>
                            </form>

                            <div class="bank__check__wrap pb-24 tborderdash">
                                <h5 class="title mb-16 pt-24">
                                    Yillar
                                </h5>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="bank__checkitem mb-8 d-flex align-items-center">
                                        <input class="form-check-input" type="checkbox" id="bank1t22" checked>
                                        <label class="form-check-label fz-16 fw-400 ptext2 inter" for="bank1t22">
                                            1990-1999
                                        </label>
                                    </div>
                                    <span class="fw-500 inter fz-16 pra">
                                        06
                                    </span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="bank__checkitem mb-8 d-flex align-items-center">
                                        <input class="form-check-input" type="checkbox" id="bank2t15" checked>
                                        <label class="form-check-label fz-16 fw-400 ptext2 inter" for="bank2t15">
                                            2000-2009
                                        </label>
                                    </div>
                                    <span class="fw-500 inter fz-16 pra">
                                        03
                                    </span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="bank__checkitem mb-8 d-flex align-items-center">
                                        <input class="form-check-input" type="checkbox" id="bank3t30">
                                        <label class="form-check-label fz-16 fw-400 ptext2 inter" for="bank3t30">
                                            2010-2019
                                        </label>
                                    </div>
                                    <span class="fw-500 inter fz-16 pra">
                                        70
                                    </span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="bank__checkitem mb-8 d-flex align-items-center">
                                        <input class="form-check-input" type="checkbox" id="bank4t10" checked>
                                        <label class="form-check-label fz-16 fw-400 ptext2 inter" for="bank4t10">
                                            2020-2029
                                        </label>
                                    </div>
                                    <span class="fw-500 inter fz-16 pra">
                                        12
                                    </span>
                                </div>

                            </div>

                            <!-- <a href="#0"
                  class="reset__filter justify-content-center fw-600 inter fz-16 d-flex align-items-center gap-2 base">
                  <i class="bi bi-arrow-clockwise base fz-20"></i>
                  Reset Filters
               </a> -->
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-8">
                    <div
                        class="showing__gridlist__bar mb-40 round16 bgwhite border d-flex align-items-center justify-content-between">
                        <span class="fz-16 fw-400 inter pra">
                            60 ta natijadan 12 tasi koʻrsatilmoqda
                        </span>
                        <div class="gridlist__wrap d-flex align-items-center">

                            <div class="short__bar d-flex align-items-center gap-2">
                                <span class="fz-16 fw-400 inter pra">Saralash turi :
                                </span>
                                <select name="short">
                                    <option value="1">
                                        Hammasi
                                    </option>
                                    <option value="1">
                                        1992
                                    </option>
                                    <option value="1">
                                        1993
                                    </option>
                                    <option value="1">
                                        1994
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="showing__gridlist__body">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row justify-content-center g-4">
                                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="service__item shadow2 round16 p-8 bgwhite">
                                            <router-link to="/yangilik" class="thumb round16 w-100">
                                                <img src="assets/img/markalar/marka (5).jpg" class="round16 w-100"
                                                    alt="service" />
                                            </router-link>
                                            <h5 class="mt-24 mb-20">
                                                <router-link to="/yangilik" class="titley">
                                                    "Toshkent hayvonot bog`i" pochta markalari turkumi
                                                </router-link>
                                            </h5>
                                            <div
                                                class="d-flex bborderdash pb-20 align-items-center justify-content-between">
                                                <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                                                    <i class="bi bi-stopwatch"></i>
                                                    1995 yil
                                                </div>
                                                <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                                                    <i class="bi bi-bar-chart"></i>
                                                    2095
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center mt-20 justify-content-between">
                                                <span class="fz-18 fw-600 inter base">
                                                    1 000 so'm
                                                </span>
                                                <router-link to="/marka"
                                                    class="aylana boxes1 round50 d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-chevron-right title fz-16"></i>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="service__item shadow2 round16 p-8 bgwhite">
                                            <router-link to="/yangilik" class="thumb round16 w-100">
                                                <img src="assets/img/markalar/marka (5).jpg" class="round16 w-100"
                                                    alt="service" />
                                            </router-link>
                                            <h5 class="mt-24 mb-20">
                                                <router-link to="/yangilik" class="titley">
                                                    "Toshkent hayvonot bog`i" pochta markalari turkumi
                                                </router-link>
                                            </h5>
                                            <div
                                                class="d-flex bborderdash pb-20 align-items-center justify-content-between">
                                                <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                                                    <i class="bi bi-stopwatch"></i>
                                                    1995 yil
                                                </div>
                                                <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                                                    <i class="bi bi-bar-chart"></i>
                                                    2095
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center mt-20 justify-content-between">
                                                <span class="fz-18 fw-600 inter base">
                                                    1 000 so'm
                                                </span>
                                                <router-link to="/marka"
                                                    class="aylana boxes1 round50 d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-chevron-right title fz-16"></i>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="service__item shadow2 round16 p-8 bgwhite">
                                            <router-link to="/yangilik" class="thumb round16 w-100">
                                                <img src="assets/img/markalar/marka (5).jpg" class="round16 w-100"
                                                    alt="service" />
                                            </router-link>
                                            <h5 class="mt-24 mb-20">
                                                <router-link to="/yangilik" class="titley">
                                                    "Toshkent hayvonot bog`i" pochta markalari turkumi
                                                </router-link>
                                            </h5>
                                            <div
                                                class="d-flex bborderdash pb-20 align-items-center justify-content-between">
                                                <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                                                    <i class="bi bi-stopwatch"></i>
                                                    1995 yil
                                                </div>
                                                <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                                                    <i class="bi bi-bar-chart"></i>
                                                    2095
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center mt-20 justify-content-between">
                                                <span class="fz-18 fw-600 inter base">
                                                    1 000 so'm
                                                </span>
                                                <router-link to="/marka"
                                                    class="aylana boxes1 round50 d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-chevron-right title fz-16"></i>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="service__item shadow2 round16 p-8 bgwhite">
                                            <router-link to="/yangilik" class="thumb round16 w-100">
                                                <img src="assets/img/markalar/marka (5).jpg" class="round16 w-100"
                                                    alt="service" />
                                            </router-link>
                                            <h5 class="mt-24 mb-20">
                                                <router-link to="/yangilik" class="titley">
                                                    "Toshkent hayvonot bog`i" pochta markalari turkumi
                                                </router-link>
                                            </h5>
                                            <div
                                                class="d-flex bborderdash pb-20 align-items-center justify-content-between">
                                                <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                                                    <i class="bi bi-stopwatch"></i>
                                                    1995 yil
                                                </div>
                                                <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                                                    <i class="bi bi-bar-chart"></i>
                                                    2095
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center mt-20 justify-content-between">
                                                <span class="fz-18 fw-600 inter base">
                                                    1 000 so'm
                                                </span>
                                                <router-link to="/marka"
                                                    class="aylana boxes1 round50 d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-chevron-right title fz-16"></i>
                                                </router-link>
                                            </div>
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
    </section>
    <!--service grid end-->
</template>