<template class="container-fluid">
  <div dir="rtl">
    <div class="row">
      <div class="top-head">
        <div style="padding: 10px; color: beige">
          <CIcon icon="cil-user" />
          {{ trainers[3].NameFamily }}
        </div>
      </div>
      <div id="userInfo" style="background-color: #f6d6d5">
        <div id="userInfo">
          <div>
            <div class="col-12 mb-4">
              <h4 class="title">اطلاعات مربی</h4>
              <hr />
            </div>
            <div class="d-item">
              <span class="var"> نام و نام‌خانوادگی : </span>
              <span class="val"> {{ trainers[3].NameFamily }} </span>
            </div>
            <div class="d-item">
              <span class="var"> کدملی : </span>
              <span class="val"> 1230564897 </span>
            </div>
            <div class="d-item">
              <span class="var"> تاریخ تولد : </span>
              <span class="val"> 1373/12/18 </span>
            </div>
            <div class="d-item">
              <span class="var"> شماره تماس : </span>
              <span class="val"> 09392584697 </span>
            </div>
            <div class="d-item">
              <span class="var"> ایمیل : </span>
              <span class="val"> leilamohammadi@gmail.com </span>
            </div>
            <div class="d-item">
              <span class="var"> آدرس محل زندگی : </span>
              <span class="val"> استان اصفهان... </span>
            </div>
            <div class="d-item">
              <span class="var"> رشته تحصیلی : </span>
              <span class="val"> بدنسازی </span>
            </div>
            <div class="d-item">
              <span class="var"> میزان تحصیلات : </span>
              <span class="val"> کارشناسی </span>
            </div>
          </div>
          <div class="text-left">
            <button class="button b-item">ویرایش اطلاعات</button>
          </div>
        </div>
      </div>
      <div id="userInfo" style="background-color: #f6d6d5">
        <div id="userInfo">
          <div class="col-12 mb-4">
            <h4 class="title">بیوگرافی</h4>
            <hr />
          </div>

          <div>
            <div style="text-align: justify; padding: 0px 30px">
              <p>
                سلام من {{ trainers[3].NameFamily }} هستم
                <br />
                {{ trainers[3].Biography }}
              </p>
            </div>
            <div class="text-left">
              <button class="button b-item">ویرایش بیوگرافی</button>
            </div>
          </div>
        </div>
      </div>
      <div id="userInfo" style="background-color: #f6d6d5">
        <div id="userInfo">
          <div class="col-12 mb-4">
            <h4 class="title">برنامه شاگرد</h4>
            <hr />
          </div>
          <div style="padding-right: 20px">
            <input
              style="padding: 5px"
              class="text-right"
              type="email"
              placeholder="نام کاربری شاگرد"
            />
          </div>
          <div
            class="form-group col-12 d-flex flex-wrap optional"
            style="width: 450px"
          >
            <div class="form-group custom-file col-12 mt-5">
              <input
                name="plane1"
                class="custom-file-input"
                type="file"
                accept="pdf/*"
              />
              <label
                class="custom-file-label"
                for="customFile"
                data-browse="انتخاب فایل"
              >
              </label>
            </div>
          </div>
          <div class="form-group col-12 text-left">
            <button class="button b-item">ارسال برنامه</button>
          </div>
        </div>
      </div>
    </div>
    <div id="userInfo" style="background-color: #f6d6d5">
      <div id="userInfo">
        <div class="col-12 mb-4">
          <h4 class="title">سبد خرید</h4>
          <hr />
        </div>
        <app_CoffeeUserShopCart />
        <div class="form-group col-12 text-left">
          <button class="button b-item">پرداخت</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoffeeUserShopCart from '../../pagesComponent/CoffeeUserShopCart.vue'
export default {
  name: 'TrainerPanel',
  computed: {
    trainers() {
      return this.$store.getters.GetTrainers
    },
    program() {
      return this.$store.getters.GetProgram
    },
  },
  components: {
    app_CoffeeUserShopCart: CoffeeUserShopCart,
  },
}
</script>

<style>
.top-head {
  background-color: #625c82;
  height: 50px;
  border-radius: 10px;
}
#userInfo {
  width: 100%;
  box-shadow: 0 0 13px 0 #0000006e;
  border-radius: 10px;
  margin: 30px 0;
  position: relative;
  z-index: 2;
  background-color: #f7cac9;
  color: #343148;
  padding: 35px 25px;
}
.d-item {
  display: inline-block;
  background-color: #fff;
  margin: 20px 15px 0 5px;
  padding: 8px 10px;
  border-radius: 10px;
  color: #625c82;
}
.var {
  font-size: 16px;
}
.val {
  color: black;
  font-size: 14px;
}
.b-item {
  display: inline-block;
  background-color: #625c82;
  margin: 20px 15px 0 5px;
  padding: 8px 10px;
  border-radius: 10px;
  color: #ffffff;
}
</style>
