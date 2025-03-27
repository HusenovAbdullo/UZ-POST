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
           xhr.open('GET', `https://new.pochta.uz/api/v1/public/new/${this.trackingNumber}/`, true);
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
               date1: new Date(event.GmtDateTime),
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

           // Shipox ma'lumotlarini birinchi o'rinda, Gdeposilka ma'lumotlarini esa undan keyin qo'shib, vaqt bo'yicha saralash
           // Shipox va Gdeposilka ro'yxatlarini alohida-alohida vaqt bo'yicha saralash
           const sortedShipoxList = shipoxList.sort((a, b) => new Date(b.date) - new Date(a.date));
           const sortedGdeposilkaList = gdeposilkaList.sort((a, b) => new Date(b.date) - new Date(a.date));

           // Shipox va Gdeposilka ro'yxatlarining birinchi elementlari asosida umumiy ro'yxatni tartibga solish
           this.combinedTracking =
               new Date(sortedShipoxList[0]?.date) > new Date(sortedGdeposilkaList[0]?.date)
                   ? [...sortedShipoxList, ...sortedGdeposilkaList]
                   : [...sortedGdeposilkaList, ...sortedShipoxList];

       },
       getStatusText(statusDesc) {
           return statusDesc || 'Status noaniq';
       }
   }
};