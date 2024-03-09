import { onMounted, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([]);

  function add(task) {
    tasks.value.push({...task, id: uuid(), isEditable: false});
  }

  function remove(id) {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  }

  function update(task) {
    const _task = getTaskById(task.id);

    if (_task) {
      _task.title = task.title
    }
  }

  const getTaskById = (id) => {
    return tasks.value.find(task => String(task.id) === String(id));
}

  function setIsEditable(id, state) {
    const task = getTaskById(id);

    if (task) {
      task.isEditable = state;
    }
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

  return { tasks, add, remove, update, setIsEditable }
})