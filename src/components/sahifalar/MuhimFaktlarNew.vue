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
                                    Muhim Faktlar
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
  { title: 'Emitent tomonidan aktsiyadorlarga to`langan dividendlar', date: '27.08.2024', link: 'https://uz.post/storage/media/aksioner/42.%20%D0%AD%D0%BC%D0%B8%D1%82%D0%B5%D0%BD%D1%82%20%D1%82%D0%BE%D0%BC%D0%BE%D0%BD%D0%B8%D0%B4%D0%B0%D0%BD%20%D0%B0%D0%BA%D1%86%D0%B8%D1%8F%D0%B4%D0%BE%D1%80%D0%BB%D0%B0%D1%80%D0%B3%D0%B0%20%D1%82%D1%9E%D0%BB%D0%B0%D0%B1%20%D0%B1%D0%B5%D1%80%D0%B8%D0%BB%D0%B3%D0%B0%D0%BD%20%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D0%B5%D0%BD%D0%B4%D0%BB%D0%B0%D1%80.pdf' },
  { title: 'Jamiyat kuzatuv kengashining tarkibidagi o`zgarishlar', date: '26.08.2024', link: 'https://uz.post/storage/media/aksioner/08.%20%D0%96%D0%B0%D0%BC%D0%B8%D1%8F%D1%82%20%D0%BA%D1%83%D0%B7%D0%B0%D1%82%D1%83%D0%B2%20%D0%BA%D0%B5%D0%BD%D0%B3%D0%B0%D1%88%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%20%D1%82%D0%B0%D1%80%D0%BA%D0%B8%D0%B1%D0%B8%D0%B4%D0%B0%D0%B3%D0%B8%20%D1%9E%D0%B7%D0%B3%D0%B0%D1%80%D0%B8%D1%88%D0%BB%D0%B0%D1%80.pdf' },
  { title: '36. Affillangan shaxslar ro‘yxatidagi o‘zgarishlar', date: '26.08.2024', link: 'https://uz.post/storage/media/aksioner/36.%20%D0%98%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B2%20%D1%81%D0%BF%D0%B8%D1%81%D0%BA%D0%B5%20%D0%B0%D1%84%D1%84%D0%B8%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BB%D0%B8%D1%86.pdf' },
  { title: '06. Emitentning yuqori boshqaruv organi tomonidan qabul qilingan qarorlar', date: '26.08.2024', link: 'https://uz.post/storage/media/%D0%AD%D0%BC%D0%B8%D1%82%D0%B5%D0%BD%D1%82%202022.pdf' },
  { title: 'Qimmatli qog‘ozlar bo‘yicha daromadlarni hisoblash', date: '03.07.2024', link: 'https://uz.post/storage/media/aksioner/Qimmatli%20qog%E2%80%98ozlar%20bo%E2%80%98yicha%20daromadlarni%20hisoblash.pdf' }
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
