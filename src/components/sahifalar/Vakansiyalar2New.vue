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
                                <span class="d41 mb-24">
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


                            </span>
                            Ariza to‘ldiring
                        </a>
                        <a href="post-timeline.html" class="d-block ralt over__item fz-16 fw-500 inter pra">
                            <span class="ver__innerbox d-flex align-items-center justify-content-center">
                                <span class="over__box d-flex align-items-center justify-content-center round100">

                                </span>

                            </span>
                            Yakunlash
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->

    <!-- over gallery body Section Here -->
    <section class="overview__gallery__section pt-120 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="contact__wrapper round16 bgwhite">
                        <h2 class="pb-30 bborderdash mb-30 title2">
                            Bog'lanish uchun kontakt ma'lumotlaringizni qoldiring
                        </h2>
                        <form action="#0" class="write__review">
                            <div class="row g-4">
                                <div class="col-lg-d">
                                    <div class="frm__grp">
                                        <label for="numbers" class="fz-18 fw-500 inter title mb-16">Telefon
                                            raqam</label>
                                        <input type="text" id="numbers" placeholder="Telefon raqamingizni kiriting">
                                    </div>
                                </div>

                                <div class="col-lg-d">
                                    <div class="frm__grp">
                                        <label for="numbers" class="fz-18 fw-500 inter title mb-16">Telefon raqam
                                            (qo'shimcha)</label>
                                        <input type="text" id="numbers" placeholder="Telefon raqamingizni kiriting">
                                    </div>
                                </div>
                                <!-- <div style=" align-items: center; font-family: Arial, sans-serif;">
                     <label for="file-upload"
                        style="font-weight: bold; margin-right: 10px;color:#080000">Fayl</label><br>
                     <div class="fz-14"
                        style="display: flex; align-items: center; border: 1px solid #e0e1e5;     width: 25%; border-radius: 5px; padding: 8px 12px; background-color: #f2f7fe;">
                        <label for="file-upload" style="cursor: pointer; color: #404a60;">
                           Faylni biriktirish
                        </label>
                        <input id="file-upload" type="file" style="display: none;">
                        <i class="bi bi-paperclip ms-2" style="color: #404a60;"></i>
                     </div>
                  </div> -->

                                <br>
                                <br>
                                <br>

                                <div class="divider">
                                    <span>Qo‘shimcha ravishda</span>
                                </div>




                                <div class="col-lg-d">
                                    <div class="frm__grp">
                                        <label for="enamee" class="fz-18 fw-500 inter title mb-16">E-mail</label>
                                        <input type="text" id="enamee" placeholder="Email manzilingizni kiriting...">
                                    </div>
                                </div>
                                <div class="btn__grp d-flex align-items-center gap-4 flex-wrap">
                                    <router-link to="/vakansiyalar3" class="cmn--btn">
                                        <span>
                                            Saqlash va jo‘natish
                                        </span>
                                    </router-link>
                                    <a href="javascript:void(0)" class="cmn--btn outline__btn">
                                        <span>
                                            Ortga qaytish
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- over gallery body Section End -->
</template>