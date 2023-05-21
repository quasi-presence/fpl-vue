<template>
  <div class="w-full p-4 flex flex-row justify-center">
    <UserProfileCard :user="store.currentUser" />
  </div>
</template>

<script setup lang="ts">
  import { Actions } from '../actions';
  import UserProfileCard from '../components/UserProfileCard.vue';

  const store = Actions.getState();
</script>
