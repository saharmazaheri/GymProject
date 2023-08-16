const state = {
  courses: [
    {
      imge: 'flaticon-workout',
      type: 'عمومی',
      numberOfSessions: 'هشت جلسه در یک ماه',
      price: '250.000 تومان',
      fillter: 'filter-1',
    },
    {
      imge: 'flaticon-workout-1',
      type: 'عمومی',
      numberOfSessions: 'دوازده جلسه در یک ماه',
      price: '250.000 تومان',
      fillter: 'filter-1',
    },
    {
      imge: 'flaticon-workout-2',
      type: 'عمومی',
      numberOfSessions: 'شانزده جلسه در یک ماه',
      price: '250.000 تومان',
      fillter: 'filter-1',
    },
    {
      imge: 'flaticon-workout-3',
      type: 'عمومی',
      numberOfSessions: 'دوازده جلسه در دو ماه',
      price: '250.000 تومان',
      fillter: 'filter-1',
    },
    {
      imge: 'flaticon-workout-4',
      type: 'عمومی',
      numberOfSessions: 'شانزده جلسه در دو ماه',
      price: '250.000 تومان',
      fillter: 'filter-1',
    },
    {
      imge: 'flaticon-yoga-pose',
      type: 'عمومی',
      numberOfSessions: 'بیست و چهار جلسه در سه ماه',
      price: '250.000 تومان',
      fillter: 'filter-1',
    },
    {
      imge: 'flaticon-workout',
      type: 'خصوصی',
      numberOfSessions: 'هشت جلسه در یک ماه',
      price: '250.000 تومان',
      fillter: 'filter-2',
    },
    {
      imge: 'flaticon-workout-1',
      type: 'خصوصی',
      numberOfSessions: 'دوازده جلسه در یک ماه',
      price: '250.000 تومان',
      fillter: 'filter-2',
    },
    {
      imge: 'flaticon-workout-2',
      type: 'خصوصی',
      numberOfSessions: 'شانزده جلسه در یک ماه',
      price: '250.000 تومان',
      fillter: 'filter-2',
    },
    {
      imge: 'flaticon-workout-3',
      type: 'خصوصی',
      numberOfSessions: 'دوازده جلسه در دو ماه',
      price: '250.000 تومان',
      fillter: 'filter-2',
    },
    {
      imge: 'flaticon-workout-4',
      type: 'خصوصی',
      numberOfSessions: 'شانزده جلسه در دو ماه',
      price: '250.000 تومان',
      fillter: 'filter-2',
    },
    {
      imge: 'flaticon-yoga-pose',
      type: 'خصوصی',
      numberOfSessions: 'بیست و چهار جلسه در سه ماه',
      price: '250.000 تومان',
      fillter: 'filter-2',
    },
    {
      imge: 'flaticon-workout',
      type: 'آزاد',
      numberOfSessions: 'یک جلسه عمومی',
      price: '250.000 تومان',
      fillter: 'filter-3',
    },
    {
      imge: 'flaticon-workout-1',
      type: 'آزاد',
      numberOfSessions: 'یک جلسه خصوصی',
      price: '250.000 تومان',
      fillter: 'filter-3',
    },
  ],
}

const getters = {
  GetCourses(state) {
    return state.courses
  },
}
const mutations = {}
const actions = {}

export default {
  state,
  getters,
  mutations,
  actions,
}
