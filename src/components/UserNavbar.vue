<template>
  <header class="flex w-full items-center justify-between border-b-2 border-gray-200 p-2">
    <div class="flex items-center space-x-2">
      <button type="button" class="text-3xl" @click="toggleSidebar">
        <i class="bx bx-menu mt-1"></i>
      </button>
      <div class="text-xl text-cyan-500">Fantasy Points League</div>
    </div>

    <div>
      <button type="button" class="h-9 w-9 overflow-hidden -px-10 rounded-full" @click="toggleProfileMenu">
        <span class="text-2xl"><i class="bx bxs-user"></i></span>
      </button>

      <div class="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md"
           :class="{ hidden: !store.profileMenuOpen }">
        <div class="flex flex-col space-y-3 p-2">
          <button class="flex items-center space-x-2 transition hover:text-cyan-600" @click="profile">
            <span class="text-2xl"><i class="bx bx-user"></i></span>
            <span>Profile</span>
          </button>
          <button class="flex items-center space-x-2 transition hover:text-cyan-600" @click="logout">
            <span class="text-2xl"><i class="bx bx-log-out"></i></span>
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { Actions } from '../actions';

  const store = Actions.getStore();

  function toggleSidebar(): void {
    Actions.toggleSidebar();
  }

  function toggleProfileMenu(): void {
    Actions.toggleProfileMenu();
  }

  function logout(): void {
    Actions.logout();
  }

  function profile(): void {
    Actions.viewProfile();
  }
</script>
