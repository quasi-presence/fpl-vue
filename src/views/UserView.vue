<template>
  <h2>Fantasy Points League</h2>
  <article>{{ store.currentUser?.email }}</article>

  <button type="button"
          v-on:click="logout"
          class="bg-cyan-500 hover:bg-cyan-600 text-white rounded-3xl shadow-xl w-40 px-10 py-2">
          LogOut
  </button>
</template>

<script setup lang="ts">
  import { useUserStore } from '../stores/user';

  const store = useUserStore();

  function logout(): void {
    store.logout();
  }
</script>
