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
              <div class="breadcumnd__content">
                <span class="d41 mb-24">
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
  <section class="setting__section pb-120">
    <div class="container__customizemain pt-100 pb-120 round16">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="setting__tabs p-8 round16 border bgwhite">
              <ul class="nav border-0 round16 nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="barcha_tariflar-tab" data-bs-toggle="tab"
                    data-bs-target="#Barcha_tariflar" type="button" role="tab" aria-controls="home"
                    aria-selected="false">
                    O'zbekiston ichida yetkazib berish xizmatlari
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>
                <li class="nav-item" role="presentation">
                  <button style="background: #e7edf6;" class="nav-link" id="pochta_varaqchasi-tab" data-bs-toggle="tab"
                    data-bs-target="#pochta_varaqchasi" type="button" role="tab" aria-controls="home"
                    aria-selected="false">
                    <p class="title9">Pochta varaqchasi</p>
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>
                <li class="nav-item" role="presentation">
                  <button style="background: #e7edf6;" class="nav-link" id="xat_xabarlar-tab" data-bs-toggle="tab"
                    data-bs-target="#xat_xabarlar" type="button" role="tab" aria-controls="home" aria-selected="false">
                    <p class="title9">Xat-xabarlar</p>
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>
                <li class="nav-item" role="presentation">
                  <button style="background: #e7edf6;" class="nav-link" id="banderollar-tab" data-bs-toggle="tab"
                    data-bs-target="#banderollar" type="button" role="tab" aria-controls="home" aria-selected="false">
                    <p class="title9">Banderollar</p>
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>
                <li class="nav-item" role="presentation">
                  <button style="background: #e7edf6;" class="nav-link" id="mayda-paketlar-tab" data-bs-toggle="tab"
                    data-bs-target="#mayda-paketlar" type="button" role="tab" aria-controls="home"
                    aria-selected="false">
                    <p class="title9">Mayda paketlar</p>
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>
                <li class="nav-item" role="presentation">
                  <button style="background: #e7edf6;" class="nav-link" id="sekogramma-tab" data-bs-toggle="tab"
                    data-bs-target="#sekogramma" type="button" role="tab" aria-controls="home" aria-selected="false">
                    <p class="title9">Sekogramma</p>
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>
                <li class="nav-item" role="presentation">
                  <button style="background: #e7edf6;" class="nav-link" id="posilkalar-tab" data-bs-toggle="tab"
                    data-bs-target="#posilkalar" type="button" role="tab" aria-controls="home" aria-selected="false">
                    <p class="title9">Posilkalar</p>
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>
                <li class="nav-item" role="presentation">
                  <button style="background: #e7edf6;" class="nav-link" id="qoshimcha-xizmatlar-tab"
                    data-bs-toggle="tab" data-bs-target="#qoshimcha-xizmatlar" type="button" role="tab"
                    aria-controls="home" aria-selected="false">
                    <p class="title9">Qoshimcha xizmatlar</p>
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>
                <li class="nav-item" role="presentation">
                  <button style="background: #e7edf6;" class="nav-link" id="kuryerlik-xizmatlari-tab"
                    data-bs-toggle="tab" data-bs-target="#kuryerlik-xizmatlari" type="button" role="tab"
                    aria-controls="home" aria-selected="false">
                    <p class="title9">Kuryerlik xizmati - yuridik shaxslar uchun</p>
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>
                <li class="nav-item" role="presentation">
                  <button style="background: #e7edf6;" class="nav-link" id="bir-qadam-tab" data-bs-toggle="tab"
                    data-bs-target="#bir-qadam" type="button" role="tab" aria-controls="home" aria-selected="false">
                    <p class="title9">“Bir Qadam” xizmati</p>
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>


                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pochta_aloqasining_asosiy_xizmatlar-tab" data-bs-toggle="tab"
                    data-bs-target="#pochta_aloqasining_asosiy_xizmatlar" type="button" role="tab"
                    aria-controls="profile" aria-selected="false">
                    MDH davlatlariga yuborish xizmatlari
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="kuryerlik_xizmatlari-tab" data-bs-toggle="tab"
                    data-bs-target="#kuryerlik_xizmatlari" type="button" role="tab" aria-controls="contact"
                    aria-selected="false">
                    Uzoq xorij davlatlariga yuborish xizmatlari
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="bir_qadam-tab" data-bs-toggle="tab" data-bs-target="#bir_qadam"
                    type="button" role="tab" aria-controls="payment" aria-selected="false">
                    Qo'shimcha xizmatlar
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="tolovlar-tab" data-bs-toggle="tab" data-bs-target="#tolovlar"
                    type="button" role="tab" aria-controls="payment" aria-selected="false">
                    To'lov va pul o'tkazmalari xizmatlari
                  </button>
                </li>
                <div style="margin-bottom: 5px;"></div>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="boshqalar_tab" data-bs-toggle="tab" data-bs-target="#boshqalar"
                    type="button" role="tab" aria-controls="payment" aria-selected="false">
                    Boshqalar
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="Barcha_tariflar" role="tabpanel"
                aria-labelledby="barcha_tariflar-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h2 class="pb-40 bborderdash mb-20 title2">
                    Respublika ichidagi xizmatlar
                  </h2>
                  <div class="accordion-body" style="color: black;">
                    <p class="title2"><u>1.Pochta varaqchasi</u></p>
                    <p class="title2"><u>2.Xat-xabarlar</u></p>
                    <p class="title2"><u>3.Banderollar</u></p>
                    <p class="title2"><u>4.Mayda paketlar</u></p>
                    <p class="title2"><u>5.Sekogrammalar</u></p>
                    <p class="title2"><u>6.Posilkalar</u></p>
                    <p class="title2"><u>7.Qo'shimcha xizmatlar</u></p>
                    <p class="title2"><u>8.Kuryerlik xizmati (manzildan olish va manzilgacha
                        yetkazib berish) - yuridik shaxslar uchun</u></p>
                    <p class="title2"><u>9.“Bir Qadam” xizmati (belgilangan pochta bo'limlari
                        orasida yetkazib berish xizmati)</u></p>
                  </div>
                  <div id="blogs"></div>
                </div>
              </div>
              <div class="tab-pane fade show" id="pochta_varaqchasi" role="tabpanel"
                aria-labelledby="pochta_varaqchasi-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h2 class="pb-40 bborderdash mb-20 title2">
                    Pochta varaqchasi
                  </h2>
                  <div id="blogs"></div>
                </div>
              </div>
              <div class="tab-pane fade show" id="xat_xabarlar" role="tabpanel" aria-labelledby="xat_xabarlar-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h2 class="pb-40 bborderdash mb-20 title2">
                    Xat-xabarlar
                  </h2>
                  <div class="pricing-container">
                    <div class="header">
                      <h1>Xat - bu ichida yozma xat-xabar, hujjatlar bo'lgan pochta jo'natmasi</h1>
                      <p class="weight-info">Vazni - 2 kg gacha</p>
                      <p class="address-info">Manzilgacha yetkazib beriladi (agar ma'lumotlari to'liq va to'g'ri
                        ko'rsatilgan bo'lsa)</p>
                    </div>

                    <table class="pricing-table">
                      <thead>
                        <tr>
                          <th class="number-column">№</th>
                          <th>Jo'natmalar va xizmatlarning turlari</th>
                          <th class="price-column">Narxi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="section-header">
                          <td colspan="3">XATLARNI JO'NATISH (O'ZBEKISTON ICHIDA)</td>
                        </tr>
                        <tr class="subsection-header">
                          <td colspan="3">Oddiy (trek-kodsiz, ya'ni kuzatib bo'lmayli):</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>20 g. gacha</td>
                          <td>3 100 so'm</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>20 dan 100 g. gacha</td>
                          <td>3 700 so'm</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>100 dan 250 g. gacha</td>
                          <td>6 000 so'm</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>250 dan 500 g. gacha</td>
                          <td>12 400 so'm</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>500 dan 1000 g. gacha</td>
                          <td>21 700 so'm</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>1000 dan 2000 g. gacha</td>
                          <td>35 800 so'm</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td class="note-cell">
                            <p>Bepul jo'natiladi:</p>
                            <p>a) muddatli harbiy xizmatni o'tayotgan harbiy qismlarning shaxsiy tarkibi tomonidan
                              jo'natiladigan og'irligi 20 g. gacha bo'lgan oddiy xatlar va pochta varaqchalari
                              konvertlari yoki pochta varaqchasida maxsus uchburchakli shtamp izi mavjud bo'lgan
                              hollarda;</p>
                            <p>b) muddatli harbiy xizmatni o'tayotgan harbiy qismlarning shaxsiy tarkibi manzilga
                              jo'natiladigan og'irligi 20 g. gacha bo'lgan oddiy xatlar va pochta varaqchalari.</p>
                          </td>
                          <td>-</td>
                        </tr>

                        <!-- New Section -->
                        <tr class="subsection-header">
                          <td colspan="3">Buyurtmali (trek-kod bilan, ya'ni kuzatish imkoniyati bilan):</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>20 g. gacha</td>
                          <td>7 400 so'm</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>20 dan 100 g. gacha</td>
                          <td>11 000 so'm</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>100 dan 250 g. gacha</td>
                          <td>14 000 so'm</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>250 dan 500 g. gacha</td>
                          <td>18 000 so'm</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>500 dan 1000 g. gacha</td>
                          <td>25 000 so'm</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>1000 dan 2000 g. gacha</td>
                          <td>36 000 so'm</td>
                        </tr>
                        <tr class="insurance-row">
                          <td colspan="2">Sug'urta to'lovi - e'lon qilingan qiymatning har bir to'liq yoki noto'liq
                            so'mi uchun</td>
                          <td>0,05 so'm</td>
                        </tr>
                        <tr class="storage-info">
                          <td colspan="3">
                            <ul>
                              <li>Oxirgi bo'limda saqlash muddati - 1 oy</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade show" id="banderollar" role="tabpanel" aria-labelledby="xat_xabarlar-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h2 class="pb-40 bborderdash mb-20 title2">
                    Banderollar
                  </h2>
                  <div class="pricing-container">
                    <div class="header">
                      <h1>Banderol - bu bosma nashrlar, ish qog’ozlari va boshqa buyumlar solingan pochta jo’natmasining
                        turi.</h1>
                      <p class="weight-info">Vazni - 2 kg gacha</p>
                      <p class="address-info">Qabul qiluvchi manziliga xizmat ko'rsatadigan pochta bo'limigacha yetkazib
                        beriladi (agar manzilgacha yetkazib berish qo'shimcha xizmatidan foydalanilmagan bo'lsa)</p>
                    </div>

                    <table class="pricing-table">
                      <thead>
                        <tr>
                          <th class="number-column">№</th>
                          <th>Jo'natmalar va xizmatlarning turlari</th>
                          <th class="price-column">Narxi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="section-header">
                          <td colspan="3">BANDEROLNI JO'NATISH (O'ZBEKISTON ICHIDA)</td>
                        </tr>
                        <tr class="subsection-header">
                          <td colspan="3">Oddiy (trek-kodsiz, ya'ni kuzatib bo'lmayli):</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>20 g. gacha</td>
                          <td>3 100 so'm</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>20 dan 100 g. gacha</td>
                          <td>3 700 so'm</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>100 dan 250 g. gacha</td>
                          <td>6 000 so'm</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>250 dan 500 g. gacha</td>
                          <td>12 400 so'm</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>500 dan 1000 g. gacha</td>
                          <td>21 700 so'm</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>1000 dan 2000 g. gacha</td>
                          <td>35 800 so'm</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td class="note-cell">
                            <p>Har bir keyingi to'liq yoki to'liq bo'lmagan 1000 g. uchun </p>
                          </td>
                          <td>7 100 so'm</td>
                        </tr>

                        <!-- New Section -->
                        <tr class="subsection-header">
                          <td colspan="3">Buyurtmali (trek-kod bilan, ya'ni kuzatish imkoniyati bilan):</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>20 g. gacha</td>
                          <td>7 400 so'm</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>20 dan 100 g. gacha</td>
                          <td>11 000 so'm</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>100 dan 250 g. gacha</td>
                          <td>14 000 so'm</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>250 dan 500 g. gacha</td>
                          <td>18 000 so'm</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>500 dan 1000 g. gacha</td>
                          <td>25 000 so'm</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>1000 dan 2000 g. gacha</td>
                          <td>36 000 so'm</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td> Har bir keyingi to'liq yoki to'liq bo'lmagan 1000 g. uchun </td>
                          <td>7 500 so'm</td>
                        </tr>
                        <tr class="insurance-row">
                          <td colspan="2">Sug'urta to'lovi - e'lon qilingan qiymatning har bir to'liq yoki noto'liq
                            so'mi uchun</td>
                          <td>0,05 so'm</td>
                        </tr>
                        <tr class="storage-info">
                          <td colspan="3">
                            <ul>
                              <li><span> <b></b>bo'limda saqlash muddati - 1 oy</span></li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


              <div class="tab-pane fade show" id="mayda-paketlar" role="tabpanel" aria-labelledby="mayda-paketlar-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h2 class="pb-40 bborderdash mb-20 title2">
                    Mayda paketlar
                  </h2>
                  <div class="pricing-container">
                    <div class="header">
                      <h1>Mayda paketlar — kichik va sinmaydigan predmetlarni jo’natishning qulay usulidir. Ushbu
                        jo'natma turida kiyim-kechak, aksessuarlar va boshqa kichik sinmaydigan mahsulotlarni yuborish
                        mumkin.</h1>
                      <p class="weight-info">Vazni - 2 kg gacha</p>
                      <p class="address-info">Qabul qiluvchi manziliga xizmat ko'rsatadigan pochta bo'limigacha yetkazib
                        beriladi (agar manzilgacha yetkazib berish qo'shimcha xizmatidan foydalanilmagan bo'lsa)</p>
                    </div>

                    <table class="pricing-table">
                      <thead>
                        <tr>
                          <th class="number-column">№</th>
                          <th>Jo'natmalar va xizmatlarning turlari</th>
                          <th class="price-column">Narxi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="section-header">
                          <td colspan="3">MАYDА PАKЕTNI JO'NАTISH (O'ZBEKISTON ICHIDA)</td>
                        </tr>
                        <tr class="subsection-header">
                          <td colspan="3">Oddiy (trek-kodsiz, ya'ni kuzatib bo'lmayli):</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>20 g. gacha</td>
                          <td>3 100 so'm</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>20 dan 100 g. gacha</td>
                          <td>3 700 so'm</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>100 dan 250 g. gacha</td>
                          <td>6 000 so'm</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>250 dan 500 g. gacha</td>
                          <td>12 400 so'm</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>500 dan 1000 g. gacha</td>
                          <td>21 700 so'm</td>
                        </tr>

                        <!-- New Section -->
                        <tr class="subsection-header">
                          <td colspan="3">Buyurtmali (trek-kod bilan, ya'ni kuzatish imkoniyati bilan):</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>100 g. gacha</td>
                          <td>11 000 so'm</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>100 dаn 250 g. gаchа</td>
                          <td>14 000 so'm</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>250 dan 500 g. gacha</td>
                          <td>18 000 so'm</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>500 dan 1000 g. gacha</td>
                          <td>25 000 so'm</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>1000 dan 2000 g. gacha</td>
                          <td>36 000 so'm</td>
                        </tr>
                        <tr class="storage-info">
                          <td colspan="3">
                            <ul>
                              <li><span> <b></b> Oxirgi bo'limda saqlash muddati - 1 oy</span></li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


              <div class="tab-pane fade show" id="sekogramma" role="tabpanel" aria-labelledby="sekogramma-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h2 class="pb-40 bborderdash mb-20 title2">
                    Sekogrammalar
                  </h2>
                  <div class="pricing-container">
                    <div class="header">
                      <h1>Sekogramma - bu ko’zi ojizlar uchun muassasalar tomonidan pochta orqali jo’natiladigan, ko’zi
                        ojizlar uchun ochiq holda beriladigan yozma xat-xabar, bosma nashrlar, ko’zi ojizlar uchun yozuv
                        tizimining belgilariga ega tamg’a, shuningdek ko’zi ojizlar uchun mo’ljallangan ovozli yozuvlar
                        va maxsus qog’oz.</h1>
                      <p class="weight-info">Vazni - 7 kg gacha</p>
                    </div>

                    <table class="pricing-table">
                      <thead>
                        <tr>
                          <th class="number-column">№</th>
                          <th>Jo'natmalar va xizmatlarning turlari</th>
                          <th class="price-column">Narxi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="section-header">
                          <td colspan="3">SЕKОGRАMMАNI JO'NАTISH (O'ZBEKISTON ICHIDA)</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Yer usti trаnspоrti bilаn jo'nаtilаdigаn sеkоgrаmmаlаr bеpul jo'nаtilаdi. </td>
                          <td>0 so'm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade show" id="posilkalar" role="tabpanel" aria-labelledby="posilkalar-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h2 class="pb-40 bborderdash mb-20 title2">
                    Posilkalar
                  </h2>
                  <div class="pricing-container">
                    <div class="header">
                      <h1>Posilka — bu jo’natishga ruxsat etilgan sanoat tovarlari, oziq-ovqat mahsulotlari,
                        madaniy-maishiy va boshqa tovarlar solingan pochta jo’natmasi turi.</h1>
                      <p class="weight-info">a) bo‘linadigan joylanmadan tashkil topgan jo'natmaning umumiy vazni - 10
                        kg.gacha</p>
                      <p class="weight-info">b) bo‘linmaydigan joylanmadan tashkil topgan jo'natmaning umumiy vazni - 15
                        kg.gacha</p>
                      <p class="address-info">Qabul qiluvchi manziliga xizmat ko'rsatadigan pochta bo'limigacha yetkazib
                        beriladi (agar manzilgacha yetkazib berish qo'shimcha xizmatidan foydalanilmagan bo'lsa)</p>
                    </div>

                    <table class="pricing-table">
                      <thead>
                        <tr>
                          <th class="number-column">№</th>
                          <th>Xizmatlar va jo'natmalarning turi</th>
                          <th class="price-column">1 dona jo'natma uchun</th>
                          <th class="price-column">Har bir to'liq va to'liq bo'lmagan 1 kg jo'natma uchun</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="section-header">
                          <td colspan="4">POSILKA JO'NATISH (O'ZBEKISTON ICHIDA)</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Posilka</td>
                          <td>12 000 so'm</td>
                          <td>6 000 so'm</td>
                        </tr>
                        <tr class="storage-info">
                          <td colspan="4">
                            <ul>
                              <li>Oxirgi bo'limda saqlash muddati - 1 oy</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade show" id="qoshimcha-xizmatlar" role="tabpanel"
                aria-labelledby="qoshimcha-xizmatlar-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h2 class="pb-40 bborderdash mb-20 title2">
                    Qo'shimcha Xizmatlar
                  </h2>
                  <div class="pricing-container">
                    <div class="header">
                      <h1>RESPUBLIKA ICHIDAGI QO'SHIMCHA XIZMATLARGA BELGILANGAN TARIFLAR</h1>
                    </div>

                    <table class="pricing-table">
                      <thead>
                        <tr>
                          <th class="number-column">№</th>
                          <th>Jo'natmalar va xizmatlarning turlari</th>
                          <th colspan="2" class="price-header">To'lov miqdori, so'mda</th>
                        </tr>
                        <tr>
                          <th></th>
                          <th></th>
                          <th class="price-column">korxona</th>
                          <th class="price-column">aholi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            Posilkaning e'lon qilingan qiymati uchun haq:<br>
                            e'lon qilingan qiymatning har bir to'liq yoki to'liq bo'lmagan so'midan
                          </td>
                          <td>0,05</td>
                          <td>0,05</td>
                        </tr>

                        <tr class="section-header">
                          <td colspan="4">POCHTA JO'NATMALARI OLINGANLIGI TO'G'RISIDAGI XABARNOMANI JO'NATISH</td>
                        </tr>

                        <tr>
                          <td>1</td>
                          <td>Oddiy xabarnomani pochta orqali</td>
                          <td>2 500 so'm</td>
                          <td>2 500 so'm</td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td>Buyurtmali xabarnomani pochta orqali</td>
                          <td>2 900 so'm</td>
                          <td>2 900 so'm</td>
                        </tr>

                        <tr>
                          <td>3</td>
                          <td>Avval yuborilgan pochta jo'natmasini topshirilganligi to'g'risida navbatdagi xabarnomani
                            pochta orqali</td>
                          <td>3 100 so'm</td>
                          <td>2 200 so'm</td>
                        </tr>

                        <tr>
                          <td>4</td>
                          <td class="small-text">
                            Avval yuborilgan pochta jo'natmasini olinganligi to'g'risidagi navbatdagi xabarnomani
                            telegraf orqali yuborish uchun, telegraf xabarnomasi uchun to'langan haqdan tashqari,
                            so'zlarning aniq soniga qarab belgilangan punktga telegraf so'rovi yuborish uchun haq va
                            telegraf yig'imi olinadi
                          </td>
                          <td>-</td>
                          <td>-</td>
                        </tr>

                        <tr class="section-header">
                          <td colspan="4">POCHTA JO'NATMALARINI, DAVRIY NASHRLARNI QAYTA JO'NATISH VA QAYTARISH HAMDA
                            MANZILINI O'ZGARTIRISH</td>
                        </tr>

                        <tr>
                          <td>1</td>
                          <td>
                            Ariza bilan farmoyish uchun<br>
                            – har bir farmoyish uchun
                          </td>
                          <td>5 800 so'm</td>
                          <td>2 900 so'm</td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td>Xatlarni, pochta varaqchalarini, pul mablag'larining o'tkazmalarini pochta orqali qayta
                            jo'natish yoki qaytarish uchun haq olinmaydi</td>
                          <td colspan="2"></td>
                        </tr>

                        <tr>
                          <td>3</td>
                          <td>Ichki pochta almashinuvida pochta xat-xabarlarini qidirish bepul amalga oshiriladi</td>
                          <td colspan="2"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade show" id="kuryerlik-xizmatlari" role="tabpanel"
                aria-labelledby="kuryerlik-xizmatlari-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h2 class="pb-40 bborderdash mb-20 title2">
                    Kuryerlik xizmatlari
                  </h2>
                  <div class="pricing-container">
                    <table class="pricing-table">
                      <thead>
                        <tr>
                          <th class="number-column" rowspan="2">№</th>
                          <th class="direction-column" rowspan="2">Yo'nalish</th>
                          <th colspan="2" class="price-header">Tarif<br>(QQS bilan)</th>
                        </tr>
                        <tr>
                          <th class="weight-column">Dastlabki 1,0 kg. uchun</th>
                          <th class="weight-column">Keyingi har bir to'liq va to'liq bo'lmagan 0,5 kg. uchun</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            Qoraqalpog'iston Respublikasi, viloyatlar va Toshkent shahri o'rtasida pochta jo'natmalari
                            uchun (jo'natmalar pochta aloqasi obyektigacha)
                          </td>
                          <td class="price">35 000</td>
                          <td class="price">3 500</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            Qoraqalpog'iston Respublikasi, viloyatlar va Toshkent shahri ichida
                          </td>
                          <td class="price">15 000</td>
                          <td class="price">2 500</td>
                        </tr>
                        <tr class="note">
                          <td colspan="4">Izoh: mazkur jo'natmalar 20 kg gachani tashkil etadi.</td>
                        </tr>
                        <tr class="note">
                          <td colspan="4">**Mazkur kurerik jo'natmalariga belgilangan tariflar jo'natuvchining
                            jo'natmalar hajmiga ko'ra, shartnoma asosida o'zgartirilishi mumkin.</td>
                        </tr>
                        <tr class="note">
                          <td colspan="4">Kuremni chaqirish narhi 15 000 so'm.</td>
                        </tr>
                        <tr class="note-header">
                          <td colspan="4">Kurer tomonidan ko'rsatiladigan qo'shimcha xizmatlar:</td>
                        </tr>
                        <tr class="note">
                          <td colspan="4">1. Jo'natmani o'rash mahsulotlari (konvert, posilka qutisi va boshqalar)
                            mijozda bo'lmagan holda.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade show" id="bir-qadam" role="tabpanel" aria-labelledby="bir-qadam-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h2 class="pb-40 bborderdash mb-20 title2">
                    "Bir Qadam" xizmati
                  </h2>
                  <div class="pricing-container">
                    <div class="header">
                      <h1>“Bir Qadam" xizmati orqali jo'natmalaringizni butun O'zbekiston bo'ylab (belgilangan bo'limlar
                        orasida) 1 KUN ichida yetkazib beramiz.</h1>
                    </div>
                    <table class="pricing-table">
                      <thead>
                        <tr>
                          <th class="number-column" rowspan="2">№</th>
                          <th class="direction-column" rowspan="2">Yo'nalish</th>
                          <th colspan="2" class="price-header">Tarif<br>(QQS bilan)</th>
                        </tr>
                        <tr>
                          <th class="weight-column">Dastlabki 1,0 kg. uchun</th>
                          <th class="weight-column">Keyingi har bir to'liq va to'liq bo'lmagan 1,0 kg. uchun</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            Toshkent shahar va viloyatlar markazlari o'rtasidagi jo'natmalar uchun (jo'natmalar pochta
                            aloqasi obyektigacha)
                          </td>
                          <td class="price">15 000</td>
                          <td class="price">3 000</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            Nukus, Termiz va Urganch shaharlari uchun (jo'natmalar pochta aloqasi obyektigacha)
                          </td>
                          <td class="price">15 000</td>
                          <td class="price">7 000</td>
                        </tr>
                        <tr class="daily-rate">
                          <td colspan="3"></td>
                          <td class="centered">Har bir kun uchun</td>
                        </tr>
                        <tr>
                          <td colspan="3" class="storage-text">
                            Jo'natmalarni oxirgi bo'limda saqlash uchun
                          </td>
                          <td class="price">3 500</td>
                        </tr>
                        <tr class="note">
                          <td colspan="4">Izoh: mazkur jo'natmalar 20 kg gachani tashkil etadi.</td>
                        </tr>
                        <tr class="note">
                          <td colspan="4">Mijozda posilka qutisi bo'lmaganda, posilka qutisi uchun qo'shimcha haq
                            undiriladi.</td>
                        </tr>
                        <tr class="note">
                          <td colspan="4">Ushbu xizmat bo'yicha jo'natmani oxirgi bo'limda saqlash muddati - 14 kun
                            (ulardan birinchi 5 kuni BEPUL)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade " id="pochta_aloqasining_asosiy_xizmatlar" role="tabpanel"
                aria-labelledby="pochta_aloqasining_asosiy_xizmatlar-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h2 class="pb-40 bborderdash mb-20 title2">
                    Banderollar
                  </h2>
                  <div class="accordion-body" style="color: black;">
                    <p class="title2"><u>1.Pochta varaqchasi</u></p>
                    <p class="title2"><u>2.Xat-xabarlar</u></p>
                    <p class="title2"><u>3.Banderollar</u></p>
                    <p class="title2"><u>4.Mayda paketlar</u></p>
                    <p class="title2"><u>5.Sekogrammalar</u></p>
                    <p class="title2"><u>6.Posilkalar</u></p>
                    <p class="title2"><u>7.Qo'shimcha xizmatlar</u></p>
                    <p class="title2"><u>8.Kuryerlik xizmati (manzildan olish va manzilgacha
                        yetkazib
                        berish) - yuridik shaxslar uchun</u></p>
                    <p class="title2"><u>9.“Bir Qadam” xizmati (belgilangan pochta bo'limlari
                        orasida
                        yetkazib berish xizmati)</u></p>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade " id="kuryerlik_xizmatlari" role="tabpanel"
                aria-labelledby="kuryerlik_xizmatlari-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h3 class="pb-40 bborderdash mb-40 title">
                    Kuryerlik xizmatlari
                  </h3>
                  <div class="accordion-body" style="color: black;">
                  </div>
                </div>
              </div>
              <div class="tab-pane fade " id="bir_qadam" role="tabpanel" aria-labelledby="bir_qadam-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h3 class="pb-40 bborderdash mb-40 title">
                    “Bir Qadam” xizmati
                  </h3>
                  <div class="accordion-body" style="color: black;">
                  </div>
                </div>
              </div>

              <div class="tab-pane fade " id="tolovlar" role="tabpanel" aria-labelledby="tolovlar-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h3 class="pb-40 bborderdash mb-40 title">
                    To'lovlar
                  </h3>
                  <div class="accordion-body" style="color: black;">
                  </div>
                </div>
              </div>

              <div class="tab-pane fade " id="boshqalar" role="tabpanel" aria-labelledby="boshqalar-tab">
                <div class="overview__gitwrapper bgwhite round16 border">
                  <h3 class="pb-40 bborderdash mb-40 title">
                    Boshqalar
                  </h3>
                  <div class="accordion-body" style="color: black;">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- description body Section End -->
</template>


<style scoped>
.pricing-container {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.header {
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 24px;
  font-weight: bold;
  color: #183E98;
}

.weight-info {
  font-style: italic;
  margin-bottom: 0.5rem;
}

.address-info {
  font-style: italic;
  color: #666;
}

.pricing-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.pricing-table th,
.pricing-table td {
  border: 1px solid #000;
  padding: 0.8rem;
  text-align: left;
  color: black;
}

.number-column {
  width: 50px;
}

.price-column {
  width: 120px;
}

.section-header td {
  font-weight: bold;
  background-color: #f0f0f0;
}

.subsection-header td {
  font-style: italic;
  background-color: #f8f8f8;
}

.pricing-table tbody tr:nth-child(even):not(.section-header):not(.subsection-header) {
  background-color: #f5f5f5;
}

.note-cell {
  font-size: 0.9rem;
}

.note-cell p {
  margin-bottom: 0.5rem;
}

.note-cell p:first-child {
  font-weight: bold;
}

.insurance-row td {
  background-color: #f8f8f8;
}

.storage-info {
  background-color: #fff;
}

.storage-info ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.storage-info li {
  margin: 0;
  padding: 0;
  font-style: italic;
}

@media (max-width: 768px) {
  .pricing-table {
    font-size: 0.9rem;
  }

  .pricing-table th,
  .pricing-table td {
    padding: 0.5rem;
  }

  .number-column {
    width: 40px;
  }

  .price-column {
    width: 100px;
  }
}

@media (max-width: 480px) {
  .pricing-table {
    font-size: 0.8rem;
  }

  .header h1 {
    font-size: 1rem;
  }
}
</style>