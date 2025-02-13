/* global ym */

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

// **Yandex Metrika informer qo‘shish**
const informerHtml = `
  
`;
document.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div');
  div.innerHTML = informerHtml;
  document.body.appendChild(div);
});

// **Yandex Metrika skriptini qo‘shish**
const script = document.createElement('script');
script.type = 'text/javascript';
script.async = true;
script.innerHTML = `
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {
    if (document.scripts[j].src === r) { return; }
  }
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
  })(window, document, "script", "https://mc.webvisor.org/metrika/tag_ww.js", "ym");

  ym(99904912, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true,
    trackHash:true,
    ecommerce:"dataLayer"
  });
`;
document.head.appendChild(script);

// **Router sahifa almashganda kuzatish**
router.afterEach((to) => {
  ym(99904912, 'hit', to.fullPath);
});

app.mount('#app');
