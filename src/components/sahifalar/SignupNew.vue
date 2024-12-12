<template>
   <section class="signup__section ralt bg__all pt-120 pb-120">
      <div class="container">
         <div class="row justify-content-between align-items-center">
            <!-- Form qismi -->
            <div class="col-xl-6 col-lg-6">
               <div class="signup__boxes round16 border">
                  <h3 class="title mb-16">Ro'yxatdan o'tish</h3>
                  <p class="fz-16 title fw-400 inter mb-40">
                     Telefon raqamingizni kiriting va SMS orqali tasdiqlang
                  </p>
                  <form @submit.prevent="handleSubmit" class="write__review">
                     <div class="row g-4">
                        <div class="col-lg-12">
                           <div class="frm__grp">
                              <label for="phoneInput" class="fz-18 fw-500 inter title mb-16">
                                 Telefon raqamingiz
                              </label>
                              <div style="display: flex; align-items: center;">
                                 <input v-model="phoneInput" type="text" id="phoneInput"
                                    placeholder="+998 (__) ___ __ __" maxlength="19" @input="formatPhoneInput"
                                    class="form-control" style="width: 60%; margin-right: 10px;" />
                                 <input v-model="smsCode" type="text" id="smsCode" placeholder="_ _ _ _" maxlength="4"
                                    class="form-control" style="width: 20%;" v-if="smsSent" />
                              </div>

                              <p v-if="smsSent" style="font-size: 14px; padding-top: 20px; color: green;">
                                 Raqamga SMS kod yubordik
                              </p>

                              <p v-if="smsSent" class="timer" id="timer">
                                 {{ formattedTimer }}
                              </p>
                           </div>
                        </div>

                        <div v-if="codeVerified" class="col-lg-12">
                           <div class="frm__grp">
                              <label for="nameInput" class="fz-18 fw-500 inter title mb-16">Ismingiz</label>
                              <input v-model="name" type="text" id="nameInput" placeholder="Ismingizni kiriting"
                                 class="form-control" />
                           </div>
                           <div class="frm__grp">
                              <label for="passwordInput" class="fz-18 fw-500 inter title mb-16">Parol</label>
                              <input v-model="password" type="password" id="passwordInput"
                                 placeholder="Parolni kiriting" class="form-control" />
                           </div>
                           <div class="frm__grp">
                              <label for="confirmPasswordInput" class="fz-18 fw-500 inter title mb-16">Parolni
                                 takrorlang</label>
                              <input v-model="confirmPassword" type="password" id="confirmPasswordInput"
                                 placeholder="Parolni qayta kiriting" class="form-control" />
                           </div>
                        </div>

                        <p class="fz-16 fw-400 title inter">
                           Hisobingiz bormi?
                           <a href="singin" class="base">Kirish</a>
                        </p>
                        <div class="col-lg-6" style="width: 300%;">
                           <div class="frm__grp">
                              <button type="submit" class="cmn--btn basebor outline__btn" :disabled="loading">
                                 <span>
                                    {{ smsSent ? (codeVerified ? "Ro'yxatdan o'tish" : "Tasdiqlash") :
                                    "SMSkodiniso'rang" }}
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
                  <img src="assets/img/faq/signup.png" alt="Signup"
                     style="width: 100%; height: 500px; object-fit: cover;" />
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>

import axios from 'axios';

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
      };
   },
   computed: {
      formattedTimer() {
         const minutes = Math.floor(this.timer / 60);
         const seconds = this.timer % 60;
         return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      },
   },
   methods: {
      formatPhoneInput() {
         let value = this.phoneInput.replace(/[^\d]/g, "");
         if (!value.startsWith("998")) {
            value = "998" + value;
         }
         const formatted = `+998 (${value.slice(3, 5)}) ${value.slice(5, 8)} ${value.slice(8, 10)} ${value.slice(10, 13)}`;
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
      handleSubmit() {
         if (!this.smsSent) {
            const phoneNumber = this.phoneInput.replace(/[^\d]/g, "");
            if (phoneNumber.length !== 12) {
               alert("Telefon raqamingizni to'g'ri kiriting!");
               return;
            }
            this.loading = true;
            fetch("https://new.pochta.uz/api/v1/public/register/1/", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ phone_number: phoneNumber.substring(3) }),
            })
               .then((response) => {
                  if (!response.ok) {
                     throw new Error("SMS yuborishda xatolik yuz berdi!");
                  }
                  return response.json();
               })
               .then(() => {
                  this.smsSent = true;
                  this.startTimer();
               })
               .catch((error) => {
                  alert(error.message);
               })
               .finally(() => {
                  this.loading = false;
               });
         } else if (!this.codeVerified) {
            const phoneNumber = this.phoneInput.replace(/[^\d]/g, "").substring(3);
            fetch("https://new.pochta.uz/api/v1/public/register/2/", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ phone_number: phoneNumber, code: this.smsCode }),
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
                  alert(error.message);
               });
         } else {
            if (!this.name || !this.password || !this.confirmPassword) {
               alert("Barcha maydonlarni to'ldiring!");
               return;
            }
            if (this.password !== this.confirmPassword) {
               alert("Parollar bir xil emas!");
               return;
            }

            const phoneNumber = this.phoneInput.replace(/[^\d]/g, "").substring(3);
            this.loading = true;

            // Axios POST so'rovi
            axios.post("https://new.pochta.uz/api/v1/public/register/3/", {
               phone_number: phoneNumber,
               code: this.smsCode,
               password: this.password,
            })
               .then((response) => {
                  const data = response.data;
                  console.log(data)
                  if (data) {
                     window.location.href = "/profil"; // Profil sahifasiga yo'naltirish
                  } else {
                     throw new Error("Token topilmadi yoki noto'g'ri format!");
                  }
               })
               // .then((authResponse) => {
               //    const authData = authResponse.data;
               //    if (authData && authData.data && authData.data.id_token) {
               //       localStorage.setItem("auth_token", authData.data.id_token);
               //       window.location.href = "/profil"; // Profil sahifasiga yo'naltirish
               //    } else {
               //       throw new Error("Kirish uchun token topilmadi!");
               //    }
               // })
               .catch((error) => {
                  alert(error.response?.data?.message || error.message || "Xatolik yuz berdi!");
               })
               .finally(() => {
                  this.loading = false;
               });
         }

      },
   },
   beforeUnmount() {
      if (this.timerInterval) {
         clearInterval(this.timerInterval);
      }
   },
};
</script>

<style>
.signup__section {
   padding-top: 120px;
   padding-bottom: 120px;
}
</style>