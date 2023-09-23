<template>
  <div>
    <Headerapp />
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>مربیان</h2>
          </div>
          <div class="col-12">
            <router-link to="/"> خانه </router-link>
            <router-link to="/trainers"> مربیان </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Team Start -->
    <div class="team" dir="rtl">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>مربیان</p>
          <h2>مربیان بدنسازی</h2>
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-md-6 wow fadeInUp box"
            data-wow-delay="0.0s"
            v-for="item in trainers"
            :key="item.id"
          >
            <div class="team-item">
              <div class="team-img">
                <router-link
                  :to="{ name: 'trainerpage', params: { id: item.id } }"
                >
                  <img :src="item.imge" alt="Image" />
                  <div class="team-social">
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                  </div>
                </router-link>
              </div>
              <div class="team-text">
                <h2>{{ item.NameFamily }}</h2>
                <p>مربی دوره {{ item.type }} بدنسازی</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Team End -->

    <!-- Class Timetable Start -->
    <div class="container gym-feature py-5" dir="rtl">
      <div class="d-flex flex-column text-center mb-5">
        <h4 class="display-4 font-weight-bold">
          زمان کلاس‌ها و ساعات کاری مربیان
        </h4>
      </div>
      <div class="tab-class">
        <div class="tab-content">
          <div id="class-all" class="container tab-pane p-0 active">
            <div class="table-responsive">
              <table class="table table-bordered table-lg m-0">
                <thead class="bg-secondary text-white text-center">
                  <tr>
                    <th>زمان</th>
                    <th>شنبه</th>
                    <th>یکشنبه</th>
                    <th>دوشنبه</th>
                    <th>سشنبه</th>
                    <th>چهارشنبه</th>
                    <th>پنجشنبه</th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  <tr v-for="i in days" :key="i.time">
                    <th class="bg-secondary text-white align-middle">
                      {{ i.time }}
                    </th>
                    <td>
                      <h5>{{ i.type1 }}</h5>
                      {{ i.NameFamily1 }}
                    </td>
                    <td>
                      <h5>{{ i.type2 }}</h5>
                      {{ i.NameFamily2 }}
                    </td>
                    <td>
                      <h5>{{ i.type3 }}</h5>
                      {{ i.NameFamily3 }}
                    </td>
                    <td>
                      <h5>{{ i.type4 }}</h5>
                      {{ i.NameFamily4 }}
                    </td>
                    <td>
                      <h5>{{ i.type5 }}</h5>
                      {{ i.NameFamily5 }}
                    </td>
                    <td>
                      <h5>{{ i.type6 }}</h5>
                      {{ i.NameFamily6 }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Class Timetable End -->
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
    days() {
      return this.$store.getters.GetDays
    },
  },
}
</script>
