<template>
  <div class="g-container">
    <div class="g-number">{{ Math.round(batteryLevel * 100) }}%</div>
    <div class="g-contrast">
      <div class="g-circle"></div>
      <ul class="g-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    battery: Number
  })
  const batteryLevel = ref(props.battery)
</script>

<style scoped lang="scss">
.g-container {
  width: 300px;
  height: 500px;

  @media screen and (max-width: 600px) {
    width: 200px;
  }
}

.g-number {
  position: absolute;
  width: 300px;
  top: 18%;
  text-align: center;
  font-size: 40px;
  z-index: 10;
  color: #fff;

  @media screen and (max-width: 600px) {
    width: 200px;
  }
}

.g-contrast {
  filter: contrast(10) hue-rotate(0);
  width: 100%;
  height: 100%;
  /*background-color: #2c3e50;*/
  overflow: hidden;
  animation: hueRotate 10s infinite linear;

  @media screen and (max-width: 600px) {
    width: 200px;
  }

}

.g-circle {
  position: relative;
  width: 300px;
  height: 300px;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    width: 200px;
  }
  /*filter: blur(8px);*/
}

.g-circle::after {
  content: "";
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  width: 200px;
  height: 200px;
  background-color: #00ff6f;
  border-radius: 42% 38% 62% 49% / 45%;
  animation: rotate 10s infinite linear;
}
.g-circle::before {
  content: "";
  position: absolute;
  width: 176px;
  height: 176px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: #2c3e50;
  z-index: 10;
}

.g-bubbles {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100px;
  height: 40px;
  transform: translate(-50%, 0);
  border-radius: 100px 100px 0 0;
  background-color: #00ff6f;
  /*filter: blur(5px);*/
}

li {
  position: absolute;
  border-radius: 50%;
  background: #00ff6f;
  list-style: none;
}

li:nth-of-type(1) {
  left: 66px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  animation: moveToTop 6s ease-in-out -3.779s infinite;
}
li:nth-of-type(2) {
  left: 76px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 28px;
  height: 28px;
  animation: moveToTop 7s ease-in-out -2.015s infinite;
}
li:nth-of-type(3) {
  left: 30px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  animation: moveToTop 7s ease-in-out -2.362s infinite;
}
li:nth-of-type(4) {
  left: 40px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 19px;
  height: 19px;
  animation: moveToTop 6s ease-in-out -1.994s infinite;
}
li:nth-of-type(5) {
  left: 47px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  animation: moveToTop 5s ease-in-out -1.175s infinite;
}
li:nth-of-type(6) {
  left: 37px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 23px;
  height: 23px;
  animation: moveToTop 9s ease-in-out -0.056s infinite;
}
li:nth-of-type(7) {
  left: 49px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  animation: moveToTop 4s ease-in-out -0.742s infinite;
}
li:nth-of-type(8) {
  left: 83px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 27px;
  height: 27px;
  animation: moveToTop 4s ease-in-out -0.956s infinite;
}
li:nth-of-type(9) {
  left: 16px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 23px;
  height: 23px;
  animation: moveToTop 6s ease-in-out -0.574s infinite;
}
li:nth-of-type(10) {
  left: 79px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 17px;
  height: 17px;
  animation: moveToTop 6s ease-in-out -2.908s infinite;
}
li:nth-of-type(11) {
  left: 37px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  animation: moveToTop 6s ease-in-out -3.269s infinite;
}
li:nth-of-type(12) {
  left: 64px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 19px;
  height: 19px;
  animation: moveToTop 8s ease-in-out -0.052s infinite;
}
li:nth-of-type(13) {
  left: 79px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 29px;
  height: 29px;
  animation: moveToTop 8s ease-in-out -0.011s infinite;
}
li:nth-of-type(14) {
  left: 75px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 28px;
  height: 28px;
  animation: moveToTop 7s ease-in-out -4.447s infinite;
}
li:nth-of-type(15) {
  left: 63px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 25px;
  animation: moveToTop 4s ease-in-out -1.356s infinite;
}
li:nth-of-type(16) {
  left: 36px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  animation: moveToTop 6s ease-in-out -0.667s infinite;
}

@keyframes rotate {
  50% {
    border-radius: 45% / 42% 38% 58% 49%;
  }
  100% {
    transform: translate(-50%, -50%) rotate(720deg);
  }
}

@keyframes moveToTop {
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
    transform: translate(-50%, -280px);
  }
}

@keyframes hueRotate {
  100% {
    filter: contrast(15) hue-rotate(360deg);
  }
}

</style>
