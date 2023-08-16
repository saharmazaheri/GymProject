import { createStore } from 'vuex'

import Courses from './Modules/Courses.js'
import Trainers from './Modules/Trainers.js'
import CoffeeShop from './Modules/CoffeeShop.js'

export default createStore({
  state: {},
  modules: {
    Courses,
    Trainers,
    CoffeeShop,
  },
})
