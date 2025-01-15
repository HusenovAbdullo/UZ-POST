<template>
   <div>
      <input v-model="streetQuery" @input="fetchStreets" placeholder="Ko'cha nomini yozing" />
      <ul v-if="suggestedStreets.length > 0">
         <li v-for="(street, index) in suggestedStreets" :key="index" @click="selectStreet(street)">
            {{ street.display_name }}
         </li>
      </ul>
      <div v-if="selectedOffice" class="popup">
         <p>{{ selectedOffice }} indexiga tegishli.</p>
         <button @click="closePopup">Yopish</button>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         streetQuery: "",
         suggestedStreets: [],
         selectedOffice: null,
      };
   },
   methods: {
      async fetchStreets() {
         if (this.streetQuery.length < 3) return;

         const url = `https://nominatim.openstreetmap.org/search?format=json&q=${this.streetQuery}`;
         try {
            const response = await fetch(url);
            const data = await response.json();
            this.suggestedStreets = data.slice(0, 4); // Faqat 4 ta natija
         } catch (error) {
            console.error("Xato:", error);
            this.suggestedStreets = [];
         }
      },
      async selectStreet(street) {
  const lat = parseFloat(street.lat);
  const lon = parseFloat(street.lon);

  try {
    const response = await fetch("https://new.pochta.uz/api/v1/maps/post/offices/");
    const data = await response.json();

    const office = data.result.find((item) => {
      // `locations` va `locations.locations` mavjudligini tekshirish
      if (!item.locations || !item.locations.locations) {
        return false;
      }

      // Har bir koordinatani tekshirish
      return item.locations.locations.some(([locLat, locLon]) => {
        return this.isWithinBounds(lat, lon, locLat, locLon);
      });
    });

    this.selectedOffice = office
      ? office.postal_office.index
      : "Mos pochta bo'limi topilmadi";
  } catch (error) {
    console.error("API xatosi:", error);
    this.selectedOffice = "Xato yuz berdi";
  }

  this.suggestedStreets = [];
},
      isWithinBounds(lat1, lon1, lat2, lon2, radius = 0.01) {
         const distance = Math.sqrt(
            Math.pow(lat1 - lat2, 2) + Math.pow(lon1 - lon2, 2)
         );
         return distance <= radius;
      },
      closePopup() {
         this.selectedOffice = null;
      },
   },
};
</script>

<style>
.popup {
   position: absolute;
   top: 10%;
   left: 50%;
   transform: translate(-50%, -10%);
   background: white;
   padding: 10px;
   border: 1px solid #ccc;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>