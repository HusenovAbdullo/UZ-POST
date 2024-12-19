<template>
  <section class="banner__breadcumn ralt">
    <!--Search Popup-->
    <div id="searchPopup" class="search__popup">
      <form action="#" class="popup-content d-flex align-items-center" @submit.prevent="fetchMarks(1)">
        <input type="text" placeholder="Search Here" />
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
                <span class="d4 mb-24">Markalar katalogi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="service__grid pt-120 pb-120 sectionbg2">
    <div class="container">
      <div class="row g-4">
        <div class="row-xl-4 col-lg-4">
          <div class="card__sidebar side__sticky round16">
            <div class="card__common__item bgwhite round16">
              <h4 class="head fw-600 bborderdash title pb-24 mb-24">Filtr</h4>
              <form @submit.prevent="fetchMarks(1)"
                class="d-flex mb-24 filter__search align-items-center justify-content-between">
                <input v-model="minYear" type="number" placeholder="Min yil" />
                <input v-model="maxYear" type="number" placeholder="Max yil" />
                <button type="submit"><i class="bi bi-search"></i></button>
              </form>
            </div>
          </div>
        </div>

        <div class="col-xl-8 col-lg-8">
          <div class="showing__gridlist__body">
            <div class="row justify-content-center g-4">
              <div v-for="mark in marks" :key="mark.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div class="service__item service__item1 shadow2 round16 p-8 bgwhite">
                  <router-link :to="`/marka2/${mark.id}`" class="thumb round16 w-100">
                    <img :src="mark.save_image_uz" class="round16 w-100" alt="service" />
                  </router-link>
                  <h5 class="mt-24 mb-20">
                    <router-link :to="`/marka2/${mark.id}`" class="titlet">
                      {{ mark.title_uz }}
                    </router-link>
                  </h5>
                  <div class="d-flex bborderdash pb-20 align-items-center justify-content-between">
                    <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                      <i class="bi bi-stopwatch"></i>
                      {{ mark.years }}
                    </div>
                    <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                      <i class="bi bi-bar-chart"></i>
                      {{ mark.count_number }}
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-20 justify-content-between">
                    <span class="fz-18 fw-600 inter base">
                      {{ mark.price_uz }}
                    </span>
                    <router-link :to="`/marka2/${mark.id}`"
                      class="aylana boxes1 round50 d-flex align-items-center justify-content-center">
                      <i class="bi bi-chevron-right title fz-16"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

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
    async fetchMarks(page = 1, params = {}) {
      try {
        // Parametrlar
        params.page = page; // Sahifa raqamini so'rovga qo'shamiz
        params.years_max = this.maxYear;
        params.years_min = this.minYear;

        // API'ga so'rov yuborish
        const response = await axios.get(
          `https://new.pochta.uz/api/v1/public/marks-page/`,
          { params }
        );

        // Ma'lumotlarni qayta ishlash
        this.marks = response.data.results.map((mark) => ({
          ...mark,
          save_image_uz: this.formatImageURL(mark.save_image_uz),
        }));

        this.currentPage = page; // Sahifani yangilash
        this.totalPages = response.data.total_pages; // Jami sahifalar
        this.nextPage = response.data.next ? page + 1 : null;
        this.previousPage = response.data.previous ? page - 1 : null;
      } catch (error) {
        console.error("Error fetching marks:", error);
      }
    },
    formatImageURL(url) {
      // URL'ni https ga o'zgartirish
      if (!url) return null;
      return url.startsWith("http://") ? url.replace("http://", "https://") : url;
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.fetchMarks(page);
      }
    },
  },
  watch: {
    minYear() {
      this.fetchMarks(1); // Qidiruvni 1-sahifadan boshlaymiz
    },
    maxYear() {
      this.fetchMarks(1); // Qidiruvni 1-sahifadan boshlaymiz
    },
  },

  mounted() {
    this.fetchMarks(1); // Ilk so'rovni yuborish
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
  /* Flexboxga o'xshash usul */
  -webkit-line-clamp: 2;
  /* Ikki qator bilan cheklaydi */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Oxiriga uch nuqta qo'shadi */
  white-space: normal;
}

.service__item1 {
  height: 300px;
  /* Elementning balandligini belgilash */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Tarkibni teng taqsimlash */
  text-align: center;
  /* Matnni markazlash */
}

.service__item1 img {
  max-height: 150px;
  /* Rasmning maksimal balandligini belgilash */
  object-fit: contain;
  /* Rasmlar chekkaga sig'adigan qilib kesiladi */
  margin: auto;
  /* Rasmlarni markazlash */
}

.service__item1 h5 {
  flex-grow: 1;
  /* Element balandligini tenglashtirish */
  display: flex;
  align-items: center;
  /* Vertikal markazlash */
  justify-content: center;
  /* Gorizontal markazlash */
  text-align: center;
}
</style>