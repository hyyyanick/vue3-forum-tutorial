<script setup>
import { ref } from 'vue'

const text = ref('')
const emit = defineEmits(['save'])

function save () {
  const postId = 'adsfdsf' + Math.random()
  const newPost = {
    text: text.value,
    userId: 'FsCDAk9w8NeXEceLV87arpsXjnQ2',
    publishedAt: Math.floor(Date.now() / 1000),
    id: postId
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
