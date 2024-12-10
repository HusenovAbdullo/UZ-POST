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
                                    Rivojlanish Strategiyasi
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!-- Hero Section End -->

<!--service grid here-->
<div class="link-container">
    <router-link to="/error" class="section-link">
      1-QISM. "Pochta aloqasi xizmatlarini ko'rsatish tizimini tubdan takomillashtirish chora-tadbirlari to'g'risida"
    </router-link>

    <router-link to="/error" class="section-link">
      2-QISM. "Pochta aloqasi xizmatlarini ko'rsatish tizimini tubdan takomillashtirish chora-tadbirlari to'g'risida"
    </router-link>

    <router-link to="/error" class="strategy-link">
      "O'zbekiston pochtasi" AJni 2022-2026 yillarda isloh qilish strategiyasi
    </router-link>

    <div class="video-section">
      <span>Video</span>
      <router-link to="/error" class="video-link">«UzPost» – O'zbekistonning yirik operatori yangi brendga o'tdi!</router-link>
    </div>

    <div class="video-section">
      <span>Video</span>
      <router-link to="/error" class="video-link">pochta tizimini tubdan takomillashtirish</router-link>
    </div>
  </div>
<!--service grid end-->
</template>

<style>
.link-container {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.section-link,
.strategy-link,
.video-link {
  display: block;
  color: #0645AD;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 1.4;
}

.section-link:hover,
.strategy-link:hover,
.video-link:hover {
  text-decoration: underline;
}

.video-section {
  display: flex;
  font-size: 24px;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 20px;
}

.video-section span {
  font-style: italic;
  color: #333;
}

.section-link {
  font-weight: 500;
}

.strategy-link {
  margin: 30px 0;
}

.video-link {
  margin-bottom: 0;
}

/* Ensure links look clickable */
a {
  cursor: pointer;
}
</style>