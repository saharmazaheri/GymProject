<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>ثبت نام</h2>
          </div>
          <div class="col-12">
            <a href="index.html">خانه</a>
            <a href="">ثبت نام</a>
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
                    <p
                      class="help-block text-danger"
                      v-if="!v$.Name.required && v$.Name.$dirty"
                    >
                      لطفا نام‌ خود را وارد کنید
                    </p>
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
                    <p
                      class="help-block text-danger"
                      v-if="!v$.Family.required && v$.Family.$dirty"
                    >
                      لطفا نام خانوادگی خود را وارد کنید
                    </p>
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
                    <p
                      class="help-block text-danger"
                      v-if="!v$.NationalCode.required && v$.NationalCode.$dirty"
                    >
                      لطفا کد ملی خود را وارد کنید
                    </p>
                    <p
                      class="help-block text-danger"
                      v-if="!v$.NationalCode.minLength"
                    >
                      کد ملی باید حداقل شامل{{
                        v$.NationalCode.$params.minLength.min
                      }}
                      کاراکتر باشد
                    </p>
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
                    <p
                      class="help-block text-danger"
                      v-if="!v$.Dateofbirth.required && v$.Dateofbirth.$dirty"
                    >
                      لطفا تاریخ تولد خود را وارد کنید
                    </p>
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
                    <p
                      class="help-block text-danger"
                      v-if="!v$.UserAddress.required && v$.UserAddress.$dirty"
                    >
                      لطفا آدرس محل زندگی خود را وارد کنید
                    </p>
                  </div>

                  <div class="control-group">
                    <input
                      class="resume-input"
                      type="text"
                      placeholder="شماره موبایل"
                      data-validation-required-message="لطفا شماره موبایل  خود را وارد کنید"
                      v-model="PhoneNumber"
                      @blur="v$.PhoneNumber.$touch()"
                      :class="{ invalid: v$.PhoneNumber.$error }"
                    />
                    <p
                      class="help-block text-danger"
                      v-if="!v$.PhoneNumber.required && v$.PhoneNumber.$dirty"
                    >
                      لطفا شماره موبایل خود را وارد کنید
                    </p>
                    <p
                      class="help-block text-danger"
                      v-if="!v$.PhoneNumber.minLength"
                    >
                      شماره موبایل باید حداقل شامل{{
                        v$.PhoneNumber.$params.minLength.min
                      }}
                      کاراکتر باشد
                    </p>
                    <p
                      class="help-block text-danger"
                      v-if="!v$.PhoneNumber.maxLength"
                    >
                      شماره موبایل نمی‌تواند بیشتر از{{
                        v$.PhoneNumber.$params.maxLength.max
                      }}
                      کاراکتر داشته باشد
                    </p>
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
                    <p
                      class="help-block text-danger"
                      v-if="!v$.Email.required && v$.Email.$dirty"
                    >
                      لطفا ایمیل خود را وارد کنید
                    </p>
                    <p class="help-block text-danger" v-if="!v$.Email.email">
                      ایمیل وارد شده معتبر نمی‌باشد
                    </p>
                    <p
                      class="help-block text-danger"
                      v-if="!v$.Email.maxLength"
                    >
                      ایمیل کاربر نمی‌تواند بیشتر از{{
                        v$.Email.$params.maxLength.max
                      }}
                      کاراکتر داشته باشد
                    </p>
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
                    <p
                      class="help-block text-danger"
                      v-if="!v$.Password.required && v$.Password.$dirty"
                    >
                      لطفا رمز عبور خود را وارد کنید
                    </p>
                    <p
                      class="help-block text-danger"
                      v-if="!v$.Password.minLength"
                    >
                      رمز عبور باید حداقل شامل{{
                        v$.Password.$params.minLength.min
                      }}
                      کاراکتر باشد
                    </p>
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
                    <p
                      class="help-block text-danger"
                      v-if="!v$.RePassword.required && v$.RePassword.$dirty"
                    >
                      لطفا تکرار رمز عبور خود را وارد کنید
                    </p>
                    <p
                      class="help-block text-danger"
                      v-if="!v$.RePassword.sameAs && v$.RePassword.$dirty"
                    >
                      رمز عبور مغایرت دارد
                    </p>
                  </div>

                  <div class="text-center">
                    <br />
                    <button
                      class="btn signup-width"
                      type="submit"
                      @click.prevent="RegisterUser()"
                      :disabled="v$.$invalid"
                    >
                      ثبت نام
                    </button>
                  </div>
                </form>
                <br />
                <div class="icon">
                  <p>
                    از قبل حساب کاربری دارید؟
                    <a href="login.html"><i class="fa fa-lock"></i>ورود</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
