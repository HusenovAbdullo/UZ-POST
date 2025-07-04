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
                                    <span class="d41 mb-24">{{ MenuName }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div id="app">
            <section class="setting__section pb-120">
                <div class="container__customizemain pt-100 pb-120 round16">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="setting__tabs p-8 round16 border bgwhite">
                                    <ul class="nav border-0 round16 nav-tabs" role="tablist">
                                        <li class="nav-item" v-for="(subItem, subIndex) in allSubItems" :key="subIndex">
                                            <button class="nav-link" :class="{ active: activeMenu === subItem.id }"
                                                @click="toggleMenu(subItem.id)">
                                                {{ subItem[`name_${$i18n.locale}`] || subItem.name_uz }}
                                            </button>
                                            <div v-if="activeMenu === subItem.id" class="submenu">
                                                <ul v-if="subItem.pages_id && subItem.pages_id.length">
                                                    <li class="nav-item" role="presentation"
                                                        v-for="(page, pageIndex) in subItem.pages_id" :key="pageIndex">
                                                        <button
                                                            :class="['nav-link', { active: activeSubItem === page.id }]"
                                                            type="button" @click="setActiveSubItem(page.id)">
                                                            <p class="title9">{{ page[`title_${$i18n.locale}`] ||
                                                                page.title_uz }}</p>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="overview__gitwrapper bgwhite round16 border" v-if="pageData">
                                    <h2 class="pb-40 bborderdash mb-20 title2">{{ pageData[`title_${$i18n.locale}`] ||
                                        l }}</h2>
                                    <div class="text-content" v-html="serviceText"></div>
                                </div>
                                <div v-else>
                                    <div class="col-lg-12" v-for="(subItem, subIndex) in allSubItems" :key="subIndex">
                                        <div v-if="(activeMenu === null && subItem.name_uz === MenuNameUz) || (activeMenu !== null && activeMenu === subItem.id)"
                                            class="overview__gitwrapper bgwhite round16 border">
                                            <h2 class="pb-40 bborderdash mb-20 title2">
                                                {{ subItem[`name_${$i18n.locale}`] || subItem.name_uz }}
                                            </h2>
                                            <div class="nav-item" role="presentation"
                                                v-for="(page, pageIndex) in subItem.pages_id" :key="pageIndex"
                                                :class="{ active: activeSubItem === page.id }">
                                                <a href="javascript:void(0);" class="title2"
                                                    @click="setActiveSubItemAndMenu(subItem.id, page.id)">
                                                    {{ page[`title_${$i18n.locale}`] || page.title_uz }}
                                                </a>
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
import axios from "axios";

export default {
    data() {
        return {
            locale: this.$i18n.locale || 'uz', // Joriy til kodi

            serviceText: '', // HTML formatidagi matn
            MenuName: null,
            MenuNameUz: null,
            menus: [], // JSON ma'lumotlari
            menuId: null, // Menu ID
            activeMenu: null, // Dastlabki faol menyu
            activeSubItem: null, // Dastlabki faol sub-item
            pageData: null, // Olingan sahifa ma'lumotlari
        };
    },
    computed: {
        allSubItems() {
            if (this.menus.length && this.menus[0].item_pages) {
                console.log(this.menus[0].item_pages)
                return this.menus[0].item_pages; // Faqat item_pages massivini qaytarish
            }
            return [];
        },
    },
    async created() {
        this.menuId = this.$route.query.id;
        const id1 = this.$route.query.id1;
        const id2 = this.$route.query.id2;

        if (this.menuId) {
            await this.fetchMenus(this.$i18n.locale);

            if (id1) {
                this.activeMenu = Number(id1);
                const selectedMenu = this.allSubItems.find(item => item.id === Number(id1));
                if (selectedMenu) {
                    this.MenuName = selectedMenu[`name_${this.$i18n.locale}`] || selectedMenu.name_uz;
                }
            }

            if (id2) {
                this.activeSubItem = Number(id2);
                this.fetchPageData(Number(id2), this.$i18n.locale);
            }
        }
    },
    async mounted() {
        this.fetchMenus(this.$i18n.locale);
    },
    watch: {
        '$i18n.locale'(newLocale) {
            if (this.activeSubItem) {
                this.fetchPageData(this.activeSubItem, newLocale);
            }
        },
    },
    methods: {
        loadFontsFromText(text) {
            // `font-family` qiymatini tahlil qilish uchun regex
            const fontRegex = /font-family:\s*([^;"]+)/g;
            let match;
            const fonts = new Set();

            // Matndagi barcha `font-family` qiymatlarini yig'ish
            while ((match = fontRegex.exec(text)) !== null) {
                fonts.add(match[1].trim());
            }

            // Har bir font uchun `.ttf` faylni yuklash
            fonts.forEach((font) => {
                const fontPath = `/assets/css/fonts/${font}.ttf`; // To'g'ri interpolatsiya
                this.loadFont(font, fontPath);
            });
        },
        loadFont(fontName, fontPath) {
            // Fontni dinamik yuklash
            const fontFace = new FontFace(fontName, `url(${fontPath})`);
            fontFace
                .load()
                .then((loadedFont) => {
                    document.fonts.add(loadedFont);
                })
                .catch(() => {
                    console.warn(`${fontName} font mavjud emas. Stilda asl font ishlatiladi.`);
                });
        },
        toggleMenu(menuId) {
            if (this.activeMenu === menuId) {
                this.activeMenu = null;
                this.activeSubItem = null;
                this.pageData = null;
                this.MenuName = null;

                this.updateQueryParams({ id1: null, id2: null }); // id1 va id2 query'dan o'chadi
            } else {
                this.activeMenu = menuId;
                this.activeSubItem = null;
                this.pageData = null;

                const selectedMenu = this.allSubItems.find(item => item.id === menuId);
                if (selectedMenu) {
                    this.MenuName = selectedMenu[`name_${this.$i18n.locale}`] || selectedMenu.name_uz;
                }

                this.updateQueryParams({ id1: menuId, id2: null }); // faqat id1 ni yangilaymiz
            }
        },

        setActiveSubItemAndMenu(menuId, subItemId) {
            this.activeMenu = menuId;
            this.activeSubItem = subItemId;
            this.fetchPageData(subItemId, this.$i18n.locale);

            this.updateQueryParams({ id1: menuId, id2: subItemId });
        },

        setActiveSubItem(subItemId) {
            if (this.activeSubItem === subItemId) {
                this.activeSubItem = null;
                this.pageData = null;
                this.updateQueryParams({ id2: null }); // id2 query'dan o'chadi
            } else {
                this.activeSubItem = subItemId;
                this.pageData = null;
                this.fetchPageData(subItemId, this.$i18n.locale);
                this.updateQueryParams({ id2: subItemId }); // id2 ni yangilaymiz
            }
        },

        // Menyu elementlarini olish
        async fetchMenus(locale) {

            try {
                const response = await axios.get(`https://new.pochta.uz/api/v1/public/menu-element-items/${this.menuId}/`);
                if (response.data && response.data.item_pages) {
                    this.menus = [response.data];
                    this.MenuName = this.menus[0][`name_${locale}`] || ' '
                    this.MenuNameUz = this.menus[0]['name_uz'] || ' '

                } else {
                    console.error('API natijasi noto\'g\'ri formatda');
                }
            } catch (error) {
                console.error('Menyu ma\'lumotlarini olishda xatolik:', error);
            }
        },
        updateQueryParams(params) {
            const currentQuery = { ...this.$route.query };

            // Parametrlar qo‘shish yoki o‘chirish
            for (const key in params) {
                if (params[key] === null || params[key] === undefined) {
                    delete currentQuery[key];
                } else {
                    currentQuery[key] = params[key];
                }
            }

            this.$router.replace({ query: currentQuery }).catch(() => { });
        },
        async fetchPageData(subItemId, locale) {
            try {
                const response = await axios.get(`https://new.pochta.uz/api/v1/public/menu-item-pages/${subItemId}/`);
                if (response.data) {
                    this.pageData = response.data;
                    this.serviceText = this.pageData[`text_${locale}`] || '';
                    this.loadFontsFromText(this.serviceText) // HTML formatidagi matn

                }
            } catch (error) {
                console.error('Sahifa ma\'lumotlarini olishda xatolik:', error);
            }
        },
    },
};
</script>

<style scoped>
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
</style>
