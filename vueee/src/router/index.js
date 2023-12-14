import { createRouter, createWebHistory } from 'vue-router'
import regisView from '../views/regisView.vue'
import statusView from '../views/statusView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'regis',
      component: regisView
    },
    {
      path: '/status',
      name: 'status',
      component: statusView
    },
  ]
})

export default router
