<template>
    <section class="task__hiresection2 ralt pt-50 pb-120" style="background-color: #183e98;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-6 col-xl-8 col-lg-8">
                    <div class="section__title text-center ralt mb-60">
                        <p class="sub ralt base mb-16 wow fadeInUp" data-wow-duration="0s"
                            style="color: var(--white); font-size: 70px;">
                            {{ $t('services') }}
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
                                {{ category[`name_${$i18n.locale}`] || null }}
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="row ralt g-4">
                    <div v-for="(service, serviceIndex) in category.services_id" :key="serviceIndex"
                        class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 wow fadeInDown">
                        <div class="task__item round16 bgwhite d-flex align-items-center">
                            <div class="thumb">
                                <img :src="convertToHttps(service.save_image) || 'default-image.png'" alt="img" />
                            </div>
                            <div class="content">
                                <h3 class="inter title mb-24">
                                    {{ service[`title_${$i18n.locale}`] || null }}
                                </h3>
                                <p class="fz-14 fw-400 inter pra mb-40">
                                    {{ service[`description_${$i18n.locale}`] || null }}
                                </p>
                                <router-link :to="`/${$i18n.locale}/xizmat/${service.id}`" class="cmn--btn outline__btn">
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
      categories: []
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await axios.get("https://new.pochta.uz/api/v1/public/category-services/");
        this.categories = (data || [])
          .filter(cat => cat && cat.yurlitso_status === true) // faqat yuridik (yurlitso) bo‘limlari
          .map(category => {
            if (Array.isArray(category.services_id)) {
              category.services_id = category.services_id.map(service => {
                if (service.save_image) {
                  service.save_image = this.convertToHttps(service.save_image);
                }
                return service;
              });
            } else {
              category.services_id = [];
            }
            return category;
          });
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
        return url;
      }
    }
  }
};
</script>


<style scoped>



.thumb {
    width: 150px; /* Rasm kengligi */
    height: 150px; /* Rasm balandligi */
    border-radius: 50%; /* Aylanaga aylantirish */
    overflow: hidden; /* Ortiqcha qismlar ko'rinmasin */
}

.thumb img {
    width: 150px; /* Rasmni o'z o'lchamida qoldirish */
    height: 150px;
    object-fit: cover; /* Kesib, to'ldirish */
    object-position: center; /* Markazga joylash */
    image-rendering: auto; /* Rasm renderlash sifatini yaxshilash */
}

.pra {
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 2 qatorga cheklash */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}




.task__item .title {
    min-height: 60px; /* Eng uzun sarlavha balandligiga moslang */
    display: flex;
    align-items: center;
}



@media (max-width: 576px) {
  .content{
    text-align: center;
  }

  .task__item .title {
    font-size: 14px;
    min-height: 40px;
    justify-content: center;
  }

  .pra {
    font-size: 13px;
    -webkit-line-clamp: 3;
  }

  .cmn--btn {
    font-size: 13px;
    padding: 6px 12px;
  }

  .section__title p.sub {
    font-size: 30px !important;
  }

  .section__title h2.title {
    font-size: 20px;
  }
}


.task__item {
    height: 100%; /* Har bir kartochka to‘liq balandlikni egallaydi */
}
</style>