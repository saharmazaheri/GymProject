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
import DargahPardakht from '../pagesComponent/DargahPardakht.vue'
import Dashboard from '@/views/Dashboard.vue'
import UserPanel from '@/views/panel/UserPanel.vue'
import TrainerPanel from '@/views/panel/TrainerPanel.vue'
import TrainerEdit from '@/views/admin/TrainerEdit.vue'
import CoursesEdit from '@/views/admin/CoursesEdit.vue'
import CoffeeShopEdit from '@/views/admin/CoffeShopEdit.vue'

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
    path: '/dargah-pardakht',
    component: DargahPardakht,
  },
  {
    path: '/',
    name: 'خانه',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'داشبورد',
        component: Dashboard,
      },
      {
        path: '/user-panel',
        name: 'پنل کاربری',
        component: UserPanel,
      },
      {
        path: '/trainer-panel',
        name: 'پنل مربی',
        component: TrainerPanel,
      },
      {
        path: '/trainer-edit',
        name: 'مربیان',
        component: TrainerEdit,
      },
      {
        path: '/courses-edit',
        name: 'دوره‌ها',
        component: CoursesEdit,
      },
      {
        path: '/coffe-shop-edit',
        name: 'محصولات کافی شاپ',
        component: CoffeeShopEdit,
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
