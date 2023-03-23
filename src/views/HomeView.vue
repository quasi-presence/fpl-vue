<script setup lang="ts">
import { useUserStore } from '../stores/user'

const store = useUserStore()
const form = { email: null, password: null }

function joinNow() {
  store.create(form.email, form.password)
}

function login() {
  store.login(form.email, form.password)
}
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-cyan-500 text-3xl font-bold italic mt-10">Fantasy Points League</h1>

    <div class="flex flex-row mt-24">
      <div class="w-1/2 md:flex-col"></div>
      <div class="w-1/4 flex flex-col">
        <div class="w-full">
          <input type="email" id="email" placeholder="Email address" class="w-full mb-2 h-10 rounded indent-2" v-model="form.email">
        </div>
        <div class="w-full">
          <input type="password" id="password" placeholder="Password" class="w-full mb-2 h-10 rounded indent-2" v-model="form.password">
        </div>
        <div class="w-full">
          <button v-on:click="joinNow" class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 w-1/2 rounded">Join Now</button>
          <button v-on:click="login" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-1/2 rounded">Log In</button>
        </div>
      </div>
      <div class="w-1/4"></div>
    </div>
  </div>
</template>
