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
                     {{ $t('uzpost_contact') }}
                  </span>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</section>
<!-- Hero Section End -->

<!-- contact section Here -->
<section class="contact__section sectionbg pt-120 pb-120">
<div class="container">
   <div class="row justify-content-center">
      <div class="col-lg-a">
         <div class="contact__sidebox bgwhite round16">
            <h3 class="pb-30 bborderdash mb-30 title2">
               {{ $t('contact_types') }}
            </h3>
            <div class="help__emailitem mb-24 round16">
               <div class="icon round50 bgwhite d-flex align-items-center justify-content-center">
                  <i class="bi bi-telephone"></i>
               </div>
               <div class="box">
                  <h5 class="fw-600 title mb-10">
                     {{ $t('phone_number2') }}
                  </h5>
                  <span class="fz-16 d-block inter title">
                     1165
                  </span>
                  <span class="fz-16 d-block inter title">
                     71 233-57-47
                  </span>
               </div>
            </div>
            <div class="help__emailitem mb-24 round16">
               <div class="icon round50 bgwhite d-flex align-items-center justify-content-center">
                  <i class="bi bi-envelope-open"></i>
               </div>
               <div class="box">
                  <h5 class="fw-600 title mb-10">
                     {{ $t('email') }}
                  </h5>
                  <span class="fz-16 d-block inter title">
                     <a href="https://pixner.net/cdn-cgi/l/email-protection" class="__cf_email__"
                        data-cfemail="cda4a3aba28da8b5aca0bda1a8e3aea2a0">uzpost.app@gmail.com </a>
                     <p class="fz-14">({{ $t('questions_suggestions') }})</p>
                  </span>
                  <span class="fz-16 d-block inter title">
                     <a href="https://pixner.net/cdn-cgi/l/email-protection" class="__cf_email__"
                        data-cfemail="1e777078715e7b667f736e727b307d7173">info@pochta.uz </a>
                     <p class="fz-14">({{ $t('official_letters') }})</p>
                  </span>
               </div>
            </div>
            <div class="help__emailitem round16">
               <div class="icon round50 bgwhite d-flex align-items-center justify-content-center">
                  <i class="bi bi-geo-alt"></i>
               </div>
               <div class="box">
                  <h5 class="fw-600 title mb-10">
                     {{ $t('address1') }}
                  </h5>
                  <span class="fz-16 d-block inter title">
                     {{ $t('yunusobod_address') }}
                  </span>
                  <!-- <span class="fz-16 d-block inter title">
                     Oloy 1-ko'cha
                  </span> -->
               </div>
            </div>
         </div>
      </div>
      <div class="col-lg-8">
         <div class="contact__wrapper round16 bgwhite">
            <h3 class="pb-30 bborderdash mb-30 title2">
               {{ $t('submit_question') }}
            </h3>
            <form action="#0" class="write__review">
               <div class="row g-4">
                  <div class="col-lg-6">
                     <div class="frm__grp">
                        <label for="name" class="fz-18 fw-500 inter title mb-16">{{ $t('applicant') }}</label>
                        <input type="text" id="name" :placeholder="$t('enter_your_name')">
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="frm__grp">
                        <label for="enamee" class="fz-18 fw-500 inter title mb-16">{{ $t('email') }}</label>
                        <input type="text" id="enamee" :placeholder="$t('email_placeholder')">
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="frm__grp">
                        <label for="numbers" class="fz-18 fw-500 inter title mb-16">{{ $t('phone_number') }}</label>
                        <input type="text" id="numbers" :placeholder="$t('phone_placeholder')">
                     </div>
                  </div>
                  <br>
                  <br>
                  <div style=" align-items: center; font-family: Arial, sans-serif;">
                     <label for="file-upload"
                        style="font-weight: bold; margin-right: 10px;color:#080000">{{ $t('file') }}</label><br>
                     <div class="fz-14"
                        style="display: flex; align-items: center; border: 1px solid #e0e1e5;     width: 25%; border-radius: 5px; padding: 8px 12px; background-color: #f2f7fe;">
                        <label for="file-upload" style="cursor: pointer; color: #404a60;">
                           {{ $t('attach_file') }}
                        </label>
                        <input id="file-upload" type="file" style="display: none;">
                        <i class="bi bi-paperclip ms-2" style="color: #404a60;"></i>
                     </div>
                  </div>




                  <div class="col-lg-12">
                     <div class="frm__grp">
                        <label class="fz-18 fw-500 inter title mb-16">{{ $t('message_text') }}</label>
                        <textarea name="writecommnet" cols="30" rows="5"
                        :placeholder="$t('message_placeholder')"></textarea>
                     </div>
                  </div>
                  <div class="frm__grp mt-30">
                     <button type="submit" class="cmn--btn">
                        <span>
                           {{ $t('submit_button') }}
                        </span>
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
</div>
</section>
<!-- contact section End -->
</template>