import { createRouter, createWebHashHistory } from 'vue-router'
import TopView from '@/views/TopView.vue'

const routes = [
  {
    path: '/',
    name: 'TopView',
    component: TopView,
  },
  {
    path: '/product',
    name: 'ProductItem',
    component: () => import(/* webpackChunkName: "ProductItem" */ '@/views/ProductItem.vue')
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes
})

export default router
