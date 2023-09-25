<script setup lang="ts">
import apis from '@/utils/apis';

import { ref, onMounted } from 'vue';

const message = ref("Testando componente");
let th = this;

const handleSectionIdentifier = (value: String) =>{
  console.log("Capturando emiter: ", value)
}

</script>

<template>
  <main id="container-scroll" class="container-scroll">
    <slot @section-identifier="handleSectionIdentifier"></slot>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 80%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer / Edge */
  scroll-padding-top: 25px;
  background-color: rgb(45, 11, 17);
  padding: 0;
}
main::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

</style>
