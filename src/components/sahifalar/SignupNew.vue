<template>
   <section class="signup__section ralt bg__all pt-120 pb-120">
     <div class="container">
       <div class="row justify-content-between align-items-center">
         <!-- Form qismi -->
         <div class="col-xl-6 col-lg-6">
           <div class="signup__boxes round16 border">
             <h3 class="title mb-16">{{ $t("sign_up") }}</h3>
             <p class="fz-16 title fw-400 inter mb-40">
               {{ $t("verify_phone") }}
             </p>
 
             <form @submit.prevent="handleSubmit" class="write__review">
               <div class="row g-4">
                 <!-- Telefon + SMS + reCAPTCHA + "Hisobingiz bormi?" -->
                 <div class="col-lg-12">
                   <div class="frm__grp">
                     <label
                       for="phoneInput"
                       class="fz-18 fw-500 inter title mb-16"
                     >
                       {{ $t("phone_number1") }}
                     </label>
 
                     <div style="display: flex; align-items: center">
                       <input
                         v-model="phoneInput"
                         type="text"
                         id="phoneInput"
                         placeholder="+998 __ ___ __ __"
                         maxlength="19"
                         @input="formatPhoneInput"
                         class="form-control"
                         style="width: 60%; margin-right: 10px"
                       />
 
                       <input
                         v-model="smsCode"
                         type="text"
                         id="smsCode"
                         placeholder="_ _ _ _"
                         maxlength="4"
                         class="form-control"
                         style="width: 20%"
                         v-if="smsSent"
                       />
                     </div>
 
                     <p
                       v-if="smsSent && !codeVerified"
                       style="font-size: 14px; padding-top: 20px; color: green"
                     >
                       {{ $t("sms_sent") }}
                     </p>
 
                     <p
                       v-if="smsSent && !codeVerified"
                       class="timer"
                       id="timer"
                     >
                       {{ formattedTimer }}
                     </p>
                   </div>
 
                   <!-- Haqiqiy reCAPTCHA v2 checkbox -->
                   <div
                     v-if="!smsSent"
                     class="recaptcha-wrapper"
                     style="margin-top: 12px; margin-bottom: 8px"
                   >
                     <div class="g-recaptcha" :data-sitekey="siteKey"></div>
                   </div>
 
                   <!-- reCAPTCHA ostida darrov "Hisobingiz bormi?" -->
                   <p
                     class="fz-16 fw-400 title inter"
                     style="margin-top: 8px; margin-bottom: 0"
                   >
                     {{ $t("have_account1") }}
                     <a href="singin" class="base">{{ $t("login") }}</a>
                   </p>
                 </div>
 
                 <!-- Kod tasdiqlangandan keyin ochiladigan qism -->
                 <div v-if="codeVerified" class="col-lg-12">
                   <div class="frm__grp" style="margin-top: 20px">
                     <label
                       for="nameInput"
                       class="fz-18 fw-500 inter title mb-16"
                       style="margin-bottom: 1px"
                     >
                       {{ $t("your_name") }}
                     </label>
                     <input
                       v-model="name"
                       type="text"
                       id="nameInput"
                       :placeholder="$t('enter_your_name')"
                       class="form-control"
                     />
                   </div>
 
                   <div class="frm__grp" style="margin-top: 16px">
                     <label
                       for="passwordInput"
                       class="fz-18 fw-500 inter title mb-16"
                       style="margin-bottom: 1px"
                     >
                       {{ $t("password") }}
                     </label>
                     <input
                       v-model="password"
                       type="password"
                       id="passwordInput"
                       :placeholder="$t('enter_password1')"
                       class="form-control"
                     />
                   </div>
 
                   <div class="frm__grp" style="margin-top: 16px">
                     <label
                       for="confirmPasswordInput"
                       class="fz-18 fw-500 inter title mb-16"
                       style="margin-bottom: 1px"
                     >
                       {{ $t("repeat_password") }}
                     </label>
                     <input
                       v-model="confirmPassword"
                       type="password"
                       id="confirmPasswordInput"
                       :placeholder="$t('reenter_password')"
                       class="form-control"
                     />
                   </div>
                 </div>
 
                 <!-- SMS / VERIFY / REGISTER tugmasi -->
                 <div class="col-lg-6" style="width: 300%">
                   <div class="frm__grp">
                     <button
                       type="button"
                       class="cmn--btn basebor outline__btn"
                       :disabled="loading"
                       @click="handleSmsRequest"
                     >
                       <span>
                         {{
                           smsSent
                             ? codeVerified
                               ? $t("register")
                               : $t("verify")
                             : $t("request_sms_code")
                         }}
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
 
         <!-- Rasm qismi -->
         <div class="col-xl-5 col-lg-6">
           <div class="signup__thumb">
             <img
               src="https://new.pochta.uz/media/signup_1.png"
               alt="Signup"
               style="width: 100%; height: 500px; object-fit: cover"
             />
           </div>
         </div>
       </div>
     </div>
 
     <!-- Popup qismi -->
     <div v-if="popupVisible" class="popup">
       <div class="popup-content">
         <p>{{ popupMessage }}</p>
         <button @click="closePopup">{{ $t("close") }}</button>
       </div>
     </div>
   </section>
 </template>
 

