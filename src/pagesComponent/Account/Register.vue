<template>
  <div>
    <Headerapp />
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>ثبت نام</h2>
          </div>
          <div class="col-12">
            <router-link to="/">خانه</router-link>
            <router-link to="/register">ثبت نام</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Register Start -->
    <div class="contact">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>ثبت نام</p>
          <h2 class="c-form text-center">ایجاد ناحیه کاربری</h2>
        </div>
        <div class="row">
          <div class="col-12 wow fadeInUp text-center" data-wow-delay="0.1s">
            <div class="contact-form">
              <div id="success" dir="rtl">
                <form class="resume-form">
                  <div class="control-group">
                    <input
                      class="resume-input"
                      type="text"
                      placeholder="نام"
                      v-model="Name"
                      @blur="v$.Name.$touch()"
                      :class="{ invalid: v$.Name.$error }"
                    />
                  </div>

                  <div class="control-group">
                    <input
                      class="resume-input"
                      type="text"
                      placeholder="نام‌ خانوادگی"
                      v-model="Family"
                      @blur="v$.Family.$touch()"
                      :class="{ invalid: v$.Family.$error }"
                    />
                  </div>

                  <div class="control-group">
                    <input
                      class="resume-input"
                      type="text"
                      placeholder="کد ملی"
                      v-model="NationalCode"
                      @blur="v$.NationalCode.$touch()"
                      :class="{ invalid: v$.NationalCode.$error }"
                    />
                  </div>

                  <div class="control-group">
                    <input
                      class="resume-input"
                      type="text"
                      placeholder="تاریخ تولد"
                      v-model="Dateofbirth"
                      @blur="v$.Dateofbirth.$touch()"
                      :class="{ invalid: v$.Dateofbirth.$error }"
                    />
                  </div>

                  <div class="control-group">
                    <input
                      class="resume-input"
                      type="text"
                      placeholder="آدرس محل زندگی"
                      v-model="UserAddress"
                      @blur="v$.UserAddress.$touch()"
                      :class="{ invalid: v$.UserAddress.$error }"
                    />
                  </div>

                  <div class="control-group">
                    <input
                      class="resume-input"
                      type="text"
                      placeholder="شماره موبایل"
                      v-model="PhoneNumber"
                      @blur="v$.PhoneNumber.$touch()"
                      :class="{ invalid: v$.PhoneNumber.$error }"
                    />
                  </div>

                  <div class="control-group">
                    <input
                      class="resume-input"
                      type="text"
                      placeholder="آدرس ایمیل"
                      v-model="Email"
                      @blur="v$.Email.$touch()"
                      :class="{ invalid: v$.Email.$error }"
                    />
                  </div>

                  <div class="control-group">
                    <input
                      class="resume-input"
                      type="password"
                      placeholder="رمز عبور"
                      v-model="Password"
                      @blur="v$.Password.$touch()"
                      :class="{ invalid: v$.Password.$error }"
                    />
                  </div>

                  <div class="control-group">
                    <input
                      class="resume-input"
                      type="password"
                      placeholder="تکرار رمز عبور"
                      v-model="RePassword"
                      @blur="v$.RePassword.$touch()"
                      :class="{ invalid: v$.RePassword.$error }"
                    />
                  </div>

                  <div class="text-center">
                    <br />
                    <button
                      class="btn signup-width"
                      type="submit"
                      @click.prevent="RegisterUser()"
                    >
                      ثبت نام
                    </button>
                  </div>
                </form>
                <br />
                <div>
                  <p>
                    از قبل حساب کاربری دارید؟
                    <router-link to="/login"
                      ><i class="fa fa-lock"></i> ورود
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Register End -->
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
