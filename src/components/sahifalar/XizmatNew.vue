<template>
  <section class="banner__breadcumn ralt">
      <div id="searchPopup" class="search__popup">
          <form action="#" class="popup-content d-flex align-items-center">
              <input type="text" placeholder="Search Here">
              <button id="closeButton">
                  <i class="bi bi-x-lg"></i>
              </button>
          </form>
      </div>
      <div class="breadcumnd__wrapper">
          <div class="container">
              <div class="profile__wrappers setting__breadcumnd">
                  <div class="row g-4 align-items-center justify-content-between">
                      <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section class="setting__section pb-120">
      <div class="container__customizemain pb-120 round16" style="max-width: 1400px;">
          <!-- Rasmni API dan olish -->
          <img :src="serviceImage" class="rasmm pb-120 round16 responsive-img" alt="Xizmat rasmi">

          <div class="container">
              <header class="header">
                  <!-- API dan olingan title_uz -->
                  <h1 class="title">{{ serviceTitle }}</h1>
                  <router-link :to="`/map/`" class="map-link">Xizmat bo'limlari xaritasi</router-link>
              </header>

              <div class="description">
                  <!-- API dan olingan description_uz -->
                  {{ serviceDescription }}
              </div>

              <!-- Text_uz ni HTML formatida ko'rsatish -->
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
          serviceId: null, // Xizmatning ID-si
          serviceImage: '', // Xizmat rasmi
          serviceTitle: '', // Xizmat nomi
          serviceDescription: '', // Xizmat tavsifi
          serviceText: '' // HTML formatidagi matn
      };
  },
  created() {
      // Komponent yaratilganda API-dan ma'lumotlarni olish
      this.fetchServiceData();
  },
  methods: {
      async fetchServiceData() {
          try {
              this.serviceId = this.$route.params.id;
              const response = await axios.get(`https://new.pochta.uz/api/v1/public/services/${this.serviceId}/`);
              const serviceData = response.data;

              this.serviceImage = this.convertToHttps(serviceData.save_image);
              this.serviceTitle = serviceData.title_uz || 'Xizmat nomi mavjud emas';
              this.serviceDescription = serviceData.description_uz || 'Xizmat tavsifi mavjud emas';
              this.serviceText = serviceData.text_uz || ''; // HTML formatidagi matn

              // Matnda ishlatilgan fontlarni yuklash
              this.loadFontsFromText(this.serviceText);
          } catch (error) {
              console.error("API dan ma'lumotlarni olishda xatolik:", error);
          }
      },
      convertToHttps(url) {
          if (!url) return null;
          return url.startsWith("http://") ? url.replace("http://", "https://") : url;
      },
      loadFontsFromText(text) {
          // `font-family` qiymatini tahlil qilish uchun regex
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
          // Fontni dinamik yuklash
          const fontFace = new FontFace(fontName, `url(${fontPath})`);
          fontFace
              .load()
              .then((loadedFont) => {
                  document.fonts.add(loadedFont);
                  console.log(`${fontName} font yuklandi`);
              })
              .catch(() => {
                  console.warn(`${fontName} font mavjud emas. Stilda asl font ishlatiladi.`);
              });
      },
  }

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
font-family: "Roboto-Condensed", sans-serif; /* Default font */
line-height: 1.6;
}

.custom-container .text-uz span {
font-family: inherit; /* Font topilmasa default fontni ishlatish */
}

</style>
