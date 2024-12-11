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
                        </p>
                        <form action="#0" class="write__review" @submit.prevent="handleLogin">
                            <div class="row g-4 ">
                                <div class="col-lg-12">
                                    <div class="frm__grp">
                                        <label for="phone" class="fz-18 fw-500 inter title mb-16">Telefon raqamingizni
                                            kiriting</label>
                                        <input type="tel" id="phone" v-model="phone_number" placeholder="+998 XX XXX XX XX">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="frm__grp">
                                        <label for="pas" class="fz-18 fw-500 inter title mb-16">Parolingizni
                                            kiriting</label>
                                        <input type="text" id="pas" v-model="password" placeholder="Parolingizni kiriting...">
                                        <a href="#" class="base fz-14 inter d-flex justify-content-end mt-2">Parolni
                                            unutdingizmi?</a>
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
                        <img src="assets/img/faq/signup.png"  alt="img" style="width: 100% !important; height: 500px; object-fit: cover;">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- signup section End -->
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            phone_number: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        async handleLogin() {
            try {
                const response = await axios.post('https://new.pochta.uz/api/v1/public/authenticate/', {
                    phone_number: this.phone_number,
                    password: this.password
                });

                if (response.data.status === 'success') {
                    const token = response.data.data.id_token;
                    // Tokenni saqlash
                    localStorage.setItem('id_token', token);

                    // Saqlangan yo'nalishga o'tish
                    const redirectPath = localStorage.getItem('redirectAfterLogin') || '/'; // Standart - bosh sahifa
                    localStorage.removeItem('redirectAfterLogin'); // Yo'lni tozalash
                    this.$router.push(redirectPath);
                } else {
                    this.errorMessage = 'Login yoki parol noto\'g\'ri.';
                }
            } catch (error) {
                this.errorMessage = 'Login amalga oshmadi. Iltimos, qaytadan urinib ko\'ring.';
            }
        }
    }
};
</script>


<style scoped>
.error-message {
    color: red;
    margin-top: 15px;
}
</style>