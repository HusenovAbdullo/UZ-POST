<template>
    <div>


        <!-- Mobil menyu (chapdan ochiladi) -->
        <transition name="slide">
            <div v-if="isSidebarOpen" class="mobile-sidebar">
                <div class="sidebar-header">
                    <button @click="toggleSidebar" class="close-btn">&times;</button>
                </div>
                <div class="menu-list">
                    <div v-for="subItem in allSubItems" :key="subItem.id" class="menu-item"
                        :class="{ active: activeMenu === subItem.id }">
                        <div class="menu-title" @click="toggleMenu(subItem.id)">
                            <span>{{ subItem[`name_${locale}`] || subItem.name_uz }}</span>
                            <img src="https://new.pochta.uz/media/sayt.svg" alt="arrow" class="arrow"
                                :class="{ rotated: activeMenu === subItem.id }" />
                        </div>

                        <div v-if="activeMenu === subItem.id" class="submenu">
                            <div v-for="page in subItem.pages_id" :key="page.id" class="submenu-item"
                                @click="setActiveSubItemAndMenu(subItem.id, page.id)">
                                {{ page[`title_${locale}`] || page.title_uz }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <!-- Bosh sarlavha -->
        <section class="banner__breadcumn ralt">
            <div class="breadcumnd__wrapper">
                <div class="container">
                    <div class="profile__wrappers setting__breadcumnd">
                        <div class="row g-4 align-items-center justify-content-between">
                            <div class="col">
                                <div class="breadcumnd__content">
                                    <span class="d41 mb-24">{{ MenuName }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Asosiy kontent -->
        <section class="setting__section pb-120">
            <div class="container__customizemain pt-100 pb-120 round16">
                <div class="container">
                    <div class="row">
                        <!-- Mobil menyu toggle tugmasi (faqat kichik ekranlarda) -->
                        <div class="mobile-menu-toggle d-lg-none">
                            <button @click="toggleSidebar" class="hamburger-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <!-- Desktop menyu -->
                        <div class="col-lg-3 d-none d-lg-block">
                            <div class="setting__tabs p-8 round16 border bgwhite">
                                <ul class="nav border-0 round16 nav-tabs" role="tablist">
                                    <li v-for="subItem in allSubItems" :key="subItem.id" class="nav-item">
                                        <button class="nav-link" :class="{ active: activeMenu === subItem.id }"
                                            @click="toggleMenu(subItem.id)">
                                            {{ subItem[`name_${locale}`] || subItem.name_uz }}
                                        </button>
                                        <div v-if="activeMenu === subItem.id" class="submenu">
                                            <ul v-if="subItem.pages_id?.length">
                                                <li v-for="page in subItem.pages_id" :key="page.id" class="nav-item">
                                                    <button :class="['nav-link', { active: activeSubItem === page.id }]"
                                                        @click="setActiveSubItemAndMenu(subItem.id, page.id)">
                                                        {{ page[`title_${locale}`] || page.title_uz }}
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <!-- Kontent paneli -->
                        <div class="col-lg-9">
                            <div v-if="pageData" class="overview__gitwrapper bgwhite round16 border">
                                <h2 class="pb-40 bborderdash mb-20 title2">
                                    {{ pageData[`title_${locale}`] || '...' }}
                                </h2>
                                <div class="text-content" v-html="serviceText"></div>
                            </div>

                            <!-- ESLint to‘g‘risi uchun filtrlangan elementlar -->
                            <div v-else>
                                <div v-for="subItem in filteredSubItems" :key="subItem.id"
                                    class="overview__gitwrapper bgwhite round16 border">
                                    <h2 class="pb-40 bborderdash mb-20 title2">
                                        {{ subItem[`name_${locale}`] || subItem.name_uz }}
                                    </h2>
                                    <div v-for="page in subItem.pages_id" :key="page.id"
                                        @click="setActiveSubItemAndMenu(subItem.id, page.id)" class="title2"
                                        style="cursor: pointer">
                                        {{ page[`title_${locale}`] || page.title_uz }}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      locale: this.$i18n.locale || "uz",
      serviceText: "",
      MenuName: null,
      MenuNameUz: null,
      menus: [],
      menuId: null,
      activeMenu: null,
      activeSubItem: null,
      pageData: null,
      isSidebarOpen: false,
    };
  },
  computed: {
    allSubItems() {
      return this.menus.length && this.menus[0].item_pages
        ? this.menus[0].item_pages
        : [];
    },
    filteredSubItems() {
      return this.allSubItems.filter((subItem) =>
        this.activeMenu === null
          ? subItem.name_uz === this.MenuNameUz
          : subItem.id === this.activeMenu
      );
    },
  },
  created() {
    this.handleRouteChange(); // Birinchi yuklash
  },
  watch: {
    "$route.params.menu": "handleRouteChange",
    "$route.params.submenu": "handleRouteChange",
    "$route.params.page": "handleRouteChange",

    "$i18n.locale"(newLocale) {
      this.locale = newLocale;
      this.MenuName =
        this.menus.length > 0
          ? this.menus[0][`name_${newLocale}`] || this.menus[0].name_uz
          : null;

      if (this.activeSubItem) {
        this.fetchPageData(this.activeSubItem, newLocale);
      }
    },
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    slugify(text) {
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    },
    async fetchAllMenusAndFindMatch(menuSlug) {
      try {
        const res = await axios.get(
          "https://new.pochta.uz/api/v1/public/menu-element-items/"
        );
        const allMenus = res.data || [];

        const matchedMenu = allMenus.find(
          (menu) => this.slugify(menu.name_uz) === menuSlug
        );

        if (matchedMenu) {
          this.menus = [matchedMenu];
          this.menuId = matchedMenu.id;
          this.MenuName =
            matchedMenu[`name_${this.locale}`] || matchedMenu.name_uz;
          this.MenuNameUz = matchedMenu.name_uz;
          return true;
        }

        return false;
      } catch (error) {
        console.error("Menyularni yuklashda xatolik:", error);
        return false;
      }
    },
    async fetchPageData(subItemId, locale) {
      try {
        const response = await axios.get(
          `https://new.pochta.uz/api/v1/public/menu-item-pages/${subItemId}/`
        );
        if (response.data) {
          this.pageData = response.data;
          this.serviceText = this.pageData[`text_${locale}`] || "";
        }
      } catch (error) {
        console.error("Sahifa ma'lumotlarini olishda xatolik:", error);
      }
    },
    async handleRouteChange() {
      const { menu, submenu, page } = this.$route.params;

      const found = await this.fetchAllMenusAndFindMatch(menu);
      if (!found) return;

      // submenu aniqlash
      if (submenu) {
        const submenuObj = this.allSubItems.find(
          (item) => this.slugify(item.name_uz) === submenu
        );
        if (submenuObj) {
          this.activeMenu = submenuObj.id;
          this.MenuName =
            submenuObj[`name_${this.locale}`] || submenuObj.name_uz;
        }
      }

      // sahifa aniqlash
      if (page && this.activeMenu) {
        const menuObj = this.allSubItems.find(
          (item) => item.id === this.activeMenu
        );
        const pageObj = menuObj?.pages_id?.find(
          (p) => this.slugify(p.title_uz) === page
        );
        if (pageObj) {
          this.activeSubItem = pageObj.id;
          await this.fetchPageData(pageObj.id, this.locale);
        }
      } else {
        this.pageData = null;
        this.serviceText = "";
      }
    },
    setActiveSubItemAndMenu(menuId, subItemId) {
      const menuObj = this.allSubItems.find((item) => item.id === menuId);
      const pageObj = menuObj?.pages_id?.find((p) => p.id === subItemId);
      if (!menuObj || !pageObj) return;

      this.activeMenu = menuId;
      this.activeSubItem = subItemId;
      this.fetchPageData(subItemId, this.locale);
      this.isSidebarOpen = false;

      // Routerga push qilish (til, menyu, submenu, page bilan)
      this.$router.push({
        name: "headeritem",
        params: {
          lang: this.locale,
          menu: this.slugify(this.menus[0].name_uz),
          submenu: this.slugify(menuObj.name_uz),
          page: this.slugify(pageObj.title_uz),
        },
      });
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

.mobile-menu-toggle {
    padding: 10px;
}

.hamburger-btn {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
}

.hamburger-btn span {
    display: block;
    height: 3px;
    background: #000;
    border-radius: 3px;
}

/* Sidebar menyu */
.mobile-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 270px;
    height: 100vh;
    background: #003b88;
    color: #fff;
    padding: 20px;
    overflow-y: auto;
    z-index: 1000;
}

.sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-btn {
    background: none;
    border: none;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
}

.menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu-item {
    margin-bottom: 15px;
}

.menu-title {
    font-weight: bold;
    cursor: pointer;
}

.submenu-list {
    padding-left: 15px;
    margin-top: 5px;
}

.submenu-item a {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 4px 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}

@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500&display=swap');

.mobile-menu-toggle {
    padding: 10px;
}

.hamburger-btn {
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 24px;
    height: 18px;
    cursor: pointer;
}

.hamburger-btn span {
    display: block;
    height: 3px;
    background-color: #003b88;
    border-radius: 2px;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}

.mobile-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 319px;
    height: 100%;
    background-color: #0D47A1;
    padding: 10px 0;
    overflow-y: auto;
    z-index: 1000;
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
}

