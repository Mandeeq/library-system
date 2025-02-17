import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Contact from '../views/Contact.vue'
import Noticeboard from '@/views/Noticeboard.vue'
import FAQs from '@/views/FAQs.vue'
import Discipline from '@/views/Discipline.vue'
import Message from '@/views/Message.vue'
import News from '@/views/News.vue'
import Gallery from '@/views/Gallery.vue'
import Downloads from '@/views/downloads.vue'
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
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
   
    {
      path: '/contact',
      name: 'contact',
      component:Contact,
    },
   
    {
      path: '/faqs',
      name: 'faqs',
      component:FAQs,
    },
    {
      path: '/discipline',
      name: 'Discipline',
      component:Discipline,
    },
    {
      path: '/message',
      name: 'Message',
      component:Message,
    },
    {
      path: '/noticeboard',
      name: 'Noticeboard',
      component:Noticeboard,
    },
    {
      path: '/downloads',
      name: 'Downloads',
      component:Downloads,
    },
  ]
})

export default router
