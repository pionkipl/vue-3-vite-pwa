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
      <textarea class="speech__area">{{ area }}</textarea>
    </div>

  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const SpeechRecognition = webkitSpeechRecognition || window.SpeechRecognition;
  const recognition = new SpeechRecognition();

  const area = ref('')

  const recognitionStart = () => {
    recognition.start();
    recognition.continuous = true;
  }

  const recognitionStop = () => {
    recognition.stop();
  }

  recognition.onresult = (event) => {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      area.value += event.results[i][0].transcript;
    }
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
   }
 }
</style>
