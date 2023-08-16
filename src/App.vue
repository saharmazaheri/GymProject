<template>
  <div id="app">
    <appHeader />

    <transition enter-active-class="animated fadeIn">
      <router-view />
    </transition>
    <appFooter />
  </div>
</template>

<script>
import Header from './pagesComponent/shared/Header.vue'
import Footer from './pagesComponent/shared/Footer.vue'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
}
</script>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';
</style>
