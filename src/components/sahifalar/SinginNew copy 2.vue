<template>
    <!-- signup section Here -->
    <section class="signup__section ralt bg__all pt-120 pb-120">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-xl-6 col-lg-6">
                    <div class="signup__boxes round16 border">
                        <h3 class="title mb-16">
                            Kirish
                        </h3>
                        <p class="fz-16 title fw-400 inter mb-40">
                            Quyidagi maydonlarni to'ldirib tizimga kiring.
                        </p>
                        <form action="#0" class="write__review" @submit.prevent="handleLogin">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="frm__grp">
                                        <label for="phone" class="fz-18 fw-500 inter title mb-16">Telefon raqamingizni kiriting</label>
                                        <input type="tel" id="phone" v-model="phone_number" placeholder="+998 XX XXX XX XX">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="frm__grp">
                                        <label for="pas" class="fz-18 fw-500 inter title mb-16">Parolingizni kiriting</label>
                                        <div class="password-wrapper">
                                            <input :type="showPassword ? 'text' : 'password'" id="pas" v-model="password" placeholder="Parolingizni kiriting...">
                                            <button type="button" class="toggle-password" @click="togglePasswordVisibility">
                                                <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                                            </button>
                                        </div>
                                        <a href="#" class="base fz-14 inter d-flex justify-content-end mt-2">Parolni unutdingizmi?</a>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="frm__grp">
                                        <div
                                            class="g-recaptcha"
                                            :data-sitekey="recaptchaSiteKey"
                                        ></div>
                                    </div>
                                </div>
                                <p class="fz-16 fw-400 title inter">
                                    Hisobingiz bormi? <a href="signup" class="base">Ro'yxatdan o'tish</a>
                                </p>
                                <div class="col-lg-6">
                                    <div class="frm__grp">
                                        <button type="submit" class="cmn--btn basebor outline__btn">
                                            <span>
                                                Kirish
                                            </span>
                                            <span>
                                                <i class="bi bi-arrow-up-right"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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
</template>

<script>
/* global grecaptcha */
import axios from 'axios';

export default {
    data() {
        return {
            phone_number: '',
            password: '',
            errorMessage: '',
            recaptchaSiteKey: '6LfqmJgqAAAAAOjd61O2AehiCsfCWZr5xvXlsIM_', // Google ReCaptcha sayt kaliti
            showPassword: false,
        };
    },
    methods: {
        async loadRecaptcha() {
            const script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        async handleLogin() {
            try {
                const recaptchaResponse = grecaptcha.getResponse();
                if (!recaptchaResponse) {
                    this.errorMessage = 'Iltimos, ReCaptcha-ni tasdiqlang.';
                    return;
                }

                const response = await axios.post('https://new.pochta.uz/api/v1/public/authenticate/', {
                    phone_number: this.phone_number,
                    password: this.password,
                    recaptcha_response: recaptchaResponse,
                });

                if (response.data.status === 'success') {
                    const token = response.data.data.id_token;
                    localStorage.setItem('id_token', token);
                    this.$router.push({ name: 'home' });
                } else {
                    this.errorMessage = 'Login yoki parol noto\'g\'ri.';
                }
            } catch (error) {
                this.errorMessage = 'Login amalga oshmadi. Iltimos, qaytadan urinib ko\'ring.';
            }
        },
    },
    mounted() {
        this.loadRecaptcha();
    },
};
</script>

<style scoped>
.error-message {
    color: red;
    margin-top: 15px;
}
.password-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}
.password-wrapper input {
    width: 100%;
    padding-right: 40px;
}
.toggle-password {
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #333;
}
</style>
