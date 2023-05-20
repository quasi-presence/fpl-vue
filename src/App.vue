<template>
  <main class="h-screen w-screen">
    <component :is="route.meta.layout || 'div'">
      <router-view />
    </component>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
</script>
