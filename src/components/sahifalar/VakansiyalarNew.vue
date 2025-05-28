<template>
    <!-- Hero Sections Here -->
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
                <div class="profile__wrappers post__requestwrapper pt-100 pb-20">
                    <div class="row g-4 align-items-center justify-content-between">
                        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                            <div class="breadcumnd__content">
                                <span class="d41 mb-24">
                                    Vakansiyalar
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->
    <!-- description body Section Here -->
    <section v-if="!showFormPage" class="postrequest__section pt-120 pb-120">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="overview__gitwrapper bgwhite round16 border">
                        <h2 class="pb-40 bborderdash mb-40 title2">
                            Ochiq vakansiyalar
                        </h2>
                        <h3 class="pb-40 bborderdash mb-40 title2">
                            O‘zingizga qiziq bo‘lgan vakansiyani tanlang va rezyumeingizni qoldiring
                        </h3>
                        <div v-for="(vacancy, index) in vacancies" :key="index"
                            class="natural__language round16 border mb-3">
                            <div class="bank__checkitem natural__item d-flex align-items-center">
                                <label class="form-check-label" style="width: 100% !important;">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span class="fz-20 fw-600 inter pra">
                                            {{
                                                locale === 'ru' ? vacancy.select_vacancy.title_ru :
                                                    locale === 'en' ? vacancy.select_vacancy.title_en ??
                                                        vacancy.select_vacancy.title_ru :
                                                        vacancy.select_vacancy.title_uz
                                            }}
                                        </span>
                                        <p class="title2 mb-0 text-end">
                                            {{ vacancy.select_vacancy.price.toLocaleString() }}&nbsp;so'm
                                        </p>

                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex gap-4" style="color: #183e98;">
                                            <span class="fw-600" v-for="(exp, idx) in vacancy.work_experience"
                                                :key="idx">
                                                {{
                                                    locale === 'ru' ? exp.name_ru :
                                                        locale === 'en' ? exp.name_en :
                                                            exp.name_uz
                                                }}
                                            </span>
                                        </div>
                                        <button class="cmn--btn" style="background-color: #0D47A1;"
                                            @click="openModal(vacancy.id)">
                                            <span>Batafsil</span>
                                        </button>

                                    </div>
                                </label>
                            </div>
                        </div>
                        <ul class="pagination justify-content-center mt-40">
                            <li v-if="currentPage > 1" @click.prevent="changePage(currentPage - 1)">
                                <a href="javascript:void(0)"><i class="bi bi-chevron-left base"></i></a>
                            </li>
                            <li v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }"
                                @click.prevent="changePage(page)">
                                <a href="javascript:void(0)">{{ page }}</a>
                            </li>
                            <li v-if="currentPage < totalPages" @click.prevent="changePage(currentPage + 1)">
                                <a href="javascript:void(0)"><i class="bi bi-chevron-right base"></i></a>
                            </li>
                        </ul>
                    </div>
                    <br>
                    <br>
                </div>
                <div class="col-lg-a">
                    <div class="start__definingbar">
                        <div class="card__sidebar side__sticky round16">
                            <div class="card__common__item bgwhite round16">
                                <h4 class="head fw-600  title mb-24" style="font-size: 28px;">
                                    Filtr
                                </h4>
                                <div class="bank__check__wrap tborderdash pb-24">
                                    <h5 class="title mb-16 pt-20">Mintaqa</h5>

                                    <!-- Viloyatlar ro'yxati -->
                                    <div v-for="region in filteredRegions" :key="region.id" class="mb-3">
                                        <div class="d-flex align-items-center justify-content-between"
                                            @click="selectRegion(region.id)">
                                            <div class="bank__checkitem mb-8 d-flex align-items-center">
                                                <input class="form-check-input" type="radio" :id="'region-' + region.id"
                                                    :value="region.id" :checked="selectedRegionId === region.id"
                                                    @click="toggleRegion(region.id)" name="region">

                                                <label class="form-check-label fz-16 fw-400 ptext2 inter"
                                                    :for="'region-' + region.id">
                                                    {{ region.branch_name }}
                                                </label>

                                            </div>
                                            <span class="fw-500 inter fz-16 pra">
                                                {{ region.vacancies_count }}
                                            </span>
                                        </div>

                                        <!-- Filiallar -->
                                        <div v-if="selectedRegionId === region.id" class="ms-4">
                                            <div v-for="pub in filteredPubs" :key="pub.id" class="mb-2">
                                                <div class="d-flex align-items-center justify-content-between mb-1"
                                                    @click.stop="selectPub(pub.id)">
                                                    <div class="bank__checkitem mb-8 d-flex align-items-center">
                                                        <input class="form-check-input" type="radio"
                                                            :id="'pub-' + pub.id" :value="pub.id"
                                                            :checked="selectedPubId === pub.id"
                                                            @click="togglePub(pub.id)" name="pub">

                                                        <label class="form-check-label fz-16 fw-400 ptext2 inter"
                                                            :for="'pub-' + pub.id">
                                                            {{ pub.name_uz }}
                                                        </label>
                                                    </div>
                                                    <span class="fw-500 inter fz-16 pra">
                                                        {{ pub.vacancy_count ?? 0 }}
                                                    </span>
                                                </div>

                                                <!-- Ichki bo‘linmalar pastda chiqadi -->
                                                <div v-if="selectedPubId == pub.id" class="ms-4">
                                                    <div v-for="internal in filteredInternals" :key="internal.id"
                                                        class="d-flex align-items-center mb-1">
                                                        <div class="bank__checkitem mb-8 d-flex align-items-center">
                                                            <input class="form-check-input" type="radio"
                                                                :id="'internal-' + internal.id" :value="internal.id"
                                                                :checked="selectedInternal === internal.id"
                                                                @click="toggleInternal(internal.id)" name="internal">

                                                            <label class="form-check-label fz-14 fw-400 ptext2 inter"
                                                                :for="'internal-' + internal.id">
                                                                {{ internal.name_uz }}
                                                            </label>
                                                        </div>
                                                        <!-- <span class="fw-500 inter fz-16 pra">
                                                            {{ internal.vacancy_count ?? 0 }}
                                                        </span> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>




                                <div class="bank__check__wrap pb-24 tborderdash">
                                    <h5 class="title mb-16 pt-24">
                                        Ish tajribasi
                                    </h5>
                                    <div v-for="(item, index) in experiences" :key="index"
                                        class="d-flex align-items-center justify-content-between">
                                        <div class="bank__checkitem mb-8 d-flex align-items-center">
                                            <input class="form-check-input" type="radio" :id="'experience' + index"
                                                name="experience" v-model="selectedExperience" :value="item.id">
                                            <label class="form-check-label fz-16 fw-400 ptext2 inter"
                                                :for="'experience' + index">
                                                {{
                                                    locale === 'ru' ? item.name_ru :
                                                        locale === 'en' ? item.name_en :
                                                            item.name_uz
                                                }}
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="bank__check__wrap pb-24 tborderdash">
                                    <h5 class="title mb-16 pt-24">
                                        Bo'lim
                                    </h5>
                                    <div v-for="(section, index) in sections" :key="index"
                                        class="d-flex align-items-center justify-content-between">
                                        <div class="bank__checkitem mb-8 d-flex align-items-center">
                                            <input class="form-check-input" type="radio" :id="'section' + index"
                                                name="section" v-model="selectedSection" :value="section.id">
                                            <label class="form-check-label fz-16 fw-400 ptext2 inter"
                                                :for="'section' + index">
                                                {{
                                                    locale === 'ru' ? section.name_ru :
                                                        locale === 'en' ? section.name_en :
                                                            section.name_uz
                                                }}
                                            </label>
                                        </div>
                                        <span class="fw-500 inter fz-16 pra">
                                            {{ section.vacancies_count }}
                                        </span>
                                    </div>
                                </div>


                                <div class="d-flex gap-2 mt-3">
                                    <a href="#0" @click.prevent="applyFilter" class="btn-filter btn-apply">
                                        Qo‘llash
                                    </a>

                                    <a href="#0" @click.prevent="clearAllFilters" class="btn-filter btn-clear">
                                        Tozalash
                                    </a>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section v-if="step === 2 && showFormPage" class="postrequest__section pt-120 pb-120">

        <div class="container">
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="overview__gitwrapper bgwhite round16 border">
                        <h3 class="pb-40 bborderdash mb-40 title2">
                            Ariza to'ldirish
                        </h3>
                        <span class="fz-20  title inter mb-10 d-block">
                            F.I.Sh
                        </span>
                        <p class="fz-14 title mb-24 inter">
                            Familiyangiz, ism-sharifingizni kiriting
                        </p>
                        <input v-model="resumeData.fish"
                            :class="['addquestion mb-30 rad4', fishError ? 'input-error' : '']" placeholder="F.I.Sh" />

                        <span class="fz-20  title inter mb-10 d-block">
                            O'zingiz haqingizda qisqacha ma'lumot qoldiring
                        </span>
                        <p class="fz-14 title mb-24 inter">
                            Ma'lumotingiz, tajribangiz, shaxsiy yutuqlaringiz va boshqalar.
                        </p>
                        <div class="bio-box"
                            style="margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px; padding: 10px;">
                            <textarea v-model="resumeData.description" name="bio" placeholder="Matn yozing"
                                style="width: 100%; height: 100px;"></textarea>
                        </div>

                        <span class="fz-20 mt-30 fw-500 inter d-block title mb-10">
                            Rezyumeni yuklang
                        </span>
                        <p class="fz-16 fw-400 mb-24 inter pra">
                            · Maksimal 50 MB hajmli 5 tagacha fayl biriktiring
                        </p>
                        <div class="row">
                            <div class="col-lg-4">
                                <!-- Fayl tanlash inputi -->
                                <label for="cv-upload" class="image__upbox d-block text-center round16 border"
                                    style="cursor: pointer;">
                                    <img src="https://new.pochta.uz/media/imgs.png" class="mb-3" alt="img">
                                    <span class="fz-14 d-block inter pra mb-2">
                                        Faylni yuklash
                                    </span>
                                </label>
                                <input id="cv-upload" type="file" @change="onFileChange" style="display: none;" />
                            </div>
                        </div>
                        <span class="fz-12 ralt aiquestion__text text-center d-block fw-400 mt-40 mb-40 inter pra">
                            <span class="aiquestion">
                                {{ resumeData.cv ? resumeData.cv.name : '' }}
                            </span>
                        </span>

                        <div class="btn__grp d-flex align-items-center gap-4 flex-wrap">
                            <button class="cmn--btn" @click="goToContactStep">
                                <span>Saqlash</span>
                            </button>


                            <a href="/vakansiyalar" class="cmn--btn outline__btn">
                                <span>
                                    Bekor qilish
                                </span>
                            </a>


                        </div>
                    </div>
                </div>
                <div class="col-lg-a">
                    <div class="start__definingbar">
                        <div class="defining__box round16 border bgwhite">
                            <h3 class="title2 mb-24">
                                Keling tanishaylik!
                            </h3>
                            <div class="man__matching">
                                <img src="https://new.pochta.uz/media/matching.png" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section v-if="step === 3" class="overview__gallery__section pt-120 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="contact__wrapper round16 bgwhite">
                        <h2 class="pb-30 bborderdash mb-30 title2">
                            Bog'lanish uchun kontakt ma'lumotlaringizni qoldiring
                        </h2>
                        <form action="#0" class="write__review">
                            <div class="row g-4">
                                <div class="col-lg-d">
                                    <div class="frm__grp">
                                        <label for="phone1" class="fz-18 fw-500 inter title mb-16">Telefon raqam</label>
                                        <input v-model="resumeData.phone_number"
                                            :class="['form-control', phoneError ? 'input-error' : '']" type="text"
                                            id="phone1" placeholder="Telefon raqamingizni kiriting" />

                                    </div>
                                </div>

                                <div class="col-lg-d">
                                    <div class="frm__grp">
                                        <label for="phone2" class="fz-18 fw-500 inter title mb-16">Telefon raqam
                                            (qo'shimcha)</label>
                                        <input v-model="resumeData.additional_phone_number"
                                            :class="['form-control', additionalPhoneError ? 'input-error' : '']"
                                            type="text" id="phone2" placeholder="Telefon raqamingizni kiriting" />

                                    </div>
                                </div>

                                <div class="divider">
                                    <span>Qo‘shimcha ravishda</span>
                                </div>

                                <div class="col-lg-d">
                                    <div class="frm__grp">
                                        <label for="email" class="fz-18 fw-500 inter title mb-16">E-mail</label>
                                        <input v-model="resumeData.email" type="text" id="email"
                                            placeholder="Email manzilingizni kiriting...">
                                    </div>
                                </div>

                                <div class="btn__grp d-flex align-items-center gap-4 flex-wrap">
                                    <button class="cmn--btn" @click.prevent="submitForm">
                                        <span>Saqlash va jo‘natish</span>
                                    </button>

                                    <button class="cmn--btn outline__btn" @click.prevent="step = 2">
                                        <span>Ortga qaytish</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section v-if="step === 4" class="banner__breadcumn ralt">
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
                <div class="profile__wrappers post__requestwrapper pt-100 pb-100">
                    <div class="row g-4 align-items-center justify-content-between">
                        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                            <div class="breadcumnd__content">
                                <span class="d41 mb-24">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--post request-->
        <div class="overview__showcase ralt">
            <div>
                <div>
                    <div class="container">
                        <div class="overview__showcasewrap1  row justify-content-center  post__requestwrap">
                            <div class="col-lg-8">
                                <div class="contact__wrapper round16 bgwhite">

                                    <div class="center" style="margin-top: -80px;">
                                        <img src="https://new.pochta.uz/media/123.svg" alt="SVG rasm" width="100"
                                            height="100">
                                        <br>
                                        <br>
                                        <br>
                                        <br>
                                        <h3 class="pb-30 mb-30 title2">
                                            Tez orada UzPost mas'ul xodimlari siz bilan bog'lanishlari mumkin.
                                        </h3>
                                        <br>
                                        <h3 class="pb-30 bborderdash mb-30 title2">
                                        </h3>
                                        <br>
                                        <br>
                                        <button class="cmn--btn outline__btn" @click="goToVacancyPage">
                                            <span>
                                                <i class="fa fa-arrow-left" style="margin-right: 5px;"></i>
                                                Vakansiyalar
                                            </span>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </section>





    <div v-if="showModal" class="modal-backdrop">
        <div class="modal-content">
            <button class="close-button" @click="showModal = false">&times;</button>
            <h3 class="pb-40 bborderdash mb-40 title2">
                {{
                    locale === 'ru' ? modalData.vacancy.select_vacancy.title_ru :
                        locale === 'en' ? (modalData.vacancy.select_vacancy.title_en ||
                            modalData.vacancy.select_vacancy.title_ru) :
                            modalData.vacancy.select_vacancy.title_uz
                }}
            </h3>
            <p class="bborderdash" v-html="locale === 'ru' ? modalData.vacancy.select_vacancy.text_ru :
                locale === 'en' ? modalData.vacancy.select_vacancy.text_en :
                    modalData.vacancy.select_vacancy.text_uz"></p>
            <div class="d-flex flex-wrap gap-5 mt-3">
                <!-- Chap ustun -->
                <div class="left-col">
                    <p class="title2 mb-0">Maosh: {{ modalData.vacancy.select_vacancy.price.toLocaleString() }} so'm</p>
                    <p class="title2 mb-0">Bo‘lim: {{ modalData.vacancy.section.name_uz }}</p>
                    <p class="title2 mb-0">Tajriba: {{ modalData.vacancy.work_experience[0].name_uz }}</p>
                </div>
                <!-- O‘ng ustun: filiallar checkbox bilan -->
                <div class="right-col">
                    <p class="title">Filialni tanlang</p>
                    <div v-for="(branch, index) in modalData.filials" :key="index"
                        class="d-flex align-items-center justify-content-between">
                        <div class="bank__checkitem mb-8 d-flex align-items-center">
                            <input class="form-check-input" type="radio" name="branch" :id="'branch-' + index"
                                v-model="selectedBranch" :value="branch.branch_name" />
                            <label class="form-check-label fz-16 fw-400 ptext2 inter" :for="'branch-' + index">
                                {{ branch.branch_name }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <div class="btn__grp d-flex align-items-center gap-4 flex-wrap">
                <button class="cmn--btn" :disabled="!selectedBranch"
                    :style="{ pointerEvents: selectedBranch ? 'auto' : 'none', opacity: selectedBranch ? 1 : 0.5 }"
                    @click="handleContinue">
                    <span>Saqlash va davom etish</span>
                </button>


                <a href="javascript:void(0)" class="cmn--btn outline__btn" @click="x">
                    <span>Bekor qilish</span>
                </a>

            </div>
        </div>
    </div>
    <!-- description body Section End -->
</template>
<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const selectedBranch = ref(null)
const selectedBranchId = ref(null)
const selectedVacancyId = ref(null)
const modalData = ref(null)
const showModal = ref(false)
const showFormPage = ref(false)
const step = ref(2)
const phoneError = ref(false)
const additionalPhoneError = ref(false)
const fishError = ref(false)

// Form data
const resumeData = reactive({
    fish: '',
    description: '',
    cv: null,
    phone_number: '',
    additional_phone_number: '',
    email: ''
})

const x = () => {
    console.log("Bekor qilish tugmasi bosildi");
    // kerakli logika shu yerga yoziladi
    // masalan, modalni yopish:
    showModal.value = false
}


// Fayl yuklash
const onFileChange = (event) => {
    const file = event.target.files[0]
    resumeData.cv = file
}

// Scroll to top
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Modalni davom ettirish
const handleContinue = () => {
    if (selectedBranch.value) {
        const branch = modalData.value?.filials?.find(f => f.branch_name === selectedBranch.value)
        selectedBranchId.value = branch?.id
        selectedVacancyId.value = modalData.value?.vacancy?.select_vacancy?.id
        showModal.value = false
        showFormPage.value = true
        scrollToTop()
    }
}

// Ariza bosqichi
const goToContactStep = () => {
    if (!resumeData.fish.trim()) {
        fishError.value = true
        return
    }
    fishError.value = false
    step.value = 3
    scrollToTop()
}

// Formani yuborish
const submitForm = async () => {
    phoneError.value = !resumeData.phone_number.trim()
    additionalPhoneError.value = !resumeData.additional_phone_number.trim()
    if (phoneError.value || additionalPhoneError.value) return

    try {
        const formData = new FormData()
        formData.append('fish', resumeData.fish)
        formData.append('description', resumeData.description)
        if (resumeData.cv) {
            formData.append('cv', resumeData.cv)
        }
        formData.append('phone_number', resumeData.phone_number)
        formData.append('additional_phone_number', resumeData.additional_phone_number)
        formData.append('email', resumeData.email)

        const res = await fetch(
            `https://new.pochta.uz/api/v1/public/post/resume/${selectedVacancyId.value}/${selectedBranchId.value}/`,
            { method: 'POST', body: formData }
        )
        if (!res.ok) throw new Error('Xatolik yuz berdi')
        step.value = 4
        scrollToTop()
    } catch (err) {
        alert('Yuborishda xatolik: ' + err.message)
    }
}

// Sahifaga qaytish
const goToVacancyPage = () => {
    window.location.href = '/vakansiyalar'
}

// Filtrlar va ma’lumotlar
const regions = ref([])
const pubs = ref([])
const internals = ref([])
const experiences = ref([])
const sections = ref([])
const vacancies = ref([])
const currentPage = ref(1)
const totalPages = ref(1)

const selectedExperience = ref(null)
const selectedSection = ref(null)
const selectedRegionId = ref(null)
const selectedPubId = ref(null)
const selectedInternal = ref(null)

const filteredRegions = computed(() => regions.value.filter(r => (r.vacancies_count ?? 0) > 0))
const filteredPubs = computed(() => pubs.value.filter(p => (p.vacancy_count ?? 0) > 0))
const filteredInternals = computed(() => internals.value.filter(i => (i.vacancy_count ?? 0) > 0))

// Filtrlarni tozalash
const clearAllFilters = async () => {
    selectedRegionId.value = null
    selectedPubId.value = null
    selectedInternal.value = null
    selectedExperience.value = null
    selectedSection.value = null
    await fetchVacancies(1)
    scrollToTop()
}

// Filtrlash
const applyFilter = async () => {
    const params = new URLSearchParams()

    if (selectedInternal.value) {
        params.append('internal_pub_id', selectedInternal.value)
    } else if (selectedPubId.value) {
        params.append('pub_id', selectedPubId.value)
    } else if (selectedRegionId.value) {
        params.append('employer_id', selectedRegionId.value)
    }

    if (selectedSection.value) params.append('section_id', selectedSection.value)
    if (selectedExperience.value) params.append('work_experience_id', selectedExperience.value)

    try {
        const res = await fetch(`https://new.pochta.uz/api/v1/public/vacancies/?${params.toString()}`)
        const data = await res.json()
        vacancies.value = data.results
        totalPages.value = data.total_pages
        currentPage.value = 1
        scrollToTop()
    } catch (error) {
        console.error("Filtrda xatolik:", error)
    }
}

// Viloyatlarni yuklash
const fetchRegions = async () => {
    try {
        const res = await fetch('https://new.pochta.uz/api/v1/public/employers/')
        regions.value = await res.json()
    } catch (err) {
        console.error('Viloyatlarni olishda xatolik:', err)
    }
}

// Filial va ichki bo‘linmalar
const selectRegion = async (regionId) => {
    selectedRegionId.value = regionId
    selectedPubId.value = null
    try {
        const res = await fetch(`https://new.pochta.uz/api/v1/public/pubs/${regionId}/`)
        pubs.value = await res.json()
        internals.value = []
    } catch (err) {
        console.error('Filiallarni olishda xatolik:', err)
    }
}

const selectPub = async (pubId) => {
    selectedPubId.value = pubId
    try {
        const res = await fetch(`https://new.pochta.uz/api/v1/public/internal/pubs/${pubId}/`)
        const data = await res.json()
        internals.value = Array.isArray(data) ? data : []
    } catch (err) {
        console.error('Ichki bo‘linmalarni olishda xatolik:', err)
        internals.value = []
    }
}

// Togglelar
const togglePub = (id) => {
    selectedPubId.value = selectedPubId.value === id ? null : id
    selectedInternal.value = null
}

const toggleRegion = (id) => {
    selectedRegionId.value = selectedRegionId.value === id ? null : id
    selectedPubId.value = null
    selectedInternal.value = null
}

const toggleInternal = (id) => {
    selectedInternal.value = selectedInternal.value === id ? null : id
}

// Modalni ochish
const openModal = async (id) => {
    try {
        const res = await fetch(`https://new.pochta.uz/api/v1/public/vacancies/${id}/`)
        modalData.value = await res.json()
        selectedVacancyId.value = modalData.value.vacancy.select_vacancy.id
        showModal.value = true
    } catch (err) {
        console.error('Modal ochishda xatolik:', err)
    }
}

// Barcha ma’lumotlarni yuklash
const fetchData = async () => {
    try {
        const expRes = await fetch('https://new.pochta.uz/api/v1/public/experience/')
        experiences.value = await expRes.json()

        const secRes = await fetch('https://new.pochta.uz/api/v1/public/sections/')
        sections.value = await secRes.json()

        await fetchRegions()
        await fetchVacancies(currentPage.value)
    } catch (error) {
        console.error('Maʼlumotlarni olishda xatolik:', error)
    }
}

// Sahifalash
const fetchVacancies = async (page) => {
    try {
        const res = await fetch(`https://new.pochta.uz/api/v1/public/vacancies/?page=${page}`)
        const data = await res.json()
        vacancies.value = data.results
        totalPages.value = data.total_pages
    } catch (error) {
        console.error('Vakansiyalarni olishda xatolik:', error)
    }
}

const changePage = (page) => {
    if (page < 1 || page > totalPages.value) return
    currentPage.value = page
    fetchVacancies(page)
    scrollToTop() // ← Sahifaning yuqorisiga qaytarish
}

onMounted(fetchData)
</script>



<style scoped>
.badge {
    padding: 4px 10px;
    font-size: 13px;
    border-radius: 5px;
    background-color: #eee;
    display: inline-block;

}

.gap-4>*+* {
    margin-left: 1.5rem;

}

.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
}

.left-col,
.right-col {
    flex: 1 1 45%;
}

.input-error {
    border: 1px solid red !important;
    background-color: #ffe6e6;
}

.btn-filter {
    flex: 1;
    text-align: center;
    padding: 8px 12px;
    font-weight: 600;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
}

.btn-apply {
    background-color: white;
    color: #0D47A1;
    border: 1px solid #0D47A1;
}

.btn-clear {
    background-color: #f07824;
    color: white;
    border: 1px solid #f07824;
}
</style>