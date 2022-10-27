<template>
  <div class="bar" ref="bar">
    <img :src="batman" alt="Batman logo." width="32" height="32" />
  </div>
</template>

<script setup>
  import batman from '@/assets/img/batman.png';
  import { onMounted, ref } from 'vue';

  const bar = ref(null)

  onMounted(() => {
    if ('windowControlsOverlay' in navigator) {
      const { x } = navigator.windowControlsOverlay.getTitlebarAreaRect();
      // Window controls are on the right (like on Windows).
      // Chrome menu is left of the window controls.
      // [ windowControlsOverlay___________________ […] [_] [■] [X] ]
      if (x === 0) {
        bar.value.classList.add('search-controls-right');
      }
          // Window controls are on the left (like on macOS).
          // Chrome menu is right of the window controls overlay.
      // [ [X] [_] [■] ___________________windowControlsOverlay [⋮] ]
      else {
        bar.value.classList.add('search-controls-left');
      }
    } else {
      // When running in a non-supporting browser tab.
      bar.value.classList.add('search-controls-right');
    }
  })

</script>

<style scoped lang="scss">
.bar {
  position: fixed;
  background-image: linear-gradient(90deg, #36c, #131313, 33%, #36c);
  /* Use the environment variable for the left anchoring with a fallback. */
  left: env(titlebar-area-x, 0);
  /* Use the environment variable for the top anchoring with a fallback. */
  top: env(titlebar-area-y, 0);
  /* Use the environment variable for setting the width with a fallback. */
  width: env(titlebar-area-width, 100%);
  /* Use the environment variable for setting the height with a fallback. */
  height: env(titlebar-area-height, 33px);
  -webkit-app-region: drag;
}
</style>
