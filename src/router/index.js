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
    component: () => import('../views/curriculum/index.vue'),
    meta:{
      title: '课程'
    }
  },
  {
    path: '/curriculum_live',
    name: 'curriculum_live',
    component: () => import('../views/curriculum/live_broadcast.vue'),
    meta:{
      title: '课程'
    }
  },
  {
    path: '/academy',
    name: 'Academy',
    component: () => import('../views/academy.vue'),
    meta:{
      title: '学院'
    }
  },
  {
    path: '/teacher_home',
    name: 'Academy',
    component: () => import('../views/teacher/home.vue'),
    meta:{
      title: '教师主页'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
