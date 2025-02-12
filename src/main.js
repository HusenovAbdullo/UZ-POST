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

const savedLocale = localStorage.getItem('language') || 'uz';

const i18n = createI18n({
  legacy: false, // Vue 3 uchun legacy: false bo'lishi shart!
  locale: savedLocale, // Saqlangan til yoki standart til
  fallbackLocale: 'ru',
  messages,
});

const app = createApp(App);

app.use(router);
app.use(i18n);

// **Vue I18n ni global qilish**
window.$i18n = i18n.global; 

// Brauzerda "back" tugmachasi bosilganda sahifani yangilash
window.addEventListener('popstate', () => {
  window.location.reload();
});

app.mount('#app');
