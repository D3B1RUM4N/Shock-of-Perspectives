import { createRouter, createWebHistory } from 'vue-router'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
