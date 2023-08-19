<template class="container-fluid">
  <div dir="rtl">
    <div class="row">
      <div class="top-head">
        <div style="padding: 10px; color: beige">
          <CIcon icon="cil-user" />
          سحر مظاهری
        </div>
      </div>
      <div id="userInfo" style="background-color: #f6d6d5">
        <div id="userInfo">
          <div class="col-12 mb-4">
            <h4 class="title">اطلاعات کاربری</h4>
            <hr />
          </div>
          <div class="d-item">
            <span class="var"> نام و نام‌خانوادگی : </span>
            <span class="val"> سحر مظاهری </span>
          </div>
          <div class="d-item">
            <span class="var"> کدملی : </span>
            <span class="val"> 5490123456 </span>
          </div>
          <div class="d-item">
            <span class="var"> تاریخ تولد : </span>
            <span class="val"> 1380/05/22 </span>
          </div>
          <div class="d-item">
            <span class="var"> شماره تماس : </span>
            <span class="val"> 09135961725 </span>
          </div>
          <div class="d-item">
            <span class="var"> ایمیل : </span>
            <span class="val"> saharmazaheri00@gmail.com </span>
          </div>
          <div class="d-item">
            <span class="var"> نام مربی : </span>
            <span class="val"> الیسا جعفری </span>
          </div>
          <div class="d-item">
            <span class="var"> آدرس محل زندگی : </span>
            <span class="val"> استان اصفهان... </span>
          </div>

          <div class="text-left">
            <button class="button b-item">ویرایش اطلاعات</button>
          </div>
        </div>
      </div>
      <div id="userInfo" style="background-color: #f6d6d5">
        <div id="userInfo">
          <div class="container mt-3">
            <div class="col-12 mb-4">
              <h4 class="title">حضور غیاب</h4>
              <hr />
            </div>
            <table class="table table-secondary table-striped">
              <thead>
                <tr class="text-center">
                  <th>کل جلسات</th>
                  <th>حضور</th>
                  <th>غیاب</th>
                  <th>جلسات باقیمانده</th>
                  <th>غیبت مجاز باقیمانده</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="i in presence_absence"
                  :key="i.total"
                  class="text-center"
                >
                  <td>{{ i.total }}</td>
                  <td>{{ i.presence }}</td>
                  <td>{{ i.absence }}</td>
                  <td>{{ i.leftover }}</td>
                  <td>{{ i.Authorized }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="userInfo" style="background-color: #f6d6d5">
        <div id="userInfo">
          <div class="col-12 mb-4">
            <h4 class="title">تکمیل اطلاعات جهت درخواست برنامه</h4>
            <hr />
          </div>
          <form
            class="needs-validation form-row"
            novalidate=""
            method="post"
            enctype="multipart/form-data"
          >
            <input name="coachId" type="hidden" value="5" />
            <input name="mobile" type="hidden" value="09135961725" />
            <div class="form-group col-12 jensiat mb-4">
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  class="custom-control-input active"
                  name="j"
                  value="1"
                  type="radio"
                  id="j1"
                  required=""
                />
                <label class="custom-control-label" for="j1">مرد</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  class="custom-control-input"
                  name="j"
                  value="0"
                  type="radio"
                  id="j2"
                  checked=""
                  required=""
                />
                <label class="custom-control-label" for="j2">زن</label>
              </div>
            </div>
            <div class="form-group col-12 col-md-6 col-xl-4">
              <label> قد </label>
              <input
                name="h"
                class="form-control"
                type="number"
                placeholder="cm"
                pattern="[\d۰-۹]{3}"
                value=""
                required=""
              />
              <div class="invalid-feedback">قد شما مقول نمی باشد</div>
            </div>
            <div class="form-group col-12 col-md-6 col-xl-4">
              <label> وزن </label>
              <input
                name="w"
                class="form-control"
                type="number"
                placeholder="kg"
                pattern="[\d۰-۹]{2,3}"
                value=""
                required=""
              />

              <div class="invalid-feedback">وزن صحیح را وارد کنید</div>
            </div>
            <div class="form-group col-12 col-md-6 col-xl-4">
              <label> سن </label>
              <input
                name="age"
                class="form-control"
                type="number"
                placeholder="year"
                pattern="[\d۰-۹]{1,3}"
                value=""
                required=""
              />
              <div class="invalid-feedback">سن خود را صحیح وارد کنید</div>
            </div>

            <div
              onchange=""
              class="form-group col-12 col-md-6 col-xl-4 radio typePlane mt-4"
            >
              <h5 style="color: black">نوع برنامه درخواستی:</h5>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="typePlane"
                  value="تمرین در خانه"
                  type="radio"
                  id="typePlane4"
                  required=""
                />
                <label
                  class="custom-control-label"
                  for="typePlane4"
                  data-toggle="popover"
                  title=""
                  data-trigger="hover"
                  data-original-title="تمرین در خانه"
                  >تمرین در خانه</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input active"
                  name="typePlane"
                  value="برنامه مبتدی"
                  type="radio"
                  id="typePlane1"
                  checked=""
                  required=""
                />
                <label
                  class="custom-control-label"
                  for="typePlane1"
                  data-toggle="popover"
                  title=""
                  data-trigger="hover"
                  data-original-title="برنامه مبتدی"
                  >برنامه مبتدی</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="typePlane"
                  value="برنامه نیم حرفه ای"
                  type="radio"
                  id="typePlane2"
                  required=""
                />
                <label
                  class="custom-control-label"
                  for="typePlane2"
                  data-toggle="popover"
                  title=""
                  data-trigger="hover"
                  data-original-title="برنامه نیم حرفه ای"
                  >برنامه نیم حرفه ای</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="typePlane"
                  value="برنامه حرفه ای"
                  type="radio"
                  id="typePlane3"
                  required=""
                />
                <label
                  class="custom-control-label"
                  for="typePlane3"
                  data-toggle="popover"
                  title=""
                  data-trigger="hover"
                  data-original-title="برنامه حرفه ای"
                  >برنامه حرفه ای</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="typePlane"
                  value="رژیم غذایی"
                  type="radio"
                  id="typePlane5"
                  required=""
                />
                <label
                  class="custom-control-label"
                  for="typePlane5"
                  data-toggle="popover"
                  title=""
                  data-trigger="hover"
                  data-original-title="رژیم غذایی"
                  >رژیم غذایی</label
                >
              </div>
            </div>
            <div class="form-group col-12 col-md-6 col-xl-4 radio target mt-4">
              <h5 style="color: black">هدف شما از بدنسازی:</h5>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="target"
                  value="چربی سوزی و کاهش وزن"
                  type="radio"
                  id="target1"
                  checked=""
                  required=""
                />
                <label class="custom-control-label" for="target1"
                  >چربی سوزی و کاهش وزن</label
                >
              </div>
              <div class="custom-control custom-radio active">
                <input
                  class="custom-control-input"
                  name="target"
                  value="افزایش وزن و حجم عضلات"
                  type="radio"
                  id="target2"
                  required=""
                />
                <label class="custom-control-label" for="target2"
                  >افزایش وزن و حجم عضلات</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="target"
                  value="کات عضلانی"
                  type="radio"
                  id="target3"
                  required=""
                />
                <label class="custom-control-label" for="target3"
                  >کات عضلانی</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="target"
                  value=""
                  type="radio"
                  id="target4"
                  required=""
                />
                <label class="custom-control-label" for="target4">سایر</label>
              </div>
            </div>
            <div
              class="form-group col-12 col-md-6 col-xl-4 radio specialty mt-4"
            >
              <h5 style="color: black">رشته انتخابی:</h5>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="specialty"
                  value="تناسب اندام (فیتنس)"
                  type="radio"
                  id="specialty1"
                  checked=""
                  required=""
                />
                <label class="custom-control-label" for="specialty1"
                  >تناسب اندام (فیتنس)</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="specialty"
                  value="بادی بیلدینک"
                  type="radio"
                  id="specialty2"
                  required=""
                />
                <label class="custom-control-label" for="specialty2"
                  >بادی بیلدینک</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="specialty"
                  value="فیزیک"
                  type="radio"
                  id="specialty3"
                  required=""
                />
                <label class="custom-control-label" for="specialty3"
                  >فیزیک</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="specialty"
                  value="بادی کلاسیک"
                  type="radio"
                  id="specialty4"
                  required=""
                />
                <label class="custom-control-label" for="specialty4"
                  >بادی کلاسیک</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="specialty"
                  value=""
                  type="radio"
                  id="specialty5"
                  required=""
                />
                <label class="custom-control-label" for="specialty5"
                  >سایر</label
                >
              </div>
            </div>
            <div class="form-group col-12 col-md-6 col-xl-4 radio history mt-4">
              <h5 style="color: black">سابقه تمرین:</h5>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="history"
                  value="کمتر از 6 ماه"
                  type="radio"
                  id="history1"
                  checked=""
                  required=""
                />
                <label class="custom-control-label" for="history1"
                  >کمتر از 6 ماه</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="history"
                  value="یک سال"
                  type="radio"
                  id="history2"
                  required=""
                />
                <label class="custom-control-label" for="history2"
                  >یک سال</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="history"
                  value="دو سال"
                  type="radio"
                  id="history3"
                  required=""
                />
                <label class="custom-control-label" for="history3"
                  >دو سال</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="history"
                  value="بیش از دو سال"
                  type="radio"
                  id="history4"
                  required=""
                />
                <label class="custom-control-label" for="history4"
                  >بیش از دو سال</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="history"
                  value=""
                  type="radio"
                  id="history5"
                  required=""
                />
                <label class="custom-control-label" for="history5">سایر</label>
              </div>
            </div>
            <div
              class="form-group col-12 col-md-6 col-xl-4 radio exerciseTime mt-4"
            >
              <h5 style="color: black">
                در هفته چند روز می‌توانید تمرین کنید:
              </h5>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="exerciseTime"
                  value="سه روز در هفته"
                  type="radio"
                  id="exerciseTime1"
                  checked=""
                  required=""
                />
                <label class="custom-control-label" for="exerciseTime1"
                  >سه روز در هفته</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="exerciseTime"
                  value="چهار روز در هفته"
                  type="radio"
                  id="exerciseTime2"
                  required=""
                />
                <label class="custom-control-label" for="exerciseTime2"
                  >چهار روز در هفته</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="exerciseTime"
                  value="پنج روز در هفته"
                  type="radio"
                  id="exerciseTime3"
                  required=""
                />
                <label class="custom-control-label" for="exerciseTime3"
                  >پنج روز در هفته</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="exerciseTime"
                  value="شش روز در هفته"
                  type="radio"
                  id="exerciseTime4"
                  required=""
                />
                <label class="custom-control-label" for="exerciseTime4"
                  >شش روز در هفته</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="exerciseTime"
                  value=""
                  type="radio"
                  id="exerciseTime5"
                  required=""
                />
                <label class="custom-control-label" for="exerciseTime5"
                  >سایر</label
                >
              </div>
            </div>
            <div
              class="form-group col-12 col-md-6 col-xl-4 radio bodytype mt-4"
            >
              <h5 style="color: black">تیپ بدنی:</h5>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="bodytype"
                  value="اکتومورف"
                  type="radio"
                  id="bodytype1"
                  checked=""
                  required=""
                />
                <label class="custom-control-label" for="bodytype1"
                  >اکتومورف</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="bodytype"
                  value="مزومورف"
                  type="radio"
                  id="bodytype2"
                  required=""
                />
                <label class="custom-control-label" for="bodytype2"
                  >مزومورف</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  name="bodytype"
                  value="اندومورف"
                  type="radio"
                  id="bodytype3"
                  required=""
                />
                <label class="custom-control-label" for="bodytype3"
                  >اندومورف</label
                >
              </div>
            </div>
            <div
              id="set_price"
              class="form-group col-12 col-md-6 col-xl-8 mt-4"
            >
              <label> قیمت برنامه : </label>
              <span class="price">300,000 تومان</span>
            </div>
            <div class="form-group col-12 mt-4">
              <label> سابقه بیماری خاص، سابقه مصدومیت، توضیحات تکمیلی </label>
              <textarea
                name="injury"
                rows="7"
                class="form-control"
                type="text"
              ></textarea>
            </div>

            <div class="form-group col-12 col-md-6 col-xl-4 accessible">
              <label> دور سینه </label>
              <input
                name="breast"
                class="form-control"
                type="text"
                placeholder="cm"
                pattern="[\d۰-۹]{2,3}"
                value=""
              />
              <div class="invalid-feedback">صفحه کلید خود را انگلیسی کنید!</div>
            </div>
            <div class="form-group col-12 col-md-6 col-xl-4 accessible">
              <label> دور بازو </label>
              <input
                name="arm"
                class="form-control"
                type="text"
                placeholder="cm"
                pattern="[\d۰-۹]{2,3}"
                value=""
              />
              <small class="form-text text-white-50">بازو در حالت منقبض</small>
              <div class="invalid-feedback">تکمیل الزامی است</div>
            </div>
            <div class="form-group col-12 col-md-6 col-xl-4 accessible">
              <label> دور شکم </label>
              <input
                name="gut"
                class="form-control"
                type="text"
                placeholder="cm"
                pattern="[\d۰-۹]{2,3}"
                value=""
              />
              <div class="invalid-feedback">دور شکم شما مقول نمی باشد!</div>
            </div>
            <div class="form-group col-12 col-md-6 col-xl-4 accessible">
              <label> دور باسن </label>
              <input
                name="hip"
                class="form-control"
                type="text"
                placeholder="cm"
                pattern="[\d۰-۹]{2,3}"
                value=""
              />
              <div class="invalid-feedback">دوباره اندازه گیری کنید</div>
            </div>
            <div
              class="form-group col-12 col-md-6 col-xl-4 mt-md-4 pt-md-2 mt-xl-0 pt-xl-0 accessible"
            >
              <label> دور ران </label>
              <input
                name="thigh"
                class="form-control"
                type="text"
                placeholder="cm"
                pattern="[\d۰-۹]{2,3}"
                value=""
              />
              <div class="invalid-feedback">صفحه کلید خود را انگلیسی کنید!</div>
            </div>
            <div
              class="form-group col-12 col-md-6 col-xl-4 mt-md-4 pt-md-2 mt-xl-0 pt-xl-0 accessible"
            >
              <label> عرض سرشانه ها </label>
              <input
                name="shane"
                class="form-control"
                type="text"
                placeholder="cm"
                pattern="[\d۰-۹]{2,3}"
                value=""
              />
              <div class="invalid-feedback">دوباره اندازه گیری کنید!</div>
            </div>
            <div
              class="form-group col-12 col-md-6 col-xl-4 mt-md-4 pt-md-2 accessible"
            >
              <label> دور ساق پا </label>
              <input
                name="sagh"
                class="form-control"
                type="text"
                placeholder="cm"
                pattern="[\d۰-۹]{2,3}"
                value=""
              />
              <div class="invalid-feedback">دور ساق شما مقول نیست !</div>
            </div>

            <div class="form-group col-12 d-flex flex-wrap optional">
              <div class="col-12 tip">
                <span>
                  درصورت تمرین در ماه گذشته تصویر برنامه خود را ارسال کنید
                </span>
              </div>
              <div class="form-group custom-file col-12 mt-5">
                <input
                  name="plane1"
                  class="custom-file-input"
                  type="file"
                  accept="image/*"
                  id="customFile"
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
              <button class="button b-item">پرداخت و ثبت اطلاعات</button>
            </div>
          </form>
        </div>
      </div>

      <div id="userInfo" style="background-color: #f6d6d5">
        <div id="userInfo">
          <div class="col-12 mb-4">
            <h4 class="title">برنامه‌های دریافتی</h4>
            <hr />
          </div>
          <p class="text-center">تعداد سفارشات: 0</p>
          <div class="form-group col-12 text-left">
            <button class="button b-item">دریافت برنامه</button>
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
  </div>
</template>

<script>
import CoffeeUserShopCart from '../../pagesComponent/CoffeeUserShopCart.vue'
export default {
  name: 'UserPanel',
  components: {
    app_CoffeeUserShopCart: CoffeeUserShopCart,
  },
  computed: {
    presence_absence() {
      return this.$store.getters.GetPresenceAbsence
    },
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
