<script setup lang="ts"></script>

<template>
  <main>
    <section class="first-section">Primeira seção</section>
    <section class="second-section">Segunda seção</section>
  </main>
</template>

<style>
main {
  height: 100vh;
  width: 80%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer / Edge */
}
main::-webkit-scrollbar {
  width: 0px;
  /* background: transparent;  */
}

section {
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.first-section {
  background-color: burlywood;
}

.second-section {
  background-color: aquamarine;
}
</style>
