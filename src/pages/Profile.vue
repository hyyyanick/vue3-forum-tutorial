<script setup>
import { storeToRefs } from 'pinia'
import { useUsersStore } from '@/stores/UsersStore'
import PostList from '@/components/PostList.vue'
import UserProfileCard from '@/components/UserProfileCard.vue'
import UserProfileEditor from '@/components/UserProfileEditor.vue'

defineProps({
  edit: {
    type: Boolean,
    default: false
  }
})
const userStore = useUsersStore()
/* In order to extract properties from the store while keeping its reactivity,
you need to use storeToRefs(). It will create refs for every reactive property. */
const { authUser: user } = storeToRefs(userStore)
</script>

<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <UserProfileCard v-if="!edit" :user="user" />
        <UserProfileEditor v-else :user="user" />
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> {{ user.name }} recent activity </span>
          <a href="#">See only started threads?</a>
        </div>

        <hr />

        <PostList :posts="user.posts" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
