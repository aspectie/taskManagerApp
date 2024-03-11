<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/tasks">Tasks</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
  import { computed, unref } from 'vue'
  import { RouterLink, useRoute } from 'vue-router'

  const route = useRoute();
  const currentRouteName = computed(() => route.path)
  console.log(unref(currentRouteName))
</script>

<style scoped>
  nav {
    padding: 20px 0;
    font-size: 20px;
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:not(:last-child) {
    margin-right: 20px;
  }
</style>