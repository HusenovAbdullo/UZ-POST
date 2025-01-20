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
                <span class="d4 mb-24">{{ serviceTitle }}</span>
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
            <!-- Media (image yoki video) -->
            <div v-if="currentMedia" class="media-container">
                <img v-if="currentMedia.type === 'image'" :src="currentMedia.url" class="responsive-img"
                    alt="Xizmat rasmi" />
                <video v-else class="responsive-video" controls>
                    <source :src="currentMedia.url" type="video/mp4" />
                    Sizning brauzeringiz ushbu videoni qo'llab-quvvatlamaydi.
                </video>
            </div>

            <!-- Asosiy ma'lumotlar -->
            <div class="container">
                <!-- <header class="header">
                    <h1 class="title">{{ serviceTitle }}</h1>
                    <router-link :to="'/map/'" class="map-link">{{ $t('sections_map') }}</router-link>
                </header> -->

                <div class="description">
                    {{ serviceDescription }}
                </div>

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
            serviceId: null, // Sahifa ID
            serviceTitle: "", // Xizmat sarlavhasi
            serviceDescription: "", // Xizmat tavsifi
            serviceText: "", // Xizmat matni
            currentMedia: null, // Rasm yoki video uchun obyekt
        };
    },
    created() {
        this.fetchServiceData(); // Sahifa yuklanayotganda ma'lumotlarni olish
    },
    watch: {
    "$i18n.locale": function () {
        this.currentMedia = null; // Eski ma'lumotlarni tozalash
        this.$nextTick(() => {
            this.fetchServiceData(); // Ma'lumotlarni qayta yuklash
        });
    },
},


    methods: {
        async fetchServiceData() {
    const locale = this.$i18n.locale; // Hozirgi tilni olish
    try {
        this.serviceId = this.$route.params.id; // Router orqali ID olish
        const response = await axios.get("https://new.pochta.uz/api/v1/public/rates/");
        const serviceData = response.data.find(
            (item) => item.id === parseInt(this.serviceId) && item.status
        );

        if (serviceData) {
            // Xizmat ma'lumotlarini olish
            this.serviceTitle =
                serviceData[`title_${locale}`] || serviceData.title_uz || "";
            this.serviceDescription =
                serviceData[`description_${locale}`] || serviceData.description_uz || "";
            this.serviceText =
                serviceData[`text_${locale}`] || serviceData.text_uz || "";

            // Media (image yoki video) olish
            const image =
                serviceData[`save_image_${locale}`] ||
                serviceData.save_image_uz ||
                null;
            const videos = serviceData[`videos_${locale}`] || serviceData.videos_uz || [];
            const video = videos.length > 0 ? videos[0].file : null;

            if (image) {
                this.currentMedia = { type: "image", url: this.convertToHttps(image) };
            } else if (video) {
                this.currentMedia = { type: "video", url: this.convertToHttps(video) };
            } else {
                this.currentMedia = null;
            }
        } else {
            console.warn("Ma'lumot topilmadi yoki status false bo'lgan.");
        }
    } catch (error) {
        console.error("API dan ma'lumot olishda xatolik:", error);
    }
}
,
        convertToHttps(url) {
            // URL ni HTTPS formatiga o'zgartirish
            if (!url) return null;
            return url.startsWith("http://") ? url.replace("http://", "https://") : url;
        },
    },
};
</script>

<style scoped>
/* Asosiy konteynerlar */
.container__customizemain {
    padding: 20px;
    background: #f9f9f9;
    border-radius: 16px;
}

/* Media uchun stil */
.media-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}

.responsive-img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
}

.responsive-video {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
}

/* Sarlavha va tavsif uchun stil */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.title {
    font-size: 2rem;
    font-weight: bold;
    color: #1e3c96;
}

.map-link {
    color: #1e3c96;
    text-decoration: none;
    border: 1px solid #1e3c96;
    padding: 10px 16px;
    border-radius: 4px;
}

.map-link:hover {
    background-color: #1e3c96;
    color: white;
}

.description {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 20px;
}

/* Matn uchun stil */
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

.text-content th,
.text-content td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
}

/* Responsivlik */
@media (max-width: 768px) {
    .header {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .title {
        font-size: 1.5rem;
        text-align: center;
    }

    .map-link {
        width: 100%;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .description {
        font-size: 1rem;
    }

    .text-content {
        font-size: 0.9rem;
    }
}
</style>
