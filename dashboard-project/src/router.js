import { createRouter, createWebHistory } from 'vue-router';
import DashBoard from './components/DashBoard.vue';

const routes = [
  {
    path: '/',
    component: DashBoard,
    name: 'DashBoard'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;