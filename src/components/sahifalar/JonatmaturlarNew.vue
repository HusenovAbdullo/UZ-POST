<template>
    <div>
        <!-- Hero Section -->
        <section class="banner__breadcumn ralt">
            <div id="searchPopup" class="search__popup">
                <form action="#" class="popup-content d-flex align-items-center">
                    <input type="text" placeholder="Search Here" />
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
                                <div class="breadcumnd__content">
                                    <span class="d41 mb-24">Jo'natma turlari</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Hero Section End -->

        <!-- Main Section -->
        <div id="app">
            <section class="setting__section pb-120">
                <div class="container__customizemain pt-100 pb-120 round16">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="setting__tabs p-8 round16 border bgwhite">
                                    <ul class="nav border-0 round16 nav-tabs" role="tablist">
                                        <li class="nav-item" v-for="(menu, index) in menus" :key="index">
                                            <button class="nav-link" :class="{ active: activeMenu === menu.id }"
                                                @click="toggleMenu(menu.id)">
                                                {{ menu.title }}
                                            </button>
                                            <div v-if="activeMenu === menu.id" class="submenu">
                                                <ul>
                                                    <li class="nav-item" role="presentation"
                                                        v-for="(subItem,) in menu.subItems" :key="subItem.id">
                                                        <button
                                                            :class="['nav-link', { active: activeSubItem === subItem.id }]"
                                                            type="button" @click="setActiveSubItem(subItem.id)">
                                                            <p class="title9">{{ subItem.title }}</p>
                                                        </button>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="tab-content" id="myTabContent">
                                    <div v-if="activeSubItem === 'Pochta varaqchasi'">


                                    </div>
                                    <div v-if="activeSubItem === 'jonatma-turlari'">
                                        <div class="tab-pane fade show" id="xat_xabarlar" role="tabpanel"
                                            aria-labelledby="xat_xabarlar-tab">
                                            <div class="overview__gitwrapper bgwhite round16 border">

                                                <div class="pricing-container">
                                                    <div class="header">
                                                        <p class="address-info">Pochta jo‘natmalari ichki (O‘zbekiston
                                                            Respublikasi hududida jo‘natish uchun qabul qilingan) va
                                                            xalqaro (O‘zbekiston Respublikasidan tashqariga jo‘natish
                                                            uchun qabul qilingan, uning hududiga boshqa davlatlardan
                                                            kelgan yoki O‘zbekiston Respublikasi hududi orqali tranzit
                                                            bo’lib kelayotgan)ga bo‘linadi. </p>
                                                        <br><br>
                                                        <h1>Mahalliy pochta jo‘natmalariga quyidagi turdagi pochta
                                                            jo‘natmalari kiradi: </h1>
                                                        <!-- <p class="weight-info">Vazni - 2 kg gacha</p> -->
                                                        <p class="address-info">1. Xat;</p>
                                                        <p class="address-info">2. Pochta varaqasi;</p>
                                                        <p class="address-info">3. Banderol;</p>
                                                        <p class="address-info">4. Sekogramma;</p>
                                                        <p class="address-info">5. Mayda paket;</p>
                                                        <p class="address-info">6. Posilka;</p>
                                                        <p class="address-info">7. EMS yuborish;</p>
                                                        <p class="address-info">8. Tegishli qadoqdagi bosma nashrlar.
                                                        </p><br><br>
                                                        <h1>Xalqaro pochta jo‘natmalariga quyidagi turdagi pochta
                                                            jo‘natmalari kiradi: </h1>
                                                        <p class="address-info">1. Xat;</p>
                                                        <p class="address-info">2. Pochta varaqasi;</p>
                                                        <p class="address-info">3. Sekogramma;</p>
                                                        <p class="address-info">4. Mayda paket;</p>
                                                        <p class="address-info">5. Qop "M";</p>
                                                        <p class="address-info">6. Posilka;</p>
                                                        <p class="address-info">7. EMS yuborish;</p>
                                                        <p class="address-info">8. Tegishli qadoqdagi bosma nashrlar.
                                                        </p><br>
                                                        <p class="address-info">Pochta jo'natmasining turi uning
                                                            og'irligi, biriktirma xususiyati va o'lchamlari bilan
                                                            belgilanadi.</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div v-if="activeSubItem === 'taqiqlangan-joylanmalar'">
                                        <div class="tab-pane fade show" id="xat_xabarlar" role="tabpanel"
                                            aria-labelledby="xat_xabarlar-tab">
                                            <div class="overview__gitwrapper bgwhite round16 border">

                                                <div class="pricing-container">
                                                    <div class="header">
                                                        <br><br>
                                                        <h1>Ichki va xalqaro pochta joʻnatmalarida quyidagilarni
                                                            yuborish taqiqlanadi:</h1> <br>
                                                        <!-- <p class="weight-info">Vazni - 2 kg gacha</p> -->
                                                        <p class="address-info">Portlovchi moddalar</p><br>
                                                        <p class="address-info">Mushaklar, oʻq-dorilar, porox</p><br>
                                                        <p class="address-info">Raketalar maketlari uchun dvigatellar
                                                        </p><br>
                                                        <p class="address-info">Avtomobillar uchun xavfsizlik
                                                            yostiqchalari</p><br>
                                                        <p class="address-info">Gazlar</p><br>
                                                        <p class="address-info">Aerozollar</p><br>
                                                        <p class="address-info">Gazli yondirgichlar</p><br>
                                                        <p class="address-info">
                                                            <a href="https://lex.uz/docs/-1772402#:~:text=BUYRUG%E2%80%98I-,POCHTA%20ALOQASI%20XIZMATLARINI%20KO%E2%80%98RSATISH%20QOIDALARINI%20TASDIQLASH%20TO%E2%80%98G%E2%80%98RISIDA,vazirligi%20tomonidan%202011%2Dyil%2018%2Daprelda%20ro%E2%80%98yxatdan%20o%E2%80%98tkazildi%2C%20ro%E2%80%98yxat%20raqami%202219%5D,-%E2%80%9CPochta%20aloqasi%20to%E2%80%98g%E2%80%98risida"
                                                                target="_blank">
                                                                Siqilgan gazli ballonlar va O‘zbekiston Respublikasi
                                                                Adliya vazirligi tomonidan 2011 yil 18 aprelda 2219-son
                                                                bilan ro‘yxatdan o‘tgan buyrugʻida ko'rsatilgan barcha
                                                                jo'natishga taqiqlangan buyumlar.
                                                            </a>
                                                        </p>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>








                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeMenu: "jonatma_turlari", // Dastlabki faol menyu
            activeSubItem: "jonatma-turlari", // Dastlabki faol sub-item
            menus: [
                {
                    id: "jonatma_turlari",
                    title: "Jo'natma turlari",
                    subItems: [
                        { id: "jonatma-turlari", title: "Jo'natma turlari" },
                    ],
                },
                {
                    id: "taqiqlangan_joylanmalar",
                    title: "Taqiqlangan joylanmalar",
                    subItems: [
                        { id: "taqiqlangan-joylanmalar", title: "Taqiqlangan joylanmalar" },

                    ],
                },

            ],
        };
    },
    methods: {
        toggleMenu(menuId) {
            this.activeMenu = this.activeMenu === menuId ? null : menuId;
        },
        setActiveSubItem(subItemId) {
            this.activeSubItem = subItemId;
        },
    },
};
</script>


