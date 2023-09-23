<template>
  <div>
    <Headerapp />
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>دوره‌ها</h2>
          </div>
          <div class="col-12">
            <router-link to="/"> خانه </router-link>
            <router-link to="/courses"> دوره‌ها </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Courses Start -->
    <div class="service">
      <div class="container">
        <div class="class">
          <div
            class="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>دوره‌ها</p>
            <h2>مشخصات دوره‌ها</h2>
          </div>
        </div>
        <div class="row class-container" dir="rtl">
          <div
            class="col-lg-4 col-md-6 col-sm-12 class-item wow fadeInUp"
            data-wow-delay="0.0s"
            v-for="item in courses"
            :key="item.numberOfSessions"
          >
            <div class="service-item">
              <div class="service-icon">
                <i :class="item.imge"></i>
              </div>
              <h3>{{ item.type }}</h3>
              <p>{{ item.numberOfSessions }}</p>
              <p>
                {{ item.price }}
              </p>
              <p>ظرفیت باقیمانده {{ item.Capacity }} نفر</p>
              <br />
              <button class="but-p">
                <a
                  class="btn btn-default check_out cursor-pointer"
                  @click="AddCourses()"
                  ><i class="fa fa-shopping-cart"></i>
                  افـزودن به سبـد خریـد
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Courses End -->
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
    courses() {
      return this.$store.getters.GetCourses
    },
  },
  methods: {
    AddCourses() {
      alert('دوره با موفقیت رزرو شد')
    },
  },
}
</script>
