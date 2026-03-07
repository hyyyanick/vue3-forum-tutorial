<script setup>
import { ref } from 'vue'

const text = ref('')
const emit = defineEmits(['save'])

function save () {
  const newPost = {
    text: text.value
  }
  emit('save', { newPost })
  text.value = ''
}

</script>

<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea class="form-input" v-model="text" cols="30" rows="10"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
