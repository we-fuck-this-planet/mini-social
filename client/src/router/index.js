import Vue from 'vue'
import VueRouter from 'vue-router'
import { authenticationGuard } from './auth/AuthenticationGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Registration',
    component: () => import('../views/Registration')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/feed',
    name: 'Feed',
    meta: { auth: true },
    beforeEnter: authenticationGuard,
    component: () => import('../views/Feed')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { auth: true },
    beforeEnter: authenticationGuard,
    component: () => import('../views/Profile')
  },
  {
    path: '/notification',
    name: 'Notification',
    meta: { auth: true },
    beforeEnter: authenticationGuard,
    component: () => import('../views/Notification')
  },
  {
    path: '/messenger',
    name: 'Messenger',
    meta: { auth: true },
    beforeEnter: authenticationGuard,
    component: () => import('../views/Messenger')
  },
  {
    path: '/friends',
    name: 'Friends',
    meta: { auth: true },
    beforeEnter: authenticationGuard,
    component: () => import('../views/Friends')
  },
  {
    path: '/follows',
    name: 'Follows',
    meta: { auth: true },
    beforeEnter: authenticationGuard,
    component: () => import('../views/Follows')
  },
  {
    path: '/friends/search',
    name: 'Search friends',
    meta: { auth: true },
    beforeEnter: authenticationGuard,
    component: () => import('../views/FriendsSearch')
  },
  {
    path: '/settings',
    name: 'Settings',
    meta: { auth: true },
    beforeEnter: authenticationGuard,
    component: () => import('../views/Settings')
  },
  {
    path: '/user/:id',
    name: 'UserProfileID',
    component: () => import('../views/UserProfile')
  },
  {
    path: '*',
    name: 'Page not found',
    component: () => import('../views/PageNotFound')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
