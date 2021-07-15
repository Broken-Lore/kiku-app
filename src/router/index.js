import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Kitchen from '../components/Kitchen.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kitchen',
    name: 'Kitchen',
    component: Kitchen
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
