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
                  {{ $t('news') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero Section End -->

  <!-- Blog Categories Here -->
  <section class="blog__sections sectionbg pt-60 pb-120">
    <div class="container">
      <div class="row g-4">
        <div v-if="newsItem" class="col-xl-8 col-lg-8">
          <div class="balance__transfercard shadow1 p-8 bgwhite mb-24 round16">
            <div class="bt__one mb-20">
              <img :src="getSecureImageUrl(newsItem.save_image)" alt="news-image" class="round16 w-101" />
            </div>
            <div class="blog__content">
              <ul class="blog__addmin flex-wrap mb-24 d-flex align-items-center">
                <li class="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                  <i class="bi bi-calendar3 ptext2"></i>
                  {{ formatDate(newsItem.date) }}
                </li>
              </ul>
              <h3 class="title mb-24">
                {{ newsItem[`title_${$i18n.locale}`] || newsItem.title_uz }}
              </h3>
              <div class="text-content" v-html="serviceText">
              </div>

              <!-- <h4 class="title mb-20 inter fw-600">
                {{ $t('sub_heading') }}
              </h4> -->
              <p class="fz-16 fw-400 mb-30 ptext2 inter">
                {{ newsItem[`description_${$i18n.locale}`] || newsItem.description_uz }}
              </p>
              <p class="fz-16 fw-400 inter pra">
                {{ newsItem[`meta_title_${$i18n.locale}`] || '' }}
              </p>
              <div
                class="attachment__footertag mt-30 gap-3 flex-wrap d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2 flex-wrap">
                  <span class="base fz-18 fw-500 inter">
                    {{ $t('tags') }}
                  </span>
                  <a href="#0" class="ata__tag fz-14 fw-400 pra border round100">
                    Umumjahon pochta
                  </a>
                  <a href="#0" class="ata__tag fz-14 fw-400 pra border round100">
                    UzPost
                  </a>
                  <a href="#0" class="ata__tag fz-14 fw-400 pra border round100">
                    Elektron tijorat
                  </a>
                </div>
                <div class="share d-flex align-items-center gap-2">
                  <span class="fz-18 fw-500 inter base">
                    {{ $t('share') }}
                  </span>
                  <ul class="social d-flex align-items-center">
                    <li>
                      <a href="#0">
                        <i class="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i class="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i class="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i class="bi bi-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="trending__based bgwhite round16 shadow1">
            <h4 class="pb-24 title bborderdash mb-24">
              {{ $t('leave_comment') }}
            </h4>
            <form action="#0" class="writing__review">
              <div class="wrigt__grp">
                <label for="name">{{ $t('name') }}</label>
                <input type="text" id="name" :placeholder="$t('enter_name')">
              </div>
              <div class="wrigt__grp">
                <label for="email">{{ $t('phone') }}</label>
                <input type="text" id="email" :placeholder="$t('enter_phone1')">
              </div>
              <div class="wrigt__grp">
                <label for="name">{{ $t('comment') }}</label>
                <textarea class="form-control" :placeholder="$t('leave_comment1')" id="textAreaExample"
                  rows="4"></textarea>
              </div>
              <button class="cmn--btn mt-16">
                <span>
                  {{ $t('submit') }}
                </span>
                <span>
                  <i class="bi bi-arrow-up-right"></i>
                </span>
              </button>
            </form>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4">
               <div class="blog__sidebar">

                  <div class="blog__common__item bgwhite round16 mb-24">
                     <h4 class="head fw-600 bborderdash title pb-24 mb-24">
                        Kategoriyalar
                     </h4>
                     <ul class="blog__categories">
                        <li>
                           <a href="/yangiliklar" class="d-flex align-items-center rad4">
                              <span class="fz-18 title inter">
                                 Jamiyat yangiliklari
                              </span>
                           </a>
                        </li>
                        <li>
                           <a href="/xizmatlar" class="d-flex align-items-center">
                              <span class="fz-18 title inter">
                                 Xizmatlar va tariflar yangiliklari
                              </span>
                           </a>
                        </li>
                        <li>
                           <a href="" class="d-flex align-items-center">
                              <!-- <span class="cateicon">
                                 <img src="assets/img/custom-icon/inter.png" alt="round">
                              </span> -->
                              <span class="fz-18 title inter">
                                 Rasmiy munosabatlar
                              </span>
                           </a>
                        </li>
                        <li>
                           <a href="" class="d-flex align-items-center">
                              <!-- <span class="cateicon">
                                 <img src="assets/img/custom-icon/aibrain.png" alt="round">
                              </span> -->
                              <span class="fz-18 title inter">
                                 Bo'limlar yangiliklari
                              </span>
                           </a>
                        </li>
                        <li>
                           <a href="" class="d-flex align-items-center">
                              <!-- <span class="cateicon">
                                 <img src="assets/img/custom-icon/deep-learning.png" alt="round">
                              </span> -->
                              <span class="fz-18 title inter">
                                 Hamkorlik yangiliklari
                              </span>
                           </a>
                        </li>
                        <li>
                           <a href="" class="d-flex align-items-center">
                              <!-- <span class="cateicon">
                                 <img src="assets/img/custom-icon/umacine.png" alt="round">
                              </span> -->
                              <span class="fz-18 title inter">
                                 Ijtimoiy loyihalar
                              </span>
                           </a>
                        </li>
                     </ul>
                  </div>
                  
                  <div class="blog__common__item bgwhite round16">
                     <h4 class="head fw-600 bborderdash title pb-24 mb-24">
                        Bizni kuzatib boring
                     </h4>
                     <ul class="social d-flex align-items-center">
                        <li>
                           <a href="https://www.facebook.com/uzpochta">
                              <i class="bi bi-facebook"></i>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.instagram.com/uzpost_/">
                              <i class="bi bi-instagram"></i>
                           </a>
                        </li>
                        <li>
                           <a href="https://t.me/uzpostuz">
                              <i class="bi bi-telegram"></i>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
        

      </div>
    </div>
  </section>
  <!-- Blog Categories End -->
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      newsItem: null,
      serviceText: '',
    };
  },
  created() {
    const id = this.$route.params.id; // Get the ID from the route
    this.fetchNews(id); // Fetch the detailed news data
  },
  methods: {
    async fetchNews(id) {
      try {
        const response = await axios.get(`https://new.pochta.uz/api/v1/public/uz-post-news/${id}/`);
        this.newsItem = response.data;
        if (this.newsItem) {
  const locale = this.$i18n.locale; // Joriy tilni olamiz
  this.serviceText = this.newsItem[`text_${locale}`] || this.newsItem.text_uz || ''; // Tilga mos matnni tanlaymiz
  this.loadFontsFromText(this.serviceText)
}

      } catch (error) {
        console.error('Error fetching news:', error);
      }
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
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    },
    getSecureImageUrl(url) {
      // Ensure the image URL starts with https
      if (url && url.startsWith('http://')) {
        return url.replace('http://', 'https://');
      }
      return url; // If it already starts with https, return it as is
    }
  }
};
</script >

<style scoped>
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