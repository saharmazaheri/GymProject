<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>کافی شاپ</h2>
          </div>
          <div class="col-12">
            <a href="">خانه</a>
            <a href="">کافی شاپ</a>
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
                <img :src="item.imge" alt="Image" />
              </div>
              <h3>{{ item.title }}</h3>
              <p>( {{ item.comments }} )</p>
              <br />
              <p>{{ item.price }} تومان</p>
              <br />
              <span>
                <label> تعداد </label>
                <input
                  type="text"
                  class="search_box"
                  v-model="count"
                  style="width: 80px"
                />
                <br />
                <a
                  class="btn btn-default check_out cursor-pointer"
                  @click="AddProduct(item.id)"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
  computed: {
    coffee() {
      return this.$store.getters.GetCoffee
    },
    shopcart() {
      return this.$store.getters.Getshopcart
    },
    Total() {
      return this.$store.getters.GetTotal
    },
  },
  methods: {
    AddProduct(Lid) {
      const zarb = this.coffee[Lid].price * this.count
      let TotalPrice = 0
      this.shopcart.push([
        this.coffee[Lid].imge,
        this.coffee[Lid].title,
        this.coffee[Lid].price,
        this.count,
        zarb,
        TotalPrice,
      ])
      TotalPrice = zarb + zarb

      alert('محصول با موفقیت به سبد خرید اضافه شد')
    },
  },
}
</script>

<style>
.search_box input {
  text-align: right;
  background: #f0f0e9;
  border: medium none;
  color: #b2b2b2;
  font-family: 'BYekan';
  font-size: 12px;
  font-weight: 300;
  height: 35px;
  outline: medium none;
  padding-right: 10px;
  width: 155px;
  background-repeat: no-repeat;
  background-position: 10px;
}
</style>
