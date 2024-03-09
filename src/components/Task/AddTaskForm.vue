<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      v-model="formData.title"
    >
    <input type="submit" />
  </form>
</template>

<script setup>
  import {reactive} from 'vue';
  import {useTasksStore} from '@/stores/tasks';

  const initialState = {
    title: ''
  }

  const formData = reactive({...initialState});
  const tasks = useTasksStore();
 
  function resetForm() {
    Object.assign(formData, initialState);
  }

  function onSubmit() {
    tasks.add(formData);
    resetForm();
  }
</script>