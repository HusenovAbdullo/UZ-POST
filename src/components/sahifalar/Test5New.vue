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
                           <span class="d4 mb-24"></span>
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
                                 <button class="nav-link" :class="{ active: activeMenu === menu.id }"
                                    @click="toggleMenu(menu.id)">
                                    {{ menu.title }}
                                 </button>
                                 <div v-if="activeMenu === menu.id" class="submenu">
                                    <ul>
                                       <li class="nav-item" role="presentation" v-for="(subItem,) in menu.subItems"
                                          :key="subItem.id">
                                          <button :class="['nav-link', { active: activeSubItem === subItem.id }]"
                                             type="button" @click="setActiveSubItem(subItem.id)">
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
                              <div class="tab-pane fade show" id="banderollar" role="tabpanel"
                                 aria-labelledby="xat_xabarlar-tab">
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
                              <div class="tab-pane fade show" id="sekogramma" role="tabpanel"
                                 aria-labelledby="sekogramma-tab">
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
                              <div class="tab-pane fade show" id="posilkalar" role="tabpanel"
                                 aria-labelledby="posilkalar-tab">
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
                              <div class="tab-pane fade show" id="bir-qadam" role="tabpanel"
                                 aria-labelledby="bir-qadam-tab">
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
                           </div>

                           <div v-if="activeSubItem === 'Xat-xabarlar1'">
                              <!-- Xat-xabarlar uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Banderollar1'">
                              <!-- Banderollar uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Mayda paketlar1'">
                              <!-- Mayda paketlar uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Sekogramma1'">
                              <!-- Sekogramma uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Posilkalar1'">
                              <!-- Posilkalar uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Qoplar1'">
                              <!-- 'M' qoplar uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Qo\'shimcha xizmatlar1'">
                              <!-- Qoshimcha xizmatlar uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Pochta1'">
                              <!-- EMS: Xalqaro Tezkor Pochta uchun mazmun -->
                           </div>




                           <div v-if="activeSubItem === 'Pochta varaqchasi2'">
                              <!-- Pochta varaqchasi uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Xat-xabarlar2'">
                              <!-- Xat-xabarlar uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Banderollar2'">
                              <!-- Banderollar uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Mayda paketlar2'">
                              <!-- Mayda paketlar uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Sekogramma2'">
                              <!-- Sekogramma uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Posilkalar2'">
                              <!-- Posilkalar uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Qoplar2'">
                              <!-- 'M' qoplar uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Qo\'shimcha xizmatlar2'">
                              <!-- Qo'shimcha xizmatlar uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Pochta2'">
                              <!-- EMS: Xalqaro Tezkor Pochta uchun mazmun -->
                           </div>




                           <div v-if="activeSubItem === 'qoshimcha xizmatlar3'">
                              <!-- EMS: Xalqaro Tezkor Pochta uchun mazmun -->
                           </div>



                           <div v-if="activeSubItem === 'Elektron'">
                              <!-- EMS: Xalqaro Tezkor Pochta uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Kommunal xizmatlar'">
                              <!-- EMS: Xalqaro Tezkor Pochta uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Davlat xizmatlar'">
                              <!-- EMS: Xalqaro Tezkor Pochta uchun mazmun -->
                           </div>





                           <div v-if="activeSubItem === 'Yuklarni yetkazib berish'">
                              <!-- EMS: Xalqaro Tezkor Pochta uchun mazmun -->
                           </div>

                           <div v-if="activeSubItem === 'Fulfilment xizmatlari'">
                              <!-- EMS: Xalqaro Tezkor Pochta uchun mazmun -->
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
         activeMenu: null, // Faol menyuni boshqaradi
         activeSubItem: null, // Faol sub-itemni boshqaradi
         menus: [
            {
               id: "uzbekiston_xizmatlari",
               title: "O'zbekiston ichida yetkazib berish xizmatlari",
               subItems: [
                  { id: "Pochta varaqchasi", title: "Pochta varaqchasi" },
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