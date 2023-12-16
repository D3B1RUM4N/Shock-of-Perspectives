import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store";

const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: () => import(/* webpackChunkName: "about" */ '../views/AcceuilView.vue')
  },
  {
    path: '/credits',
    name: 'CreditView',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreditView.vue')
  },
  {
    path: '/altercation',
    name: 'AltercationView',
    component: () => import(/* webpackChunkName: "about" */ '../views/AltercationView.vue')
  },
  {
    path: '/customisation',
    name: 'CharacterChoiceView',
    component: () => import(/* webpackChunkName: "about" */ '../views/CharacterChoiceView.vue')
  },
  {
    path: '/stats',
    name: 'StatView',
    component: () => import(/* webpackChunkName: "about" */ '../views/StatView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
