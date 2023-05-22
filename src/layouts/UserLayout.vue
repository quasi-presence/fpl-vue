<template>
  <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
  <div class="min-h-screen w-full bg-gray-100 text-gray-700">
    <UserNavbar />
    <div class="flex">
      <UserSidebar />
      <div class="w-full flex flex-col">
        <UserAlert />
      <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import UserNavbar from '../components/UserNavbar.vue';
  import UserSidebar from '../components/UserSidebar.vue';
  import UserAlert from '../components/UserAlert.vue';
</script>
