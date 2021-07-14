import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Kitchen from '../components/Kitchen.vue'
import Selection from '../views/Selection.vue'

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
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Selection',
    name: 'Selection',
    component: () => import(/* webpackChunkName: "about" */ '../views/Selection.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
