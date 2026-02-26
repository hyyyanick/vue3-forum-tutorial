<script setup>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'
import { computed, ref } from 'vue'

const props = defineProps({
  categoryId: {
    type: String,
    required: true
  }
})

const categories = ref(sourceData.categories)
const forums = ref(sourceData.forums)

const category = computed(() => categories.value.find(category => category.id === props.categoryId))
const forumsData = computed(() => forums.value.filter(f => f.categoryId === props.categoryId))

</script>

<template>
  <h1>{{ category.name }}</h1>
  <ForumList
    :category-name="category.name"
    :forums="forumsData"/>
</template>

<style scoped>

</style>
