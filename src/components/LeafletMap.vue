<template>
  <div id="map"></div>
  <h1>{{ longitude }}</h1>
  <h1>{{ latitude }}</h1>
</template>

<script setup>
  import { map, tileLayer, marker, icon } from "leaflet";
  import { onMounted, onBeforeUnmount, ref, watch } from "vue";

  import markerIcon from '@/assets/img/marker-icon.png';

  const props = defineProps({
    long: Number,
    lat: Number
  })

  const longitude = ref(props.long);
  const latitude = ref(props.lat);

  let container = null;
  let markerOnMap = null;

  const myIcon = icon({
    iconUrl: markerIcon
  })

  onMounted(() => {
    container = map("map").setView([51.959, -8.623], 2);

    tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(container);


  });

  watch(() => props.long, (newValue, oldValue) => {
    if (newValue && oldValue === null) {
      markerOnMap = marker([props.lat, props.long], {icon: myIcon}).addTo(container);
      container.flyTo([props.lat, props.long], 16)
    }
    if (newValue && oldValue !== null) {
      markerOnMap.setLatLng([props.lat, props.long]);
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
