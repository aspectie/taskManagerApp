<template>
  <h1 v-if="tasks.length > 0">Tasks:</h1>
  <h1 v-else>
    The task list is empty
  </h1>
  <Task v-for="task in tasks"
    :title="task.title"
    :id="task.id"
    :key="task.id"
    @onRemoveTask="onRemoveTask"
  />  
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useTasksStore } from '@/stores/tasks';
  import Task from './Task.vue'

  const tasks = ref([]);
  const store = useTasksStore();
 
  function onRemoveTask(id) {
    store.remove(id);
  }

  watch(() => store.tasks, () => {
    tasks.value = store.tasks;
  })
</script>