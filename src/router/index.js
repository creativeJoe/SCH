import Vue from 'vue'
import Router from 'vue-router'
import VueSession from 'vue-session'
import VueJWT from 'vuejs-jwt'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Forgot from '@/components/Forgot'
import Reset from '@/components/Reset'
import Logout from '@/components/Logout'
import Profile from '@/components/Profile'
import Profiles from '@/components/Profiles'

Vue.use(Router)
Vue.use(VueSession)
Vue.use(VueJWT)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: Forgot
    },
    {
      path: '/reset',
      name: 'Reset',
      component: Reset
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/profile',
      name: 'Profiles',
      component: Profiles
    }
  ]
})


