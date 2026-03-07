import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import sourceData from '@/data.json'
import { usePostsStore } from '@/stores/PostsStore'
import { useThreadsStore } from '@/stores/ThreadsStore'

export const useUsersStore = defineStore('UsersStore', () => {
  const authId = ref('7uVPJS9GHoftN58Z2MXCYDqmNAh2')
  const users = ref(sourceData.users)
  const postsStore = usePostsStore()
  const threadsStore = useThreadsStore()

  const authUser = computed(() => {
    const user = users.value.find(u => u.id === authId.value)
    const posts = postsStore.posts.filter(p => p.userId === user.id)
    const threads = threadsStore.threads.filter(t => t.userId === user.id)
    return {
      ...user,
      posts,
      threads,
      postsCount: posts.length,
      threadsCount: threads.length
    }
  })

  function updateUser (newUser) {
    const userId = users.value.findIndex(user => user.id === newUser.id)
    users.value[userId] = newUser
  }

  return { authUser, updateUser }
})
