/* global ym */

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import uz from '../public/assets/js/locales/uz';
import ru from '../public/assets/js/locales/ru';

const messages = {
  uz,
  ru
};

const savedLocale = localStorage.getItem('language') || 'uz';

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'ru',
  messages,
});

const app = createApp(App);

app.use(router);
app.use(i18n);

window.$i18n = i18n.global;

// Brauzerda "back" tugmachasi bosilganda sahifani yangilash
window.addEventListener('popstate', () => {
  window.location.reload();
});

// **Yandex Metrika qo‘shish**
const addYandexMetrika = () => {
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
};

// **Google Analytics (gtag.js) qo‘shish**
const addGoogleAnalytics = () => {
  const googleScript = document.createElement('script');
  googleScript.src = "https://www.googletagmanager.com/gtag/js?id=G-JYJ4QBEP17";
  googleScript.async = true;
  googleScript.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); } // dataLayer to'g'ri chaqirilishi uchun window.dataLayer ishlatildi.
    window.gtag = gtag; // Global funksiya yaratish

    gtag('js', new Date());
    gtag('config', 'G-JYJ4QBEP17');
  };
  document.head.appendChild(googleScript);
};

// **Sahifa yuklanganda skriptlarni ishga tushirish**
document.addEventListener('DOMContentLoaded', () => {
  addYandexMetrika();
  addGoogleAnalytics();
});

// **Router sahifa almashganda kuzatish**
router.afterEach((to) => {
  if (typeof ym === "function") {
    ym(99904912, 'hit', to.fullPath);
  }
  
  if (window.gtag) {
    window.gtag('config', 'G-JYJ4QBEP17', { 'page_path': to.fullPath });
  } else {
    console.warn("Google Analytics (gtag) hali yuklanmagan.");
  }
});

app.mount('#app');
