<template>
   <div>
      <!-- Preloader Start Here -->
      <div>
         <!-- Preloader -->
         <div class="preloader__wrap" v-if="isLoading"
            style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #fff; z-index: 9999;">
            <div class="preloader__box">
               <img src="assets/img/logo/rechage.png" alt="Loading" class="preloader-img">
            </div>
         </div>
         <slot />
      </div>

      <!-- Hero Section Here -->
      <section class="banner__section bg__img1 ralt ">

         <!-- Header Here -->
         <div class="header__section__attachment">
            <div class="aihire__headertopi">
               <div class="container">
                  <div class="haderbar__top d-flex align-items-center  justify-content-between">
                     <div class="logo__left d-flex align-items-center">
                        <router-link to="/" class="logo-container">
                           <img src="assets/img/logo/logo.svg" alt="logo" class="responsive-hide" />
                        </router-link>
                        <!-- how-work.html shuni o'rniga qo'yilgan -->
                        <router-link to="/" class="pra mdnone inter fw-400">
                           Jismoniy shaxslar uchun
                        </router-link>
                        <!-- about.html shuni o'rniga qo'yilgan -->
                        <router-link to="/yuridik" class="pra mdnone inter fw-400">
                           Yuridik shaxslar uchun
                        </router-link>
                     </div>
                     <div class="header__topsearch d-flex align-items-center">
                        <form action="#"
                           class="search__component mb-55 d-flex align-items-center justify-content-between wow fadeInUp">
                           <input type="text" id="trackingNumberInput" v-model="trackingNumber"
                              placeholder="CC123456789UZ" class="faded-placeholder">
                           <button type="button" class="cmn--btni1 d-flex align-items-center"
                              @click="fetchTrackingData">
                              <span><i class="bi bi-search fz-12"></i></span>
                              <span>Kuzatish</span>
                           </button>
                        </form>
                     </div>

                  </div>
               </div>
            </div>
            <header class="header-section">
               <div class="container">
                  <div class="header-wrapper">
                     <div class="logo-menu d-xl-none">
                        <a href="index.html" class="small__logo">
                           <img src="assets/img/logo/logolisht.png" alt="logo">
                        </a>
                     </div>
                     <div class="l">
                        <l>.</l>
                     </div>
                     <ul class="main-menu">
                        <li>
                           <a href="javascript:void(0)" class="fz-24">
                              Yuborish
                              <i class="bi bi-chevron-down"></i>
                           </a>
                           <ul class="sub-menu">
                              <li>
                                 <router-link to="/profil">
                                    <span style="text-transform: capitalize;">Shaxsiy </span>
                                    <span style="text-transform: lowercase;">kabinet</span>
                                 </router-link>
                              </li>
                              <li>
                                 <router-link to="/tariflar" class="custom-link">
                                    <span style="text-transform: capitalize;">Jo'natma </span>
                                    <span style="text-transform: lowercase;">turlari</span>
                                 </router-link>
                              </li>
                              <li>
                                 <router-link to="/tariflar" class="custom-link">
                                    <span style="text-transform: capitalize;">Taqiqlangan </span>
                                    <span style="text-transform: lowercase;">joylanmalar</span>
                                 </router-link>
                              </li>
                              <li>
                                 <router-link to="/tarif" class="custom-link">
                                    <span style="text-transform: capitalize;">O'zbekiston </span>
                                    <span style="text-transform: lowercase;">bo'ylab </span>
                                    <span style="text-transform: lowercase;">yuborish</span>
                                 </router-link>
                              </li>
                              <li>
                                 <router-link to="/tariflar" class="custom-link">
                                    <span style="text-transform: capitalize;">Xalqaro </span>
                                    <span style="text-transform: lowercase;">jo'natmalar</span>
                                 </router-link>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <router-link to="/tariflar">
                              Tariflar
                           </router-link>
                        </li>
                        <li>
                           <router-link to="/xizmatlar">
                              Xizmatlar
                           </router-link>
                        </li>
                        <li>
                           <a href="javascript:void(0)">
                              Onlayn xizmatlar
                              <i class="bi bi-chevron-down"></i>
                           </a>
                           <ul class="sub-menu">
                              <li>
                                 <router-link to="/tracking" class="link-style">
                                    <span style="text-transform: capitalize;">Jo'natmani </span>
                                    <span style="text-transform: lowercase;">kuzatish</span>
                                 </router-link>
                              </li>
                              <li>
                                 <a href="https://hybrid.pochta.uz/">
                                    <span style="text-transform: capitalize;">Gibrid </span> <span
                                       style="text-transform: lowercase;">pochta</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://e-obuna.uz/">
                                    <span style="text-transform: capitalize;">gazeta </span> <span
                                       style="text-transform: lowercase;"> va jurnallarga onlayn obuna</span>
                                 </a>
                              </li>
                              <li>
                                 <router-link to="/kalkulyator" class="link-style">
                                    <span style="text-transform: capitalize;">Jo'natma </span>
                                    <span style="text-transform: lowercase;">kalkulyatori</span>
                                 </router-link>
                              </li>
                              <li>
                                 <router-link to="/aloqa" class="custom-link">
                                    <span style="text-transform: capitalize;">Murojaat </span>
                                    <span style="text-transform: lowercase;">yuborish</span>
                                 </router-link>
                              </li>
                              <li>
                                 <router-link to="/tracking" class="custom-link">
                                    <span style="text-transform: capitalize;">Pochta </span>
                                    <span style="text-transform: lowercase;">indeksim</span>
                                 </router-link>
                              </li>
                           </ul>
                        </li>
                     </ul>
                     <div class="menu__right__components d-flex align-items-center">
                        <div class="menu__components d-flex align-items-center">
                           <div class="dropdown">
                              <a href="#" class="link glose__icon d-flex align-items-center" data-bs-toggle="dropdown"
                                 data-bs-offset="0,14" aria-expanded="true">
                                 <i class="bi bi-globe"></i>
                              </a>
                              <div class="dropdown-menu dropdown-start" data-popper-placement="bottom-start">
                                 <ul class="list">
                                    <li>
                                       <a href="#" class="link d-inline-block dropdown-item">
                                          <span class="d-block bborder pb-1"> Uz </span>
                                       </a>
                                       <a href="#" class="link d-inline-block dropdown-item">
                                          <span class="d-block "> Ru </span>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div class="dropdown">
                              <a href="#" class="link glose__icon d-flex align-items-center" data-bs-toggle="dropdown"
                                 data-bs-offset="0,14" aria-expanded="true">
                                 <i class="bi-geo-alt"></i>
                              </a>
                           </div>
                           <div class="dropdown">
                              <router-link to="/aloqa" class="link glose__icon d-flex align-items-center">
                                 <i class="bi bi-life-preserver"></i>
                              </router-link>
                              <!-- <router-link to="/aloqa" class="link glose__icon d-flex align-items-center"
                                 data-bs-toggle="dropdown" data-bs-offset="0,14" aria-expanded="true">
                                 <i class="bi bi-life-preserver"></i>
                              </router-link> -->
                           </div>
                           <div class="dropdown profie__dropdown">
                              <a href="#" class="link user__active" data-bs-toggle="dropdown" data-bs-offset="0,16"
                                 aria-expanded="true">
                                 <img src="assets/img/bn/profile.jpg" alt="image"
                                    class="img-fluid rounded-circle objec-fit-cover">
                              </a>
                              <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                 <div class="p-6">
                                    <div class="d-flex align-items-center gap-3 max-width">
                                       <div class="jerny__uer ralt">
                                          <img src="assets/img/bn/profile.png" alt="image"
                                             class="img-fluid jenny rounded-circle object-fit-cover flex-shrink-0">
                                          <i
                                             class="bi bi-check checks d-flex align-items-center justify-content-center"></i>
                                       </div>
                                       <div class="flex-grow-1">
                                          <h5 class="fz-20 fw-600 title inter mb-0">Xush kelibsiz!</h5>
                                          <h5 class="fz-20 fw-600 title inter mb-0">
                                             Mehmon {{ userName }}
                                          </h5>
                                          <span class="d-block fw-400 inter pra fz-16"><a
                                                href="https://pixner.net/cdn-cgi/l/email-protection"
                                                class="__cf_email__"
                                                data-cfemail="337a5d555c0a06735e525a5f1d505c5e"></a></span>
                                       </div>
                                    </div>
                                    <div class="switch text-center mt-4 bborderdash pb-24 mb-24">
                                       <router-link to="/tahrirlash" class="cmn--btn outline__btn">
                                          <span>Tahrirlash</span>
                                       </router-link>
                                    </div>
                                    <span class="fz-12 pra d-block fw-400 inter mb-16">
                                       Hisobim
                                    </span>
                                    <ul class="list">
                                       <li class="mb-16">
                                          <router-link to="/profil"
                                             class="link d-flex align-items-center gap-2 dropdown-item">
                                             <i class="bi bi-person-check fz-20"></i>
                                             <span class="d-block fz-16 pra fw-500 inter">Profil</span>
                                          </router-link>
                                       </li>
                                       <li class="mb-16">
                                          <router-link to="/aloqa"
                                             class="link d-flex align-items-center gap-2 dropdown-item">
                                             <i class="bi bi-file-earmark-plus fz-20"></i>
                                             <span class="d-block fz-16 pra fw-500 inter">Murijat yuborish</span>
                                          </router-link>
                                       </li>
                                       <li class="mb-16">
                                          <router-link to="/chat"
                                             class="link d-flex align-items-center gap-2 dropdown-item">
                                             <i class="bi bi-chat-text fz-20"></i>
                                             <span class="d-block fz-16 pra fw-500 inter">Chat</span>
                                          </router-link>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="header-bar d-lg-none">
                           <span></span>
                           <span></span>
                           <span></span>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
         </div>
         <!-- Header End -->
         <div v-if="loading" class="loader truckWrapper">
            <video autoplay muted loop class="loaderVideo">
               <source src="assets/img/bosh/postman7.mp4" type="video/mp4">
               Your browser does not support the video tag.
            </video>
         </div>

         <!-- Popup Section -->
         <div v-if="trackingData" id="trackingPopup" class="popup">
            <div class="popup-content">
               <section class="task__sectiontop ralt pt-120 pb-120">
                  <span class="close-btn" @click="closePopup">&times;</span>
                  <div class="container">

                     <div class="row ralt g-4" v-if="trackingData">
                        <h2 class="title wow fadeInUp mb-24 center" id="trackingNumberDisplay">{{ trackingData.number }}
                        </h2>
                        <!-- <div v-if="trackingData.senderCountry"
                           class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown">
                           <div class="task__item round16 bgwhite d-flex align-items-center">
                              <div class="thumb">
                                 <img src="assets/img/task/tast1.jpg" alt="img">
                              </div>
                              <div class="content">
                                 <h3 class="inter title2 mb-24">Yuboruvchi</h3>
                                 <p v-if="trackingData.senderCountry" class="fz-16 fw-400 inter pra mb-40">
                                    <strong>Mamlakat: </strong> <br>
                                    <span id="senderCountry" class="textrang">{{ trackingData.senderCountry }}</span>
                                 </p>
                                 <p v-if="trackingData.senderAddress" class="fz-16 fw-400 inter pra mb-40">
                                    <strong>Manzil:</strong> <br>
                                    <span id="senderAddress" class="textrang">{{ trackingData.senderAddress }}</span>
                                 </p>

                                 <p v-if="trackingData.senderPostcode" class="fz-16 fw-400 inter pra mb-40">
                                    <strong>Pochta indeksi:</strong> <br>
                                    <span id="senderPostcode" class="textrang">{{ trackingData.senderPostcode }}</span>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div v-if="trackingData.recipientCountry"
                           class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp">
                           <div class="task__item round16 bgwhite d-flex align-items-center">
                              <div class="thumb">
                                 <img src="assets/img/task/tast2.jpg" alt="img">
                              </div>
                              <div class="content">
                                 <h3 class="inter title2 mb-24">Qabul qiluvchi</h3>
                                 <p v-if="trackingData.recipientCountry" class="fz-16 fw-400 inter pra mb-40">
                                    <strong>Mamlakat:</strong> <br>
                                    <span id="recipientCountry" class="textrang">{{ trackingData.recipientCountry
                                       }}</span>
                                 </p>
                                 <p v-if="trackingData.recipientAddress" class="fz-16 fw-400 inter pra mb-40">
                                    <strong>Manzil:</strong> <br>
                                    <span id="recipientAddress" class="textrang">{{ trackingData.recipientAddress
                                       }}</span>
                                 </p>
                                 <p v-if="trackingData.recipientPostcode" class="fz-16 fw-400 inter pra mb-40">
                                    <strong>Pochta indeksi:</strong> <br>
                                    <span id="recipientPostcode" class="textrang">{{ trackingData.recipientPostcode
                                       }}</span>
                                 </p>
                              </div>
                           </div>
                        </div> -->
                        <div class="col-xl-12 col-lg-12">
                           <div class="service__detailswrapper">
                              <div class="trending__based mb-40 bgwhite round16 shadow1">
                                 <div class="based__content border round16 bgwhite">
                                    <div class="freelancer__education bborderdash pb-30 mb-30">
                                       <h3 class="title2">Kuzatuv</h3>
                                       <ul class="blog__categories" id="combinedTracking">
                                          <li v-for="(event, index) in combinedTracking" :key="index">
                                             <a href="#0" class="d-flex align-items-center">
                                                <span class="fz-12 fw-500 title inter">{{ event.date.toLocaleString()
                                                   }}</span>
                                                <span class="cateicon">
                                                   <img
                                                      :src="`assets/img/flags/${event.country_code.toLowerCase()}.svg`"
                                                      alt="flag" class="flag-icon">
                                                </span>
                                                <span class="fz-12 d-block fw-500 inter success2 region-info">{{
                                                   event.region }}</span>
                                                <span class="fz-12 d-block fw-500 inter success2 region-info">{{
                                                   event.data }}</span>
                                                <span class="fz-12 fw-500 inter title d-block">{{ event.location
                                                   }}</span>
                                                <span>
                                                   <span class="fz-12 fw-500 inter success2 d-block">{{ event.status
                                                      }}</span>
                                                   <span v-if="event.malumot" class="fz-12 fw-500 inter success2"
                                                      style="color: brown; display: block; font-size: 10px; opacity: 0.6;">
                                                      {{ event.malumot }}
                                                   </span>
                                                   <span v-if="event.malumot2" class="fz-12 fw-500 inter success2"
                                                      style="color: brown; display: block; font-size: 10px; opacity: 0.6;">
                                                      {{ event.malumot2 }}
                                                   </span>
                                                </span>
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <!-- <div class="col-xl-4 col-lg-4">
                           <div class="basic__skilled__wrapper">
                              <div class="darrell__profile round16 bgwhite">
                                 <div id="adCarousel" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                       <div class="carousel-item active">
                                          <a href="https://uz.post" target="_blank">
                                             <img src="assets/img/reklama/11.png" class="d-block w-100" alt="ad1">
                                          </a>
                                       </div>
                                       <div class="carousel-item">
                                          <a href="https://uz.post" target="_blank">
                                             <img src="assets/img/reklama/12.png" class="d-block w-100" alt="ad2">
                                          </a>
                                       </div>
                                       <div class="carousel-item">
                                          <a href="https://uz.post" target="_blank">
                                             <img src="assets/img/reklama/13.png" class="d-block w-100" alt="ad2">
                                          </a>
                                       </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#adCarousel"
                                       data-bs-slide="prev">
                                       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                       <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#adCarousel"
                                       data-bs-slide="next">
                                       <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                       <span class="visually-hidden">Next</span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div> -->
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </section>
   </div>
