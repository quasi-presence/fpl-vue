<template>
  <aside class="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 p-2">
    <UserSidebarLink name="Dashboard" icon="bx bx-home" @click="dashboard" />
    <UserSidebarLink name="Profile" icon="bx bx-user" />
    <UserSidebarLink name="Log Out" icon="bx bx-log-out" @click="logout" />
  </aside>
</template>

<script setup lang="ts">
  import router from '../router';
  import { useUserStore } from '../stores/user';
  import UserSidebarLink from './UserSidebarLink.vue';

  const store = useUserStore();

  function dashboard(): void {
    router.push({ name: 'user' });
  }

  function logout(): void {
    store.logout();
  }
</script>