<template>
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
                           Shaxsiy kabinet
                        </span>
                     </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-5">
                     <div class="logout__btn">
                        <a href="#" class="cmn--logout" @click.prevent="handleLogout">
                           <span>
                              <i class="bi bi-box-arrow-right"></i>
                           </span>
                           <span class="fz-16 fw-600 inter">
                              Kabinetdan chiqish
                           </span>
                        </a>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- Hero Section End -->

   <!-- profile section Here -->
   <section class="profile__section sectionbg pb-120">
      <div class="container">
         <div class="profile__customize">
            <div class="row g-4">
               <div class="col-lg-4">
                  <div class="main__profile__sidebar">
                     <div class="darrell__profile round16 mb-24 border bgwhite">
                        <div class="profile__check ralt">
                           <img src="assets/img/bn/profile.jpg" alt="profile">
                           <i class="bi bi-check"></i>
                        </div>
                        <div class="darrell__content mt-40 text-center">
                           <h4 class="title mb-16">
                              
                           </h4>
                           <!-- <span class="fz-16 fw-400 inter title">
                     Machine Learner
                  </span> -->
                           <ul
                              class="d-flex mt-24 justify-content-center employer__listbase flex-wrap tranding__listbase align-items-center">
                              <li>
                                 <span class="fz-16 fw-400 inter pra">
                                    <i class="bi bi-geo-alt base"></i>
                                    Toshkent
                                 </span>
                              </li>
                              <li class="d-flex gap-2 fz-16 fw-500 inter title">
                                 <i class="bi bi-star-fill ratting"></i>
                                 Index <span class="pra fz-14">100000</span>
                              </li>
                              <!-- <li>
                        <span class="fz-16 fw-400 inter pra">
                           Member: <span class="base">2021</span>
                        </span>
                     </li> -->
                           </ul>
                           <ul class="social justify-content-center mt-30 mb-40 d-flex align-items-center">
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-facebook base"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-instagram base"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-twitter base"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-pinterest base"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-dribbble base"></i>
                                 </a>
                              </li>
                           </ul>
                           <!-- <a href="tahrirlash.html" class="cmn--btn outline__btn">
                        <span>
                           Profilni tahrirlash
                        </span>
                        <span>
                           <i class="bi bi-arrow-up-right"></i>
                        </span>
                     </a> -->
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-8">
                  <div class="create__gigpublist border round16 bgwhite">
                     <div class="nav mb-40 border round16 d-flex align-items-center nav-tabs" role="tablist">
                        <button class="nav-link fz-16 fw-500 pra d-flex align-items-center gap-1 active"
                           id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab"
                           aria-controls="nav-home" aria-selected="true">
                           <i class="bi bi-pencil-square"></i>
                           Profilni tahrirlash
                        </button>
                     </div>
                     <div class="tab-content">
                        <div class="tab-pane base fade show active" id="nav-home" role="tabpanel"
                           aria-labelledby="nav-home-tab">
                           <div class="accordion profile__gigedit" id="accordionExample">
                              <div class="accordion-item mb-40">
                                 <span class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed bborder" type="button"
                                       data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                       aria-controls="collapseOne">
                                       Foydalanuvchi ma'lumotlari
                                    </button>
                                 </span>
                                 <br>
                                 <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne">
                                    <div class="accordion-body">
                                       <!-- <div class="basic__infos mb-24">
                                          <div class="d-flex flex-wrap basic__proadded align-items-center">
                                             <div class="pro__andthumb d-flex align-items-center">
                                                <span class="fz-20 fw-500 inter title">
                                                   Profil Fotosurati
                                                </span>
                                                <div class="pro__photo">
                                                   <img src="assets/img/bn/profile.jpg" alt="frelance">
                                                </div>
                                             </div>
                                             <div class="update__btn d-flex align-items-center">
                                                <a href="javascript:void(0)" class="cmn--btn">
                                                   <span>
                                                      Joylash
                                                   </span>
                                                </a>
                                                <a href="javascript:void(0)" class="cmn--btn outline__btn">
                                                   <span>
                                                      O'chirish
                                                   </span>
                                                </a>
                                             </div>
                                          </div>
                                       </div> -->
                                       <form action="#0" class="row g-4">
                                          <div class="basig__grpinput" style="flex: 0 0 auto; width: 33%;">
                                             <label for="name" class="fz-20 fw-500 inter mb-16 title">F.I.Sh</label>
                                             <input type="text" id="name" placeholder="F.I.Sh ni kiriting">
                                          </div>
                                          <div class="basig__grpinput" style="flex: 0 0 auto; width: 33%;">
                                             <label for="email1s" class="fz-20 fw-500 inter mb-16 title">E-mail:</label>
                                             <input type="text" id="email1s" placeholder="E-mailingizni kiriting">
                                          </div>
                                          <div class="basig__grpinput" style="flex: 0 0 auto; width: 33%;">
                                             <label for="numbr" class="fz-20 fw-500 inter mb-16 title">Telefon
                                                raqam:</label>
                                             <input type="text" id="numbr" placeholder="Telefon raqamingiz">
                                          </div>
                                          
                                          <div class="col-lg-12 ">
                                             <span class="fz-20 fw-500 inter title mb-16 d-block">
                                                Jinsingiz:
                                             </span>
                                             <div class="male__box flex-wrap d-flex align-items-center">
                                                <div class="male__check">
                                                   <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                      id="male" checked>
                                                   <label class="form-check-label fz-18 fw-500 inter title" for="male">
                                                      Erkak
                                                   </label>
                                                </div>
                                                <div class="male__check">
                                                   <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                      id="female">
                                                   <label class="form-check-label fz-18 fw-500 inter title"
                                                      for="female">
                                                      Ayol
                                                   </label>
                                                </div>
                                             </div>
                                          </div>
                                          <!-- <div class="col-lg-12 ">
                                             <span class="fz-20 fw-500 inter title mb-16 d-block">
                                                BIO:
                                             </span>
                                             <select name="text" class="mb-16">
                                                <option value="1">
                                                   Matn Hajmi
                                                </option>
                                                <option value="1">
                                                   14px
                                                </option>
                                                <option value="1">
                                                   16px
                                                </option>
                                                <option value="1">
                                                   18px
                                                </option>
                                             </select>
                                             <div class="write__bios round16 border">
                                                <div class="write__bisofooter">
                                                   <textarea class="contentsss" name="example"
                                                      placeholder="write bio"></textarea>
                                                </div>
                                             </div>
                                             <div class="agry__policy mb-40 mt-24">
                                                <div class="bank__checkitem mb-8 d-flex align-items-center">
                                                   <input class="form-check-input" type="checkbox" id="poli1" checked>
                                                   <label class="form-check-label fz-16 fw-400 ptext2 inter"
                                                      for="poli1">
                                                      Maxfiylik va siyosat shartlariga roziman
                                                   </label>
                                                </div>
                                                <div class="bank__checkitem mb-8 d-flex align-items-center">
                                                   <input class="form-check-input" type="checkbox" id="poli2" checked>
                                                   <label class="form-check-label fz-16 fw-400 ptext2 inter"
                                                      for="poli2">
                                                      Barcha shartlar va qoidalarga roziman
                                                   </label>
                                                </div>
                                             </div>
                                             <div class="d-flex align-items-center gap-4 flex-wrap">
                                                <a href="javascript:void(0)" class="cmn--btn">
                                                   <span>
                                                      Saqlash
                                                   </span>
                                                </a>
                                                <a href="javascript:void(0)" class="cmn--btn outline__btn">
                                                   <span>
                                                      O‘chirish
                                                   </span>
                                                </a>
                                             </div>
                                          </div> -->
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div class="accordion-item mb-40">
                                 <span class="accordion-header" id="headingTwo">
                                    <button class="accordion-button bborder collapsed" type="button"
                                       data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                       aria-controls="collapseTwo">
                                       Manzil
                                    </button>
                                 </span>
                                 <div id="collapseTwo" class="accordion-collapse collapse show"
                                    aria-labelledby="headingTwo">
                                    <div class="accordion-body">
                                       <span class="fz-20 d-block fw-500 inter title mb-16">
                                          Manzil:
                                       </span>
                                       <select name="text" class="mb-16 round16">
                                          <option value="1">
                                             Mamlakatni tanlang
                                          </option>
                                          <option value="1">
                                             Toshkent
                                          </option>
                                          <option value="1">
                                             Buxoro
                                          </option>
                                          <option value="1">
                                             Navoiy
                                          </option>
                                       </select>
                                       <br>
                                       <form action="#0" class="row g-4">
                                          <div class="col-lg-6 basig__grpinput">
                                             <label for="address" class="fz-20 fw-500 inter mb-16 title">Manzil:</label>
                                             <input type="text" id="address" placeholder="Manzilni kiriting">
                                          </div>
                                          <!-- <div class="col-lg-6 basig__grpinput">
                                    <label for="email2s" class="fz-20 fw-500 inter mb-16 title">Address line 2 <span class="pra">(Optional)</span> :</label>
                                    <input type="text" id="email2s" placeholder="Enter adress 2">
                                 </div> -->
                                          <div class="col-lg-12 basig__grpinput">
                                             <label for="numbr2" class="fz-20 fw-500 inter mb-16 title">Pochta
                                                indeksi:</label>
                                             <input type="text" id="numbr2" placeholder="Indeks raqamini kiriting">
                                          </div>
                                          <div class="col-lg-12 mt-40">
                                             <div class="d-flex align-items-center gap-4 flex-wrap">
                                                <a href="javascript:void(0)" class="cmn--btn">
                                                   <span>
                                                      Saqlash
                                                   </span>
                                                </a>
                                                <a href="javascript:void(0)" class="cmn--btn outline__btn">
                                                   <span>
                                                      O‘chirish
                                                   </span>
                                                </a>
                                             </div>
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <!-- <div class="accordion-item mb-40">
                                 <span class="accordion-header" id="headingThree">
                                    <button class="accordion-button bborder collapsed" type="button"
                                       data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                       aria-controls="collapseThree">
                                       Xavfsizlik
                                    </button>
                                 </span>
                                 <div id="collapseThree" class="accordion-collapse collapse show"
                                    aria-labelledby="headingThree">
                                    <div class="accordion-body">
                                       <span class="fz-20 d-block fw-500 mb-16 inter title">
                                          Profil rasmingizni kim ko‘rishi mumkin?
                                       </span>
                                       <select name="text" class="round16">
                                          <option value="1">
                                             Har kim
                                          </option>
                                          <option value="1">
                                             Hech kim
                                          </option>
                                       </select>
                                    </div>
                                 </div>
                              </div> -->
                              <div class="accordion-item">
                                 <span class="accordion-header" id="headingfour">
                                    <button class="accordion-button bborder collapsed" type="button"
                                       data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false"
                                       aria-controls="collapsefour">
                                       Profilingizni o‘chirish
                                    </button>
                                 </span>
                                 <div id="collapsefour" class="accordion-collapse collapse show"
                                    aria-labelledby="headingfour">
                                    <div class="accordion-body">
                                       <p class="fz-16 inter pra mb-16">
                                          Profilingizni o‘chirib tashlaganingizda profil xizmatlaridan foydalana
                                          olmaysiz va biz butunlay
                                          o‘chirib tashlaymiz. O‘chirish jarayonini 14 kun ichida bekor qilishingiz
                                          mumkin.
                                       </p>
                                       <div class="bank__checkitem mb-40 d-flex align-items-center">
                                          <input class="form-check-input" type="checkbox" id="conf" checked>
                                          <label class="form-check-label fz-16 fw-400 ptext2 inter" for="conf">
                                             Profili o‘chirib tashlanishini tasdiqlayman.
                                          </label>
                                       </div>
                                       <a href="javascript:void(0)" class="cmn--btn outline__btn">
                                          <span>
                                             Profili o‘chirish
                                          </span>
                                       </a>
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
      </div>
   </section>
   <!-- profile section End -->
</template>
<script>
export default {
   data() {
      return {
         // Boshqa sahifalar uchun kerakli data qismini shu yerda aniqlang
      };
   },
   methods: {
      handleLogout() {
         // Tokenni mahalliy saqlashdan o'chirish
         localStorage.removeItem('id_token');

         // Bosh sahifaga yo'naltirish
         this.$router.push({ name: 'home' });
      },
      // Boshqa methodlarni shu yerga qo'shing
   }
};


</script>