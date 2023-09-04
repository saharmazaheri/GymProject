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
@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: bold;
  src: url('../src/assets/css/fonts/farsi/iran-sans/eot/IRANSansWeb_Bold.eot');
  src:
    url('../src/assets/css/fonts/farsi/iran-sans/eot/IRANSansWeb_Bold.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-8 */
      url('../src/assets/css/fonts/farsi/iran-sans/woff2/IRANSansWeb_Bold.woff2')
      format('woff2'),
    /* FF39+,Chrome36+, Opera24+*/
      url('../src/assets/css/fonts/farsi/iran-sans/woff/IRANSansWeb_Bold.woff')
      format('woff'),
    /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
      url('../src/assets/css/fonts/farsi/iran-sans/ttf/IRANSansWeb_Bold.ttf')
      format('truetype');
  font-display: swap;
}
@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  src: url('../src/assets/css/fonts/farsi/iran-sans/eot/IRANSansWeb.eot');
  src:
    url('../src/assets/css/fonts/farsi/iran-sans/eot/IRANSansWeb.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-8 */
      url('../src/assets/css/fonts/farsi/iran-sans/woff2/IRANSansWeb.woff2')
      format('woff2'),
    /* FF39+,Chrome36+, Opera24+*/
      url('../src/assets/css/fonts/farsi/iran-sans/woff/IRANSansWeb.woff')
      format('woff'),
    /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
      url('../src/assets/css/fonts/farsi/iran-sans/ttf/IRANSansWeb.ttf')
      format('truetype');
  font-display: swap;
}
</style>
