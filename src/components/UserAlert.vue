<template>
  <div class="flex-row bg-white rounded-lg m-4 mb-0 text-center items-center  text-xl"
       :class="{ 'hidden': store.alert.dismissed, 'text-red-500': isError(), 'text-green-600': isSuccess() }">
    <span class="mr-5">{{ store.alert.message }}</span>
    <button type="button" class="rounded-full h-8" @click="dismiss">
      <i class="bx bxs-x-circle text-gray-500"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
  import { Actions } from '../actions';
  import { IUserAlert } from '../interfaces';

  const store = Actions.getStore();

  function isError(): boolean {
    return store.alert.type == 'error';
  }

  function isSuccess(): boolean {
    return store.alert.type == 'success';
  }

  function dismiss(): void {
    Actions.dismissAlert();
  }
</script>
