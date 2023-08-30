const state = {
  courses: [
    {
      imge: 'flaticon-workout',
      type: 'عمومی',
      numberOfSessions: 'هشت جلسه در یک ماه',
      price: '250.000 تومان',
      fillter: 'filter-1',
      Capacity: '3',
    },
    {
      imge: 'flaticon-workout-1',
      type: 'عمومی',
      numberOfSessions: 'دوازده جلسه در یک ماه',
      price: '450.000 تومان',
      fillter: 'filter-1',
      Capacity: '5',
    },
    {
      imge: 'flaticon-workout-2',
      type: 'عمومی',
      numberOfSessions: 'شانزده جلسه در یک ماه',
      price: '550.000 تومان',
      Capacity: '8',
    },
    {
      imge: 'flaticon-workout-3',
      type: 'عمومی',
      numberOfSessions: 'دوازده جلسه در دو ماه',
      price: '700.000 تومان',
      Capacity: '0',
    },
    {
      imge: 'flaticon-workout-4',
      type: 'عمومی',
      numberOfSessions: 'شانزده جلسه در دو ماه',
      price: '850.000 تومان',
      Capacity: '13',
    },
    {
      imge: 'flaticon-yoga-pose',
      type: 'عمومی',
      numberOfSessions: 'بیست و چهار جلسه در سه ماه',
      price: '1.100.000 تومان',
      Capacity: '2',
    },
    {
      imge: 'flaticon-workout',
      type: 'خصوصی',
      numberOfSessions: 'هشت جلسه در یک ماه',
      price: '350.000 تومان',
      Capacity: '9',
    },
    {
      imge: 'flaticon-workout-1',
      type: 'خصوصی',
      numberOfSessions: 'دوازده جلسه در یک ماه',
      price: '550.000 تومان',
      Capacity: '11',
    },
    {
      imge: 'flaticon-workout-2',
      type: 'خصوصی',
      numberOfSessions: 'شانزده جلسه در یک ماه',
      price: '650.000 تومان',
      Capacity: '3',
    },
    {
      imge: 'flaticon-workout-3',
      type: 'خصوصی',
      numberOfSessions: 'دوازده جلسه در دو ماه',
      price: '800.000 تومان',
      Capacity: '21',
    },
    {
      imge: 'flaticon-workout-4',
      type: 'خصوصی',
      numberOfSessions: 'شانزده جلسه در دو ماه',
      price: '950.000 تومان',
      Capacity: '15',
    },
    {
      imge: 'flaticon-yoga-pose',
      type: 'خصوصی',
      numberOfSessions: 'بیست و چهار جلسه در سه ماه',
      price: '1.200.000 تومان',
      Capacity: '20',
    },
    {
      imge: 'flaticon-workout',
      type: 'آزاد',
      numberOfSessions: 'یک جلسه عمومی',
      price: '30.000 تومان',
      Capacity: '7',
    },
    {
      imge: 'flaticon-workout-1',
      type: 'آزاد',
      numberOfSessions: 'یک جلسه خصوصی',
      price: '50.000 تومان',
      Capacity: '2',
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
