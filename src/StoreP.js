import { createStore } from 'vuex'

import Courses from './Courses.js'
import Trainers from './Trainers.js'
import CoffeeShop from './CoffeeShop.js'
import opinions from './opinions.js'
import PresenceAbsence from './PresenceAbsence.js'

export default createStore({
  state: {},
  modules: {
    Courses,
    Trainers,
    CoffeeShop,
    opinions,
    PresenceAbsence,
  },
})
