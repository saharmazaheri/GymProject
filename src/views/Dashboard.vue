<template>
  <div dir="rtl">
    <widgetstate />
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="12" :lg="6">
                <CCard style="padding: 10px">
                  <br />
                  <div
                    v-for="item in Number1"
                    :key="item.title"
                    class="progress-group"
                  >
                    <div class="progress-group-header">
                      <CIcon :icon="item.icon" class="me-2" size="lg" />
                      <span class="title">{{ item.title }}</span>
                      <span class="ms-auto fw-semibold"
                        >{{ item.value }} %</span
                      >
                    </div>
                    <div class="progress-group-bars">
                      <CProgress thin :value="item.value" color="warning" />
                    </div>
                  </div>
                </CCard>
                <CCard>
                  <CCardBody><numberwomen /></CCardBody>
                </CCard>
              </CCol>

              <CCol :sm="12" :lg="6">
                <CCard>
                  <CCardHeader style="padding: 4px 10px">کافی شاپ</CCardHeader>
                  <CCardBody><ChartCoffeeShop /></CCardBody>
                </CCard>
              </CCol>
            </CRow>
            <CRow>
              <CCol :sm="12" :lg="6">
                <CCard>
                  <CCardBody><numbermen /></CCardBody>
                </CCard>
              </CCol>
              <CCol :sm="12" :lg="6">
                <CCard>
                  <CCardBody><numbercourses /></CCardBody>
                </CCard>
                <hr class="mt-0" />
              </CCol>
            </CRow>
            <br />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import widgetstate from './dashboard/widgetstate.vue'
import numberwomen from './dashboard/numberwomen.vue'
import numbermen from './dashboard/numbermen'
import ChartCoffeeShop from './dashboard/ChartCoffeeShop.vue'
import numbercourses from './dashboard/numbercourses.vue'

export default {
  name: 'Dashboard',
  components: {
    widgetstate,
    numberwomen,
    numbermen,
    numbercourses,
    ChartCoffeeShop,
  },
  computed: {
    coffee() {
      return this.$store.getters.GetCoffee
    },
  },
  setup() {
    const Number1 = [
      { title: 'آقایان', icon: 'cil-user', value: 57.43 },
      { title: 'بانوان', icon: 'cil-user-female', value: 42.56 },
    ]

    return {
      Number1,
    }
  },
}
</script>
