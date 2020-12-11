import Vue from 'vue'
import VueRouter from 'vue-router'

import './route-guard'

import Layout from '@/layout'

import homeRouter from './modules/home'
import trendsRouter from './modules/trends'
import memberPurchaseRouter from './modules/member-purchase'
import channelRouter from './modules/channel'
import profileRouter from './modules/profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
      homeRouter,
      trendsRouter,
      memberPurchaseRouter,
      channelRouter,
      profileRouter,
      {
        path: '/redirect',
        name: 'Redirect',
        component: () => import('@/views/redirect')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
