<script setup>
import { computed } from 'vue'
import { useThreadsStore } from '@/stores/ThreadsStore'
import { useForumStore } from '@/stores/Forum'
import router from '@/router'
import ThreadEditor from '@/components/ThreadEditor.vue'

const props = defineProps({
  forumId: {
    type: String,
    required: true
  }
})

const threadStore = useThreadsStore()
const forums = useForumStore().forums
const forum = computed(() => forums.find(f => f.id === props.forumId))

async function save ({ title, content }) {
  const createdThread = await threadStore.createThread(props.forumId, title, content)
  router.push({ name: 'ThreadShow', params: { id: createdThread.id } })
}

function cancel () {
  router.push({ name: 'Forum', params: { forumId: props.forumId } })
}

</script>

<template>
  <div class="col-full push-top">

    <h1>Create new thread in <i>{{ forum.name }}</i></h1>

    <ThreadEditor @save="save" @cancel="cancel" />
  </div>
</template>

<style scoped>

</style>
