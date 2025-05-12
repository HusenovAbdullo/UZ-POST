<template>
   <section class="slideshow-container" id="slideshow">
      <div class="container">
         <div class="header-wrapper" style="position: relative; z-index: 1;">
            <!-- Slideshow -->
            <img :src="currentImage" alt="" class="banner-image" />
            <div class="button-container">
               <!-- Tugmalarni API'dan kelayotgan ma'lumotlar asosida yaratish -->
               <!-- <router-link v-for="(link, index) in currentLinks" :key="index" :to="link.url"
                  class="cmn--btn custom-button">
                  <span>{{ link.title }}</span>
               </router-link> -->
            </div>
            <div class="button-container">
               <template v-for="(link, index) in currentLinks" :key="index">
                  <router-link v-if="!link.external" :to="link.url" class="cmn--btn custom-button">
                     <span>{{ link.title }}</span>
                  </router-link>
                  <a v-else :href="link.url" target="_blank" class="cmn--btn custom-button">
                     <span>{{ link.title }}</span>
                  </a>
               </template>
            </div>
         </div>
      </div>
   </section>

   <!-- task categorish Section Here -->
   <section class="app__section ralt bg__all2 pb-120 pt-120">
      <div class="container">

         <div class="row ralt g-4">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown">
               <!-- Sizning mavjud task__item -->
               <div class="task__item round16 bgwhite d-flex align-items-center">
                  <div class="thumb">
                     <img src="https://new.pochta.uz/media/1.svg" alt="img">
                  </div>
                  <div class="content">
                     <h3 class="inter title mb-24">
                        {{ $t('access_legal_entity_profile') }}
                     </h3>
                     <p class="fz-14 fw-400 inter pra mb-40"></p>
                     <router-link :to="`/${$i18n.locale}/sahifa/23`" class="cmn--btn outline__btn">
                        <span>
                           {{ $t('login') }}
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
                     <img src="https://new.pochta.uz/media/2.svg" alt="img">
                  </div>

                  <div class="content">
                     <h3 class="inter title mb-24">
                        {{ $t('contract_processing') }}
                     </h3>
                     <p class="fz-14 fw-400 inter pra mb-40">
                     </p>
                     <router-link :to="`/${$i18n.locale}/sahifa/23`" class="cmn--btn outline__btn">
                        <span>
                           {{ $t('processing') }}
                        </span>
                        <span>
                           <i class="bi bi-arrow-up-right"></i>
                        </span>
                     </router-link>

                     <!-- <button @click="showPopup = true" class="cmn--btn outline__btn">
                        <span>{{ $t('processing') }}</span>
                        <span><i class="bi bi-arrow-up-right"></i></span>
                     </button> -->
                  </div>
               </div>
            </div>

         </div>
      </div>

   </section>
   <!-- task categorish Section End -->

   <!-- App Here -->
   <section class="app__section ralt bg__all pb-120 pt-120">
      <div class="container">
         <div class="row g-4 align-items-center justify-content-between">
            <div class="col-xl-6 col-lg-7">
               <div class="app__content">
                  <div class="section__title mb-30">
                     <h4 class="sub ralt base mb-16 wow fadeInDown">
                        {{ $t('about_partnership') }}
                     </h4>
                     <h2 class="title2 mb-24 wow fadeInUp">
                        {{ $t('make_business_successful') }}
                     </h2>
                     <p class="ptext2 fz-16 fw-400 inter wow fadeInDown">
                        {{ $t('mutually_beneficial_partnership') }}
                     </p>
                  </div>

               </div>
            </div>
            <div class="col-xl-5 col-lg-5">
               <div class="app__thumb ralt">
                  <img src="https://new.pochta.uz/media/3.svg" alt="card" class="">
               </div>

            </div>
         </div>
      </div>
   </section>
   <!-- App End -->

   <!-- task categorish Section Here -->
   <!-- <section class="app__section ralt bg__all2 pb-120 pt-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-6 col-xl-8 col-lg-8">
          <div class="section__title text-center ralt mb-60">
            <h4 class="sub ralt base mb-16 wow fadeInUp" data-wow-duration="1.1s"></h4>
            <h2 class="title2 wow fadeInUp mb-24" data-wow-duration="1.2s">
               {{ $t('services') }}
            </h2>
            <p class="pra fz-16 inter fw-400"></p>
          </div>
        </div>
      </div>
      <div class="row ralt g-4">
        <div
          v-for="service in services"
          :key="service.id"
          class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown"
        >
          <div class="task__item round16 bgwhite d-flex align-items-center">
            <div class="thumb">
              <img :src="service.image" :alt="service[`title_${$i18n.locale}`] || service.title_uz" />
            </div>
            <div class="content">
              <h3 class="inter title mb-24">
                {{ service[`title_${$i18n.locale}`] || service.title_uz }}
              </h3>
              <p class="fz-14 fw-400 inter pra mb-40">
                {{ service[`description_${$i18n.locale}`] || service.description_uz || "" }}
              </p>
              <router-link :to="`/xizmat/${service.id}`" class="cmn--btn outline__btn">
                <span>Batafsil</span>
                <span><i class="bi bi-arrow-up-right"></i></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

      <br>
      <br>
      <br>
      <br>

   </section> -->
   <!-- task categorish Section End -->

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
               <img src="https://new.pochta.uz/media/company1.png" alt="company">
            </div>
            <div class="company__logo">
               <img src="https://new.pochta.uz/media/company2.png" alt="company">
            </div>
            <div class="company__logo">
               <img src="https://new.pochta.uz/media/company3.png" alt="company">
            </div>
            <div class="company__logo">
               <img src="https://new.pochta.uz/media/company4.png" alt="company">
            </div>
         </div>
      </div>
   </section>
   <!-- Company Logo End -->

   <!-- Modal popup -->
   <div v-if="showPopup" class="popup-overlay" @click.self="showPopup = false">
      <div class="popup-box">

         <p><strong></strong> {{ $t('yur') }}</p>
         <button @click="showPopup = false" class="close-btn">X</button>
      </div>
   </div>
