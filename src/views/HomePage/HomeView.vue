<script setup lang="ts">
import CustomScroll from "../../components/CustomScroll.vue"
</script>

<template>
  <main>
    <CustomScroll />
    <section id="first-section" class="first-section">Primeira seção</section>
    <section id="second-section" class="second-section">Segunda seção</section>
    <section id="third-section" class="third-section">Segunda seção</section>
  </main>
</template>

<style>
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

section {
  height: 100vh;

  scroll-snap-align: start;
  scroll-snap-stop: always;
  text-decoration-color: aliceblue;
}

.first-section {
  padding-top: 25px;
  background-color: burlywood;
}

.second-section {
  background-color: aquamarine;
}

.third-section {
  background-color: crimson;
}
</style>
