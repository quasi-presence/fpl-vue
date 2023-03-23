<script setup lang="ts">

</script>

<template>
  <main class="h-screen w-screen hero">
    <div class="overlay">
      <router-view></router-view>
    </div>
  </main>
</template>

<style>
.hero {
  height: 100%;
  background-image: url("assets/car-racing-g08e7ed3db_1920.jpg");
  background-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height:100%;
  width: 100%;
  background: rgba(0,0,0,0.7);
}
</style>
