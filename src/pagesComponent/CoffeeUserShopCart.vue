<template>
  <div dir="rtl">
    <!-- Page Header End -->
    <div class="container" id="saharchi">
      <section id="cart_items">
        <div class="container">
          <div class="table-responsive cart_info">
            <table class="table table-condensed">
              <thead>
                <tr class="cart_menu">
                  <td class="image">کـالا</td>
                  <td class="description"></td>
                  <td class="price">قیمت</td>
                  <td class="quantity">تعـداد</td>
                  <td class="total">مجمـوع</td>
                  <td></td>
                </tr>
              </thead>

              <tbody>
                <tr v-for="cart in shopcart" :key="cart.id">
                  <td class="cart_product">
                    <img :src="cart[0]" width="60" height="60" alt="" />
                  </td>
                  <td class="cart_description">
                    <h4>
                      {{ cart[1] }}
                    </h4>
                  </td>
                  <td class="cart_price">
                    <p>{{ cart[2] }}</p>
                  </td>
                  <td class="cart_quantity">
                    <div class="cart_quantity_button">
                      <p>{{ cart[3] }}</p>
                    </div>
                  </td>
                  <td class="cart_total">
                    <p class="cart_total_price">{{ cart[4] }}</p>
                  </td>
                  <td class="cart_delete">
                    <a class="cart_quantity_delete cursor-pointer"
                      ><i class="fa fa-times"></i
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <!--/#cart_items-->

      <section id="do_action">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="total_area">
                <ul>
                  <li>
                    مجمـوع <span>{{ shopcart }} تومان</span>
                  </li>
                </ul>
                <a class="btn btn-default check_out cursor-pointer">پرداخت</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--/#do_action-->
    </div>
  </div>
</template>
<script>
export default {
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
}
</script>

<style>
#cart_items .cart_info {
  border: 1px solid #e6e4df;
  margin-bottom: 50px;
}

#cart_items .cart_info .cart_menu {
  background: #fe980f;
  color: #fff;
  font-size: 16pt;
  font-family: 'BYekan', sans-serif;
  font-weight: normal;
  text-align: center;
}

#cart_items .cart_info .table.table-condensed thead tr {
  height: 51px;
}

#cart_items .cart_info .table.table-condensed tr {
  border-bottom: 1px solid#F7F7F0;
}

#cart_items .cart_info .table.table-condensed tr:last-child {
  border-bottom: 0;
}

.cart_info table tr td {
  border-top: 0 none;
  vertical-align: inherit;
}

#cart_items .cart_info .image {
  padding-right: 30px;
}

#cart_items .cart_info .cart_description h4 {
  margin-bottom: 0;
}

#cart_items .cart_info .cart_description h4 a {
  color: #363432;
  font-family: 'BYekan', sans-serif;
  font-size: 16pt;
  font-weight: normal;
}

#cart_items .cart_info .cart_description p {
  color: #696763;
}

#cart_items .cart_info .cart_price p {
  color: #696763;
  font-size: 18px;
}

#cart_items .cart_info .cart_total_price {
  color: #fe980f;
  font-size: 16pt;
}
</style>
