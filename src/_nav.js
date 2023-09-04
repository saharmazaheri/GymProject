export default [
  {
    component: 'CNavItem',
    name: 'داشبورد',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
    },
  },
  {
    component: 'CNavTitle',
    name: 'پنل‌ها',
  },
  {
    component: 'CNavItem',
    name: 'پنل کاربری',
    to: '/user-panel',
    icon: 'cil-user',
  },
  {
    component: 'CNavItem',
    name: 'پنل مربی',
    to: '/trainer-panel',
    icon: 'cil-user',
  },
  {
    component: 'CNavTitle',
    name: 'ادمین',
  },
  {
    component: 'CNavItem',
    name: 'مربی‌ها',
    to: '/trainer-edit',
    icon: 'cil-pencil',
  },
  {
    component: 'CNavItem',
    name: 'دوره‌ها',
    to: '/courses-edit',
    icon: 'cil-pencil',
  },
  {
    component: 'CNavItem',
    name: 'کافی شاپ',
    to: '/coffe-shop-edit',
    icon: 'cil-pencil',
  },
]
