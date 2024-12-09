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
        <div class="container__customizemain pb-120 round16" v-if="branch" style="max-width: 1400px;">
            <img class="rasmm pb-120 round16" :src="getSecureImageUrl(branch.save_image)" alt="Filial Rasm" width="1398"
                height="950">

            <div class="container">
                <header class="header">
                    <h1 class="title">{{ branch.title_uz }}</h1>
                </header>

                <div class="description">
                    {{ branch.description_uz }}
                </div>

                <h2 class="subtitle">Xizmat qanday ishlaydi:</h2>

                <div class="steps" v-if="branch">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-text">{{ branch.postal_service[0]?.title_uz || 'Xizmat faol emas'}} </div>
                    </div>

                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-text">{{ branch.kurier_services[0]?.title_uz || 'Xizmat faol emas'}}</div>
                    </div>

                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-text">{{ branch.additional_services[0]?.title_uz || 'Xizmat faol emas'}}</div>
                    </div>

                    <div class="step">
                        <div class="step-number">4</div>
                        <div class="step-text">{{ branch.contractual_services[0]?.title_uz || 'Xizmat faol emas'}}</div>
                    </div>

                    <div class="step">
                        <div class="step-number">5</div>
                        <div class="step-text">{{ branch.modern_ict_services[0]?.title_uz || 'Xizmat faol emas'}}</div>
                    </div>
                </div>
            </div>
            <div class="bottom-container">
                <div class="info-section">
                    <div class="info-item">
                        <span class="info-icon">i</span>
                        <p>
                            {{ branch.meta_description_uz }}
                        </p>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">i</span>
                        <p>
                            {{ branch.meta_words_uz }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios"; // Axios kutubxonasini import qilish

export default {
    data() {
        return {
            branch: null, // Filial ma'lumotlari
        };
    },
    mounted() {

        const id = this.$route.params.id;

        axios
            .get(`https://new.pochta.uz/api/v1/public/branches/${id}/`)
            .then((response) => {
                this.branch = response.data; // Filial ma'lumotlarini yuklash
            })
            .catch((error) => {
                console.error("API'dan filial ma'lumotlarini olishda xatolik:", error);
            });

    },
    methods: {
        // Rasm URL'sini HTTP dan HTTPS ga o'zgartirish
        getSecureImageUrl(url) {
            if (url && url.startsWith('http://')) {
                return url.replace('http://', 'https://');
            }
            return url || 'assets/img/default.png'; // Agar rasm yo'q bo'lsa, default rasmni qaytarish
        },
    },

};
</script>

<style scoped>
@font-face {
  font-family: "Roboto-Condensed";
  src: url(/public/assets/css/fonts/Roboto-Condensed.ttf);
}

@font-face {
  font-family: "Roboto-BoldCondensed";
  src: url(/public/assets/css/fonts/Roboto-BoldCondensed.ttf);
}



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

h2 {
  font-family: "Roboto-BoldCondensed";
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #183E98;
}

ol {
  width: 1150px;
  height: 258px;
  list-style-type: decimal;
  padding-left: 20px;
}

li {
  font-family: "Robot-BoldCondensed";
  src: url(/public/assets/css/fonts/Roboto-BoldCondensed.ttf);
  line-height: 43.2px;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 8px;
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 38px;
}

.bottom-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  flex-direction: column;
  align-items: center;
}

.title {
  text-align: center;
  color: #183E98;
  margin-bottom: 30px;
  font-size: 72px;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
}

th,
td {
  border: 1px solid #000;
  color: #000000;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #fff;
  font-weight: bold;
}

thead th {
  text-align: center;
  color: #183E98;
}

tbody td:first-child {
  text-align: center;
  width: 40px;
}

.info-section {
  width: 532px;
  height: 108px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 70px;
}

.info-item {
  display: flex;
  size: 24px;
  align-items: flex-start;
  gap: 30px;
}

.info-icon {
  background-color: #0066cc;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 2px;
}

p {
  width: 400px;
  height: 108px;
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  th,
  td {
    padding: 8px;
    font-size: 14px;
  }

  .info-section {
    gap: 15px;
  }
}
</style>

