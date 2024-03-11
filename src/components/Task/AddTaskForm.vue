<template>
  <form @submit.prevent="onSubmit" class="form">
    <h2>Add new task</h2>
    <div class="form__field">
      <label for="title">Title:</label>
      <input
        name="title"
        id="title"
        type="text"
        v-model="formData.title"
      >
    </div>
    <div class="form__field">
      <input type="submit" class="submit" value="Add"/>
    </div>
  </form>
</template>

<script setup>
  import { reactive } from 'vue';
  import { useTasksStore } from '@/stores/tasks';

  const initialState = {
    title: ''
  }

  const formData = reactive({...initialState});
  const tasks = useTasksStore();
 
  function resetForm() {
    Object.assign(formData, initialState);
  }

  function onSubmit() {
    if (formData.title.trim() !== '') {
      tasks.add(formData);
      resetForm();
    }
  }
</script>

<style scoped>
  h2 {
   margin-bottom: 20px;
   font-weight: 300;
  }
  input {
    font-size: 14px;
    padding: 5px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  .form__field {
    margin-bottom: 20px;
  }
  .submit {
    font-size: 16px;
    padding: 5px 10px;
    border: 2px solid var(--accent-color);
    border-radius: 2px;
    background-color: #fff;
    color: var(--accent-color);
    cursor: pointer;
    transition: all 0.2s;
  }
  .submit:hover {
    background-color: var(--accent-color);
    color: #fff;
  }
</style>