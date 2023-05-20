<template>
    <div>
      <UserSidebar />
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <UserNavbar />
        <slot></slot>
      </div>
    </div>
</template>

<script setup lang="ts">
  import UserSidebar from '../components/UserSidebar.vue';
  import UserNavbar from '../components/UserNavbar.vue';
</script>
