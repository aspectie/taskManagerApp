<template>
  <div class="task">
    <p class="task__title">Title: {{ props.title}}</p>
    <div class="task__buttons">
      <Button>Edit</Button>
      <Button @click="onRemoveTask">Remove</Button>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    id: String,
    title: String
  })
  const emit = defineEmits(['onRemoveTask'])

  function onRemoveTask() {
    emit('onRemoveTask', props.id)
  }
</script>

<style scoped>
  .task {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .task__buttons button{
    margin-left: 10px;
  }
</style>