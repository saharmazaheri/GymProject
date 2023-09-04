<template>
  <div>
    <Headerapp />
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>ورود</h2>
          </div>
          <div class="col-12">
            <router-link to="/">خانه</router-link>
            <router-link to="/login">ورود</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Login Start -->
    <div class="contact">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>ورود / ثبت نام</p>
          <h2>ورود</h2>
        </div>
        <div class="row">
          <div class="col-12 wow fadeInUp text-center" data-wow-delay="0.1s">
            <p class="c-form text-center">وارد ناحیه کاربری خود شوید</p>
            <div class="contact-form">
              <div id="success">
                <form action="">
                  <div class="control-group">
                    <input
                      type="email"
                      placeholder="آدرس ایمیل"
                      v-model="Email"
                      @blur="v$.Email.$touch()"
                      :class="{ invalid: v$.Email.$error }"
                    />
                  </div>
                  <br />
                  <div class="control-group">
                    <input
                      type="password"
                      placeholder="رمز عبور"
                      v-model="Password"
                      @blur="v$.Password.$touch()"
                      :class="{ invalid: v$.Password.$error }"
                    />
                  </div>
                  <br />
                  <div class="text-center">
                    <button
                      class="btn login-width"
                      @click.prevent="LoginUser()"
                    >
                      ورود
                    </button>
                  </div>
                </form>
                <br />
                <div>
                  <p>رمز عبور خود را فراموش کردید؟</p>
                  <p>
                    حساب کاربری ندارید؟
                    <router-link to="/register">
                      <i class="fa fa-lock"></i> ساخت حساب</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Login End -->
    <Footerapp />
  </div>
</template>

<script>
import Header from '../shared/Header.vue'
import Footer from '../shared/Footer.vue'
import { useVuelidate } from '@vuelidate/core'
import { Mixin } from '@/Mixins/Mixin.js'
export default {
  components: {
    Headerapp: Header,
    Footerapp: Footer,
  },
  setup() {
    return { v$: useVuelidate() }
  },
  mixins: [Mixin],
}
</script>
