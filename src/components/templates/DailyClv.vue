<template>
  <div class="w-full">
    <custom-chart
      width="100%"
      height="300"
      :series="series"
      :chart-options="chartOptions"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import CustomChart from "../molecules/CustomChart.vue";
import DashboardService from "../../services/DashboardService";

import { ChartData, DailyOfferData } from "../../Types";

const dailyData = reactive<ChartData[]>([]);
const series = reactive<DailyOfferData[]>([
  {
    name: "Experimental Group",
    data: [],
  },
  {
    name: "Control",
    data: [],
  },
]);
const chartOptions = {
  chart: {
    type: "line",
    foreColor: "#999",
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06,
    },
  },
  colors: ["#3CB371", "#CD5C5C"],
  stroke: {
    curve: "smooth",
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    strokeColor: "#fff",
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6,
    },
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      offsetX: 14,
      offsetY: -5,
    },
    tooltip: {
      enabled: true,
    },
  },
  grid: {
    padding: {
      left: -5,
      right: 5,
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
  },
  fill: {
    type: "solid",
    fillOpacity: 0.7,
  },
};

const generateDayWiseTimeSeries = (dailyData: ChartData[]) => {
  let i = 0;
  while (i < dailyData.length) {
    series[0].data.push([dailyData[i].label, dailyData[i].ctrlSum]);
    series[1].data.push([dailyData[i].label, dailyData[i].expSum]);
    i++;
  }
};

onMounted(async () => {
  const chartData = await DashboardService.getChart();
  dailyData.push(...chartData.data);
  generateDayWiseTimeSeries(dailyData);
});
</script>
