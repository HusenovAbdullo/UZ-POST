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
                           Shaxsiy kabinet
                        </span>
                        <!-- <ul class="breadcun__list flex-wrap gap-1 d-flex align-items-center">
                  <li>
                     <a href="index.html" class="fz-16 fw-400 inter text-white">
                        Bosh sahifa
                     </a>
                  </li>
                  <li>
                     <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                     <a href="#0" class="fz-16 fw-400 inter text-white">
                        User Profile
                     </a>
                  </li>
                  <li>
                     <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                     <a href="#0" class="fz-16 fw-400 inter base2">
                        Profile     
                     </a>
                  </li>
               </ul> -->
                     </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-5">
                     <div class="logout__btn">
                        <a href="#" class="cmn--logout" @click.prevent="handleLogout">
                           <span>
                              <i class="bi bi-box-arrow-right"></i>
                           </span>
                           <span class="fz-16 fw-600 inter">
                              Kabinetdan chiqish
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- Hero Section End -->

   <!-- profile section Here -->
   <section class="profile__section sectionbg pb-120">
      <div class="container">
         <div class="profile__customize">
            <div class="row g-4">
               <div class="col-lg-4">
                  <div class="main__profile__sidebar">
                     <div class="darrell__profile round16 mb-24 border bgwhite">
                        <div class="profile__check ralt">
                           <img src="assets/img/bn/profile.jpg" alt="profile">
                           <i class="bi bi-check"></i>
                        </div>
                        <div class="darrell__content mt-40 text-center">
                           <h4 class="title mb-16">
                              Husenov Abdullo
                           </h4>
                           <!-- <span class="fz-16 fw-400 inter title">
                     Machine Learner
                  </span> -->
                           <ul
                              class="d-flex mt-24 justify-content-center employer__listbase flex-wrap tranding__listbase align-items-center">
                              <li>
                                 <span class="fz-16 fw-400 inter pra">
                                    <i class="bi bi-geo-alt base"></i>
                                    Toshkent
                                 </span>
                              </li>
                              <li class="d-flex gap-2 fz-16 fw-500 inter title">
                                 <i class="bi bi-star-fill ratting"></i>
                                 Index <span class="pra fz-14">100000</span>
                              </li>
                              <!-- <li>
                        <span class="fz-16 fw-400 inter pra">
                           Member: <span class="base">2021</span>
                        </span>
                     </li> -->
                           </ul>
                           <ul class="social justify-content-center mt-30 mb-40 d-flex align-items-center">
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-facebook base"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-instagram base"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-twitter base"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-pinterest base"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="javascript:void(0)">
                                    <i class="bi bi-dribbble base"></i>
                                 </a>
                              </li>
                           </ul>
                           <router-link to="/tahrirlash" class="cmn--btn outline__btn">
                              <span>Profilni tahrirlash</span>
                              <span>
                                 <i class="bi bi-arrow-up-right"></i>
                              </span>
                           </router-link>
                        </div>
                     </div>
                     <!-- <div class="all__editbar round16 bgwhite border">
               <div class="description__edit ralt pb-24 bborderdash commn__spacenone">
                  <ul class="nav" role="tablist">
                     <li class="nav-item w-100 mb-16 d-flex align-items-center justify-content-between" role="presentation">
                        <span class="fz-24 fw-600 inter title">
                           Description
                        </span>
                        <button class="nav-link fz-16 fw-600 inter base" id="edit-tab" data-bs-toggle="tab" data-bs-target="#edits" type="button" role="tab" aria-controls="edits" aria-selected="false">
                          Edit
                        </button>
                     </li>
                  </ul>
                  <div class="tab-content">
                     <div class="tab-pane fz-16 fw-400 inter title base fade show active" id="home" role="tabpanel">
                        Hi, This is Darrell Steward. An Expert Machine Learner. You can call me a Researcher and problem solver! I am Following the 2023 Design Trends. My attribution of work is Minimalist/Flat/simple.
                     </div>
                     <div class="tab-pane base fade" id="edits" role="tabpanel" aria-labelledby="edit-tab">
                       <div class="description__twobox round16">
                           <p class="fz-16 inter title bborderdash pb-24 mb-24">
                              Hi, This is Darrell Steward. An Expert Machine Learner. You can call me a Researcher and problem solver! I am Following the 2023 Design Trends. My attribution of work is Minimalist/Flat/simple.
                           </p>
                           <div class="update__grp d-flex align-items-center">
                              <a href="javascript:void(0)" class="cmn--btn text-center outline__btn d-block">
                                 <span>
                                    Cancel
                                 </span>
                              </a>
                              <a href="javascript:void(0)" class="cmn--btn text-center d-block">
                                 <span>
                                    Update
                                 </span>
                              </a>
                           </div>
                       </div>
                     </div>
                  </div>
               </div>
               <div class="description__edit pt-24 ralt pb-24 bborderdash commn__spacenone">
                  <ul class="nav" role="tablist">
                     <li class="nav-item w-100 mb-16 d-flex align-items-center justify-content-between" role="presentation">
                        <span class="fz-24 fw-600 inter title">
                           Languages
                        </span>
                        <button class="nav-link fz-16 fw-600 inter base" id="language-tab" data-bs-toggle="tab" data-bs-target="#languagesn" type="button" role="tab" aria-controls="languagesn" aria-selected="false">
                          Add New
                        </button>
                     </li>
                  </ul>
                  <div class="tab-content">
                     <div class="tab-pane fade show active" id="languages" role="tabpanel">
                        <div class="language__items mb-16 d-flex align-items-center justify-content-between">
                           <span class="title title inter fz-16">
                              English
                           </span>
                           <div class="d-flex gap-2 align-items-center">
                              <a href="javascript:void(0)">
                                 <i class="bi title bi-pencil-square"></i>
                              </a>
                              <a href="javascript:void(0)">
                                 <i class="bi title bi-trash3"></i>
                              </a>
                           </div>
                        </div>
                        <div class="language__items d-flex align-items-center justify-content-between">
                           <span class="title title inter fz-16">
                              English
                           </span>
                           <div class="d-flex gap-2 align-items-center">
                              <a href="javascript:void(0)">
                                 <i class="bi title bi-pencil-square"></i>
                              </a>
                              <a href="javascript:void(0)">
                                 <i class="bi title bi-trash3"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane base fade" id="languagesn" role="tabpanel" aria-labelledby="language-tab">
                       <div class="description__twobox round16">
                           <div class="language__add pb-24 bborderdash mb-24">
                              <span class="addlan mb-16 border pra d-block round100 bgwhite">
                                 Add Language
                              </span>
                              <select name="lan">
                                 <option value="1">
                                    Language Level
                                 </option>
                                 <option value="1">
                                    Language Two
                                 </option>
                                 <option value="1">
                                    Language Three
                                 </option>
                              </select>
                           </div>
                           <div class="update__grp d-flex align-items-center">
                              <a href="javascript:void(0)" class="cmn--btn text-center outline__btn d-block">
                                 <span>
                                    Cancel
                                 </span>
                              </a>
                              <a href="javascript:void(0)" class="cmn--btn text-center d-block">
                                 <span>
                                    Add
                                 </span>
                              </a>
                           </div>
                       </div>
                     </div>
                  </div>
               </div>
               <div class="description__edit pt-24 ralt pb-24 bborderdash commn__spacenone">
                  <h4 class="title mb-24">
                     Linked Accounts
                  </h4>
                  <ul class="social flex-wrap d-flex align-items-center">
                     <li>
                        <a href="javascript:void(0)">
                           <i class="bi bi-facebook base"></i>
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)">
                           <i class="bi bi-skype base"></i>
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)">
                           <i class="bi bi-twitter base"></i>
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)">
                           <i class="bi bi-instagram base"></i>
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)">
                           <i class="bi bi-linkedin base"></i>
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)">
                           <i class="bi bi-github base"></i>
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)">
                           <i class="bi bi-plus-lg base"></i>
                        </a>
                     </li>
                  </ul>
               </div>
               <div class="description__edit pt-24 ralt pb-24 bborderdash commn__spacenone">
                  <ul class="nav" role="tablist">
                     <li class="nav-item w-100 mb-16 d-flex align-items-center justify-content-between" role="presentation">
                        <span class="fz-24 fw-600 inter title">
                           Skills
                        </span>
                        <button class="nav-link fz-16 fw-600 inter base" id="skill-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">
                          Add New
                        </button>
                     </li>
                  </ul>
                  <div class="tab-content">
                     <div class="tab-pane fade show active" id="skew" role="tabpanel">
                        <div class="skill__tag d-flex flex-wrap">
                           <a href="javascript:void(0)" class="border round100 fz-14 pra">
                              Machine Learning
                           </a>
                           <a href="javascript:void(0)" class="border round100 fz-14 pra">
                              Vitual Assistan
                           </a>
                           <a href="javascript:void(0)" class="border round100 fz-14 pra">
                              AI
                           </a>
                           <a href="javascript:void(0)" class="border round100 fz-14 pra">
                              AI Chatbot
                           </a>
                           <a href="javascript:void(0)" class="border round100 fz-14 pra">
                              NIP Specialists
                           </a>
                           <a href="javascript:void(0)" class="border round100 fz-14 pra">
                              Data Scientists
                           </a>
                           <a href="javascript:void(0)" class="border round100 fz-14 pra">
                              Deep Learning
                           </a>
                           <a href="javascript:void(0)" class="border round100 fz-14 pra">
                              Robotics
                           </a>
                           <a href="javascript:void(0)" class="border round100 fz-14 pra">
                              Data Analysts
                           </a>
                           <a href="javascript:void(0)" class="border round100 fz-14 pra">
                              Python
                           </a>
                        </div>
                     </div>
                     <div class="tab-pane base fade" id="skills" role="tabpanel" aria-labelledby="skill-tab">
                       <div class="description__twobox round16">
                           <div class="language__add pb-24 bborderdash mb-24">
                              <span class="addlan mb-16 border pra d-block round100 bgwhite">
                                 Add Skill
                              </span>
                              <select name="lan">
                                 <option value="1">
                                    Experience Level
                                 </option>
                                 <option value="1">
                                    Experience Two
                                 </option>
                                 <option value="1">
                                    Experience Three
                                 </option>
                              </select>
                           </div>
                           <div class="update__grp d-flex align-items-center">
                              <a href="javascript:void(0)" class="cmn--btn text-center outline__btn d-block">
                                 <span>
                                    Cancel
                                 </span>
                              </a>
                              <a href="javascript:void(0)" class="cmn--btn text-center d-block">
                                 <span>
                                    Add
                                 </span>
                              </a>
                           </div>
                       </div>
                     </div>
                  </div>
               </div>
               <div class="description__edit pt-24 ralt pb-24 bborderdash commn__spacenone">
                  <ul class="nav" role="tablist">
                     <li class="nav-item w-100 mb-16 d-flex align-items-center justify-content-between" role="presentation">
                        <span class="fz-24 fw-600 inter title">
                           Education
                        </span>
                        <button class="nav-link fz-16 fw-600 inter base" id="edu-tab" data-bs-toggle="tab" data-bs-target="#education" type="button" role="tab" aria-controls="education" aria-selected="false">
                          Add New
                        </button>
                     </li>
                  </ul>
                  <div class="tab-content">
                     <div class="tab-pane fade show active" id="edus" role="tabpanel">
                        <span class="fz-16 fw-400 inter addpra">
                           Add your Education
                        </span>
                     </div>
                     <div class="tab-pane base fade" id="education" role="tabpanel" aria-labelledby="edu-tab">
                       <div class="description__twobox round16">
                           <div class="language__add pb-24 bborderdash mb-24">
                              <select name="lan" class="mb-16">
                                 <option value="1">
                                    Country of Collage/University
                                 </option>
                                 <option value="1">
                                    Us
                                 </option>
                                 <option value="1">
                                    Uk
                                 </option>
                              </select>
                              <select name="lan" class="mb-16">
                                 <option value="1">
                                    Collage/University Name
                                 </option>
                                 <option value="1">
                                    Standard University
                                 </option>
                                 <option value="1">
                                    Nort University
                                 </option>
                              </select>
                              <select name="lan" class="mb-16">
                                 <option value="1">
                                    Department
                                 </option>
                                 <option value="1">
                                    Department English
                                 </option>
                                 <option value="1">
                                    Department Art
                                 </option>
                              </select>
                              <select name="lan">
                                 <option value="1">
                                    Year of graduation
                                 </option>
                                 <option value="1">
                                    3rd year
                                 </option>
                                 <option value="1">
                                    Done
                                 </option>
                              </select>
                           </div>
                           <div class="update__grp d-flex align-items-center">
                              <a href="javascript:void(0)" class="cmn--btn text-center outline__btn d-block">
                                 <span>
                                    Cancel
                                 </span>
                              </a>
                              <a href="javascript:void(0)" class="cmn--btn text-center d-block">
                                 <span>
                                    Add
                                 </span>
                              </a>
                           </div>
                       </div>
                     </div>
                  </div>
               </div>
               <div class="description__edit pt-24 ralt  commn__spacenone">
                  <ul class="nav" role="tablist">
                     <li class="nav-item w-100 mb-16 d-flex align-items-center justify-content-between" role="presentation">
                        <span class="fz-24 fw-600 inter title">
                           Certification
                        </span>
                        <button class="nav-link fz-16 fw-600 inter base" id="certified-tab" data-bs-toggle="tab" data-bs-target="#certification" type="button" role="tab" aria-controls="certification" aria-selected="false">
                          Add New
                        </button>
                     </li>
                  </ul>
                  <div class="tab-content">
                     <div class="tab-pane fade show active" id="cert" role="tabpanel">
                        <span class="fz-16 fw-400 inter addpra">
                           Add your Certification
                        </span>
                     </div>
                     <div class="tab-pane base fade" id="certification" role="tabpanel" aria-labelledby="certified-tab">
                       <div class="description__twobox round16">
                           <div class="language__add pb-24 bborderdash mb-24">
                              <input class="addlan mb-16 border pra d-block round100 bgwhite" type="text" placeholder=" Certificate or Award">
                              <input class="addlan mb-16 border pra d-block round100 bgwhite" type="text" placeholder=" Certified From">
                              <input class="addlan border pra d-block round100 bgwhite" type="text" placeholder=" Year">
                           </div>
                           <div class="update__grp d-flex align-items-center">
                              <a href="javascript:void(0)" class="cmn--btn text-center outline__btn d-block">
                                 <span>
                                    Cancel
                                 </span>
                              </a>
                              <a href="javascript:void(0)" class="cmn--btn text-center d-block">
                                 <span>
                                    Add
                                 </span>
                              </a>
                           </div>
                       </div>
                     </div>
                  </div>
               </div>
            </div> -->
                  </div>
               </div>
               <div class="col-lg-8">
                  <div class="create__gigpublist border round16 bgwhite">
                     <div class="nav mb-40 border round16 d-flex align-items-center nav-tabs" role="tablist">
                        <button class="nav-link fz-16 fw-500 pra d-flex align-items-center gap-1 active"
                           id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab"
                           aria-controls="nav-home" aria-selected="true">
                           <i class="bi bi-file-earmark-plus"></i>
                           Jo'natmani rasmiylashtirish
                        </button>
                        <button class="nav-link fz-16 fw-500 pra d-flex align-items-center gap-1" id="nav-profile-tab"
                           data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab"
                           aria-controls="nav-profile" aria-selected="false">
                           <i class="bi bi-file-earmark-bar-graph"></i>
                           Mening jo'natmalarim
                        </button>
                     </div>
                     <div class="tab-content">
                        <div class="tab-pane base fade show active" id="nav-home" role="tabpanel"
                           aria-labelledby="nav-home-tab">
                           <a href="overview.html" class="gig__box d-block border text-center round16 bgwhite">
                              <span class="icon round100 d-flex align-items-center justify-content-center">
                                 <i class="bi bi-plus-lg"></i>
                              </span>
                              <span class="fz-24 fw-600 inter pra">
                                 Jo'natmani rasmiylashtirish
                              </span>
                           </a>
                        </div>
                        <div class="tab-pane base fade" id="nav-profile" role="tabpanel"
                           aria-labelledby="nav-profile-tab">
                           <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                              <div class="overview__gitwrapper bgwhite round16 border">
                                 <h3 class="pb-40 bborderdash mb-40 title">
                                    Mening jo'natmalarim
                                 </h3>
                                 <div class="d-flex billing__history mb-30 align-items-center gap-3 flex-wrap tort">
                                    <select name="range">
                                       <option value="1">
                                          Data Range
                                       </option>
                                       <option value="1">
                                          ...
                                       </option>
                                       <option value="1">
                                          ...
                                       </option>
                                    </select>
                                    <select name="range">
                                       <option value="1">
                                          Transaction
                                       </option>
                                       <option value="1">
                                          Card
                                       </option>
                                       <option value="1">
                                          Card
                                       </option>
                                    </select>
                                    <select name="range">
                                       <option value="1">
                                          Service
                                       </option>
                                       <option value="1">
                                          ...
                                       </option>
                                       <option value="1">
                                          ...
                                       </option>
                                    </select>
                                    <select name="range">
                                       <option value="1">
                                          Currency
                                       </option>
                                       <option value="1">
                                          ...
                                       </option>
                                       <option value="1">
                                          ...
                                       </option>
                                    </select>
                                    <form action="#0"
                                       class="billing__form round100 border d-flex align-items-center justify-content-between"
                                       style="border-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;">
                                       <input type="text" placeholder="Search">
                                       <i class="bi bi-search fz-18 title"></i>
                                    </form>
                                 </div>
                                 <div class="billing__table">
                                    <table class="table">
                                       <tbody>
                                          <tr>
                                             <td class="fz-20 fw-500 pra inter">Date</td>
                                             <td class="fz-20 fw-500 pra inter">Transaction</td>
                                             <td class="fz-20 fw-500 pra inter">Service</td>
                                             <td class="fz-20 fw-500 pra inter">Order</td>
                                             <td class="fz-20 fw-500 pra inter">Currency</td>
                                             <td class="fz-20 fw-500 pra inter">Total</td>
                                             <td class="text-uppercase fz-20 fw-500 pra inter">Pdf</td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">03/05/2023</td>
                                             <td class="fz-16 fw-400 inter pra">55700223</td>
                                             <td class="fz-16 fw-400 inter pra">Machine Learning</td>
                                             <td class="fz-16 fw-400 inter pra">3</td>
                                             <td class="fz-16 fw-400 inter pra">$</td>
                                             <td class="fz-16 fw-400 inter pra">$215.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">03/05/2023</td>
                                             <td class="fz-16 fw-400 inter pra">55700223</td>
                                             <td class="fz-16 fw-400 inter pra">Deep Learning</td>
                                             <td class="fz-16 fw-400 inter pra">4</td>
                                             <td class="fz-16 fw-400 inter pra">€</td>
                                             <td class="fz-16 fw-400 inter pra">€654.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">27/06/2023</td>
                                             <td class="fz-16 fw-400 inter pra">34034474</td>
                                             <td class="fz-16 fw-400 inter pra">Robotics </td>
                                             <td class="fz-16 fw-400 inter pra">5</td>
                                             <td class="fz-16 fw-400 inter pra">¥</td>
                                             <td class="fz-16 fw-400 inter pra">¥956.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">09/07/2023</td>
                                             <td class="fz-16 fw-400 inter pra">58276066</td>
                                             <td class="fz-16 fw-400 inter pra">Data Analytics</td>
                                             <td class="fz-16 fw-400 inter pra">2</td>
                                             <td class="fz-16 fw-400 inter pra">₽</td>
                                             <td class="fz-16 fw-400 inter pra">₽546.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">15/07/2023</td>
                                             <td class="fz-16 fw-400 inter pra">43397744</td>
                                             <td class="fz-16 fw-400 inter pra">Virtual Assistants</td>
                                             <td class="fz-16 fw-400 inter pra">$</td>
                                             <td class="fz-16 fw-400 inter pra">₽</td>
                                             <td class="fz-16 fw-400 inter pra">$156.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">17/07/2023</td>
                                             <td class="fz-16 fw-400 inter pra">37890606</td>
                                             <td class="fz-16 fw-400 inter pra">Healthcare AI</td>
                                             <td class="fz-16 fw-400 inter pra">1</td>
                                             <td class="fz-16 fw-400 inter pra">$</td>
                                             <td class="fz-16 fw-400 inter pra">$96.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">19/07/2023</td>
                                             <td class="fz-16 fw-400 inter pra">76031847</td>
                                             <td class="fz-16 fw-400 inter pra">AI in Finance</td>
                                             <td class="fz-16 fw-400 inter pra">6</td>
                                             <td class="fz-16 fw-400 inter pra">€</td>
                                             <td class="fz-16 fw-400 inter pra">€856.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">21/07/2023</td>
                                             <td class="fz-16 fw-400 inter pra">66277431</td>
                                             <td class="fz-16 fw-400 inter pra">NLP Language</td>
                                             <td class="fz-16 fw-400 inter pra">3</td>
                                             <td class="fz-16 fw-400 inter pra">€</td>
                                             <td class="fz-16 fw-400 inter pra">€856.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">23/08/2023</td>
                                             <td class="fz-16 fw-400 inter pra">11081197</td>
                                             <td class="fz-16 fw-400 inter pra">Machine Learning</td>
                                             <td class="fz-16 fw-400 inter pra">4</td>
                                             <td class="fz-16 fw-400 inter pra">€</td>
                                             <td class="fz-16 fw-400 inter pra">€756.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                          <tr>
                                             <td class="fz-16 fw-400 inter pra">04/09/2023</td>
                                             <td class="fz-16 fw-400 inter pra">66538135</td>
                                             <td class="fz-16 fw-400 inter pra">Machine Learning</td>
                                             <td class="fz-16 fw-400 inter pra">4</td>
                                             <td class="fz-16 fw-400 inter pra">€</td>
                                             <td class="fz-16 fw-400 inter pra">€356.00</td>
                                             <td><i class="bi bi-download fz-18 base"></i></td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                           </div>
                           <ul class="pagination justify-content-center mt-40">
                              <li>
                                 <a href="#0">
                                    <i class="bi bi-chevron-left base"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="#0">
                                    1
                                 </a>
                              </li>
                              <li>
                                 <a href="#0">
                                    2
                                 </a>
                              </li>
                              <li>
                                 <a href="#0">
                                    3
                                 </a>
                              </li>
                              <li>
                                 <a href="#0">
                                    ...
                                 </a>
                              </li>
                              <li>
                                 <a href="#0">
                                    <i class="bi bi-chevron-right base"></i>
                                 </a>
                              </li>
                           </ul>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- profile section End -->
</template>
<script>
export default {
    data() {
        return {
            // Boshqa sahifalar uchun kerakli data qismini shu yerda aniqlang
        };
    },
    methods: {
        handleLogout() {
            // Tokenni mahalliy saqlashdan o'chirish
            localStorage.removeItem('id_token');
            
            // Bosh sahifaga yo'naltirish
            this.$router.push({ name: 'home' });
        },
        // Boshqa methodlarni shu yerga qo'shing
    }
};
</script>