<template>
   <section class="setting__section pb-120">
      <div class="container__customizemain pt-100 pb-120 round16">
         <div class="container">
            <div class="row g-4">
               <div class="col-lg-12">
                  <div class="overview__gitwrapper bgwhite round16 border p-3 d-flex flex-column align-items-center">
                     <!-- Buttons for filtering -->
                     <div class="flex-container mb-4">


                        <!-- New Street/Mahalla Search Form -->
                        <form @submit.prevent="fetchStreetOffice"
                           class="d-flex align-items-center position-relative mt-4">
                           <input v-model="streetQuery" type="text" placeholder="Ko'cha yoki mahalla nomini kiriting"
                              class="faded-placeholder"
                              style="padding: 3px 30px 12px; font-size: 14px; border: 1px solid var(--base); border-radius: 4px;"
                              @input="updateStreetSuggestions" />
                           <button type="submit" class="cmn--btni1 d-flex align-items-center"
                              style="padding: 10px 15px; border-radius: 4px; font-size: 14px;">
                              <span><i class="bi bi-search fz-12" style="font-size: 12px;"></i></span>
                              <span style="font-size: 14px;">Izlash</span>
                           </button>
                           <!-- Takliflar ro‘yxati -->
                           <ul v-if="streetSuggestions.length > 0"
                              class="suggestions-list position-absolute bg-white shadow p-2">
                              <li v-for="(street, index) in streetSuggestions" :key="index"
                                 class="suggestion-item p-1 cursor-pointer" @click="selectStreet(street)">
                                 {{ street.display_name }}
                              </li>
                           </ul>
                        </form>


                        <!-- Popup for selected street -->
                        <div v-if="selectedOffice" class="popup" style="width: 50%;
    height: 10%;">
                           <p>{{ selectedOffice }} indeksiga tegishli.</p>
                           <button @click="focusOnOfficeArea">Hududni ko'rish</button>
                           <button @click="closePopup">Yopish</button>
                        </div>
                     </div>

                     <!-- Map Container -->
                     <div class="map-container">
                        <div id="map" class="leaflet-map-container"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
   data() {
      return {
         url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
         attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
         zoom: 6,
         center: [41.2995, 65.2401],
         warehouses: [],
         markers: null,
         searchQuery: "",
         suggestions: [],
         streetQuery: "",
         streetSuggestions: [],
         map: null,
         activeButton: "all",
         selectedOffice: null,
         selectedPolygon: null,
         selectedOfficeData: null, // Aloqa bo'limi ma'lumotlarini saqlash
         officeMarker: null, // Marker obyekti
      };
   },
   mounted() {
      this.initializeMap();
   },
   methods: {
      initializeMap() {
         this.map = L.map("map", {
            center: this.center,
            zoom: this.zoom,
         });
         L.tileLayer(this.url, {
            attribution: this.attribution,
         }).addTo(this.map);
         this.markers = L.layerGroup().addTo(this.map);
      },

      async updateStreetSuggestions() {
         if (!this.streetQuery.trim()) {
            this.streetSuggestions = []; // Agar bo'sh bo'lsa, takliflar ro‘yxatini tozalash
            return;
         }

         try {
            // Nominatim API orqali so'rov
            const url = `https://nominatim.openstreetmap.org/search?format=json&q=${this.streetQuery}`;
            const response = await fetch(url);
            const streets = await response.json();

            // Natijalarni faqat 5 taga qisqartirish
            this.streetSuggestions = streets.slice(0, 5).map((street) => ({
               display_name: street.display_name,
               lat: street.lat,
               lon: street.lon,
            }));
         } catch (error) {
            console.error("Error fetching street suggestions:", error);
            this.streetSuggestions = [];
         }
      },



      async fetchStreetOffice() {
         if (!this.streetQuery.trim()) return;

         try {
            const url = `https://nominatim.openstreetmap.org/search?format=json&q=${this.streetQuery}`;
            const response = await fetch(url);
            const streets = await response.json();
            this.streetSuggestions = streets.slice(0, 5);
         } catch (error) {
            console.error("Error fetching street data:", error);
         }
      },
      async selectStreet(street) {
         const lat = parseFloat(street.lat);
         const lon = parseFloat(street.lon);

         try {
            const response = await fetch("https://new.pochta.uz/api/v1/maps/post/offices/");
            const data = await response.json();

            let nearestOffice = null;
            let minDistance = Infinity;

            data.result.forEach((item) => {
               if (!item.locations || !item.locations.locations) return;

               item.locations.locations.forEach(([locLat, locLon]) => {
                  const distance = Math.sqrt(
                     Math.pow(lat - locLat, 2) + Math.pow(lon - locLon, 2)
                  );

                  if (distance < minDistance) {
                     minDistance = distance;
                     nearestOffice = item;
                  }
               });
            });

            if (nearestOffice) {
               this.selectedOffice = nearestOffice.postal_office.index;
               this.selectedOfficeData = nearestOffice.postal_office; // Aloqa bo'limi ma'lumotlarini saqlash
               if (nearestOffice.locations.locations) {
                  this.selectedPolygon = nearestOffice.locations.locations;
               }
            } else {
               this.selectedOffice = "Mos aloqa bo'limi topilmadi";
            }
         } catch (error) {
            console.error("Error fetching office data:", error);
            this.selectedOffice = "Xato yuz berdi";
         }

         this.streetSuggestions = [];
      }

      ,
      isWithinBounds(lat1, lon1, lat2, lon2, radius = 0.01) {
         const distance = Math.sqrt(
            Math.pow(lat1 - lat2, 2) + Math.pow(lon1 - lon2, 2)
         );
         return distance <= radius;
      },
      focusOnOfficeArea() {
         // Hudud mavjudligini tekshirish
         if (!this.selectedPolygon || this.selectedPolygon.length === 0) {
            console.error("Hudud koordinatalari mavjud emas.");
            return;
         }

         // Xaritada eski polygonlarni olib tashlash
         if (this.currentPolygon) {
            this.map.removeLayer(this.currentPolygon);
         }

         // Yangi polygonni chizish
         this.currentPolygon = L.polygon(this.selectedPolygon, {
            color: '#ff7800',
            weight: 3,
            opacity: 0.8,
            fillColor: '#fffc00',
            fillOpacity: 0.4,
         }).addTo(this.map);

         // Aloqa bo'limi nuqtasini ko'rsatish
         const lat = parseFloat(this.selectedOfficeData.lat);
         const lon = parseFloat(this.selectedOfficeData.lng);

         if (this.officeMarker) {
            this.map.removeLayer(this.officeMarker);
         }

         this.officeMarker = L.marker([lat, lon]).addTo(this.map)
            .bindPopup(`<b>${this.selectedOfficeData.name_uz}</b><br>Indeks: ${this.selectedOfficeData.index}`)
            .openPopup();

         // Xarita chegaralarini hududga moslashtirish
         this.map.fitBounds(this.currentPolygon.getBounds());

         // Popupni yopish
         this.closePopup();
      }

      ,
      closePopup() {
         this.selectedOffice = null;
         this.selectedPolygon = null;
      },
   },
};
</script>

