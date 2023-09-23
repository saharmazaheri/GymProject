const state = {
  coffee: [
    {
      imge: 'https://s6.uupload.ir/files/gh-1_w61w.png',
      title: 'اسپرسو',
      comments: 'اسپرسو',
      price: '69000',
      id: '0',
    },
    {
      imge: 'https://s6.uupload.ir/files/gh-2_r13l.png',
      title: 'اسپرسو کن پانا',
      comments: 'اسپرسو، خامه',
      price: '74000',
      id: '1',
    },
    {
      imge: 'https://s6.uupload.ir/files/gh-3_1eaj.png',
      title: 'اسپرسو ماکیاتو',
      comments: 'اسپرسو، چند قطره شیر، یک لکه فوم شیر',
      price: '71000',
      id: '2',
    },
    {
      imge: 'https://s6.uupload.ir/files/sh-b_ymh6.png',
      title: 'شیربادام عسل دارچین',
      comments: 'شیربادام،عسل،دارچین',
      price: '123000',
      id: '3',
    },
    {
      imge: 'https://s6.uupload.ir/files/sh-f_78it.png',
      title: 'شیرفندق عسل دارچین',
      comments: 'شیرفندق،عسل،دارچین',
      price: '123000',
      id: '4',
    },
    {
      imge: 'https://s6.uupload.ir/files/sh-n_lijo.png',
      title: 'شیرنارگیل عسل دارچین',
      comments: 'شیرنارگیل،عسل،دارچین',
      price: '112000',
      id: '5',
    },
    {
      imge: 'https://s6.uupload.ir/files/i-a_dy42.png',
      title: 'آیس آمریکانو',
      comments: 'آمریکانو، یخ',
      price: '69000',
      id: '6',
    },
    {
      imge: 'https://s6.uupload.ir/files/i-l_09d6.png',
      title: 'آیس لاته',
      comments: 'اسپرسو، شیر، یخ',
      price: '84000',
      id: '7',
    },
    {
      imge: 'https://s6.uupload.ir/files/i-m_ratr.png',
      title: 'آیس موکا',
      comments: 'شکلات، اسپرسو، شیر، یخ',
      price: '89000',
      id: '8',
    },
    {
      imge: 'https://s6.uupload.ir/files/c-z_ove.png',
      title: 'کوکی زنجبیل عسل (عددی)',
      comments: 'یک عدد کوکی زنجبیل',
      price: '39000',
      id: '9',
    },
    {
      imge: 'https://s6.uupload.ir/files/c-b_7bre.png',
      title: 'کوکی براونی چاکلت (عددی)',
      comments: 'یک عدد کوکی براونی چاکلت',
      price: '39000',
      id: '10',
    },
    {
      imge: 'https://s6.uupload.ir/files/c-k_4q7y.png',
      title: 'کوکی بادام کرنبری (عددی)',
      comments: 'کوکی بادام کرنبری)',
      price: '39000',
      id: '11',
    },
  ],
  shopcart: [],
  Total: [],
}

const getters = {
  GetCoffee(state) {
    return state.coffee
  },
  Getshopcart(state) {
    return state.shopcart
  },
  GetTotal(state) {
    return state.Total
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
