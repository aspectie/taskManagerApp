<template>
  <h2>Title: {{ props.name}}</h2>
</template>

<script setup>
  import {defineProps} from 'vue';

  const props = defineProps({
    name: String
  })
</script>