<template>
  <div class="device-feature">
    <button @click="vibrate" class="button">Vibrate</button>
  </div>
</template>

<script setup>
  function vibrate() {
    navigator.vibrate([100, 200, 100, 200, 100, 200, 100, 200, 100,
      100, 100, 100, 100, 200, 100, 200, 100, 200, 100, 200, 100, 100, 100,
      100, 100, 200, 100, 200, 100, 200, 100, 200, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 50, 50, 100, 800]);
  }
</script>

<style scoped>
  .device-feature {
    background-color: #2c3e50;
    padding: 2rem;
    margin-top: 1rem;
  }
</style>
