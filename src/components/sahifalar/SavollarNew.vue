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
                                    {{ $t('faq') }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->
    <br>
    <br>
    <br>

    <!-- description body Section Here -->
    <section class="setting__section pb-120">
        <div class="container__customizemain pt-100 pb-120 round16">
            <div class="container">
                <div class="col-lg-b">
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

                                                <router-link
                                                    :to="`/${$i18n.locale}/headeritem/respublika-ichidagi-xizmatlar?id=13`"
                                                    class="textrang" @click="reloadPage">
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



                                                <br><img src="assets/img/aralash/kuzatish1.png" alt="Rasm" width="300" height="200"><br>
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
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- description body Section End -->
</template>