<template>
  <h2>Title: {{ props.title}}</h2>
</template>

<script setup>
  import {defineProps} from 'vue';

  const props = defineProps({
    title: String
  })
</script>