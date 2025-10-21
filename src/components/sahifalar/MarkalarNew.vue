<template>
  <section class="banner__breadcumn ralt">
    <div id="searchPopup" class="search__popup">
      <form
        action="#"
        class="popup-content d-flex align-items-center"
        @submit.prevent="fetchMarks(1)"
      >
        <input
          type="text"
          v-model.trim="searchTerm"
          :placeholder="$t('search_here')"
        />
        <button id="closeButton"><i class="bi bi-x-lg"></i></button>
      </form>
    </div>

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
        <!-- SIDEBAR -->
        <div class="col-lg-4 mb-4">
          <div class="card__sidebar side__sticky round16">
            <div class="bank__check__wrap tborderdash pb-24">
              <h5 class="title mb-16 pt-20">{{ $t('yil') }}</h5>
              <div
                v-for="(rangeItem, index) in yearRanges.filter(r => r.count > 0)"
                :key="index"
                class="d-flex align-items-center justify-content-between"
              >
                <div class="bank__checkitem mb-8 d-flex align-items-center">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`year_${index}`"
                    v-model="rangeItem.checked"
                  />
                  <label
                    class="form-check-label fz-16 fw-400 ptext2 inter"
                    :for="`year_${index}`"
                  >
                    {{ rangeItem.range.start || '...' }} - {{ rangeItem.range.end }}
                  </label>
                </div>
                <span class="fw-500 inter fz-16 pra">{{ rangeItem.count }}</span>
              </div>
            </div>

            <div class="bank__check__wrap tborderdash pb-24">
              <h5 class="title mb-16 pt-20">{{ $t('turkum') }}</h5>
              <div
                v-for="cat in categories.filter(c => c.marks_count > 0)"
                :key="cat.id"
                class="d-flex align-items-center justify-content-between"
              >
                <div class="bank__checkitem mb-8 d-flex align-items-center">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`cat_${cat.id}`"
                    v-model="cat.checked"
                  />
                  <label
                    class="form-check-label fz-16 fw-400 ptext2 inter"
                    :for="`cat_${cat.id}`"
                  >
                    {{ cat[`title_${$i18n.locale}`] || cat.title_uz }}
                  </label>
                </div>
                <span class="fw-500 inter fz-16 pra">{{ cat.marks_count }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- GRID -->
        <div class="col-lg-8">
          <div class="row g-3 justify-content-center marks-grid">
            <div v-for="mark in marks" :key="mark.id" class="col-6 col-md-4">
              <div class="service__item service__item1 shadow2 round16 p-8 bgwhite">
                <router-link
                  :to="`/${$i18n.locale}/marka2/${mark.id}`"
                  class="thumb round16 w-100"
                >
                  <img :src="mark.save_image" class="round16 w-100" alt="service" />
                </router-link>

                <h5 class="mt-24 mb-20">
                  <router-link
                    :to="`/${$i18n.locale}/marka2/${mark.id}`"
                    class="titlet"
                  >
                    {{ mark.title }}
                  </router-link>
                </h5>

                <div class="d-flex bborderdash pb-20 align-items-center justify-content-between">
                  <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                    <i class="bi bi-stopwatch"></i>{{ mark.years }}
                  </div>
                  <div class="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                    <i class="bi bi-bar-chart"></i>{{ formatInt(mark.count) }}
                  </div>
                </div>

                <div class="d-flex align-items-center mt-20 justify-content-between">
                  <span class="fz-18 fw-600 inter base">
                    {{ formatMoney(mark.price) }} {{ $t('summ') }}
                  </span>
                  <router-link
                    :to="`/${$i18n.locale}/marka2/${mark.id}`"
                    class="aylana boxes1 round50 d-flex align-items-center justify-content-center"
                  >
                    <i class="bi bi-chevron-right title fz-16"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- PAGINATION -->
          <div class="pagination-wrap" role="navigation" aria-label="pagination">
            <ul class="pagination-modern push-down">
              <li>
                <a
                  href="#0"
                  class="page-btn arrow"
                  :class="{ disabled: !previousPage }"
                  @click.prevent="goToPage(currentPage - 1)"
                  aria-label="Previous page"
                >
                  <i class="bi bi-chevron-left"></i>
                </a>
              </li>

              <li v-for="(item, idx) in displayedPages" :key="idx">
                <span v-if="item === 'dots'" class="page-dots" aria-hidden="true">…</span>
                <a
                  v-else
                  href="#0"
                  class="page-btn"
                  :class="{ active: item === currentPage }"
                  @click.prevent="goToPage(item)"
                  :aria-current="item === currentPage ? 'page' : null"
                >
                  {{ item }}
                </a>
              </li>

              <li>
                <a
                  href="#0"
                  class="page-btn arrow"
                  :class="{ disabled: !nextPage }"
                  @click.prevent="goToPage(currentPage + 1)"
                  aria-label="Next page"
                >
                  <i class="bi bi-chevron-right"></i>
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
      yearRanges: [],
      categories: [],
      marks: [],
      currentPage: 1,
      totalPages: 1,
      nextPage: null,
      previousPage: null,
      minYear: "",
      maxYear: "",
      searchTerm: "",
      // responsive pagination
      isNarrow: false,
      mediaQuery: null,
    };
  },

  computed: {
    displayedPages() {
      const tp = this.totalPages;
      const cp = this.currentPage;

      const startCount = this.isNarrow ? 2 : 3;
      const endCount = this.isNarrow ? 1 : 3;

      if (tp <= startCount + endCount + 3) {
        return Array.from({ length: tp }, (_, i) => i + 1);
      }

      const firstBlock = Array.from({ length: startCount }, (_, i) => i + 1);
      const lastBlock = Array.from({ length: endCount }, (_, i) => tp - endCount + 1 + i);

      if (cp <= startCount + 1) {
        const head = Array.from({ length: startCount + 1 }, (_, i) => i + 1);
        return [...head, "dots", ...lastBlock];
      }

      if (cp >= tp - endCount) {
        return [...firstBlock, "dots", ...lastBlock];
      }

      return [...firstBlock, "dots", cp, "dots", ...lastBlock];
    },
  },

  methods: {
    async fetchCategories() {
      try {
        const { data } = await axios.get("https://new.pochta.uz/api/v1/public/marks-catalog/");
        this.categories = data
          .filter(c => c.status === true)
          .map(c => ({ ...c, checked: false }));
        // Kategoriyalar kelgach birinchi sahifani yuklaymiz
        this.fetchMarks(1);
      } catch (e) {
        console.error("Error fetching categories:", e);
      }
    },

    async fetchYearRanges() {
      try {
        const { data } = await axios.get(
          "https://new.pochta.uz/api/v1/public/marks-page/year_ranges/"
        );
        this.yearRanges = data.map(r => ({ ...r, checked: false }));
      } catch (e) {
        console.error("Error fetching year ranges:", e);
      }
    },

    async fetchMarks(page = 1) {
      try {
        const selectedCategoryIds = this.categories.filter(c => c.checked).map(c => c.id);

        const params = {
          page,
          years_min: this.minYear || undefined,
          years_max: this.maxYear || undefined,
          turkum: selectedCategoryIds.length ? selectedCategoryIds : undefined,
          search: this.searchTerm || undefined, // agar backend qo‘llasa
        };

        const response = await axios.get("https://new.pochta.uz/api/v1/public/marks-page/", {
          params,
          paramsSerializer: p => {
            const sp = new URLSearchParams();
            Object.entries(p).forEach(([k, v]) => {
              if (Array.isArray(v)) v.forEach(x => sp.append(k, x));
              else if (v !== undefined && v !== "" && v !== null) sp.append(k, v);
            });
            return sp.toString();
          },
        });

        const locale = this.$i18n?.locale || "uz";
        this.marks = (response.data.results || []).map(mark => {
          // sarlavha
          const title =
            mark[`title_${locale}`] || mark.title_uz || mark.title_ru || mark.title_en || "";

          // rasm: http -> https
          let img = mark.save_image_uz || "";
          if (typeof img === "string") img = img.replace(/^http:\/\//, "https://");

          // narx: main_price ustuvor (son ko‘rinishida)
          const mainPriceRaw = mark.main_price;
          const mainPrice =
            typeof mainPriceRaw === "number"
              ? mainPriceRaw
              : parseInt(String(mainPriceRaw || "0").replace(/[^\d]/g, ""), 10);

          // son: count_number
          const countRaw = mark.count_number;
          const count =
            typeof countRaw === "number"
              ? countRaw
              : parseInt(String(countRaw || "0").replace(/[^\d]/g, ""), 10);

          return {
            id: mark.id,
            title,
            save_image: img,
            price: Number.isFinite(mainPrice) ? mainPrice : 0,
            count: Number.isFinite(count) ? count : 0,
            years: mark.years,
          };
        });

        this.currentPage = page;
        this.totalPages = Number(response.data.total_pages) || 1;
        this.nextPage = response.data.next ? page + 1 : null;
        this.previousPage = response.data.previous ? page - 1 : null;
      } catch (e) {
        console.error("Error fetching marks:", e);
      }
    },

    goToPage(page) {
      if (page === "dots") return;
      if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
        this.fetchMarks(page);
      }
    },

    updateNarrow() {
      this.isNarrow = this.mediaQuery ? this.mediaQuery.matches : window.innerWidth < 990;
    },

    formatMoney(v) {
      const n = Number(v || 0);
      return new Intl.NumberFormat("uz-UZ").format(n);
    },

    formatInt(v) {
      const n = Number(v || 0);
      return new Intl.NumberFormat("uz-UZ").format(n);
    },
  },

  mounted() {
    this.fetchCategories();
    this.fetchYearRanges();

    // 990px breakpoint kuzatuvchi
    this.mediaQuery = window.matchMedia("(max-width: 990px)");
    this.updateNarrow();
    if (this.mediaQuery.addEventListener) {
      this.mediaQuery.addEventListener("change", this.updateNarrow);
    } else if (this.mediaQuery.addListener) {
      this.mediaQuery.addListener(this.updateNarrow); // eski brauzerlar
    }
  },

  beforeUnmount() {
    if (!this.mediaQuery) return;
    if (this.mediaQuery.removeEventListener) {
      this.mediaQuery.removeEventListener("change", this.updateNarrow);
    } else if (this.mediaQuery.removeListener) {
      this.mediaQuery.removeListener(this.updateNarrow);
    }
  },

  watch: {
    "$i18n.locale": {
      handler() {
        this.fetchMarks(this.currentPage);
      },
      immediate: true,
    },
    categories: {
      handler() {
        this.fetchMarks(1);
      },
      deep: true,
    },
    yearRanges: {
      handler() {
        const selected = this.yearRanges.filter(i => i.checked);
        if (selected.length) {
          const starts = selected
            .map(i => Number(i?.range?.start))
            .filter(n => Number.isFinite(n));
          const ends = selected
            .map(i => Number(i?.range?.end))
            .filter(n => Number.isFinite(n));

          this.minYear = starts.length ? Math.min(...starts) : "";
          this.maxYear = ends.length ? Math.max(...ends) : "";
        } else {
          this.minYear = "";
          this.maxYear = "";
        }
        this.fetchMarks(1);
      },
      deep: true,
    },
  },
};
</script>

