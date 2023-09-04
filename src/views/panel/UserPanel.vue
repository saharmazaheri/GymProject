<template class="container-fluid">
  <div dir="rtl">
    <div class="row">
      <div class="top-head">
        <div style="padding: 10px; color: beige">
          <CIcon icon="cil-user" />
          سحر مظاهری
        </div>
      </div>

      <user />

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

      <Program />

      <div id="userInfo" style="background-color: #f6d6d5">
        <div id="userInfo">
          <div class="col-12 mb-4">
            <h4 class="title">برنامه‌های دریافتی</h4>
            <hr />
          </div>
          <p class="text-center">تعداد سفارشات: 0</p>
          <div class="form-group col-12 text-left">
            <CButton class="button Bitem">دریافت برنامه</CButton>
          </div>
        </div>
      </div>

      <div id="userInfo" style="background-color: #f6d6d5">
        <div id="userInfo">
          <div class="container mt-3">
            <div class="col-12 mb-4">
              <h4 class="title">دوره ثبت نام شده</h4>
              <hr />
            </div>
            <table class="table table-secondary table-striped">
              <thead>
                <tr class="text-center">
                  <th>نوع دوره</th>
                  <th>تعداد جلسات</th>
                  <th>مبلغ پرداخت شده</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td>{{ this.courses[4].type }}</td>
                  <td>{{ this.courses[4].numberOfSessions }}</td>
                  <td>{{ this.courses[4].price }}</td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <div class="col-12 mb-4">
              <h4 class="title">دوره رزرو شده</h4>
              <hr />
            </div>
            <p class="text-center">
              در حال حاضر هیچ دوره‌ پرداخت نشده وجود ندارد
            </p>
            <div class="form-group col-12 text-left">
              <CButton class="button Bitem"
                ><router-link
                  to="/dargah-pardakht"
                  @click="thePayment(0)"
                  style="color: beige"
                  >پرداخت</router-link
                ></CButton
              >
            </div>
          </div>
        </div>
      </div>

      <div id="userInfo" style="background-color: #f6d6d5" class="text-right">
        <div id="userInfo">
          <div class="col-12 mb-4">
            <h4 class="title">سبد خرید کافی شاپ</h4>
            <hr />
          </div>
          <table class="table table-secondary table-striped">
            <thead>
              <tr class="text-center">
                <th>کالا</th>
                <th>عنوان</th>
                <th>تعداد</th>
                <th>قمیت</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-center">
                <td>
                  <img
                    :src="this.coffee[3].imge"
                    width="60"
                    height="60"
                    alt=""
                  />
                </td>
                <td>{{ this.coffee[3].title }}</td>
                <td>2</td>
                <td>{{ this.coffee[3].price * 2 }}</td>
              </tr>
              <tr class="text-center">
                <td>
                  <img
                    :src="this.coffee[0].imge"
                    width="60"
                    height="60"
                    alt=""
                  />
                </td>
                <td>{{ this.coffee[0].title }}</td>
                <td>1</td>
                <td>{{ this.coffee[0].price }}</td>
              </tr>
            </tbody>
          </table>
          <p>مجموع: 333000 تومان</p>
          <div class="form-group col-12 text-left">
            <CButton class="button Bitem"
              ><router-link
                to="/dargah-pardakht"
                @click="thePayment(333000)"
                style="color: beige"
                >پرداخت</router-link
              ></CButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from './componentsPanel/User.vue'
import ProgramUser from './componentsPanel/ProgramUser.vue'
export default {
  name: 'UserPanel',
  components: {
    user: User,
    Program: ProgramUser,
  },
  computed: {
    presence_absence() {
      return this.$store.getters.GetPresenceAbsence
    },
    coffee() {
      return this.$store.getters.GetCoffee
    },
    courses() {
      return this.$store.getters.GetCourses
    },
    shopcart() {
      return this.$store.getters.Getshopcart
    },
  },
  methods: {
    thePayment(pricee) {
      this.shopcart.push(pricee)
    },
  },
}
</script>
