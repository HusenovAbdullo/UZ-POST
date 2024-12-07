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
      <div class="profile__wrapper">
         <div class="row g-4 align-items-center justify-content-between">
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
               <div class="breadcumnd__content">
                  <span class="d4 mb-24">
                     Kalkulyator
                  </span>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</section>
<!-- Hero Section End -->
<!-- profile section Here -->
<section class="profile__section sectionbg9 pb-120">
<div class="container">
   <div class="profile__customize">
      <div class="row g-4">
         <div class="col-xl-8 col-lg-8">
            <div class="chatbot__developers">
               <div class="chatbot__items featiredjob__details round16 mb-24 shadow2 bgwhite">
                  <p class="title mb-20" style="font-size: 32px;">
                     Posilka yoki xatni joylashtiring
                  </p>
                  <p class="fz-18 fw-400 inter pra" style="color: #183e98;">
                     Xarajatlarni va etkazib berish vaqtini hisoblang
                  </p>
                  <br>
                  <div class="tab bor">
                     <button class="tablinks active" onclick="openCity(event, 'London')" id="defaultOpen">
                        <img src="assets/img/custom-icon/1.png" alt="" style="width:30px;height:30px;">
                        <p>Posilka</p>
                     </button>
                     <button class="tablinks" onclick="openCity(event, 'Paris')">
                        <img src="assets/img/custom-icon/6.png" alt="" style="width:30px;height:30px;">
                        <p>Xat</p>
                     </button>
                     <button class="tablinks" onclick="openCity(event, 'Parisi')">
                        <img src="assets/img/custom-icon/aibrain.png" alt="" style="width:30px;height:30px;">
                        <p>Mayda paket</p>
                     </button>
                     <button class="tablinks" onclick="openCity(event, 'Parisii')">
                        <img src="assets/img/custom-icon/aimacine.png" alt="" style="width:30px;height:30px;">
                        <p>Bir qadam</p>
                     </button>
                     <button class="tablinks" onclick="openCity(event, 'Mayda')">
                        <img src="assets/img/custom-icon/frelancer60.png" alt="" style="width:30px;height:30px;">
                        <p>Kuryer</p>
                     </button>
                  </div>
                  <br>
                  <div id="London" class="tabcontent" style="display: block;">
                     <div class="tab bor" style="color: #222E48;">
                        <p>
                           Posilka — bu jo’natishga ruxsat etilgan sanoat tovarlari, oziq-ovqat mahsulotlari,
                           madaniy-maishiy va boshqa tovarlar solingan pochta jo’natmasi turi.
                        </p>
                     </div>
                     <br>
                     <h4 class="title mb-20">
                        Yuboruvchi manzili
                     </h4>
                     <form action="#0" class="write__review">
                        <div class="row g-4 justify-content-center">
                           <div class="col-lg-4 viloyat">
                              <div class="frm__grp">
                                 <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                 <select id="province" name="province" class="form-control">
                                    <option value="" disabled selected>Viloyat</option>
                                    <option value="1">Toshkent</option>
                                    <option value="2">Samarqand</option>
                                    <option value="3">Buxoro</option>
                                    <option value="4">Farg'ona</option>
                                    <!-- Add more options as needed -->
                                 </select>
                              </div>
                           </div>
                           <div class="col-lg-4 tuman">
                              <div class="frm__grp">
                                 <label for="district" class="fz-18 fw-500 inter title mb-16"></label>
                                 <select id="district" name="district" class="form-control">
                                    <option value="" disabled selected>Tuman</option>
                                    <option value="1">Shakhrisabz</option>
                                    <option value="2">Chirchik</option>
                                    <option value="3">Yunusabad</option>
                                    <!-- Add more options as needed -->
                                 </select>
                              </div>
                           </div>
                           <div class="col-lg-4 manzil">
                              <div class="frm__grp">
                                 <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                 <div style="position: relative;">
                                    <input type="text" id="address" name="address" class="form-control"
                                       placeholder="Manzil">
                                    
                                    <button type="button" id="map-btn"
                                       style="position: absolute; top: 0; right: 0; background-color: transparent; border: none;">
                                       <!-- <i class="bi bi-geo-alt-fill" style="font-size: 24px; color: #303294;"></i> -->
                                       <!-- geo-alt-fill ikonkasi va ko'k rang -->
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <!-- Popup oynasi uchun Modal -->
                           <div id="mapModal" class="modal">
                              <div class="modal-content">
                                 <span id="closeModal" class="close-btn">&times;</span>
                                 <div id="google-map" style="width: 100%; height: 400px;"></div>
                              </div>
                           </div>
                           <div class="tabi bor">
                              <button class="tablinks1 active" onclick="openCity1(event, 'Index')" id="firstTab">
                                 <p>Index</p>
                              </button>
                              <button class="tablinks1" onclick="openCity1(event, 'Manzil')">
                                 <p>Manzil</p>
                              </button>
                              <button class="tablinks1" onclick="openCity1(event, 'Pochtam')">
                                 <p>Pochtomat</p>
                              </button>
                              <button class="tablinks1" onclick="openCity1(event, 'Davlat')">
                                 <p>Davlat</p>
                              </button>
                           </div>
                           <div id="Index" class="tabcontent1" style="display: block;">
                              <div class="col-lg-4 index">
                                 <div class="frm__grp">
                                    <label for="index" class="fz-18 fw-500 inter title mb-16"></label>
                                    <input type="text" id="index" name="index" class="form-control"
                                       placeholder="Index">
                                 </div>
                              </div>
                           </div>
                           <br>
                           <br>
                           <br>
                           <br>
                           <div id="Manzil" class="tabcontent1">
                              <form action="#0" class="write__review">
                                 <div class="row g-4 justify-content-center">
                                    <div class="col-lg-4 viloyat">
                                       <div class="frm__grp">
                                          <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                          <select id="province" name="province" class="form-control">
                                             <option value="" disabled selected>Viloyat</option>
                                             <option value="1">Toshkent</option>
                                             <option value="2">Samarqand</option>
                                             <option value="3">Buxoro</option>
                                             <option value="4">Farg'ona</option>
                                             <!-- Add more options as needed -->
                                          </select>
                                       </div>
                                    </div>
                                    <div class="col-lg-4 tuman">
                                       <div class="frm__grp">
                                          <label for="district" class="fz-18 fw-500 inter title mb-16"></label>
                                          <select id="district" name="district" class="form-control">
                                             <option value="" disabled selected>Tuman</option>
                                             <option value="1">Shakhrisabz</option>
                                             <option value="2">Chirchik</option>
                                             <option value="3">Yunusabad</option>
                                             <!-- Add more options as needed -->
                                          </select>
                                       </div>
                                    </div>
                                    <div class="col-lg-4 manzil">
                                       <div class="frm__grp">
                                          <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                          <div style="position: relative;">
                                             <input type="text" id="address" name="address" class="form-control"
                                                placeholder="Manzil">
                                             <!-- <button type="button" id="map-btn" style="position: absolute; top: 0; right: 0;">📍</button> -->
                                             <button type="button" id="map-btn"
                                                style="position: absolute; top: 0; right: 0; background-color: transparent; border: none;">
                                                <i class="bi bi-geo-alt-fill"
                                                   style="font-size: 24px; color: #303294;"></i>
                                                <!-- geo-alt-fill ikonkasi va ko'k rang -->
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                    <!-- Popup oynasi uchun Modal -->
                                    <div id="mapModal" class="modal">
                                       <div class="modal-content">
                                          <span id="closeModal" class="close-btn">&times;</span>
                                          <div id="google-map" style="width: 100%; height: 400px;"></div>
                                       </div>
                                    </div>
                                 </div>
                              </form>
                           </div>
                           <div id="Pochtam" class="tabcontent1">
                              <h2 class="title mb-20">
                                 Tez kunda
                              </h2>
                              <!-- <iframe
                                 src="https://www.google.com/maps/d/embed?mid=1e0t-Lqdqk3T2oX0ls7OPfnT7gGZB7FE&ehbc=2E312F&noprof=1"
                                 width="640" height="480"></iframe> -->
                           </div>

                           <div id="Davlat" class="tabcontent1">
                              <div class="col-lg-4 index">
                                 <div class="col-lg-4 viloyat">
                                    <div class="frm__grp">
                                       <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                       <select id="province" name="province" class="form-control">
                                          <option value="" disabled selected>Davlat</option>
                                          <option value="1">Avstraliya</option>
                                          <option value="2">Avstriya</option>
                                          <option value="3">Albaniya</option>
                                          <option value="4">Angola</option>
                                          <!-- Add more options as needed -->
                                       </select>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="row">
                              <div class="col-lg-6 vesi left-align">
                                 <div class="frm__grp">
                                    <label for="vesi" class="fz-18 fw-500 inter title mb-16"></label>
                                    <input type="text" id="vesi" name="vesi" class="form-control"
                                       placeholder="Vesi">
                                 </div>
                              </div>
                              <div class="col-lg-6 vesi left-align">
                                 <div class="frm__grp">
                                    <label for="size" class="fz-18 fw-500 inter title mb-16"></label>
                                    <select id="size" name="size" class="form-control">
                                       <option value="" disabled selected>Hajmini tanlang</option>
                                       <option value="10x20x30">10x20x30</option>
                                       <option value="25x30x40">25x30x40</option>
                                       <option value="35x38x45">35x38x45</option>
                                       <!-- Add more size options as needed -->
                                    </select>
                                 </div>
                              </div>
                           </div>
                           <div class="frm__grp mt-30">
                              <button type="submit" class="cmn--btn">
                                 <span>Hisoblash</span>
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>


                  <div id="Paris" class="tabcontent">
                     <h4 class="title mb-20">
                        Yuboruvchi manzili
                     </h4>
                     <form action="#0" class="write__review">
                        <div class="row g-4 justify-content-center">
                           <div class="col-lg-4 viloyat">
                              <div class="frm__grp">
                                 <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                 <select id="province" name="province" class="form-control">
                                    <option value="" disabled selected>Viloyat</option>
                                    <option value="1">Toshkent</option>
                                    <option value="2">Samarqand</option>
                                    <option value="3">Buxoro</option>
                                    <option value="4">Farg'ona</option>
                                    <!-- Add more options as needed -->
                                 </select>
                              </div>
                           </div>

                           <div class="col-lg-4 tuman">
                              <div class="frm__grp">
                                 <label for="district" class="fz-18 fw-500 inter title mb-16"></label>
                                 <select id="district" name="district" class="form-control">
                                    <option value="" disabled selected>Tuman</option>
                                    <option value="1">Shakhrisabz</option>
                                    <option value="2">Chirchik</option>
                                    <option value="3">Yunusabad</option>
                                    <!-- Add more options as needed -->
                                 </select>
                              </div>
                           </div>

                           <!-- <div class="col-lg-4 manzil">
                              <div class="frm__grp">
                                 <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                 <input type="text" id="address" name="address" class="form-control"
                                    placeholder="Manzil">
                              </div>
                           </div> -->


                           <div class="col-lg-4 manzil">
                              <div class="frm__grp">
                                 <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                 <div style="position: relative;">
                                    <input type="text" id="address" name="address" class="form-control"
                                       placeholder="Manzil">
                                    <!-- <button type="button" id="map-btn" style="position: absolute; top: 0; right: 0;">📍</button> -->
                                    <button type="button" id="map-btn"
                                       style="position: absolute; top: 0; right: 0; background-color: transparent; border: none;">
                                       <!-- <i class="bi bi-geo-alt-fill" style="font-size: 24px; color: #303294;"></i> -->
                                       <!-- geo-alt-fill ikonkasi va ko'k rang -->
                                    </button>
                                 </div>
                              </div>
                           </div>

                           <!-- Popup oynasi uchun Modal -->
                           <div id="mapModal" class="modal">
                              <div class="modal-content">
                                 <span id="closeModal" class="close-btn">&times;</span>
                                 <div id="google-map" style="width: 100%; height: 400px;"></div>
                              </div>
                           </div>
                           <div class="tabi bor">
                              <button class="tablinks1 active" onclick="openCity1(event, 'Index2')" id="firstTab">
                                 <p>Index</p>
                              </button>
                              <button class="tablinks1" onclick="openCity1(event, 'Manzil2')">
                                 <p>Manzil</p>
                              </button>
                              <button class="tablinks1" onclick="openCity1(event, 'Pochtam2')">
                                 <p>Pochtomat</p>
                              </button>
                              <button class="tablinks1" onclick="openCity1(event, 'Davlat2')">
                                 <p>Davlat</p>
                              </button>
                           </div>
                           <div id="Index2" class="tabcontent1" style="display: block;">
                              <div class="col-lg-4 index">
                                 <div class="frm__grp">
                                    <label for="index" class="fz-18 fw-500 inter title mb-16"></label>
                                    <input type="text" id="index" name="index" class="form-control"
                                       placeholder="Index">
                                 </div>
                              </div>
                           </div>
                           <div id="Manzil2" class="tabcontent1">
                              <form action="#0" class="write__review">
                                 <div class="row g-4 justify-content-center">
                                    <div class="col-lg-4 viloyat">
                                       <div class="frm__grp">
                                          <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                          <select id="province" name="province" class="form-control">
                                             <option value="" disabled selected>Viloyat</option>
                                             <option value="1">Toshkent</option>
                                             <option value="2">Samarqand</option>
                                             <option value="3">Buxoro</option>
                                             <option value="4">Farg'ona</option>
                                             <!-- Add more options as needed -->
                                          </select>
                                       </div>
                                    </div>
                                    <div class="col-lg-4 tuman">
                                       <div class="frm__grp">
                                          <label for="district" class="fz-18 fw-500 inter title mb-16"></label>
                                          <select id="district" name="district" class="form-control">
                                             <option value="" disabled selected>Tuman</option>
                                             <option value="1">Shakhrisabz</option>
                                             <option value="2">Chirchik</option>
                                             <option value="3">Yunusabad</option>
                                             <!-- Add more options as needed -->
                                          </select>
                                       </div>
                                    </div>
                                    <div class="col-lg-4 manzil">
                                       <div class="frm__grp">
                                          <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                          <div style="position: relative;">
                                             <input type="text" id="address" name="address" class="form-control"
                                                placeholder="Manzil">
                                             <!-- <button type="button" id="map-btn" style="position: absolute; top: 0; right: 0;">📍</button> -->
                                             <button type="button" id="map-btn"
                                                style="position: absolute; top: 0; right: 0; background-color: transparent; border: none;">
                                                <i class="bi bi-geo-alt-fill"
                                                   style="font-size: 24px; color: #303294;"></i>
                                                <!-- geo-alt-fill ikonkasi va ko'k rang -->
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                    <!-- Popup oynasi uchun Modal -->
                                    <div id="mapModal" class="modal">
                                       <div class="modal-content">
                                          <span id="closeModal" class="close-btn">&times;</span>
                                          <div id="google-map" style="width: 100%; height: 400px;"></div>
                                       </div>
                                    </div>
                                 </div>
                              </form>
                           </div>
                           <div id="Pochtam2" class="tabcontent1">
                              <h2 class="title mb-20">
                              </h2>
                              <!-- <iframe
                                 src="https://yandex.com/map-widget/v1/?um=constructor%3A7f49943c188ad070f0ad7b6fbacf7e167a05d72f8a38ce93dc1c21ee7902ef14&amp;source=constructor"
                                 width="933" height="585" frameborder="0"></iframe> -->
                           </div>

                           <div id="Davlat2" class="tabcontent1">
                              <div class="col-lg-4 index">
                                 <div class="col-lg-4 viloyat">
                                    <div class="frm__grp">
                                       <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                       <select id="province" name="province" class="form-control">
                                          <option value="" disabled selected>Davlat</option>
                                          <option value="1">Avstraliya</option>
                                          <option value="2">Avstriya</option>
                                          <option value="3">Albaniya</option>
                                          <option value="4">Angola</option>
                                          <!-- Add more options as needed -->
                                       </select>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="row">
                              <div class="col-lg-6 vesi left-align">
                                 <div class="frm__grp">
                                    <label for="vesi" class="fz-18 fw-500 inter title mb-16"></label>
                                    <input type="text" id="vesi" name="vesi" class="form-control"
                                       placeholder="Vesi">
                                 </div>
                              </div>
                              <div class="col-lg-6 vesi left-align">
                                 <div class="frm__grp">
                                    <label for="size" class="fz-18 fw-500 inter title mb-16"></label>
                                    <select id="size" name="size" class="form-control">
                                       <option value="" disabled selected>Hajmini tanlang</option>
                                       <option value="10x20x30">10x20x30</option>
                                       <option value="25x30x40">25x30x40</option>
                                       <option value="35x38x45">35x38x45</option>
                                       <!-- Add more size options as needed -->
                                    </select>
                                 </div>
                              </div>
                           </div>
                           <div class="frm__grp mt-30">
                              <button type="submit" class="cmn--btn">
                                 <span>Hisoblash</span>
                              </button>
                           </div>
                        </div>
                     </form>

                  </div>

                  <div id="Parisi" class="tabcontent">
                     <h4 class="title mb-20">
                        Yuboruvchi manzili
                     </h4>
                     <form action="#0" class="write__review">
                        <div class="row g-4 justify-content-center">
                           <div class="col-lg-4 viloyat">
                              <div class="frm__grp">
                                 <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                 <select id="province" name="province" class="form-control">
                                    <option value="" disabled selected>Viloyat</option>
                                    <option value="1">Toshkent</option>
                                    <option value="2">Samarqand</option>
                                    <option value="3">Buxoro</option>
                                    <option value="4">Farg'ona</option>
                                    <!-- Add more options as needed -->
                                 </select>
                              </div>
                           </div>

                           <div class="col-lg-4 tuman">
                              <div class="frm__grp">
                                 <label for="district" class="fz-18 fw-500 inter title mb-16"></label>
                                 <select id="district" name="district" class="form-control">
                                    <option value="" disabled selected>Tuman</option>
                                    <option value="1">Shakhrisabz</option>
                                    <option value="2">Chirchik</option>
                                    <option value="3">Yunusabad</option>
                                    <!-- Add more options as needed -->
                                 </select>
                              </div>
                           </div>

                           <!-- <div class="col-lg-4 manzil">
                              <div class="frm__grp">
                                 <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                 <input type="text" id="address" name="address" class="form-control"
                                    placeholder="Manzil">
                              </div>
                           </div> -->


                           <div class="col-lg-4 manzil">
                              <div class="frm__grp">
                                 <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                 <div style="position: relative;">
                                    <input type="text" id="address" name="address" class="form-control"
                                       placeholder="Manzil">
                                    <!-- <button type="button" id="map-btn" style="position: absolute; top: 0; right: 0;">📍</button> -->
                                    <button type="button" id="map-btn"
                                       style="position: absolute; top: 0; right: 0; background-color: transparent; border: none;">
                                       <i class="bi bi-geo-alt-fill" style="font-size: 24px; color: #303294;"></i>
                                       <!-- geo-alt-fill ikonkasi va ko'k rang -->
                                    </button>
                                 </div>
                              </div>
                           </div>

                           <!-- Popup oynasi uchun Modal -->
                           <div id="mapModal" class="modal">
                              <div class="modal-content">
                                 <span id="closeModal" class="close-btn">&times;</span>
                                 <div id="google-map" style="width: 100%; height: 400px;"></div>
                              </div>
                           </div>
                           <div class="tabi bor">
                              <button class="tablinks1 active" onclick="openCity1(event, 'Index1')" id="firstTab">
                                 <p>Index</p>
                              </button>
                              <button class="tablinks1" onclick="openCity1(event, 'Manzil1')">
                                 <p>Manzil</p>
                              </button>
                              <button class="tablinks1" onclick="openCity1(event, 'Pochtam1')">
                                 <p>Pochtomat</p>
                              </button>
                              <button class="tablinks1" onclick="openCity1(event, 'Davlat1')">
                                 <p>Davlat</p>
                              </button>
                           </div>
                           <div id="Index1" class="tabcontent1" style="display: block;">
                              <div class="col-lg-4 index">
                                 <div class="frm__grp">
                                    <label for="index" class="fz-18 fw-500 inter title mb-16"></label>
                                    <input type="text" id="index" name="index" class="form-control"
                                       placeholder="Index">
                                 </div>
                              </div>
                           </div>
                           <div id="Manzil1" class="tabcontent1">
                              <form action="#0" class="write__review">
                                 <div class="row g-4 justify-content-center">
                                    <div class="col-lg-4 viloyat">
                                       <div class="frm__grp">
                                          <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                          <select id="province" name="province" class="form-control">
                                             <option value="" disabled selected>Viloyat</option>
                                             <option value="1">Toshkent</option>
                                             <option value="2">Samarqand</option>
                                             <option value="3">Buxoro</option>
                                             <option value="4">Farg'ona</option>
                                             <!-- Add more options as needed -->
                                          </select>
                                       </div>
                                    </div>
                                    <div class="col-lg-4 tuman">
                                       <div class="frm__grp">
                                          <label for="district" class="fz-18 fw-500 inter title mb-16"></label>
                                          <select id="district" name="district" class="form-control">
                                             <option value="" disabled selected>Tuman</option>
                                             <option value="1">Shakhrisabz</option>
                                             <option value="2">Chirchik</option>
                                             <option value="3">Yunusabad</option>
                                             <!-- Add more options as needed -->
                                          </select>
                                       </div>
                                    </div>
                                    <div class="col-lg-4 manzil">
                                       <div class="frm__grp">
                                          <label for="address" class="fz-18 fw-500 inter title mb-16"></label>
                                          <div style="position: relative;">
                                             <input type="text" id="address" name="address" class="form-control"
                                                placeholder="Manzil">
                                             <!-- <button type="button" id="map-btn" style="position: absolute; top: 0; right: 0;">📍</button> -->
                                             <button type="button" id="map-btn"
                                                style="position: absolute; top: 0; right: 0; background-color: transparent; border: none;">
                                                <i class="bi bi-geo-alt-fill"
                                                   style="font-size: 24px; color: #303294;"></i>
                                                <!-- geo-alt-fill ikonkasi va ko'k rang -->
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                    <!-- Popup oynasi uchun Modal -->
                                    <div id="mapModal" class="modal">
                                       <div class="modal-content">
                                          <span id="closeModal" class="close-btn">&times;</span>
                                          <div id="google-map" style="width: 100%; height: 400px;"></div>
                                       </div>
                                    </div>
                                 </div>
                              </form>
                           </div>
                           <div id="Pochtam1" class="tabcontent1">
                              <h2 class="title mb-20">
                              </h2>
                              <!-- <iframe
                                 src="https://www.google.com/maps/d/embed?mid=1e0t-Lqdqk3T2oX0ls7OPfnT7gGZB7FE&ehbc=2E312F&noprof=1"
                                 width="640" height="480"></iframe> -->
                           </div>

                           <div id="Davlat1" class="tabcontent1">
                              <div class="col-lg-4 index">
                                 <div class="col-lg-4 viloyat">
                                    <div class="frm__grp">
                                       <label for="province" class="fz-18 fw-500 inter title mb-16"></label>
                                       <select id="province" name="province" class="form-control">
                                          <option value="" disabled selected>Davlat</option>
                                          <option value="1">Avstraliya</option>
                                          <option value="2">Avstriya</option>
                                          <option value="3">Albaniya</option>
                                          <option value="4">Angola</option>
                                          <!-- Add more options as needed -->
                                       </select>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="row">
                              <div class="col-lg-6 vesi left-align">
                                 <div class="frm__grp">
                                    <label for="vesi" class="fz-18 fw-500 inter title mb-16"></label>
                                    <input type="text" id="vesi" name="vesi" class="form-control"
                                       placeholder="Vesi">
                                 </div>
                              </div>
                              <div class="col-lg-6 vesi left-align">
                                 <div class="frm__grp">
                                    <label for="size" class="fz-18 fw-500 inter title mb-16"></label>
                                    <select id="size" name="size" class="form-control">
                                       <option value="" disabled selected>Hajmini tanlang</option>
                                       <option value="10x20x30">10x20x30</option>
                                       <option value="25x30x40">25x30x40</option>
                                       <option value="35x38x45">35x38x45</option>
                                       <!-- Add more size options as needed -->
                                    </select>
                                 </div>
                              </div>
                           </div>
                           <div class="frm__grp mt-30">
                              <button type="submit" class="cmn--btn">
                                 <span>Hisoblash</span>
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>

                  <div id="Parisii" class="tabcontent">
                     <h2 class="title mb-20">
                        Tez kunda
                     </h2>
                  </div>
                  <div id="Mayda" class="tabcontent">
                     <h2 class="title mb-20">
                        Tez kunda
                     </h2>
                  </div>




               </div>
            </div>
         </div>
         <div class="col-xl-4 col-lg-4">
            <div class="basic__skilled__wrapper">
               <div class="basic__boxskill mb-24 round16 bgwhite">
                  <span class="fz-18 d-block title inter mb-10 bborderdash">
                     Yuk tashish vaqtlari va xarajatlarini hisoblash uchun shaklni to'ldiring
                  </span>
                  <div class="form__price pb-24 d-flex align-items-center bborderdash">
                     <i class="bi bi-tags tags__icon"></i>
                     <span class="fz-16 d-flex align-items-center gap-2 fw-400 inter title">
                        Jami
                        <span class="fssizing d-flex align-items-start gap-1">
                           500 000 so'm
                           <!-- <i class="bi bi-info-circle infocircle">
                              <span class="tooltip">qoyil</span>
                            </i> -->

                        </span>
                     </span>
                  </div>

                  <a href="#0" class="cmn--btn mt-30 d-flex justify-content-center d-block">
                     <span>
                        Buyurtmani yaratish
                     </span>
                     <span>
                        <i class="bi bi-arrow-up-right"></i>
                     </span>
                  </a>
               </div>

            </div>
         </div>
      </div>
   </div>
</div>
</section>
<!-- profile section End -->
</template>
