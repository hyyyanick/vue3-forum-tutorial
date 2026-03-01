<template>
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <PostList :posts="threadPosts" />
      <PostEditor @save="addPost" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'
import { useThreadsStore } from '@/stores/ThreadsStore'
import { usePostsStore } from '@/stores/PostsStore'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const threadsStore = useThreadsStore()
const postsStore = usePostsStore()
const posts = postsStore.posts

const thread = computed(() => threadsStore.threads.find((t) => t.id === props.id))
const threadPosts = computed(() => posts.filter((p) => p.threadId === props.id))

function addPost (event) {
  const newPost = {
    ...event.newPost,
    threadId: props.id
  }
  postsStore.createPost(newPost)
}

</script>

<style scoped>

</style>
