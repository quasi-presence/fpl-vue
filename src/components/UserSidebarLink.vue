<template>
  <a href="#" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-300 hover:text-cyan-600">
    <span class="text-2xl"><i :class="iconClass"></i></span>
    <span>{{ props.name }}</span>
  </a>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    name: String,
    icon: String
  });

  const iconClass: string = 'bx ' + props.icon;
</script>