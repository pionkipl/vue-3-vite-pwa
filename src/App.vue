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
        <RouterLink to="/camera">Camera</RouterLink>
        <RouterLink to="/device">Device</RouterLink>
        <RouterLink to="/speech">Speech</RouterLink>
      </nav>
      <reload-prompt />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  nav {
    display: flex;
    flex-wrap: wrap;
  }
  nav a {
    margin: 1rem 1rem 0 0;
    padding: 0.5rem;
    background-color: #2c3e50;
    font-weight: 700;

  }
</style>
