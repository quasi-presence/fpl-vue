<template>
  <div></div>
</template>

<script setup lang="ts">
  import { useUserStore } from '../stores/user';

  const store = useUserStore();

  function logout(): void {
    store.logout();
  }
</script>
