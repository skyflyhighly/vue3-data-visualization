<template>
  <pie-chart
    width="300"
    :series="totalRepeaters"
    :chart-options="chartOptions"
  />
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import PieChart from "@/components/molecules/CustomTotalChart.vue";
import DashboardService from "../../services/DashboardService";

const totalRepeaters = ref<number[]>([]);

onMounted(async () => {
  const total = await DashboardService.getWidgets();
  totalRepeaters.value.push(total.data.totalCLVCtrl);
  totalRepeaters.value.push(total.data.totalCLVExp);
});

const chartOptions = {
  chart: {
    type: "donut",
  },
  legend: false,
  labels: ["Control", "Experimental"],
  colors: ["#CD5C5C", "#3CB371"],
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            label: "Total Repeater",
            fontSize: "16px",
            fontWeight: "bold",
            color: "black",
          },
        },
      },
    },
  },
};
</script>

<style lang="scss">
.apexcharts-legend {
  align-items: flex-start;
}
</style>
