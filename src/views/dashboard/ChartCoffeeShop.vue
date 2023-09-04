<template>
  <CChartDoughnut :data="defaultData" />
</template>

<script>
import { CChartDoughnut } from '@coreui/vue-chartjs'
export default {
  name: 'ChartCoffeeShop',
  components: { CChartDoughnut },
  computed: {
    defaultData() {
      return {
        labels: ['انواع قهوه', 'انواع شیر', 'انواع آیس', 'انواع کوکی'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [42, 14, 36, 8],
          },
        ],
      }
    },
  },
}
</script>