<style scoped>
.suggestions-list {
   list-style: none;
   margin: 0;
   padding: 0;
   background: white;
   border: 1px solid #ccc;
   max-height: 150px;
   overflow-y: auto;

   list-style: none;
   margin: 0;
   padding: 0;
   width: 100%;
   max-height: 213px;
   overflow-y: auto;
   border: 1px solid #183e98;
   border-radius: 4px;
   background-color: #183e98 !important;
   position: absolute; /* Natija oynasini izlash maydoniga yopishtirish */
   top: calc(100% + 5px); /* Maydonning pastki qismidan 5px masofada joylashtirish */
   left: 0;
   z-index: 1000;
}

.suggestions-list li {
   padding: 8px;
   cursor: pointer;
}

.suggestions-list li:hover {
   background: #f0f0f0;
}

.popup {
   position: absolute;
   top: 20%;
   left: 50%;
   transform: translate(-50%, -20%);
   background: white;
   padding: 10px;
   border: 1px solid #ccc;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   z-index: 1000;
}

.filter-buttons-wrapper {
   display: flex;
   gap: 10px;
   /* Tugmalar orasidagi masofa */
   justify-content: center;
}


/* Responsive Styling */
@media (max-width: 780px) {
   .flex-container {
      display: flex;
      flex-direction: column;
      align-items: stretch;
   }

   .filter-buttons-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-bottom: 10px;
   }


   .search-wrapper {
      flex-direction: row;
      align-items: center;
      /* gap: 5px; */
   }

   .search-form input {
      border-radius: 4px;
      /* margin-bottom: 10px; */
   }

   .search-form button {
      border-radius: 4px;
   }
}

body {
   margin: 0;
   font-family: Arial, sans-serif;
}

#map {
   display: flex;
   flex-direction: column;
}

.map-container {
   width: 100%;
   max-width: 1200px;
   height: 650px;
   margin: 0 auto;
   border: 1px solid #ccc;
   border-radius: 8px;
   overflow: hidden;
}

#map.leaflet-map-container {
   width: 100%;
   height: 100%;
}

.container__customizemain {
   max-width: 1600px;
   background: #F8F9FC;
   position: relative;
   margin: 0 auto;
   margin-top: 120px;
}

.flex-container {
   display: flex;
   align-items: center;
   gap: 10px;
}

.suggestions-list {
   list-style: none;
   margin: 0;
   padding: 0;
   width: 100%;
   max-height: 213px;
   overflow-y: auto;
   border: 1px solid #183e98;
   border-radius: 4px;
   z-index: 1000;
   background-color: #183e98 !important;
}

.suggestion-item {
   padding: 8px;
   cursor: pointer;
   transition: background-color 0.2s;
   color: white; /* Matn rangini o'zgartirish */
}

.suggestion-item:hover {
   background-color: #f07824; /* Tugmani faol holatdagi rangi */
   color: #183e98; /* Matn rangi */
}

.burchak:hover {
   background-color: #f07824;
   /* Button background turns yellow on hover */
   color: #ffffff;
   /* Text color turns white */
}

.burchak {
   border-radius: 4px;
   border-top-left-radius: 4px;
   border-top-right-radius: 4px;
   border-bottom-right-radius: 4px;
   border-bottom-left-radius: 4px;
}

.active-btn {
   background-color: #f07824;
   /* Tugmaning faol holatdagi rangi */
   color: white;
   /* Matn rangi */
   border: 1px solid #f07824;
   /* Ramka rangi */
}
</style>