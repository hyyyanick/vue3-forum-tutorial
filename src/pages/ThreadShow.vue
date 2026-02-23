<template>
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <PostList :posts="threadPosts" />
      <PostEditor @save="addPost" />
    </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { computed, ref } from 'vue'
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'

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

function addPost (event) {
  const newPost = {
    ...event.newPost,
    threadId: props.id
  }
  posts.value.push(newPost)
}

</script>

<style scoped>

</style>
