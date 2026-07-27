import { ref } from 'vue'
import { defineStore } from 'pinia'
import sourceData from '@/data.json'

export const useForumStore = defineStore('ForumStore', () => {
  const forums = ref(sourceData.forums)

  return { forums }
})
