<template>
    <section class="setting__section pb-120">
        <div class="container__customizemain pt-100 pb-120 round16">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-12">
                        <div
                            class="overview__gitwrapper bgwhite round16 border p-3 d-flex flex-column align-items-center">
                            <!-- Buttons for filtering -->
                            <div class="flex-container mb-4">
                                <button class="burchak outline__btn" :class="{ 'active-btn': activeButton === 'all' }"
                                    @click="filterData('all')" style="font-size: 14px; padding: 8px 15px;">
                                    {{ $t('all') }}
                                </button>
                                <button class="burchak outline__btn"
                                    :class="{ 'active-btn': activeButton === 'one_step' }"
                                    @click="filterData('one_step')" style="font-size: 14px; padding: 8px 15px;">
                                    {{ $t('one_step') }}
                                </button>
                                <button class="burchak outline__btn" :class="{ 'active-btn': activeButton === 'ems' }"
                                    @click="filterData('ems')" style="font-size: 14px; padding: 8px 15px;">
                                    EMS
                                </button>


                                <!-- Search Form -->
                                <form @submit.prevent="searchData" class="d-flex align-items-center position-relative">
                                    <input v-model="searchQuery" type="text" placeholder="" class="faded-placeholder"
                                        style="padding: 3px 1px 12px; font-size: 14px; border: 1px solid var(--base); border-top-left-radius: 4px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 4px;"
                                        @input="updateSuggestions">
                                    <button type="submit" class="cmn--btni1 d-flex align-items-center"
                                        style="padding: 10px 15px; border-radius: 4px; font-size: 14px; border-top-left-radius: 0px; border-top-right-radius: 4px; border-bottom-right-radius: 4px; border-bottom-left-radius: 0px;">
                                        <span><i class="bi bi-search fz-12" style="font-size: 12px;"></i></span>
                                        <span style="font-size: 14px;">{{ $t('search') }}</span>
                                    </button>
                                    <ul v-if="suggestions.length > 0"
                                        class="suggestions-list position-absolute bg-white shadow p-2">
                                        <li v-for="(suggestion, index) in suggestions" :key="index"
                                            class="suggestion-item p-1 cursor-pointer"
                                            @click="selectSuggestion(suggestion)">
                                            {{ suggestion }}
                                        </li>

                                    </ul>

                                </form>


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
import { defineComponent } from "vue";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";

