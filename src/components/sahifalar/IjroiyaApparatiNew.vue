<template>
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
                <div class="profile__wrapper">
                    <div class="row g-4 align-items-center justify-content-between">
                        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                            <div class="breadcumnd__content">
                                <span class="d4 mb-24">
                                    Ijroiya Apparati
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  <div class="profiles-container">
    <div v-for="profile in profiles" :key="profile.id" class="profile-card">
      <div class="photo-section">
        <img :src="profile.photoUrl" :alt="profile.name" class="profile-photo" />
      </div>
      <div class="details-section">
        <h1 class="name">{{ profile.name }}</h1>
        <h2 class="position">{{ profile.position }}</h2>

        <p class="bio">{{ profile.bio }}</p>

        <div class="contact-info">
          <div class="contact-item">
            <h3>Telefon raqam:</h3>
            <span>{{ profile.phone }}</span>
          </div>

          <div class="contact-item">
            <h3>Fax:</h3>
            <span>{{ profile.fax }}</span>
          </div>

          <div class="contact-item">
            <h3>Qabul kunlar:</h3>
            <span class="badge">{{ profile.receptionDays }}</span>
          </div>

          <div class="contact-item">
            <h3>Qabul vaqti:</h3>
            <span>{{ profile.receptionHours }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const profiles = ref([
  {
    id: 1,
    name: "Fayzullayev Alisher Nasibullayevich",
    position: "Bosh direktor",
    bio: "1966-yil 24-sentabrda Toshkent shahrida tug‘ilgan. Millati – o‘zbek. 1988-yilda Toshkent aloqa elektrotexnika institutini bitirgan. 2019-yil 12-iyuldan boshlab “O‘zbekiston pochtasi” AJ bosh direktori lavozimida faoliyat yuritmoqda.",
    phone: "(0371) 236-76-25",
    fax: "(0371) 236-09-21",
    receptionDays: "Dush",
    receptionHours: "14:00 — 17:00",
    photoUrl: require('@/assets/Alisher.jpg')
  },
  {
    id: 2,
    name: "Dadamuxamedov Rustam Abdugapparovich",
    position: "Moliya bo'yicha direktor",
    bio: "1976-yil 29-yanvarda Toshkent shahrida tug‘ilgan. Millati – o‘zbek. 1998-yilda Toshkent elektrotexnika aloqa institutini bitirgan. O‘zbekiston Respublikasi Liberal-demokratik partiyasi a’zosi. 2019-yil 24-maydan boshlab “O‘zbekiston pochtasi” AJ moliya bo'yicha direktori lavozimida faoliyat yuritmoqda.",
    phone: "(0371) 236-22-70",
    fax: "(0371) 236-09-21",
    receptionDays: "Chorsh.",
    receptionHours: "08:00 - 11:00",
    photoUrl: require('@/assets/Rustam.jpg')
  },
  {
    id: 3,
    name: "Xusyayenova Noila Garifovna",
    position: "Ishlab chiqarish bo'yicha direktor",
    bio: "1975-yil 15-iyunda Toshkent shahrida tug'ilgan. Millati tatar. 2006 yilda Al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universitetini tamomlagan. 2022-yil 29-iyuldan boshlab “O‘zbekiston pochtasi” aksiyadorlik jamiyatida ishlab chiqarish bo'yicha direktor lavozimida faoliyat yuritib kelmoqda.",
    phone: "(0371) 236-22-70",
    fax: "(0371) 236-09-21",
    receptionDays: "Sesh.",
    receptionHours: "08:00 - 11:00",
    photoUrl: require('@/assets/Noila.jpg')
  },
  {
    id: 4,
    name: "Nugmanov Taxir Tulkunovich",
    position: "Pochta xavfsizligi bo'yicha direktor",
    bio: "1975-yil 8-noyabrda Toshkent viloyatida tug‘ilgan. Millati o‘zbek. 1999 yilda Toshkent davlat texnika universitetini tamomlagan. 2023 yil 28 sentyabrdan “O‘zbekiston pochtasi”  AJning pochta xavfsizligi bo‘yicha direktori lavozimida ishlab kelmoqda.",
    phone: "(0371) 236-22-70",
    fax: "(0371) 236-09-21",
    receptionDays: "Dush.",
    receptionHours: "9:00 - 11:00",
    photoUrl: require('@/assets/Taxir.jpg')
  }
])
</script>

<style scoped>
.profiles-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.profile-card {
  display: flex;
  background: #f8f9fc;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.photo-section {
  flex: 0 0 200px;
  margin-right: 1.5rem;
}

.profile-photo {
  width: 100%;
  height: auto;
  object-fit: cover;
  border: 1px solid #e2e8f0;
}

.details-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
}

.position {
  font-size: 1rem;
  font-weight: 500;
  color: #4a5568;
  margin: 0;
}

.bio {
  font-size: 0.875rem;
  line-height: 1.6;
  color: #2d3748;
  margin: 0;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-item h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #4a5568;
  margin: 0;
}

.contact-item span {
  font-size: 0.875rem;
  color: #2d3748;
}

.badge {
  display: inline-block;
  background: #e2e8f0;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  .profile-card {
    flex-direction: column;
  }

  .photo-section {
    flex: 0 0 auto;
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }
}
</style>