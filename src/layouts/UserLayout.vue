<template>
    <div>
      <UserSidebar />
      <slot></slot>
    </div>
</template>

<script setup lang="ts">
  import UserSidebar from '../components/UserSidebar.vue';
</script>
