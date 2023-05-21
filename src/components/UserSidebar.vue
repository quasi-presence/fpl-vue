<template>
  <aside class="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 p-2"
         :class="{ hidden: !store.sidebarOpen }">
    <UserSidebarLink name="Dashboard" icon="bx bx-home" @click="dashboard" />
    <UserSidebarLink name="Profile" icon="bx bx-user" @click="profile" />
    <UserSidebarLink name="Log Out" icon="bx bx-log-out" @click="logout" />
  </aside>
</template>

<script setup lang="ts">
  import { Actions } from '../actions';
  import UserSidebarLink from './UserSidebarLink.vue';

  const store = Actions.getState();

  function dashboard(): void {
    Actions.viewDashboard();
  }

  function profile(): void {
    Actions.viewProfile();
  }

  function logout(): void {
    Actions.logout();
  }
</script>