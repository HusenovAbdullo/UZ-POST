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
                <span class="d41 mb-24">{{ serviceTitle }}</span>
                <div class="profile__wrappers setting__breadcumnd" style="padding: 1px 0 230px;">
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
                    <router-link v-if="serviceLink && serviceLinkName" :to="serviceLink" class="map-link">{{
                        serviceLinkName }}</router-link>
                </header>

                <div class="description">
                    <!-- API dan olingan description_uz -->
                    {{ serviceDescription }}
                </div>

                <!-- Text_uz ni HTML formatida ko'rsatish -->
                <div class="custom-container">
                    <div class="text-content" v-html="serviceText"></div>
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
            serviceId: null,
            serviceImage: '',
            serviceTitle: '',
            serviceDescription: '',
            serviceText: '',
            serviceLink: '',
            serviceLinkName: ''
        };
    },
    created() {
        this.fetchServiceData();
    },
    watch: {
        '$i18n.locale': function () {
            this.fetchServiceData();
        }
    },
    methods: {
        async fetchServiceData() {
            const locale = this.$i18n.locale;
            try {
                this.serviceId = this.$route.params.id;
                const response = await axios.get(`https://new.pochta.uz/api/v1/public/services/${this.serviceId}/`);
                const serviceData = response.data;

                this.serviceImage = this.convertToHttps(serviceData.save_image);
                this.serviceTitle = serviceData[`title_${locale}`] || serviceData.title_uz || '';
                this.serviceDescription = serviceData[`description_${locale}`] || serviceData.description_uz || '';
                this.serviceText = serviceData[`text_${locale}`] || serviceData.text_uz || '';

                // Link va link nomini to'g'ri olish
                this.serviceLink = serviceData[`link_${locale}`] || serviceData.link_uz || '';
                this.serviceLinkName = serviceData[`link_name_${locale}`] || serviceData.link_name_uz || '';

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
