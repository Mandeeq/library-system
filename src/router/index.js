import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ourphilosophy from '../views/Ourphilosophy.vue'
import Contact from '../views/Contact.vue'
import Menu from '@/views/Menu.vue'
import Chef from '@/views/Chef.vue'
import Reservation from '@/views/Reservation.vue'
import Message from '@/views/Message.vue'
import News from '@/views/News.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/Ourphilosophy',
      name: 'Ourphil',
      component:ourphilosophy
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
      path: '/message',
      name: 'Message',
      component:Message,
    },
  ]
})

export default router
