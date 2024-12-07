import axios from 'axios';

export default {
    data() {
        return {
            userName: 'Mehmon', // Default qiymat "Mehmon"
        };
    },
    async created() {
        // Tokenni localStorage'dan olish
        const token = localStorage.getItem('id_token');

        // Agar token mavjud bo'lsa, profil ma'lumotlarini olish
        if (token) {
            try {
                const response = await axios.get('https://new.pochta.uz/api/v1/public/profile/', {
                    headers: {
                        Authorization: `Bearer ${token}` // Tokenni so'rovga qo'shish
                    }
                });

                // Profil ma'lumotlari muvaffaqiyatli olinsa, foydalanuvchi ismini yangilash
                if (response.data) {
                    const { first_name, last_name } = response.data;
                    this.userName = `${first_name} ${last_name}`;
                }
            } catch (error) {
                console.error('Profil ma\'lumotlarini olishda xatolik:', error);
            }
        }
    }
};