.sidebar-header {
    display: flex;
    justify-content: flex-end;
    padding: 0 20px 10px;
}

.close-btn {
    font-size: 28px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
}

/* .menu-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
} */

.menu-item {
    border-bottom: 1px solid #386EC2;
}

.menu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
}

.arrow {
    transition: transform 0.3s;
}

.arrow.rotated {
    transform: rotate(180deg);
}

.submenu {
    display: flex;
    flex-direction: column;
    padding: 5px 0 10px 10px;
    gap: 8px;
}

.submenu-item {
    font-size: 16px;
    color: #E7EDF6;
    cursor: pointer;
}

.mobile-menu-toggle {
    padding: 10px;
}

.hamburger-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    background-color: #003B88;
    /* ko‘k rang */
    border: none;
    border-radius: 4px;
    /* burchaklar */
    cursor: pointer;
}

.hamburger-btn span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #ffffff;
    /* oq chiziq */
    border-radius: 1px;
}

/* Sidebar konteyner */
.mobile-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 319px;
    height: 100%;
    background-color: #003580;
    /* siz aytgan rang */
    padding: 10px 0;
    overflow-y: auto;
    z-index: 1000;
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
}

/* Yopish tugmasi */
.sidebar-header {
    display: flex;
    justify-content: flex-end;
    padding: 0 20px 10px;
}

