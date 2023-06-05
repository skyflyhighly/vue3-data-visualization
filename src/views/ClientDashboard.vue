<template>
  <div class="dashboard">
    <div class="flex gap-4 mt-9">
      <total-offer />
      <total-repeater />
      <total-clv />
    </div>
    <div class="flex gap-4 mt-9">
      <daily-offer />
    </div>
    <div class="flex gap-4 mt-9">
      <daily-clv />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TotalRepeater from "@/components/templates/TotalRepeater.vue";
import TotalOffer from "@/components/templates/TotalOffer.vue";
import TotalClv from "@/components/templates/TotalClv.vue";
import DailyOffer from "@/components/templates/DailyOffer.vue";
import DailyClv from "@/components/templates/DailyClv.vue";
</script>
<style lang="scss">
.apexcharts-legend {
  align-items: flex-start;
}
</style>
