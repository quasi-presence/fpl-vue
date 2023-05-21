<template>
  <aside class="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 p-2">
    <UserSidebarLink name="Dashboard" icon="bx bx-home" @click="dashboard" />
    <UserSidebarLink name="Profile" icon="bx bx-user" />
    <UserSidebarLink name="Log Out" icon="bx bx-log-out" @click="logout" />
  </aside>
</template>

<script setup lang="ts">
  import { Actions } from '../actions';
  import router from '../router';
  import UserSidebarLink from './UserSidebarLink.vue';

  function dashboard(): void {
    Actions.viewDashboard();
  }

  function logout(): void {
    Actions.logout();
  }
</script>