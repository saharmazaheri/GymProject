<template>
  <div id="app">
    <!-- <Headerapp /> -->

    <transition enter-active-class="animated fadeIn">
      <router-view />
    </transition>
    <!-- <Footerapp /> -->
  </div>
</template>

<script>
// import Header from './pagesComponent/shared/Header.vue'
// import Footer from './pagesComponent/shared/Footer.vue'

export default {
  // components: {
  //   Headerapp: Header,
  //   Footerapp: Footer,
  // },
}
</script>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';
</style>
