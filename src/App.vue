<script setup>
  import { RouterView } from 'vue-router'
  import { Header } from '@/components'
</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
  a.router-link-active {
    color: rgb(108, 36, 243);
  }
  main {
    padding: 20px 0;
    font-size: 18px;
  }
</style>