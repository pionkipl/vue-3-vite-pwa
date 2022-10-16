<template>
  <div class="geo">
    <section class="static" v-if="whatDeviceType === 'desktop'">
      <h2>Static - for desktop</h2>
      <p>Longtitude - {{ longitude }}</p>
      <p>Latitude - {{ latitude }}</p>
    </section>
    <section v-else class="dynamic">
      <div class="dynamic-buttons">
        <button @click="clearWatch(idPosition)">Don't Geo</button>
      </div>
      <h2>Dynaminc - for mobile</h2>
      <p>Longtitude - {{ longitudeDynamic }}</p>
      <p>Latitude - {{ latitudeDynamic }}</p>
    </section>
    <section class="map">
      <leaflet-map v-if="whatDeviceType === 'desktop'" :long="longitude" :lat="latitude"></leaflet-map>
      <leaflet-map v-else :long="longitudeDynamic" :lat="latitudeDynamic"></leaflet-map>
    </section>
  </div>
</template>

<script setup>
  import LeafletMap from '@/components/LeafletMap.vue';
  import { ref } from 'vue';
  const latitude = ref(null);
  const longitude = ref(null);
  const longitudeDynamic = ref(null);
  const latitudeDynamic = ref(null);

  const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
    }
    return "desktop";
  };

  const whatDeviceType = deviceType();

  let idPosition = null;

  function getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude
    })
  }

  if (whatDeviceType === 'desktop') {
    getLocation()
  } else {
    idPosition = navigator.geolocation.watchPosition(position => {
          console.log(position)
          longitudeDynamic.value = position.coords.longitude;
          latitudeDynamic.value = position.coords.latitude;
        }, error => {
          locationError(error)
        },{
          timeout: 2000,
          maximumAge: 20000,
          enableHighAccuracy: true
        }
    )
  }

  function clearWatch(id) {
    navigator.geolocation.clearWatch(id)
  }

  function locationError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        return "User denied the request for geolocation.";
      case error.POSITION_UNAVAILABLE:
        return "Location information is currently unavailable.";
      case error.TIMEOUT:
        return "Request for user location timed out.";
      case error.UNKNOWN_ERROR:
        return "An unknown error occurred.";
    }
  }
</script>

<style scoped lang="scss">
  .geo {
    margin-top: 2rem;
    p {
      font-size: 3rem;

      @media screen and (max-width: 1000px) {
        font-size: 1rem;
      }
    }

    .static {
      background-color: #2c3e50;
      padding: 1rem;
    }

    .dynamic {
      background-color: #00bd7e;
      padding: 1rem;
      margin-top: 1rem;
      color: #000;
      position: relative;

      .dynamic-buttons {
        position: absolute;
        top: 1rem;
        right: 1rem;

        @media screen and (max-width: 768px) {
          position: relative;
          top: 0;
          left: 0;
        }
      }

      button {
        border: none;
        padding: 5px 1rem;
        margin: 5px;
        font-weight: 700;
        background-color: #2c3e50;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
      }
    }
  }

</style>
