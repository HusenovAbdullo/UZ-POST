<template>
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
                <span class="d41 mb-24">{{ $t('news') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="blog__sections sectionbg pt-60 pb-120">
    <div class="container">
      <div class="row g-4">
        <div class="col-xl-8 col-lg-8">
          <div v-for="item in newsItems" :key="item.id" class="balance__transfercard shadow1 p-8 bgwhite mb-24 round16">
            <div class="balance__transfercard shadow1 p-8 bgwhite mb-24 round16">
              <div class="bt__one mb-20">
                <img v-if="item.save_image" :src="item.save_image" alt="balance" class="round16 w-101" />
                <video v-else-if="item.video_uz && item.video_uz.length" controls class="round16 w-101">
                  <source :src="item.video_uz[0].file" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <video v-else-if="item.video_ru && item.video_ru.length" controls class="round16 w-101">
                  <source :src="item.video_ru[0].file" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div class="blog__content">
                <ul class="blog__addmin flex-wrap mb-24 d-flex align-items-center">
                  <li class="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                    <i class="bi bi-calendar3 ptext2"></i>
                    {{ formatDate(item.date) }}
                  </li>
                </ul>
                <h3 class="title mb-24">
                  <router-link :to="`/${$i18n.locale}/yangilik/${item.id}`" class="title">
                    {{ item[`title_${$i18n.locale}`] || item.title_uz }}
                  </router-link>
                </h3>
                <p v-if="item[`description_${$i18n.locale}`]" class="fz-16 fw-400 mb-40 ptext2 inter">
                  {{ item[`description_${$i18n.locale}`] || item.description_uz }}
                </p>
                <router-link :to="`/${$i18n.locale}/yangilik/${item.id}`" class="cmn--btn d-flex align-items-center gap-2 outline__btn">
                  <span>{{ $t('more_details') }}</span>
                  <span class="mt-1"><i class="bi bi-arrow-up-right"></i></span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4">
          <div class="blog__sidebar">
            <!-- <div class="blog__common__item bgwhite round16 mb-24">
              <h4 class="head fw-600 bborderdash title pb-24 mb-24">
                {{ $t('search') }}
              </h4>
              <form action="#0" class="d-flex mb-24 filter__search align-items-center justify-content-between">
                <input type="text" :placeholder="$t('search')" />
                <i class="bi bi-search"></i>
              </form>
            </div>
            <div class="blog__common__item bgwhite round16 mb-24">
              <h4 class="head fw-600 bborderdash title pb-24 mb-24">
                {{ $t('categories') }}
              </h4>
              <ul class="blog__categories">
                <li>
                  <a href="blog-details.html" class="d-flex align-items-center rad4">

                    <span class="fz-18 title inter">
                      {{ $t('community_news') }}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="blog-details.html" class="d-flex align-items-center">
                    <span class="cateicon">
                                 <img src="assets/img/custom-icon/aimacine.png" alt="round">
                              </span>
                    <span class="fz-18 title inter">
                      {{ $t('service_news') }}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="blog-details.html" class="d-flex align-items-center">
                    <span class="cateicon">
                                 <img src="assets/img/custom-icon/inter.png" alt="round">
                              </span>
                    <span class="fz-18 title inter">
                      {{ $t('official_statements') }}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="blog-details.html" class="d-flex align-items-center">
                    <span class="cateicon">
                                 <img src="assets/img/custom-icon/aibrain.png" alt="round">
                              </span>
                    <span class="fz-18 title inter">
                      {{ $t('department_news') }}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="blog-details.html" class="d-flex align-items-center">
                    <span class="cateicon">
                                 <img src="assets/img/custom-icon/deep-learning.png" alt="round">
                              </span>
                    <span class="fz-18 title inter">
                      {{ $t('partnership_news') }}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="blog-details.html" class="d-flex align-items-center">
                    <span class="fz-18 title inter">
                      {{ $t('social_projects') }}
                    </span>
                  </a>
                </li>
              </ul>
            </div> -->
            <div class="blog__common__item bgwhite round16 mb-24">
              <h4 class="head fw-600 bborderdash title pb-24 mb-24">
                {{ $t('latest_news') }}
              </h4>
              <ul class="recent__post">
                <li v-for="(item, index) in latestNews" :key="index">

                  <router-link :to="`/${$i18n.locale}/yangilik/${item.id}`"
                    class="recent___item bborderdash mb-24 pb-24 d-flex align-items-center">
                    <span class="cateicon">
                      <img :src="item.save_image" alt="round" style="width: 100px; height: 100px;">
                    </span>
                    <span class="fz-20 post__content fw-600 title inter">
                      {{ item[`title_${$i18n.locale}`] || item.title_uz }}
                      <span class="d-block fz-18 fw-400 base inter">
                        {{ formatDate(item.date) }}
                      </span>
                    </span>
                  </router-link>

                </li>
              </ul>
            </div>

            <div class="blog__common__item bgwhite round16">
              <h4 class="head fw-600 bborderdash title pb-24 mb-24">
                {{ $t('subscribe_us') }}
              </h4>
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

      <ul class="pagination justify-content-center mt-40">
        <li v-if="currentPage > 1" @click.prevent="changePage(currentPage - 1)">
          <a href="javascript:void(0)"><i class="bi bi-chevron-left base"></i></a>
        </li>
        <li v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }"
          @click.prevent="changePage(page)">
          <a href="javascript:void(0)">{{ page }}</a>
        </li>
        <li v-if="currentPage < totalPages" @click.prevent="changePage(currentPage + 1)">
          <a href="javascript:void(0)"><i class="bi bi-chevron-right base"></i></a>
        </li>
      </ul>



    </div>

  </section>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newsItems: [], // API'dan olingan barcha yangiliklar
      currentPage: 1,
      totalPages: 0,
    };
  },
  computed: {
    latestNews() {
      // Oxirgi 3 ta yangilikni olish
      return this.newsItems.slice(-3).reverse(); // Oxirgi elementlarni ko'rsatish
    }
  },
  created() {
    this.fetchNews(); // Komponent yaratilganda API dan yangiliklarni yuklash
  },
  methods: {
    async fetchNews(page = 1) {
      try {
        const response = await axios.get(
          `https://new.pochta.uz/api/v1/public/uz-post-news-paginations/?page=${page}`
        );
        this.newsItems = response.data.results.map((item) => {
          if (item.save_image && item.save_image.startsWith("http://")) {
            item.save_image = item.save_image.replace("http://", "https://");
          }
          if (item.video_uz && item.video_uz.length) {
            item.video_uz.forEach(video => {
              video.file = video.file.replace("http://", "https://");
            });
          }
          if (item.video_ru && item.video_ru.length) {
            item.video_ru.forEach(video => {
              video.file = video.file.replace("http://", "https://");
            });
          }
          return item;
        });
        this.totalPages = response.data.total_pages;
        this.currentPage = page;
      } catch (error) {
        console.error("Yangiliklar olishda xatolik yuz berdi:", error);
      }
    },
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.fetchNews(page).then(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth", // Yumuq harakatlanish
          });
        });
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    }
  }
};
</script>

<style>
.blog__sidebar {
  position: relative;
}

.recent__post li:first-child {
  position: sticky;
  top: 0;
  z-index: 10;
  /* Ensures it stays on top when scrolling */
  background-color: white;
  /* Optional: add background to avoid overlap with other elements */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Optional: add shadow for better visibility */
}
</style>