export default defineComponent({
    name: "App",
    data() {
        return {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 6,
            center: [41.2995, 65.2401],
            warehouses: [],
            markers: null,
            searchQuery: "",
            suggestions: [],
            map: null,
            activeButton: "all", // Default active button
            drawnPolygon: null // **HUDUD CHEGARASI UCHUN SAQLANADIGAN OBYEKTI**
        };
    },
    mounted() {
        this.fetchWarehouses();
        this.initializeMap();
    },
    methods: {
        async fetchWarehouses() {
            try {
                const response = await fetch("https://new.pochta.uz/api/v1/maps/post/offices/");
                const data = await response.json();
                this.warehouses = data.result;
                this.addMarkersToCluster();
            } catch (error) {
                console.error("Error fetching warehouse data:", error);
            }
        },
        initializeMap() {
            this.map = L.map("map", {
                center: this.center,
                zoom: this.zoom,
                maxBounds: L.latLngBounds([[-90, -180], [90, 180]]),
                maxBoundsViscosity: 1.0,
                zoomAnimation: false
            });
            L.tileLayer(this.url, {
                attribution: this.attribution,
            }).addTo(this.map);
            this.markers = L.markerClusterGroup();
            this.map.addLayer(this.markers);
        },
        addMarkersToCluster(filter = "all") {
    this.markers.clearLayers();

    // Joriy tilni aniqlash
    const currentLang = this.$i18n.locale;

    // Ikonkalar uchun mos URL ni tanlash
    const customIcon = L.icon({
        iconUrl: filter === "ems"
            ? "data:image/svg+xml;base64,PD9"
            : filter === "one_step"
                ? "data:image/svg+xml;base64,Pk"
                : "data:image/svg+xml;base64,PD", // Default icon
        iconSize: [50, 50],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
    });

    this.warehouses.forEach((warehouse) => {
        const { lat, lng, name_uz, name_ru, region, district, index, street, geolocation, EMS, one_step, working_hours } = warehouse.postal_office;
        const polygonCoordinates = warehouse.locations?.locations || [];

        // Tanlangan tilga qarab nomni olish
        const name = currentLang === "ru" ? name_ru || name_uz : name_uz || name_ru;

        // Latitude va Longitude mavjudligini tekshirish
        if (!lat || !lng) {
            console.warn(`Ma'lumot yetishmaydi: ${name || "Noma'lum"} (Lat: ${lat}, Lng: ${lng})`);
            return; // Lat yoki Lng bo'lmasa, bu markerni o'tkazib yuboramiz
        }

        if (
            (filter === "all") ||
            (filter === "ems" && EMS === "Bor") ||
            (filter === "one_step" && one_step === "Bor")
        ) {
            let markerLat = parseFloat(lat);
            let markerLng = parseFloat(lng);

            // Popup ma'lumotlari
            let popupContent = `
                <h3>${name}</h3>
                <p>${this.$t('region')}: ${region}</p>
                <p>${this.$t('district')}: ${district}</p>
            `;

            if (street) {
                popupContent += `<p>${this.$t('street')}: ${street}</p>`;
            }
            if (index) {
                popupContent += `<p>${this.$t('index')}: ${index}</p>`;
            }
            if (working_hours) {
                popupContent += `<p>${this.$t('working_hours')}: ${working_hours}</p>`;
            }

            popupContent += `<a href="${geolocation || "#"}" target="_blank">${this.$t('location')}</a>`;

            const marker = L.marker([markerLat, markerLng], { icon: customIcon })
                .bindPopup(popupContent)
                .on("click", () => {
                    this.drawArea(polygonCoordinates);
                });

            this.markers.addLayer(marker);
        }
    });
},
        drawArea(polygonCoordinates) {
            if (!polygonCoordinates || !polygonCoordinates.length) return;

            // Agar avvalgi hudud bor bo'lsa, uni o'chiramiz
            if (this.drawnPolygon) {
                this.map.removeLayer(this.drawnPolygon);
            }

            // Yangi hududni chizish
            this.drawnPolygon = L.polygon(polygonCoordinates, {
                color: '#595959',
                weight: 2,
                fillColor: '#97a100',
                fillOpacity: 0.3,
            }).addTo(this.map);

            // Xaritaning ko'rinishini chizilgan hududga moslashtirish
            this.map.fitBounds(this.drawnPolygon.getBounds());
        },
        updateSuggestions() {
            const searchQueryLower = this.searchQuery.toLowerCase();

            this.suggestions = this.warehouses
                .filter((warehouse) => {
                    const { postal_office } = warehouse;
                    return (
                        (postal_office.index || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.name_uz || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.name_eng || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.name_ru || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.region || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.street || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.district || "").toLowerCase().includes(searchQueryLower)
                    );
                })
                .map(warehouse => {
                    const { index, name_uz, name_ru, region, district, street } = warehouse.postal_office || {};

                    // Qidiruvga mos kelgan maydonni aniqlash
                    if ((index || "").toLowerCase().includes(this.searchQuery.toLowerCase())) {
                        return `Indeks: ${index}`;
                    } else if ((name_uz || "").toLowerCase().includes(this.searchQuery.toLowerCase())) {
                        return `${index}: ${name_uz}`;
                    } else if ((name_ru || "").toLowerCase().includes(this.searchQuery.toLowerCase())) {
                        return `${index}: ${name_ru}`;
                    } else if ((region || "").toLowerCase().includes(this.searchQuery.toLowerCase())) {
                        return `${index}: ${region}`;
                    } else if ((district || "").toLowerCase().includes(this.searchQuery.toLowerCase())) {
                        return `${index}: ${district}`;
                    } else if ((street || "").toLowerCase().includes(this.searchQuery.toLowerCase())) {
                        return `${index}: ${street}`;
                    } else {
                        return "Ma'lumot topilmadi";
                    }
                })
                .slice(0, 3); // Faqat 3 ta natija
        }
        ,

        selectSuggestion(suggestion) {
            this.searchQuery = suggestion; // Qidiruv qatoriga tanlangan taklifni o'rnating
            const selectedWarehouse = this.warehouses.find((warehouse) => {
                const { postal_office } = warehouse;
                const { index, name_uz, region, district, street } = postal_office || {};
                return (
                    suggestion.includes(index) ||
                    suggestion.includes(name_uz) ||
                    suggestion.includes(region) ||
                    suggestion.includes(street) ||
                    suggestion.includes(district)
                );
            });

            if (selectedWarehouse) {
                this.focusMarker(selectedWarehouse.postal_office); // Xaritada markerga o'ting
            }
        },
        focusMarker(postalOffice) {
    const { lat, lng, name_uz, name_ru, region, district, street, index, geolocation, working_hours } = postalOffice;

    // Joriy tilni aniqlash
    const currentLang = this.$i18n.locale;

    // Tanlangan tilga qarab nomni olish
    const name = currentLang === "ru" ? name_ru || name_uz : name_uz || name_ru;

    if (lat && lng) {
        const markerLat = parseFloat(lat);
        const markerLng = parseFloat(lng);

        this.map.setView([markerLat, markerLng], 14); // Xaritada kerakli joyni ko'rsatish

        // Popup ma'lumotlarini yaratish
        let popupContent = `
            <h3>${name}</h3>
            <p>${this.$t('region')}: ${region}</p>
            <p>${this.$t('district')}: ${district}</p>
        `;

        if (street) {
            popupContent += `<p>${this.$t('street')}: ${street}</p>`;
        }
        if (index) {
            popupContent += `<p>${this.$t('index')}: ${index}</p>`;
        }
        if (working_hours) {
            popupContent += `<p>${this.$t('working_hours')}: ${working_hours}</p>`;
        }

        popupContent += `<a href="${geolocation || "#"}" target="_blank">${this.$t('location')}</a>`;

        // Aloqa bo‘limining popup'ini ochish
        const popup = L.popup()
            .setLatLng([markerLat, markerLng])
            .setContent(popupContent);

        popup.openOn(this.map);
    }
}

        ,
        async searchData() {
            try {
                const response = await fetch(`https://new.pochta.uz/api/v1/maps/post/offices/`);
                const data = await response.json();

                const searchQueryLower = this.searchQuery.toLowerCase();
                this.warehouses = data.result.filter((warehouse) => {
                    const { postal_office } = warehouse;
                    return (
                        (postal_office.index || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.name_uz || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.name_eng || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.name_ru || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.region || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.district || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.mfy || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.street || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.village || "").toLowerCase().includes(searchQueryLower) ||
                        (postal_office.house || "").toLowerCase().includes(searchQueryLower)
                    );
                });

                this.updateSuggestions(); // Takliflarni yangilash
                this.addMarkersToCluster(); // Markerlarni xaritada yangilash
            } catch (error) {
                console.error("Error searching data:", error);
            }
        },
        filterData(filter) {
            this.activeButton = filter; // Faol tugmani o'rnatish
            this.addMarkersToCluster(filter);
            this.searchQuery = ""; // Qidirish maydonini tozalash
            this.suggestions = []; // Takliflarni tozalash

            this.fetchWarehouses(); // API dan barcha ma'lumotlarni qayta olish

            setTimeout(() => {
                if (filter === "one_step") {
                    this.warehouses = this.warehouses.filter(warehouse => warehouse.postal_office.one_step === "Bor");
                } else if (filter === "ems") {
                    this.warehouses = this.warehouses.filter(warehouse => warehouse.postal_office.EMS === "Bor");
                }

                this.addMarkersToCluster(filter); // So'ralgan filtr bo'yicha markerlarni yangilash
            }, 500); // Ma'lumotni olish va qayta ishlash uchun qisqa kutish
        },
    },
});
</script>

<style scoped>
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
    max-height: 150px;
    overflow-y: auto;
    border: 1px solid #183e98;
    border-radius: 4px;
    z-index: 1000;

    background-color: #183e98 !important;
    position: absolute;
    top: 100%;
    /* Formaning pastiga yopishadi */
    left: 0;
}

.suggestion-item {
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.suggestion-item:hover {
    background-color: #f07824;
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
