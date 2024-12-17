<template>
    <!-- Hero Sections Here -->
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
                                <span class="d4 mb-24">
                                    Yangilik
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->

    <!-- Blog Categories Here -->
    <section class="blog__sections sectionbg pt-60 pb-120">
        <div class="container">
            <div class="row g-4">
                <div v-if="newsItem" class="row g-4">
                    <div class="balance__transfercard shadow1 p-8 bgwhite mb-24 round16">
                        <div class="bt__one mb-20">
                            <img :src="getSecureImageUrl(newsItem.save_image)" alt="news-image" class="round16 w-101">
                        </div>
                        <div class="blog__content">
                            <ul class="blog__addmin flex-wrap mb-24 d-flex align-items-center">
                                <li class="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                                    <i class="bi bi-calendar3 ptext2"></i>
                                    {{ formatDate(newsItem.date) }}
                                </li>
                            </ul>
                            <h3 class="title mb-24">
                                    {{ newsItem.title_uz }}
                            </h3>
                            <p class="fz-16 fw-400 mb-40 bborderdash  ptext2 inter">
                                {{ newsItem.text_uz }}

                            </p>
                            <h4 class="title mb-20 inter fw-600">
                                Kichik sarlavha
                            </h4>
                            <p class="fz-16 fw-400 mb-30 ptext2 inter">
                                {{ newsItem.description_uz }}

                            </p>
                            <p class="fz-16 fw-400 inter pra">
                                {{ meta_title_uz }}
                            </p>
                            <div
                                class="attachment__footertag mt-30 gap-3 flex-wrap d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center gap-2 flex-wrap">
                                    <span class="base fz-18 fw-500 inter">
                                        Tag -
                                    </span>
                                    <a href="#0" class="ata__tag fz-14 fw-400 pra border round100">
                                        Umumjahon pochta
                                    </a>
                                    <a href="#0" class="ata__tag fz-14 fw-400 pra border round100">
                                        UzPost
                                    </a>
                                    <a href="#0" class="ata__tag fz-14 fw-400 pra border round100">
                                        Elektron tijorat
                                    </a>
                                </div>
                                <div class="share d-flex align-items-center gap-2">
                                    <span class="fz-18 fw-500 inter base">
                                        Ulashish -
                                    </span>
                                    <ul class="social d-flex align-items-center">
                                        <li>
                                            <a href="#0">
                                                <i class="bi bi-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <i class="bi bi-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <i class="bi bi-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <i class="bi bi-pinterest"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="trending__based bgwhite round16 shadow1">
                        <h4 class="pb-24 title bborderdash mb-24">
                            Izoh qoldiring
                        </h4>
                        <form action="#0" class="writing__review">
                            <div class="wrigt__grp">
                                <label for="name">Ism</label>
                                <input type="text" id="name" placeholder="Ismingizni kiriting">
                            </div>
                            <div class="wrigt__grp">
                                <label for="email">Email</label>
                                <input type="text" id="email" placeholder="Email manzil kiriting...">
                            </div>
                            <div class="wrigt__grp">
                                <label for="name">Izoh</label>
                                <textarea class="form-control" placeholder="izoh yozib qoldiring" id="textAreaExample"
                                    rows="4"></textarea>
                            </div>
                            <button class="cmn--btn mt-16">
                                <span>
                                    Yuborish
                                </span>
                                <span>
                                    <i class="bi bi-arrow-up-right"></i>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- Blog Categories End -->
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            newsItem: null, // Store the fetched news item
        };
    },
    created() {
        const id = this.$route.params.id; // Get the ID from the route
        this.fetchNews(id); // Fetch the detailed news data
    },
    methods: {
        async fetchNews(id) {
            try {
                const response = await axios.get(`https://new.pochta.uz/api/v1/public/uz-post-news/${id}/`);
                this.newsItem = response.data;
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        },
        formatDate(dateString) {
            const date = new Date(dateString);
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        },
        getSecureImageUrl(url) {
            // Ensure the image URL starts with https
            if (url && url.startsWith('http://')) {
                return url.replace('http://', 'https://');
            }
            return url; // If it already starts with https, return it as is
        }
    }
};
</script>