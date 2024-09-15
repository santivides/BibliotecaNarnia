<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import HomePage from './views/HomePage.vue';
</script>

<template>
  <RouterView>
    <header>
      <div class="wrapper">
        <HomePage/>
        
      </div>
    </header>
    <nav>
      <RouterLink/>
    </nav>
  </RouterView>
</template>

<style scoped>
</style>
