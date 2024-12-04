import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
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


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/profil',
    name: 'profil',
    component: ProfilView
  },
  {
    path: '/xizmatlar',
    name: 'xizmatlar',
    component: XizmatlarView
  },
  {
    path: '/xizmat',
    name: 'xizmat',
    component: XizmatView
  },
  {
    path: '/tariflar',
    name: 'tariflar',
    component: TariflarView
  },
  {
    path: '/tarif',
    name: 'tarif',
    component: TarifView
  },
  {
    path: '/tahrirlash',
    name: 'tahrirlash',
    component: TahrirlashView
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
    path: '/marka',
    name: 'marka',
    component: MarkaView
  },
  {
    path: '/aloqa',
    name: 'aloqa',
    component: AloqaView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView
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
    path: '/xat',
    name: 'xat',
    component: XatView
  },
  {
    path: '/xat1',
    name: 'xat1',
    component: Xat1View
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
