<template>
    <div>
        <!-- Form Section Here -->

        <section class="contact__section sectionbg pt-120 pb-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="contact__wrapper round16 bgwhite">
                            <h3 class="pb-30 bborderdash mb-30 title2">
                                {{ $t("submit_question") }}
                            </h3>
                            <form @submit.prevent="submitForm" class="write__review">
                                <div class="row g-4">
                                    <div class="col-lg-6">
                                        <div class="frm__grp">
                                            <label for="name" class="fz-18 fw-500 inter title mb-16">
                                                {{ $t("applicant") }} <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="name" v-model="form.name"
                                                :placeholder="$t('enter_your_name')" />
                                            <small v-if="errors.name" class="text-danger">
                                                {{ errors.name }}
                                            </small>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="frm__grp">
                                            <label for="email" class="fz-18 fw-500 inter title mb-16">
                                                {{ $t("email") }}
                                            </label>
                                            <input type="email" id="email" v-model="form.email"
                                                :placeholder="$t('email_placeholder')" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="frm__grp">
                                            <label for="phone" class="fz-18 fw-500 inter title mb-16">
                                                {{ $t("phone_number") }} <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="phone" v-model="form.phone"
                                                :placeholder="$t('phone_placeholder')" />
                                            <small v-if="errors.phone" class="text-danger">
                                                {{ errors.phone }}
                                            </small>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="frm__grp">
                                            <label for="file-upload" class="fz-18 fw-500 inter title mb-16">
                                                {{ $t("file") }}
                                            </label>
                                            <input type="file" id="file-upload" @change="handleFileUpload" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="frm__grp">
                                            <label class="fz-18 fw-500 inter title mb-16">
                                                {{ $t("message_text") }} <span class="text-danger">*</span>
                                            </label>
                                            <textarea v-model="form.message" cols="30" rows="5"
                                                :placeholder="$t('message_placeholder')"></textarea>
                                            <small v-if="errors.message" class="text-danger">
                                                {{ errors.message }}
                                            </small>
                                        </div>
                                    </div>
                                    <div class="frm__grp mt-30">
                                        <button type="submit" class="cmn--btn">
                                            <span>{{ $t("submit_button") }}</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Popup Modal -->
            <div v-if="showPopup" class="popup-overlay">
                <div class="popup-content">
                    <p>{{ $t('form_submitted_successfully') }}</p>
                    <button @click="closePopup" class="cmn--btn">
                        OK
                    </button>
                </div>
            </div>
            <!-- Popup Modal End -->

        </section>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                phone: "",
                file: null,
                message: "",
            },
            errors: {
                name: null,
                phone: null,
                message: null,
            },
            showPopup: false,
        };
    },
    methods: {
        handleFileUpload(event) {
            this.form.file = event.target.files[0];
        },
        validateForm() {
            this.errors = {
                name: null,
                phone: null,
                message: null,
            };
            let valid = true;

            if (!this.form.name) {
                this.errors.name = this.$t("enter_your_name") + " is required.";
                valid = false;
            }
            if (!this.form.phone) {
                this.errors.phone = this.$t("phone_placeholder") + " is required.";
                valid = false;
            }
            if (!this.form.message) {
                this.errors.message = this.$t("message_placeholder") + " is required.";
                valid = false;
            }

            return valid;
        },
        async submitForm() {
            if (!this.validateForm()) return;

            const formData = new FormData();
            formData.append("full_name", this.form.name);
            formData.append("phone_number", this.form.phone);
            formData.append("email", this.form.email);
            formData.append("file", this.form.file);
            formData.append("description", this.form.message);

            try {
                await axios.post(
                    "https://new.pochta.uz/api/v1/public/userrequests/",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                this.showPopup = true;
            } catch (error) {
                alert(this.$t("form_submission_failed"));
            }
        },
        closePopup() {
            this.showPopup = false;
        },
    },
};
</script>

<style>
.text-danger {
    color: red;
}

.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.popup-content p {
    margin-bottom: 20px;
    font-size: 16px;
}
</style>