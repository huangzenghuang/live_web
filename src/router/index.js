import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: '首页',
    }
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: () => import(/* webpackChunkName: "about" */ '../views/curriculum/index.vue'),
    meta:{
      title: '课程'
    }
  },
  {
    path: '/curriculum_live',
    name: 'curriculum_live',
    component: () => import(/* webpackChunkName: "about" */ '../views/curriculum/live_broadcast.vue'),
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
