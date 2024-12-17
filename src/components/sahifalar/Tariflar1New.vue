<template>
    <div>
      <!-- Hero Section -->
      <section class="banner__breadcumn ralt">
        <div id="searchPopup" class="search__popup">
          <form action="#" class="popup-content d-flex align-items-center">
            <input type="text" placeholder="Search Here" />
            <button id="closeButton">
              <i class="bi bi-x-lg"></i>
            </button>
          </form>
        </div>
        <div class="breadcumnd__wrapper">
          <div class="container">
            <div class="profile__wrappers setting__breadcumnd">
              <div class="row g-4 align-items-center justify-content-between">
                <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                  <div class="breadcumnd__content">
                    <span class="d4 mb-24">MDH davlatlariga yuborish xizmatlari</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Hero Section End -->
  
      <!-- Main Section -->
      <div id="app">
        <section class="setting__section pb-120">
          <div class="container__customizemain pt-100 pb-120 round16">
            <div class="container">
              <div class="row">
                <div class="col-lg-3">
                  <div class="setting__tabs p-8 round16 border bgwhite">
                    <ul class="nav border-0 round16 nav-tabs" role="tablist">
                      <li class="nav-item" v-for="(menu, index) in menus" :key="index">
                        <button class="nav-link" :class="{ active: activeMenu === menu.id }" @click="toggleMenu(menu.id)">
                          {{ menu.title }}
                        </button>
                        <div v-if="activeMenu === menu.id" class="submenu">
                          <ul>
                            <li class="nav-item" role="presentation" v-for="(subItem,) in menu.subItems"
                              :key="subItem.id">
                              <button :class="['nav-link', { active: activeSubItem === subItem.id }]" type="button"
                                @click="setActiveSubItem(subItem.id)">
                                <p class="title9">{{ subItem.title }}</p>
                              </button>
                            </li>
  
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-9">
                  <div class="tab-content" id="myTabContent">
                    <div v-if="activeSubItem === 'Pochta varaqchasi'">
                      
    
                    </div>
                    <div v-if="activeSubItem === 'Xat-xabarlar'">
                      <div class="tab-pane fade show" id="xat_xabarlar" role="tabpanel"
                        aria-labelledby="xat_xabarlar-tab">
                        <div class="overview__gitwrapper bgwhite round16 border">
                          <h2 class="pb-40 bborderdash mb-20 title2">Xat-xabarlar</h2>
                          <div class="pricing-container">
                            <div class="header">
                              <h1>Xat - bu ichida yozma xat-xabar, hujjatlar bo'lgan pochta jo'natmasi</h1>
                              <p class="weight-info">Vazni - 2 kg gacha</p>
                              <p class="address-info">Manzilgacha yetkazib beriladi (agar ma'lumotlari
                                to'liq va to'g'ri ko'rsatilgan bo'lsa)</p>
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
                                    <p>a) muddatli harbiy xizmatni o'tayotgan harbiy qismlarning shaxsiy
                                      tarkibi tomonidan jo'natiladigan og'irligi 20 g. gacha bo'lgan
                                      oddiy xatlar va pochta varaqchalari konvertlari yoki pochta
                                      varaqchasida maxsus uchburchakli shtamp izi mavjud bo'lgan
                                      hollarda;</p>
                                    <p>b) muddatli harbiy xizmatni o'tayotgan harbiy qismlarning shaxsiy
                                      tarkibi manzilga jo'natiladigan og'irligi 20 g. gacha bo'lgan
                                      oddiy xatlar va pochta varaqchalari.</p>
                                  </td>
                                  <td>-</td>
                                </tr>
                                <tr class="subsection-header">
                                  <td colspan="3">Buyurtmali (trek-kod bilan, ya'ni kuzatish imkoniyati
                                    bilan):</td>
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
                                  <td colspan="2">Sug'urta to'lovi - e'lon qilingan qiymatning har bir
                                    to'liq yoki noto'liq so'mi uchun</td>
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
                    </div>
  
                    <div v-if="activeSubItem === 'Banderollar'">
                      <div class="tab-pane fade show" id="banderollar" role="tabpanel" aria-labelledby="xat_xabarlar-tab">
                        <div class="overview__gitwrapper bgwhite round16 border">
                          <h2 class="pb-40 bborderdash mb-20 title2">
                            Banderollar
                          </h2>
                          <div class="pricing-container">
                            <div class="header">
                              <h1>Banderol - bu bosma nashrlar, ish qog’ozlari va boshqa buyumlar solingan
                                pochta jo’natmasining
                                turi.</h1>
                              <p class="weight-info">Vazni - 2 kg gacha</p>
                              <p class="address-info">Qabul qiluvchi manziliga xizmat ko'rsatadigan pochta
                                bo'limigacha yetkazib
                                beriladi (agar manzilgacha yetkazib berish qo'shimcha xizmatidan
                                foydalanilmagan bo'lsa)</p>
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
                                  <td colspan="3">Buyurtmali (trek-kod bilan, ya'ni kuzatish imkoniyati
                                    bilan):</td>
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
                                  <td colspan="2">Sug'urta to'lovi - e'lon qilingan qiymatning har bir
                                    to'liq yoki noto'liq
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
                    </div>
  
                    <div v-if="activeSubItem === 'Mayda paketlar'">
                      <div class="tab-pane fade show" id="mayda-paketlar" role="tabpanel"
                        aria-labelledby="mayda-paketlar-tab">
                        <div class="overview__gitwrapper bgwhite round16 border">
                          <h2 class="pb-40 bborderdash mb-20 title2">
                            Mayda paketlar
                          </h2>
                          <div class="pricing-container">
                            <div class="header">
                              <h1>Mayda paketlar — kichik va sinmaydigan predmetlarni jo’natishning qulay
                                usulidir. Ushbu
                                jo'natma turida kiyim-kechak, aksessuarlar va boshqa kichik sinmaydigan
                                mahsulotlarni yuborish
                                mumkin.</h1>
                              <p class="weight-info">Vazni - 2 kg gacha</p>
                              <p class="address-info">Qabul qiluvchi manziliga xizmat ko'rsatadigan pochta
                                bo'limigacha yetkazib
                                beriladi (agar manzilgacha yetkazib berish qo'shimcha xizmatidan
                                foydalanilmagan bo'lsa)</p>
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
                                  <td colspan="3">Buyurtmali (trek-kod bilan, ya'ni kuzatish imkoniyati
                                    bilan):</td>
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
                                      <li><span> <b></b> Oxirgi bo'limda saqlash muddati - 1 oy</span>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
  
                    </div>
  
                    <div v-if="activeSubItem === 'Sekogramma'">
                      <div class="tab-pane fade show" id="sekogramma" role="tabpanel" aria-labelledby="sekogramma-tab">
                        <div class="overview__gitwrapper bgwhite round16 border">
                          <h2 class="pb-40 bborderdash mb-20 title2">
                            Sekogrammalar
                          </h2>
                          <div class="pricing-container">
                            <div class="header">
                              <h1>Sekogramma - bu ko’zi ojizlar uchun muassasalar tomonidan pochta orqali
                                jo’natiladigan, ko’zi
                                ojizlar uchun ochiq holda beriladigan yozma xat-xabar, bosma nashrlar,
                                ko’zi ojizlar uchun yozuv
                                tizimining belgilariga ega tamg’a, shuningdek ko’zi ojizlar uchun
                                mo’ljallangan ovozli yozuvlar
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
                                  <td>Yer usti trаnspоrti bilаn jo'nаtilаdigаn sеkоgrаmmаlаr bеpul
                                    jo'nаtilаdi. </td>
                                  <td>0 so'm</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Posilkalar'">
                      <div class="tab-pane fade show" id="posilkalar" role="tabpanel" aria-labelledby="posilkalar-tab">
                        <div class="overview__gitwrapper bgwhite round16 border">
                          <h2 class="pb-40 bborderdash mb-20 title2">
                            Posilkalar
                          </h2>
                          <div class="pricing-container">
                            <div class="header">
                              <h1>Posilka — bu jo’natishga ruxsat etilgan sanoat tovarlari, oziq-ovqat
                                mahsulotlari,
                                madaniy-maishiy va boshqa tovarlar solingan pochta jo’natmasi turi.</h1>
                              <p class="weight-info">a) bo‘linadigan joylanmadan tashkil topgan jo'natmaning
                                umumiy vazni - 10
                                kg.gacha</p>
                              <p class="weight-info">b) bo‘linmaydigan joylanmadan tashkil topgan
                                jo'natmaning umumiy vazni - 15
                                kg.gacha</p>
                              <p class="address-info">Qabul qiluvchi manziliga xizmat ko'rsatadigan pochta
                                bo'limigacha yetkazib
                                beriladi (agar manzilgacha yetkazib berish qo'shimcha xizmatidan
                                foydalanilmagan bo'lsa)</p>
                            </div>
  
                            <table class="pricing-table">
                              <thead>
                                <tr>
                                  <th class="number-column">№</th>
                                  <th>Xizmatlar va jo'natmalarning turi</th>
                                  <th class="price-column">1 dona jo'natma uchun</th>
                                  <th class="price-column">Har bir to'liq va to'liq bo'lmagan 1 kg
                                    jo'natma uchun</th>
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
                    </div>
  
                    <div v-if="activeSubItem === 'Qo\'shimcha xizmatlar'">
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
                                    e'lon qilingan qiymatning har bir to'liq yoki to'liq bo'lmagan
                                    so'midan
                                  </td>
                                  <td>0,05</td>
                                  <td>0,05</td>
                                </tr>
  
                                <tr class="section-header">
                                  <td colspan="4">POCHTA JO'NATMALARI OLINGANLIGI TO'G'RISIDAGI
                                    XABARNOMANI JO'NATISH</td>
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
                                  <td>Avval yuborilgan pochta jo'natmasini topshirilganligi to'g'risida
                                    navbatdagi xabarnomani
                                    pochta orqali</td>
                                  <td>3 100 so'm</td>
                                  <td>2 200 so'm</td>
                                </tr>
  
                                <tr>
                                  <td>4</td>
                                  <td class="small-text">
                                    Avval yuborilgan pochta jo'natmasini olinganligi to'g'risidagi
                                    navbatdagi xabarnomani
                                    telegraf orqali yuborish uchun, telegraf xabarnomasi uchun to'langan
                                    haqdan tashqari,
                                    so'zlarning aniq soniga qarab belgilangan punktga telegraf so'rovi
                                    yuborish uchun haq va
                                    telegraf yig'imi olinadi
                                  </td>
                                  <td>-</td>
                                  <td>-</td>
                                </tr>
  
                                <tr class="section-header">
                                  <td colspan="4">POCHTA JO'NATMALARINI, DAVRIY NASHRLARNI QAYTA JO'NATISH
                                    VA QAYTARISH HAMDA
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
                                  <td>Xatlarni, pochta varaqchalarini, pul mablag'larining o'tkazmalarini
                                    pochta orqali qayta
                                    jo'natish yoki qaytarish uchun haq olinmaydi</td>
                                  <td colspan="2"></td>
                                </tr>
  
                                <tr>
                                  <td>3</td>
                                  <td>Ichki pochta almashinuvida pochta xat-xabarlarini qidirish bepul
                                    amalga oshiriladi</td>
                                  <td colspan="2"></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Kuryerlik xizmati - yuridik shaxslar uchun'">
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
                                  <th class="weight-column">Keyingi har bir to'liq va to'liq bo'lmagan 0,5
                                    kg. uchun</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    Qoraqalpog'iston Respublikasi, viloyatlar va Toshkent shahri
                                    o'rtasida pochta jo'natmalari
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
                                  <td colspan="4">Izoh: mazkur jo'natmalar 20 kg gachani tashkil etadi.
                                  </td>
                                </tr>
                                <tr class="note">
                                  <td colspan="4">**Mazkur kurerik jo'natmalariga belgilangan tariflar
                                    jo'natuvchining
                                    jo'natmalar hajmiga ko'ra, shartnoma asosida o'zgartirilishi mumkin.
                                  </td>
                                </tr>
                                <tr class="note">
                                  <td colspan="4">Kuremni chaqirish narhi 15 000 so'm.</td>
                                </tr>
                                <tr class="note-header">
                                  <td colspan="4">Kurer tomonidan ko'rsatiladigan qo'shimcha xizmatlar:
                                  </td>
                                </tr>
                                <tr class="note">
                                  <td colspan="4">1. Jo'natmani o'rash mahsulotlari (konvert, posilka
                                    qutisi va boshqalar)
                                    mijozda bo'lmagan holda.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === '\'Bir Qadam\' xizmati'">
                      <div class="tab-pane fade show" id="bir-qadam" role="tabpanel" aria-labelledby="bir-qadam-tab">
                        <div class="overview__gitwrapper bgwhite round16 border">
                          <h2 class="pb-40 bborderdash mb-20 title2">
                            "Bir Qadam" xizmati
                          </h2>
                          <div class="pricing-container">
                            <div class="header">
                              <h1>“Bir Qadam" xizmati orqali jo'natmalaringizni butun O'zbekiston bo'ylab
                                (belgilangan bo'limlar
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
                                  <th class="weight-column">Keyingi har bir to'liq va to'liq bo'lmagan 1,0
                                    kg. uchun</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    Toshkent shahar va viloyatlar markazlari o'rtasidagi jo'natmalar
                                    uchun (jo'natmalar pochta
                                    aloqasi obyektigacha)
                                  </td>
                                  <td class="price">15 000</td>
                                  <td class="price">3 000</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                    Nukus, Termiz va Urganch shaharlari uchun (jo'natmalar pochta aloqasi
                                    obyektigacha)
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
                                  <td colspan="4">Izoh: mazkur jo'natmalar 20 kg gachani tashkil etadi.
                                  </td>
                                </tr>
                                <tr class="note">
                                  <td colspan="4">Mijozda posilka qutisi bo'lmaganda, posilka qutisi uchun
                                    qo'shimcha haq
                                    undiriladi.</td>
                                </tr>
                                <tr class="note">
                                  <td colspan="4">Ushbu xizmat bo'yicha jo'natmani oxirgi bo'limda saqlash
                                    muddati - 14 kun
                                    (ulardan birinchi 5 kuni BEPUL)</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
  
  
                    <div v-if="activeSubItem === 'Pochta varaqchasi1'">
                      <!-- Pochta varaqchasi uchun mazmun -->
                      <div class="pricing-container">
                        <h2 class="pb-40 bborderdash mb-20 title2">
                          Pochta varaqchasi - bu ochiq holda jo'natiladigan pochta jo'natmasi turi (tabriknoma, otkritka)
                        </h2>
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th class="number-column" rowspan="2">№</th>
                              <th class="service-column" rowspan="2">Jo'natmalar va xizmatlarning turlari</th>
                              <th colspan="2" class="price-header">Narxi</th>
                            </tr>
                            <tr>
                              <th class="transport-type">Yer usti</th>
                              <th class="transport-type">Havo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="section-header">
                              <td colspan="4">POCHTA VARAQCHALARINI JO'NATISH (MDH DAVLATLARIGA)</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>oddiy (trek-kodsiz, ya'ni kuzatib bo'lmaydi)</td>
                              <td class="price">9 900 so'm</td>
                              <td class="price">10 600 so'm</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>buyurtmali (trek-kod bilan, ya'ni kuzatish imkoniyati bilan)</td>
                              <td class="price">11 200 so'm</td>
                              <td class="price">12 800 so'm</td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                Ushbu tariflar xorijiy mamlakatlarga yer usti transporti orqali 3 ta mamlakatga, havo
                                transporti orqali esa 71 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish
                                uchun amal qiladi
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                O'zbekistonga chet eldan kirib kelgan jo'natmalarni oxirgi bo'limda saqlash muddati - 1 oy
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Xat-xabarlar1'">
                      <div class="pricing-container">
                        <h2 class="pb-40 bborderdash mb-20 title2">
                          Xat - bu ichida yozma xat-xabar, hujjatlar bo’lgan pochta jo'natmasi turi.
                        </h2>
                        <p class="weight-info">Vazni - 2 kg gacha</p>
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th class="number-column" rowspan="2">№</th>
                              <th class="service-column" rowspan="2">Jo'natmalar va xizmatlarning turlari</th>
                              <th colspan="2" class="price-header">Narxi</th>
                            </tr>
                            <tr>
                              <th class="transport-type">Yer usti</th>
                              <th class="transport-type">Havo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="section-header">
                              <td colspan="4">XAT-XABARLARNI JO'NATISH (MDH DAVLATLARIGA)</td>
                            </tr>
                            <tr class="subsection-header">
                              <td colspan="4"><strong>Oddiy xatlar (trek-kodsiz, ya'ni kuzatib bo'lmaydi):</strong></td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>20 g. gacha</td>
                              <td class="price">9 900 so'm</td>
                              <td class="price">10 600 so'm</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>20 dan 100 g. gacha</td>
                              <td class="price">19 200 so'm</td>
                              <td class="price">21 400 so'm</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>100 dan 250 g. gacha</td>
                              <td class="price">47 400 so'm</td>
                              <td class="price">53 700 so'm</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>250 dan 500 g. gacha</td>
                              <td class="price">100 800 so'm</td>
                              <td class="price">114 300 so'm</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>500 dan 1000 g. gacha</td>
                              <td class="price">195 800 so'm</td>
                              <td class="price">222 800 so'm</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>1000 dan 2000 g. gacha ***</td>
                              <td class="price">528 500 so'm</td>
                              <td class="price">583 100 so'm</td>
                            </tr>
                            <tr class="subsection-header">
                              <td colspan="4"><strong>Buyurtmali xatlar (trek-kod bilan, ya'ni kuzatish imkoniyati
                                  bilan):</strong></td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>og'irligi uchun haq jo'natish usuliga qarab oddiy xat bilan bir xilda olinadi (yer usti
                                yoki havo transportiga qarab)</td>
                              <td colspan="2"></td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>buyurtma uchun haq - og'irligi va jo'natish usulidan qat'i-nazar butun jo'natma uchun
                                olinadi</td>
                              <td class="price" colspan="2">34 500 so'm</td>
                            </tr>
                            <tr class="subsection-header">
                              <td colspan="4"><strong>Qiymati e'lon qilingan xatlar:</strong></td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>og'irligi uchun haq jo'natish usuliga qarab oddiy xat bilan bir xil baholanadi (yer usti
                                yoki havo transportidalgiga qarab)</td>
                              <td colspan="2"></td>
                            </tr>
                            <tr>
                              <td>10</td>
                              <td>buyurtma uchun haq - og'irligi va jo'natish usulidan qat'iy-nazar butun jo'natma uchun
                              </td>
                              <td class="price" colspan="2">39 000 so'm</td>
                            </tr>
                            <tr>
                              <td>11</td>
                              <td>e'lon qilingan qiymat uchun haq - e'lon qilingan qiymatning har bir to'liq yoki to'liq
                                bo'lmagan SDR uchun</td>
                              <td class="price" colspan="2">5% SDR kurs bo'yicha</td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                Ushbu tariflar xorijiy mamlakatlarga yer usti transporti orqali 3 ta mamlakatga, havo
                                transporti orqali esa 71 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish
                                uchun amal qiladi
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>O'zbekistonga chet eldan kirib kelgan jo'natmalarni oxirgi bo'limda saqlash
                                  muddati - 1 oy</strong>
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Izoh:</strong> jo'natmaning to'liq bo'lmagan og'irligi 100 grammgacha bo'lganda,
                                to'liq bo'lmagan ushbu og'irlik uchun to'lov undirilmaydi
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Misol uchun, jo'natmaning umumiy og'irligi quyidagini tashkil etsa:</strong>
                              </td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,1 kg. = 6,0 kg.</td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,11 kg. = 7,0 kg. tarzida hisoblanadi.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Banderollar1'">
                      <!-- Banderollar uchun mazmun -->
                      <div class="pricing-container">
                        <h2 class="pb-40 bborderdash mb-20 title2">
                          Banderol - bu bosma nashrlar, ish qog’ozlari va boshqa buyumlar solingan pochta jo’natmasining
                          turi.
                        </h2>
                        <p class="weight-info">Vazni - 2 kg gacha</p>
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th class="number-column" rowspan="2">№</th>
                              <th class="service-column" rowspan="2">Jo'natmalar va xizmatlarning turlari</th>
                              <th colspan="2" class="price-header">Narxi</th>
                            </tr>
                            <tr>
                              <th class="transport-type">Yer usti</th>
                              <th class="transport-type">Havo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="section-header">
                              <td colspan="4">BANDEROLLARNI JO'NATISH (MDH DAVLATLARIGA)</td>
                            </tr>
                            <tr class="subsection-header">
                              <td colspan="4">Oddiy banderollar (trek-kodsiz, ya'ni kuzatib bo'lmaydi):</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>20 g. gacha</td>
                              <td class="price">9 900 so'm</td>
                              <td class="price">10 600 so'm</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>20 dan 100 g. gacha</td>
                              <td class="price">19 200 so'm</td>
                              <td class="price">21 400 so'm</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>100 dan 250 g. gacha</td>
                              <td class="price">47 400 so'm</td>
                              <td class="price">53 700 so'm</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>250 dan 500 g. gacha</td>
                              <td class="price">100 800 so'm</td>
                              <td class="price">114 300 so'm</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>500 dan 1000 g. gacha</td>
                              <td class="price">195 800 so'm</td>
                              <td class="price">222 800 so'm</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>1000 dan 2000 g. gacha ***</td>
                              <td class="price">528 500 so'm</td>
                              <td class="price">583 100 so'm</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Har bir keyingi to'liq yoki to'liq bo'lmagan 1000 g uchun ***</td>
                              <td class="price">90 600 so'm</td>
                              <td class="price">102 200 so'm</td>
                            </tr>
                            <tr class="subsection-header">
                              <td colspan="4">Buyurtmali banderollar (trek-kod bilan, ya'ni kuzatish imkoniyati bilan):
                              </td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>og'irligi uchun haq jo'natish usuliga qarab butun jo'natma uchun oddiy banderol bilan
                                bir xil olinadi</td>
                              <td colspan="2"></td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>buyurtma uchun haq - og'irligi va jo'natish usulidan qat'iy-nazar butun jo'natma uchun
                                olinadi</td>
                              <td class="price" colspan="2">34 500 so'm</td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                Ushbu tariflar xorijiy mamlakatlarga yer usti transporti orqali 3 ta mamlakatga, havo
                                transporti orqali 71 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish uchun
                                amal qiladi
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                O'zbekistonga chet eldan kirib kelgan jo'natmalarni oxirgi bo'limda saqlash muddati - 1 oy
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Izoh:</strong> jo'natmaning to'liq bo'lmagan og'irligi 100 grammgacha bo'lganda,
                                to'liq bo'lmagan ushbu og'irlik uchun to'lov undirilmaydi.
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Misol uchun, jo'natmaning umumiy og'irligi quyidagini tashkil etsa:</strong>
                              </td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,1 kg. = 6,0 kg.</td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,11 kg. = 7,0 kg. tarzida hisoblanadi.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Mayda paketlar1'">
                      <!-- Mayda paketlar uchun mazmun -->
                      <div class="pricing-container">
                        <h2 class="pb-40 bborderdash mb-20 title2">
                          Mayda Paketlar
                        </h2>
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th class="number-column" rowspan="2">№</th>
                              <th class="service-column" rowspan="2">Jo'natmalar va xizmatlarning turlari</th>
                              <th colspan="2" class="price-header">Narxi</th>
                            </tr>
                            <tr>
                              <th class="transport-type">Yer usti</th>
                              <th class="transport-type">Havo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="section-header">
                              <td colspan="4">MAYDA PAKETLARNI JO'NATISH (MDH DAVLATLARIGA)</td>
                            </tr>
                            <tr class="subsection-header">
                              <td colspan="4">Og'irlik uchun haq:</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>100 g. gacha</td>
                              <td class="price">22 200 so'm</td>
                              <td class="price">24 700 so'm</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>100 dan 250 g. gacha</td>
                              <td class="price">51 600 so'm</td>
                              <td class="price">58 900 so'm</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>250 dan 500 g. gacha</td>
                              <td class="price">99 600 so'm</td>
                              <td class="price">111 200 so'm</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>500 dan 1000 g. gacha</td>
                              <td class="price">172 100 so'm</td>
                              <td class="price">193 600 so'm</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>1000 dan 2000 g. gacha ***</td>
                              <td class="price">468 200 so'm</td>
                              <td class="price">490 200 so'm</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>buyurtma uchun haq - og'irligi va jo'natish usulidan qat'iy-nazar, butun buyurtma uchun
                                olinadi</td>
                              <td class="price">34 500 so'm</td>
                              <td class="price">34 500 so'm</td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                Ushbu tariflar xorijiy mamlakatlarga yer usti transporti orqali 3 ta mamlakatga, havo
                                transporti orqali 71 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish uchun
                                amal qiladi.
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                O'zbekistonga chet eldan kirib kelgan jo'natmalarni oxirgi bo'limda saqlash muddati - 1 oy
                              </td>
                            </tr>
                            <tr class="spacer">
                              <td colspan="4"></td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Izoh:</strong> jo'natmaning to'liq bo'lmagan og'irligi 100 grammgacha bo'lganda,
                                to'liq bo'lmagan ushbu og'irlik uchun to'lov undirilmaydi.
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Misol uchun, jo'natmaning umumiy og'irligi quyidagini tashkil etsa:</strong>
                              </td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,1 kg. = 6,0 kg.</td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,11 kg. = 7,0 kg. tarzida hisoblanadi.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Sekogramma1'">
                      <!-- Sekogramma uchun mazmun -->
                      <div class="pricing-container">
                        <h2 class="pb-40 bborderdash mb-20 title2">
                          Sekogramma - bu ko'zi ojiz va ko'rish qobiliyati zaif odamlar uchun maxsus ishlab chiqilgan.
                          Ushbu turdagi joʻnatmalarda barmoqlar bilan his qilish va o'qish mumkin bo'lgan sekografik matn
                          (Brayl alifbosi kabi bo'rttirma yozuv) mavjud.
                        </h2>
                        <p class="weight-info">Vazni - 7 kg gacha</p>
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th class="number-column">№</th>
                              <th>Jo'natmalar va xizmatlarning turlari</th>
                              <th class="price-column">Sekogrammalarni jo'natish uchun aviareyting</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="section-header">
                              <td colspan="3">SEKOGRAMMALARNI JO'NATISH</td>
                            </tr>
                            <tr class="subsection-header">
                              <td colspan="3">Oddiy (trek-kodsiz, ya'ni kuzatib bo'lmaydi):</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>20 g. gacha</td>
                              <td class="price">1 600 so'm</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>20 dan 100 g. gacha</td>
                              <td class="price">3 000 so'm</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>100 dan 250 g. gacha</td>
                              <td class="price">6 500 so'm</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>250 dan 500 g. gacha</td>
                              <td class="price">11 900 so'm</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>500 dan 1000 g. gacha</td>
                              <td class="price">21 600 so'm</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>1000 dan 2000 g. gacha ***</td>
                              <td class="price">34 600 so'm</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Har bir keyingi to'liq yoki to'liq bo'lmagan 1000 g uchun ***</td>
                              <td class="price">12 900 so'm</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Posilkalar1'">
                      <!-- Posilkalar uchun mazmun -->
                      <div class="pricing-container">
                        <h2 class="pb-40 bborderdash mb-20 title2">
                          Posilka — jo’natishga ruxsat etilgan sanoat tovarlari, oziq-ovqat mahsulotlari, madaniy-maishiy
                          va boshqa tovarlar solingan pochta jo’natmasi.
                        </h2>
                        <p class="weight-info">Vazni - 30 kg gacha</p>
                        <table class="pricing-table">
                          <thead>
                            <tr class="section-header">
                              <th colspan="6">POSILKA JO'NATISH (MDH DAVLATLARIGA)</th>
                            </tr>
                            <tr>
                              <th class="number-column" rowspan="2">№</th>
                              <th class="country-column" rowspan="2">Xizmatlar va jo'natmalarning turi</th>
                              <th colspan="2">Yer usti transportida</th>
                              <th colspan="2">Havo transportida</th>
                            </tr>
                            <tr>
                              <th>1 kg. gacha</th>
                              <th>Qo'shimcha har 1 kg. uchun</th>
                              <th>1 kg. gacha</th>
                              <th>Qo'shimcha har 1 kg. uchun</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Azerbayjon</td>
                              <td></td>
                              <td></td>
                              <td class="price">231 000 so'm</td>
                              <td class="price">40 000 so'm</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Armaniston</td>
                              <td></td>
                              <td></td>
                              <td class="price">341 000 so'm</td>
                              <td class="price">84 000 so'm</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Belarusiya</td>
                              <td></td>
                              <td></td>
                              <td class="price">341 000 so'm</td>
                              <td class="price">76 000 so'm</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Gruziya</td>
                              <td></td>
                              <td></td>
                              <td class="price">310 000 so'm</td>
                              <td class="price">56 000 so'm</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Qozog'iston</td>
                              <td class="price">327 000 so'm</td>
                              <td class="price">48 000 so'm</td>
                              <td class="price">358 000 so'm</td>
                              <td class="price">70 000 so'm</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>Qirg'iziston</td>
                              <td></td>
                              <td></td>
                              <td class="price">154 000 so'm</td>
                              <td class="price">23 000 so'm</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Moldova</td>
                              <td></td>
                              <td></td>
                              <td class="price">350 000 so'm</td>
                              <td class="price">110 000 so'm</td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>Rossiya</td>
                              <td class="price">422 000 so'm</td>
                              <td class="price">67 000 so'm</td>
                              <td class="price">459 000 so'm</td>
                              <td class="price">94 000 so'm</td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>Tojikiston</td>
                              <td></td>
                              <td></td>
                              <td class="price">167 000 so'm</td>
                              <td class="price">24 000 so'm</td>
                            </tr>
                            <tr>
                              <td>10</td>
                              <td>Turkmaniston</td>
                              <td class="price">176 000 so'm</td>
                              <td class="price">33 000 so'm</td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>11</td>
                              <td>Ukraina</td>
                              <td></td>
                              <td></td>
                              <td class="price">439 000 so'm</td>
                              <td class="price">100 000 so'm</td>
                            </tr>
                            <tr class="note">
                              <td colspan="6">
                                Ushbu tariflar xorijiy mamlakatlarga yer usti transporti orqali 3 ta mamlakatga, havo
                                transporti orqali 71 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish uchun
                                amal qiladi.
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="6">
                                O'zbekistonga chet eldan kirib kelgan jo'natmalarni oxirgi bo'limda saqlash muddati - 1 oy
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="6">
                                <strong>Izoh:</strong> jo'natmaning to'liq bo'lmagan og'irligi 100 grammgacha bo'lganda,
                                to'liq bo'lmagan ushbu og'irlik uchun to'lov undirilmaydi.
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="6">
                                <strong>Misol uchun, jo'natmaning umumiy og'irligi quyidagini tashkil etsa:</strong>
                              </td>
                            </tr>
                            <tr class="example">
                              <td colspan="6">6,1 kg. = 6,0 kg.</td>
                            </tr>
                            <tr class="example">
                              <td colspan="6">6,11 kg. = 7,0 kg. tarzida hisoblanadi.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Qoplar1'">
                      <!-- 'M' qoplar uchun mazmun -->
                      <div class="pricing-container">
                        <h2 class="pb-40 bborderdash mb-20 title2">
                          'M' Qoplar
                        </h2>
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th rowspan="2" class="number-column">№</th>
                              <th rowspan="2" class="service-column">Jo'natmalar va xizmatlarning turlari</th>
                              <th colspan="2" class="price-header">Narxi</th>
                            </tr>
                            <tr>
                              <th>Yer usti</th>
                              <th>Havo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>«M» belgili maxsus qoplar og'irligi uchun haq har bir to'liq yoki to'liq bo'lmagan 1
                                kg*** uchun olinadi</td>
                              <td class="price">71 900 so'm</td>
                              <td class="price">80 200 so'm</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>buyurtma uchun haq butun qop uchun olinadi</td>
                              <td class="price">27 700 so'm</td>
                              <td class="price">27 700 so'm</td>
                            </tr>
                            <tr class="info-row">
                              <td colspan="4">
                                • Ushbu tariflar xorijiy mamlakatlarga yer usti transporti orqali 3 ta mamlakatga, havo
                                transporti orqali esa 71 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish
                                uchun amal qiladi.
                              </td>
                            </tr>
                            <tr class="empty-row">
                              <td colspan="4"></td>
                            </tr>
                            <tr class="note-row">
                              <td colspan="4">
                                <strong>Izoh:</strong> jo'natmaning to'liq bo'lmagan og'irligi 100 grammgacha bo'lganda,
                                to'liq bo'lmagan ushbu og'irlik uchun to'lov undirilmaydi.
                              </td>
                            </tr>
                            <tr class="example-header">
                              <td colspan="4">
                                Misol uchun, jo'natmaning umumiy og'irligi quyidagini tashkil etsa:
                              </td>
                            </tr>
                            <tr class="example-row">
                              <td colspan="4">6,1 kg. = 6,0 kg;</td>
                            </tr>
                            <tr class="example-row">
                              <td colspan="4">6,11 kg. = 7,0 kg. tarzida hisoblanadi.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Qo\'shimcha xizmatlar1'">
                      <!-- Qoshimcha xizmatlar uchun mazmun -->
                      <div class="pricing-container">
                        <h2 class="pb-40 bborderdash mb-20 title2">
                          Qo'shimcha Xizmatlar
                        </h2>
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th class="number-column" rowspan="2">№</th>
                              <th class="service-column" rowspan="2">Jo'natmalar va xizmatlarning turlari</th>
                              <th colspan="2" class="price-header">To'lov miqdori, so'mda</th>
                            </tr>
                            <tr>
                              <th>korxona</th>
                              <th>jismoniy shaxslar</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>E'lon qilingan qiymat uchun haq - e'lon qilingan qiymatning har bir to'liq yoki to'liq
                                bo'lmagan SDRsi uchun olinadi</td>
                              <td colspan="2" class="price">5% SDR kurs bo'yicha</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Ro'yxatdan o'tkazilladigan pochta jo'natmasi olinganligi to'g'risidagi xabarnoma uchun
                              </td>
                              <td colspan="2" class="price">5 000 so'm</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Posilkani topshirilmaganligi to'g'risidagi xabarnoma uchun</td>
                              <td colspan="2" class="price">5 000 so'm</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Jo'natilayotgan pochta jo'natmalari uchun, mo'ljallangan mamlakatda shaxsan qo'liga
                                topshiriladigan posilkalarni ham hisobga olganda (jo'natuvchining hoхishiga ko'ra), yoki
                                oluvchining qo'liga ushbu jo'natmalar kelganligi to'g'risidagi xabarnomani topshirish
                                uchun</td>
                              <td colspan="2" class="price">3 500 so'm</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Buyurtmali jo'natmani shaxsan qo'liga topshirish uchun</td>
                              <td colspan="2" class="price">3 500 so'm</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>Jo'natuvchi tomonidan pochta jo'natmasini qaytarish yoki manzili o'zgarganlig
                                to'g'risida berilgan ariza uchun</td>
                              <td colspan="2" class="price">4 400 so'm</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Agar jo'natuvchi 27 va 28 pozitsiyalarda ko'rsatilgan xizmatlar telegraf yoki aviapochta
                                orqali ko'rsatilishini hoхlasa, ushbu bandlarda, ko'rsatilgan pochta to'lovlariga
                                so'zlarning aniq soni bo'yicha telegrammaning narxi yoki og'irligi 20g gacha bo'lgan
                                jo'natma havo transporti orqali oddiy xatni jo'natish uchun olinadigan qo'shimcha haq
                                qo'shiladi</td>
                              <td colspan="2"></td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>Jo'natilayotgan posilkalarni tekshirishda bojxona rasmiyatchiligi uchun, har bir
                                posilkaga</td>
                              <td colspan="2" class="price">4 400 so'm</td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>Jo'natilayotgan posilkalarni tekshirishda bojxona rasmiyatchiligi uchun, har bir mayda
                                paketga</td>
                              <td colspan="2" class="price">3 500 so'm</td>
                            </tr>
                            <tr>
                              <td>10</td>
                              <td>Xorijdan olinayotgan posilkalarni tekshirishda bojxona rasmiyatchiligi uchun, har bir
                                posilkaga</td>
                              <td colspan="2" class="price">6 200 so'm</td>
                            </tr>
                            <tr>
                              <td>11</td>
                              <td>O'zbekistondan jo'natiladigan, og'irligi va e'lon qilingan qiymatidan, qaysi mamlakatga
                                yuborilayotganligidan qat'iy-nazar qiymati e'lon qilingan posilkalar uchun e'kspeditsion
                                yig'im</td>
                              <td colspan="2" class="price">8 400 so'm</td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                Ushbu tariflar xorijiy mamlakatlarga yer usti transporti orqali 3 ta mamlakatga, havo
                                transporti orqali 71 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish uchun
                                amal qiladi.
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Izoh:</strong> jo'natmaning to'liq bo'lmagan og'irligi 100 grammgacha bo'lganda,
                                to'liq bo'lmagan ushbu og'irlik uchun to'lov undirilmaydi.
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Misol uchun, jo'natmaning umumiy og'irligi quyidagini tashkil etsa:</strong>
                              </td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,1 kg. = 6,0 kg.</td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,11 kg. = 7,0 kg. tarzida hisoblanadi.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Pochta1'">
                      <!-- EMS: Xalqaro Tezkor Pochta uchun mazmun -->
                    </div>
  
  
  
  
  
  
                    <div v-if="activeSubItem === 'Pochta varaqchasi2'">
                      <!-- Pochta varaqchasi uchun mazmun -->
                      <div class="pricing-container">
                        <h2 class="pb-40 bborderdash mb-20 title2">
                          Pochta varaqchasi - bu ochiq holda jo'natiladigan pochta jo'natmasi turi (tabriknoma, otkritka)
                        </h2>
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th class="number-column" rowspan="2">№</th>
                              <th class="service-column" rowspan="2">Jo'natmalar va xizmatlarning turlari</th>
                              <th colspan="2" class="price-header">Narxi</th>
                            </tr>
                            <tr>
                              <th class="transport-type">Yer usti</th>
                              <th class="transport-type">Havo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="section-header">
                              <td colspan="4">POCHTA VARAQCHALARINI JO'NATISH (UZOQ XORIJIY MAMLAKATLARGA)</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>oddiy (trek-kodsiz, ya'ni kuzatib bo'lmaydi)</td>
                              <td class="price">11 300 so'm</td>
                              <td class="price">12 300 so'm</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>buyurtmali (trek-kod bilan, ya'ni kuzatish imkoniyati bilan)</td>
                              <td class="price">19 700 so'm</td>
                              <td class="price">23 600 so'm</td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                Ushbu tariflar xorijiy mamlakatlarga yer usti transporti orqali 3 ta mamlakatga, havo
                                transporti orqali esa 71 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish
                                uchun amal qiladi
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>O'zbekistonga chet eldan kirib kelgan jo'natmalarni oxirgi bo'limda saqlash
                                  muddati - 1 oy</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Xat-xabarlar2'">
                      <!-- Xat-xabarlar uchun mazmun -->
                      <div class="pricing-container">
                        <h2 class="pb-40 bborderdash mb-20 title2">
                          Xat - bu ichida yozma xat-xabar, hujjatlar bo’lgan pochta jo'natmasi turi.
                        </h2>
                        <p class="weight-info">Vazni - 2 kg gacha</p>
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th class="number-column" rowspan="2">№</th>
                              <th class="service-column" rowspan="2">Jo'natmalar va xizmatlarning turlari</th>
                              <th colspan="2" class="price-header">Narxi</th>
                            </tr>
                            <tr>
                              <th class="transport-type">Yer usti</th>
                              <th class="transport-type">Havo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="section-header">
                              <td colspan="4">XAT-XABARLARNI JO'NATISH (UZOQ XORIJ DAVLATLARIGA)</td>
                            </tr>
                            <tr class="subsection-header">
                              <td colspan="4"><strong>Oddiy xatlar (trek-kodsiz, ya'ni kuzatib bo'lmaydi):</strong></td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>20 g. gacha</td>
                              <td class="price">11 300 so'm</td>
                              <td class="price">12 300 so'm</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>20 dan 100 g. gacha</td>
                              <td class="price">21 900 so'm</td>
                              <td class="price">26 500 so'm</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>100 dan 250 g. gacha</td>
                              <td class="price">53 900 so'm</td>
                              <td class="price">68 700 so'm</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>250 dan 500 g. gacha</td>
                              <td class="price">114 600 so'm</td>
                              <td class="price">146 200 so'm</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>500 dan 1000 g. gacha</td>
                              <td class="price">222 500 so'm</td>
                              <td class="price">286 900 so'm</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>1000 dan 2000 g. gacha ***</td>
                              <td class="price">565 200 so'm</td>
                              <td class="price">709 800 so'm</td>
                            </tr>
                            <tr class="subsection-header">
                              <td colspan="4"><strong>Buyurtmali xatlar (trek-kod bilan, ya'ni kuzatish imkoniyati
                                  bilan):</strong></td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>og'irligi uchun haq jo'natish usuliga qarab oddiy xat bilan bir xilda olinadi (yer usti
                                yoki havo transportiga qarab)</td>
                              <td colspan="2"></td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>buyurtma uchun haq - og'irligi va jo'natish usulidan qat'i-nazar butun jo'natma uchun
                                olinadi</td>
                              <td class="price" colspan="2">36 400 so'm</td>
                            </tr>
                            <tr class="subsection-header">
                              <td colspan="4"><strong>Qiymati e'lon qilingan xatlar:</strong></td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>og'irligi uchun haq jo'natish usuliga qarab oddiy xat bilan bir xil baholanadi (yer usti
                                yoki havo transportidalgiga qarab)</td>
                              <td colspan="2"></td>
                            </tr>
                            <tr>
                              <td>10</td>
                              <td>buyurtma uchun haq - og'irligi va jo'natish usulidan qat'iy-nazar butun jo'natma uchun
                              </td>
                              <td class="price" colspan="2">45 600 so'm</td>
                            </tr>
                            <tr>
                              <td>11</td>
                              <td>e'lon qilingan qiymat uchun haq - e'lon qilingan qiymatning har bir to'liq yoki to'liq
                                bo'lmagan SDR uchun</td>
                              <td class="price" colspan="2">5% SDR kurs bo'yicha</td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                Ushbu tariflar xorijiy mamlakatlarga yer usti transporti orqali 3 ta mamlakatga, havo
                                transporti orqali esa 71 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish
                                uchun amal qiladi
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>O'zbekistonga chet eldan kirib kelgan jo'natmalarni oxirgi bo'limda saqlash
                                  muddati - 1 oy</strong>
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Izoh:</strong> jo'natmaning to'liq bo'lmagan og'irligi 100 grammgacha bo'lganda,
                                to'liq bo'lmagan ushbu og'irlik uchun to'lov undirilmaydi
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Misol uchun, jo'natmaning umumiy og'irligi quyidagini tashkil etsa:</strong>
                              </td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,1 kg. = 6,0 kg.</td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,11 kg. = 7,0 kg. tarzida hisoblanadi.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Banderollar2'">
                      <!-- Banderollar uchun mazmun -->
                      <div class="pricing-container">
                        <h2 class="pb-40 bborderdash mb-20 title2">
                          Banderol - bu bosma nashrlar, ish qog’ozlari va boshqa buyumlar solingan pochta jo’natmasining
                          turi.
                        </h2>
                        <p class="weight-info">Vazni - 2 kg gacha</p>
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th class="number-column" rowspan="2">№</th>
                              <th class="service-column" rowspan="2">Jo'natmalar va xizmatlarning turlari</th>
                              <th colspan="2" class="price-header">Narxi</th>
                            </tr>
                            <tr>
                              <th class="transport-type">Yer usti</th>
                              <th class="transport-type">Havo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="section-header">
                              <td colspan="4">BANDEROLLARNI JO'NATISH (UZOQ XORIJ DAVLATLARIGA)</td>
                            </tr>
                            <tr class="subsection-header">
                              <td colspan="4">Oddiy banderollar (trek-kodsiz, ya'ni kuzatib bo'lmaydi):</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>20 g. gacha</td>
                              <td class="price">11 300 so'm</td>
                              <td class="price">12 300 so'm</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>20 dan 100 g. gacha</td>
                              <td class="price">21 900 so'm</td>
                              <td class="price">26 500 so'm</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>100 dan 250 g. gacha</td>
                              <td class="price">53 900 so'm</td>
                              <td class="price">68 700 so'm</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>250 dan 500 g. gacha</td>
                              <td class="price">114 600 so'm</td>
                              <td class="price">146 200 so'm</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>500 dan 1000 g. gacha</td>
                              <td class="price">222 500 so'm</td>
                              <td class="price">286 900 so'm</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>1000 dan 2000 g. gacha ***</td>
                              <td class="price">565 200 so'm</td>
                              <td class="price">709 800 so'm</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Har bir keyingi to'liq yoki to'liq bo'lmagan 1000 g uchun ***</td>
                              <td class="price">91 300 so'm</td>
                              <td class="price">138 300 so'm</td>
                            </tr>
                            <tr class="subsection-header">
                              <td colspan="4">Buyurtmali banderollar (trek-kod bilan, ya'ni kuzatish imkoniyati bilan):
                              </td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>og'irligi uchun haq jo'natish usuliga qarab butun jo'natma uchun oddiy banderol bilan
                                bir xil olinadi</td>
                              <td colspan="2"></td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>buyurtma uchun haq - og'irligi va jo'natish usulidan qat'iy-nazar butun jo'natma uchun
                                olinadi</td>
                              <td class="price" colspan="2">36 400 so'm</td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                Ushbu tariflar xorijiy mamlakatlarga yer usti transporti orqali 3 ta mamlakatga, havo
                                transporti orqali 71 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish uchun
                                amal qiladi
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                O'zbekistonga chet eldan kirib kelgan jo'natmalarni oxirgi bo'limda saqlash muddati - 1 oy
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Izoh:</strong> jo'natmaning to'liq bo'lmagan og'irligi 100 grammgacha bo'lganda,
                                to'liq bo'lmagan ushbu og'irlik uchun to'lov undirilmaydi.
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Misol uchun, jo'natmaning umumiy og'irligi quyidagini tashkil etsa:</strong>
                              </td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,1 kg. = 6,0 kg.</td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,11 kg. = 7,0 kg. tarzida hisoblanadi.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Mayda paketlar2'">
                      <!-- Mayda paketlar uchun mazmun -->
                      <div class="pricing-container">
                        <h2 class="pb-40 bborderdash mb-20 title2">
                          Mayda Paketlar
                        </h2>
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th class="number-column" rowspan="2">№</th>
                              <th class="service-column" rowspan="2">Jo'natmalar va xizmatlarning turlari</th>
                              <th colspan="2" class="price-header">Narxi</th>
                            </tr>
                            <tr>
                              <th class="transport-type">Yer usti</th>
                              <th class="transport-type">Havo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="section-header">
                              <td colspan="4">MAYDA PAKETLARNI JO'NATISH (UZOQ XORIJ DAVLATLARIGA)</td>
                            </tr>
                            <tr class="subsection-header">
                              <td colspan="4">Og'irlik uchun haq:</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>100 g. gacha</td>
                              <td class="price">24 700 so'm</td>
                              <td class="price">36 900 so'm</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>100 dan 250 g. gacha</td>
                              <td class="price">57 500 so'm</td>
                              <td class="price">87 800 so'm</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>250 dan 500 g. gacha</td>
                              <td class="price">111 800 so'm</td>
                              <td class="price">170 700 so'm</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>500 dan 1000 g. gacha</td>
                              <td class="price">213 100 so'm</td>
                              <td class="price">326 500 so'm</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>1000 dan 2000 g. gacha ***</td>
                              <td class="price">519 800 so'm</td>
                              <td class="price">640 900 so'm</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>buyurtma uchun haq - og'irligi va jo'natish usulidan qat'iy-nazar, butun buyurtma uchun
                                olinadi</td>
                              <td class="price">33 200 so'm</td>
                              <td class="price">38 200 so'm</td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                Ushbu tariflar xorijiy mamlakatlarga yer usti transporti orqali 3 ta mamlakatga, havo
                                transporti orqali 71 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish uchun
                                amal qiladi.
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                O'zbekistonga chet eldan kirib kelgan jo'natmalarni oxirgi bo'limda saqlash muddati - 1 oy
                              </td>
                            </tr>
                            <tr class="spacer">
                              <td colspan="4"></td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Izoh:</strong> jo'natmaning to'liq bo'lmagan og'irligi 100 grammgacha bo'lganda,
                                to'liq bo'lmagan ushbu og'irlik uchun to'lov undirilmaydi.
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Misol uchun, jo'natmaning umumiy og'irligi quyidagini tashkil etsa:</strong>
                              </td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,1 kg. = 6,0 kg.</td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,11 kg. = 7,0 kg. tarzida hisoblanadi.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Sekogramma2'">
                      <!-- Sekogramma uchun mazmun -->
                      <div class="pricing-container">
                        <table class="pricing-table">
                          <thead>
                            <tr class="section-header">
                              <th colspan="4">3.2. Uzoq xorijiy mamlakatlar</th>
                            </tr>
                            <tr>
                              <th class="band-column">Band</th>
                              <th class="poz-column">Poz.</th>
                              <th class="service-column">Jo'natmalar va xizmatlarning turlari</th>
                              <th class="price-column">Sekogram-malarni jo'natish uchun aviayig'im</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>3</td>
                              <td></td>
                              <td class="bold">Banderollar:*</td>
                              <td></td>
                            </tr>
                            <tr class="subsection-header">
                              <td></td>
                              <td></td>
                              <td colspan="2">Quyidagi og'irlikdagi oddiy banderollar:</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>1</td>
                              <td>20 g. gacha</td>
                              <td class="price">1 600</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>2</td>
                              <td>20 dan 100 g. gacha</td>
                              <td class="price">3 000</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>3</td>
                              <td>100 dan 250 g. gacha</td>
                              <td class="price">6 500</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>4</td>
                              <td>250 dan 500 g. gacha</td>
                              <td class="price">11 900</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>5</td>
                              <td>500 dan 1000 g. gacha</td>
                              <td class="price">21 600</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>6</td>
                              <td>1000 dan 2000 g. gacha ***</td>
                              <td class="price">34 600</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>7</td>
                              <td>Har bir keyingi to'liq yoki to'liq bo'lmagan 1000 g uchun ***</td>
                              <td class="price">12 900</td>
                            </tr>
                            <tr class="subsection-header">
                              <td class="band-label">Band</td>
                              <td class="poz-label">Poz.</td>
                              <td colspan="2">Buyurtmali banderollar:</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>9</td>
                              <td>buyurtma uchun haq - og'irligi va jo'natish usulidan qat'iy-nazar butun jo'natma uchun
                                olinadi</td>
                              <td class="price">36 400</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>10</td>
                              <td>Sekogrammalarni (ko'rlar uchun bo'rtib chiqqan shriftli bosma nashrlar) jo'natish uchun
                                faqat aviayig'im olinadi. Og'irligi, buyurtma, jo'natma olinganligi to'g'risidagi
                                xabarnoma, shaxsan qo'liga topshirish, shuningdek, ma'lumotlar to'plash uchun haq
                                olinmaydi.</td>
                              <td></td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <p><em>Izoh:</em> Xalqaro pochta jo'natmalarini, posilkalarni o'rovlash va qayta
                                  o'rovlash, mayda paketlarni, banderol va posilkalarni saqlash, og'irligi 500g.dan ko'p
                                  bo'lgan mayda paketlarni uyiga yetkazib berish, bojxona deklaratsiyasini to'ldirish va
                                  boshqa shunday o'xshash qo'shimcha xizmatlar tariflari ichki ayirboshlashdagi o'xshash
                                  qo'shimcha xizmatlarning tarifariga ko'ra ishlab chiqiladi va tasdiqlanadi.</p>
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <p>** Ushbu tariflar xorijiy mamlakatlarga yer usti transporti orqali 3 ta mamlakatga,
                                  havo transporti orqali 71 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish
                                  uchun amal qiladi.</p>
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <p>*** Izoh: jo'natmaning to'liq bo'lmagan og'irligi 100 grammgacha bo'lganda, to'liq
                                  bo'lmagan ushbu og'irlik uchun to'lov undirilmaydi.</p>
                              </td>
                            </tr>
                            <tr class="note">
                              <td colspan="4">
                                <strong>Misol uchun, jo'natmaning umumiy og'irligi quyidagini tashkil etsa:</strong>
                              </td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,1 kg. = 6,0 kg.</td>
                            </tr>
                            <tr class="example">
                              <td colspan="4">6,11 kg. = 7,0 kg. tarzida hisoblanadi.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Posilkalar2'">
                      <!-- Posilkalar uchun mazmun -->
                      <div class="pricing-container">
                        <table class="pricing-table">
                          <thead>
                            <tr class="section-header">
                              <th colspan="4">2.2. Uzoq xorijiy mamlakatlar</th>
                            </tr>
                            <tr>
                              <td colspan="4" class="subsection-header">6 Posilka jo'natish</td>
                            </tr>
                            <tr>
                              <th class="number-column" rowspan="2">№</th>
                              <th class="service-column" rowspan="2">Xizmatlar va jo'natmalarning turi</th>
                              <th colspan="2" class="transport-header">Havo transportida jo'natish</th>
                            </tr>
                            <tr>
                              <th>To'liq va to'liq bo'lmagan 1 kg jo'natma uchun tarif</th>
                              <th>Har bir keyingi to'liq va to'liq bo'lmagan 1 kg jo'natma uchun qo'shimcha to'lov***</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="region-header">
                              <td colspan="4">YEVROPA</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>Avstriya</td>
                              <td class="price">314 000</td>
                              <td class="price">65 000</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Belgiya</td>
                              <td class="price">379 000</td>
                              <td class="price">71 000</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Bolgariya</td>
                              <td class="price">313 000</td>
                              <td class="price">98 000</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Buyuk Britaniya</td>
                              <td class="price">453 000</td>
                              <td class="price">101 000</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Vengriya</td>
                              <td class="price">377 000</td>
                              <td class="price">101 000</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>Germaniya</td>
                              <td class="price">453 000</td>
                              <td class="price">70 000</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Greciya</td>
                              <td class="price">300 000</td>
                              <td class="price">91 000</td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>Daniya</td>
                              <td class="price">346 000</td>
                              <td class="price">67 000</td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>Irlandiya</td>
                              <td class="price">270 000</td>
                              <td class="price">54 000</td>
                            </tr>
                            <tr>
                              <td>10</td>
                              <td>Islandiya</td>
                              <td class="price">459 000</td>
                              <td class="price">102 000</td>
                            </tr>
                            <tr>
                              <td>11</td>
                              <td>Ispaniya</td>
                              <td class="price">343 000</td>
                              <td class="price">88 000</td>
                            </tr>
                            <tr>
                              <td>12</td>
                              <td>Italiya</td>
                              <td class="price">301 000</td>
                              <td class="price">68 000</td>
                            </tr>
                            <tr>
                              <td>13</td>
                              <td>Kipr</td>
                              <td class="price">341 000</td>
                              <td class="price">103 000</td>
                            </tr>
                            <tr>
                              <td>14</td>
                              <td>Latviya</td>
                              <td class="price">219 000</td>
                              <td class="price">60 000</td>
                            </tr>
                            <tr>
                              <td>15</td>
                              <td>Litva</td>
                              <td class="price">323 000</td>
                              <td class="price">81 000</td>
                            </tr>
                            <tr>
                              <td>16</td>
                              <td>Lyuksemburg</td>
                              <td class="price">298 000</td>
                              <td class="price">63 000</td>
                            </tr>
                            <tr>
                              <td>17</td>
                              <td>Makedoniya</td>
                              <td class="price">327 000</td>
                              <td class="price">107 000</td>
                            </tr>
                            <tr>
                              <td>18</td>
                              <td>Malta</td>
                              <td class="price">289 000</td>
                              <td class="price">63 000</td>
                            </tr>
                            <tr>
                              <td>19</td>
                              <td>Niderlandiya</td>
                              <td class="price">303 000</td>
                              <td class="price">69 000</td>
                            </tr>
                            <tr>
                              <td>20</td>
                              <td>Norvegiya</td>
                              <td class="price">443 000</td>
                              <td class="price">77 000</td>
                            </tr>
                            <tr>
                              <td>21</td>
                              <td>Pol'sha</td>
                              <td class="price">370 000</td>
                              <td class="price">98 000</td>
                            </tr>
                            <tr>
                              <td>22</td>
                              <td>Portugaliya</td>
                              <td class="price">362 000</td>
                              <td class="price">83 000</td>
                            </tr>
                            <tr>
                              <td>23</td>
                              <td>Ruminiya</td>
                              <td class="price">447 000</td>
                              <td class="price">111 000</td>
                            </tr>
                            <tr>
                              <td>24</td>
                              <td>Serbiya</td>
                              <td class="price">332 000</td>
                              <td class="price">84 000</td>
                            </tr>
                            <tr>
                              <td>25</td>
                              <td>Sloveniya</td>
                              <td class="price">292 000</td>
                              <td class="price">94 000</td>
                            </tr>
                            <tr>
                              <td>26</td>
                              <td>Slovakiya</td>
                              <td class="price">291 000</td>
                              <td class="price">93 000</td>
                            </tr>
                            <tr>
                              <td>27</td>
                              <td>Turkiya</td>
                              <td class="price">380 000</td>
                              <td class="price">78 000</td>
                            </tr>
                            <tr>
                              <td>28</td>
                              <td>Finlyandiya</td>
                              <td class="price">408 000</td>
                              <td class="price">72 000</td>
                            </tr>
                            <tr>
                              <td>29</td>
                              <td>Fransiya</td>
                              <td class="price">343 000</td>
                              <td class="price">66 000</td>
                            </tr>
                            <tr>
                              <td>30</td>
                              <td>Xorvatiya</td>
                              <td class="price">267 000</td>
                              <td class="price">85 000</td>
                            </tr>
                            <tr>
                              <td>31</td>
                              <td>Chehiya</td>
                              <td class="price">255 000</td>
                              <td class="price">70 000</td>
                            </tr>
                            <tr>
                              <td>32</td>
                              <td>Shvetsiya</td>
                              <td class="price">418 000</td>
                              <td class="price">72 000</td>
                            </tr>
                            <tr>
                              <td>33</td>
                              <td>Shveycariya</td>
                              <td class="price">298 000</td>
                              <td class="price">68 000</td>
                            </tr>
                            <tr>
                              <td>34</td>
                              <td>Estoniya</td>
                              <td class="price">326 000</td>
                              <td class="price">82 000</td>
                            </tr>
                            <tr class="region-header">
                              <td colspan="4">OSIYO</td>
                            </tr>
                            <tr>
                              <td>35</td>
                              <td>Bahrayn</td>
                              <td class="price">370 000</td>
                              <td class="price">151 000</td>
                            </tr>
                            <tr>
                              <td>36</td>
                              <td>Gonkong</td>
                              <td class="price">349 000</td>
                              <td class="price">63 000</td>
                            </tr>
                            <tr>
                              <td>37</td>
                              <td>Indoneziya</td>
                              <td class="price">313 000</td>
                              <td class="price">104 000</td>
                            </tr>
                            <tr>
                              <td>38</td>
                              <td>Eron</td>
                              <td class="price">404 000</td>
                              <td class="price">97 000</td>
                            </tr>
                            <tr>
                              <td>39</td>
                              <td>Hindiston</td>
                              <td class="price">274 000</td>
                              <td class="price">46 000</td>
                            </tr>
                            <tr>
                              <td>40</td>
                              <td>Isroil</td>
                              <td class="price">290 000</td>
                              <td class="price">53 000</td>
                            </tr>
                            <tr>
                              <td>41</td>
                              <td>Qatar</td>
                              <td class="price">350 000</td>
                              <td class="price">149 000</td>
                            </tr>
                            <tr>
                              <td>42</td>
                              <td>Quvayt</td>
                              <td class="price">346 000</td>
                              <td class="price">146 000</td>
                            </tr>
                            <tr>
                              <td>43</td>
                              <td>Xitoy</td>
                              <td class="price">273 000</td>
                              <td class="price">78 000</td>
                            </tr>
                            <tr>
                              <td>44</td>
                              <td>Janubiy Koreya</td>
                              <td class="price">296 000</td>
                              <td class="price">71 000</td>
                            </tr>
                            <tr>
                              <td>45</td>
                              <td>Malayziya</td>
                              <td class="price">286 000</td>
                              <td class="price">80 000</td>
                            </tr>
                            <tr>
                              <td>46</td>
                              <td>Birlashgan Arab Amirliklari</td>
                              <td class="price">189 000</td>
                              <td class="price">38 000</td>
                            </tr>
                            <tr>
                              <td>47</td>
                              <td>Ummon</td>
                              <td class="price">361 000</td>
                              <td class="price">149 000</td>
                            </tr>
                            <tr>
                              <td>48</td>
                              <td>Saudiya Arabistoni</td>
                              <td class="price">347 000</td>
                              <td class="price">160 000</td>
                            </tr>
                            <tr>
                              <td>49</td>
                              <td>Singapur</td>
                              <td class="price">277 000</td>
                              <td class="price">73 000</td>
                            </tr>
                            <tr>
                              <td>50</td>
                              <td>Tailand</td>
                              <td class="price">252 000</td>
                              <td class="price">66 000</td>
                            </tr>
                            <tr>
                              <td>51</td>
                              <td>Filippin</td>
                              <td class="price">243 000</td>
                              <td class="price">92 000</td>
                            </tr>
                            <tr>
                              <td>52</td>
                              <td>Shri Lanka</td>
                              <td class="price">252 000</td>
                              <td class="price">89 000</td>
                            </tr>
                            <tr>
                              <td>53</td>
                              <td>Yaponiya</td>
                              <td class="price">289 000</td>
                              <td class="price">75 000</td>
                            </tr>
                            <tr class="region-header">
                              <td colspan="4">AMERIKA</td>
                            </tr>
                            <tr>
                              <td>54</td>
                              <td>Braziliya</td>
                              <td class="price">486 000</td>
                              <td class="price">197 000</td>
                            </tr>
                            <tr>
                              <td>55</td>
                              <td>Kanada</td>
                              <td class="price">438 000</td>
                              <td class="price">154 000</td>
                            </tr>
                            <tr>
                              <td>56</td>
                              <td>Kolumbiya</td>
                              <td class="price">452 000</td>
                              <td class="price">188 000</td>
                            </tr>
                            <tr>
                              <td>57</td>
                              <td>Meksika</td>
                              <td class="price">360 000</td>
                              <td class="price">153 000</td>
                            </tr>
                            <tr>
                              <td>58</td>
                              <td>AQSH</td>
                              <td class="price">416 000</td>
                              <td class="price">169 000</td>
                            </tr>
                            <tr class="region-header">
                              <td colspan="4">AFRIKA</td>
                            </tr>
                            <tr>
                              <td>59</td>
                              <td>Misr</td>
                              <td class="price">323 000</td>
                              <td class="price">102 000</td>
                            </tr>
                            <tr class="region-header">
                              <td colspan="4">Avstraliya</td>
                            </tr>
                            <tr>
                              <td>60</td>
                              <td>Avstraliya</td>
                              <td class="price">491 000 </td>
                              <td class="price">210 000</td>
                            </tr>
                            <tr>
                              <td>61</td>
                              <td>Yangi Zelandiya</td>
                              <td class="price">434 000 </td>
                              <td class="price">146 000</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colspan="4" class="note">
                                Izoh: Xalqaro pochta jo'natmalarini, posilkalarni o'rovlash va qayta o'rovlash, mayda
                                paketlarni,
                                banderol va posilkalarni saqlash, og'irligi 500g.dan kop bo'lgan mayda paketlarni uyga
                                yetkazib
                                berish, bojxona deklaratsiyasini to'ldirish va boshqa shunga o'xshash qo'shimcha xizmatlar
                                tariflari
                                ichki arifboelashdagi o'xshash qo'shimcha xizmatlarning tariflariga ko'ra ishlab chiqiladi
                                va
                                tasdiqlanadi.
                              </td>
                            </tr>
                            <tr>
                              <td colspan="4" class="note">
                                ** Ushbu tariflar MDH va horijiy mamlakatlarga yer usti transporti orqali 19 ta
                                mamlakatga, havo
                                transporti orqali 3 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish uchun
                                amal qiladi.
                              </td>
                            </tr>
                            <tr>
                              <td colspan="4" class="note">
                                *** Izoh: jo'natmaning to'liq bo'lmagan og'irligi 100 grammgacha bo'lganda, to'liq
                                bo'lmagan ushbu
                                og'irlik uchun to'lov undirilmaydi.
                              </td>
                            </tr>
                            <tr>
                              <td colspan="4" class="note">
                                Misol uchun, jo'natmaning umumiy og'irligi quyidagini tashkil etsa:
                              </td>
                            </tr>
                            <tr>
                              <td colspan="4" class="example">
                                6,1 kg = 6,0 kg;
                              </td>
                            </tr>
                            <tr>
                              <td colspan="4" class="example">
                                6,11 kg. = 7,0 kg. tarzida hisoblanadi.
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Qoplar2'">
                      <!-- 'M' qoplar uchun mazmun -->
                      <div class="pricing-container">
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th colspan="5" class="section-header">3.2. Uzoq xorijiy mamlakatlar</th>
                            </tr>
                            <tr>
                              <th rowspan="2" class="band-column">Band</th>
                              <th rowspan="2" class="pos-column">Poz.</th>
                              <th rowspan="2" class="service-column">Jo'natmalar va xizmatlarning turlari</th>
                              <th colspan="2" class="price-header">To'lov miqdori, transportda jo'natish uchun, so'mlarda
                              </th>
                            </tr>
                            <tr>
                              <th>Yer usti</th>
                              <th>Havo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td rowspan="2" class="band-cell">4</td>
                              <td>1</td>
                              <td>«M» belgili maxsus qoplar og'irligi uchun haq har bir to'liq yoki to'liq bo'lmagan kg.
                                *** uchun olinadi.</td>
                              <td class="price">80 900</td>
                              <td class="price">123 100</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>buyurtma uchun haq butun qop uchun olinadi</td>
                              <td class="price">24 700</td>
                              <td class="price">28 500</td>
                            </tr>
                            <tr class="note-row">
                              <td colspan="5">
                                Izoh: Xalqaro pochta jo'natmalarini, posilkalarni o'tqazish va qayta o'tqazish, mayda
                                paketlarini, banderol va posilkalarni saqlash, og'irligi 500g.dan ko'p bo'lgan mayda
                                paketlarini uriga yerkazib berish, bojxona deklaratsiyasini to'ldirish va boshqa shunga
                                o'xshash qo'shimcha xizmatlar tariflari ichki ayirboshlashdagi o'xshash qo'shimcha
                                xizmatlarning tariflariga ko'ra ishlab chiqiladi va tasdiqlanadi.
                              </td>
                            </tr>
                            <tr class="note-row">
                              <td colspan="5">
                                ** Ushbu tariflar horijiy mamlakatlarga yer usti transporti orqali 19 ta mamlakatga, havo
                                transporti orqali 71 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish uchun
                                amal qiladi.
                              </td>
                            </tr>
                            <tr class="note-row">
                              <td colspan="5">
                                *** Izoh: jo'natmaning to'liq bo'lmagan og'irligi 100 grammgacha bo'lganda, to'liq
                                bo'lmagan ushbu og'irlik uchun to'lov undirilmaydi.
                              </td>
                            </tr>
                            <tr class="example-header">
                              <td colspan="5">
                                Misol uchun, jo'natmaning umumiy og'irligi quyidagini tashkil etsa:
                              </td>
                            </tr>
                            <tr class="example-row">
                              <td colspan="5">6,1 kg. = 6,0 kg;</td>
                            </tr>
                            <tr class="example-row">
                              <td colspan="5">6,11 kg. = 7,0 kg. tarzida hisoblanadi.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Qo\'shimcha xizmatlar2'">
                      <!-- Qo'shimcha xizmatlar uchun mazmun -->
                      <div class="pricing-container">
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th colspan="4" class="section-header">2.2. Uzoq xorijiy mamlakatlar</th>
                            </tr>
                            <tr>
                              <th class="band-column">Band</th>
                              <th class="pos-column">Poz.</th>
                              <th class="service-column">Jo'natmalar va xizmatlarning turlari</th>
                              <th class="price-column">To'lov miqdori, so'mda</th>
                            </tr>
                            <tr>
                              <th>t/r</th>
                              <th>t/r</th>
                              <th colspan="2"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td>449</td>
                              <td>O'tkazilyotgan summa uchun pul mablag'larining pochta o'tkazmasini jo'natish</td>
                              <td>5% SDR kurs bo'yicha</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>450</td>
                              <td>Ro'yhatdan o'tkaziladigan pochta jo'natmasi olinganiligi to'g'risidagi xabarnoma uchun
                              </td>
                              <td>5 000</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>451</td>
                              <td>Posilka topshirilmanganligi to'g'risidagi xabarnoma uchun</td>
                              <td>5 000</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>452</td>
                              <td>Jo'natilyotgan pochta jo'natmalari uchun, mo'jallangan mamlakatda shaxsan qo'liga
                                topshiriladigan posilkalarni ham hisobga olganda (jo'natuvchining hohishiga ko'ra), yoki
                                oluvchining qo'liga ushbu jo'natmalar kelganligi to'g'risidagi xabarnamani topshirish
                                uchun</td>
                              <td>3 500</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>453</td>
                              <td>Buyurtmali jo'natmani shaxsan qo'liga topshirish uchun</td>
                              <td>3 500</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>454</td>
                              <td>Jo'natuvchi tomonidan pochta jo'natmalarini qaytarish yoki manzilini o'zgartiraniligi
                                to'g'risida berilgan ariza uchun</td>
                              <td>4 400</td>
                            </tr>
                            <tr class="note-row">
                              <td></td>
                              <td></td>
                              <td colspan="2">
                                Agar jo'natuvchi 452 va 453 pozitsiyalarda ko'rsatilgan xizmatlar telegraf yoki aviapochta
                                orqali ko'rsatilishini xohlasa, ushbu bandlarda, ko'rsatilgan pochta to'lovlariga
                                so'zlarning aniq soni bo'yicha telegrammaning narxi yoki og'irligi 20g.gacha bo'lgan
                                jo'natmani havo transporti orqali oddiy xatni jo'natish uchun olinadigan qo'shimcha haq
                                qo'shiladi.
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>455</td>
                              <td>Jo'natilyotgan posilkalarni tekshirishda bojxona rasmiyatchiligi uchun, har bir
                                posilkaga</td>
                              <td>4 400</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>456</td>
                              <td>Jo'natilyotgan posilkalarni tekshirishda bojxona rasmiyatchiligi uchun, har bir mayda
                                paketga</td>
                              <td>3 500</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>457</td>
                              <td>Horijdan olinyotgan posilkalarni tekshirishda bojxona rasmiyatchiligi uchun, har bir
                                posilkaga</td>
                              <td>6 400</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>458</td>
                              <td>O'zbekistondan jo'natiladigan, og'irligi va e'lon qilingan qiymatidan, qaysi mamlakatga
                                yuborilayotganligidan qat'i-nazar qiymati e'lon qilingan posilkalar uchun e'kspediksion
                                yig'im</td>
                              <td>8 900</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colspan="4" class="note">
                                Izoh: Xalqaro pochta jo'natmalarini, posilkalarni o'rovlash va qayta o'rovlash, mayda
                                paketlarni, banderol va posilkalarni saqlash, og'irligi 500g.dan ko'p bo'lgan mayda
                                paketlarni uyiga yetkazib berish, bojxona deklaratsiyasini to'ldirish va boshqa shunga
                                o'xshash qo'shimcha xizmatlar tariflari ichki ayriboshlashdagi o'xshash qo'shimcha
                                xizmatlarning tariflariga ko'ra ishlab chiqiladi va tasdiqlanadi.
                              </td>
                            </tr>
                            <tr>
                              <td colspan="4" class="note">
                                ** Ushbu tariflar MDH va horijiy mamlakatlarga yer usti transporti orqali 19 ta
                                mamlakatga, havo
                                transporti orqali 3 ta mamlakatga pochta jo'natmalarini qabul qilish va jo'natish uchun
                                amal qiladi.
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Pochta2'">
                      <!-- EMS: Xalqaro Tezkor Pochta uchun mazmun -->
                    </div>
  
  
  
  
                    <div v-if="activeSubItem === 'qoshimcha xizmatlar3'">
                      <div class="pricing-container">
                        <h2 class="pb-40 bborderdash mb-20 title2">
                          Saqlash / Qadoqlash / Jo'natmani uyda rasmiylashtirish / Yetkazib berish / Qadoqlash uchun
                          mahsulotlar / Boshqalar
                        </h2>
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th rowspan="2" class="service-column">Xizmat turlari</th>
                              <th colspan="2" class="price-header">Narx</th>
                            </tr>
                            <tr>
                              <th>Jismoniy shaxslar</th>
                              <th>Yuridik shaxslar</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="section-header">
                              <td colspan="3">1. Posilka va banderollarni saqlash</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">1.1</span>
                                Ko'yxatga olinuvchi, "Bir Qadam" xizmati hamda Kuryerlik xizmati har bir pochta
                                jo'natmalarining 5 kun bepul saqlash muddatidan keyin, ularni saqlashning har 1 sutkasi
                                uchun (topshirilgan kundan tashqari)
                              </td>
                              <td>3 500 so'm</td>
                              <td>3 500 so'm</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">1.2</span>
                                Yo'qlab olinguncha manzili bo'yicha kelib tushgan pochta jo'natmalarini saqlash uchun
                                to'lov undirilmaydi
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr class="section-header">
                              <td colspan="3">2. Pochta jo'natmalarini o'rovash</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">2.1</span>
                                Mayda paket va xatlarni e'lon qilingan banderollarning joylannasini pufakchali polietilen
                                o'ramga joylash (pufakchali polietilen o'ram narxi bilan)
                              </td>
                              <td>7 000 so'm</td>
                              <td>7 000 so'm</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">2.2</span>
                                Mayda paket va banderol jo'natmalarini qog'ozga o'rash yoki skotchlash (kraft qog'oz narxi
                                va skotch yopishtirish bilan birga)
                              </td>
                              <td>7 000 so'm</td>
                              <td>7 000 so'm</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">2.3</span>
                                Posilkaning joylanmasini pufakchali polietilen o'ramga joylash (pufakchali polietilen
                                o'ram narxi bilan)
                              </td>
                              <td>14 000 so'm</td>
                              <td>14 000 so'm</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">2.4</span>
                                Posilka joylanmalarini qog'ozga o'rash yoki gofra karton qutilarga joylash (kraft qog'oz
                                narxi va skotch yopishtirish bilan birga)
                              </td>
                              <td>10 000 so'm</td>
                              <td>10 000 so'm</td>
                            </tr>
                            <tr class="section-header">
                              <td colspan="3">3. Matoga o'ralgan posilka o'rovini tikish (mato narxisiz)</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">3.1</span>
                                Qo'lda
                              </td>
                              <td>7 000 so'm</td>
                              <td>7 000 so'm</td>
                            </tr>
                            <tr class="section-header">
                              <td colspan="3">4. Matoga o'ralgan mayda paket va banderol o'rovini tikish (mato narxisiz)
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">4.1</span>
                                Qo'lda
                              </td>
                              <td>14 000 so'm</td>
                              <td>14 000 so'm</td>
                            </tr>
                            <tr class="section-header">
                              <td colspan="3">5. Mijoz chaqiruviga ko'ra, uning manzilida xizmat ko'rsatish</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">5.1</span>
                                oddiy pochta varaqchalarini, 20 gramm og'irlikkacha bo'lgan oddiy xatlarni, 250 gramm
                                og'irlikkacha bo'lgan oddiy xatlarni qabul qilish,
                              </td>
                              <td></td>
                              <td>15 000 so'm</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">5.2</span>
                                Ichki posilkalarni yetkazib berish, xalqaro posilkalarni takroran (1-marotaba yetkazib
                                berish bepul, 2-marotaba, ya'ni takroran pulli) yetkazib berish (avtotransport vositasi
                                yoki skuter bilan)
                              </td>
                              <td>44 000 so'm</td>
                              <td>44 000 so'm</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">5.3</span>
                                Pul o'tkazmalarini uyga yetkazib berish - har bir to'liq va noto'liq 100 so'm uchun
                              </td>
                              <td>0,6</td>
                              <td>0,6</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">5.4</span>
                                "O'z qo'liga topshirilsin (наpочным)" belgisi qo'yilgan mayda paketlarini manzil bo'yicha
                                yetkazib berish.
                              </td>
                              <td>15 000 so'm</td>
                              <td>15 000 so'm</td>
                            </tr>
                            <tr class="section-header">
                              <td colspan="3">6. Xabarlarni elektron pochta orqali qabul qilish - 1 beti uchun</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">6.1</span>
                                Xatlar chop etish bilan birga.
                              </td>
                              <td>1 500 so'm</td>
                              <td>1 500 so'm</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">6.2</span>
                                Grafikali xabarlar, rasmlarni chop etish
                              </td>
                              <td>6 000</td>
                              <td>6 000</td>
                            </tr>
                            <tr class="section-header">
                              <td colspan="3">7. Adresalning arizasiga asosan, telegrammani boshqa manzil bo'yicha qayta
                                jo'natish</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">7.1</span>
                                Pochta orqali - buyurtma xat bilan - buyurtma xat jo'natish narxi bilan belgilanadi.
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr class="section-header">
                              <td colspan="3">8. Xabarlarni elektron pochta orqali qabul qilish - 1 beti uchun</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">8.1</span>
                                Xatlar chop etish bilan birga.
                              </td>
                              <td>1 500 so'm</td>
                              <td>1 500 so'm</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">8.2</span>
                                Grafikalik xabarlar, rasmlarni chop etish
                              </td>
                              <td>6 000 so'm</td>
                              <td>6 000 so'm</td>
                            </tr>
                            <tr class="section-header">
                              <td colspan="3">9. Hujjatlar nusxasini ko'paytirish xizmati</td>
                            </tr>
                            <tr>
                              <td>
                                <span class="item-number">9.2</span>
                                Bitta o'tkazishga (varoqning bir tomoni uchun)
                              </td>
                              <td>1 500 so'm</td>
                              <td>1 500 so'm</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
  
  
                    <div v-if="activeSubItem === 'Elektron'">
                      <div class="pricing-container">
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th class="number-column">№</th>
                              <th class="service-column">Xizmat turi</th>
                              <th class="price-column">To'lov miqdori</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="section-header">
                              <td>1</td>
                              <td colspan="2">Korxona va tashkilotlar tomonidan jo'natiladigan elektron pul o'tkazmalari
                              </td>
                            </tr>
                            <tr>
                              <td>1.1</td>
                              <td>Pul o'tkazmasi summasidan</td>
                              <td>6%</td>
                            </tr>
                            <tr class="note-row">
                              <td colspan="3">
                                Izoh: Korxona va tashkilotlar xodimlari hisobidan jismoniy shaxslar manzilga
                                jo'natiladigan (aliment va boshqa) elektron pul o'tkazmalari uchun pul o'tkazmasi
                                summasidan 3% miqdorida haq to'lanadi.
                              </td>
                            </tr>
                            <tr class="section-header">
                              <td>2</td>
                              <td colspan="2">Aholi tomonidan jo'natiladigan elektron pul o'tkazmalari</td>
                            </tr>
                            <tr>
                              <td>2.1</td>
                              <td>Pul o'tkazmasi summasidan</td>
                              <td>3%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
                    <div v-if="activeSubItem === 'Kommunal xizmatlar'">
                      <!-- EMS: Xalqaro Tezkor Pochta uchun mazmun -->
                    </div>
  
  
                    <div v-if="activeSubItem === 'Davlat xizmatlar'">
                      <div class="pricing-container">
                        <table class="pricing-table">
                          <tbody>
                            <tr>
                              <td class="number-column">1</td>
                              <td>Yuridik shaxslarning hisobga qo'yilgan ma'lumotlari bilan tanishish</td>
                            </tr>
                            <tr>
                              <td class="number-column">2</td>
                              <td>STIR aniqilash</td>
                            </tr>
                            <tr>
                              <td class="number-column">3</td>
                              <td>Yovvoyi hayvonlarni tutqunlikda saqlashga ruxsatnoma</td>
                            </tr>
                            <tr>
                              <td class="number-column">4</td>
                              <td>Soliqlar va yig'imlardan soliq qarzi mavjud yoki mavjud emasligi to'g'risida
                                ma'lumotnoma berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">5</td>
                              <td>Nikoh qayd etilganligi, nikohda turmasligi yoki nikohdan ajraganligi to'g'risidagi
                                ma'lumotnomani olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">6</td>
                              <td>Fuqarolami jamg'arib boriladigan pensiya ta'minoti tizimiga hisobga qo'yish</td>
                            </tr>
                            <tr>
                              <td class="number-column">7</td>
                              <td>20 kVt dan yuqori bo'lmagan elektr tarmoqlariga ulanish uchun texnik shartlarni olish
                              </td>
                            </tr>
                            <tr>
                              <td class="number-column">8</td>
                              <td>20 kVt dan yuqori bo'lgan elektr tarmoqlariga ulanish uchun texnik shartlarni olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">9</td>
                              <td>Davlat o'rmon fondiga kirmaydigan daraxtlar va butalarni kesishga ruxsatnoma olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">10</td>
                              <td>Suv ta'minoti va suvni chiqarib tashlash tarmoqlariga ulanish uchun texnik shartlarni
                                olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">11</td>
                              <td>Suv ta'minoti va suvni chiqarib tashlash loyihasini kelishish</td>
                            </tr>
                            <tr>
                              <td class="number-column">12</td>
                              <td>Suv ta'minoti va suvni chiqarib tashlash xizmatlari shartnomasini tuzish</td>
                            </tr>
                            <tr>
                              <td class="number-column">13</td>
                              <td>Elektr energiyasini hisobga olish tizimini plombalash va elektr ta'minoti shartnomasini
                                tuzish</td>
                            </tr>
                            <tr>
                              <td class="number-column">14</td>
                              <td>Manzil-ma'lumot axborotlari to'g'risida ma'lumotnoma berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">15</td>
                              <td>Sudlanmaganlik (yoki sudlanganglik) to'g'risida ma'lumotnoma berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">16</td>
                              <td>Gaz ta'minoti loyihasini hududiy gaz ta'minoti korxonasi bilan kelishish</td>
                            </tr>
                            <tr>
                              <td class="number-column">17</td>
                              <td>Qurilishi (rekonstruktsiyasi) tugallangan bino va inshootlarni foydalanishga qabul
                                qilish (yakka tartibdagi uy-joy qurish obyekti uchun)</td>
                            </tr>
                            <tr>
                              <td class="number-column">18</td>
                              <td>Bino va inshootning tashqi ko'rinishini o'zgartirishini kelishish</td>
                            </tr>
                            <tr>
                              <td class="number-column">19</td>
                              <td>Tabiiy gazni hisobga olish qurilmasini plombalash</td>
                            </tr>
                            <tr>
                              <td class="number-column">20</td>
                              <td>Fuqarolarning nomida shaxsiy turar joy mavjud yoki mavjud emasligi to'g'risida
                                ma'lumotnoma berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">21</td>
                              <td>Arxitektura-rejalashtirish topshirig'ini ishlab chiqish</td>
                            </tr>
                            <tr>
                              <td class="number-column">22</td>
                              <td>Bino va inshootlarni ijara shartnomasini davlat ro'yxatidan o'tkazish</td>
                            </tr>
                            <tr>
                              <td class="number-column">23</td>
                              <td>Jismoniy shaxslar uchun soliq to'lovchining identifikatsion raqamini (STIR) olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">24</td>
                              <td>Tabiiy gazni hisobga olish uskunasini (hisoblagichini) yechish va o'rnatishga ariza
                                yuborish</td>
                            </tr>
                            <tr>
                              <td class="number-column">25</td>
                              <td>Sovuq suv hisoblagichini yechish, o'rnatish va tamg'alashga ariza yuborish</td>
                            </tr>
                            <tr>
                              <td class="number-column">26</td>
                              <td>Harbiy ro'yxatdan chiqarish</td>
                            </tr>
                            <tr>
                              <td class="number-column">27</td>
                              <td>Harbiy ro'yxatga qo'yish</td>
                            </tr>
                            <tr>
                              <td class="number-column">28</td>
                              <td>Ish haqi va ish stajini tasdiqlash haqida arxiv ma'lumotnomasini berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">29</td>
                              <td>Turar joy obyektlariga bo'lgan huquqlarni davlat ro'yxatidan o'tkazishga ariza yuborish
                              </td>
                            </tr>
                            <tr>
                              <td class="number-column">30</td>
                              <td>Qurilish-montaj ishlarini boshlash uchun obyektni ro'yxatdan o'tkazish</td>
                            </tr>
                            <tr>
                              <td class="number-column">31</td>
                              <td>Bolalarni davlat maktabgacha ta'lim muassasasiga qabul qilish navbatini tekshirish</td>
                            </tr>
                            <tr>
                              <td class="number-column">32</td>
                              <td>Bolani davlat maktabgacha ta'lim muassasasiga joylashtirish uchun ariza berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">33</td>
                              <td>Familiya, ism, ota ismini o'zgartiganlik haqida ma'lumotnomani olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">34</td>
                              <td>Tug'ilganlik haqida ma'lumotnomani olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">35</td>
                              <td>O'lim ro'yxatga olinganiligi haqida ma'lumotnomani olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">36</td>
                              <td>Turar joy obyektlarini kadastr pasportini shakllantirish</td>
                            </tr>
                            <tr>
                              <td class="number-column">37</td>
                              <td>Issiq suv hisoblagichini qiyoslashdan o'tkazish (yechish va ulash bilan birga)</td>
                            </tr>
                            <tr>
                              <td class="number-column">38</td>
                              <td>Tabiiy gaz hisoblagichini qiyoslashdan o'tkazish (yechish va o'rnatish bilan birga)</td>
                            </tr>
                            <tr>
                              <td class="number-column">39</td>
                              <td>Ichimlik suvi hisoblagichini qiyoslashdan o'tkazish (yechish va ulash bilan birga)</td>
                            </tr>
                            <tr>
                              <td class="number-column">40</td>
                              <td>Elektr energiyasi hisoblagichini qiyoslashdan o'tkazish (yechish va ulash bilan birga)
                              </td>
                            </tr>
                            <tr>
                              <td class="number-column">41</td>
                              <td>Ipoteka kreditiga davlat subsidiyasini olishga ariza berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">42</td>
                              <td>Narkologiya dispanseri hisobida turishi yoki turmasligi to'g'risida ma'lumotnoma berish
                              </td>
                            </tr>
                            <tr>
                              <td class="number-column">43</td>
                              <td>Ruhiy kasalliklar bo'yicha dispanser hisobida turishi yoki turmasligi to'g'risida
                                ma'lumotnoma berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">44</td>
                              <td>"E-AUKSION" elektron savdo platformasida g'oliblik uchun rasmiylashtirilgan bayonnomani
                                olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">45</td>
                              <td>Sport-ta'lim muassasalarining yo'riqchi-uslubchisi uchun oliy malaka toifasini olishga
                                ariza yuborish</td>
                            </tr>
                            <tr>
                              <td class="number-column">46</td>
                              <td>Loyiha-smeta hujjatlarini kelishish</td>
                            </tr>
                            <tr>
                              <td class="number-column">47</td>
                              <td>Oliy va o'rta maxsus ta'lim muassasasida o'qiganlik haqida arxiv ma'lumotnoma berish
                              </td>
                            </tr>
                            <tr>
                              <td class="number-column">48</td>
                              <td>COVID-19 ga emlashga yozilish va holatini tekshirish</td>
                            </tr>
                            <tr>
                              <td class="number-column">49</td>
                              <td>Gidrogeologik xulosa olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">50</td>
                              <td>Xalqaro imtihon tizimlari bo'yicha imtihon topshirish xarajatlarini qoplab berishga
                                ariza yuborish</td>
                            </tr>
                            <tr>
                              <td class="number-column">51</td>
                              <td>Idoraviy notarial arxivlar tomonidan arxiv hujjatlarini berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">52</td>
                              <td>Haydovchilarni tayyorlash bo'yicha o'quv guruhlarini ro'yxatga olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">53</td>
                              <td>Qurilish-montaj ishlari tugallangan obyektdan foydalanish uchun ruxsatnoma berish va
                                kadastr hujjatlarini rasmiylashtirish</td>
                            </tr>
                            <tr>
                              <td class="number-column">54</td>
                              <td>"Bir million dasturchi" loyihasi doirasida o'quv kurslarini muvaffaqiyatli tugalgan
                                yoshlarga, shuningdek, IT-park rezidentining o'quvchisi yoki bitiruychisi bo'lgan
                                yoshlarga kompyuter xarid qilish bo'yicha iste'mol krediti foizlarini qoplab berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">55</td>
                              <td>"Yoshlar daftari"ga kiritilgan yoshlarni nodavlat ta'lim muassasalarida sarflangan
                                xarajatlarning bir qismini qoplash</td>
                            </tr>
                            <tr>
                              <td class="number-column">56</td>
                              <td>Aliment bo'yicha qarzni aniqilash</td>
                            </tr>
                            <tr>
                              <td class="number-column">57</td>
                              <td>Mavzuli so'rovlar to'g'risida ma'lumotnoma berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">58</td>
                              <td>Yolg'iz ona arizasiga asosan qayd qilingan tug'ilganlik haqida ma'lumotnoma olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">59</td>
                              <td>Mehnatni muhofaza qilish bo'yicha mutaxassislarga malaka sertifikatini berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">60</td>
                              <td>Rasmiy hujjatlarga apostil qo'yish</td>
                            </tr>
                            <tr>
                              <td class="number-column">61</td>
                              <td>Ko'chmas mulk buzilishga tushganligi yoki tushmaganligi to'g'risida ma'lumotnoma berish
                              </td>
                            </tr>
                            <tr>
                              <td class="number-column">62</td>
                              <td>Yoshlarning xalqaro IT-sertifikatlarini olish xarajatlarini qoplab berish bo'yicha ariza
                                yuborish</td>
                            </tr>
                            <tr>
                              <td class="number-column">63</td>
                              <td>Umumiy o'rta ta'lim to'g'risida shahodatnomaning dublikatini berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">64</td>
                              <td>"Ijtimoiy himoya yagona reestri" ga kirish uchun ariza berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">65</td>
                              <td>Aktuariy malaka sertifikatini berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">66</td>
                              <td>Nogironligi bo'lgan yoshlarga asbob-uskunalar va mehnat qurollarini xarid qilish uchun
                                subsidiya ajratishga ariza yuborish</td>
                            </tr>
                            <tr>
                              <td class="number-column">67</td>
                              <td>Nogironligi bo'lgan yoshlarga o'qish davrida yashash va transport xarajatlari uchun
                                subsidiya ajratish uchun ariza yuborish</td>
                            </tr>
                            <tr>
                              <td class="number-column">68</td>
                              <td>Nogironligi bo'lgan yoshlarga o'qish xarajati uchun subsidiya ajratishga ariza yuborish
                              </td>
                            </tr>
                            <tr>
                              <td class="number-column">69</td>
                              <td>Milliy toifali sport hakami toifasini olish uchun ariza berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">70</td>
                              <td>Sport hakamlariga malaka toifasini berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">71</td>
                              <td>"Avtomobil tarixi" haqida ma'lumotnoma berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">72</td>
                              <td>Qishloq xo'jaligiga mo'ljallanmagan yer uchastkalarini xususiylashtirshning birlamchi
                                miqdorini hisoblab</td>
                            </tr>
                            <tr>
                              <td class="number-column">73</td>
                              <td>Keksalar va nogironligi bo'lgan shaxslarga sanatoriyalarda davolanish uchun yo'llanmalar
                                berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">74</td>
                              <td>Oliy, o'rta maxsus, kasb-hunar hamda professional ta'lim olganlik to'g'risida davlat
                                namunasidagi hujjatlarning dublikatini olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">75</td>
                              <td>Maishiy iste'molchilarni 20 kVtgacha bo'lgan elektr tarmoqlariga ulash</td>
                            </tr>
                            <tr>
                              <td class="number-column">76</td>
                              <td>Korporativ boshqaruvchi malaka attestatini olish</td>
                            </tr>
                            <tr>
                              <td class="number-column">77</td>
                              <td>Energiya tejovchi qurilma sotib olishni moliyalashtirish uchun ariza yuborish</td>
                            </tr>
                            <tr>
                              <td class="number-column">78</td>
                              <td>Noturar obyektlarini kadastr pasportini shakllantirish va ularga bo‘lgan huquqni davlat
                                ro‘yxatidan o‘tkazish</td>
                            </tr>
                            <tr>
                              <td class="number-column">79</td>
                              <td>Universal o‘nlik klassifikatsiya (UO‘K) indeksini berish</td>
                            </tr>
                            <tr>
                              <td class="number-column">80</td>
                              <td>Arxiv hujjatlari, kitoblar va qo‘lyozmalarni raqamlashtirish (elektron nusxa olish)</td>
                            </tr>
                            <tr>
                              <td class="number-column">81</td>
                              <td>Arab alifbosida yaratilgan turk, fors va arab tilidagi hujjatlarga annotatsiya
                                tayyorlash</td>
                            </tr>
                            <tr>
                              <td class="number-column">82</td>
                              <td>"Qishloq xo‘jaligi, melioratsiya va yo‘l-qurilish texnikalarini davlat ro‘yxatidan va
                                qayta ro‘yxatdan o‘tkazish</td>
                            </tr>
                            <tr>
                              <td class="number-column">83</td>
                              <td>Talabalar turar joyiga joylashish uchun ariza yuborish (1-kurs talabalari uchun)</td>
                            </tr>
                            <tr>
                              <td class="number-column">84</td>
                              <td>Talabalar turar joyiga navbatni tekshirish (1-kurs talabalari uchun)</td>
                            </tr>
                            <tr>
                              <td class="number-column">85</td>
                              <td>Kam ta'minlangan oilalarga bolalar nafaqasi va moddiy yordam tayinlashga ariza berish
                              </td>
                            </tr>
                            <tr>
                              <td class="number-column">86</td>
                              <td>To‘langan pensiyalar (nafaqalar) miqdori to‘g‘risida ma'lumotnoma</td>
                            </tr>
                            <tr>
                              <td class="number-column">87</td>
                              <td>Pensiya fondi hisobida turishi to‘g‘risida ma?lumotnoma</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
  
  
  
  
  
                    <div v-if="activeSubItem === 'Yuklarni yetkazib berish'">
                      <!-- EMS: Xalqaro Tezkor Pochta uchun mazmun -->
                      <div class="pricing-container">
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th class="border-cell">№</th>
                              <th class="border-cell">Xizmat nomi</th>
                              <th class="border-cell">Turlari</th>
                              <th class="border-cell">Tarif, so'mda (QQS bilan)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- First Row -->
                            <tr>
                              <td class="border-cell">1</td>
                              <td class="border-cell">Mijozlardan tovarlarni markazga olib kelish xizmati</td>
                              <td class="border-cell">Belgilangan tariflarga asosan undiriladi.</td>
                              <td class="border-cell"></td>
                            </tr>
  
                            <!-- Second Row Group -->
                            <tr>
                              <td class="border-cell" rowspan="2">2</td>
                              <td class="border-cell" rowspan="2">Markirovka</td>
                              <td class="border-cell">Shtrix-kodli bitta mahsulotni qabul qilish</td>
                              <td class="border-cell">50</td>
                            </tr>
                            <tr>
                              <td class="border-cell">Shtrix-kodsiz bitta mahsulotni qabul qilish</td>
                              <td class="border-cell">100</td>
                            </tr>
  
                            <!-- Third Row Group -->
                            <tr>
                              <td class="border-cell" rowspan="2">3</td>
                              <td class="border-cell" rowspan="2">Raqamlashtirish</td>
                              <td class="border-cell">qayta ishlashsiz - bitta mahsulot fotosurati uchun</td>
                              <td class="border-cell">15 000</td>
                            </tr>
                            <tr>
                              <td class="border-cell">qayta ishlash bilan birga - bitta mahsulot fotosurati uchun</td>
                              <td class="border-cell">25 000</td>
                            </tr>
  
                            <!-- Fourth Row Group -->
                            <tr>
                              <td class="border-cell" rowspan="8">4</td>
                              <td class="border-cell" rowspan="8">Saqlash</td>
                              <td class="border-cell section-header">Normal sharoitda saqlash</td>
                              <td class="border-cell"></td>
                            </tr>
                            <tr>
                              <td class="border-cell">1 kv.m/sutka (stelajda saqlash)</td>
                              <td class="border-cell">11 000</td>
                            </tr>
                            <tr>
                              <td class="border-cell">1 pallet*/sutka (stelajda saqlash)</td>
                              <td class="border-cell">20 500</td>
                            </tr>
                            <tr>
                              <td class="border-cell">1 kub.m/sutka</td>
                              <td class="border-cell">13 000</td>
                            </tr>
                            <tr>
                              <td class="border-cell section-header">Mahsus harorat sharoitlarida saqlash</td>
                              <td class="border-cell"></td>
                            </tr>
                            <tr>
                              <td class="border-cell">1 kv.m/sutka (stelajda saqlash)</td>
                              <td class="border-cell">13 200</td>
                            </tr>
                            <tr>
                              <td class="border-cell">1 pallet*/sutka (stelajda saqlash)</td>
                              <td class="border-cell">24 600</td>
                            </tr>
                            <tr>
                              <td class="border-cell">1 kub.m/sutka</td>
                              <td class="border-cell">15 600</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
  
                    </div>
  
                    <div v-if="activeSubItem === 'Fulfilment xizmatlari'">
                      <div class="pricing-container">
                        <table class="pricing-table">
                          <thead>
                            <tr>
                              <th class="border-cell">№</th>
                              <th class="border-cell">Xizmat nomi</th>
                              <th class="border-cell">Turlari</th>
                              <th class="border-cell">Tarif, so'mda (QQS bilan)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- First Row -->
                            <tr>
                              <td class="border-cell">1</td>
                              <td class="border-cell">Mijozlardan tovarlarini markazga olib kelish xizmati</td>
                              <td class="border-cell">Belgilangan tariflarga asosan undiriladi.</td>
                              <td class="border-cell"></td>
                            </tr>
  
                            <!-- Second Row Group -->
                            <tr>
                              <td class="border-cell" rowspan="2">2</td>
                              <td class="border-cell" rowspan="2">Markirovka</td>
                              <td class="border-cell">Shtrix-kodli bitta mahsulotni qabul qilish</td>
                              <td class="border-cell">50</td>
                            </tr>
                            <tr>
                              <td class="border-cell">Shtrix-kodsiz bitta mahsulotni qabul qilish</td>
                              <td class="border-cell">100</td>
                            </tr>
  
                            <!-- Third Row Group -->
                            <tr>
                              <td class="border-cell" rowspan="2">3</td>
                              <td class="border-cell" rowspan="2">Raqamlashtirish</td>
                              <td class="border-cell">qayta ishlashsiz - bitta mahsulot fotosurati uchun</td>
                              <td class="border-cell">15 000</td>
                            </tr>
                            <tr>
                              <td class="border-cell">qayta ishlash bilan birga - bitta mahsulot fotosurati uchun</td>
                              <td class="border-cell">25 000</td>
                            </tr>
  
                            <!-- Fourth Row Group -->
                            <tr>
                              <td class="border-cell" rowspan="8">4</td>
                              <td class="border-cell" rowspan="8">Saqlash</td>
                              <td class="border-cell section-header">Normal sharoitda saqlash</td>
                              <td class="border-cell"></td>
                            </tr>
                            <tr>
                              <td class="border-cell">1 kv.m/sutka (stelajda saqlash)</td>
                              <td class="border-cell">11 000</td>
                            </tr>
                            <tr>
                              <td class="border-cell">1 pallet*/sutka (stelajda saqlash)</td>
                              <td class="border-cell">20 500</td>
                            </tr>
                            <tr>
                              <td class="border-cell">1 kub.m/sutka</td>
                              <td class="border-cell">13 000</td>
                            </tr>
                            <tr>
                              <td class="border-cell section-header">Mahsus harorat sharoitlarida saqlash</td>
                              <td class="border-cell"></td>
                            </tr>
                            <tr>
                              <td class="border-cell">1 kv.m/sutka (stelajda saqlash)</td>
                              <td class="border-cell">13 200</td>
                            </tr>
                            <tr>
                              <td class="border-cell">1 pallet*/sutka (stelajda saqlash)</td>
                              <td class="border-cell">24 600</td>
                            </tr>
                            <tr>
                              <td class="border-cell">1 kub.m/sutka</td>
                              <td class="border-cell">15 600</td>
                            </tr>
  
                            <!--5th Group-->
                            <!--<tr>-->
                            <!--    <td class="border-cell" rowspan="8">5</td>-->
                            <!--    <td class="border-cell" rowspan="8">Buyurtmani qabul qilish va ishlov berish</td>-->
                            <!--  </tr>-->
                            <!--  <tr>-->
                            <!--    <td class="border-cell">1 kg.gacha bo'lgan tovarlar uchun (1 dona)</td>-->
                            <!--    <td class="border-cell">700</td>-->
                            <!--  </tr>-->
                            <!--  <tr>-->
                            <!--    <td class="border-cell">3 kg.gacha bo'lgan tovarlar uchun (1 dona)</td>-->
                            <!--    <td class="border-cell">900</td>-->
                            <!--  </tr>-->
                            <!--  <tr>-->
                            <!--    <td class="border-cell">3 kg.dan 7 kg.gacha bo'lgan tovarlar uchun (1 dona)</td>-->
                            <!--    <td class="border-cell">1 500</td>-->
                            <!--  </tr>-->
                            <!--  <tr>-->
                            <!--    <td class="border-cell">7 kg.dan 10 kg.gacha bo'lgan tovarlar uchun (1 dona)</td>-->
                            <!--    <td class="border-cell">2 000</td>-->
                            <!--  </tr>-->
                            <!--  <tr>-->
                            <!--    <td class="border-cell">10 kg.dan 15 kg.gacha bo'lgan tovarlar uchun (1 dona)</td>-->
                            <!--    <td class="border-cell">3 000</td>-->
                            <!--  </tr>-->
                            <!--  <tr>-->
                            <!--    <td class="border-cell">15 kg.dan og'ir tovarlar uchun (1 dona)</td>-->
                            <!--    <td class="border-cell">4 500</td>-->
                            <!--  </tr>-->
  
                            <!--6th Group-->
                            <!--<tr>-->
                            <!--    <td class="border-cell" rowspan="8">6</td>-->
                            <!--    <td class="border-cell" rowspan="8">Buyurtmani qabul qilish va ishlov berish</td>-->
                            <!--  </tr>-->
                            <!--  <tr>-->
                            <!--    <td class="border-cell">1 kg.gacha bo'lgan tovarlar uchun (1 dona)</td>-->
                            <!--    <td class="border-cell">700</td>-->
                            <!--  </tr>-->
                            <!--  <tr>-->
                            <!--    <td class="border-cell">3 kg.gacha bo'lgan tovarlar uchun (1 dona)</td>-->
                            <!--    <td class="border-cell">900</td>-->
                            <!--  </tr>-->
                            <!--  <tr>-->
                            <!--    <td class="border-cell">3 kg.dan 7 kg.gacha bo'lgan tovarlar uchun (1 dona)</td>-->
                            <!--    <td class="border-cell">1 500</td>-->
                            <!--  </tr>-->
                            <!--  <tr>-->
                            <!--    <td class="border-cell">7 kg.dan 10 kg.gacha bo'lgan tovarlar uchun (1 dona)</td>-->
                            <!--    <td class="border-cell">2 000</td>-->
                            <!--  </tr>-->
                            <!--  <tr>-->
                            <!--    <td class="border-cell">10 kg.dan 15 kg.gacha bo'lgan tovarlar uchun (1 dona)</td>-->
                            <!--    <td class="border-cell">3 000</td>-->
                            <!--  </tr>-->
                            <!--  <tr>-->
                            <!--    <td class="border-cell">15 kg.dan og'ir tovarlar uchun (1 dona)</td>-->
                            <!--    <td class="border-cell">4 500</td>-->
                            <!--  </tr>-->
                          </tbody>
                        </table>
                      </div>
                    </div>
  
  
  
  
  
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeMenu: "mdh_xizmatlari", // Dastlabki faol menyu
        activeSubItem: "Pochta varaqchasi1", // Dastlabki faol sub-item
        menus: [
          {
            id: "uzbekiston_xizmatlari",
            title: "O'zbekiston ichida yetkazib berish xizmatlari",
            subItems: [
              { id: "Xat-xabarlar", title: "Xat-xabarlar" },
              { id: "Banderollar", title: "Banderollar" },
              { id: "Mayda paketlar", title: "Mayda paketlar" },
              { id: "Sekogramma", title: "Sekogramma" },
              { id: "Posilkalar", title: "Posilkalar" },
              { id: "Qo'shimcha xizmatlar", title: "Qo'shimcha xizmatlar" },
              { id: "Kuryerlik xizmati - yuridik shaxslar uchun", title: "Kuryerlik xizmati - yuridik shaxslar uchun" },
              { id: "'Bir Qadam' xizmati", title: "'Bir Qadam' xizmati" },
            ],
          },
          {
            id: "mdh_xizmatlari",
            title: "MDH davlatlariga yuborish xizmatlari",
            subItems: [
              { id: "Pochta varaqchasi1", title: "Pochta varaqchasi" },
              { id: "Xat-xabarlar1", title: "Xat-xabarlar" },
              { id: "Banderollar1", title: "Banderollar" },
              { id: "Mayda paketlar1", title: "Mayda paketlar" },
              { id: "Sekogramma1", title: "Sekogramma" },
              { id: "Posilkalar1", title: "Posilkalar" },
              { id: "Qoplar1", title: "'M' qoplar" },
              { id: "Qo'shimcha xizmatlar1", title: "Qo'shimcha xizmatlar" },
              { id: "Pochta1", title: "EMS: Xalqaro Tezkor Pochta" },
            ],
          },
          {
            id: "xorij_xizmatlari",
            title: "Uzoq xorij davlatlariga yuborish xizmatlari",
            subItems: [
              { id: "Pochta varaqchasi2", title: "Pochta varaqchasi" },
              { id: "Xat-xabarlar2", title: "Xat-xabarlar" },
              { id: "Banderollar2", title: "Banderollar" },
              { id: "Mayda paketlar2", title: "Mayda paketlar" },
              { id: "Sekogramma2", title: "Sekogramma" },
              { id: "Posilkalar2", title: "Posilkalar" },
              { id: "Qoplar2", title: "'M' qoplar" },
              { id: "Qo'shimcha xizmatlar2", title: "Qo'shimcha xizmatlar" },
              { id: "Pochta2", title: "EMS: Xalqaro Tezkor Pochta" },
            ],
          },
          {
            id: "qoshimcha_xizmatlar",
            title: "Qo'shimcha xizmatlar",
            subItems: [
              { id: "qoshimcha xizmatlar3", title: "Qo'shimcha xizmatlar " },
            ],
          },
          {
            id: "pul",
            title: "To'lov va pul o'tkazmalari xizmatlari",
            subItems: [
              { id: "Elektron", title: "Elektron pul o'tkazmalari" },
              { id: "Kommunal xizmatlar", title: "Kommunal xizmatlar" },
              { id: "Davlat xizmatlar", title: " Davlat xizmatlar " },
            ],
          },
          {
            id: "Boshqalar",
            title: "Boshqalar",
            subItems: [
              { id: "Yuklarni yetkazib berish", title: "Yuklarni yetkazib berish" },
              { id: "Fulfilment xizmatlari", title: "Fulfilment xizmatlari " },
            ],
          },
        ],
      };
    },
    methods: {
      toggleMenu(menuId) {
        this.activeMenu = this.activeMenu === menuId ? null : menuId;
      },
      setActiveSubItem(subItemId) {
        this.activeSubItem = subItemId;
      },
    },
  };
  </script>
  
  
  <style>
  .nav-link {
    display: block;
    padding: 10px 15px;
    background: #f8f9fa;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  
  .nav-link.active {
    background-color: #007bff;
    color: white;
    font-weight: bold;
    border-color: #0056b3;
  }
  
  .submenu {
    margin-top: 10px;
    padding-left: 20px;
  }
  
  .submenu ul {
    list-style-type: none;
    padding: 0;
  }
  
  .submenu li {
    padding: 5px 0;
    color: #333;
  }
  
  .submenu li:hover {
    text-decoration: underline;
  }
  
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