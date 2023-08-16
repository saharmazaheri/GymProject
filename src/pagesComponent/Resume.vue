<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>رزومه</h2>
          </div>
          <div class="col-12">
            <a href="">خانه</a>
            <a href="">رزومه</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

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
                      type="text"
                      placeholder="رشته تحصیلی"
                      v-model="Educational"
                      @blur="v$.Educational.$touch()"
                      :class="{ invalid: v$.Educational.$error }"
                    />
                    <p
                      class="help-block text-danger"
                      v-if="!v$.Educational.required && v$.Educational.$dirty"
                    >
                      لطفا رشته تحصیلی خود را وارد کنید
                    </p>
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
                    <p
                      class="help-block text-danger"
                      v-if="
                        !v$.selectEducational.required &&
                        v$.selectEducational.$dirty
                      "
                    >
                      لطفا میزان تحصیلات خود را وارد کنید
                    </p>
                  </div>

                  <div class="text-center">
                    <button
                      class="btn resume-input"
                      type="submit"
                      @click.prevent="RegisterUser()"
                      :disabled="v$.$invalid"
                    >
                      ثبت اطلاعات
                    </button>
                  </div>
                </form>
                <div class="container text-right">
                  <br />
                  <p>بارگذاری فایل رزومه</p>
                  <form id="uploadForm" enctype="multipart/form-data">
                    <input type="file" id="fileInput" />
                    <div>
                      <br />
                      <button class="btn resume-input" type="submit">
                        ارسال
                      </button>
                    </div>
                  </form>
                  <p id="message"></p>
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
