<template>
  <div>
    <Headerapp />
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>دیدگاه کاربران</h2>
          </div>
          <div class="col-12">
            <router-link to="/"> خانه </router-link>
            <router-link to="/user-opinion"> دیدگاه کاربران </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- User opinion Start-->

    <div class="single" dir="rtl">
      <div class="container">
        <div class="row">
          <div class="col-md-12" style="display: flex">
            <div
              class="single-comment wow fadeInUp"
              style="border: 1px #343148 solid"
            >
              <h4 class="headerSingle">دیدگاه‌ها</h4>
              <ul
                class="comment-list text-right"
                v-for="item1 in Opinios"
                :key="item1.id"
              >
                <li class="comment-item opinions-p">
                  <div class="comment-body">
                    <div class="comment-img">
                      <img src="../assets/img/opinions/user.png" />
                    </div>
                    <div class="comment-text text-right">
                      <h3>{{ item1.name }}</h3>
                      <span> {{ item1.time }} {{ item1.date }}</span>
                      <p>
                        {{ item1.commentU }}
                      </p>
                      <button class="btn">پاسخ</button>
                    </div>
                  </div>
                  <hr class="hr-P" style="margin-right: 80px" />
                  <ul class="comment-child">
                    <li class="comment-item">
                      <div class="comment-body">
                        <div class="comment-img">
                          <img :src="this.Support[item1.id].imge" />
                        </div>
                        <div class="comment-textP">
                          <h3>پاسخ پشتیبان به {{ item1.name }}</h3>
                          <p>
                            <span
                              >{{ this.Support[item1.id].time }}
                              {{ this.Support[item1.id].date }}</span
                            >
                          </p>
                          <p>
                            {{ this.Support[item1.id].commentS }}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <hr class="hr-P" />
              </ul>
            </div>
            <div class="comment-form wow fadeInUp text-right">
              <h4 class="headerSingle">دیدگاه خود را ثبت کنید</h4>
              <form>
                <div class="form-group">
                  <label for="name">*نام و نام خانوادگی</label>
                  <input type="text" class="form-control formP" />
                </div>
                <div class="form-group">
                  <label for="email">*ایمیل</label>
                  <input type="email" class="form-control formP" />
                </div>
                <div class="form-group">
                  <label>*پیغام</label>
                  <textarea
                    cols="30"
                    rows="5"
                    class="form-control formP"
                  ></textarea>
                </div>
                <div class="form-group text-left">
                  <input type="submit" value="ارسال دیدگاه" class="btn" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- User opinion End-->
    <Footerapp />
  </div>
</template>

<script>
import Header from './shared/Header.vue'
import Footer from './shared/Footer.vue'

export default {
  components: {
    Headerapp: Header,
    Footerapp: Footer,
  },
  computed: {
    Opinios() {
      return this.$store.getters.GetOpinios
    },
    Support() {
      return this.$store.getters.GetSupport
    },
  },
}
</script>
