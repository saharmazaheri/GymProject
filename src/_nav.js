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
    to: '/theme/user-panel',
    icon: 'cil-user',
  },
  {
    component: 'CNavItem',
    name: 'پنل مربی',
    to: '/theme/trainer-panel',
    icon: 'cil-user',
  },
  {
    component: 'CNavTitle',
    name: 'افزودن، ویرایش و حذف آیتم‌ها',
  },
  {
    component: 'CNavItem',
    name: 'مربی‌ها',
    to: '/base/trainer-edit',
    icon: 'cil-pencil',
  },
  {
    component: 'CNavItem',
    name: 'دوره‌ها',
    to: '/base/courses-edit',
    icon: 'cil-pencil',
  },
  {
    component: 'CNavItem',
    name: 'کافی شاپ',
    to: '/base/coffe-shop-edit',
    icon: 'cil-pencil',
  },

  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