<style>
.nav-link {
    display: block;
    padding: 10px 15px;
    background: #f8f9fa;
    border: 1px solid #ddd;
    cursor: pointer;
}

.nav-link.active {
    background-color: #007bff;
    color: white;
    font-weight: bold;
    border-color: #0056b3;
}

.submenu {
    margin-top: 10px;
    padding-left: 20px;
}

.submenu ul {
    list-style-type: none;
    padding: 0;
}

.submenu li {
    padding: 5px 0;
    color: #333;
}

.submenu li:hover {
    text-decoration: underline;
}

.pricing-container {
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.header {
    margin-bottom: 2rem;
}

.header h1 {
    font-size: 24px;
    font-weight: bold;
    color: #183E98;
}

.weight-info {
    font-style: italic;
    margin-bottom: 0.5rem;
}

.address-info {
    font-style: italic;
    color: #666;
}

.pricing-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.pricing-table th,
.pricing-table td {
    border: 1px solid #000;
    padding: 0.8rem;
    text-align: left;
    color: black;
}

.number-column {
    width: 50px;
}

.price-column {
    width: 120px;
}

.section-header td {
    font-weight: bold;
    background-color: #f0f0f0;
}

.subsection-header td {
    font-style: italic;
    background-color: #f8f8f8;
}

.pricing-table tbody tr:nth-child(even):not(.section-header):not(.subsection-header) {
    background-color: #f5f5f5;
}

.note-cell {
    font-size: 0.9rem;
}

.note-cell p {
    margin-bottom: 0.5rem;
}

.note-cell p:first-child {
    font-weight: bold;
}

.insurance-row td {
    background-color: #f8f8f8;
}

.storage-info {
    background-color: #fff;
}

.storage-info ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.storage-info li {
    margin: 0;
    padding: 0;
    font-style: italic;
}


@media (max-width: 768px) {
    .pricing-table {
        font-size: 0.9rem;
    }

    .pricing-table th,
    .pricing-table td {
        padding: 0.5rem;
    }

    .number-column {
        width: 40px;
    }

    .price-column {
        width: 100px;
    }
}

@media (max-width: 480px) {
    .pricing-table {
        font-size: 0.8rem;
    }

    .header h1 {
        font-size: 1rem;
    }
}
</style>