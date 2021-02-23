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
    component: () => import('@/views/ProductItem.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve(savedPosition)
  //       })
  //     })
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
})


export default router
