<template>
  <Navbar />
  <router-view />
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<style>
#app {
  font-family: Quicksand, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #221e1f;
  background: #fff;
  font-weight: 500;
}
</style>
