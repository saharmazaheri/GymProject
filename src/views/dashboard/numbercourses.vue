<template>
  <CRow>
    <CCol :sm="6">
      <div
        class="border-start border-start-3 border-start-success py-1 px-3 mb-3"
      >
        <div class="text-medium-emphasis small">دوره‌های عمومی</div>
        <div class="fs-5 fw-semibold">280 نفر</div>
      </div>
    </CCol>
    <CCol :sm="6">
      <div
        class="border-start border-start-3 border-start-primary py-1 px-3 mb-3"
      >
        <div class="text-medium-emphasis small">دوره‌های خصوصی</div>
        <div class="fs-5 fw-semibold">174 نفر</div>
      </div>
    </CCol>
  </CRow>

  <hr class="mt-0" />
  <br />
  <div v-for="item in Courses" :key="item.title" class="progress-group mb-4">
    <div class="progress-group-prepend">
      <span class="text-medium-emphasis small">{{ item.title }}</span>
    </div>
    <div class="progress-group-bars">
      <CProgress thin color="success" :value="item.value1" />
      <CProgress thin color="primary" :value="item.value2" />
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const Courses = [
      { title: 'آقایان', value1: 65.57, value2: 34.42 },
      { title: 'بانوان', value1: 58.57, value2: 41.42 },
    ]

    return {
      Courses,
    }
  },
}
</script>
