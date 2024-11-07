import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ourphilosophy from '../views/Ourphilosophy.vue'
import Contact from '../views/Contact.vue'
import Noticeboard from '@/views/Noticeboard.vue'
import FQAs from '@/views/FQAs.vue'
import Discipline from '@/views/Discipline.vue'
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
      path: '/fqas',
      name: 'fqas',
      component:FQAs,
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
  ]
})

export default router
