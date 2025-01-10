<template>
   <section class="slideshow-container" id="slideshow">
        <div class="container">
            <div class="header-wrapper" style="position: relative; z-index: 1;">
                <!-- Slideshow -->
                <img :src="currentImage" alt="" class="banner-image" />
                <div class="button-container">
                    <!-- Tugmalarni API'dan kelayotgan ma'lumotlar asosida yaratish -->
                    <router-link
                        v-for="(link, index) in currentLinks"
                        :key="index"
                        :to="link.url"
                        class="cmn--btn custom-button"
                    >
                        <span>{{ link.title }}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </section>

   <!-- task categorish Section Here -->
   <section class="app__section ralt bg__all2 pb-120 pt-120">
      <div class="container">

         <div class="row ralt g-4">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown">
               <div class="task__item round16 bgwhite d-flex align-items-center">
                  <div class="thumb">
                     <img src="assets/img/yuridik/1.svg" alt="img">
                  </div>
                  <div class="content">
                     <h3 class="inter title mb-24">
                        {{ $t('access_legal_entity_profile') }}
                     </h3>
                     <p class="fz-14 fw-400 inter pra mb-40">
                     </p>
                     <router-link to="/singin" class="cmn--btn outline__btn">
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
                     <img src="assets/img/yuridik/2.svg" alt="img">
                  </div>
                  <div class="content">
                     <h3 class="inter title mb-24">
                        {{ $t('contract_processing') }}
                     </h3>
                     <p class="fz-14 fw-400 inter pra mb-40">
                     </p>
                     <router-link to="/singin" class="cmn--btn outline__btn">
                        <span>
                           {{ $t('processing') }}
                        </span>
                        <span>
                           <i class="bi bi-arrow-up-right"></i>
                        </span>
                     </router-link>
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
                  <img src="assets/img/yuridik/3.svg" alt="card" class="">
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- App End -->

   <!-- task categorish Section Here -->
   <section class="app__section ralt bg__all2 pb-120 pt-120">
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

   </section>
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
         <div class="company__wrap owl-thmee owl-carousel">
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
  name: "XizmatlarPage",
  data() {
    return {
      services: [],
      banners: [], // API'dan kelayotgan bannerlar
      currentBannerIndex: 0, // Hozirgi ko'rsatilayotgan banner indeksi
      locale: this.$i18n.locale === "uz" ? "description_uz" : "description_ru",
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
    // Bannerlarni olish va slideshow'ni boshlash
    this.fetchBanners().then(() => {
      this.startBannerSlideshow();
    });
  },
};
</script>
