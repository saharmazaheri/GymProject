<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>ورود</h2>
          </div>
          <div class="col-12">
            <a href="index.html">خانه</a>
            <a href="">ورود</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- sign in -->
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

                    <span class="input-group-addon">
                      <i class="fa fa-user"></i>
                    </span>
                    <span data-label=""></span>
                    <p
                      class="help-block text-danger"
                      v-if="!v$.Email.required && v$.Email.$dirty"
                    >
                      لطفا ایمیل خود را وارد کنید
                    </p>
                    <p class="help-block text-danger" v-if="!v$.Email.email">
                      ایمیل وارد شده معتبر نمی‌باشد
                    </p>
                  </div>
                  <br />
                  <div class="control-group">
                    <input
                      type="password"
                      placeholder="رمز عبور"
                      v-model="Password"
                      @blur="v$.assword.$touch()"
                      :class="{ invalid: v$.Password.$error }"
                    />
                    <span class="input-group-addon">
                      <i class="fa fa-lock"></i>
                    </span>
                    <span data-label=""></span>
                    <p
                      class="help-block text-danger"
                      v-if="!v$.Password.required && v$.Password.$dirty"
                    >
                      لطفا رمز عبور خود را وارد کنید
                    </p>
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
                <div class="icon">
                  <p>رمز عبور خود را فراموش کردید؟</p>
                  <p>
                    حساب کاربری ندارید؟
                    <a href="signup.html"
                      ><i class="fa fa-lock"></i>ساخت حساب</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- sign in -->
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { Mixin } from '@/Mixins/Mixin.js'
export default {
  setup() {
    return { v$: useVuelidate() }
  },
  mixins: [Mixin],
}
</script>

<style>
.invalid {
  box-shadow: 0 0 5px red;
  background-color: lightpink;
}
</style>
