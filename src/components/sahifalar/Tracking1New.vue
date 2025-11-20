<template>
  <section
  class="task__sectiontop ralt pt-120 pb-120"
  :class="{ 'page-bg-white': showNotFoundImage }"
>

    <div class="container">
      <!-- Qidiruv formasi -->
      <div class="row justify-content-center">
        <div class="col-xxl-6 col-xl-8 col-lg-8">
          <div class="section__title text-center ralt mb-60">
            <form
              action="#"
              class="search__component mb-24 d-flex align-items-center justify-content-between wow fadeInUp"
              @submit.prevent="fetchTrackingData"
            >
              <input
                v-model.trim="trackingNumber"
                id="trackingNumberInput"
                placeholder="CC123456789UZ"
                class="faded-placeholder"
                @keyup.enter="fetchTrackingData"
                :disabled="loading"
              />
              <button
                type="button"
                class="cmn--btn d-flex align-items-center"
                @click="fetchTrackingData"
                :disabled="loading || !trackingNumber"
              >
                <span>{{ $t('tracking5') }}</span>
                <span><i class="bi bi-search fz-12"></i></span>
              </button>
            </form>

            <div v-if="loading" class="loader truckWrapper" id="loader">
              <img
                src="https://new.pochta.uz/media/animatsion.gif"
                alt="Yuklanmoqda..."
                class="loaderImage"
              />
            </div>

            <div v-else>
              <!-- Header End -->
              <!-- Popup bo'lsa shu yerga qo'yasiz -->
            </div>

            <!-- Lokalizatsiyalangan xatolik -->
            <div v-if="errorKey" class="error-text">
              <span>{{ $t(errorKey) }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tracking ma'lumotlari yoki NOT FOUND rasm -->
      <div class="row ralt g-4" v-if="trackingData || showNotFoundImage">
        <!-- Raqam faqat ma'lumot topilganda ko'rsatiladi -->
        <h2
          v-if="trackingData && !showNotFoundImage"
          class="title wow fadeInUp mb-24 center"
          id="trackingNumberDisplay"
        >
          {{ trackingData.number }}
        </h2>

        <!-- Ma'lumot yo'q bo'lsa – sahifa tiliga qarab rasm -->
        <div
          v-if="showNotFoundImage"
          class="col-12 d-flex justify-content-center tracking-empty-wrapper"
        >
          <img
            :src="
              currentLang === 'ru'
                ? 'https://new.pochta.uz/media/tracking-rus.jpg'
                : 'https://new.pochta.uz/media/tracking-uzb.jpg'
            "
            alt="Tracking maʼlumot topilmadi"
            class="tracking-empty-image img-fluid"
          />
        </div>

        <!-- Ma'lumot topilganda eski dizayn -->
        <template v-else>
          <!-- Yuboruvchi / Qabul qiluvchi kartalari -->
          <div class="row d-flex align-items-stretch mb-4 sender-recipient-row">
            <div
              v-if="trackingData.senderCountry"
              class="col-xl-6 col-lg-6 col-md-12 mb-4"
            >
              <div
                class="task__item round16 bgwhite d-flex align-items-center h-100"
              >
                <div class="thumb">
                  <img
                    src="https://uz.post/assets/img/bn/profile.png"
                    alt="img"
                  />
                </div>
                <div class="content">
                  <h3 class="inter title2 mb-24">{{ $t('sender5') }}</h3>
                  <p
                    v-if="trackingData.senderCountry"
                    class="fz-16 fw-400 inter pra mb-10"
                  >
                    <strong>{{ $t('country5') }}</strong> <br />
                    <span id="senderCountry" class="textrang">
                      {{ trackingData.senderCountry }}
                    </span>
                  </p>
                  <p
                    v-if="trackingData.senderPostcode"
                    class="fz-16 fw-400 inter pra mb-10"
                  >
                    <strong>{{ $t('postal_code5') }}</strong> <br />
                    <span id="senderPostcode" class="textrang">
                      {{ trackingData.senderPostcode }}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div
              v-if="trackingData.recipientCountry"
              class="col-xl-6 col-lg-6 col-md-12 mb-4"
            >
              <div
                class="task__item round16 bgwhite d-flex align-items-center h-100"
              >
                <div class="thumb">
                  <img
                    src="https://uz.post/assets/img/bn/profile.png"
                    alt="img"
                  />
                </div>
                <div class="content">
                  <h3 class="inter title2 mb-24">{{ $t('receiver5') }}</h3>
                  <p
                    v-if="trackingData.recipientCountry"
                    class="fz-16 fw-400 inter pra mb-10"
                  >
                    <strong>{{ $t('country5') }}</strong> <br />
                    <span id="recipientCountry" class="textrang">
                      {{ trackingData.recipientCountry }}
                    </span>
                  </p>
                  <p
                    v-if="trackingData.recipientPostcode"
                    class="fz-16 fw-400 inter pra mb-10"
                  >
                    <strong>{{ $t('postal_code5') }}</strong> <br />
                    <span id="recipientPostcode" class="textrang">
                      {{ trackingData.recipientPostcode }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Kuzatuv + Reklama (bitta qatorda) -->
          <div class="row tracking-row">
            <!-- Chap: Kuzatuv qismi -->
            <div class="col-12 col-xl-9 col-lg-8 timeline-col">
              <!-- Mobile timeline (faqat mobil uchun) -->
              <div class="mobile-timeline" v-show="isMobile">
                <div class="service__detailswrapper">
                  <div class="trending__based mb-40 bgwhite round16 shadow1">
                    <div class="based__content border round16 bgwhite">
                      <div class="freelancer__education bborderdash pb-30 mb-30">
                        <h3 class="title2">{{ $t('kuzatuv5') }}</h3>
                        <h1
                          v-if="trackingData.errorKey"
                          class="title wow fadeInUp mb-24 center"
                          style="color: red; font-size: 20px"
                        >
                          {{ $t(trackingData.errorKey) }}
                        </h1>

                        <div class="timeline-wrapper">
                          <div
                            v-for="(event, index) in combinedTracking"
                            :key="index"
                            class="timeline-row"
                          >
                            <div class="icon-column">
                              <img
                                v-if="index === 0"
                                src="https://new.pochta.uz/media/circle1.svg"
                                class="icon-main"
                              />
                              <img
                                v-else
                                src="https://new.pochta.uz/media/circle.svg"
                                class="icon-circle"
                              />
                              <div
                                v-if="index !== combinedTracking.length - 1"
                                class="icon-line"
                              ></div>
                            </div>
                            <div class="content-column">
                              <div class="status-text">
                                {{ event.location }}. {{ event.status }}
                              </div>
                              <div class="date-text">
                                {{ event.date.toLocaleDateString() }} /
                                {{ event.date.toLocaleTimeString() }}
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Timeline end -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Desktop timeline (faqat kompyuter uchun) -->
              <div class="desktop-timeline" v-show="!isMobile">
                <div class="service__detailswrapper">
                  <div class="trending__based mb-40 bgwhite round16 shadow1">
                    <div class="based__content border round16 bgwhite">
                      <div class="freelancer__education bborderdash pb-30 mb-30">
                        <h3 class="title2">{{ $t('kuzatuv5') }}</h3>
                        <h1
                          v-if="trackingData.errorKey"
                          class="title wow fadeInUp mb-24 center"
                          style="color: red; font-size: 20px"
                        >
                          {{ $t(trackingData.errorKey) }}
                        </h1>
                        <ul class="blog__categories" id="combinedTracking">
                          <li
                            v-for="(event, index) in combinedTracking"
                            :key="index"
                          >
                            <a class="d-flex align-items-center">
                              <span class="fz-12 fw-500 title inter">
                                {{ event.date.toLocaleString() }}
                              </span>
                              <span class="cateicon">
                                <img
                                  :src="`https://uz.post/assets/img/flags/${String(
                                    event.country_code || 'uz'
                                  ).toLowerCase()}.svg`"
                                  alt="flag"
                                  class="flag-icon"
                                />
                              </span>
                              <span
                                class="fz-12 d-block fw-500 inter success2 region-info"
                              >
                                {{ event.region }}
                              </span>
                              <span
                                class="fz-12 d-block fw-500 inter success2 region-info"
                              >
                                {{ event.data }}
                              </span>
                              <span class="fz-12 fw-500 inter title d-block">
                                {{ event.location }}
                              </span>
                              <span>
                                <span
                                  class="fz-12 fw-500 inter success2 d-block"
                                >
                                  {{ event.status }}
                                </span>
                                <span
                                  v-if="event.malumot"
                                  class="fz-12 fw-500 inter success2"
                                  style="
                                    color: brown;
                                    display: block;
                                    font-size: 10px;
                                    opacity: 0.6;
                                  "
                                >
                                  {{ event.malumot }}
                                </span>
                                <span
                                  v-if="event.malumot2"
                                  class="fz-12 fw-500 inter success2"
                                  style="
                                    color: brown;
                                    display: block;
                                    font-size: 10px;
                                    opacity: 0.6;
                                  "
                                >
                                  {{ event.malumot2 }}
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- O'ng: Reklama banneri -->
            <div class="col-12 col-xl-3 col-lg-4 ad-col">
              <div class="basic__skilled__wrapper ad-card">
                <div class="darrell__profile round16 bgwhite">
                  <div
                    id="adCarousel"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <a href="https://uz.post" target="_blank">
                          <img
                            src="https://uz.post/assets/img/reklama/11.png"
                            class="d-block w-100 ad-image"
                            alt="ad1"
                          />
                        </a>
                      </div>
                      <div class="carousel-item">
                        <a href="https://uz.post" target="_blank">
                          <img
                            src="https://uz.post/assets/img/reklama/12.png"
                            class="d-block w-100 ad-image"
                            alt="ad2"
                          />
                        </a>
                      </div>
                      <div class="carousel-item">
                        <a href="https://uz.post" target="_blank">
                          <img
                            src="https://uz.post/assets/img/reklama/13.png"
                            class="d-block w-100 ad-image"
                            alt="ad3"
                          />
                        </a>
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#adCarousel"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#adCarousel"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Reklama -->
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      trackingNumber: '',
      loading: false,
      trackingData: null,
      combinedTracking: [],
      errorKey: null, // lokalizatsiya kaliti
      isMobile: window.innerWidth < 768,
      language: localStorage.getItem('language') || 'uz',
      showNotFoundImage: false // NOT FOUND rasm holati
    };
  },

  computed: {
    currentLang() {
      if (this.$i18n && this.$i18n.locale) {
        return this.$i18n.locale;
      }
      return this.language || 'uz';
    }
  },

  methods: {
  updateViewport() {
    this.isMobile = window.innerWidth < 768;
  },

  async fetchTrackingData() {
    if (!this.trackingNumber) return;

    this.loading = true;
    this.trackingData = null;
    this.combinedTracking = [];
    this.errorKey = null;
    this.showNotFoundImage = false;

    const tn = this.trackingNumber.toUpperCase().trim();
    const prefix2 = tn.slice(0, 2);
    const prefix1 = tn.slice(0, 1);

    const useNewApi = ['CZ', 'RZ'].includes(prefix2) || prefix1 === 'E';
    const apiUrl = useNewApi
      ? `https://tracking.pochta.uz/api/v1/public/test/${tn}/`
      : `https://tracking.pochta.uz/api/v1/public/test/${tn}/`;

    try {
      const res = await fetch(apiUrl, { method: 'GET' });
      // MUHIM: error bo'lsa ham JSONni o'qib olamiz
      const data = await res.json().catch(() => null);

      this.loading = false;

      // 1) Order umuman topilmagan holatlar:
      const isOrderNotFound =
        data && typeof data.code === 'string' && data.code === 'order_not_found';

      const allNull =
        data &&
        data.header === null &&
        data.shipox === null &&
        data.gdeposilka === null;

      if (res.status === 404 || isOrderNotFound || allNull) {
        // 1-rasm ham, 2-rasm ham shu yerga tushadi
        this.showNotFoundImage = true;
        this.trackingData = null;
        this.combinedTracking = [];
        return;
      }

      // Boshqa server xatosi bo'lsa – matnli xabar
      if (!res.ok) {
        this.errorKey = 'request_error5';
        return;
      }

      // IPS format
      if (
        Array.isArray(data) &&
        data.length > 0 &&
        data[0].OperationalMailitems
      ) {
        const mailItem =
          data[0].OperationalMailitems.TMailitemInfoFromScanning?.[0] || {};
        this.trackingData = {
          number: mailItem.InternationalId || tn,
          senderCountry: mailItem.OrigCountry?.Name || '',
          senderAddress: mailItem.OrigAddress || '',
          senderPostcode: mailItem.OrigPostcode || '',
          recipientCountry: mailItem.DestCountry?.Name || '',
          recipientAddress: mailItem.DestAddress || '',
          recipientPostcode: mailItem.DestPostcode || ''
        };
        const events = mailItem.Events?.TMailitemEventScanning || [];
        this.processEvents(events, mailItem.DestCountry?.Code || 'UZ');
      } else {
        // Temu / Shipox / Gdeposilka va boshqalar
        this.processAlternativeData(data, tn);
      }
    } catch (e) {
      this.loading = false;
      this.errorKey = 'request_error5';
    }
  },

    processEvents(events, countryCode) {
      const lang = this.$i18n?.locale || 'uz';
      this.combinedTracking = (events || [])
        .map((event) => ({
          date: new Date(event.LocalDateTime),
          date1: new Date(event.GmtDateTime),
          location: event.EventOffice?.Name || '',
          status: this.getLocalizedStatus(event.IPSEventType, lang),
          malumot: event.RetentionReason?.Name || '',
          malumot2: event.NonDeliveryReason?.Name || '',
          country_code: countryCode || 'UZ',
          region: ''
        }))
        .sort((a, b) => b.date - a.date);
    },

    processAlternativeData(data, tn) {
      // Siz aytgan holatlar:
      // {"header":null,"shipox":null,"gdeposilka":null}
      const allNull =
        data &&
        data.header === null &&
        data.shipox === null &&
        data.gdeposilka === null;

      // {"code":"order_not_found", ...}
      const isOrderNotFound =
        data && typeof data.code === 'string' && data.code === 'order_not_found';

      if (allNull || isOrderNotFound) {
        this.showNotFoundImage = true;
        this.trackingData = null;
        this.combinedTracking = [];
        return;
      }

      this.trackingData = {
        number:
          data?.header?.data?.order_number ||
          data?.gdeposilka?.data?.tracking_number ||
          tn,
        senderCountry: data?.header?.data?.locations?.[0]?.address_city || '',
        senderAddress: data?.header?.data?.locations?.[0]?.address || '',
        senderPostcode: data?.header?.data?.locations?.[0]?.postcode || '',
        recipientCountry:
          data?.header?.data?.locations?.[1]?.address_city || '',
        recipientAddress: data?.header?.data?.locations?.[1]?.address || '',
        recipientPostcode:
          data?.header?.data?.locations?.[1]?.postcode || ''
      };

      let temuList = [];
      let shipoxList = [];
      let gdeList = [];

      if (Array.isArray(data?.data)) {
        temuList = data.data
          .map((item) => {
            const date = new Date(item.date);
            date.setSeconds(0, 0);
            return {
              date,
              data: item.data || 'UzPost',
              location: item.warehouse?.name || '',
              status: this.getLocalizedStatus(item.IPSEventType),
              country_code: 'UZ',
              region: ''
            };
          })
          .reverse();
      }

      if (Array.isArray(data?.shipox?.data?.list)) {
        shipoxList = data.shipox.data.list.map((item) => ({
          date: new Date(item.date),
          data: item.data || 'UzPost',
          location: item.warehouse?.name || '',
          status: this.getLocalizedStatus(item),
          country_code: 'UZ',
          region: ''
        }));
      }

      if (Array.isArray(data?.gdeposilka?.data?.checkpoints)) {
        gdeList = data.gdeposilka.data.checkpoints.map((item) => ({
          date: new Date(item.time),
          location: item.location_translated,
          region: item.courier?.name,
          status: this.getLocalizedStatus(item),
          country_code: item.courier?.country_code || 'UZ',
          data: ''
        }));
      }

      const sortedShipox = shipoxList.sort((a, b) => b.date - a.date);
      const sortedGde = gdeList.sort((a, b) => b.date - a.date);

      if (temuList.length === 0) {
        const pickShipox = sortedShipox[0]?.date || 0;
        const pickGde = sortedGde[0]?.date || 0;
        this.combinedTracking =
          pickShipox > pickGde
            ? [...sortedShipox, ...sortedGde]
            : [...sortedGde, ...sortedShipox];
      } else {
        this.combinedTracking = [...temuList];
      }
    },

    getLocalizedStatus(dataLike) {
      const lang = this.$i18n?.locale || 'uz';
      if (!dataLike)
        return this.$t?.('status_unknown5') || 'Status noaniq';

      // IPS obyektlari
      if (typeof dataLike === 'object') {
        if (
          'LocalName_uz' in dataLike ||
          'LocalName_ru' in dataLike ||
          'Name' in dataLike
        ) {
          if (lang === 'uz')
            return (
              dataLike.LocalName_uz ||
              dataLike.Name ||
              this.$t('status_unknown5')
            );
          if (lang === 'ru')
            return (
              dataLike.LocalName_ru ||
              dataLike.Name ||
              this.$t('status_unknown5')
            );
          return dataLike.Name || this.$t('status_unknown5');
        }
        // Muqobil formatlar
        if (
          'status_uz' in dataLike ||
          'status_ru' in dataLike ||
          'status_desc' in dataLike
        ) {
          if (lang === 'uz')
            return (
              dataLike.status_uz ||
              dataLike.status_desc ||
              this.$t('status_unknown5')
            );
          if (lang === 'ru')
            return (
              dataLike.status_ru ||
              dataLike.status_desc ||
              this.$t('status_unknown5')
            );
          return dataLike.status_desc || this.$t('status_unknown5');
        }
        const guessName =
          dataLike.name || dataLike.title || dataLike.description;
        if (guessName) return guessName;
      }

      if (typeof dataLike === 'string') return dataLike;
      return this.$t?.('status_unknown5') || 'Status noaniq';
    }
  },

  mounted() {
    window.addEventListener('resize', this.updateViewport);

    if (this.$route?.params?.trackingNumber) {
      this.trackingNumber = this.$route.params.trackingNumber;
      this.fetchTrackingData();
    }
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.updateViewport);
  }
};
</script>

