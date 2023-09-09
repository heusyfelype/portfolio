<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const body = document.querySelector("body") 

body?.addEventListener("scroll", (e) =>{
  console.log("Evento: ", e);
  console.log("Window: ", window)
})

</script>

<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  background-color: aqua;
}


nav {
}

nav a.router-link-exact-active {
}

nav a.router-link-exact-active:hover {
}

nav a {
}

nav a:first-of-type {
}

@media (min-width: 1024px) {
  header {
  }

  header .wrapper {
  }

  nav {
  }
}
</style>
