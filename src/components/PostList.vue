<script setup>
import { ref } from 'vue'
import sourceData from '@/data.json'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

const users = ref(sourceData.users)

defineProps({
  posts: {
    type: Array,
    required: true
  }
})

function userById (userId) {
  return users.value.find((u) => u.id === userId)
}

function diffFromNow (date) {
  return dayjs.unix(date).fromNow()
}

function humanFriendlyDate (date) {
  return dayjs.unix(date).format('llll')
}

</script>

<template>
  <div class="post-list">
    <div class="post"
         v-for="post in posts"
         :key="post.postId">

      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId)?.name }}</a>

        <a href="#">
          <img :src="userById(post?.userId)?.avatar" alt="" class="avatar-large">
        </a>

        <p class="desktop-only text-small">107 posts</p>

      </div>

      <div class="post-content">
        <div>
          <p>{{ post?.text }}</p>
        </div>
      </div>

      <div class="post-date text-faded" :title="humanFriendlyDate(post?.publishedAt)">
        {{ diffFromNow(post?.publishedAt) }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
