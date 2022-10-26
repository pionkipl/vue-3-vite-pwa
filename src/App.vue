<script setup>
import { RouterView } from 'vue-router'
import ReloadPrompt from '@/components/ReloadPrompt.vue';
import NavComponent from "@/components/NavComponent.vue";
import { useFadeIn, useFadeOut } from './animate/animate.js';

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
