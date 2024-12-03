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
                <div class="profile__wrappers post__requestwrapper pt-100 pb-100">
                    <div class="row g-4 align-items-center justify-content-between">
                        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                            <div class="breadcumnd__content">
                                <span class="d4 mb-24">
                                    Ariza qoldirish
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
                           Post a Request
                        </a>
                     </li>
                  </ul> -->
                            </div>
                        </div>
                        <!-- <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-5">
               <div class="logout__btn">
                  <a href="#0" class="cmn--logout">
                     <span>
                        <i class="bi bi-box-arrow-right"></i>
                     </span>
                     <span class="fz-16 fw-600 inter">
                        Log out
                     </span>
                  </a>
               </div>
            </div> -->
                    </div>
                </div>
            </div>
        </div>
        <!--post request-->
        <div class="overview__showcase ralt">
            <div class="container">
                <div class="overview__showcasewrap post__requestwrap round16 border bgwhite">
                    <div class="overview__inntercase ralt d-flex align-items-center">
                        <a href="post-request.html" class="d-block ralt over__item fz-16 fw-500 inter pra">
                            <span class="ver__innerbox d-flex align-items-center justify-content-center">

                            </span>
                            Vakansiyani tanlang
                        </a>
                        <a href="post-preferences.html" class="d-block ralt over__item fz-16 fw-500 inter pra">
                            <span class="ver__innerbox d-flex align-items-center justify-content-center">
                                <span class="over__box d-flex align-items-center justify-content-center round100">

                                </span>

                            </span>
                            Ariza to‘ldiring
                        </a>
                        <a href="post-timeline.html" class="d-block ralt over__item fz-16 fw-500 inter pra">
                            <span class="ver__innerbox d-flex align-items-center justify-content-center">

                            </span>
                            Yakunlash
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->

    <!-- description body Section Here -->
    <section class="postrequest__section pt-120 pb-120">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="overview__gitwrapper bgwhite round16 border">
                        <h3 class="pb-40 bborderdash mb-40 title2">
                            Ariza to'ldirish
                        </h3>
                        <span class="fz-20  title inter mb-10 d-block">
                            F.I.Sh
                        </span>
                        <p class="fz-14 title mb-24 inter">
                            Familiyangiz, ism-sharifingizni kiriting
                        </p>
                        <input type="text" class="addquestion mb-30 rad4" placeholder="F.I.Sh">
                        <span class="fz-20  title inter mb-10 d-block">
                            O'zingiz haqingizda qisqacha ma'lumot qoldiring
                        </span>
                        <p class="fz-14 title mb-24 inter">
                            Ma'lumotingiz, tajribangiz, shaxsiy yutuqlaringiz va boshqalar.
                        </p>
                        <div class="write__bios round16 mb-10 border">
                            <div class="write__bisofooter">
                                <textarea class="contentsss" name="example" placeholder="write bio"></textarea>
                            </div>
                        </div>
                        <select name="text">
                            <option value="1">
                                Text Size
                            </option>
                            <option value="1">
                                14px
                            </option>
                            <option value="1">
                                16px
                            </option>
                            <option value="1">
                                18px
                            </option>
                        </select>
                        <span class="fz-20 mt-30 fw-500 inter d-block title mb-10">
                            Rezyumeni yuklang
                        </span>
                        <p class="fz-16 fw-400 mb-24 inter pra">
                            · Maksimal 50 MB hajmli 5 tagacha fayl biriktiring
                        </p>
                        <div class="row">
                            <div class="col-lg-4">
                                <a href="javascript:void(0)" class="image__upbox d-block text-center round16 border">
                                    <img src="assets/img/details/imgs.png" class="mb-3" alt="img">
                                    <span class="fz-14 d-block inter pra mb-2">
                                        Faylni yuklash
                                    </span>
                                    <!-- <span class="base fw-14">
                        Browse
                     </span> -->
                                </a>
                            </div>
                        </div>
                        <span class="fz-12 ralt aiquestion__text text-center d-block fw-400 mt-40 mb-40 inter pra">
                            <span class="aiquestion">

                            </span>
                        </span>
                        <div class="btn__grp d-flex align-items-center gap-4 flex-wrap">
                            <router-link to="/vakansiyalar2" class="cmn--btn">
                                <span>
                                    Saqlash
                                </span>
                            </router-link>
                            <a href="javascript:void(0)" class="cmn--btn outline__btn">
                                <span>
                                    Bekor qilish
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-a">
                    <div class="start__definingbar">
                        <div class="defining__box round16 border bgwhite">
                            <h3 class="title2 mb-24">
                                Keling tanishaylik!
                            </h3>
                            <!-- <span class="fz-16 fw-400 inter pra">
                  This is where you fill us in on the big picture.
               </span> -->
                            <div class="man__matching">
                                <img src="assets/img/details/matching.png" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- description body Section End -->
</template>