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
    color: var(--accent-color);
  }
  main {
    padding: 40px 0;
    font-size: 18px;
  }
</style>