<template>
  <div>
    <custom-card :title="title">
      <div>
        <apexchart
          :width="width"
          :height="height"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </custom-card>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

import CustomCard from "../atoms/CustomCard.vue";
import apexchart from "vue3-apexcharts";

defineProps({
  title: String,
  width: String,
  height: String,
  series: Array<any>,
  chartOptions: {},
});
</script>
