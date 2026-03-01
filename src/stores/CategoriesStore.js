import { defineStore } from 'pinia'
import sourceData from '@/data.json'
import { ref } from 'vue'

export const useCategoriesStore = defineStore('CategoriesStore', () => {
  const categories = ref(sourceData.categories)
  return { categories }
})
