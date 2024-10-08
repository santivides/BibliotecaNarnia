import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../views/RegistroPage.vue')
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../views/InicioPage.vue')
    },
    {
      path: '/consultar',
      name: 'consultar',
      component: () => import('../views/ConsultarPage.vue')
    },
    {
      path: '/administrar',
      name: 'administrar',
      component: () => import('../views/AdministrarLibros.vue')
    }
  ]
})

export default router
