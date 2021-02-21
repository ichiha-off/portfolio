import { createRouter, createWebHistory } from 'vue-router'
import TopView from '@/views/TopView.vue'

const routes = [
  {
    path: '/',
    name: 'TopView',
    component: TopView,
  },
  {
    path: '/product/:id',
    name: 'ProductItem',
    component: () => import(/* webpackChunkName: "ProductItem" */ '@/views/ProductItem.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
