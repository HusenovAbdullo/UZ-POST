<template>
   <!-- Cart Section Here -->
   <section class="error__section pt-120 pb-120">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-8">
               <div class="thum mb-40">
                  <img src="https://new.pochta.uz/media/error2.png" class="w-100" alt="img"
                     style="width: 100% !important; height: 500px; object-fit: cover;">
               </div>
               <div class="error__content text-center">
                  <h2 class="title mb-24">
                     {{ $t('page_not_found') }}
                  </h2>
                  <p class="ptext2 fz-16 fw-400 inter mb-40"
                     onclick="window.location.href='https://t.me/Husenov_Abdullo'"
                     style="cursor: pointer; color: blue; text-decoration: underline;">
                     {{ $t('contact_us_if_problem') }}
                  </p>

                  <router-link to="/" class="cmn--btn">
                     <span>
                        {{ $t('go_to_homepage') }}
                     </span>
                     <span>
                        <i class="bi bi-arrow-up-right"></i>
                     </span>
                  </router-link>
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- Cart Section End -->
</template>

<style scoped>
.thum mb-40 {
   width: 350px;
   height: 250px;
}
</style>