</template>
<script>
export default {
   data() {
      return {
         trackingNumber: '',
         loading: false,
         trackingData: null,
         combinedTracking: [],
         errorMessage: null,
      };
   },
   methods: {
      fetchTrackingData() {
         this.loading = true;
         this.trackingData = null;
         this.combinedTracking = [];
         this.errorMessage = null;

         const xhr = new XMLHttpRequest();
         xhr.open('GET', `https://new.pochta.uz/api/v1/public/test/${this.trackingNumber}/`, true);
         xhr.onload = () => {
            this.loading = false;
            if (xhr.status >= 200 && xhr.status < 300) {
               const data = JSON.parse(xhr.responseText);

               if (Array.isArray(data) && data.length > 0 && data[0].OperationalMailitems) {
                  const mailItem = data[0].OperationalMailitems.TMailitemInfoFromScanning[0];
                  this.trackingData = {
                     number: mailItem.InternationalId,
                     senderCountry: mailItem.OrigCountry.Name || '',
                     senderAddress: mailItem.OrigAddress || '',
                     senderPostcode: mailItem.OrigPostcode || '',
                     recipientCountry: mailItem.DestCountry.Name || '',
                     recipientAddress: mailItem.DestAddress || '',
                     recipientPostcode: mailItem.DestPostcode || ''
                  };

                  this.processEvents(mailItem.Events.TMailitemEventScanning, mailItem.DestCountry.Code);
               } else {
                  this.processAlternativeData(data);
               }
            } else {
               this.errorMessage = 'Ma\'lumot topilmadi';
            }
         };
         xhr.onerror = () => {
            this.loading = false;
            this.errorMessage = 'So\'rovni yuborishda xatolik yuz berdi';
         };
         xhr.send();
      },
      processEvents(events, countryCode) {
         this.combinedTracking = events.map(event => ({
            date: new Date(event.LocalDateTime),
            location: event.EventOffice.Name,
            status: event.IPSEventType.Name,
            malumot: event.RetentionReason.Name,
            malumot2: event.NonDeliveryReason.Name,
            country_code: countryCode
         })).sort((a, b) => b.date - a.date);
      },
      processAlternativeData(data) {
         this.trackingData = {
            number: data.header?.data?.order_number || data.gdeposilka?.data?.tracking_number || 'Ma\'lumot yo\'q',
            senderCountry: data.header?.data?.locations?.[0]?.address_city || '',
            senderAddress: data.header?.data?.locations?.[0]?.address || '',
            senderPostcode: data.header?.data?.locations?.[0]?.postcode || '',
            recipientCountry: data.header?.data?.locations?.[1]?.address_city || '',
            recipientAddress: data.header?.data?.locations?.[1]?.address || '',
            recipientPostcode: data.header?.data?.locations?.[1]?.postcode || ''
         };

         let shipoxList = [];
         let gdeposilkaList = [];

         if (data.shipox && data.shipox.data && data.shipox.data.list) {
            shipoxList = data.shipox.data.list.map(item => ({
               date: new Date(item.date),
               data: item.data || 'UzPost',
               location: item.warehouse ? item.warehouse.name : '',
               status: this.getStatusText(item.status_desc),
               country_code: 'UZ'
            }));
         }

         if (data.gdeposilka && data.gdeposilka.data && data.gdeposilka.data.checkpoints) {
            gdeposilkaList = data.gdeposilka.data.checkpoints.map(item => ({
               date: new Date(item.time),
               location: item.location_translated,
               region: item.courier.name,
               status: this.getStatusText(item.status_name),
               country_code: item.courier.country_code
            }));
         }

         const sortedShipoxList = shipoxList.sort((a, b) => new Date(b.date) - new Date(a.date));
         const sortedGdeposilkaList = gdeposilkaList.sort((a, b) => new Date(b.date) - new Date(a.date));

         this.combinedTracking =
            new Date(sortedShipoxList[0]?.date) > new Date(sortedGdeposilkaList[0]?.date)
               ? [...sortedShipoxList, ...sortedGdeposilkaList]
               : [...sortedGdeposilkaList, ...sortedShipoxList];
      },
      getStatusText(statusDesc) {
         return statusDesc || 'Status noaniq';
      },
      closePopup() {
         this.trackingData = null;
         this.combinedTracking = [];
      }
   }
};

</script>
