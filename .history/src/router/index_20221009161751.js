import Vue from 'vue'
import VueRouter from 'vue-router'
import VueRouter from '../views/L'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
 
]

const router = new VueRouter({
  routes
})

export default router
