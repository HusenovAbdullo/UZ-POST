<template>
   <section class="signup__section ralt bg__all pt-120 pb-120">
      <div class="container">
         <div class="row justify-content-between align-items-center">
            <!-- Form qismi -->
            <div class="col-xl-6 col-lg-6">
               <div class="signup__boxes round16 border">
                  <h3 class="title mb-16">{{ $t('sign_up') }}</h3>
                  <p class="fz-16 title fw-400 inter mb-40">
                     {{ $t('verify_phone') }}
                  </p>
                  <form @submit.prevent="handleSubmit" class="write__review">
                     <div class="row g-4">
                        <div class="col-lg-12">
                           <div class="frm__grp">
                              <label for="phoneInput" class="fz-18 fw-500 inter title mb-16">
                                 {{ $t('phone_number1') }}
                              </label>
                              <div style="display: flex; align-items: center;">
                                 <input v-model="phoneInput" type="text" id="phoneInput" placeholder="+998 __ ___ __ __"
                                    maxlength="19" @input="formatPhoneInput" class="form-control"
                                    style="width: 60%; margin-right: 10px;" />
                                 <input v-model="smsCode" type="text" id="smsCode" placeholder="_ _ _ _" maxlength="4"
                                    class="form-control" style="width: 20%;" v-if="smsSent" />
                              </div>

                              <p v-if="smsSent && !codeVerified"
                                 style="font-size: 14px; padding-top: 20px; color: green;">
                                 {{ $t('sms_sent') }}
                              </p>

                              <p v-if="smsSent && !codeVerified" class="timer" id="timer">
                                 {{ formattedTimer }}
                              </p>
                           </div>

                           <br>


                           <!-- Fake reCAPTCHA qismi -->
                           <div class="fake-recaptcha" v-if="!smsSent">
                              <div class="checkbox-container">
                                 <input type="checkbox" id="fakeCaptchaCheckbox" v-model="termsAccepted" />
                                 <label for="fakeCaptchaCheckbox"
                                    style="color: #000000; display: flex; align-items: center;">
                                    <span class="checkmark"></span> {{ $t('not_robot') }}
                                 </label>
                                 <img src="https://new.pochta.uz/media/re.png" alt="Captcha" class="recaptcha-icon" />

                              </div>
                           </div>


                        </div>



                        <div v-if="codeVerified" class="col-lg-12">
                           <br>
                           <div class="frm__grp">
                              <label for="nameInput" class="fz-18 fw-500 inter title mb-16"
                                 style="margin-bottom: 1px;">{{ $t('your_name') }}</label>
                              <input v-model="name" type="text" id="nameInput" :placeholder="$t('enter_your_name')"
                                 class="form-control" />
                           </div>
                           <br>
                           <div class="frm__grp">
                              <label for="passwordInput" class="fz-18 fw-500 inter title mb-16"
                                 style="margin-bottom: 1px;">{{ $t('password') }}</label>
                              <input v-model="password" type="password" id="passwordInput"
                                 :placeholder="$t('enter_password1')" class="form-control" />
                           </div>
                           <br>
                           <div class="frm__grp">
                              <label for="confirmPasswordInput" class="fz-18 fw-500 inter title mb-16"
                                 style="margin-bottom: 1px;">{{ $t('repeat_password') }}</label>
                              <input v-model="confirmPassword" type="password" id="confirmPasswordInput"
                                 :placeholder="$t('reenter_password')" class="form-control" />
                           </div>
                        </div>
                        <br>

                        <p class="fz-16 fw-400 title inter">
                           {{ $t('have_account1') }}
                           <a href="singin" class="base">{{ $t('login') }}</a>
                        </p>
                        <!-- SMS olish tugmasi -->
                        <div class="col-lg-6" style="width: 300%;">
                           <div class="frm__grp">
                              <button type="button" class="cmn--btn basebor outline__btn" :disabled="loading"
                                 @click="handleSmsRequest">
                                 <span>
                                    {{ smsSent ? (codeVerified ? $t('register') : $t('verify')) : $t('request_sms_code')
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
                  <img src="https://new.pochta.uz/media/signup_1.png" alt="Signup"
                     style="width: 100%; height: 500px; object-fit: cover;" />
               </div>

            </div>
         </div>
      </div>

      <!-- Popup qismi -->
      <div v-if="popupVisible" class="popup">
         <div class="popup-content">
            <p>{{ popupMessage }}</p>
            <button @click="closePopup">{{ $t('close') }}</button>
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
         termsAccepted: false, // Fake reCAPTCHA uchun checkbox holati
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
      showPopup(message) {
         this.popupMessage = message;
         this.popupVisible = true;
         setTimeout(() => {
            this.popupVisible = false;
         }, 3000); // 3 soniyadan keyin yopiladi
      },
      closePopup() {
         this.popupVisible = false;
      },
      formatPhoneInput() {
         let value = this.phoneInput.replace(/[^\d]/g, "");
         if (!value.startsWith("998")) {
            value = "998" + value;
         }
         const formatted = `+998 ${value.slice(3, 5)} ${value.slice(5, 8)} ${value.slice(8, 10)} ${value.slice(10, 13)}`;
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
      handleSmsRequest() {
         if (!this.termsAccepted) {
            this.showPopup(this.$t('accept_terms')); // Tarjima kalitidan foydalaniladi
            return;
         }


         this.handleSubmit(); // SMS olish funksiyasini chaqirish
      },
      handleSubmit() {
         if (!this.smsSent) {
            const phoneNumber = this.phoneInput.replace(/[^\d]/g, "");
            if (phoneNumber.length !== 12) {
               this.showPopup("Telefon raqamingizni to'g'ri kiriting!");
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
                     throw new Error("Bu raqam oldin ro'yxatdan o'tgan!");
                  }
                  return response.json();
               })
               .then(() => {
                  this.smsSent = true;
                  this.startTimer();

                  // SMS kod maydoniga avtomatik fokus
                  this.$nextTick(() => {
                     const smsCodeInput = document.getElementById("smsCode");
                     if (smsCodeInput) {
                        smsCodeInput.focus();
                     }
                  });
               })
               .catch((error) => {
                  this.showPopup(error.message);
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
                  this.showPopup(error.message);
               });
         } else {
            if (!this.name || !this.password || !this.confirmPassword) {
               this.showPopup("Barcha maydonlarni to'ldiring!");
               return;
            }
            if (this.password !== this.confirmPassword) {
               this.showPopup("Parollar bir xil emas!");
               return;
            }

            const phoneNumber = this.phoneInput.replace(/[^\d]/g, "").substring(3);
            this.loading = true;

            axios.post("https://new.pochta.uz/api/v1/public/register/3/", {
               phone_number: phoneNumber,
               first_name: this.name,
               code: this.smsCode,
               password: this.password,
            })
               .then((response) => {
                  const data = response.data;
                  if (data) {
                     window.location.href = "/profil"; // Profil sahifasiga yo'naltirish
                  } else {
                     throw new Error("Token topilmadi yoki noto'g'ri format!");
                  }
               })
               .catch((error) => {
                  this.showPopup(error.response?.data?.message || error.message || "Xatolik yuz berdi!");
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

<style scoped>
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
   padding-bottom: 120px;
}

.fake-recaptcha {
   display: inline-block;
   width: 300px;
   padding: 10px;
   border: 1px solid #d6d6d6;
   border-radius: 5px;
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
   background: #f9f9f9;
   font-family: Arial, sans-serif;
   position: relative;
}

.checkbox-container {
   display: flex;
   align-items: center;
   font-size: 14px;
}

.checkbox-container input[type="checkbox"] {
   width: 20px;
   height: 20px;
   margin-right: 10px;
}

.checkbox-container label {
   cursor: pointer;
   display: flex;
   align-items: center;
}

.captcha-footer {
   font-size: 12px;
   color: #666;
   margin-top: 10px;
   text-align: center;
}

.captcha-footer a {
   color: #0073e6;
   text-decoration: none;
}

.captcha-footer a:hover {
   text-decoration: underline;
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
   background: #183e98;
}

.checkbox-container {
   display: flex;
   align-items: center;
   font-size: 14px;
   justify-content: space-between;
   /* Elementlar orasida masofa qo'shadi */
}

.recaptcha-icon {
   margin-left: 20px;
   /* Yozuv va rasm orasidagi masofa */

   object-fit: contain;
   /* Rasmni nisbatan saqlaydi */
}
</style>
