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
  <h2>Fantasy Points League</h2>

  <div class="grid">
    <div></div>
    <div>
      <input type="email" id="email" name="email" placeholder="Email address" required>
      <input type="password" id="password" name="password" placeholder="Password" required>

      <div class="grid">
        <button v-on:click="joinNow">Join Now</button>
        <button v-on:click="login" class="secondary">Log In</button>
      </div>
    </div>
  </div>
</template>
