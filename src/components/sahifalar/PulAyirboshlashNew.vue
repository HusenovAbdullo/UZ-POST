<template>
  <section class="banner__breadcumn ralt">
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
  <div>
    <div class="breadcumnd__content">
      <span class="d4 mb-24" style="display: inline;">
        Chiquvchi pullik ayirboshlash
      </span>
    </div>
  </div>
</div>

    </div>
  </div>
</div>

  </section>


  <div class="tables-container">
    <h1 class="main-title">O'zbekiston pochtasi statistikasi</h1>

    <div class="table-container">
      <h2 class="table-title">2013-yil uchun "O'zbekiston pochtasi" AJ bo'yicha chiquvchi pullik ayirboshlash (ming
        dona)</h2>
      <table class="postal-table">
        <thead>
          <tr>
            <th>№ U/r</th>
            <th>Filiallarning nomi</th>
            <th>Davriy nashrlar</th>
            <th>Yozma xatlar</th>
            <th>Posilkalar</th>
            <th>Pul o'tkazmalar</th>
            <th>Pensiya va nafaqalar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in postalData" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.periodicPublications }}</td>
            <td>{{ row.writtenLetters }}</td>
            <td>{{ row.parcels }}</td>
            <td>{{ row.moneyTransfers }}</td>
            <td>{{ row.pensions }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-container">
      <h2 class="table-title">2014-yil uchun "O'zbekiston pochtasi" AJ bo'yicha kiruvchi pullik ayirboshlash (ming dona)
      </h2>
      <table class="postal-table">
        <thead>
          <tr>
            <th>№ U/r</th>
            <th>Filiallarning nomi</th>
            <th>Davriy nashrlar</th>
            <th>Yozma xatlar</th>
            <th>Posilkalar</th>
            <th>Pul o'tkazmalar</th>
            <th>Pensiya va nafaqalar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in incomingPostalData" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.periodicPublications }}</td>
            <td>{{ row.writtenLetters }}</td>
            <td>{{ row.parcels }}</td>
            <td>{{ row.moneyTransfers }}</td>
            <td>{{ row.pensions }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-container">
      <h2 class="table-title">2015-yil uchun "O'zbekiston pochtasi" AJ bo'yicha xizmatlar ko'rsatish (million so'm)</h2>
      <table class="postal-table">
        <thead>
          <tr>
            <th>№ U/r</th>
            <th>Filiallarning nomi</th>
            <th>Pochta xizmatlari</th>
            <th>Moliyaviy xizmatlar</th>
            <th>Boshqa xizmatlar</th>
            <th>Pensiya va nafaqalar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in postalServicesData" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.postalServices }}</td>
            <td>{{ row.financialServices }}</td>
            <td>{{ row.otherServices }}</td>
            <td>{{ row.pensions }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const postalData = [
  { id: 1, name: "Qoraqalpog'iston", periodicPublications: "6 693,6", writtenLetters: "697,4", parcels: "4,7", moneyTransfers: "86,2", pensions: "1 534,2" },
  { id: 2, name: "Andijon", periodicPublications: "9 456,4", writtenLetters: "1 219,3", parcels: "10,1", moneyTransfers: "88,9", pensions: "2 924,4" },
  { id: 3, name: "Buxoro", periodicPublications: "6 720,8", writtenLetters: "1 395,7", parcels: "4,2", moneyTransfers: "44,1", pensions: "2 022,1" },
  { id: 4, name: "Jizzax", periodicPublications: "3 131,4", writtenLetters: "211,1", parcels: "1,1", moneyTransfers: "19,8", pensions: "633,5" },
  { id: 5, name: "Qashqadaryo", periodicPublications: "8 397,8", writtenLetters: "873,9", parcels: "2,9", moneyTransfers: "55,9", pensions: "1 726,2" },
  { id: 6, name: "Navoiy", periodicPublications: "3 623,8", writtenLetters: "763,7", parcels: "11,2", moneyTransfers: "77,6", pensions: "1 075,8" },
  { id: 7, name: "Namangan", periodicPublications: "8 562,9", writtenLetters: "938,6", parcels: "7,3", moneyTransfers: "52,6", pensions: "2 729,0" },
  { id: 8, name: "Samarqand", periodicPublications: "6 651,0", writtenLetters: "1 030,0", parcels: "5,8", moneyTransfers: "59,0", pensions: "3 383,0" },
  { id: 9, name: "Surxondaryo", periodicPublications: "3 878,5", writtenLetters: "1 044,2", parcels: "3,1", moneyTransfers: "51,2", pensions: "1 801,1" },
  { id: 10, name: "Sirdaryo", periodicPublications: "2 714,4", writtenLetters: "391,7", parcels: "2,5", moneyTransfers: "24,8", pensions: "535,7" },
  { id: 11, name: "Toshkent", periodicPublications: "9 256,3", writtenLetters: "723,9", parcels: "6,7", moneyTransfers: "95,5", pensions: "3 094,0" },
  { id: 12, name: "Farg'ona", periodicPublications: "13 629,0", writtenLetters: "1 852,0", parcels: "7,2", moneyTransfers: "89,8", pensions: "4 017,0" },
  { id: 13, name: "Xorazm", periodicPublications: "3 665,8", writtenLetters: "535,9", parcels: "2,5", moneyTransfers: "116,4", pensions: "1 801,0" },
  { id: 14, name: "Toshkent pochtamti", periodicPublications: "26 108,2", writtenLetters: "2 490,5", parcels: "18,0", moneyTransfers: "120,6", pensions: "3 221,4" },
  { id: 15, name: "Xalkaro pochtamt", periodicPublications: "", writtenLetters: "336,5", parcels: "10,2", moneyTransfers: "", pensions: "" },
  { id: 16, name: '"O\'zbekiston pochtasi" AJ', periodicPublications: "", writtenLetters: "", parcels: "", moneyTransfers: "", pensions: "" },
  { id: "", name: "Jami", periodicPublications: "112 490,0", writtenLetters: "14 504,4", parcels: "97,3", moneyTransfers: "982,4", pensions: "30 498,4" },
]

const incomingPostalData = [
  { id: 1, name: "Qoraqalpog'iston", periodicPublications: "5 820,5", writtenLetters: "580,2", parcels: "3,8", moneyTransfers: "75,6", pensions: "1 380,8" },
  { id: 2, name: "Andijon", periodicPublications: "8 250,3", writtenLetters: "1 015,8", parcels: "8,4", moneyTransfers: "77,5", pensions: "2 632,0" },
  { id: 3, name: "Buxoro", periodicPublications: "5 865,7", writtenLetters: "1 163,1", parcels: "3,5", moneyTransfers: "38,5", pensions: "1 819,9" },
  { id: 4, name: "Jizzax", periodicPublications: "2 732,5", writtenLetters: "175,9", parcels: "0,9", moneyTransfers: "17,3", pensions: "570,2" },
  { id: 5, name: "Qashqadaryo", periodicPublications: "7 327,1", writtenLetters: "728,3", parcels: "2,4", moneyTransfers: "48,8", pensions: "1 553,6" },
  { id: 6, name: "Navoiy", periodicPublications: "3 162,8", writtenLetters: "636,4", parcels: "9,3", moneyTransfers: "67,7", pensions: "968,2" },
  { id: 7, name: "Namangan", periodicPublications: "7 471,3", writtenLetters: "782,2", parcels: "6,1", moneyTransfers: "45,9", pensions: "2 456,1" },
  { id: 8, name: "Samarqand", periodicPublications: "5 804,6", writtenLetters: "858,3", parcels: "4,8", moneyTransfers: "51,5", pensions: "3 044,7" },
  { id: 9, name: "Surxondaryo", periodicPublications: "3 383,5", writtenLetters: "870,2", parcels: "2,6", moneyTransfers: "44,7", pensions: "1 621,0" },
  { id: 10, name: "Sirdaryo", periodicPublications: "2 369,1", writtenLetters: "326,4", parcels: "2,1", moneyTransfers: "21,6", pensions: "482,1" },
  { id: 11, name: "Toshkent", periodicPublications: "8 078,5", writtenLetters: "603,3", parcels: "5,6", moneyTransfers: "83,3", pensions: "2 784,6" },
  { id: 12, name: "Farg'ona", periodicPublications: "11 894,3", writtenLetters: "1 543,3", parcels: "6,0", moneyTransfers: "78,3", pensions: "3 615,3" },
  { id: 13, name: "Xorazm", periodicPublications: "3 198,6", writtenLetters: "446,6", parcels: "2,1", moneyTransfers: "101,6", pensions: "1 620,9" },
  { id: 14, name: "Toshkent pochtamti", periodicPublications: "22 784,7", writtenLetters: "2 075,4", parcels: "15,0", moneyTransfers: "105,2", pensions: "2 899,3" },
  { id: 15, name: "Xalkaro pochtamt", periodicPublications: "", writtenLetters: "280,4", parcels: "8,5", moneyTransfers: "", pensions: "" },
  { id: 16, name: '"O\'zbekiston pochtasi" AJ', periodicPublications: "", writtenLetters: "", parcels: "", moneyTransfers: "", pensions: "" },
  { id: "", name: "Jami", periodicPublications: "98 750,0", writtenLetters: "12 305,2", parcels: "85,6", moneyTransfers: "875,3", pensions: "27 448,7" },
]

const postalServicesData = [
  { id: 1, name: "Qoraqalpog'iston", postalServices: "2 150,3", financialServices: "1 820,5", otherServices: "725,8", pensions: "1 380,8", total: "6 077,4" },
  { id: 2, name: "Andijon", postalServices: "3 520,8", financialServices: "2 980,2", otherServices: "1 185,5", pensions: "2 632,0", total: "10 318,5" },
  { id: 3, name: "Buxoro", postalServices: "2 505,7", financialServices: "2 125,3", otherServices: "845,2", pensions: "1 819,9", total: "7 296,1" },
  { id: 4, name: "Jizzax", postalServices: "1 165,8", financialServices: "990,5", otherServices: "393,7", pensions: "570,2", total: "3 120,2" },
  { id: 5, name: "Qashqadaryo", postalServices: "3 125,6", financialServices: "2 655,2", otherServices: "1 055,7", pensions: "1 553,6", total: "8 390,1" },
  { id: 6, name: "Navoiy", postalServices: "1 350,1", financialServices: "1 145,8", otherServices: "455,6", pensions: "968,2", total: "3 919,7" },
  { id: 7, name: "Namangan", postalServices: "3 190,3", financialServices: "2 707,5", otherServices: "1 076,8", pensions: "2 456,1", total: "9 430,7" },
  { id: 8, name: "Samarqand", postalServices: "2 477,6", financialServices: "2 102,0", otherServices: "836,1", pensions: "3 044,7", total: "8 460,4" },
  { id: 9, name: "Surxondaryo", postalServices: "1 445,4", financialServices: "1 226,2", otherServices: "487,6", pensions: "1 621,0", total: "4 780,2" },
  { id: 10, name: "Sirdaryo", postalServices: "1 011,3", financialServices: "858,2", otherServices: "341,3", pensions: "482,1", total: "2 692,9" },
  { id: 11, name: "Toshkent", postalServices: "3 450,5", financialServices: "2 928,0", otherServices: "1 164,5", pensions: "2 784,6", total: "10 327,6" },
  { id: 12, name: "Farg'ona", postalServices: "5 080,0", financialServices: "4 310,0", otherServices: "1 714,0", pensions: "3 615,3", total: "14 719,3" },
  { id: 13, name: "Xorazm", postalServices: "1 366,5", financialServices: "1 159,5", otherServices: "461,2", pensions: "1 620,9", total: "4 608,1" },
  { id: 14, name: "Toshkent pochtamti", postalServices: "9 730,5", financialServices: "8 255,0", otherServices: "3 283,5", pensions: "2 899,3", total: "24 168,3" },
  { id: 15, name: "Xalkaro pochtamt", postalServices: "4 550,1", financialServices: "3 860,5", otherServices: "1 535,5", pensions: "", total: "9 946,1" },
  { id: 16, name: '"O\'zbekiston pochtasi" AJ', postalServices: "", financialServices: "", otherServices: "", pensions: "", total: "" },
  { id: "", name: "Jami", postalServices: "45 620,5", financialServices: "38 750,2", otherServices: "15 325,8", pensions: "27 448,7", total: "127 145,2" },
]
</script>

<style scoped>
.tables-container {
  padding: 20px;
  max-width: 100%;
  overflow-x: auto;
  background-color: #f0f0f0;
}

.main-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000080;
  text-align: center;
}

.table-container {
  margin-bottom: 30px;
}

.table-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000080;
  text-align: center;
}

.postal-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  font-size: 14px;
}

.postal-table th,
.postal-table td {
  border: 1px solid #000080;
  padding: 8px;
  text-align: center;
  color: black;
}

.postal-table th {
  background-color: #000080;
  color: white;
  font-weight: bold;
}

.postal-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.postal-table tr:last-child {
  font-weight: bold;
}

.postal-table tr:nth-last-child(2) td {
  border-bottom: 2px solid #000080;
}

@media (max-width: 768px) {
  .tables-container {
    padding: 10px;
  }

  .main-title {
    font-size: 16px;
  }

  .table-title {
    font-size: 14px;
  }

  .postal-table th,
  .postal-table td {
    padding: 6px;
    font-size: 12px;
  }
}
</style>
