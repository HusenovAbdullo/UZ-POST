<template>
  <section class="banner__breadcumn ralt">
    <!--Search Popup-->
    <div id="searchPopup" class="search__popup">
      <form action="#" class="popup-content d-flex align-items-center" @submit.prevent="fetchMarks(1)">
        <input type="text" :placeholder="$t('search_here')" />
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
                <span class="d41 mb-24">{{ $t('marks_catalog') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="service__grid pt-120 pb-120 sectionbg2">
  <div class="container">
    <div class="row g-3 justify-content-center">

      <!-- Filter panel -->
      <div class="col-lg-4 mb-4">
        <div class="card__sidebar side__sticky round16">
          <div class="card__common__item bgwhite round16">
            <h4 class="head fw-600 bborderdash title pb-24 mb-24">{{ $t('filter') }}</h4>
            <form @submit.prevent="fetchMarks(1)"
              class="d-flex mb-24 filter__search align-items-center justify-content-between">
              <input v-model="minYear" type="number" :placeholder="$t('min_year')" />
              <input v-model="maxYear" type="number" :placeholder="$t('max_year')" />
              <button type="submit"><i class="bi bi-search"></i></button>
            </form>
          </div>
        </div>
      </div>

      <!-- Marka kartalari -->
      <div class="col-lg-8">
        <div class="row g-3 justify-content-center">
          <div v-for="mark in marks" :key="mark.id" class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4" style="        flex: 1 1 100%;">
            <div class="service__item service__item1 shadow2 round16 p-8 bgwhite">
              <router-link :to="`/${$i18n.locale}/marka2/${mark.id}`" class="thumb round16 w-100">
                <img :src="mark.save_image" class="round16 w-100" alt="service" />
              </router-link>
              <h5 class="mt-24 mb-20">
                <router-link :to="`/${$i18n.locale}/marka2/${mark.id}`" class="titlet">
                  {{ mark.title }}
                </router-link>
              </h5>
              <div class="d-flex bborderdash pb-20 align-items-center justify-content-between">
                <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                  <i class="bi bi-stopwatch"></i>
                  {{ mark.years }}
                </div>
                <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                  <i class="bi bi-bar-chart"></i>
                  {{ mark.count }}
                </div>
              </div>
              <div class="d-flex align-items-center mt-20 justify-content-between">
                <span class="fz-18 fw-600 inter base">
                  {{ mark.price }}
                </span>
                <router-link :to="`/${$i18n.locale}/marka2/${mark.id}`"
                  class="aylana boxes1 round50 d-flex align-items-center justify-content-center">
                  <i class="bi bi-chevron-right title fz-16"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <ul class="pagination justify-content-center mt-40">
          <li>
            <a href="#0" @click.prevent="goToPage(currentPage - 1)" :class="{ disabled: !previousPage }">
              <i class="bi bi-chevron-left base"></i>
            </a>
          </li>
          <li v-for="page in totalPages" :key="page">
            <a href="#0" @click.prevent="goToPage(page)" :class="{ active: page === currentPage }">
              {{ page }}
            </a>
          </li>
          <li>
            <a href="#0" @click.prevent="goToPage(currentPage + 1)" :class="{ disabled: !nextPage }">
              <i class="bi bi-chevron-right base"></i>
            </a>
          </li>
        </ul>

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
      marks: [], // API'dan kelgan ma'lumotlar
      currentPage: 1,
      totalPages: 1,
      nextPage: null,
      previousPage: null,
      minYear: "",
      maxYear: "",
    };
  },
  methods: {
    async fetchMarks(page = 1) {
      try {
        const params = {
          page,
          years_max: this.maxYear,
          years_min: this.minYear,
        };

        const response = await axios.get(`https://new.pochta.uz/api/v1/public/marks-page/`, { params });

        const locale = this.$i18n.locale;

        this.marks = response.data.results.map((mark) => ({
          id: mark.id,
          title: mark[`title_${locale}`] || mark.title_uz,
          save_image: mark.save_image_uz && mark.save_image_uz.startsWith("http://")
            ? mark.save_image_uz.replace("http://", "https://")
            : mark.save_image_uz,
          price: mark[`price_${locale}`] || mark.price_uz,
          count: mark[`marks_count_${locale}`] || mark.marks_count_uz,
          years: mark.years,
        }));

        this.currentPage = page;
        this.totalPages = response.data.total_pages;
        this.nextPage = response.data.next ? page + 1 : null;
        this.previousPage = response.data.previous ? page - 1 : null;
      } catch (error) {
        console.error("Error fetching marks:", error);
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.fetchMarks(page);
      }
    },
  },
  watch: {
    "$i18n.locale": {
      handler() {
        this.fetchMarks(this.currentPage); // Til o'zgarganda sahifani qayta yuklash
      },
      immediate: true, // Komponent yaratilganda ham kuzatishni ishga tushirish
    },
  },
};
</script>

<style>
.pagination .active {
  font-weight: bold;
  color: #000;
}

.pagination .disabled {
  pointer-events: none;
  opacity: 0.5;
}

.titlet {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

.service__item1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

.service__item1 img {
  max-height: 150px;
  object-fit: contain;
  margin: auto;
}
</style>
