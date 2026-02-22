<template>
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <PostList :posts="threadPosts" />
    </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { computed, ref } from 'vue'
import PostList from '@/components/PostList.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)

const thread = computed(() => threads.value.find((t) => t.id === props.id))
const threadPosts = computed(() => posts.value.filter((p) => p.threadId === props.id))

</script>

<style scoped>

</style>
