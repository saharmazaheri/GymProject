<template>
  <div>
    <Headerapp />
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>کافی شاپ</h2>
          </div>
          <div class="col-12">
            <router-link to="/"> خانه </router-link>
            <router-link to="/coffee-shop"> کافی شاپ </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Service Start -->
    <div class="service" dir="rtl">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>منو کافه</p>
          <h2>مشاهده منو کافه</h2>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.0s"
            v-for="item in coffee"
            :key="item.id"
          >
            <div class="service-item active">
              <div class="service-icoon">
                <img :src="item.imge" />
              </div>
              <h3>{{ item.title }}</h3>
              <p>( {{ item.comments }} )</p>
              <br />
              <p>{{ item.price }} تومان</p>
              <br />
              <span>
                <label style="margin-left: 5px"> تعداد </label>
                <input type="text" style="width: 60px" />
                <br />
                <a
                  class="btn btn-default check_out cursor-pointer"
                  @click="AddProduct()"
                  ><i class="fa fa-shopping-cart"></i>
                  افـزودن به سبـد خریـد
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Service End -->
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
    coffee() {
      return this.$store.getters.GetCoffee
    },
  },
  methods: {
    AddProduct() {
      alert('محصول با موفقیت به سبد خرید اضافه شد')
    },
  },
}
</script>
