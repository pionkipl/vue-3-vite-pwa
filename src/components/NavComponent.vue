<template>
  <nav>
    <RouterLink class="bg-teal-300 text-black" to="/">Home</RouterLink>
    <RouterLink class="bg-rose-300 text-black" to="/geolocation">Map</RouterLink>
    <RouterLink class="bg-amber-300 text-black" to="/camera">Camera</RouterLink>
    <RouterLink class="bg-pink-300 text-black" to="/device">Device</RouterLink>
    <RouterLink class="bg-lime-300 text-black" to="/speech">Speech</RouterLink>
  </nav>
</template>

<script>
export default {
  name: "NavComponent"
}
</script>

<style scoped>
nav {
  display: flex;
  flex-wrap: wrap;
}
nav a {
  margin: 1rem 1rem 0 0;
  padding: 0.5rem;
  /*background-color: #2c3e50;*/
  font-weight: 700;

}
</style>
