import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'AboutUsView',
    component: () => import('../views/AboutUsView.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/DetailsView.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/BlogView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
