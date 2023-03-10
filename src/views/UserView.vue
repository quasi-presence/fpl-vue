<script setup lang="ts">
import { useUserStore } from '../stores/user'

const store = useUserStore()
</script>

<template>
  <h2>Fantasy Points League</h2>
  <article>{{ store.currentUser.email }}</article>
</template>
