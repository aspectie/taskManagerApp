<template>
  <h2 v-if="tasks.length > 0">Tasks</h2>
  <h2 v-else>
    The task list is empty
  </h2>
  <Task v-for="task in tasks"
    :key="task.id"
    :id="task.id"
    :title="task.title"
    :isEditable="task.isEditable"
    @onRemoveTask="onRemoveTask"
    @onEditTask="onEditTask"
    @onSaveTask="onSaveTask"
  />  
</template>

<script setup>
  import { ref, watch, onMounted } from 'vue'
  import { useTasksStore } from '@/stores/tasks';
  import Task from './Task.vue'

  const tasks = ref([]);
  const store = useTasksStore();
 
  function onRemoveTask(id) {
    store.remove(id);
  }

  function onEditTask(id) {
    store.setIsEditable(id, true);
  }

  function onSaveTask(task) {
    if (task.title !== '') {
      store.setIsEditable(task.id, false);
      store.update(task)
    }
  }

  onMounted(() => {
    tasks.value = store.tasks;
  })

  watch(() => store.tasks, () => {
    tasks.value = store.tasks;
  })
</script>

<style scoped>
  h2 {
    font-weight: 300;
    margin-bottom: 40px;
    text-align: center;
  }
</style>