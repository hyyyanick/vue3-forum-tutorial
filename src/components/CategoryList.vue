<script setup>
import sourceData from '@/data.json'
import { computed, ref } from 'vue'
import ForumList from '@/components/ForumList.vue'
import { useCategoriesStore } from '@/stores/CategoriesStore'
const categoriesStore = useCategoriesStore()

const categories = categoriesStore.categories
const forums = ref(sourceData.forums)

const groupedForums = computed(() => {
  const mappedForums = new Map()
  for (const f of forums.value) {
    if (!mappedForums.has(f.categoryId)) mappedForums.set(f.categoryId, [])
    mappedForums.get(f.categoryId).push(f)
  }
  return mappedForums
})

</script>

<template>
  <ForumList v-for="category in categories"
             :key="category.id"
             :category-name="category.name"
             :category-id="category.id"
             :forums="groupedForums.get(category.id)" />
</template>

<style scoped>

</style>
