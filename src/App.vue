<script setup lang="ts">

</script>

<template>
  <main class="hero container-fluid">
    <div class="overlay">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<style>
html, body {
  height: 100%;
}

#app {
  height: 100%;
}

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
