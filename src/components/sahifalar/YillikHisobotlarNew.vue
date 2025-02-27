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
                                <span class="d41 mb-24">
                                    Yillik Hisobotlar
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<div class="article-list">
    <article v-for="article in articles" :key="article.date" class="article-item">
      <div class="article-content">
        <h2 class="article-title">{{ article.title }}</h2>
        <div class="article-footer">
          <a :href="article.link" class="article-link">Davomini o'qish...</a>
          <span class="article-date">{{ article.date }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
const articles = [
  { title: '2023-yil bo`yicha yillik hisobot', date: '30.06.2024', link: 'https://uz.post/storage/media/aksioner/ochor%202023.pdf' },
  { title: 'Jamiyatning 2023-yil bo`yicha xalqaro standartlarga muvofiq moliyaviy hisoboti va auditorlik xulosasi', date: '14.06.2024', link: 'https://uz.post/storage/media/aksioner/%D0%9C%D0%A1%D0%A4%D0%9E%202023%D0%B9.PDF' },
  { title: '2022-yil bo`yicha yillik hisobot', date: '05.07.2023', link: 'https://uz.post/storage/media/%D0%93%D0%BE%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9%202022.pdf' },
  { title: '2022-YIL YAKUNI BO`YICHA EMITENT YILLIK HISOBOTI', date: '05.07.2023', link: 'https://uz.post/storage/media/%D0%AD%D0%BC%D0%B8%D1%82%D0%B5%D0%BD%D1%82%202022.pdf' },
  { title: 'Jamiyatning 2022-yil bo`yicha xalqaro standartlarga muvofiq moliyaviy hisoboti va auditorlik xulosasi', date: '01.06.2023', link: 'https://uz.post/storage/media/%D0%A4%D0%B8%D0%BD%202022.pdf' }
]
</script>

<style scoped>
.article-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.article-item {
  background-color: #f8f9fe;
  padding: 20px;
  margin-bottom: 20px;
}

.article-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.article-title {
  font-size: 24px;
  color: #333;
  margin: 0;
  font-weight: normal;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-link {
  color: #ff6b35;
  text-decoration: none;
  font-size: 16px;
}

.article-link:hover {
  text-decoration: underline;
}

.article-date {
  color: #888;
  font-size: 14px;
}
</style>
