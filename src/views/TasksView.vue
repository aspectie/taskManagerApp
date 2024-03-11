<template>
  <main>
    <div class="task-form">
      <AddTaskForm/>
    </div>
    <TaskList/>
  </main>
</template>

<script setup>
  import {TaskList} from '@/components'
  import {AddTaskForm} from '@/components'
</script>

<style scoped>
  .task-form {
    margin-bottom: 40px;
  }
</style>
