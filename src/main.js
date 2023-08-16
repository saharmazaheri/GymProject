import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Store from './vuex/Store.js'
import Mixin from './Mixins/Mixin.js'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsExample from '@/components/DocsExample'
import { CSwitch, CButton } from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/css/style.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.use(Store)
app.use(Mixin)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('CButton', CButton)
app.component('CSwitch', CSwitch)
app.component('DocsExample', DocsExample)

app.mount('#app')
