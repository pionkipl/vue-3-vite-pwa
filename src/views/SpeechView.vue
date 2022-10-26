<template>
  <div class="speech-container">
    <h1 class="text-xl md:text-3xl">Speech:</h1>
    <div class="speech">
      <div class="speech__btns">
        <button @click="recognitionStart"
                class="button bg-teal-400 text-black">Speak On</button>
        <button  @click="recognitionStop"
                 class="button bg-teal-400 text-black">Speak Off</button>
        <button  @click="deleteText"
                 class="button bg-rose-400 text-black">Delete</button>
      </div>
      <div class="speech__text">
        <textarea class="speech__area" disabled>{{ area }}</textarea>
      </div>
    </div>

  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import anime from 'animejs';

  const SpeechRecognition = webkitSpeechRecognition || window.SpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.maxAlternatives = 1;


  const area = ref('')

  const recognitionStart = () => {
    recognition.start();
    recognition.continuous = true;
  }

  const recognitionStop = () => {
    recognition.stop();
  }

  let color;

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function getRandomColor() {
    const h = rand(1, 360);
    const s = rand(0, 100);
    const l = rand(0, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
  }


  recognition.onresult = (event) => {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        area.value += event.results[i][0].transcript;
      }
    }

    color = event.results[event.results.length - 1][0].transcript.toLowerCase().replace(/\s/g, '');

    if (color === 'randomcolor') {
      document.body.style.backgroundColor = getRandomColor();
    } else {
      document.body.style.backgroundColor = color;
    }

    if (color === 'show') {
      showSite()
    }

    if (color === 'hide') {
      hideSite();
    }

    if (color === 'hint') {
      synth.speak(utterance1);
    }
  }

  const deleteText = () => {
    area.value = '';
  }

  console.log('%cPowiedz dowolny kolor po angielsku. ', 'color: black; background: yellow; font-size: 30px');
  console.log('%cPowiedz random color. ', 'color: black; background: yellow; font-size: 30px');

  const hideSite = () => {
    anime({
      targets: 'body',
      keyframes: [
        {
          translateX: -250,
          translateY: 100,
          duration: 1000
        },
        {
          translateX: -450,
          translateY: 300,
          duration: 1000
        },
        {
          translateX: '120%',
          translateY: 0,
          duration: 1500
        },
      ],
    })
  }

  const showSite = () => {
    anime({
      targets: 'body',
      translateX: 0,
      duration: 1500
    })
  }

  let synth;
  let utterance1;

  onMounted(() => {
    synth = window.speechSynthesis;
    const voices = synth.getVoices();
    let voice;
    voices.forEach(el => {
      if (el.voiceURI === "Zosia") {
        voice = el;
      }
    })

    utterance1 = new SpeechSynthesisUtterance('Witaj programisto. W konsoli czeka na Ciebie pro tip. Wejdź i przekonaj się sam.');
    utterance1.voice = voice;


  })
</script>

<style scoped lang="scss">
  .speech-container {
    background-color: #2c3e50;
    padding: 2rem;
    margin-top: 1rem;
  }
 .speech {
   display: flex;
   justify-content: space-between;

   @media screen and (max-width: 767px) {
     flex-direction: column;
     justify-content: flex-start;
   }

   button {
     width: 100%;
   }

   &__text {
     width: 100%;
     margin: 1rem 0 1rem 1rem;
     display: flex;
     flex: 1;

     @media screen and (max-width: 767px) {
       flex-direction: column;
       margin: 1rem 0;
     }
   }

   &__area {
     width: 100%;
     height: 100%;
     display: flex;
     border: none;
     outline: none;
     font-size: 1.5rem;
     padding: 0.5rem 1rem;
     color: #000;

     @media screen and (max-width: 767px) {
       min-height: 200px;
     }

     &:focus {
       border: none;
       outline: none;
     }

    &:disabled {
      background-color: #fff;
    }
   }
 }
</style>
