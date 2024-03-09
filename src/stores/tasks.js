import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([]);

  function create(task) {
    tasks.value.push(task);
  }

  return { tasks, create }
})