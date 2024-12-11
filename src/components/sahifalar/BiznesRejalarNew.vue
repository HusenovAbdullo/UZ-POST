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
                                    Biznes rejaning bajarilishi
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
  { title: '2023 yil uchun moliyaviy natijalarni qiyosiy tahlil qilish', date: '20.05.2024', link: 'https://uz.post/storage/media/aksioner/2023.pdf' },
  { title: '2022 yil uchun moliyaviy natijalarni qiyosiy tahlil qilish', date: '20.05.2024', link: 'https://uz.post/storage/media/aksioner/2022.pdf' },
  { title: '2021 yil uchun moliyaviy natijalarni qiyosiy tahlil qilish', date: '14.01.2022', link: 'https://uz.post/storage/media/%D0%92%D0%91%D0%9F%20C%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%20%D1%84%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D1%8B%D1%85%20%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%BE%D0%B2%20%D0%B7%D0%B0%202021%20%D0%B3%D0%BE%D0%B4.pdf' },
  { title: 'Biznes-rejani amalga oshirish 2021 yil 3-chorak', date: '11.11.2021', link: 'https://uz.post/storage/media/%D0%92%D0%91%D0%9F%203%20%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%202021%20%D0%B3%D0%BE%D0%B4%D0%B0.pdf' },
  { title: '2021-yil 1-yarim yillik biznes-rejani amalga oshirish', date: '30.07.2021', link: 'https://uz.post/storage/media/%D0%92%D0%91%D0%9F%201%20%D0%BF%D0%BE%D0%BB%D1%83%D0%B3%D0%BE%D0%B4%D0%B8%D0%B5%202021%20%D0%B3%D0%BE%D0%B4%D0%B0.pdf' },
  { title: 'Biznes-rejani amalga oshirish 2021 yil 1-chorak', date: '25.05.2021', link: 'https://uz.post/storage/media/%D0%92%D0%91%D0%9F%201%20%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%202021%20%D0%B3%D0%BE%D0%B4%D0%B0.pdf' },
  { title: '2020 yil uchun moliyaviy natijalarni qiyosiy tahlil qilish', date: '15.01.2021', link: 'https://uz.post/storage/media/%D0%92%D0%91%D0%9F%20C%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%20%D1%84%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D1%8B%D1%85%20%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%BE%D0%B2%20%D0%B7%D0%B0%202020%20%D0%B3%D0%BE%D0%B4.pdf' },
  { title: '2019 yil uchun moliyaviy natijalarni qiyosiy tahlil qilish', date: '14.01.2020', link: 'https://uz.post/storage/media/%D0%92%D0%91%D0%9F%20C%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%20%D1%84%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D1%8B%D1%85%20%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%BE%D0%B2%20%D0%B7%D0%B0%202019%20%D0%B3%D0%BE%D0%B4.pdf' },
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





