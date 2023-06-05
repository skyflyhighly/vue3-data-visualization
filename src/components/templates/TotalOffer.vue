<template>
  <custom-card
    cardClass="bg-medium-green"
    titleClass="text-white"
    title="Total Offers"
  >
    <div class="text-6xl font-bold text-white mt-[35%]">
      {{ totalOffers }}
    </div>
  </custom-card>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import CustomCard from "../atoms/CustomCard.vue";
import DashboardService from "../../services/DashboardService";

const totalOffers = ref(0);

onMounted(async () => {
  const total = await DashboardService.getWidgets();
  totalOffers.value = total.data.totalOffers;
});
</script>
