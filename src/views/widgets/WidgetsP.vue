<template>
  <CRow>
    <CCOL>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol :xs="2">
              <CWidgetStatsC
                class="mb-3"
                color="warning"
                inverse
                :progress="{ value: 75 }"
                title="کاربران"
                value="646"
              >
                <template #icon
                  ><CIcon icon="cil-people" height="36"
                /></template>
              </CWidgetStatsC>
            </CCol>
            <CCol :xs="2">
              <CWidgetStatsC
                class="mb-3"
                color="success"
                inverse
                :progress="{ value: 75 }"
                title="کاربران جدید"
                value="53"
              >
                <template #icon
                  ><CIcon icon="cil-user-follow" height="36"
                /></template>
              </CWidgetStatsC>
            </CCol>
            <CCol :xs="2">
              <CWidgetStatsC
                class="mb-3"
                color="warning"
                inverse
                :progress="{ value: 75 }"
                title="Products sold"
                value="1238"
              >
                <template #icon
                  ><CIcon icon="cil-basket" height="36"
                /></template>
              </CWidgetStatsC>
            </CCol>
            <CCol :xs="2">
              <CWidgetStatsC
                class="mb-3"
                color="primary"
                inverse
                :progress="{ value: 75 }"
                title="Returning Visitors"
                value="28%"
              >
                <template #icon
                  ><CIcon icon="cil-chart-pie" height="36"
                /></template>
              </CWidgetStatsC>
            </CCol>
            <CCol :xs="2">
              <CWidgetStatsC
                class="mb-3"
                color="danger"
                inverse
                :progress="{ value: 75 }"
                title="Avg. Time"
                value="5:34:11"
              >
                <template #icon
                  ><CIcon icon="cil-speedometer" height="36"
                /></template>
              </CWidgetStatsC>
            </CCol>
            <CCol :xs="2">
              <CWidgetStatsC
                class="mb-3"
                color="info"
                inverse
                :progress="{ value: 75 }"
                title="کامنت‌ها"
                value="38"
              >
                <template #icon
                  ><CIcon icon="cil-speech" height="36"
                /></template>
              </CWidgetStatsC>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CCOL>
  </CRow>
</template>

<script>
import { getStyle } from '@coreui/utils'
export default {
  name: 'WidgetsP',
  setup() {
    const widgetStatsE = {
      labels: [
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S',
        'M',
      ],
      optionsBar: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
      optionsLine: {
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.4,
          },
          point: {
            radius: 0,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
    }

    return {
      getStyle,
      widgetStatsE,
      widgetProgressIconItems: [
        { color: 'primary', icon: 'cil-puzzle' },
        { color: 'success', icon: 'cil-speedometer' },
        { color: 'danger', icon: 'cil-cursor' },
        { color: 'info', icon: 'cil-drop' },
        { color: 'secondary', icon: 'cil-pencil' },
      ],
    }
  },
}
</script>
