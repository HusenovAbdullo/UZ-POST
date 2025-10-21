<template>
  <!-- Hero Section -->
  <section class="banner__breadcumn ralt">
    <div class="breadcumnd__wrapper">
      <div class="container">
        <div class="profile__wrapper">
          <div class="row g-4 align-items-center justify-content-between">
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
              <div class="breadcumnd__content">
                <span class="d41 mb-24">{{ $t('stamp_info') }}</span>
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
                  <p class="title2">
                    {{ $t('Release_date') }}: {{ marka.years }}
                  </p>
                  <p class="title2">
                    {{ $t('Quantity') }}: {{ formatInt(marka.count_number) }}
                  </p>
                  <p class="title2">
                    {{ $t('Nominal') }}: {{ formatMoney(marka.price) }} {{ $t('summ') }}
                  </p>
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
      serviceText: "",
    };
  },

  watch: {
    "$i18n.locale"(newLocale) {
      this.fetchData(newLocale);
    },
    "$route.params.id"() {
      this.fetchData(this.$i18n.locale);
    },
  },

  async mounted() {
    this.fetchData(this.$i18n.locale);
  },

  methods: {
    async fetchData(locale) {
      try {
        const id = this.$route.params.id;
        const { data } = await axios.get(
          `https://new.pochta.uz/api/v1/public/marks-page/${id}/`
        );

        // Sarlavha (til bo'yicha)
        const title =
          data[`title_${locale}`] ||
          data.title_uz ||
          data.title_ru ||
          data.title_en ||
          "";

        // Rasmni tanlash va http -> https
        const secureUrl = (u) => (typeof u === "string" ? u.replace(/^http:\/\//, "https://") : "");
        let img = data.save_image_uz ? secureUrl(data.save_image_uz) : "";
        if (!img && Array.isArray(data.images) && data.images.length) {
          img = secureUrl(data.images[0]?.imge);
        }
        if (!img) img = "default.jpg";

        // Narx: faqat main_price (son ko'rinishida)
        const mainPriceRaw = data.main_price;
        const mainPrice =
          typeof mainPriceRaw === "number"
            ? mainPriceRaw
            : parseInt(String(mainPriceRaw || "0").replace(/[^\d]/g, ""), 10);

        // Miqdor: count_number (son)
        const countRaw = data.count_number;
        const count =
          typeof countRaw === "number"
            ? countRaw
            : parseInt(String(countRaw || "0").replace(/[^\d]/g, ""), 10);

        this.marka = {
          save_image: img,
          title,
          years: data.years || "",
          price: Number.isFinite(mainPrice) ? mainPrice : 0,
          count_number: Number.isFinite(count) ? count : 0,
        };

        this.serviceText = data[`description_${locale}`] || "";
        this.loadFontsFromText(this.serviceText);
      } catch (error) {
        console.error("API'dan ma'lumotlarni yuklashda xatolik:", error);
        this.marka = null;
      }
    },

    // Matn ichida CSS font-family topib, local /assets/css/fonts/*.ttf dan yuklash
    loadFontsFromText(text) {
      const fontRegex = /font-family:\s*([^;"]+)/g;
      let match;
      const fonts = new Set();

      while ((match = fontRegex.exec(text)) !== null) {
        // "Arial, sans-serif" ko‘rinishida bo‘lsa — faqat birinchi nomni olamiz
        const first = match[1].split(",")[0].replace(/["']/g, "").trim();
        if (first) fonts.add(first);
      }

      fonts.forEach((font) => {
        const fontPath = `/assets/css/fonts/${font}.ttf`;
        this.loadFont(font, fontPath);
      });
    },

    loadFont(fontName, fontPath) {
      try {
        const fontFace = new FontFace(fontName, `url(${fontPath})`);
        fontFace
          .load()
          .then((loadedFont) => {
            document.fonts.add(loadedFont);
          })
          .catch(() => {
            console.warn(`${fontName} font mavjud emas. Stilda asl font ishlatiladi.`);
          });
      } catch {
        // Ba'zi eski brauzerlarda FontFace bo‘lmasligi mumkin
      }
    },

    formatMoney(v) {
      return new Intl.NumberFormat("uz-UZ").format(Number(v || 0));
    },
    formatInt(v) {
      return new Intl.NumberFormat("uz-UZ").format(Number(v || 0));
    },
  },
};
</script>

<style scoped>
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
