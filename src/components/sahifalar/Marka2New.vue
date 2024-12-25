<template>
  <!-- Hero Section -->
  <section class="banner__breadcumn ralt">
    <div class="breadcumnd__wrapper">
      <div class="container">
        <div class="profile__wrapper">
          <div class="row g-4 align-items-center justify-content-between">
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
              <div class="breadcumnd__content">
                <span class="d4 mb-24">{{ $t('Marka haqida') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero Section End -->

  <!-- Service Grid Section -->
  <section class="service__grid pt-120 pb-120 sectionbg2" v-if="marka">
    <div class="container">
      <div class="row g-4">
        <!-- Sidebar -->
        <div class="col-xl-4 col-lg-4">
          <div class="card__sidebar side__sticky round16" style="background: #0141a2;">
            <div class="card__common__item bgwhite round16">
              <span class="cateicon">
                <img :src="marka.save_image" alt="marka" style="width: 100%; height: 100%;" />
              </span>
            </div>
          </div>
        </div>
        <!-- Sidebar End -->

        <!-- Main Content -->
        <div class="col-xl-8 col-lg-8">
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" role="tabpanel">
              <div class="overview__gitwrapper bgwhite round16 border">
                <p class="fz-32 pb-40 bborderdash mb-20 title2">
                  {{ marka.title }}
                </p>
                <div class="accordion-body" style="color: black;">
                  <p class="title2">{{ $t('marka_sana') }}: {{ marka.years }}</p>
                  <p class="title2">{{ $t('marka_addadi') }}: {{ marka.count_number }}</p>
                  <p class="title2">{{ $t('marka_nominal') }}: {{ marka.price }}</p>
                </div>
                <div class="divider">
                  <span>{{ $t('marka_haqida') }}</span>
                </div>
                <p>{{ marka.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Main Content End -->
      </div>
    </div>
  </section>
  <div v-else class="loading text-center">
    <p>{{ $t('Yuklanmoqda...') }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Marka2New",
  data() {
    return {
      marka: null, // API'dan olingan ma'lumotlar
    };
  },
  watch: {
    '$i18n.locale'(newLocale) {
      this.fetchData(newLocale);
    }
  },
  async mounted() {
    this.fetchData(this.$i18n.locale);
  },
  methods: {
    async fetchData(locale) {
      try {
        // Router'dan ID ni olish
        const id = this.$route.params.id;

        // API'ga so'rov yuborish
        const response = await axios.get(`https://new.pochta.uz/api/v1/public/marks-page/${id}/`);

        // API'dan ma'lumotlarni olish
        const data = response.data;

        // Ma'lumotlarni tanlangan tilga moslashtirish
        const isUz = locale === 'uz';

        this.marka = {
          save_image: data.save_image_uz ? data.save_image_uz.replace("http://", "https://") : "default.jpg",
          title: isUz ? data.title_uz : data.title_ru || "Noma'lum",
          years: data.years || "Noma'lum",
          price: isUz ? data.price_uz || "Noma'lum" : data.price_ru || "Noma'lum",
          count_number: data.count_number || "Noma'lum",
          description: isUz ? data.text_uz || "Ma'lumot mavjud emas" : data.text_ru || "Информация отсутствует",
        };
      } catch (error) {
        console.error("API'dan ma'lumotlarni yuklashda xatolik:", error);
        this.marka = null; // Xatolik yuz bersa, bo'sh qiymat qoldiramiz
      }
    }
  }
};
</script>

<style scoped>
/* Stil yozish joyi */
.loading {
  font-size: 20px;
  font-weight: bold;
  color: #555;
}
</style>
