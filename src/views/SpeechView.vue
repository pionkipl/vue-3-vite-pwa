<template>
  <div class="speech">
    <div class="speech__btns">
      <button @click="recognitionStart"
              class="button">Speak On</button>
      <button  @click="recognitionStop"
               class="button">Speak Off</button>
      <button  @click="deleteText"
               class="button">Delete</button>
    </div>
    <div class="speech__text">
      <textarea class="speech__area" disabled>{{ area }}</textarea>
    </div>

  </div>
</template>

<script setup>
  import { ref } from 'vue';

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

  recognition.onresult = (event) => {
    let transcript = '';
    console.log(event)
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        area.value += event.results[i][0].transcript;
      }
    }

    color = event.results[event.results.length - 1][0].transcript.toLowerCase().replace(/\s/g, '');

    document.body.style.backgroundColor = color;
    
  }

  const deleteText = () => {
    area.value = '';
  }


</script>

<style scoped lang="scss">
 .speech {
   background-color: #2c3e50;
   padding: 2rem;
   margin-top: 1rem;
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
