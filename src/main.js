import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Routerni import qilamiz
import { createI18n } from 'vue-i18n';
import uz from '../public/assets/js/locales/uz';
import ru from '../public/assets/js/locales/ru';

const messages = {
  uz,
  ru
};



// Brauzerda saqlangan tilni yuklaymiz, aks holda 'uz' ni tanlaymiz
const savedLocale = localStorage.getItem('locale') || 'uz';

const i18n = createI18n({
  locale: savedLocale, // Saqlangan til yoki standart til
  fallbackLocale: 'ru',
  messages,
});

// createApp ni app o'zgaruvchisiga saqlaymiz
const app = createApp(App);

app.use(router); // Routerni qo'shamiz
app.use(i18n);   // i18n ni qo'shamiz

window.addEventListener('popstate', () => {
  window.location.reload(); // Orqaga qaytishda sahifani yangilaydi
});

// oxirida app'ni mount qilamiz
app.mount('#app');
