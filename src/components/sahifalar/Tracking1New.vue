<template>
    <section class="task__sectiontop ralt pt-120 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-6 col-xl-8 col-lg-8">
                    <div class="section__title text-center ralt mb-60">
                        <form action="#"
                            class="search__component mb-24 d-flex align-items-center justify-content-between wow fadeInUp"
                            @submit.prevent="fetchTrackingData">
                            <input v-model="trackingNumber" id="trackingNumberInput" placeholder="CC123456789UZ"
                                class="faded-placeholder" @keyup.enter="fetchTrackingData">
                            <button type="button" class="cmn--btn d-flex align-items-center" @click="fetchTrackingData">
                                <span>{{ $t('tracking') }}</span>
                                <span><i class="bi bi-search fz-12"></i></span>
                            </button>
                        </form>

                        <div v-if="loading" class="loader truckWrapper" id="loader">
                            <img src="https://new.pochta.uz/media/animatsion.gif" alt="Yuklanmoqda..."
                                class="loaderImage">
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
                <div class="row d-flex align-items-stretch">
                    <div v-if="trackingData.senderCountry" class="col-xl-6 col-lg-6 col-md-12 mb-4">
                        <div class="task__item round16 bgwhite d-flex align-items-center h-100">
                            <div class="thumb">
                                <img src="https://uz.post/assets/img/bn/profile.png" alt="img" />
                            </div>
                            <div class="content">
                                <h3 class="inter title2 mb-24">{{ $t('sender') }}</h3>
                                <p v-if="trackingData.senderCountry" class="fz-16 fw-400 inter pra mb-10">
                                    <strong>{{ $t('country') }}</strong> <br />
                                    <span id="senderCountry" class="textrang">{{ trackingData.senderCountry }}</span>
                                </p>
                                <!-- <p v-if="trackingData.senderAddress" class="fz-16 fw-400 inter pra mb-10">
                                    <strong>{{ $t('address5') }}</strong> <br />
                                    <span id="senderAddress" class="textrang">{{ trackingData.senderAddress }}</span>
                                </p> -->
                                <p v-if="trackingData.senderPostcode" class="fz-16 fw-400 inter pra mb-10">
                                    <strong>{{ $t('postal_code') }}</strong> <br />
                                    <span id="senderPostcode" class="textrang">{{ trackingData.senderPostcode
                                    }}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div v-if="trackingData.recipientCountry" class="col-xl-6 col-lg-6 col-md-12 mb-4">
                        <div class="task__item round16 bgwhite d-flex align-items-center h-100">
                            <div class="thumb">
                                <img src="https://uz.post/assets/img/bn/profile.png" alt="img" />
                            </div>
                            <div class="content">
                                <h3 class="inter title2 mb-24">{{ $t('receiver') }}</h3>
                                <p v-if="trackingData.recipientCountry" class="fz-16 fw-400 inter pra mb-10">
                                    <strong>{{ $t('country') }}</strong> <br />
                                    <span id="recipientCountry" class="textrang">{{ trackingData.recipientCountry
                                    }}</span>
                                </p>
                                <!-- <p v-if="trackingData.recipientAddress" class="fz-16 fw-400 inter pra mb-10">
                                    <strong>{{ $t('address5') }}</strong> <br />
                                    <span id="recipientAddress" class="textrang">{{ trackingData.recipientAddress
                                    }}</span>
                                </p> -->
                                <p v-if="trackingData.recipientPostcode" class="fz-16 fw-400 inter pra mb-10">
                                    <strong>{{ $t('postal_code') }}</strong> <br />
                                    <span id="recipientPostcode" class="textrang">{{ trackingData.recipientPostcode
                                    }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile-timeline" v-show="isMobile">
                    <div class="col-xl-12 col-lg-12">
                        <div class="service__detailswrapper">
                            <div class="trending__based mb-40 bgwhite round16 shadow1">
                                <div class="based__content border round16 bgwhite">
                                    <div class="freelancer__education bborderdash pb-30 mb-30">
                                        <h3 class="title2">{{ $t('kuzatuv') }}</h3>
                                        <h1 v-if="trackingData.errorMessage" class="title wow fadeInUp mb-24 center"
                                            style="color: red; font-size: 20px;">
                                            {{ trackingData.errorMessage }}
                                        </h1>

                                        <!-- Timeline Tracking Start -->
                                        <div class="timeline-wrapper">
                                            <div v-for="(event, index) in combinedTracking" :key="index"
                                                class="timeline-row">
                                                <div class="icon-column">
                                                    <img v-if="index === 0"
                                                        src="https://new.pochta.uz/media/circle1.svg"
                                                        class="icon-main" />
                                                    <img v-else src="https://new.pochta.uz/media/circle.svg"
                                                        class="icon-circle" />
                                                    <div v-if="index !== combinedTracking.length - 1" class="icon-line">
                                                    </div>
                                                </div>
                                                <div class="content-column">
                                                    <div class="status-text">{{ event.status }}</div>
                                                    <div class="date-text">{{ event.date.toLocaleDateString() }} / {{
                                                        event.date.toLocaleTimeString() }}</div>
                                                </div>
                                            </div>
                                        </div>







                                        <!-- Timeline Tracking End -->

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Mobilga mo‘ljallangan timeline kodlari shu yerda -->
                </div>
                <div class="desktop-timeline" v-show="!isMobile">

                    <div class="col-xl-12 col-lg-12">
                        <div class="service__detailswrapper">
                            <div class="trending__based mb-40 bgwhite round16 shadow1">
                                <div class="based__content border round16 bgwhite">
                                    <div class="freelancer__education bborderdash pb-30 mb-30">
                                        <h3 class="title2">{{ $t('kuzatuv') }}</h3>
                                        <h1 v-if="trackingData.errorMessage" class="title wow fadeInUp mb-24 center"
                                            style="color: red; font-size: 20px;">
                                            {{ trackingData.errorMessage }}
                                        </h1>
                                        <ul class="blog__categories" id="combinedTracking">
                                            <li v-for="(event, index) in combinedTracking" :key="index">
                                                <a class="d-flex align-items-center">
                                                    <span class="fz-12 fw-500 title inter">{{
                                                        event.date.toLocaleString()
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
                                                        <span class="fz-12 fw-500 inter success2 d-block">{{
                                                            event.status
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
                    <!-- Kompyuterga mo‘ljallangan list ko‘rinishdagi kodlar shu yerda -->
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

import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(false)

function checkIsMobile() {
    isMobile.value = window.innerWidth < 768
}

onMounted(() => {
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkIsMobile)
})


export default {
    data() {
        return {
            trackingNumber: '',
            loading: false,
            trackingData: null,
            combinedTracking: [],
            errorMessage: null,
            language: localStorage.getItem('language') || 'uz' // Sahifa tilini saqlash
        };
    },
    methods: {
        fetchTrackingData() {
            this.loading = true;
            this.trackingData = null;
            this.combinedTracking = [];
            this.errorMessage = null;

            // Check if the tracking number starts with CZ, RZ, or E
            const trackingNumberPrefix = this.trackingNumber.substring(0, 2); // Get the first 2 characters of the tracking number
            let apiUrl = '';

            if (['CZ', 'RZ', 'E'].includes(trackingNumberPrefix)) {
                apiUrl = `https://tracking.pochta.uz/api/v1/public/new/${this.trackingNumber}/`;
            } else {
                apiUrl = `https://tracking.pochta.uz/api/v1/public/test/${this.trackingNumber}/`;
            }

            const xhr = new XMLHttpRequest();
            xhr.open('GET', apiUrl, true);
            xhr.onload = () => {
                this.loading = false;
                if (xhr.status >= 200 && xhr.status < 300) {
                    const data = JSON.parse(xhr.responseText);
                    console.log(data)
                    if (Array.isArray(data) && data.length > 0 && data[0].OperationalMailitems) {
                        const mailItem = data[0].OperationalMailitems.TMailitemInfoFromScanning[0];
                        this.trackingData = {
                            number: mailItem.InternationalId,
                            senderCountry: mailItem.OrigCountry.Name || '',
                            senderAddress: mailItem.OrigAddress || '',
                            senderPostcode: mailItem.OrigPostcode || '',
                            recipientCountry: mailItem.DestCountry.Name || '',
                            recipientAddress: mailItem.DestAddress || '',
                            recipientPostcode: mailItem.DestPostcode || ''
                        };

                        this.processEvents(mailItem.Events.TMailitemEventScanning, mailItem.DestCountry.Code);
                    } else {
                        this.processAlternativeData(data);
                    }
                } else if (xhr.status === 404) {
                    // 404 xatolik uchun popup ko‘rsatish
                    this.trackingData = {
                        number: this.trackingNumber,
                        errorMessage: 'Ma\'lumot topilmadi' // Xatolik xabari
                    };
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

        processEvents(events, countryCode) {
            const lang = this.$i18n?.locale || 'uz'; // Masalan, Vue I18n ishlatsangiz
            this.combinedTracking = events.map(event => ({
                date: new Date(event.LocalDateTime),
                date1: new Date(event.GmtDateTime),
                location: event.EventOffice.Name,
                status: this.getLocalizedStatus(event.IPSEventType, lang), // Statusni lokalizatsiya qilish
                malumot: event.RetentionReason?.Name || '',
                malumot2: event.NonDeliveryReason?.Name || '',
                country_code: countryCode
            })).sort((a, b) => b.date - a.date);
        },


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
            let TemuList = [];
            let shipoxList = [];
            let gdeposilkaList = [];
            if (data.data) {
                TemuList = data.data.map(item => {
                    let date = new Date(item.date);

                    // Sekundlarni olib tashlash
                    date.setSeconds(0, 0);

                    // Soatga 5 qo'shish

                    return {
                        date: date, // Mana, endi o'zgartirilgan `Date` ob'ekti chiqadi
                        data: item.data || 'UzPost',
                        location: item.warehouse?.name || '',
                        status: item["IPSEventType"]["Name"],
                        country_code: 'UZ'
                    };
                });
                TemuList = TemuList.reverse();
            }

            if (data.shipox?.data?.list) {
                shipoxList = data.shipox.data.list.map(item => ({
                    date: new Date(item.date),
                    data: item.data || 'UzPost',
                    location: item.warehouse?.name || '',
                    status: this.getLocalizedStatus(item),
                    country_code: 'UZ'
                }));
            }

            if (data.gdeposilka?.data?.checkpoints) {
                gdeposilkaList = data.gdeposilka.data.checkpoints.map(item => ({
                    date: new Date(item.time),
                    location: item.location_translated,
                    region: item.courier.name,
                    status: this.getLocalizedStatus(item),
                    country_code: item.courier.country_code
                }));
            }

            const sortedShipoxList = shipoxList.sort((a, b) => new Date(b.date) - new Date(a.date));
            const sortedGdeposilkaList = gdeposilkaList.sort((a, b) => new Date(b.date) - new Date(a.date));

            if (TemuList.length === 0) {
                // Agar TemuList bo'sh bo'lsa, shipoxList va gdeposilkaList-ni sanaga qarab birlashtiramiz
                this.combinedTracking =
                    new Date(sortedShipoxList[0]?.date) > new Date(sortedGdeposilkaList[0]?.date)
                        ? [...sortedShipoxList, ...sortedGdeposilkaList]
                        : [...sortedGdeposilkaList, ...sortedShipoxList];
            } else {
                // Agar TemuList bo'sh bo'lmasa, TemuList-ni combinedTracking-ga qo'shamiz
                this.combinedTracking = [...TemuList];
            }
        },
        getLocalizedStatus(data) {
            const lang = this.$i18n.locale; // Hozirgi tilni aniqlash
            if (!data) return 'Status noaniq';

            if ('LocalName_uz' in data || 'LocalName_ru' in data || 'Name' in data) {
                if (lang === 'uz') return data.LocalName_uz || data.Name;
                if (lang === 'ru') return data.LocalName_ru || data.Name;
                return data.Name;
            }

            if ('status_uz' in data || 'status_ru' in data || 'status_desc' in data) {
                if (lang === 'uz') return data.status_uz;
                if (lang === 'ru') return data.status_ru;
                return data.status_desc || 'Status unknown';
            }

            return 'Status noaniq';
        },
        getStatusText(statusDesc) {
            return statusDesc || 'Status noaniq';
        },
    },
    mounted() {
        if (this.$route?.params?.trackingNumber) {
            this.trackingNumber = this.$route.params.trackingNumber;
            this.fetchTrackingData();
        }
    }
};
</script>












<style scoped>
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

.loaderImage {
    width: 600px;
    /* Rasm kengligi */
    height: auto;
    /* Asl nisbatni saqlash */
}


/* 750px dan kichik ekranlar uchun qo'llanadigan uslublar */
@media (max-width: 750px) {

    /* Popupni markazga joylashtirish */
    /* Popupning umumiy uslubi (750px dan katta ekranlar uchun eski ko'rinish) */
    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        background-color: white;
        /* border-radius: 8px; */
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

    /* Matnlarni markazlash va joylashtirish */
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
        /* display: flex; */
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
        /* color: #555; */
    }

    /* Flag uchun rasmni moslashtirish */
    .flag-icon {
        width: 20px;
        height: auto;
        margin-right: 8px;
    }

    /* Mobil qurilmalarga moslashtirish faqat ekran kengligi 750px dan kichik bo'lsa */
    @media (max-width: 750px) {
        .popup {
            width: 90%;
            max-width: none;
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

        .popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            background-color: white;
            z-index: 1100;
            /* Yuqori qiymat beriladi */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .header-section {
            position: relative;
            z-index: 100;
            /* Pastroq qiymat qo'yiladi */
        }

        .sub-menu {
            z-index: 100;
            /* Menyular pastroq bo'lishi uchun */
        }

    }

}



.search__component input {
    width: 100%;
    text-align: left;
    padding-left: 10px;
    /* Matnni chap tomonga yaqinlashtirish uchun */
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

.icon-main {
    width: 24px;
    height: 24px;
    margin-top: 2px;
}

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
    /* Qo‘shing */
}


.content-column {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.status-text {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 15px;
    color: #4D4D4D;
    letter-spacing: 0.5px;
}

.date-text {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 10px;
    color: #A7A9B7;
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


/* Mobil qurilmalar uchun */
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
    .col-md-12 {
        flex: 0 0 auto;
        width: 50%;
    }
}
</style>