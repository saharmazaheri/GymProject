import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import Index from '../pagesComponent/Index.vue'
import Login from '../pagesComponent/Account/Login.vue'
import Register from '../pagesComponent/Account/Register.vue'
import AboutUs from '../pagesComponent/About.vue'
import UserOpinion from '../pagesComponent/Opinions.vue'
import Courses from '../pagesComponent/Courses.vue'
import Trainers from '../pagesComponent/Trainers.vue'
import CoffeeShop from '../pagesComponent/CoffeeShop.vue'
import TrainerPage from '../pagesComponent/TrainerPage.vue'
import Resume from '../pagesComponent/Resume.vue'
import CoffeeUserShopCart from '../pagesComponent/CoffeeUserShopCart.vue'

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/about-us',
    component: AboutUs,
  },
  {
    path: '/user-opinion',
    component: UserOpinion,
  },
  {
    path: '/courses',
    component: Courses,
  },
  {
    path: '/trainers',
    component: Trainers,
  },
  {
    path: '/coffee-shop',
    component: CoffeeShop,
  },
  {
    path: '/trainers/trainer-page/:id',
    component: TrainerPage,
    name: 'trainerpage',
  },
  {
    path: '/resume',
    component: Resume,
  },
  {
    path: '/CoffeeUserShopCart',
    component: CoffeeUserShopCart,
  },
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/theme/user-panel',
        name: 'UserPanel',
        component: () => import('@/views/theme/UserPanel.vue'),
      },
      {
        path: '/theme/trainer-panel',
        name: 'TrainerPanel',
        component: () => import('@/views/theme/TrainerPanel.vue'),
      },
      {
        path: '/base/trainer-edit',
        name: 'TrainerEdit',
        component: () => import('@/views/base/TrainerEdit.vue'),
      },
      {
        path: '/base/courses-edit',
        name: 'CoursesEdit',
        component: () => import('@/views/base/CoursesEdit.vue'),
      },
      {
        path: '/base/coffe-shop-edit',
        name: 'CoffeShopEdit',
        component: () => import('@/views/base/CoffeShopEdit.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
