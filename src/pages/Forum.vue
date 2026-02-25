<script setup>
import ThreadList from '@/components/ThreadList.vue'
import sourceData from '@/data.json'
import { computed, ref } from 'vue'

const props = defineProps({
  forumId: {
    type: String,
    required: true
  }
})

const forums = ref(sourceData.forums)
const threads = ref(sourceData.threads)
const forum = computed(() => forums.value.find(f => f.id === props.forumId))
const threadsData = computed(() => threads.value.filter(t => t.forumId === props.forumId))
</script>

<template>
  <div class="container">
    <div class="col-full push-top">

      <div class="forum-header">
        <div class="forum-details">
          <h1>{{ forum.name }}</h1>
          <p class="text-lead">{{ forum.description }}</p>
        </div>
        <a href="#" class="btn-green btn-small">Start a thread</a>
      </div>
    </div>

    <div class="col-full push-top">
      <ThreadList :threads="threadsData"/>
    </div>
  </div>
</template>

<style scoped>

</style>
