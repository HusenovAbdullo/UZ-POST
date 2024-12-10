<template>
    <!-- signup section Here -->
   <section class="signup__section ralt bg__all pt-120 pb-120">
      <div class="container">
         <div class="row justify-content-between align-items-center">
            <div class="col-xl-6 col-lg-6">
               <div class="signup__boxes round16 border">
                  <h3 class="title mb-16">
                    Ro'yxatdan o'tish
                  </h3>
                  <p class="fz-16 title fw-400 inter mb-40">
                  </p>
                  <form action="#0" class="write__review">
                     <div class="row g-4 ">
                        <div class="col-lg-6">
                           <div class="frm__grp">
                              <label for="name" class="fz-18 fw-500 inter title mb-16">Ism</label>
                              <input type="text" id="name" placeholder="">
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="frm__grp">
                              <label for="lname" class="fz-18 fw-500 inter title mb-16">Familiya</label>
                              <input type="text" id="lname" placeholder="">
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <div class="frm__grp">
                              <label for="enamee" class="fz-18 fw-500 inter title mb-16">Telefon raqamingiz</label>
                              <input type="text" id="enamee" placeholder="XX XXX XX XX">
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <div class="frm__grp">
                              <label for="pas" class="fz-18 fw-500 inter title mb-16">Parolingiz</label>
                              <input type="text" id="pas" placeholder="Parolingizni kiriting">
                           </div>
                        </div>
                        <p class="fz-16 fw-400 title inter">
                            Hisobingiz bormi? <a href="singin" class="base">Kirish</a>
                        </p>
                        <div class="col-lg-6" style="width: 300%;">
                           <div class="frm__grp">
                              <button type="submit" class="cmn--btn basebor outline__btn">
                                 <span>
                                    Ro'yxatdan o'tish
                                 </span>
                                 <span>
                                    <i class="bi bi-arrow-up-right"></i>
                                 </span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
            <div class="col-xl-5 col-lg-6">
               <div class="signup__thumb">
                  <img src="assets/img/faq/signup.png" alt="img" style="width: 100% !important; height: 500px; object-fit: cover;">
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- signup section End -->


</template>