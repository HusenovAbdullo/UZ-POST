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
                  {{ $t('executive_apparatus') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="profiles-container">
    <!-- 1-shaxs -->
    <div class="profile-card">
      <div class="photo-section">
        <img src="@/assets/Alisher.jpg" alt="Fayzullayev Alisher Nasibullayevich" class="profile-photo" />
      </div>
      <div class="details-section">
        <h1 class="name">{{ $t('faizyullaev_alisher') }}</h1>
        <h2 class="position">{{ $t('faizyullaev_alisher1') }}</h2>
        <p class="bio">{{ $t('faizyullaev_alisher2') }}
        </p>
        <div class="contact-info">
          <div class="contact-item">
            <h3>{{ $t('phone_number') }}</h3>
            <span>(0371) 236-76-25</span>
          </div>
          <div class="contact-item">
            <h3>{{ $t('fax') }}</h3>
            <span>(0371) 236-09-21</span>
          </div>
          <div class="contact-item">
            <h3>{{ $t('reception_days') }}</h3>
            <span class="badge">{{ $t('faizyullaev_alisher3') }}</span>
          </div>
          <div class="contact-item">
            <h3>{{ $t('reception_hours') }}</h3>
            <span>14:00 — 17:00</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 2-shaxs -->
    <div class="profile-card">
      <div class="photo-section">
        <img src="@/assets/Rustam.jpg" alt="Dadamuxamedov Rustam Abdugapparovich" class="profile-photo" />
      </div>
      <div class="details-section">
        <h1 class="name">{{ $t('dadamuxamedov_rustam') }}</h1>
        <h2 class="position">{{ $t('dadamuxamedov_rustam1') }}</h2>
        <p class="bio">{{ $t('dadamuxamedov_rustam2') }}
        </p>
        <div class="contact-info">
          <div class="contact-item">
            <h3>{{ $t('phone_number') }}</h3>
            <span>(0371) 236-22-70</span>
          </div>
          <div class="contact-item">
            <h3>{{ $t('fax') }}</h3>
            <span>(0371) 236-09-21</span>
          </div>
          <div class="contact-item">
            <h3>{{ $t('reception_days') }}</h3>
            <span class="badge">{{ $t('dadamuxamedov_rustam3') }}</span>
          </div>
          <div class="contact-item">
            <h3>{{ $t('reception_hours') }}</h3>
            <span>08:00 - 11:00</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 3-shaxs -->
    <div class="profile-card">
      <div class="photo-section">
        <img src="@/assets/Noila.jpg" alt="Xusyayenova Noila Garifovna" class="profile-photo" />
      </div>
      <div class="details-section">
        <h1 class="name">{{ $t('xusyayenova_noila') }}</h1>
        <h2 class="position">{{ $t('xusyayenova_noila1') }}</h2>
        <p class="bio">{{ $t('xusyayenova_noila2') }}
        </p>
        <div class="contact-info">
          <div class="contact-item">
            <h3>{{ $t('phone_number') }}</h3>
            <span>(0371) 236-22-70</span>
          </div>
          <div class="contact-item">
            <h3>{{ $t('fax') }}</h3>
            <span>(0371) 236-09-21</span>
          </div>
          <div class="contact-item">
            <h3>{{ $t('reception_days') }}</h3>
            <span class="badge">{{ $t('xusyayenova_noila3') }}</span>
          </div>
          <div class="contact-item">
            <h3>{{ $t('reception_hours') }}</h3>
            <span>08:00 - 11:00</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 4-shaxs -->
    <div class="profile-card">
      <div class="photo-section">
        <img src="@/assets/Taxir.jpg" alt="Nugmanov Taxir Tulkunovich" class="profile-photo" />
      </div>
      <div class="details-section">
        <h1 class="name">{{ $t('nugmanov_taxir') }}</h1>
        <h2 class="position">{{ $t('nugmanov_taxir1') }}</h2>
        <p class="bio">{{ $t('nugmanov_taxir2') }}
        </p>
        <div class="contact-info">
          <div class="contact-item">
            <h3>{{ $t('phone_number') }}</h3>
            <span>(0371) 236-22-70</span>
          </div>
          <div class="contact-item">
            <h3>{{ $t('fax') }}</h3>
            <span>(0371) 236-09-21</span>
          </div>
          <div class="contact-item">
            <h3>{{ $t('reception_days') }}</h3>
            <span class="badge">{{ $t('nugmanov_taxir3') }}</span>
          </div>
          <div class="contact-item">
            <h3>{{ $t('reception_hours') }}</h3>
            <span>09:00 - 11:00</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



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