<template>
  <div>
    <custom-card :title="title">
      <div class="flex justify-between">
        <span class="text-lg font-bold text-medium-green">Experimental</span>
        <span class="text-lg font-bold text-indian-red">Control</span>
      </div>
      <apexchart
        :width="width"
        :options="chartOptions"
        :series="series"
      ></apexchart>
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
  series: Array<Number>,
  chartOptions: {},
});
</script>
