const state = {
  Opinios: [
    {
      imge: require('./assets/img/opinions/user.png'),
      name: 'علی',
      commentU:
        'سلام و خسته نباشید خدمت تمامی کارکنان مجموعه، من از تمام بخش‌ها راضی بودم واقعاعالیه ',
      time: '10:15',
      date: '1402/01/29',
      id: '0',
    },
    {
      imge: require('./assets/img/opinions/user.png'),
      name: 'مهسا',
      commentU:
        'سلام و وقت بخیر، ای کاش برای بانوان سانس بعدازظهر هم اضافه می‌کردید.',
      time: '21:35',
      date: '1402/03/05',
      id: '1',
    },
    {
      imge: require('./assets/img/opinions/user.png'),
      name: 'سارا',
      commentU: 'سلام و وقت بخیر خدمت شما، کافی شاپ چه ساعاتی باز است؟ ',
      time: '10:30',
      date: '1402/05/25',
      id: '2',
    },
  ],
  Support: [
    {
      imge: require('./assets/img/opinions/support.png'),
      commentS:
        'دورد به شما کاربر گرامی باعث افتخار ماست که میزبان خوبی برای شما بوده‌ایم❤ ',
      time: '12:00',
      date: '1402/02/01',
      id: '0',
    },
    {
      imge: require('./assets/img/opinions/support.png'),
      commentS: 'سلام متاسفانه تایم‌ها پر هستند ولی سعیمان را خواهیم کرد. ',
      time: '13:01',
      date: '1402/03/06',
      id: '1',
    },
    {
      imge: require('./assets/img/opinions/support.png'),
      commentS: 'سلام از 9 صبح تا 12 ظهر و از 17 بعداز ظهر تا 20 شب. ',
      time: '14:00',
      date: '1402/05/26',
      id: '2',
    },
  ],
}
const getters = {
  GetOpinios(state) {
    return state.Opinios
  },
  GetSupport(state) {
    return state.Support
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
