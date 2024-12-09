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
       <!--Search Popup-->

       <div class="breadcumnd__wrapper">
           <div class="container">
               <div class="profile__wrapper">
                   <div class="row g-4 align-items-center justify-content-between">
                       <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                           <div class="breadcumnd__content">
                               <span class="d4 mb-24">
                                   UzPost filiallari
                               </span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
   <section class="service__grid pt-120 pb-120 sectionbg2">
       <div class="container">
           <div class="row g-4">
               <div class="col-xl-4 col-lg-4">
                   <div class="card__sidebar side__sticky round16">
                       <div class="card__common__item bgwhite round16">
                           <div class="bank__check__wrap pb-24 tborderdash">
                               <h5 class="title mb-16 pt-24">Filiallar</h5>
                               <div v-for="branch in branches" :key="branch.id"
                                   class="d-flex align-items-center justify-content-between">
                                   <div class="bank__checkitem mb-8 d-flex align-items-center">
                                       <label class="form-check-label fz-16 fw-400 ptext2 inter">
                                           {{ branch.title_uz }}
                                       </label>
                                   </div>

                               </div>
                           </div>
                       </div>
                   </div>
               </div>

               <div class="col-xl-8 col-lg-8">
                   <div class="showing__gridlist__body">
                       <div class="tab-content" id="myTabContent">
                           <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                               <div class="row justify-content-center g-4">
                                   <!-- Filiallarni ko'rsatish -->
                                   <div v-for="branch in paginatedBranches" :key="branch.id"
                                       class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                       <div class="service__item shadow2 round16 p-8 bgwhite" style="display: block;">
                                           <a :href="'/filial/' + branch.id" class="thumb round16 w-100">
                                               <img :src="branch.save_image || 'assets/img/default.png'"
                                                   class="round16 w-100" alt="service" />
                                           </a>
                                           <h5 class="mt-24 mb-20">
                                               <router-link :to="'/filial/' + branch.id" class="titley">
                                                   {{ branch.title_uz }}
                                               </router-link>
                                           </h5>
                                           <div
                                               class="d-flex bborderdash pb-20 align-items-center justify-content-between">
                                               <div class="d-flex fz-14 fw-400 gap-2 inter pra align-items-center">
                                                   <i class="bi bi-stopwatch"></i>
                                                   Filialning ish vaqti: <br /> {{ branch.work_time || 'Mavjud emas' }}
                                               </div>
                                           </div>
                                           <div class="d-flex pb-20 align-items-center justify-content-between">
                                               <div class="d-flex fz-14 fw-400 gap-2 inter align-items-center"
                                                   style="color: #0141a2;">
                                                   <i class="bi bi-geo-alt"></i>
                                                   Manzil: <br /> {{ branch.address_uz || 'Mavjud emas' }}
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <!-- Pagination -->
                               <ul class="pagination justify-content-center mt-40">
                                   <li v-if="currentPage > 1" @click="changePage(currentPage - 1)">
                                       <a href="#0"><i class="bi bi-chevron-left base"></i></a>
                                   </li>
                                   <li v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }"
                                       @click="changePage(page)">
                                       <a href="#0">{{ page }}</a>
                                   </li>
                                   <li v-if="currentPage < totalPages" @click="changePage(currentPage + 1)">
                                       <a href="#0"><i class="bi bi-chevron-right base"></i></a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>

</template>

<script>
import axios from "axios"; // Axios kutubxonasini import qilish

export default {
   data() {
       return {
           branches: [], // API'dan kelgan barcha filiallar
           currentPage: 1, // Joriy sahifa raqami
           itemsPerPage: 15, // Har bir sahifadagi elementlar soni
       };
   },
   computed: {
       // Sahifalangan filiallar
       paginatedBranches() {
           const start = (this.currentPage - 1) * this.itemsPerPage;
           const end = start + this.itemsPerPage;
           return this.branches.slice(start, end);
       },
       // Umumiy sahifalar soni
       totalPages() {
           return Math.ceil(this.branches.length / this.itemsPerPage);
       },
   },
   methods: {
       // Sahifani o'zgartirish
       changePage(page) {
           if (page >= 1 && page <= this.totalPages) {
               this.currentPage = page;
           }
       },
       // URL'ni https ga o'zgartirish
       ensureHttps(url) {
           if (url.startsWith("http://")) {
               return url.replace("http://", "https://");
           }
           return url;
       },
   },
   mounted() {
       // API'dan ma'lumotlarni olish
       axios
           .get("https://new.pochta.uz/api/v1/public/branches/")
           .then((response) => {
               this.branches = response.data
                   .filter((branch) => branch.status) // Faqat aktiv filiallarni olish
                   .map((branch) => {
                       // save_image'ni https ga o'zgartirish
                       if (branch.save_image) {
                           branch.save_image = this.ensureHttps(branch.save_image);
                       }
                       return branch;
                   });
           })
           .catch((error) => {
               console.error("API'dan ma'lumotlarni olishda xatolik:", error);
           });
   },
};
</script>
