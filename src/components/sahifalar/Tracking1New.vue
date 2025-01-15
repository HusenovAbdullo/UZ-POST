<template>
    <section class="task__sectiontop ralt pt-120 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-6 col-xl-8 col-lg-8">
                    <div class="section__title text-center ralt mb-60">
                        <form action="#"
                            class="search__component mb-24 d-flex align-items-center justify-content-between wow fadeInUp">
                            <input v-model="trackingNumber" id="trackingNumberInput" placeholder="CC123456789UZ"
                                class="faded-placeholder" @keyup.enter="fetchTrackingData">
                            <button type="button" class="cmn--btn d-flex align-items-center" @click="fetchTrackingData">
                                <span>Kuzatish</span>
                                <span><i class="bi bi-search fz-12"></i></span>
                            </button>
                        </form>
                        <div v-if="loading" class="loader truckWrapper" id="loader">
                            <video autoplay muted loop class="loaderVideo">
                                <source src="https://uz.post/assets/img/bosh/postman7.mp4" type="video/mp4">
                                Sizning brauzeringiz video teglamasini qo‘llab-quvvatlamaydi.
                            </video>
                        </div>
                        <div v-else>
                            <!-- Header End -->
                            <!-- Include your popup section here -->
                        </div>

                        <!-- Error message if no data is found -->
                        <div v-if="errorMessage" class="error-text">
                            <span>{{ errorMessage }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row ralt g-4" v-if="trackingData">
                <h2 class="title wow fadeInUp mb-24 center" id="trackingNumberDisplay">{{ trackingData.number }}</h2>
                <div v-if="trackingData.senderCountry" class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown">
                    <div class="task__item round16 bgwhite d-flex align-items-center">
                        <div class="thumb">
                            <img src="https://uz.post/assets/img/bn/profile.png" alt="img">
                        </div>
                        <div class="content">
                            <h3 class="inter title2 mb-24">Yuboruvchi</h3>
                            <p v-if="trackingData.senderCountry" class="fz-16 fw-400 inter pra mb-40">
                                <strong>Mamlakat: </strong> <br>
                                <span id="senderCountry" class="textrang">{{ trackingData.senderCountry }}</span>
                            </p>
                            <p v-if="trackingData.senderAddress" class="fz-16 fw-400 inter pra mb-40">
                                <strong>Manzil:</strong> <br>
                                <span id="senderAddress" class="textrang">{{ trackingData.senderAddress }}</span>
                            </p>

                            <p v-if="trackingData.senderPostcode" class="fz-16 fw-400 inter pra mb-40">
                                <strong>Pochta indeksi:</strong> <br>
                                <span id="senderPostcode" class="textrang">{{ trackingData.senderPostcode }}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div v-if="trackingData.recipientCountry" class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp">
                    <div class="task__item round16 bgwhite d-flex align-items-center">
                        <div class="thumb">
                            <img src="https://uz.post/assets/img/bn/profile.png" alt="img">
                        </div>
                        <div class="content">
                            <h3 class="inter title2 mb-24">Qabul qiluvchi</h3>
                            <p v-if="trackingData.recipientCountry" class="fz-16 fw-400 inter pra mb-40">
                                <strong>Mamlakat:</strong> <br>
                                <span id="recipientCountry" class="textrang">{{ trackingData.recipientCountry }}</span>
                            </p>
                            <p v-if="trackingData.recipientAddress" class="fz-16 fw-400 inter pra mb-40">
                                <strong>Manzil:</strong> <br>
                                <span id="recipientAddress" class="textrang">{{ trackingData.recipientAddress }}</span>
                            </p>
                            <p v-if="trackingData.recipientPostcode" class="fz-16 fw-400 inter pra mb-40">
                                <strong>Pochta indeksi:</strong> <br>
                                <span id="recipientPostcode" class="textrang">{{ trackingData.recipientPostcode
                                    }}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-8">
                    <div class="service__detailswrapper">
                        <div class="trending__based mb-40 bgwhite round16 shadow1">
                            <div class="based__content border round16 bgwhite">
                                <div class="freelancer__education bborderdash pb-30 mb-30">
                                    <h3 class="title2">Kuzatuv</h3>
                                    <ul class="blog__categories" id="combinedTracking">
                                        <li v-for="(event, index) in combinedTracking" :key="index">
                                            <a href="#0" class="d-flex align-items-center">
                                                <span class="fz-12 fw-500 title inter">{{ event.date.toLocaleString()
                                                    }}</span>
                                                <span class="cateicon">
                                                    <img :src="`https://uz.post/assets/img/flags/${event.country_code.toLowerCase()}.svg`"
                                                        alt="flag" class="flag-icon">
                                                </span>
                                                <span class="fz-12 d-block fw-500 inter success2 region-info">{{
                                                    event.region }}</span>
                                                <span class="fz-12 d-block fw-500 inter success2 region-info">{{
                                                    event.data }}</span>
                                                <span class="fz-12 fw-500 inter title d-block">{{ event.location
                                                    }}</span>
                                                <span>
                                                    <span class="fz-12 fw-500 inter success2 d-block">{{ event.status
                                                        }}</span>
                                                    <span v-if="event.malumot" class="fz-12 fw-500 inter success2"
                                                        style="color: brown; display: block; font-size: 10px; opacity: 0.6;">
                                                        {{ event.malumot }}
                                                    </span>
                                                    <span v-if="event.malumot2" class="fz-12 fw-500 inter success2"
                                                        style="color: brown; display: block; font-size: 10px; opacity: 0.6;">
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
                <div class="col-xl-4 col-lg-4">
                    <div class="basic__skilled__wrapper">
                        <div class="darrell__profile round16 bgwhite">
                            <div id="adCarousel" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <a href="https://uz.post" target="_blank">
                                            <img src="https://uz.post/assets/img/reklama/11.png" class="d-block w-100"
                                                alt="ad1">
                                        </a>
                                    </div>
                                    <div class="carousel-item">
                                        <a href="https://uz.post" target="_blank">
                                            <img src="https://uz.post/assets/img/reklama/12.png" class="d-block w-100"
                                                alt="ad2">
                                        </a>
                                    </div>
                                    <div class="carousel-item">
                                        <a href="https://uz.post" target="_blank">
                                            <img src="https://uz.post/assets/img/reklama/13.png" class="d-block w-100"
                                                alt="ad3">
                                        </a>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#adCarousel"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#adCarousel"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            trackingNumber: '', // Foydalanuvchi kiritadigan kuzatuv raqami
            loading: false, // Yuklanish holati uchun belgi
            trackingData: null, // Asosiy kuzatuv ma'lumotlari
            combinedTracking: [], // Barcha kuzatuv voqealari
            errorMessage: null, // Xato xabarlar uchun
        };
    },
    methods: {
        // Kuzatuv ma'lumotlarini olish funksiyasi
        fetchTrackingData() {
            if (!this.trackingNumber) {
                this.errorMessage = 'Kuzatuv raqamini kiriting';
                return;
            }

            this.loading = true;
            this.trackingData = null;
            this.combinedTracking = [];
            this.errorMessage = null;

            // API so'rovini yuborish
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `https://new.pochta.uz/api/v1/public/test/${this.trackingNumber}/`, true);

            xhr.onload = () => {
                this.loading = false;
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const data = JSON.parse(xhr.responseText);

                        if (Array.isArray(data) && data.length > 0 && data[0].OperationalMailitems) {
                            const mailItem = data[0].OperationalMailitems.TMailitemInfoFromScanning[0];
                            this.trackingData = {
                                number: mailItem.InternationalId,
                                senderCountry: mailItem.OrigCountry?.Name || '',
                                senderAddress: mailItem.OrigAddress || '',
                                senderPostcode: mailItem.OrigPostcode || '',
                                recipientCountry: mailItem.DestCountry?.Name || '',
                                recipientAddress: mailItem.DestAddress || '',
                                recipientPostcode: mailItem.DestPostcode || ''
                            };

                            this.processEvents(mailItem.Events.TMailitemEventScanning, mailItem.DestCountry?.Code);
                        } else {
                            this.processAlternativeData(data);
                        }
                    } catch (error) {
                        this.errorMessage = 'Ma\'lumotni tahlil qilishda xatolik yuz berdi';
                    }
                } else {
                    this.errorMessage = 'Ma\'lumot topilmadi';
                }
            };

            xhr.onerror = () => {
                this.loading = false;
                this.errorMessage = 'So\'rovni yuborishda xatolik yuz berdi';
            };

            xhr.send();
        },

        // Kuzatuv voqealarini qayta ishlash funksiyasi
        processEvents(events, countryCode) {
            this.combinedTracking = events.map(event => ({
                date: new Date(event.LocalDateTime),
                location: event.EventOffice?.Name || 'Noma\'lum joy',
                status: event.IPSEventType?.Name || 'Noma\'lum holat',
                malumot: event.RetentionReason?.Name || '',
                malumot2: event.NonDeliveryReason?.Name || '',
                country_code: countryCode || 'UZ'
            })).sort((a, b) => b.date - a.date);
        },

        // Muqobil API ma'lumotlarini qayta ishlash funksiyasi
        processAlternativeData(data) {
            this.trackingData = {
                number: data.header?.data?.order_number || data.gdeposilka?.data?.tracking_number || 'Ma\'lumot yo\'q',
                senderCountry: data.header?.data?.locations?.[0]?.address_city || '',
                senderAddress: data.header?.data?.locations?.[0]?.address || '',
                senderPostcode: data.header?.data?.locations?.[0]?.postcode || '',
                recipientCountry: data.header?.data?.locations?.[1]?.address_city || '',
                recipientAddress: data.header?.data?.locations?.[1]?.address || '',
                recipientPostcode: data.header?.data?.locations?.[1]?.postcode || ''
            };

            const shipoxList = (data.shipox?.data?.list || []).map(item => ({
                date: new Date(item.date),
                location: item.warehouse?.name || '',
                status: this.getStatusText(item.status_desc),
                country_code: 'UZ'
            }));

            const gdeposilkaList = (data.gdeposilka?.data?.checkpoints || []).map(item => ({
                date: new Date(item.time),
                location: item.location_translated || '',
                status: this.getStatusText(item.status_name),
                country_code: item.courier?.country_code || 'UZ'
            }));

            this.combinedTracking = [...shipoxList, ...gdeposilkaList].sort((a, b) => b.date - a.date);
        },

        // Status matnini olish uchun yordamchi funksiya
        getStatusText(statusDesc) {
            return statusDesc || 'Holat noaniq';
        }
    },
    mounted() {
        // URL'dan tracking raqamini o'qish
        if (this.$route?.params?.trackingNumber) {
            this.trackingNumber = this.$route.params.trackingNumber;
            this.fetchTrackingData();
        }
    }
};
</script>











<style>
#adCarousel .carousel-control-prev,
#adCarousel .carousel-control-next {
    display: none;
    /* Tugmalarni yashirin holatga keltiramiz */
}

#adCarousel:hover .carousel-control-prev,
#adCarousel:hover .carousel-control-next {
    display: block;
    /* Hover holatida tugmalarni ko'rsatamiz */
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
    /* Rasmni containerga moslashtirish, ya'ni o'zgarmas holda to'liq qamrab olish */
}

.footer__section {
    position: relative;
    margin-top: 20px;
    /* Footerning yuqori qismidan bo'shliq */
    background-color: #333;
    /* Agar kerak bo'lsa, fon rangini o'zgartiring */
    padding: 20px 0;
    /* Footer uchun ichki bo'shliq */
}

.region-info {
    font-size: 10px;
    color: #888;
    display: block;
    /* Yangi qatorga chiqishini ta'minlash */
}
</style>