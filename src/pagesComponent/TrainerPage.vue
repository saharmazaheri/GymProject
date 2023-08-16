<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>اطلاعات مربی</h2>
          </div>
          <div class="col-12">
            <a href="">خانه</a>
            <a href="">اطلاعات مربی</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <div class="about wow fadeInUp text-center" data-wow-delay="0.1s" dir="rtl">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>اطلاعات مربی</p>
          <h2>سلام من {{ trainers[Lid].NameFamily }} هستم</h2>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6">
            <div class="about-imge">
              <img :src="trainers[Lid].imge" alt="Image" />
            </div>
          </div>
          <div class="col-lg-7 col-md-6">
            <div class="about-text">
              <p>{{ trainers[Lid].Biography }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Start -->
    <div class="blog">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>حرکات بدنسازی</p>
          <h2>آموزش تعدادی از حرکات فول بادی</h2>
        </div>
        <div class="text-right">
          <h3>نکته‌ای قبل از شروع</h3>
          <p>
            تعداد ست‌های هر حرکت به این شکل نوشته شده است۱۰ × ۳ این ینی ۳ ست و
            در هر ست ۱۰ تکرار به زبان ساده‌تر شما باید آن حرکت را ۳ بار اجرا
            کنید و در هر بار ۱۰ تکرار بزنید و بین هر ست ۳۰ تا ۶۰ ثانیه استراحت
            کنید
          </p>
          <h4 style="color: rgb(220, 56, 238)"></h4>
        </div>
        <div class="row blog-page" dir="rtl">
          <div
            class="col-lg-4 col-md-6 wow fadeInUp box"
            data-wow-delay="0.0s"
            v-for="item in program"
            :key="item.title"
          >
            <div class="blog-item">
              <div class="blog-img">
                <img :src="item.imge" alt="Blog" />
              </div>
              <div class="blog-text text-center">
                <h2>{{ item.title }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Blog End -->
  </div>
</template>

<script>
export default {
  computed: {
    trainers() {
      return this.$store.getters.GetTrainers
    },
    program() {
      return this.$store.getters.GetProgram
    },
  },
  data() {
    return {
      Lid: this.$route.params.id,
    }
  },
  watch: {
    $route(to) {
      this.Lid = to.params.id
    },
  },
}
</script>

<style>
.about-imge {
  position: relative;
  height: 80%;
}

.about-imge img {
  position: relative;
  width: 50%;
  height: 50%;
  object-fit: cover;
}

.box {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
}
</style>
