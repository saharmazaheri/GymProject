<template>
  <CRow>
    <CCol :sm="6">
      <div class="border-start border-start-3 border-start-info py-1 px-3 mb-3">
        <div class="text-medium-emphasis small">آقایان سانس آزاد</div>
        <div class="fs-5 fw-semibold">96 نفر</div>
      </div>
    </CCol>
    <CCol :sm="6">
      <div
        class="border-start border-start-3 border-start-danger py-1 px-3 mb-3"
      >
        <div class="text-medium-emphasis small">
          آقایان دوره‌های عمومی و خصوصی
        </div>
        <div class="fs-5 fw-semibold">244 نفر</div>
      </div>
    </CCol>
  </CRow>
  <hr class="mt-0" />
  <br />
  <div
    v-for="item in NumberOfmen"
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
    const NumberOfmen = [
      { title: 'شنبه', value1: 15, value2: 34 },
      { title: 'یکشنبه', value1: 23, value2: 39 },
      { title: 'دوشنبه', value1: 16, value2: 35 },
      { title: 'سشنبه', value1: 20, value2: 40 },
      { title: 'چهارشنبه', value1: 12, value2: 44 },
      { title: 'پنجشنبه', value1: 10, value2: 52 },
    ]
    return {
      NumberOfmen,
    }
  },
}
</script>
