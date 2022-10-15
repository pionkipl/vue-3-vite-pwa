<template>
  <div id="map"></div>
  <h1>{{ longitude }}</h1>
  <h1>{{ latitude }}</h1>
</template>

<script setup>
  import { map, tileLayer, marker } from "leaflet";
  import { onMounted, onBeforeUnmount, ref, watch } from "vue";

  const props = defineProps({
    long: Number,
    lat: Number
  })

  const longitude = ref(props.long);
  const latitude = ref(props.lat);

  let container = null;
  let markerOnMap = null;

  onMounted(() => {
    container = map("map").setView([51.959, -8.623], 2);

    tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(container);


  });

  watch(() => props.long, (newValue, oldValue) => {
    if (newValue) {
      markerOnMap = marker([props.lat, props.long]).addTo(container);
      container.flyTo([props.lat, props.long], 16)
    }
  });

  onBeforeUnmount(() => {
    container.remove();
  });
</script>

<style scoped>
  #map {
    margin-top: 1rem;
    height: 380px;
    width: 100%;
  }
</style>
