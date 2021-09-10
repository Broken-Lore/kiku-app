import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import SignIn from '../views/SignIn.vue'
import Selection from '../views/Selection.vue'
import Kitchen from '../views/Kitchen.vue'
import store from '@/store'
import DashBoard from '../views/DashBoard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard,
    beforeEnter: (to, from, next) => {
      console.log('middleware')
      console.log(store.getters)
      if (!store.getters['auth/authenticated']) {
        return next({
          name: 'SignIn'
        })
      }
      next()
    }
  },
  {
    path: '/kitchen',
    name: 'Kitchen',
    component: Kitchen
  },
  {
    path: '/Selection',
    name: 'Selection',
    component: Selection
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
