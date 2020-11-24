import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'//Default [component: Home]
import Poems from '../views/Poems.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/poems',
    name: 'Poems',
    component: Poems
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
  //All routes except 'home' note:
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
