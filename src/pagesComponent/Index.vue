<template>
  <div>
    <Headerapp />
    <!-- Hero Start -->
    <div class="hero">
      <div class="container-fluid">
        <div class="row align-items-center" dir="rtl">
          <div class="col-sm-12 col-md-6">
            <br />
            <br />
            <div class="hero-text">
              <h1 class="navbar-brand">H<span>ero</span> fit</h1>
              <p>
                در محیطی امن و با کادر مربیان با تجربه، مسلط به علم ورزشی و
                توانمند در خدمت شما هستیم.
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 d-none d-md-block">
            <div class="hero-image">
              <img
                src="../assets/img/index/gymp2.jpg"
                alt="Hero Image"
                class="index-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero End -->
    <!-- About Start -->
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
      <div class="container">
        <div class="row align-items-center" dir="rtl">
          <div class="col-lg-5 col-md-6">
            <div class="about-img">
              <img
                src="../assets/img/index/gym1.jpg"
                alt="Image"
                style="border-radius: 0.375rem"
              />
            </div>
          </div>
          <div class="col-lg-7 col-md-6">
            <div class="section-header text-center">
              <p>درباره هیرو</p>
              <h2>به هیرو خوش آمدید</h2>
            </div>
            <div class="about-text text-left">
              <p>
                تناسب اندام به معنای بهتر بودن از شخص دیگر نیست ... بلکه بهتر
                بودن از گذشته است. تیم بزرگ هیرو فیت با در دست داشتن متخصصین با
                تجربه و دلسوز به شما عزیزان کمک خواهد کرد تا از گذشته خود پیشی
                بگیرید و در این راه در دام سود جویان گرفتار نشوید.
              </p>
              <router-link to="/about-us" class="btn">ادامه مطلب</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->
    <!-- Blog Start -->
    <div class="blog" dir="rtl">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn text-center"
          data-wow-delay="0.1s"
        >
          <p>همه تلاشمون رو کردیم تا کامل‌ترین باشیم</p>
          <h2>ویژگی‌های هیرو فیت</h2>
        </div>
        <div style="display: flex">
          <div class="index" style="margin-left: 15px">
            <img class="index-img1" src="../assets/img/index/i1.png" />
            <h5 style="color: rgb(126, 29, 217)">
              مربی بدنسازی و پشتیبانی اختصاصی
            </h5>
            <p>
              هر سوالی که نسبت به انجام برنامه بدنسازیتان داشته باشید به‌راحتی
              می‌توانید از مربیان سوالاتتان را بپرسید، کارشناسان ورزشی‌ما در
              سریعترین زمان ممکن پاسخگوی شما خواهند بود.
            </p>
          </div>
          <div class="index" style="margin-left: 15px">
            <img class="index-img1" src="../assets/img/index/i2.png" />
            <h5 style="color: rgb(231, 66, 66)">
              برنامه کاملا اختصاصی برای شما
            </h5>
            <p>
              اطلاعات جسمانی، تیپ بدنی، محدودیت‌های حرکتی و جسمانی و سابقه ورزشی
              از مواردی است که روی برنامه بدنسازی تاثیر می‌گذارد. برنامه بدنسازی
              هیرو تمامی این موارد را در نظر میگیرد و یک برنامه کاملا شخصی و
              اختصاصی به شما ارائه می‌دهد.
            </p>
          </div>
          <div class="index" style="margin-left: 15px">
            <img class="index-img1" src="../assets/img/index/i3.png" />
            <h5 style="color: rgb(24, 196, 130)">بدون محدودیت زمانی و مکانی</h5>
            <p>
              برنامه بدنسازی هیرو کاملا آنلاین است و شما در هر زمان و هر مکانی
              که باشید خیلی راحت می‌توانید از آن استفاده کنید. چه در باشگاه یا
              در خانه، بدون وسیله یا با وسیله میتوانید برنامه خودتان را مشخص
              کنید و بدون محدویت در زمان و مکان ورزش کنید.
            </p>
          </div>
          <div class="index" style="margin-left: 15px">
            <img class="index-img1" src="../assets/img/index/i4.png" />
            <h5 style="color: rgb(57, 158, 229)">راهنمای کامل حرکات ورزشی</h5>
            <p>
              هر مربی در صفحه شخصی خود، برای شما آموزش تمام حرکات را با استفاده
              از ویدیو قرار داده است، تا شما در سریعترین زمان بتوانید به برنامه
              خود مسلط شوید.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Blog End -->
    <div class="blog" dir="rtl">
      <div class="container">
        <div style="display: flex">
          <div>
            <div
              class="section-header text-center wow zoomIn"
              data-wow-delay="0.1s"
              style="margin-top: 30px"
            >
              <p>معرفی کافی شاپ</p>
              <h2>کافی شاپ هیرو</h2>
            </div>
            <div style="text-align: justify">
              <p>
                کافی شاپ باشگاه ورزشی هیرو با ارائه انواع میوه‌های تازه و
                نوشیدنی‌های انرژی‌زا ورزشی، انواع‌دمنوش، غذاهای رژیمی و… آماده
                ارایه خدمات به شماست. در کافی شاپ هیرو بهترین‌ها را نوش جان
                کنید. قبل ورزش قهوه اسپرسو بنوشید چون سوخت و ساز را بالا می‌برد
                و باعث چربی سوزی بیشتر می‌شود. حین ورزش حتما آب بخورید چون
                نوشیدن آب برای بدن شما بسیار ضروری است. بعد تمرین نوشیدن یک
                آبمیوه تازه و طبیعی لذت زیادی دارد و همچنین فواید بی نظیری دارد.
              </p>
            </div>
          </div>
          <div>
            <img class="index-img2" src="../assets/img/coffee/coffeeP1.jpg" />
          </div>
        </div>
      </div>
    </div>
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
}
</script>
<style>
.index-img {
  border-radius: 0.375rem;
  margin-right: 40px;
  margin-top: 40px;
}
.index {
  width: 600px;
  text-align: justify;
  padding: 8px 8px;
}
.index-img1 {
  width: 80px;
  height: 80px;
}
.index-img2 {
  width: 500px;
  height: 300px;
  border-radius: 0.375rem;
  margin-right: 50px;
}
</style>
