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
                        <router-link :to="`/${$i18n.locale}${item.url}`"
                           class="footer__title fz-24 fw-600 inter text-white mb-24 d-block">
                           {{ item[`name_${$i18n.locale}`] || item.name_uz }}
                        </router-link>

                        <ul class="quick__link">
                           <li v-for="(link, idx) in item.elements" :key="idx">
                              <template
                                 v-if="link.link_uz && (link.link_uz.startsWith('http://') || link.link_uz.startsWith('https://'))">
                                 <a :href="link.link_uz" target="_blank" class="fz-18 fw-400 inter cef__pra d-block">
                                    {{ link[`name_${$i18n.locale}`] || link.name_uz }}
                                 </a>
                              </template>
                              <template v-else>
                                 <router-link :to="getLink(link)" class="fz-18 fw-400 inter cef__pra d-block"
                                    @click="reloadPage">
                                    {{ link[`name_${$i18n.locale}`] || link.name_uz }}
                                 </router-link>
                              </template>

                           </li>
                        </ul>

                     </div>
                  </div>

                  <!-- Contact Section -->
                  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp item2"
                     style="width: 25%; margin-top: 80px;">
                     <div class="footer__item">
                        <a href="javascript:void(0)" class="footer__title fz-24 fw-600 inter text-white mb-24 d-block">
                           {{ $t('contact_us') }}
                        </a>
                        <ul class="footer__contact">
                           <li>
                              <a href="tel:1165"
                                 class="fz-18 d-flex align-items-center gap-3 fw-400 inter cef__pra d-block">
                                 <i class="bi bi-telephone-plus cmn__icon cmn__icon"></i>
                                 <span>1165</span>
                              </a>
                           </li>

                           <li>
                              <a href="tel:+998712335747"
                                 class="fz-18 d-flex align-items-center gap-3 fw-400 inter cef__pra d-block">
                                 <i class="bi bi-telephone-plus cmn__icon cmn__icon"></i>
                                 <span>+998 (71) 233-57-47</span>
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
                                 <span>{{ $t('address') }}</span>
                              </a>
                           </li>
                        </ul>
                        <br><br><br>
                        <a href="javascript:void(0)" class="footer__title fz-24 fw-600 inter text-white mb-24 d-block">
                           {{ $t('subscribe_us') }}
                        </a>
                        <p class="pfz-18 fw-400 inter cef__pra mb-24">
                           {{ $t('subscribe_info') }}
                        </p>
                        <ul class="social d-flex align-items-center">
                           <li>
                              <a href="https://t.me/uzpostuz">
                                 <i class="bi bi-telegram"></i>
                              </a>
                           </li>
                           <li>
                              <a href="https://instagram.com/uzpost_">
                                 <i class="bi bi-instagram"></i>
                              </a>
                           </li>
                           <li>
                              <a href="https://facebook.com/uzpochta">
                                 <i class="bi bi-facebook"></i>
                              </a>
                           </li>
                           <li>
                              <a href="https://linkedin.com/company/uzpost">
                                 <i class="bi bi-linkedin"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="footer__bottom d-flex align-items-center">
               <p class="fz-16 fw-400 inter text-white">
                  Copyright &copy; 2024 <a href="javascript:void(0)" class="hover"></a> &nbsp; {{ $t('jamiyat') }}<a
                     href="https://chiko.uz" class="base3"></a>
               </p>
               <p><a href="https://t.me/Husenov_Abdullo" style="text-decoration: none; color: #00000000;">A</a></p>
               <ul class="help__support d-flex align-items-center">
                  <li>
                     <router-link to="/savollar" class="text-white fz-16 fw-400 inter">
                        {{ $t('help_support') }}
                     </router-link>

                  </li>
                  <li>

                     <router-link to="/sahifa/5/" class="text-white fz-16 fw-400 inter">
                        {{ $t('privacy_policy') }}
                     </router-link>
                  </li>
                  <li>
                     <!-- <a href="javascript:void(0)" class="text-white fz-16 fw-400 inter">
                        {{ $t('terms_conditions') }}
                     </a> -->
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
            this.footerMenu = response.data;
         })
         .catch(error => {
            console.error('There was an error fetching the footer menu:', error);
         });
   },
   mounted() {
      this.addYandexMetrika();
   },
   methods: {
      
      reloadPage() {
         setTimeout(() => {
            window.location.reload();
         }, 100); // Sahifa o‘tishi uchun 100ms kutish
      },
      getLink(link) {
         // Agar pdf_uz bo'lsa, faqat PDF ochiladi
         const lang = this.$i18n.locale || "uz"; // Tilni aniqlash


         // Agar link_uz bo'lsa, faqat uni qaytarish
         if (link.link_uz) {
            return {
               path: link.link_uz,
               params: { name: link.name_uz },
            };
         }

         // Agar hech biri bo'lmasa, sahifaga yo'naltirish
         return {
            path: `/${lang}/sahifalar/${link.name_uz}`,
            query: { id: link.id },
         };
      },
      addYandexMetrika() {
         if (typeof window.ym === "function") return; // Yandex Metrika allaqachon yuklangan bo‘lsa, qaytish

         const script = document.createElement("script");
         script.type = "text/javascript";
         script.async = true;
         script.src = "https://mc.webvisor.org/metrika/tag_ww.js";
         document.head.appendChild(script);

         script.onload = () => {
            window.ym = window.ym || function() {
               (window.ym.a = window.ym.a || []).push(arguments);
            };
            window.ym(99904912, "init", {
               clickmap: true,
               trackLinks: true,
               accurateTrackBounce: true,
               webvisor: true,
               trackHash: true,
               ecommerce: "dataLayer"
            });
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