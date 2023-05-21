<template>
    <div class="flex flex-col items-center mb-8">
      <img src="/public/fpl_logo_flare.png" width="150" />
      <h1 class="text-2xl text-cyan-400 font-bold italic">Fantasy Racing League</h1>
    </div>

    <form class="flex flex-col items-center text-center space-y-4">
      <input type="email"
             placeholder="Email address"
             v-model="credentials.email"
             class="rounded-3xl border-none shadow-lg outline-none w-80 px-6 py-2" />
      <input type="password"
             placeholder="Password"
             v-model="credentials.password"
             class="rounded-3xl border-none shadow-lg outline-none w-80 px-6 py-2" />
      <div>
        <button type="button"
                v-on:click="joinNow"
                class="bg-green-500 hover:bg-green-600 text-white rounded-3xl shadow-xl w-40 px-10 py-2">
          Join Now
        </button>
        <button type="button"
                v-on:click="login"
                class="bg-cyan-500 hover:bg-cyan-600 text-white rounded-3xl shadow-xl w-40 px-10 py-2">
          Log In
        </button>
      </div>
    </form>
</template>

<script setup lang="ts">
  import { Actions } from '../actions';

  const credentials = { email: null, password: null };

  function joinNow(): void {
    Actions.createUser(credentials.email, credentials.password);
  }

  function login(): void {
    Actions.login(credentials.email, credentials.password);
  }
</script>
