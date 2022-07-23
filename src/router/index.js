import Vue from 'vue'
import VueRouter from 'vue-router'

import GlobalFeed from '@/views/GlobalFeed.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
