import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import SignIn from '../views/SignIn.vue'
import Dashboard from '../views/Dashboard.vue'
import Selection from '../views/Selection.vue'
import ClipPath from '../views/ClipPath.vue'
import Kitchen from '../views/Kitchen.vue'

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
    name: 'Dashboard',
    component: Dashboard
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
    path: '/clip-path',
    name: 'ClipPath',
    component: ClipPath
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
