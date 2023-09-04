<template>
  <div id="userInfo" style="background-color: #f6d6d5">
    <div id="userInfo">
      <div class="col-12 mb-4">
        <h4 class="title">تکمیل اطلاعات جهت درخواست برنامه</h4>
        <hr />
      </div>
      <form class="form-row">
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
              value="بیش از شش ماه"
              type="radio"
              id="history4"
              required=""
            />
            <label class="custom-control-label" for="history4"
              >بیش از شش ماه</label
            >
          </div>
        </div>
        <div
          class="form-group col-12 col-md-6 col-xl-4 radio exerciseTime mt-4"
        >
          <h5 style="color: black">در هفته چند روز می‌توانید تمرین کنید:</h5>
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
        </div>
        <div class="form-group col-12 col-md-6 col-xl-4 radio bodytype mt-4">
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
            <label class="custom-control-label" for="bodytype1">اکتومورف</label>
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
            <label class="custom-control-label" for="bodytype2">مزومورف</label>
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
            <label class="custom-control-label" for="bodytype3">اندومورف</label>
          </div>
        </div>
        <div id="set_price" class="form-group col-12 col-md-6 col-xl-8 mt-4">
          <label> قیمت برنامه : </label>
          <span class="price">250,000 تومان</span>
        </div>
        <div class="form-group col-12 text-left">
          <CButton class="button Bitem"
            ><router-link
              to="/dargah-pardakht"
              @click="thePaymentP(250000)"
              style="color: beige"
              >پرداخت و ثبت اطلاعات</router-link
            ></CButton
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    shopcart() {
      return this.$store.getters.Getshopcart
    },
  },
  methods: {
    thePaymentP(pricee) {
      this.shopcart.push(pricee)
    },
  },
}
</script>
