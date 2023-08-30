<template>
  <div id="app">
    <transition enter-active-class="animated fadeIn">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';
</style>