<style scoped>
#adCarousel .carousel-control-prev,
#adCarousel .carousel-control-next {
  display: none;
}

#adCarousel:hover .carousel-control-prev,
#adCarousel:hover .carousel-control-next {
  display: block;
}

.hidden {
  display: none;
}

.loading-text {
  font-size: 40px;
  color: #f39c12;
  margin-top: 10px;
}

.error-text {
  font-size: 40px;
  color: red;
  margin-top: 10px;
}

.carousel-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.footer__section {
  position: relative;
  margin-top: 20px;
  background-color: #333;
  padding: 20px 0;
}

.region-info {
  font-size: 10px;
  color: #888;
  display: block;
}

.loaderImage {
  width: 600px;
  height: auto;
}

/* 750px dan kichik ekranlar uchun popup va h.k. */
@media (max-width: 750px) {
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    z-index: 1000;
  }

  .popup-content {
    padding: 20px;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    color: #333;
    cursor: pointer;
  }

  .popup h2 {
    text-align: center;
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: bold;
    color: #183e98;
  }

  ul.blog__categories {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul.blog__categories li {
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
  }

  ul.blog__categories li a {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: #333;
  }

  ul.blog__categories li span {
    font-size: 14px;
  }

  .flag-icon {
    width: 20px;
    height: auto;
    margin-right: 8px;
  }

  @media (max-width: 750px) {
    .popup {
      width: 90%;
      max-width: none;
      z-index: 1100;
    }

    ul.blog__categories li {
      flex-direction: column;
      align-items: flex-start;
    }

    ul.blog__categories li a {
      flex-direction: column;
      align-items: flex-start;
    }

    ul.blog__categories li span {
      font-size: 12px;
    }

    .header-section {
      position: relative;
      z-index: 100;
    }

    .sub-menu {
      z-index: 100;
    }
  }
}

