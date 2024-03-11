<template>
  <div class="task" v-if="isEditable">
    <div class="task__info">
      <label for="title">Title:</label>
      <input type="text" v-model="title" id="title"/>
    </div>
    <div class="task__buttons">
      <button @click="onSaveTask" class="save">Save</button>
      <button @click="onRemoveTask" class="remove">Remove</button>
    </div>
  </div>
  <div class="task" v-else>
    <div class="task__info">
      <p class="task__title">Title:</p>
      <p>{{ props.title}}</p>
    </div>
    <div class="task__buttons">
      <button @click="onEditTask" class="edit">Edit</button>
      <button @click="onRemoveTask" class="remove">Remove</button>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits, ref, unref, watch } from 'vue';

  const props = defineProps({
    id: String,
    title: String,
    isEditable: Boolean
  })
  const title = ref(props.title);
  const isEditable = ref(props.isEditable);

  const emit = defineEmits(['onRemoveTask', 'onEditTask', 'onSaveTask'])

  function onRemoveTask() {
    emit('onRemoveTask', props.id)
  }

  function onEditTask() {
    emit('onEditTask', props.id)
  }

  function onSaveTask() {
    emit('onSaveTask', {
      id: props.id,
      title: unref(title)
    })
  }

  watch(() => props.isEditable, () => {
    isEditable.value = props.isEditable;
  })
</script>

<style scoped>
  .task {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border: 1px solid black;
    min-height: 80px;
  }
  .task__info {
    padding: 10px 20px;
    width: 100%;
  }
  .task__title {
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    margin-right: 40px;
  }
  .task__buttons {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: var(--accent-color);
  }
  .task__buttons button {
    width: 100%;
    margin-left: 10px;
    font-size: 14px;
  }
  .remove:hover {
    color: red;
  }
  .edit:hover, .save:hover {
    color: var(--orange-color)
  }
</style>