<script setup>
import { RouterView } from 'vue-router'
import ReloadPrompt from '@/components/ReloadPrompt.vue';
import NavComponent from "@/components/NavComponent.vue";
import { useFadeIn, useFadeOut } from './animate/animate.js';
import TitleBarComponent from '@/components/TitleBarComponent.vue';
import { onMounted } from 'vue';

let overlayNavigator = false;

onMounted(() => {
  if (navigator.windowControlsOverlay.visible) {
    overlayNavigator = true;
  }
})

</script>

<template>
  <header>
    <div class="wrapper">
      <nav-component></nav-component>
      <router-view v-slot="{ Component }">
        <transition @enter="useFadeIn" @leave="useFadeOut" v-bind:css="false" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <TitleBarComponent v-if="overlayNavigator" />
      <reload-prompt />
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  height: 100%;
}

.wrapper {
  height: 100%;
}
</style>
