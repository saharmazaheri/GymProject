<template>
  <div>
    <Headerapp />
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>اطلاعات مربی</h2>
          </div>
          <div class="col-12">
            <router-link to="/">خانه</router-link>
            <router-link to="/trainers">مربی‌ها</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Trainers biography Start -->
    <div class="about wow fadeInUp text-center" data-wow-delay="0.1s" dir="rtl">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
          style="padding-left: 150px"
        >
          <p>اطلاعات مربی</p>
          <h2>سلام من {{ trainers[Lid].NameFamily }} هستم</h2>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6">
            <div class="trainer-imge">
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
    <!-- Trainers biography End -->

    <!-- Movement training Start -->
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
    <!-- Movement training End -->

    <!-- User opinion Start-->
    <div class="single" dir="rtl">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              class="single-comment wow fadeInUp text-left"
              style="width: 800px"
            >
              <h4 class="headerSingle text-right">دیدگاه کاربران</h4>
              <ul class="comment-list text-right">
                <li class="comment-item opinions-p">
                  <div class="comment-body">
                    <div class="comment-img">
                      <img src="../assets/img/opinions/user.png" />
                    </div>
                    <div class="comment-text text-right">
                      <h3>مه گل</h3>
                      <span> 11:16 1402/02/13</span>
                      <p>
                        سلام و خسته نباشید به بهترین مربی، من واقعا از برنامتون
                        راضی بودم و نتیجه گرفتم.
                      </p>
                      <button class="btn">پاسخ</button>
                    </div>
                  </div>
                  <hr class="hr-P" style="margin-right: 80px" />
                  <ul class="comment-child">
                    <li class="comment-item">
                      <div class="comment-body">
                        <div class="comment-img">
                          <img :src="trainers[Lid].imge" />
                        </div>
                        <div class="comment-textP">
                          <h3>پاسخ مربی به مه گل</h3>
                          <p><span>12:00 1402/02/015</span></p>
                          <p>
                            سلام مه گل عزیز شما لطف دارید نتیجه تلاش خودتان است
                            :))
                          </p>
                          <a class="btn-T">پاسخ</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <hr class="hr-P" />
                <li class="comment-item opinions-p">
                  <div class="comment-body">
                    <div class="comment-img">
                      <img src="../assets/img/opinions/user.png" />
                    </div>
                    <div class="comment-text text-right">
                      <h3>مریم</h3>
                      <span> 22:30 1402/04/04</span>
                      <p>
                        سلام آموزش حرکاتی که گذاشتید خیلی پرکاربرد و مفید هست
                        ممنون از شما.
                      </p>
                      <button class="btn">پاسخ</button>
                    </div>
                  </div>
                  <hr class="hr-P" style="margin-right: 80px" />
                  <ul class="comment-child">
                    <li class="comment-item">
                      <div class="comment-body">
                        <div class="comment-img">
                          <img :src="trainers[Lid].imge" />
                        </div>
                        <div class="comment-textP">
                          <h3>پاسخ مربی به مریم</h3>
                          <p><span>15:25 1402/04/07</span></p>
                          <p>سلام خیلی خوشحالم که استفاده می‌کنید.</p>
                          <a class="btn">پاسخ</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
              <router-link to="/user-opinion" class="cbtn"
                >ارسال دیدگاه جدید</router-link
              >
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
