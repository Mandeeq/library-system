import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Menu from '@/views/Menu.vue'
import Chef from '@/views/Chef.vue'
import Reservation from '@/views/Reservation.vue'
import Blog from '@/views/Blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:About,
    },
    {
      path: '/contact',
      name: 'contact',
      component:Contact,
    },
    {
      path: '/menu',
      name: 'Menu',
      component:Menu,
    },
    {
      path: '/chef',
      name: 'Chef',
      component:Chef,
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component:Reservation,
    },
    {
      path: '/blog',
      name: 'Blog',
      component:Blog,
    },
  ]
})

export default router