<script>
import axios from "axios";

export default {
   data() {
      return {
         phoneInput: "+998",
         smsCode: "",
         name: "",
         password: "",
         confirmPassword: "",
         smsSent: false,
         codeVerified: false,
         timer: 120,
         loading: false,
         timerInterval: null,
         popupVisible: false,
         popupMessage: "",
         // reCAPTCHA v2 site key
         siteKey: "6Ld8RBAsAAAAAA9h4OVX4_05JexEZipB-Ax6kZSM",
      };
   },

   computed: {
      formattedTimer() {
         const minutes = Math.floor(this.timer / 60);
         const seconds = this.timer % 60;
         return `${String(minutes).padStart(2, "0")}:${String(
            seconds
         ).padStart(2, "0")}`;
      },
   },

   methods: {
      showPopup(message) {
         this.popupMessage = message;
         this.popupVisible = true;
         setTimeout(() => {
            this.popupVisible = false;
         }, 3000);
      },

      closePopup() {
         this.popupVisible = false;
      },

      formatPhoneInput() {
         let value = this.phoneInput.replace(/[^\d]/g, "");
         if (!value.startsWith("998")) {
            value = "998" + value;
         }
         const formatted = `+998 ${value.slice(3, 5)} ${value.slice(
            5,
            8
         )} ${value.slice(8, 10)} ${value.slice(10, 13)}`;
         this.phoneInput = formatted.trim();
      },

      startTimer() {
         this.timerInterval = setInterval(() => {
            if (this.timer > 0) {
               this.timer--;
            } else {
               clearInterval(this.timerInterval);
            }
         }, 1000);
      },

      // SMS tugmasi bosilganda
      async handleSmsRequest() {
         if (this.loading) return;

         const rawPhone = this.phoneInput.replace(/[^\d]/g, "");
         if (rawPhone.length !== 12) {
            this.showPopup("Telefon raqamingizni to'g'ri kiriting!");
            return;
         }

         // 1-bosqich: SMS yuborish (reCAPTCHA bilan)
         if (!this.smsSent) {
            try {
               // reCAPTCHA tokenni olamiz
               if (!window.grecaptcha) {
                  this.showPopup("reCAPTCHA yuklanmadi. Sahifani yangilab ko'ring.");
                  return;
               }

               const captchaResponse = window.grecaptcha.getResponse();

               if (!captchaResponse) {
                  // checkbox bosilmagan yoki test tugallanmagan
                  this.showPopup(
                     this.$t("accept_terms") || "Iltimos, reCAPTCHA testini bajaring."
                  );
                  return;
               }

               this.loading = true;

               const response = await fetch(
                  "https://new.pochta.uz/api/v1/public/register/1/",
                  {
                     method: "POST",
                     headers: {
                        "Content-Type": "application/json",
                     },
                     body: JSON.stringify({
                        phone_number: rawPhone.substring(3), // 901234567
                        captcha_token: captchaResponse, // backendga yuboriladigan token
                     }),
                  }
               );

               if (!response.ok) {
                  throw new Error("Bu raqam oldin ro'yxatdan o'tgan!");
               }

               await response.json();

               this.smsSent = true;
               this.startTimer();

               // SMS kod maydoniga fokus
               this.$nextTick(() => {
                  const smsCodeInput = document.getElementById("smsCode");
                  if (smsCodeInput) smsCodeInput.focus();
               });

               // xavfsizlik uchun reset (agar yana kerak bo‘lsa)
               window.grecaptcha.reset();
            } catch (error) {
               this.showPopup(
                  error.message || "SMS yuborishda xatolik yuz berdi!"
               );
            } finally {
               this.loading = false;
            }

            return;
         }

         // 2–3 bosqichlar
         this.handleSubmit();
      },

      // 2-bosqich (kodni tekshirish) va 3-bosqich (ro'yxatdan o'tkazish)
      handleSubmit() {
         if (!this.smsSent) return;

         const phoneNumber = this.phoneInput.replace(/[^\d]/g, "").substring(3);

         // 2-bosqich: SMS kodni tasdiqlash
         if (!this.codeVerified) {
            this.loading = true;

            fetch("https://new.pochta.uz/api/v1/public/register/2/", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  phone_number: phoneNumber,
                  code: this.smsCode,
               }),
            })
               .then((response) => {
                  if (!response.ok) {
                     throw new Error("Kod tasdiqlanmadi, qayta urinib ko'ring!");
                  }
                  return response.json();
               })
               .then(() => {
                  this.codeVerified = true;
               })
               .catch((error) => {
                  this.showPopup(
                     error.message || "Kod tasdiqlashda xatolik yuz berdi!"
                  );
               })
               .finally(() => {
                  this.loading = false;
               });

            return;
         }

         // 3-bosqich: ism + parol bilan ro'yxatdan o'tkazish
         if (!this.name || !this.password || !this.confirmPassword) {
            this.showPopup("Barcha maydonlarni to'ldiring!");
            return;
         }

         if (this.password !== this.confirmPassword) {
            this.showPopup("Parollar bir xil emas!");
            return;
         }

         this.loading = true;

         axios
            .post("https://new.pochta.uz/api/v1/public/register/3/", {
               phone_number: phoneNumber,
               first_name: this.name,
               code: this.smsCode,
               password: this.password,
            })
            .then((response) => {
               const data = response.data;
               if (data) {
                  window.location.href = "/profil";
               } else {
                  throw new Error("Token topilmadi yoki noto'g'ri format!");
               }
            })
            .catch((error) => {
               this.showPopup(
                  error.response?.data?.message ||
                  error.message ||
                  "Xatolik yuz berdi!"
               );
            })
            .finally(() => {
               this.loading = false;
            });
      },
   },

   beforeUnmount() {
      if (this.timerInterval) {
         clearInterval(this.timerInterval);
      }
   },
};
</script>

<style scoped>
.signup__section {
   padding-top: 120px;
   padding-bottom: 120px;
}

.recaptcha-wrapper {
   display: inline-block;
}

.popup {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.5);
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 1000;
}

.popup-content {
   background: #fff;
   padding: 20px;
   border-radius: 10px;
   text-align: center;
   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.popup-content p {
   margin: 0 0 20px;
   font-size: 16px;
}

.popup-content button {
   padding: 10px 20px;
   background: #183e98;
   border: none;
   border-radius: 5px;
   color: #fff;
   cursor: pointer;
   font-size: 16px;
}

.popup-content button:hover {
   background: #001b4e;
}

.signup__section {
  padding-top: 120px;
  padding-bottom: 60px; /* 120 o‘rniga 60 – pastki padidngni kamaytirdik */
}

.recaptcha-wrapper {
  margin-top: 12px;
  margin-bottom: 8px; /* recaptchadan keyingi bo‘sh joy juda katta bo‘lmasin */
}

.has-account-text {
  margin-top: 8px;   /* captcha bilan yaqin bo‘lib turadi */
  margin-bottom: 0;
}

</style>