<template>
  <div class="device-feature">
    <h2>Battery</h2>
    <p>Status: {{ batteryCharging ? 'Charging' : 'Not charging' }}</p>
    <p style="margin-bottom: 1rem">Level: {{ batteryLevel * 100 }}%</p>
    <button @click="vibrate" class="button">Vibrate</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  function vibrate() {
    navigator.vibrate([100, 200, 100, 200, 100, 200, 100, 200, 100,
      100, 100, 100, 100, 200, 100, 200, 100, 200, 100, 200, 100, 100, 100,
      100, 100, 200, 100, 200, 100, 200, 100, 200, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 50, 50, 100, 800]);
  }

  let batteryCharging = ref(null);
  let batteryLevel = ref(null);

  let batteryPromise;

  function getBatteryStatus() {
    if ('getBattery' in navigator) {
      batteryPromise = navigator.getBattery();
    } else {
      batteryPromise = Promise.resolve(navigator.battery);
    }

    batteryPromise.then(battery => {
      batteryCharging.value = battery.charging;
      batteryLevel.value = battery.level;
      battery.addEventListener('levelchange', (e) => {
        batteryLevel.value = e.currentTarget.level;
      });
      battery.addEventListener('chargingchange', (e) => {
        batteryCharging.value = e.currentTarget.charging
      });
    });
  }

  getBatteryStatus();
</script>

<style scoped>
  .device-feature {  background-color: #2c3e50;
    padding: 2rem;
    margin-top: 1rem;

  }
</style>
