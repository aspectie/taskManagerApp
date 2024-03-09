<template>
  <h1 v-if="tasks.length > 0">Tasks:</h1>
  <h1 v-else>
    The task list is empty
  </h1>
  <Task v-for="task in tasks"
    :name="task.name"
    :key="task.id"
  />  
</template>

<script setup>
  import { useTasksStore } from '@/stores/tasks';
  import { ref, onMounted } from 'vue'
  import Task from './Task.vue'

  const tasks = ref([]);
  const store = useTasksStore();

  onMounted(() => {
    tasks.value = store.tasks;
  })
</script>