<template>
  <div class="camera-view">
    <h1 class="text-3xl">Video:</h1>
    <div class="camera-view__video">
      <div class="camera-view__video-container">
        <video ref="videoRef"></video>
        <div class="camera-view__video-bg"></div>
      </div>
      <div class="camera-view__controls">
        <button @click="startCamera"
                class="button bg-amber-400 text-black">Start camera</button>
        <button @click="pause"
                class="button bg-pink-400 text-black">Stop</button>
        <button class="button bg-lime-400 text-black change-camera" @click="toggleCamera">Change camera</button>
        <button @click="toggleBlur"
                class="button bg-rose-400 text-black toggle-blur">Blur</button>
        <button @click="toggleSepia"
                class="button bg-rose-400 text-black toggle-sepia"
        >Sepia</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onUnmounted } from 'vue';

  const constraints = {
    audio: false,
    video: {
      maxWidth: 1920,
      maxHeight: 1080,
      facingMode: "user"
    }
  };

  let video = null;

  const startCamera = () => {
    if (video === null) {
      navigator.mediaDevices.getUserMedia(constraints)
          .then((mediaStream) => {
            video = document.querySelector('video');
            video.srcObject = mediaStream;
            video.onloadedmetadata = () => {
              video.play();
            };
          })
          .catch((err) => {
            // always check for errors at the end.
            console.error(`${err.name}: ${err.message}`);
          });
    }
  }

  const videoRef = ref(null)

  const toggleSepia = () => {
    videoRef.value.classList.toggle('sepia')
  }

  const toggleBlur = () => {
    videoRef.value.classList.toggle('blur')
  }

  const toggleCamera = () => {
    if (constraints.video.facingMode === 'user') {
      constraints.video.facingMode = 'environment';
      pause();
      startCamera();
    } else {
      constraints.video.facingMode = 'user';
      pause();
      startCamera();
    }
  }

  const pause = () => {
    if (video && video.srcObject !== null) {
      for (const track of video.srcObject.getTracks()) {
        track.stop();
      }
      video.srcObject = null;
      video = null;
    }
  }


  onUnmounted(() => {
    if (video && video.srcObject !== null) {
      pause();
    }
  })
</script>

<style scoped lang="scss">
  .camera-view {
    background-color: #2c3e50;
    padding: 2rem;
    margin-top: 1rem;

    .sepia {
      filter: sepia(1);
    }

    .blur {
      filter: blur(5px);
    }

    &__video {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 800px) {
        flex-direction: column;
      }
    }

    &__controls {
      display: flex;
      flex-direction: column;

      button {
        margin-bottom: 1rem;
        border: none;
        padding: 1rem 2rem;
        font-size: 1.8rem;
        cursor: pointer;

        @media screen and (max-width: 989px) {
          padding: 5px 10px;
          font-size: 1.2rem;
        }
      }
    }

    &__video-container {
      position: relative;
    }

    &__video-bg {
      top: 0;
      left: 0;
      width: 100%;
      position: absolute;
      height: 100%;
      z-index: 1;
    }

    video {
      //object-fit: fit;
      width: 100%;
      max-width: 500px;
    }
  }
</style>