.search__component input {
  width: 100%;
  text-align: left;
  padding-left: 10px;
}

.timeline-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  background: #ffffff;
  gap: 12px;
}

.timeline-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 14px;
  position: relative;
}

.icon-column {
  position: relative;
  width: 24px;
  min-width: 24px;
}

.icon-main,
.icon-circle {
  width: 24px;
  height: 24px;
  margin-top: 2px;
}

.icon-line {
  position: absolute;
  top: 28px;
  left: 11px;
  width: 2px;
  height: calc(100% - 28px);
  background-image: url('https://new.pochta.uz/media/line.svg');
  background-repeat: repeat-y;
  background-size: contain;
  min-height: 60px;
}

.content-column {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.status-text {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 15px;
  color: #4d4d4d;
  letter-spacing: 0.5px;
}

.date-text {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 10px;
  color: #a7a9b7;
  letter-spacing: 0.2px;
}

.mobile-timeline {
  display: none;
}

.desktop-timeline {
  display: block;
}

@media (max-width: 767px) {
  .mobile-timeline {
    display: block !important;
  }

  .desktop-timeline {
    display: none !important;
  }
}

/* Mobil qurilmalar uchun kartalar */
@media (max-width: 768px) {
  .task__item {
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 16px;
    text-align: left;
  }

  .task__item .thumb img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  .task__item .content {
    flex: 1;
  }

  .task__item .content h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .task__item .content p {
    font-size: 12px;
    margin-bottom: 4px;
  }
}

@media (min-width: 992px) {
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}

@media (min-width: 768px) {
  .sender-recipient-row .col-md-12 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

/* Kuzatuv + reklama blokidan keyin footer bilan bo'sh joy */
.tracking-row {
  margin-bottom: 160px;
}

@media (max-width: 768px) {
  .tracking-row {
    margin-bottom: 80px;
  }
}

/* Reklama ustunini tepaga va o'ngga chiqarish */
.ad-col {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

/* Global CSSdagi margin-top ni bosib ketamiz */
.ad-card {
  max-width: 320px;
  width: 100%;
  margin-top: 0 !important;
}

.ad-card .darrell__profile {
  margin-top: 0 !important;
}

/* Reklama rasm balandligi */
.ad-image {
  height: 220px;
  object-fit: cover;
}

/* Mobilda reklama to'liq kenglikka */
@media (max-width: 768px) {
  .ad-col {
    justify-content: center;
    margin-top: 16px;
  }

  .ad-card {
    max-width: 100%;
  }

  .ad-image {
    height: auto;
  }
}

/* Desktop yonma-yon */
@media (min-width: 1200px) {
  .tracking-row {
    display: flex;
    align-items: flex-start;
  }

  .tracking-row .timeline-col {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .tracking-row .ad-col {
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
}

@media (max-width: 1199px) {
  .tracking-row {
    margin-bottom: 80px;
  }

  .tracking-row .timeline-col,
  .tracking-row .ad-col {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .ad-col {
    justify-content: center;
  }

  .ad-card {
    max-width: 100%;
  }

  .ad-image {
    height: auto;
  }
}

/* NOT FOUND rasm uchun */
.tracking-empty-wrapper {
  margin: 40px 0 120px;
}

.tracking-empty-image {
  max-width: 720px;
  width: 100%;
  height: auto;
  display: block;
}

/* Ma'lumot topilmaganda sahifa fonini to'liq oq qilish */
.page-bg-white {
  background-color: #ffffff !important;
}

/* Eng yuqoridagi #f3f6fa fon ham shu ::before dan keladi, uni ham oqqa o'zgartiramiz */
.page-bg-white::before {
  background-color: #ffffff !important;
  background-image: none !important; /* agar gradient bo'lsa, o'chirib yuboradi */
}


</style>
