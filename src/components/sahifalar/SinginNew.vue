<template>
    <!-- signup section Here -->
    <section class="signup__section ralt bg__all pt-120 pb-120">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-xl-6 col-lg-6">
                    <div class="signup__boxes round16 border">
                        <h3 class="title mb-16">
                            {{ $t('login') }}
                        </h3>
                        <p class="fz-16 title fw-400 inter mb-40">
                            {{ $t('login_prompt') }}
                        </p>
                        <form action="#0" class="write__review" @submit.prevent="handleLogin">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="frm__grp">
                                        <label for="phone" class="fz-18 fw-500 inter title mb-16">{{ $t('enter_phone')
                                        }}</label>
                                        <input type="tel" id="phone" v-model="phone_number" @focus="prependCountryCode"
                                            @input="formatPhone" placeholder="+998 XX XXX XX XX" />
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="col-lg-12">
                                    <div class="frm__grp">
                                        <label for="pas" class="fz-18 fw-500 inter title mb-16">{{ $t('enter_password')
                                        }}</label>
                                        <div class="password-wrapper">
                                            <input :type="showPassword ? 'text' : 'password'" id="pas"
                                                v-model="password" placeholder="">
                                            <button type="button" class="toggle-password"
                                                @click="togglePasswordVisibility">
                                                <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                                            </button>
                                        </div>
                                    </div>


                                    <div class="col-lg-12">
                                        <div class="frm__grp">
                                            <router-link to="/tiklash"
                                                class="base fz-14 inter d-flex justify-content-end mt-2">
                                                {{ $t('reset_password') }}
                                            </router-link>
                                        </div>
                                    </div>




                                </div>
                                <p class="fz-16 fw-400 title inter">
                                    {{ $t('have_account') }} <a href="signup" class="base">{{ $t('sign_up') }}</a>
                                </p>
                                <div class="col-lg-6">
                                    <div class="frm__grp">
                                        <button type="submit" class="cmn--btn basebor outline__btn">
                                            <span>
                                                {{ $t('login') }}
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
                        <img src="https://new.pochta.uz/media/signup.png" alt="img"
                            style="width: 100% !important; height: 500px; object-fit: cover;">
                    </div>

                </div>
            </div>
        </div>

        <!-- Popup Modal -->
        <div class="popup-modal" v-if="showErrorPopup">
            <div class="popup-content">
                <h4>{{ $t('error') }}</h4>
                <p>{{ errorMessage }}</p>
                <button @click="closePopup">{{ $t('close') }}</button>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            phone_number: '',
            password: '',
            errorMessage: '',
            showPassword: false,
            showErrorPopup: false,
        };
    },
    methods: {
        prependCountryCode() {
            if (!this.phone_number.startsWith('+998')) {
                this.phone_number = '+998';
            }
        },
        formatPhone() {
            // Faqat raqam va + belgisi qoldiradi
            this.phone_number = this.phone_number.replace(/[^\d+]/g, '').replace(/\s+/g, '');
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        closePopup() {
            this.showErrorPopup = false;
        },
        async handleLogin() {
            try {
                // Bo‘sh joylarni olib tashlash
                const cleanedPhone = this.phone_number.replace(/\s+/g, '');

                const response = await axios.post('https://new.pochta.uz/api/v1/public/authenticate/', {
                    phone_number: cleanedPhone,
                    password: this.password,
                });

                if (response.data.status === 'success') {
                    const token = response.data.data.id_token;
                    localStorage.setItem('id_token', token);
                    this.$router.push({ name: 'profil' });
                } else {
                    this.errorMessage = 'Login yoki parol noto\'g\'ri.';
                    this.showErrorPopup = true;
                }
            } catch (error) {
                this.errorMessage = this.$t('invalid_login');
                this.showErrorPopup = true;
            }
        },
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

.popup-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.popup-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.popup-content h4 {
    margin-bottom: 15px;
}

.popup-content button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
</style>
