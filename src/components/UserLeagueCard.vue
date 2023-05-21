<template>
  <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
    <div class="mb-8">
      <img class="object-center object-cover rounded-full h-36 w-36"
        :src="props.league?.imageUrl"
        alt="photo">
    </div>
    <div class="text-center">
      <p class="text-xl text-gray-700 font-bold mb-2">{{ props.league?.name }}</p>
      <p class="text-base text-gray-400 font-normal">Members: {{  props.league?.memberCount }}</p>
      <p class="text-base text-gray-400 font-normal">Your Rank: {{  props.league?.position }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, PropType } from 'vue';
  import { ILeague } from '../interfaces';

  const props = defineProps({
    league: { type: Object as PropType<ILeague>, default: {} },
  });
</script>