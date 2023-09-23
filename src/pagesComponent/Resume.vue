<template>
  <div>
    <Headerapp />
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>رزومه</h2>
          </div>
          <div class="col-12">
            <router-link to="/"> خانه </router-link>
            <router-link to="/resume"> رزومه </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Resume Start -->
    <div class="contact">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>رزومه</p>
          <h2>استخدام مربی</h2>
        </div>
        <div class="row">
          <div class="col-12 wow fadeInUp" data-wow-delay="0.1s">
            <p class="c-form text-center">مشخصات خود را تکمیل کنید</p>
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
                      data-validation-required-message="لطفا شماره موبایل  خود را وارد کنید"
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
                      type="text"
                      placeholder="رشته تحصیلی"
                      v-model="Educational"
                      @blur="v$.Educational.$touch()"
                      :class="{ invalid: v$.Educational.$error }"
                    />
                  </div>

                  <div class="control-group">
                    <input
                      class="resume-input"
                      type="text"
                      placeholder="میزان تحصیلات"
                      v-model="selectEducational"
                      @blur="v$.selectEducational.$touch()"
                      :class="{ invalid: v$.selectEducational.$error }"
                    />
                  </div>

                  <div class="text-center">
                    <button
                      class="btn resume-input"
                      type="submit"
                      @click.prevent="Resume1()"
                    >
                      ثبت اطلاعات
                    </button>
                  </div>
                </form>
                <div class="container text-right">
                  <br />
                  <p>بارگذاری فایل رزومه</p>
                  <form>
                    <input type="file" style="padding: 8px 8px" />
                    <div>
                      <br />
                      <button
                        class="btn resume-input"
                        type="submit"
                        @click.prevent="Resume2()"
                      >
                        ارسال
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Resume End -->
    <Footerapp />
  </div>
</template>

<script>
import Header from './shared/Header.vue'
import Footer from './shared/Footer.vue'
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
  methods: {
    Resume2() {
      alert('فایل با موفقیت ارسال شد')
    },
  },
}
</script>
