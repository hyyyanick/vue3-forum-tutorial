import { defineStore } from 'pinia'
import sourceData from '@/data.json'
import { ref } from 'vue'
import { useThreadsStore } from '@/stores/ThreadsStore'

export const usePostsStore = defineStore('PostsStore', () => {
  const posts = ref(sourceData.posts)

  function createPost (newPost) {
    const threadsStore = useThreadsStore()

    newPost.id = 'adsfdsf' + Math.random()
    posts.value.push(newPost)
    const thread = threadsStore.threads.find(t => t.id === newPost.threadId)
    thread.posts.push(newPost.id)
  }
  return { posts, createPost }
})