.close-btn {
    font-size: 28px;
    background: none;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

/* Har bir menyu */
/* .menu-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
} */

.menu-item {
    border-bottom: 1px solid #386EC2;
}

/* Menyu sarlavhasi */
.menu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    position: relative;
}

.menu-title:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
}

/* Strelka */
.arrow {
    display: inline-block;
    transition: transform 0.3s ease;
    font-size: 14px;
    transform: rotate(0deg);
}

.arrow.rotated {
    transform: rotate(180deg);
}

/* Submenu */
.submenu {
    display: flex;
    flex-direction: column;
    padding: 5px 0 10px 10px;
    gap: 8px;
}

.submenu-item {
    font-size: 16px;
    color: #E7EDF6;
    padding: 4px 0;
    cursor: pointer;
}

.submenu-item:hover {
    color: white;
    text-decoration: underline;
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}

.menu-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 20px 10px;
}

/* Har bir menyu elementi */
.menu-item {
    border-bottom: 1px solid #386EC2;
    border-radius: 6px;
    overflow: hidden;
}

/* Faol (ochilgan) menyu */
.menu-item.active {
    background-color: #003580;
}

/* Menyu sarlavhasi */
.menu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 14px;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.menu-title:hover {
    background-color: rgba(255, 255, 255, 0.05);
}

/* Strelka */
.arrow {
    transition: transform 0.3s ease;
    font-size: 16px;
    color: white;
}

.arrow.rotated {
    transform: rotate(180deg);
}

/* Submenyular */
.submenu {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 10px 20px;
    background-color: #00358000;
    animation: fadeIn 0.3s ease;
}

.submenu-item {
    font-size: 16px;
    color: #E7EDF6;
    cursor: pointer;
    padding: 4px 0;
}

.submenu-item:hover {
    color: white;
    text-decoration: underline;
}

/* Faollashtirilgan menyu sarlavhasi */
.menu-item.active .menu-title {
    background-color: #0A4EB0;
}

/* Animatsiya */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-4px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
