import { ref } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([]);

  function add(task) {
    tasks.value.push({...task, id: uuid()});
  }

  return { tasks, add }
})