</template>

<script>
import axios from "axios";

export default {
   name: "XizmatlarPage",
   data() {
      return {
         services: [],
         banners: [], // API'dan kelayotgan bannerlar
         currentBannerIndex: 0, // Hozirgi ko'rsatilayotgan banner indeksi
         locale: this.$i18n.locale === "uz" ? "description_uz" : "description_ru",
         showPopup: false, // Popup holati
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
      // API'dan banner ma'lumotlarini olish
      async fetchBanners() {
         try {
            const response = await axios.get("https://new.pochta.uz/api/v1/public/banners/");
            this.banners = response.data.filter(
               banner => banner.status && banner.yurlitso_status
            ).map(banner => ({
               ...banner,
               image_uz: this.ensureHttps(banner.image_uz),
               image_ru: this.ensureHttps(banner.image_ru),
            }));
         } catch (error) {
            console.error("Bannerni olishda xato:", error);
         }
      },
      // URL'ni HTTPS formatiga o'tkazish
      ensureHttps(url) {
         if (url?.startsWith("http://")) {
            return url.replace("http://", "https://");
         }
         return url;
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
      // Xizmatlar ma'lumotlarini olish
      async fetchServices() {
         try {
            const response = await axios.get(
               "https://new.pochta.uz/api/v1/public/services/"
            );
            this.services = response.data
               .filter((item) => item.status)
               .slice(-4)
               .map((item) => ({
                  id: item.id,
                  title_uz: item.title_uz,
                  title_ru: item.title_ru,
                  description_uz: item.description_uz,
                  description_ru: item.description_ru,
                  image: item.save_image.replace("http://", "https://"),
               }));
         } catch (error) {
            console.error("Xizmatlarni yuklashda xatolik:", error);
         }
      },
   },
   created() {
      // Xizmatlarni olish
      this.fetchServices();
   },
   mounted() {
      // LOCALHOST uchun 2 marta refresh
      if (window.location.hostname === 'localhost') {
         const reloadCount = sessionStorage.getItem('reload_count_xizmatlar');
         if (!reloadCount) {
            sessionStorage.setItem('reload_count_xizmatlar', '1');
            window.location.reload();
         } else if (reloadCount === '1') {
            sessionStorage.setItem('reload_count_xizmatlar', '2');
            window.location.reload();
         } else {
            sessionStorage.removeItem('reload_count_xizmatlar');
         }
      }

      // Serverda ishlashi uchun
      this.fetchBanners().then(() => {
         this.startBannerSlideshow();
      });
      this.fetchServices();
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

@media (max-width: 576px) {




   .task__item .content h3 {
      font-size: 16px;
      /* sarlavha kichikroq */
      margin-bottom: 12px;
   }

   .task__item .content p {
      font-size: 13px;
      /* matn kichikroq */
      margin-bottom: 20px;
   }

   .cmn--btn {
      font-size: 13px;
      /* tugma matni kichikroq */
      padding: 6px 14px;
   }

   .section__title h2.title2 {
      font-size: 22px;
   }

   .section__title p.pra {
      font-size: 14px;
   }

   .text-center.mt-40 .cmn--btn {
      font-size: 14px;
      padding: 8px 18px;
   }
}









.company__logo img {
   max-width: 200px;
   max-height: 200px;
   object-fit: contain;
}

.perfoming__item:hover .cmn__ibox {
   background-color: #f0f0f0;
   /* O'zgartirish kerak bo'lgan rang */
   transition: background-color 0.3s ease;
}

.perfoming__item:hover img {
   filter: none;
   /* Rangi o'zgarmasligi uchun hech qanday filtr qo‘llanmaydi */
}



.readmore span.fz-16 {
   color: inherit !important;
   transition: none !important;
}

.readmore:hover span.fz-16 {
   color: inherit !important;
}



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
      /* flex: 1 1 100%; */
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
   .button-container {
      display: flex;
      flex-direction: row;
      /* tugmalar yonma-yon */
      gap: 10px;
      align-items: flex-start;
      margin-top: 20px;
      transform: translateY(85px);

      font-size: 12px;
      /* yozuvni kichikroq qiladi */
   }

   .button-container button,
   .button-container a {
      font-size: 10px;
      /* tugma ichidagi yozuv */
      padding: 5px 9px;
      /* tugma o‘lchami */
      min-width: auto;
      height: auto;
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
      /* display: none; */
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


@media (max-width: 991px) {
   .task__item {
      /* flex-wrap: wrap;
        gap: 1px;
        padding: 5px 10px; */
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1px;
      padding: 5px 10px;
      text-align: center;
   }
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




@media (max-width: 120px) {
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

.pra {
   display: -webkit-box;
   -webkit-line-clamp: 2;
   /* 2 qatorga cheklash */
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
}



.thumb {
   width: 150px;
   /* Rasm kengligi */
   height: 150px;
   /* Rasm balandligi */
   border-radius: 50%;
   /* Aylanaga aylantirish */
   overflow: hidden;
   /* Ortiqcha qismlar ko'rinmasin */
}

.thumb img {
   width: 150px;
   /* Rasmni o'z o'lchamida qoldirish */
   height: 150px;
   object-fit: cover;
   /* Kesib, to'ldirish */
   object-position: center;
   /* Markazga joylash */
   image-rendering: auto;
   /* Rasm renderlash sifatini yaxshilash */
}













.task__item .title {
   min-height: 60px;
   /* Eng uzun sarlavha balandligiga moslang */
   display: flex;
   align-items: center;
}



.app__thumb img {
   max-width: 100%;
   height: auto;
   display: block;
}


.popup-overlay {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0, 0, 0, 0.5);
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 9999;
}

.popup-box {
   background: #fff;
   padding: 25px;
   border-radius: 10px;
   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
   text-align: center;
   max-width: 300px;
   width: 90%;
}

.close-btn {
   margin-top: 15px;
   padding: 8px 16px;
   background-color: #183e98;
   color: #fff;
   border: none;
   border-radius: 4px;
   cursor: pointer;
}
</style>