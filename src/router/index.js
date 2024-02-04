import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/FoodVendor',
      name: 'FoodVendor',
      component: () => import('@/components/FoodVendor.vue')
    }
  ]
})

export default router
