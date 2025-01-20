import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
// const HomeView = () => import('@/views/HomeView.vue');

import ProfilView from '@/views/ProfilView.vue';
import XizmatlarView from '@/views/XizmatlarView.vue';
import XizmatView from '@/views/XizmatView.vue';
import TariflarView from '@/views/TariflarView.vue';
import TarifView from '@/views/TarifView.vue';
import TahrirlashView from '@/views/TahrirlashView.vue';
import YangiliklarView from '@/views/YangiliklarView.vue';
import KalkulyatorView from '@/views/KalkulyatorView.vue';
import TrackingView from '@/views/TrackingView.vue';
import Tracking1View from '@/views/Tracking1View.vue';
import MarkalarView from '@/views/MarkalarView.vue';
import MarkaView from '@/views/MarkaView.vue';
import AloqaView from '@/views/AloqaView.vue';
import ChatView from '@/views/ChatView.vue';
import VakansiyalarView from '@/views/VakansiyalarView.vue';
import Vakansiyalar1View from '@/views/Vakansiyalar1View.vue';
import Vakansiyalar2View from '@/views/Vakansiyalar2View.vue';
import Vakansiyalar3View from '@/views/Vakansiyalar3View.vue';
import FiliallarView from '@/views/FiliallarView.vue';
import YuridikView from '@/views/YuridikView.vue';
import RivojlantirishView from '@/views/RivojlantirishView.vue';
import XatView from '@/views/XatView.vue';
import Xat1View from '@/views/Xat1View.vue';
import Yangilik2View from '@/views/Yangilik2View.vue';
import Yangilik3View from '@/views/Yangilik3View.vue';
import Yangilik4View from '@/views/Yangilik4View.vue';
import Yangilik5View from '@/views/Yangilik5View.vue';
import Yangilik6View from '@/views/Yangilik6View.vue';
import Markalar2View from '@/views/Markalar2View.vue';
import Marka2View from '@/views/Marka2View.vue';
import KuryerlikXizmatiView from '@/views/KuryerlikXizmatiView.vue';
import XalqaroPochtaView from '@/views/XalqaroPochtaView.vue';
import PochtaBolimiView from '@/views/PochtaBolimiView.vue';
import SinginView from '@/views/SinginView.vue';
import SingupView from '@/views/SingupView.vue';
import MapView from '@/views/MapView.vue';
import BoshqaruvOrganlariView from "@/views/BoshqaruvOrganlariView.vue";
import IjroiyaApparatiView from "@/views/IjroiyaApparatiView.vue";
import NormativBazaView from "@/views/NormativBazaView.vue";
import KorrupsiyaView from "@/views/KorrupsiyaView.vue";
import XalqaroHamkorlarView from "@/views/XalqaroHamkorlarView.vue";
import SavollarView from '@/views/SavollarView.vue';
import AksiyadorlarBurchagiView from "@/views/AksiyadorlarBurchagiView.vue";
import JamiyatNizomiView from "@/views/JamiyatNizomiView.vue";
import ChoraklikHisobotlarView from "@/views/ChoraklikHisobotlarView.vue";
import YillikHisobotlarView from "@/views/YillikHisobotlarView.vue";
import  Filiallar2View from "@/views/Filiallar2View.vue"
import FilialView from '@/views/FilialView.vue';
import ErrorView from '@/views/ErrorView.vue';
import MuhimFaktlarView from "@/views/MuhimFaktlarView.vue";
import ElonlarView from "@/views/ElonlarView.vue";
import DividendlarView from "@/views/DividendlarView.vue";
import PulAyirboshlashView from "@/views/PulAyirboshlashView.vue";
import IchkiHujjatlarView from "@/views/IchkiHujjatlarView.vue";
import QimmatliQogozlarView from "@/views/QimmatliQogozlarView.vue";
import BiznesRejalarView from "@/views/BiznesRejalarView.vue";
import Test5View from '@/views/Test5View.vue';
import BuyurtmaYaratishView from '@/views/BuyurtmaYaratishView.vue';
import Tariflar1View from '@/views/Tariflar1View.vue';
import JonatmaturlariView from '@/views/JonatmaturlariView.vue';
import TaqiqlanganjoylanmalarView from '@/views/TaqiqlanganjoylanmalarView.vue';
import Tariflar2View from '@/views/Tariflar2View.vue';
import YangilikView from '@/views/YangilikView.vue';
import SahifalarView from '@/views/SahifalarView.vue';
import HeaderItemView from '@/views/HeaderItemView.vue';
import TiklashView from '@/views/TiklashView.vue';
import SahifaView from '@/views/SahifaView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ordering',
    name: 'ordering',
    component: BuyurtmaYaratishView,
    meta: { requiresAuth: true } // Tahrirlash sahifasi faqat autentifikatsiyadan o'tgan foydalanuvchilar uchun mavjud
  },
  {
    path: '/test5',
    name: 'test5',
    component: Test5View,
    meta: { requiresReload: true }
  },
  {
    path: '/taqiqlanganjoylanmalar',
    name: 'taqiqlanganjoylanmalar',
    component: TaqiqlanganjoylanmalarView,
    meta: { requiresReload: true }
  },
  {
    path: '/tariflar1',
    name: 'tariflar1',
    component: Tariflar1View,
    meta: { requiresReload: true }
  },
  {
    path: '/tariflar2',
    name: 'tariflar2',
    component: Tariflar2View,
    meta: { requiresReload: true }
  },
  {
    path: '/turlari',
    name: 'turlari',
    component: JonatmaturlariView,
    meta: { requiresReload: true }
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfilView,
    meta: { requiresAuth: true } // Tahrirlash sahifasi faqat autentifikatsiyadan o'tgan foydalanuvchilar uchun mavjud
  },
  {
    path: '/xizmatlar',
    name: 'xizmatlar',
    component: XizmatlarView,
    meta: { requiresReload: true }
  },
  {
    path: '/savollar',
    name: 'savollar',
    component: SavollarView,
    meta: { requiresReload: true }
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView,
    meta: { requiresReload: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SingupView,
    meta: { requiresReload: true }
  },
  {
    path: '/xizmat/:id',
    name: 'xizmat',
    component: XizmatView,
    meta: { requiresReload: true }
  },
  {
    path: '/sahifa/:id',
    name: 'sahifa',
    component: SahifaView,
    meta: { requiresReload: true }
  },
  {
    path: '/sahifalar/:name',
    name: 'sahifalar',
    component: SahifalarView,
    meta: { requiresReload: true }
  },
  {
    path: '/tariflar',
    name: 'tariflar',
    component: TariflarView,
    meta: { requiresReload: true }
  },
  {
    path: '/kuryerlikXizmati',
    name: 'kuryerlikXizmati',
    component: KuryerlikXizmatiView,
    meta: { requiresReload: true }
  },
  {
    path: '/xalqaroPochta',
    name: 'xalqaroPochta',
    component: XalqaroPochtaView,
    meta: { requiresReload: true }
  }, 
  {
    path: '/pochtaBolimi',
    name: 'pochtaBolimi',
    component: PochtaBolimiView,
    meta: { requiresReload: true }
  }, 
  {
    path: '/tarif',
    name: 'tarif',
    component: TarifView,
    meta: { requiresReload: true }
  },
  {
    path: '/tahrirlash',
    name: 'tahrirlash',
    component: TahrirlashView,
    meta: { requiresAuth: true } // Tahrirlash sahifasi faqat autentifikatsiyadan o'tgan foydalanuvchilar uchun mavjud
  },
  {
    path: '/tracking',
    name: 'tracking',
    component: TrackingView,
    meta: { requiresReload: true }
  },
  {
    path: '/tracking/:trackingNumber?',
    name: 'tracking1',
    component: Tracking1View,
    meta: { requiresReload: true }
  },
  {
    path: '/:trackingNumber?',
    name: 'error',
    component: ErrorView,
    meta: { requiresReload: true }
  },
  {
    path: '/kalkulyator',
    name: 'kalkulyator',
    component: KalkulyatorView,
    meta: { requiresReload: true }
  },
  {
    path: '/yangiliklar',
    name: 'yangiliklar',
    component: YangiliklarView,
    meta: { requiresReload: true }
  },
  {
    path: '/yangilik/:id',
    name: 'yangilik',
    component: YangilikView,
    meta: { requiresReload: true }
  },
  {
    path: '/yangilik2',
    name: 'yangilik2',
    component: Yangilik2View,
    meta: { requiresReload: true }
  },
  {
    path: '/yangilik3',
    name: 'yangilik3',
    component: Yangilik3View,
    meta: { requiresReload: true }
  },
  {
    path: '/yangilik4',
    name: 'yangilik4',
    component: Yangilik4View,
    meta: { requiresReload: true }
  },
  {
    path: '/yangilik5',
    name: 'yangilik5',
    component: Yangilik5View,
    meta: { requiresReload: true }
  },
  {
    path: '/yangilik6',
    name: 'yangilik6',
    component: Yangilik6View,
    meta: { requiresReload: true }
  },
  {
    path: '/markalar',
    name: 'markalar',
    component: MarkalarView,
    meta: { requiresReload: true }
  },
  {
    path: '/markalar2',
    name: 'markalar2',
    component: Markalar2View,
    meta: { requiresReload: true }
  },
  {
    path: '/marka',
    name: 'marka',
    component: MarkaView,
    meta: { requiresReload: true }
  },
  {
    path: '/marka2/:id',
    name: 'marka2',
    component: Marka2View,
    meta: { requiresReload: true }
  },
  {
    path: '/aloqa',
    name: 'aloqa',
    component: AloqaView,
    meta: { requiresReload: true }
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView,
    meta: { requiresAuth: true } // Tahrirlash sahifasi faqat autentifikatsiyadan o'tgan foydalanuvchilar uchun mavjud
  },
  {
    path: '/vakansiyalar',
    name: 'vakansiyalar',
    component: VakansiyalarView,
    meta: { requiresReload: true }
  },
  {
    path: '/vakansiyalar1',
    name: 'vakansiyalar1',
    component: Vakansiyalar1View,
    meta: { requiresReload: true }
  },
  {
    path: '/vakansiyalar2',
    name: 'vakansiyalar2',
    component: Vakansiyalar2View,
    meta: { requiresReload: true }
  },
  {
    path: '/vakansiyalar3',
    name: 'vakansiyalar3',
    component: Vakansiyalar3View,
    meta: { requiresReload: true }
  },
  {
    path: '/filiallar',
    name: 'filiallar',
    component: FiliallarView,
    meta: { requiresReload: true }
  },
  {
    path: '/filiallar2',
    name: 'filiallar2',
    component: Filiallar2View,
    meta: { requiresReload: true }
  },
  {
    path: '/filial/:id',
    name: 'filial',
    component: FilialView,
    props: true
  },
  {
    path: '/yuridik',
    name: 'yuridik',
    component: YuridikView,
    meta: { requiresReload: true }
  },
  {
    path: '/rivojlantirish',
    name: 'rivojlantirish',
    component: RivojlantirishView,
    meta: { requiresReload: true }
  },
  {
    path: '/boshqaruvOrganlari',
    name: 'boshqaruvOrganlari',
    component: BoshqaruvOrganlariView,
    meta: { requiresReload: true }
  },
  {
    path: '/ijroiyaApparati',
    name: 'ijroiyaApparati',
    component: IjroiyaApparatiView,
    meta: { requiresReload: true }
  },
  {
    path: '/normativBaza',
    name: 'normativBaza',
    component: NormativBazaView,
    meta: { requiresReload: true }
  },
  {
    path: '/korrupsiya',
    name: 'korrupsiya',
    component: KorrupsiyaView,
    meta: { requiresReload: true }
  },
  {
    path: '/xalqaroHamkorlar',
    name: 'xalqaroHamkorlar',
    component: XalqaroHamkorlarView,
    meta: { requiresReload: true }
  },
  {
    path: '/aksiyadorlarBurchagi',
    name: 'aksiyadorlarBurchagi',
    component: AksiyadorlarBurchagiView,
    meta: { requiresReload: true }
  },
  {
    path: '/jamiyatNizomi',
    name: 'jamiyatNizomi',
    component: JamiyatNizomiView,
    meta: { requiresReload: true }
  },
  {
    path: '/choraklikHisobotlar',
    name: 'choraklikHisobotlar',
    component: ChoraklikHisobotlarView,
    meta: { requiresReload: true }
  },
  {
    path: '/yillikHisobotlar',
    name: 'yillikHisobotlar',
    component: YillikHisobotlarView,
    meta: { requiresReload: true }
  },
  {
    path: '/muhimFaktlar',
    name: 'muhimFaktlar',
    component: MuhimFaktlarView,
    meta: { requiresReload: true }
  },
  {
    path: '/tiklash',
    name: 'tiklash',
    component: TiklashView,
    meta: { requiresReload: true }
  },
  {
    path: '/elonlar',
    name: 'elonlar',
    component: ElonlarView,
    meta: { requiresReload: true }
  },
  {
    path: '/dividendlar',
    name: 'dividendlar',
    component: DividendlarView,
    meta: { requiresReload: true }
  },
  {
    path: '/pulAyirboshlash',
    name: 'pulAyirboshlash',
    component: PulAyirboshlashView,
    meta: { requiresReload: true }
  },
  {
    path: '/ichkiHujjatlar',
    name: 'ichkiHujjatlar',
    component: IchkiHujjatlarView,
    meta: { requiresReload: true }
  },
  {
    path: '/qimmatliQogozlar',
    name: 'qimmatliQogozlar',
    component: QimmatliQogozlarView,
    meta: { requiresReload: true }
  },
  {
    path: '/biznesRejalar',
    name: 'biznesRejalar',
    component: BiznesRejalarView,
    meta: { requiresReload: true }
  },
  {
    path: '/xat',
    name: 'xat',
    component: XatView,
    meta: { requiresReload: true }
  },
  {
    path: '/xat1',
    name: 'xat1',
    component: Xat1View,
    meta: { requiresReload: true }
  },
  {
    path: '/map',
    name: 'map',
    component: MapView,
    meta: { requiresReload: true }
  },
  {
    path: '/headeritem/:name_uz',
    name: 'headeritem',
    component: HeaderItemView,
    meta: { requiresReload: true }
  },
  {
    path: '/singin',
    name: 'singin',
    component: SinginView,
    meta: { requiresReload: true }
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // Sahifadan sahifaga o'tganda scroll pozitsiyasini boshqarish
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { top: 0 }; // Har doim sahifaning yuqorisidan boshlanadi
    } else {
      return { top: 0 }; // Har doim sahifaning yuqorisidan boshlanadi
    }
  }
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('id_token');

  // Tokenning eskirganligini tekshirish funksiyasi
  function isTokenExpired(token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // JWT payloadini o'qiymiz
      const currentTime = Math.floor(Date.now() / 1000); // Hozirgi vaqtni soniyalarda olamiz
      return payload.exp < currentTime; // Agar amal muddati o'tgan bo'lsa, true qaytadi
    } catch (error) {
      return true; // Noto'g'ri token bo'lsa, true qaytadi
    }
  }

  // Token eskirgan bo'lsa, foydalanuvchini login sahifasiga yo'naltirish
  if (loggedIn && isTokenExpired(loggedIn)) {
    localStorage.removeItem('id_token');
    localStorage.setItem('redirectAfterLogin', to.fullPath);
    next({ name: 'singin' });
    return;
  }

  // Auth talab qiladigan yo'llar uchun tekshirish
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    localStorage.setItem('redirectAfterLogin', to.fullPath);
    next({ name: 'singin' });
  } else if (to.matched.some(record => record.meta.requiresReload) && from.name) {
    // Agar sahifa o'zgarsa va `meta.requiresReload` mavjud bo'lsa
    next(); // Yo'naltirishni davom ettiring
    setTimeout(() => {
      window.location.reload(); // Yo'naltirishdan keyin sahifani qayta yuklang
    }, 0);
  } else {
    next(); // Odatdagi yo'naltirish
  }
});






export default router;
