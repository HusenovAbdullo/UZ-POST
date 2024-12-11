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
                               <label for="phoneInput" class="fz-18 fw-500 inter title mb-16">Telefon
                                  raqamingiz</label><br>
                               <input style="width: 40%; margin-right: 10px;" type="text" id="phoneInput"
                                  placeholder="+998 (__) ___ __ __" maxlength="19">
                                  <input style="width: 16%;" type="text" id="enamee" placeholder="_ _ _ _">
                               <p style="font-size: 14px; width: 300%; padding-top: 20px;">Raqamga SMS kod yubordik</p>
                               <p id="timer">02:00</p>
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
                   <img src="assets/img/faq/signup.png" alt="img"
                      style="width: 100% !important; height: 500px; object-fit: cover;">
                </div>
             </div>
          </div>
       </div>
    </section>
    <!-- signup section End -->
 
 
 </template>
 <script>
 document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phoneInput');
 
    phoneInput.addEventListener('input', function () {
       let value = phoneInput.value;
 
       // "+998" prefiksini tekshirish va qo'shish
       if (!value.startsWith('+998')) {
          value = '+998' + value.replace(/^\+998/, '');
       }
 
       // Raqamlarni faqat 10 ta bo'lishini ta'minlash
       const digits = value.replace(/\D/g, '').substring(0, 13); // Faqat raqamlarni olamiz
       const formatted = '+998 (' + digits.slice(3, 5) + ') ' + digits.slice(5, 8) + ' ' + digits.slice(8, 10) + ' ' + digits.slice(10, 13);
 
       phoneInput.value = formatted.trim();
    });
 
    // Faqat raqam kiritilishini tekshirish
    phoneInput.addEventListener('keypress', function (e) {
       if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
          e.preventDefault();
       }
    });
 });
 </script>