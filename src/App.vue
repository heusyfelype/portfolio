<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