<style>
/* Cards */
.titlet{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:normal;}
.service__item1{display:flex;flex-direction:column;justify-content:space-between;text-align:center;height:100%;min-height:400px;}
.service__item1 img{max-height:150px;object-fit:contain;margin:auto;}

/* Pagination (responsive) */
:root{
  --pg-blue:#1e4fb8; --pg-text:#1e4fb8; --pg-bg:#fff;
  --pg-size:clamp(32px,7.2vw,44px);
  --pg-gap:clamp(6px,2.2vw,14px);
  --pg-fs:clamp(12px,3.2vw,16px);
}
.pagination-wrap{display:flex;justify-content:center;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:4px;}
.pagination-modern{display:flex;align-items:center;justify-content:center;gap:var(--pg-gap);padding:0;margin:0;flex-wrap:wrap;}
@media (max-width:340px){.pagination-modern{flex-wrap:nowrap;min-width:min-content;}}
.pagination-modern li{list-style:none;}
.page-btn,.page-dots{width:var(--pg-size);height:var(--pg-size);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-weight:600;font-size:var(--pg-fs);text-decoration:none;user-select:none;}
.page-btn{border:1.5px solid var(--pg-blue);color:var(--pg-text);background:var(--pg-bg);transition:transform .12s ease, background .12s ease;}
.page-btn:hover:not(.active):not(.disabled){transform:translateY(-1px);}
.page-btn.active{background:var(--pg-blue);color:#fff;border-color:var(--pg-blue);}
.page-btn.disabled{opacity:.4;pointer-events:none;}
.page-btn.arrow{font-size:calc(var(--pg-fs) + 2px);}
.page-dots{font-size:calc(var(--pg-fs) + 4px); color: var(--pg-blue);}

/* Grid & pagination gap */
.marks-grid{margin-bottom:clamp(56px,7.5vh,90px);}
.push-down{margin-top:clamp(36px,6vh,96px);}

/* Mobile header spacing */
@media (max-width:575px){.profile__wrapper{padding:0;}}
</style>
