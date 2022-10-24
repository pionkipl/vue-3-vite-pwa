<template>
  <main>
    <h1 class="heading-text text-center text-2xl md:text-5xl">
      <span class="letter">P</span>
      <span class="letter">W</span>
      <span class="letter">A</span>
      <span class="letter">&nbsp;</span>
      <span class="letter">G</span>
      <span class="letter">E</span>
      <span class="letter">T</span>
      <span class="letter">&nbsp;</span>
      <span class="letter">S</span>
      <span class="letter">T</span>
      <span class="letter">A</span>
      <span class="letter">R</span>
      <span class="letter">T</span>
      <span class="letter">E</span>
      <span class="letter">D</span>
    </h1>
  </main>
</template>

<script setup>
  import { onMounted } from 'vue';
  import anime from 'animejs';

  onMounted(() => {
    anime.timeline({
      loop: false,
      targets: '.heading-text .letter',
    })
        .add({
          targets: '.heading-text .letter',
          scale: [4,1],
          opacity: [0,1],
          translateX: [-150, 0],
          easing: "easeOutExpo",
          duration: 700,
          delay: (el, i) => 200*i
          })
  })

</script>
<style lang="scss" scoped>
main {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 4rem);

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }

  .heading-text {
    font-weight: bold;
    margin-bottom: 8rem;
    color: #fff;
    display: block;

    .letter {
      display: inline-block;
      background: linear-gradient(180deg, rgba(94,234,212,1) 0%, rgba(253,164,175,1) 62%, rgba(252,211,77,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }
  }
}
</style>
