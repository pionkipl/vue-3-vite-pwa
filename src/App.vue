<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ReloadPrompt from '@/components/ReloadPrompt.vue';

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/geolocation">Map</RouterLink>
      </nav>
      <reload-prompt />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  nav a {
    margin-right: 1rem;
  }
</style>
