import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    path: '/login',
    component: () => import('layouts/login/singin.vue')
  },
  {
    path: '/register',
    component: () => import('layouts/login/singup.vue')
  },
  {
    path: '/dashboard',
    component: () => import('layouts/Dashboard/dashboard.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
