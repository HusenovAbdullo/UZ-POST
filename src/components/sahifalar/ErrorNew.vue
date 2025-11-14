<template>
   <!-- Error Section Here -->
   <section class="error__section pt-120 pb-120 page-bg-white">
     <div class="container">
       <div class="row justify-content-center">
         <div class="col-xl-10 col-lg-10">
           <div class="thum mb-40 text-center">
             <!-- Tilga qarab rasm almashadi -->
             <img
               :src="errorImage"
               alt="404"
               class="error-image"
             />
           </div>
 
           <div class="error__content text-center">
             <!-- Title kerak bo'lsa qayta yoqishingiz mumkin -->
             <!-- <h2 class="title mb-24">{{ $t('page_not_found') }}</h2> -->
 
             <!-- Chiroyli link-button -->
             <p
               class="ptext2 fz-16 fw-400 inter mb-40 contact-link"
               @click="openTelegram"
             >
               <i class="bi bi-telegram contact-link__icon"></i>
               <span class="contact-link__text">
                 {{ $t('contact_us_if_problem') }}
               </span>
             </p>
 
             <router-link to="/" class="cmn--btn">
               <span>{{ $t('go_to_homepage') }}</span>
               <span><i class="bi bi-arrow-up-right"></i></span>
             </router-link>
           </div>
         </div>
       </div>
     </div>
   </section>
   <!-- Error Section End -->
 </template>
 
 <script>
 export default {
   computed: {
     currentLang() {
       if (this.$i18n && this.$i18n.locale) {
         return this.$i18n.locale;
       }
       return localStorage.getItem('language') || 'uz';
     },
     errorImage() {
       return this.currentLang === 'ru'
         ? 'https://new.pochta.uz/media/error-rus.jpg'
         : 'https://new.pochta.uz/media/error-uzb.jpg';
     }
   },
   methods: {
     openTelegram() {
       window.location.href = 'https://t.me/Husenov_Abdullo';
     }
   }
 };
 </script>
 
 <style scoped>
 /* Sahifa fonini to'liq oq qilish */
 .page-bg-white {
   background-color: #ffffff !important;
 }
 .page-bg-white::before {
   background-color: #ffffff !important;
   background-image: none !important;
 }
 
 /* Rasm bloki */
 .thum {
   width: 100%;
 }
 
 /* Rasmni to'liq ko'rsatish */
 .error-image {
   width: 70% !important;
   height: auto !important;
   max-height: none !important;
   object-fit: contain !important;
   display: block;
   margin: 0 auto;
 }
 
/* "Muammo bo'lsa..." link-button dizayni */
.contact-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  color: #183e98;
  background: rgba(24, 62, 152, 0.04);
  border: 1px solid rgba(24, 62, 152, 0.15);
  text-decoration: none;
  transition: all 0.2s ease;

  /* Yangi qo'shilganlari */
  max-width: 360px;   /* tugma juda uzun bo'lmasin */
  width: 100%;        /* kichik ekranda esa to'liq chiqadi */
  margin: 0 auto 16px;
}

.contact-link__icon {
  font-size: 18px;
}

.contact-link__text {
  text-decoration: none;
}

/* Hover effekti o'sha-o'sha qoladi */
.contact-link:hover {
  background: #183e98;
  color: #ffffff;
  box-shadow: 0 8px 18px rgba(24, 62, 152, 0.25);
  transform: translateY(-1px);
}

.contact-link:hover .contact-link__icon,
.contact-link:hover .contact-link__text {
  color: #ffffff;
}

 
 /* Error bo'lim kamida ekran balandligini egallasin */
 .error__section.page-bg-white {
   min-height: 60vh;
 }
 </style>
 