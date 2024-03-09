import { onMounted, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([]);

  function add(task) {
    tasks.value.push({...task, id: uuid()});
  }

  onMounted(() => {
    const storageTasks = localStorage.getItem('tasks');

    if (storageTasks) {
      tasks.value = JSON.parse(storageTasks)._value;
    }
  })

  watch(() => tasks, (state) => {
      localStorage.setItem('tasks', JSON.stringify(state))
  }, {
      deep: true
  })

  return { tasks, add }
})