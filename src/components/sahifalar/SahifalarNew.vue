<template>
  <section class="banner__breadcumn ralt">
    <div id="searchPopup" class="search__popup">
      <form action="#" class="popup-content d-flex align-items-center">
        <input type="text" placeholder="Search Here" />
        <button id="closeButton">
          <i class="bi bi-x-lg"></i>
        </button>
      </form>
    </div>
    <div class="breadcumnd__wrapper">
      <div class="container">
        <span class="d4 mb-24">{{ serviceTitle }}</span>
        <div class="profile__wrapper">
          <div class="row g-4 align-items-center justify-content-between">
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
              <div class="breadcumnd__content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="setting__section pb-120">
    <div
      class="container__customizemain pb-120 round16"
      style="max-width: 1400px; margin-top: 50px"
    >
      <img
        v-if="computedServiceImage"
        :src="computedServiceImage"
        class="rasmm pb-120 round16 responsive-img"
        alt="Xizmat rasmi"
      />

      <div class="container">
        <header class="header">
          <router-link
            v-if="serviceMetaLink && serviceMetaTitle"
            :to="`/${serviceMetaLink}`"
            class="map-link"
          >
            {{ serviceMetaTitle }}
          </router-link>
        </header>

        <div class="description">
          {{ serviceDescription }}
        </div>

        <div class="custom-container">
          <div class="text-uz" v-html="serviceText"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      serviceId: null, // URL orqali olingan xizmat ID'si
      serviceData: null, // API'dan kelayotgan barcha ma'lumotlar
    };
  },
  created() {
    this.fetchServiceData(); // API ma'lumotlarini olish
  },
  watch: {
    // Til o'zgarganda API ma'lumotlarini qayta yuklash
    "$i18n.locale": "fetchServiceData",
  },
  methods: {
    // API'dan ma'lumotlarni olish
    async fetchServiceData() {
      this.serviceId = this.$route.query.id; // URL'dan xizmat ID olish
      if (!this.serviceId) {
        console.error("Xizmat ID mavjud emas!");
        return;
      }

      try {
        const response = await axios.get(
          `https://new.pochta.uz/api/v1/public/futer-menu-items/${this.serviceId}/`
        );
        this.serviceData = response.data; // API'dan kelgan ma'lumotlarni saqlash
      } catch (error) {
        console.error("API'dan ma'lumotlarni olishda xatolik:", error);
      }
    },
  },
  computed: {
    // Lokal tilga mos xizmat nomi
    serviceTitle() {
      if (!this.serviceData) return "Xizmat nomi mavjud emas";
      const locale = this.$i18n.locale || "uz";
      return this.serviceData[`name_${locale}`] || this.serviceData.name_uz;
    },
    // Lokal tilga mos xizmat tavsifi
    serviceDescription() {
      if (!this.serviceData) return "";
      const locale = this.$i18n.locale || "uz";
      return (
        this.serviceData[`description_${locale}`] ||
        this.serviceData.description_uz
      );
    },
    // Lokal tilga mos xizmat matni
    serviceText() {
      if (!this.serviceData) return "";
      const locale = this.$i18n.locale || "uz";
      return this.serviceData[`text_${locale}`] || this.serviceData.text_uz;
    },
    // Lokal tilga mos meta nomi
    serviceMetaTitle() {
      if (!this.serviceData) return "";
      const locale = this.$i18n.locale || "uz";
      return (
        this.serviceData[`meta_title_${locale}`] ||
        this.serviceData.meta_title_uz
      );
    },
    // Lokal tilga mos meta havolasi
    serviceMetaLink() {
      if (!this.serviceData) return "";
      const locale = this.$i18n.locale || "uz";
      return (
        this.serviceData[`meta_link_${locale}`] ||
        this.serviceData.meta_link_uz
      );
    },
    // HTTPS formatida xizmat rasmi
    computedServiceImage() {
      if (!this.serviceData || !this.serviceData.image_uz) return null;
      const locale = this.$i18n.locale || "uz";
      const imageUrl =
        locale === "ru"
          ? this.serviceData.image_ru
          : this.serviceData.image_uz;

      // HTTP'dan HTTPS'ga o'tkazish
      return imageUrl.startsWith("http:")
        ? imageUrl.replace("http:", "https:")
        : imageUrl;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.title {
  color: #1e3c96;
  font-size: 2.5rem;
  margin: 0;
}

.map-link {
  color: #1e3c96;
  text-decoration: none;
  border: 1px solid #1e3c96;
  padding: 10px 16px;
  border-radius: 4px;
  margin-bottom: 15px;
}

.map-link:hover {
  background-color: #1e3c96;
  color: white;
}

.description {
  font-family: "Roboto-BoldCondensed";
  color: #1e3c96;
  line-height: 1.6;
  margin-bottom: 40px;
  font-size: 24px;
  font-family: "Roboto-Condensed";
}

.subtitle {
  color: #1e3c96;
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.step-number {
  background-color: #1e3c96;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-text {
  color: #333;
  line-height: 1.5;
  padding-top: 6px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .header {
      flex-direction: column;
      gap: 20px;
      text-align: center;
  }

  .title {
      font-size: 2rem;
  }

  .step {
      align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .title {
      font-size: 1.5rem;
  }

  .map-link {
      width: 100%;
      text-align: center;
  }
}

.jo-natish-shartlari {
  width: 1237px;
  height: 417px;
  padding: 20px;
  background-color: #E7EDF6;
  padding: 20px;
  border-radius: 8px;
  margin: 0 auto;
}

.responsive-img {
  width: 100%;
  /* Rasm konteynerning kengligiga moslashadi */
  height: auto;
  /* Nisbatni saqlaydi */
  max-width: none;
  /* Maksimal kenglikni cheklamaydi */
  border-radius: 4px;
  /* Dumaloq burchaklar */
  padding-bottom: 120px;
  /* Pastki bo'shliq */
  object-fit: cover;
  /* Rasmni to'liq ko'rsatish uchun */
}


@media (max-width: 768px) {

  /* Kichik ekranlar (planshet yoki telefonlar) */
  .responsive-img {
      width: 100vw;
      /* Ekranning 100% kengligi */
      height: auto;
      /* Nisbatni buzmaydi */
  }
}

.custom-container .text-uz {
  color: black;
  font-size: 18px;
  font-family: "Roboto-Condensed", sans-serif;
  /* Default font */
  line-height: 1.6;
}

.custom-container .text-uz span {
  font-family: inherit;
  /* Font topilmasa default fontni ishlatish */
}
</style>