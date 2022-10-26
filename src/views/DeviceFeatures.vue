<template>
  <div class="device-feature" :class="{pad: !batteryCharging}">
    <h1 class="text-xl md:text-3xl mb-5">Device features</h1>
    <button @click="vibrate" class="button bg-teal-400 text-black">Vibrate</button>
    <h2 class="text-xl md:text-3xl mb-2">Battery</h2>
    <p class="text-xl md:text-3xl mb-2">Status: <span :class="[{'text-lime-400': batteryCharging}, {'text-pink-400': !batteryCharging}]">{{ batteryCharging ? 'Charging' : 'Not charging' }}</span></p>
    <p v-if="!batteryCharging" class="text-xl md:text-3xl mb-2">Battery Left: <span class="text-teal-400">{{ batteryDischargingTime !== null ? batteryDischargingTime / 60 : 'Estimating...' }} minutes left</span></p>
    <p v-if="batteryCharging" class="text-xl md:text-3xl mb-2">Battery to fully charged: <span class="text-teal-400">{{ batteryChargingTime !== null ? batteryChargingTime / 60 : 'Estimating...' }} minutes</span></p>

    <p v-if="!batteryCharging" class="text-xl md:text-2xl font-bold">Level: {{ batteryLevel * 100 }}%</p>
    <battery-component :battery="batteryLevel" v-else />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import BatteryComponent from "../components/BatteryComponent.vue";

  function vibrate() {
    navigator.vibrate([100, 200, 100, 200, 100, 200, 100, 200, 100,
      100, 100, 100, 100, 200, 100, 200, 100, 200, 100, 200, 100, 100, 100,
      100, 100, 200, 100, 200, 100, 200, 100, 200, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 50, 50, 100, 800]);
  }

  let batteryCharging = ref(null);
  let batteryLevel = ref(null);
  let batteryChargingTime = ref(null);
  let batteryDischargingTime = ref(null);

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
      battery.addEventListener('chargingtimechange', (e) => {
        batteryChargingTime.value = e.currentTarget.chargingTime
        console.log('chargingtime', e)
      });
      battery.addEventListener('dischargingtimechange', (e) => {
        batteryDischargingTime.value = e.currentTarget.dischargingTime
        console.log('discharging', e)
      });
    });
  }

  getBatteryStatus();
</script>

<style scoped>
  .device-feature {
    background-color: #2c3e50;
    padding: 2rem 2rem 0 2rem;
    margin-top: 1rem;
  }

  .pad {
    padding: 2rem;
  }
</style>
