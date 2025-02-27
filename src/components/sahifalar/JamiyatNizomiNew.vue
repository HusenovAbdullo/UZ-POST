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
                                    Jamiyat Nizomi
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
  { title: 'Jamiyat nizomi', date: '27.06.2023', link: 'https://uz.post/storage/media/%D0%A3%D1%81%D1%82%D0%B0%D0%B2%202023.pdf' },
  { title: 'Jamiyat nizomi', date: '28.06.2022', link: 'https://uz.post/storage/media/%D0%A3%D1%81%D1%82%D0%B0%D0%B2%202022.06.pdf' },
  { title: 'Jamiyat nizomi', date: '13.01.2022', link: 'https://uz.post/storage/media/%D0%A3%D1%81%D1%82%D0%B0%D0%B2%202022.01.pdf' },
  { title: 'Jamiyat nizomi', date: '07.01.2021', link: 'https://uz.post/storage/media/%D0%A3%D1%81%D1%82%D0%B0%D0%B2%202021.pdf' },
  { title: 'Jamiyat nizomi', date: '29.06.2019', link: 'https://uz.post/storage/media/%D0%A3%D1%81%D1%82%D0%B0%D0%B2%202019.pdf' }
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
