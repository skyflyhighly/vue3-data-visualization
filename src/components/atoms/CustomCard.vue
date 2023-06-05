<template>
  <div :class="'w-full p-4 hover:shadow-lg ' + cardClass">
    <div :class="'text-2xl font-bold text-left ' + titleClass">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  title: { type: String, required: false },
  cardClass: {
    type: String,
    required: false,
    default: "bg-white",
  },
  titleClass: {
    type: String,
    required: false,
  },
});
</script>
