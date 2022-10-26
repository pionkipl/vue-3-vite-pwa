<script setup>
import { useRegisterSW } from 'virtual:pwa-register/vue'

const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW()

const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <div
      v-if="offlineReady || needRefresh"
      class="pwa-toast"
      :class="{ready: offlineReady || needRefresh}"
      role="alert"
  >
    <div class="message">
      <span v-if="offlineReady">
        App ready to work offline
      </span>
      <span v-else>
        New content available, click on reload button to update.
      </span>
    </div>
    <div class="flex">
      <button
          @click="updateServiceWorker()"
          class="button bg-teal-400 text-black">
        Reload
      </button>
      <button @click="close"
              class="button bg-teal-400 text-black">
        Close
      </button>
    </div>

  </div>
</template>

<style lang="scss">
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 99999999999999;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: #2c3e50;
  color: #fff;
  font-size: 24px;
  max-width: 520px;
  width: 100%;
  transform: translateY(120%);
  transition: all 0.5s;

  @media screen and (max-width: 500px) {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  &.ready {
    transform: translateY(0);
  }
}
.pwa-toast .message {
  margin-bottom: 8px;
}
.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 35px;
  border-radius: 2px;
  padding: 5px 15px;
  font-size: 28px;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
}
</style>
