<template>
  <CRow>
    <CCol :xs="3">
      <CWidgetStatsB
        class="mb-3"
        color="warning"
        inverse
        :progress="{ value: 75 }"
        text="تعداد کل کاربران"
        title="کاربران"
        value="646"
      />
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsB
        class="mb-3"
        color="success"
        inverse
        :progress="{ value: 75 }"
        text="تعداد مربیان"
        title="مربیان"
        value="12"
      />
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsB
        class="mb-3"
        color="info"
        inverse
        :progress="{ value: 75 }"
        text="تعداد کامنت‌ها"
        title="کامنت‌ها"
        value="5"
      />
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsB
        class="mb-3"
        color="danger"
        inverse
        :progress="{ value: 75 }"
        text="درصد استقبال از کافی شاپ"
        title="کافی شاپ"
        value="67.5 %"
      />
    </CCol>
  </CRow>
</template>
