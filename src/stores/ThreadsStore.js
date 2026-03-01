import { defineStore } from 'pinia'
import sourceData from '@/data.json'
import { ref } from 'vue'

export const useThreadsStore = defineStore('ThreadsStore', () => {
  const threads = ref(sourceData.threads)
  return { threads }
})
