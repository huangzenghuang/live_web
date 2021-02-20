import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import curriculum from '../views/curriculum/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: '首夜'
    }
  },  {
    path: '/curriculum',
    name: 'curriculum',
    component: Home,
    meta:{
      title: '课程'
    }
  },
  {
    path: '/academy',
    name: 'Academy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/academy.vue'),
    meta:{
      title: '学院'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
