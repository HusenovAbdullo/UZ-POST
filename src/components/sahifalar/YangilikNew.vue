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
                <span class="d41 mb-24">
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
              <template v-if="newsItem.save_image">
                <img :src="getSecureImageUrl(newsItem.save_image)" alt="news-image" class="round16 w-101" />
              </template>
              <template v-else>
                <video v-if="getVideoUrl()" controls class="round16 w-101">
                  <source :src="getVideoUrl()" type="video/mp4" />
                  {{ $t('video_not_supported') }}
                </video>
              </template>
            </div>
            <div class="blog__content">
              <ul class="blog__addmin flex-wrap mb-24 d-flex align-items-center gap-4">
  <!-- Sana -->
  <li class="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
    <i class="bi bi-calendar3 ptext2"></i>
    {{ formatDate(newsItem.date) }}
  </li>

  <!-- Ko‘rishlar soni -->
  <li class="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
    <i class="bi bi-eye ptext2"></i>
    {{ newsItem.views_count || 0 }}
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
                  <template v-for="tag in newsItem.tags" :key="tag.id">
                    <a href="#0" class="ata__tag fz-14 fw-400 pra border round100">
                      {{ tag[`name_${$i18n.locale}`] || tag.name_uz }}
                    </a>
                  </template>
                </div>
                <div class="share d-flex align-items-center gap-2">
                  <span class="fz-18 fw-500 inter base">
                    {{ $t('share') }}
                  </span>
                  <ul class="social d-flex align-items-center">
                    <li>
                      <a href="https://t.me/uzpostuz">
                        <i class="bi bi-telegram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/uzpost_">
                        <i class="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/uzpochta">
                        <i class="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/company/uzpost">
                        <i class="bi bi-linkedin"></i>
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
                {{ $t('categories') }}
              </h4>
              <ul class="blog__categories">
                <li>
                  <a href="/yangiliklar" class="d-flex align-items-center rad4">
                    <span class="fz-18 title inter">
                      {{ $t('community_news') }}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/xizmatlar" class="d-flex align-items-center">
                    <span class="fz-18 title inter">
                      {{ $t('service_news') }}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="" class="d-flex align-items-center">
                    <!-- <span class="cateicon">
                                 <img src="assets/img/custom-icon/inter.png" alt="round">
                              </span> -->
                    <span class="fz-18 title inter">
                      {{ $t('official_statements') }}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="" class="d-flex align-items-center">
                    <!-- <span class="cateicon">
                                 <img src="assets/img/custom-icon/aibrain.png" alt="round">
                              </span> -->
                    <span class="fz-18 title inter">
                      {{ $t('department_news') }}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="" class="d-flex align-items-center">
                    <!-- <span class="cateicon">
                                 <img src="assets/img/custom-icon/deep-learning.png" alt="round">
                              </span> -->
                    <span class="fz-18 title inter">
                      {{ $t('partnership_news') }}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="" class="d-flex align-items-center">
                    <!-- <span class="cateicon">
                                 <img src="assets/img/custom-icon/umacine.png" alt="round">
                              </span> -->
                    <span class="fz-18 title inter">
                      {{ $t('social_projects') }}
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="blog__common__item bgwhite round16">
              <h4 class="head fw-600 bborderdash title pb-24 mb-24">
                {{ $t('latest_news') }}
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

  watch: {
    '$i18n.locale': function () {
      this.updateLocalizedText(); // Til o'zgarganda matnni yangilash funksiyasi
      this.updateLocalizedContent(); // Video URLni ham yangilash
    }
  },

  methods: {
    async fetchNews(id) {
      try {
        const response = await axios.get(`https://new.pochta.uz/api/v1/public/uz-post-news/${id}/`);
        this.newsItem = response.data;
        if (this.newsItem) {
          this.updateLocalizedText(); // Matnni birinchi marta yuklash
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    },
    updateLocalizedText() {
      if (this.newsItem) {
        const locale = this.$i18n.locale; // Joriy tilni olamiz
        this.serviceText = this.newsItem[`text_${locale}`] || this.newsItem.text_uz || ''; // Tilga mos matn
        this.loadFontsFromText(this.serviceText); // Fontlarni qayta yuklash
      }
    },
    loadFontsFromText(text) {
      const fontRegex = /font-family:\s*([^;"]+)/g;
      let match;
      const fonts = new Set();

      while ((match = fontRegex.exec(text)) !== null) {
        fonts.add(match[1].trim());
      }

      fonts.forEach((font) => {
        const fontPath = `/assets/css/fonts/${font}.ttf`;
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
          console.warn(`${fontName} font mavjud emas.`);
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
      if (url && url.startsWith('http://')) {
        return url.replace('http://', 'https://');
      }
      return url;
    },
    getVideoUrl() {
      const locale = this.$i18n.locale;
      let videoUrl = null;

      if (locale === 'uz' && this.newsItem.video_uz.length) {
        videoUrl = this.newsItem.video_uz[0].file;
      } else if (locale === 'ru' && this.newsItem.video_ru.length) {
        videoUrl = this.newsItem.video_ru[0].file;
      }

      // Agar video URL mavjud bo‘lsa, http:// ni https:// ga almashtiramiz
      if (videoUrl && videoUrl.startsWith('http://')) {
        return videoUrl.replace('http://', 'https://');
      }

      return videoUrl;
    },
    updateLocalizedContent() {
      // Bu funksiyada video va boshqa matnlarni yangilaymiz
      this.$forceUpdate(); // Komponentni qayta yuklash
    }
  }

};
</script>

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
  font-family: "Roboto-Condensed", sans-serif;
  /* Default font */
  line-height: 1.6;
}

.custom-container .text-uz span {
  font-family: inherit;
  /* Font topilmasa default fontni ishlatish */
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