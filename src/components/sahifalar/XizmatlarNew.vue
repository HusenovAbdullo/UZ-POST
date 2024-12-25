<template>
    <section class="task__hiresection2 ralt pt-50 pb-120" style="background-color: #183e98;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-6 col-xl-8 col-lg-8">
                    <div class="section__title text-center ralt mb-60">
                        <p class="sub ralt base mb-16 wow fadeInUp" data-wow-duration="0s"
                            style="color: var(--white); font-size: 70px;">
                            Xizmatlar
                        </p>
                    </div>
                </div>
            </div>

            <div v-for="(category, index) in categories" :key="index" class="category-section">
                <div class="row justify-content-center">
                    <div class="col-xxl-6 col-xl-8 col-lg-8">
                        <div class="section__title text-center ralt mb-60">
                            <h2 class="title wow fadeInUp mb-24" data-wow-duration="0s"
                                style="color: rgb(255, 255, 255);">
                                {{ category.name_uz || null }}
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="row ralt g-4">
                    <div v-for="(service, serviceIndex) in category.services_id" :key="serviceIndex"
                        class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown">
                        <div class="task__item round16 bgwhite d-flex align-items-center">
                            <div class="thumb">
                                <img :src="convertToHttps(service.save_image) || 'default-image.png'" alt="img" />
                            </div>
                            <div class="content">
                                <h3 class="inter title mb-24">
                                    {{ service.title_uz || null }}
                                </h3>
                                <p class="fz-14 fw-400 inter pra mb-40">
                                    {{ service.description_uz || null }}
                                </p>
                                <router-link :to="`/xizmat/${service.id}`" class="cmn--btn outline__btn">
                                    <span>
                                        {{ $t('more_details') }}
                                    </span>
                                    <span>
                                        <i class="bi bi-arrow-up-right"></i>
                                    </span>
                                </router-link>
                            </div>
                        </div>
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
            categories: [] // Kategoriyalarni saqlaydi
        };
    },
    created() {
        this.fetchCategories();
    },
    methods: {
        async fetchCategories() {
            try {
                const response = await axios.get("https://new.pochta.uz/api/v1/public/category-services/");

                // API-dan kelgan kategoriyalarni o'zgartirish
                this.categories = response.data.map(category => {
                    // Xizmatlar bo'yicha save_image tekshirish
                    if (category.services_id && Array.isArray(category.services_id)) {
                        category.services_id = category.services_id.map(service => {
                            if (service.save_image && service.save_image.startsWith("http://")) {
                                service.save_image = this.convertToHttps(service.save_image);
                            }
                            return service;
                        });
                    }
                    return category;
                });

                console.log(this.categories); // Kategoriyalarni konsolda tekshirish
            } catch (error) {
                console.error("API dan ma'lumotlarni olishda xatolik:", error);
            }
        },
        convertToHttps(url) {
            if (!url) return null;
            try {
                return url.startsWith("http://") ? url.replace("http://", "https://") : url;
            } catch (err) {
                console.error("URL o'zgartirishda xatolik:", err);
                return url; // Xatolik yuz bersa asl URLni qaytaradi
            }
        }
    }
};
</script>
