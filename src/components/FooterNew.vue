<template>
   <div>
      <!-- Footer Section -->
      <footer class="footer__section bgadd">
         <div class="container">
            <div class="footer__top pt-40 pb-40">
               <div class="row2 g-4">
                  <!-- Footer Menu Items -->
                  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 wow fadeInUp item2" style="width: 25%;"
                     v-for="(item, index) in footerMenu" :key="index">
                     <div class="footer__item">
                        <a href="javascript:void(0)" class="footer__title fz-24 fw-600 inter text-white mb-24 d-block">
                           {{ item.name_uz }}
                        </a>
                        <ul class="quick__link">
                           <li v-for="(link, idx) in item.elements" :key="idx">
                              <!-- Agar pdf_uz mavjud bo'lsa -->


                              <!-- Agar faqat link_uz mavjud bo'lsa -->
                              <router-link :to="getLink(link)" class="fz-18 fw-400 inter cef__pra d-block">
                                 {{ link.name_uz }}
                              </router-link>
                           </li>

                        </ul>
                     </div>
                  </div>

                  <!-- Contact Section -->
                  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp item2"
                     style="width: 25%; margin-top: 80px;">
                     <div class="footer__item">
                        <a href="javascript:void(0)" class="footer__title fz-24 fw-600 inter text-white mb-24 d-block">
                           Biz bilan aloqa
                        </a>
                        <ul class="footer__contact">
                           <li>
                              <a href="javascript:void(0)"
                                 class="fz-18 d-flex align-items-center gap-3 fw-400 inter cef__pra d-block">
                                 <i class="bi bi-telephone-plus cmn__icon cmn__icon"></i>
                                 <span>1165 yoki +998 (71) 233-57-47</span>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)"
                                 class="fz-18 d-flex align-items-center gap-3 fw-400 inter cef__pra d-block">
                                 <i class="bi bi-envelope-open cmn__icon"></i>
                                 <span>
                                    <span class="__cf_email__"
                                       data-cfemail="d7beb9b1b897b2afb6baa7bbb2f9b4b8ba">info@pochta.uz</span>
                                 </span>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)"
                                 class="fz-18 d-flex align-items-center gap-3 fw-400 inter cef__pra d-block">
                                 <i class="bi bi-geo-alt cmn__icon"></i>
                                 <span>Yunusobod tumani Oloy 1- ko'cha</span>
                              </a>
                           </li>
                        </ul>
                        <br><br><br>
                        <a href="javascript:void(0)" class="footer__title fz-24 fw-600 inter text-white mb-24 d-block">
                           Bizga obuna bo'ling
                        </a>
                        <p class="pfz-18 fw-400 inter cef__pra mb-24">
                           Bizning eng so'nggi yangiliklarimizdan xabardor bo'lib turish uchun obuna bo'ling
                        </p>
                        <ul class="social d-flex align-items-center">
                           <li>
                              <a href="javascript:void(0)">
                                 <i class="bi bi-facebook"></i>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i class="bi bi-twitter"></i>
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i class="bi bi-telegram"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="footer__bottom d-flex align-items-center">
               <p class="fz-16 fw-400 inter text-white">
                  Copyright &copy; 2024 <a href="javascript:void(0)" class="hover"></a> &nbsp; “O‘zbekiston pochtasi”
                  aksiyadorlik jamiyati<a href="https://chiko.uz" class="base3"></a>
               </p>
               <p><a href="https://t.me/Husenov_Abdullo" style="text-decoration: none; color: #00000000;">A</a></p>
               <ul class="help__support d-flex align-items-center">
                  <li>
                     <a href="javascript:void(0)" class="text-white fz-16 fw-400 inter">
                        Help & Support
                     </a>
                  </li>
                  <li>
                     <a href="javascript:void(0)" class="text-white fz-16 fw-400 inter">
                        Privacy policy
                     </a>
                  </li>
                  <li>
                     <a href="javascript:void(0)" class="text-white fz-16 fw-400 inter">
                        Terms & Conditions
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
      <!-- Footer Section End -->
   </div>
</template>

<script>
import axios from 'axios';

export default {
   data() {
      return {
         footerMenu: []
      };
   },
   created() {
      axios.get('https://new.pochta.uz/api/v1/public/futer-menu/')
         .then(response => {
            console.log('Footer menu:', response.data); // Ma'lumotlarni konsolda ko'rish
            this.footerMenu = response.data;
         })
         .catch(error => {
            console.error('There was an error fetching the footer menu:', error);
         });
   }
   ,
   methods: {
      getLink(link) {
         // Agar pdf_uz bo'lsa, faqat PDF ochiladi


         // Agar link_uz bo'lsa, faqat uni qaytarish
         if (link.link_uz) {
            return {
               path: link.link_uz,
               params: { name: link.name_uz },
            };
         }

         // Agar hech biri bo'lmasa, sahifaga yo'naltirish
         return {
            path: `/sahifalar/${link.name_uz}`,
            query: { id: link.id },
         };
      }
   }


};
</script>

<style scoped>
.row2 {
   display: flex;
   flex-wrap: wrap;
   gap: 16px;
   /* Elementlar orasidagi bo'sh joy */
}

.item2 {
   flex: 1 1 calc(25% - 16px);
   /* 4 ta element uchun kenglik */
   box-sizing: border-box;
}

@media (max-width: 900px) {
   .item2 {
      flex: 1 1 calc(50% - 16px);
      /* 2 ta element uchun kenglik */
   }
}
</style>