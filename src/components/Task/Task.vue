<template>
  <div class="task" v-if="isEditable">
    <input type="text" v-model="title"/>
    <div class="task__buttons">
      <button @click="onSaveTask">Save</button>
      <button @click="onRemoveTask">Remove</button>
    </div>
  </div>
  <div class="task" v-else>
    <p class="task__title">Title: {{ props.title}}</p>
    <div class="task__buttons">
      <button @click="onEditTask">Edit</button>
      <button @click="onRemoveTask">Remove</button>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits, ref, watch } from 'vue';

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
      title
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
    align-items: center;
  }

  .task__buttons button{
    margin-left: 10px;
  }
</style>