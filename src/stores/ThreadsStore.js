import { defineStore } from 'pinia'
import sourceData from '@/data.json'
import { ref } from 'vue'
import { useUsersStore } from '@/stores/UsersStore'
import { useForumStore } from '@/stores/Forum'
import { usePostsStore } from '@/stores/PostsStore'

export const useThreadsStore = defineStore('ThreadsStore', () => {
  const threads = ref(sourceData.threads)
  const userStore = useUsersStore()
  const postsStore = usePostsStore()
  const forumStore = useForumStore()

  async function createThread (forumId, title, text) {
    const id = 'adsfdsf' + Math.random()
    const publishedAt = Math.floor(Date.now() / 1000)
    const userId = userStore.authId
    const thread = { forumId, title, userId, publishedAt, id, posts: [] }
    threads.value.push(thread)
    postsStore.createPost({ text, threadId: id, userId, publishedAt })
    pushThreadToForum(thread, forumId)
    return threads.value.find(thread => thread.id === id)
  }

  function pushThreadToForum (thread, forumId) {
    const forum = forumStore.forums.find(f => f.id === forumId)
    forum.threads.push(thread.id)
  }

  return { threads, createThread }
})
