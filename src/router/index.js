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
    component: Test5View
  },
  {
    path: '/taqiqlanganjoylanmalar',
    name: 'taqiqlanganjoylanmalar',
    component: TaqiqlanganjoylanmalarView
  },
  {
    path: '/tariflar1',
    name: 'tariflar1',
    component: Tariflar1View
  },
  {
    path: '/tariflar2',
    name: 'tariflar2',
    component: Tariflar2View
  },
  {
    path: '/turlari',
    name: 'turlari',
    component: JonatmaturlariView
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
    component: XizmatlarView
  },
  {
    path: '/savollar',
    name: 'savollar',
    component: SavollarView
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SingupView
  },
  {
    path: '/xizmat/:id',
    name: 'xizmat',
    component: XizmatView
  },
  {
    path: '/tariflar',
    name: 'tariflar',
    component: TariflarView
  },
  {
    path: '/kuryerlikXizmati',
    name: 'kuryerlikXizmati',
    component: KuryerlikXizmatiView
  },
  {
    path: '/xalqaroPochta',
    name: 'xalqaroPochta',
    component: XalqaroPochtaView
  }, 
  {
    path: '/pochtaBolimi',
    name: 'pochtaBolimi',
    component: PochtaBolimiView
  }, 
  {
    path: '/tarif',
    name: 'tarif',
    component: TarifView
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
    component: TrackingView
  },
  {
    path: '/kalkulyator',
    name: 'kalkulyator',
    component: KalkulyatorView
  },
  {
    path: '/yangiliklar',
    name: 'yangiliklar',
    component: YangiliklarView
  },
  {
    path: '/yangilik/:id',
    name: 'yangilik',
    component: YangilikView
  },
  {
    path: '/yangilik2',
    name: 'yangilik2',
    component: Yangilik2View
  },
  {
    path: '/yangilik3',
    name: 'yangilik3',
    component: Yangilik3View
  },
  {
    path: '/yangilik4',
    name: 'yangilik4',
    component: Yangilik4View
  },
  {
    path: '/yangilik5',
    name: 'yangilik5',
    component: Yangilik5View
  },
  {
    path: '/yangilik6',
    name: 'yangilik6',
    component: Yangilik6View
  },
  {
    path: '/markalar',
    name: 'markalar',
    component: MarkalarView
  },
  {
    path: '/markalar2',
    name: 'markalar2',
    component: Markalar2View
  },
  {
    path: '/marka',
    name: 'marka',
    component: MarkaView
  },
  {
    path: '/marka2/:id',
    name: 'marka2',
    component: Marka2View
  },
  {
    path: '/aloqa',
    name: 'aloqa',
    component: AloqaView
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
    component: VakansiyalarView
  },
  {
    path: '/vakansiyalar1',
    name: 'vakansiyalar1',
    component: Vakansiyalar1View
  },
  {
    path: '/vakansiyalar2',
    name: 'vakansiyalar2',
    component: Vakansiyalar2View
  },
  {
    path: '/vakansiyalar3',
    name: 'vakansiyalar3',
    component: Vakansiyalar3View
  },
  {
    path: '/filiallar',
    name: 'filiallar',
    component: FiliallarView
  },
  {
    path: '/filiallar2',
    name: 'filiallar2',
    component: Filiallar2View
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
    component: YuridikView
  },
  {
    path: '/rivojlantirish',
    name: 'rivojlantirish',
    component: RivojlantirishView
  },
  {
    path: '/boshqaruvOrganlari',
    name: 'boshqaruvOrganlari',
    component: BoshqaruvOrganlariView
  },
  {
    path: '/ijroiyaApparati',
    name: 'ijroiyaApparati',
    component: IjroiyaApparatiView
  },
  {
    path: '/normativBaza',
    name: 'normativBaza',
    component: NormativBazaView
  },
  {
    path: '/korrupsiya',
    name: 'korrupsiya',
    component: KorrupsiyaView
  },
  {
    path: '/xalqaroHamkorlar',
    name: 'xalqaroHamkorlar',
    component: XalqaroHamkorlarView
  },
  {
    path: '/aksiyadorlarBurchagi',
    name: 'aksiyadorlarBurchagi',
    component: AksiyadorlarBurchagiView
  },
  {
    path: '/jamiyatNizomi',
    name: 'jamiyatNizomi',
    component: JamiyatNizomiView
  },
  {
    path: '/choraklikHisobotlar',
    name: 'choraklikHisobotlar',
    component: ChoraklikHisobotlarView
  },
  {
    path: '/yillikHisobotlar',
    name: 'yillikHisobotlar',
    component: YillikHisobotlarView
  },
  {
    path: '/muhimFaktlar',
    name: 'muhimFaktlar',
    component: MuhimFaktlarView
  },
  {
    path: '/elonlar',
    name: 'elonlar',
    component: ElonlarView
  },
  {
    path: '/dividendlar',
    name: 'dividendlar',
    component: DividendlarView,
  },
  {
    path: '/pulAyirboshlash',
    name: 'pulAyirboshlash',
    component: PulAyirboshlashView,
  },
  {
    path: '/ichkiHujjatlar',
    name: 'ichkiHujjatlar',
    component: IchkiHujjatlarView,
  },
  {
    path: '/qimmatliQogozlar',
    name: 'qimmatliQogozlar',
    component: QimmatliQogozlarView,
  },
  {
    path: '/biznesRejalar',
    name: 'biznesRejalar',
    component: BiznesRejalarView,
  },
  {
    path: '/xat',
    name: 'xat',
    component: XatView
  },
  {
    path: '/xat1',
    name: 'xat1',
    component: Xat1View
  },
  {
    path: '/map',
    name: 'map',
    component: MapView
  },
  {
    path: '/singin',
    name: 'singin',
    component: SinginView
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // Sahifadan sahifaga o'tganda scroll pozitsiyasini boshqarish
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Foydalanuvchi oldingi pozitsiyasiga qaytadi
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

  if (loggedIn && isTokenExpired(loggedIn)) {
    // Token eskirgan bo'lsa, foydalanuvchini chiqarib yuboramiz
    localStorage.removeItem('id_token');
    localStorage.setItem('redirectAfterLogin', to.fullPath); // Kirishni xohlagan yo'lni saqlab qo'yamiz
    next({ name: 'singin' }); // Login sahifangiz nomi
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    // Kirishni xohlagan yo'lni saqlab qo'yamiz
    localStorage.setItem('redirectAfterLogin', to.fullPath);
    // Login sahifasiga yo'naltiramiz
    next({ name: 'singin' }); // Login sahifangiz nomi
  } else {
    // Aks holda, yo'naltirilgan sahifaga o'tish
    next();
  }
});





export default router;
