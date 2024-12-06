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
        <div class="profile__wrappers setting__breadcumnd">
            <div class="row g-4 align-items-center justify-content-between">
                <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                    <!-- <div class="breadcumnd__content">
                        <span class="d4 mb-24">
                            "Bir Qadam" xizmati
                        </span>
                    </div> -->
                </div>

            </div>
        </div>
    </div>
</div>
</section>
<!-- Hero Section End -->

<!-- description body Section Here -->
<section class="setting__section pb-120">
<div class="container__customizemain pb-120 round16" style="max-width: 1400px;">
    <img class="rasmm pb-120 round16" src="assets/img/Xizmatlar/1.jpg" alt="Misol rasm tavsifi" width="1398"
        height="950">

    <div class="container">
    <header class="header">
      <h1 class="title">"Bir Qadam" xizmati</h1>
      <a href="#" class="map-link">"Bir Qadam" bo'limlari xaritasi</a>
    </header>

    <div class="description">
      UzPost'ning Bir Qadam xizmati bilan buyumlarni tezroq yuboring! Jo'natmangiz O'zbekistonning ko'rsatilgan hududiga atigi 1 KUN ichida yetib boradi. Qulay va arzon narxlar - atigi 15 000 so'mdan boshlanadi. Ushbu xizmatni ko'rsatadigan bo'limlar xaritasini "Bir Qadam bo'limlari xaritasi" bo'limida topishingiz mumkin.
    </div>

    <h2 class="subtitle">Xizmat qanday ishlaydi:</h2>

    <div class="steps">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-text">Jo'natmangizni UzPostning belgilangan bo'limlaridan birida qoldirishingiz lozim.</div>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <div class="step-text">Pochta bo'limidagi operatorlar sizga jo'natmangizni rasmiylashtirishga yordam berishadi.</div>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <div class="step-text">To'lovdan so'ng sizga jo'natmangizni uz.post saytida kuzatish uchun trek-kod beriladi.</div>
      </div>

      <div class="step">
        <div class="step-number">4</div>
        <div class="step-text">Jo'natmangiz belgilangan bo'limga 24 soat ichida yetkazib berilganidan so'ng qabul qiluvchiga sizning jo'natmangiz borganiligi haqida SMS orqali xabar beriladi va jo'natmani belgilangan bo'limdan olib ketish mumkin bo'ladi.</div>
      </div>

      <div class="step">
        <div class="step-number">5</div>
        <div class="step-text">Qabul qiluvchi o'z jo'natmasini olishi bilan sizga jo'natmangiz qabul qilinganligi haqida SMS keladi.</div>
      </div>
    </div>
  </div>

  <div class="jo-natish-shartlari">
    <h2>Jo'natish shartlari:</h2>
    <ol style="color: #000000;">
      <li>{{ line1 }}</li>
      <li>{{ line2 }}</li>
      <li>{{ line3 }}</li>
      <li>{{ line4 }}</li>
    </ol>
  </div>

  <div class="video-container">
    <video width="1237" height="716" controls>
      <source src="path/to/your/video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <div class="bottom-container">
    <h1 class="title">Xizmat uchun tariflar</h1>
    
    <div class="table-container">
      <table>
        <thead>
          <tr class="blue-color">
            <th rowspan="2">№</th>
            <th rowspan="2">Yo'nalish</th>
            <th colspan="2">Tarif (QQS bilan)</th>
          </tr>
          <tr class="blue-color">
            <th>Dastlabki 1,0 kg. uchun</th>
            <th>Keyingi har bir to'liq va to'liq bo'lmagan 1,0 kg. uchun</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              Toshkent shahar va viloyatlar markazlari o'rtasidagi jo'natmalar uchun (jo'natmalar pochta aloqasi obyektigacha)
            </td>
            <td>15 000</td>
            <td>3 000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              Nukus, Termiz va Urganch shaharları uchun (jo'natmalar pochta aloqasi obyektigacha)
            </td>
            <td>15 000</td>
            <td>7 000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="info-section">
      <div class="info-item">
        <span class="info-icon">i</span>
        <p>
          Mazkur jo'natmalar 20 kg.gachani tashkil etadi.
          Mijozda posilka qutisi bo'lmaganda, posilka qutisi
          uchun qo'shimcha haq undiriladi.
        </p>
      </div>
      <div class="info-item">
        <span class="info-icon">i</span>
        <p>
          Ushbu xizmat bo'yicha jo'natmani oxirgi bo'limda
          saqlash muddati - 14 kun (ulardan birinchi 5 kuni
          BEPUL, keyingi har bir kun uchun-3500 so'm)
        </p>
      </div>
    </div>
  </div>

</div>
</section>
<!-- description body Section End -->
</template>

<script>
export default {
  name: 'JonatishShartlari',
  data() {
    return {
      line1: "Jo'natmalarni faqat O'zbekiston ichida amalga oshirish mumkin;",
      line2: "Bir jo'natma vazni 20 kg dan oshmasligi kerak;",
      line3: "Sinishga moyil buyumlarni xavfsiz tarzda qadoqlash lozim. Va bu kabi jo'natmalarni UzPost xodimlari to'g'ridan-to'g'ri UzPost bo'limlarida, jo'natmangizni qabul qilish mobaynida ham qadoqlab berishi mumkin;",
      line4: "Yuborish taqiqlangan narsalar ro'yxati bilan O'zbekiston Respublikasi Adliya vazirligining 2011-yil 18 -aprelda 2219-son bilan ro'yxatdan o'tgan buyruq'ining 3-ilovасida tanishish mumkin."
    }
  }
}
</script>


<style scoped>
@font-face {
    font-family: "Roboto-Condensed";
    src: url(/public/assets/css/fonts/Roboto-Condensed.ttf);
}
@font-face {
    font-family: "Roboto-BoldCondensed";
    src: url(/public/assets/css/fonts/Roboto-BoldCondensed.ttf);
}



.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.title {
  color: #1e3c96;
  font-size: 2.5rem;
  margin: 0;
}

.map-link {
  color: #1e3c96;
  text-decoration: none;
  border: 1px solid #1e3c96;
  padding: 10px 16px;
  border-radius: 4px;
  margin-bottom: 15px;
}

.map-link:hover {
  background-color: #1e3c96;
  color: white;
}

.description {
  font-family: "Roboto-BoldCondensed";
  color: #1e3c96;
  line-height: 1.6;
  margin-bottom: 40px;
  font-size: 24px;
  font-family: "Roboto-Condensed";
}

.subtitle {
  color: #1e3c96;
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.step-number {
  background-color: #1e3c96;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-text {
  color: #333;
  line-height: 1.5;
  padding-top: 6px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .title {
    font-size: 2rem;
  }

  .step {
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.5rem;
  }

  .map-link {
    width: 100%;
    text-align: center;
  }
}

.jo-natish-shartlari {
  width: 1237px;
  height: 417px;
  padding: 20px;
  background-color: #E7EDF6;
  padding: 20px;
  border-radius: 8px;
  margin: 0 auto;
}

h2 {
  font-family: "Roboto-BoldCondensed";
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #183E98;
}

ol {
  width: 1150px;
  height: 258px;
  list-style-type: decimal;
  padding-left: 20px;
}

li {
  font-family: "Robot-BoldCondensed";
  src: url(/public/assets/css/fonts/Roboto-BoldCondensed.ttf);
  line-height: 43.2px;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 8px;
}

.video-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 38px;
}

.bottom-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  flex-direction: column;
  align-items: center;
}

.title {
  text-align: center;
  color: #183E98;
  margin-bottom: 30px;
  font-size: 72px;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
}

th, td {
  border: 1px solid #000;
  color: #000000;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #fff;
  font-weight: bold;
}

thead th {
  text-align: center;
  color: #183E98;
}

tbody td:first-child {
  text-align: center;
  width: 40px;
}

.info-section {
  width: 532px;
  height: 108px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 70px;
}

.info-item {
  display: flex;
  size: 24px;
  align-items: flex-start;
  gap: 30px;
}

.info-icon {
  background-color: #0066cc;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 2px;
}

p {
  width: 400px;
  height: 108px;
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
  
  th, td {
    padding: 8px;
    font-size: 14px;
  }
  
  .info-section {
    gap: 15px;
  }
}

</style>