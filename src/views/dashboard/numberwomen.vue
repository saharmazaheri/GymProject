<template>
  <CRow>
    <CCol :sm="6">
      <div class="border-start border-start-3 border-start-info py-1 px-3 mb-3">
        <div class="text-medium-emphasis small">بانوان سانس آزاد</div>
        <div class="fs-5 fw-semibold">40 نفر</div>
      </div>
    </CCol>
    <CCol :sm="6">
      <div
        class="border-start border-start-3 border-start-danger py-1 px-3 mb-3"
      >
        <div class="text-medium-emphasis small">
          بانوان دوره‌های عمومی و خصوصی
        </div>
        <div class="fs-5 fw-semibold">210 نفر</div>
      </div>
    </CCol>
  </CRow>
  <hr class="mt-0" />
  <div
    v-for="item in NumberOfWomen"
    :key="item.title"
    class="progress-group mb-4"
  >
    <div class="progress-group-prepend">
      <span class="text-medium-emphasis small">{{ item.title }}</span>
    </div>
    <div class="progress-group-bars">
      <CProgress thin color="info" :value="item.value1" />
      <CProgress thin color="danger" :value="item.value2" />
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const NumberOfWomen = [
      { title: 'شنبه', value1: 8, value2: 40 },
      { title: 'یکشنبه', value1: 3, value2: 37 },
      { title: 'دوشنبه', value1: 12, value2: 29 },
      { title: 'سشنبه', value1: 5, value2: 39 },
      { title: 'چهارشنبه', value1: 10, value2: 40 },
      { title: 'پنجشنبه', value1: 2, value2: 25 },
    ]
    return {
      NumberOfWomen,
    }
  },
}
</script>
