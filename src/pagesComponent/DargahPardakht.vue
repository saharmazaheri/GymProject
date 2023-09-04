<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>پرداخت اینترنتی</h2>
          </div>
          <div class="col-12">
            <router-link to="/">خانه</router-link>
            <router-link to="/dargah-pardakht">درگاه پرداخت</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Internet payment Start -->
    <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
      <p>درگاه پرداخت</p>
      <h2>پرداخت اینترنتی به پرداخت ملت</h2>
    </div>
    <div class="about wow fadeInUp text-center" data-wow-delay="0.1s" dir="rtl">
      <div class="container" dir="rtl">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12 order-lg-1 order-2">
            <div>
              <div class="card-header">
                <h3>اطلاعات کارت</h3>
              </div>
              <form class="card-info">
                <div class="form-group row">
                  <div class="col-sm-4 card-D1">
                    <small
                      >شماره کارت 16 رقمی درج شده روی کارت را وارد نمایید</small
                    >
                  </div>

                  <div class="col-md-6 col-sm-8 col-12 mobile-justify card-D2">
                    <input
                      class="resume-input card-I text-center"
                      type="text"
                      placeholder="شماره کارت"
                      v-model="cardnumber"
                      @blur="v$.cardnumber.$touch()"
                      :class="{ invalid: v$.cardnumber.$error }"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-sm-4 card-D1">
                    <small
                      >شماره 3 یا 4 رقمی درج شده روی کارت را وارد نمایید</small
                    >
                  </div>

                  <div class="col-md-6 col-sm-8 col-12 mobile-justify card-D2">
                    <input
                      style="width: 400px"
                      class="resume-input card-I text-center"
                      type="text"
                      placeholder="شماره شناسایی دوم (CVV2)"
                      v-model="cvv2"
                      @blur="v$.cvv2.$touch()"
                      :class="{ invalid: v$.cvv2.$error }"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-sm-4 card-D1">
                    <small>تاریخ انقضای کارت را وارد کنید </small>
                  </div>

                  <div class="col-md-2 col-sm-3 col-4 card-D3">
                    <input
                      style="width: 100px"
                      type="tel"
                      class="resume-input card-I1 text-center"
                      placeholder="ماه"
                      v-model="month"
                      @blur="v$.month.$touch()"
                      :class="{ invalid: v$.month.$error }"
                    />
                  </div>
                  <div class="col-md-2 col-sm-3 col-4 card-D3">
                    <input
                      type="tel"
                      class="resume-input card-I1 text-center"
                      placeholder="سال"
                      v-model="year"
                      @blur="v$.year.$touch()"
                      :class="{ invalid: v$.year.$error }"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-sm-4">
                    <small>لطفا کد امنیتی داخل کادر را وارد نمایید</small>
                  </div>

                  <div
                    class="col-md-6 col-sm-6 col-10 mobile-justify keypad-parent"
                  >
                    <input
                      type="tel"
                      class="fresume-input card-I text-center"
                      maxlength="5"
                      placeholder="کد امنیتی"
                      v-model="securitycode"
                      @blur="v$.securitycode.$touch()"
                      :class="{ invalid: v$.securitycode.$error }"
                    />
                    <img class="captcha" src="../assets/img/capcha.jpg" />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-sm-4 card-D1">
                    <small>رمز اینترنتی را وارد نمایید</small>
                  </div>

                  <div class="col-md-6 col-sm-8 col-12 mobile-justify card-D2">
                    <input
                      class="resume-input card-I text-center"
                      type="password"
                      placeholder="رمز اینترنتی کارت"
                      v-model="Passwordcard"
                      @blur="v$.Passwordcard.$touch()"
                      :class="{ invalid: v$.Passwordcard.$error }"
                    />
                    <button type="button" class="btn btn-perches pas-poya">
                      دریافت رمز پویا
                    </button>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-sm-4 card-D1">
                    <small>لطفا ایمیل معتبر وارد کنید (اختیاری)</small>
                  </div>

                  <div class="col-md-6 col-sm-8 col-12 mobile-justify card-D2">
                    <input
                      class="resume-input card-I text-center"
                      type="text"
                      placeholder="ایمیل"
                      v-model="Email"
                      @blur="v$.Email.$touch()"
                      :class="{ invalid: v$.Email.$error }"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-sm-4"></div>
                  <div
                    class="col-md-6 col-sm-8 col-12 mobile-justify btn-submit-form"
                  >
                    <button
                      type="button"
                      class="btn"
                      style="
                        background-color: rgb(38, 220, 47);
                        color: aliceblue;
                        margin-left: 5px;
                      "
                    >
                      پرداخت
                    </button>
                    <tab></tab>
                    <button
                      type="button"
                      class="btn"
                      style="
                        background-color: rgb(208, 64, 64);
                        color: aliceblue;
                      "
                    >
                      انصراف
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="col-lg-4 col-md-12 col-sm-12 order-lg-2 order--1">
            <div class="beh-card merchantdetail">
              <div class="card-header">
                <h3>اطلاعات پذیرنده</h3>
              </div>
              <div class="card-body">
                <div class="merchant-container">
                  <div class="col-lg-12 col-sm-4 merchant-logo">
                    <img src="../assets/img/hero.png" />
                  </div>
                  <br />
                  <ul
                    class="col-lg-12 col-sm-8 merchant-detail"
                    style="list-style-type: none"
                  >
                    <li>نام پذیرنده : <b>باشگاه بدنسازی</b></li>
                    <li>شماره پذیرنده: <b>5496824</b></li>
                    <br />
                    <li>
                      <p>مبلغ قابل پرداخت: {{ this.shopcart[0] }} تومان</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Internet payment Start -->
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
  computed: {
    shopcart() {
      return this.$store.getters.Getshopcart
    },
  },
}
</script>
