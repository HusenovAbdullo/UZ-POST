<template>
  <!-- Hero Section -->
  <section class="banner__breadcumn ralt">
    <div class="breadcumnd__wrapper">
      <div class="container">
        <div class="profile__wrapper">
          <div class="row g-4 align-items-center justify-content-between">
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
              <div class="breadcumnd__content">
                <span class="d4 mb-24">{{ $t('stamp_info') }}</span>
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
                  <p class="title2">{{ $t('Release_date') }}: {{ marka.years }}</p>
                  <p class="title2">{{ $t('Quantity') }}: {{ marka.count_number }}</p>
                  <p class="title2">{{ $t('Nominal') }}: {{ marka.price }} {{ $t('summ') }}</p>
                </div>
                <div class="divider">
                  <span>{{ $t('stamp_info') }}</span>
                </div>
                <div class="text-content" v-html="serviceText"></div>
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
      marka: null,
      serviceText: '',      // API'dan olingan ma'lumotlar
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

        this.marka = {
          save_image: data.save_image_uz ? data.save_image_uz.replace("http://", "https://") : "default.jpg",
          title: data[`title_${locale}`] || data.title_uz || "",
          years: data.years || "",
          price: data[`price_${locale}`] || data.price_uz || "",
          count_number: data.count_number || "",
        };
        this.serviceText =  data[`text_${locale}`] || ''
        this.loadFontsFromText(this.serviceText)

      } catch (error) {
        console.error("API'dan ma'lumotlarni yuklashda xatolik:", error);
        this.marka = null; // Xatolik yuz bersa, bo'sh qiymat qoldiramiz
      }
    },
    loadFontsFromText(text) {
            const fontRegex = /font-family:\s*([^;"]+)/g;
            let match;
            const fonts = new Set();

            // Matndagi barcha `font-family` qiymatlarini yig'ish
            while ((match = fontRegex.exec(text)) !== null) {
                fonts.add(match[1].trim());
            }

            // Har bir font uchun `.ttf` faylni yuklash
            fonts.forEach((font) => {
                const fontPath = `/assets/css/fonts/${font}.ttf`; // To'g'ri interpolatsiya
                this.loadFont(font, fontPath);
            });
        },
        loadFont(fontName, fontPath) {
            const fontFace = new FontFace(fontName, `url(${fontPath})`);
            fontFace
                .load()
                .then((loadedFont) => {
                    document.fonts.add(loadedFont);
                })
                .catch(() => {
                    console.warn(`${fontName} font mavjud emas. Stilda asl font ishlatiladi.`);
                });
        },
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



.text-content {
  font-size: 1rem;
  line-height: 1.8;
  color: #000;
}

.text-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.text-content table,
.text-content th,
.text-content td {
  border: 1px solid #ddd;
}

.text-content th,
.text-content td {
  padding: 10px;
  text-align: left;
}

.text-content th {
  background-color: #f9f9f9;
}
</style>
