<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>دوره‌ها</h2>
          </div>
          <div class="col-12">
            <a href="">خانه</a>
            <a href="">دوره‌ها</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Class Start -->
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
          <div class="row" dir="rtl">
            <div class="col-12">
              <ul id="class-filter">
                <li data-filter="*" class="filter-active">همه دوره‌ها</li>
                <li data-filter=".filter-1">عمومی</li>
                <li data-filter=".filter-2">خصوصی</li>
                <li data-filter=".filter-3">آزاد</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row class-container">
          <div
            class="col-lg-4 col-md-6 col-sm-12 class-item wow fadeInUp"
            :class="item.fillter"
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

              <p>شنبه،چهارشنبه <i class="far fa-calendar-alt"></i></p>
              <p>8:00-12:00 <i class="far fa-clock"></i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Class End -->
  </div>
</template>

<script>
export default {
  computed: {
    courses() {
      return this.$store.getters.GetCourses
    },
  },
}
</script>
