import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AcceuilView from '../views/AcceuilView.vue'
import CreditView from "@/views/CreditView.vue";

const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: AcceuilView
  },
    {
      path: '/credits',
      name: 'CreditView',
      component: CreditView
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
