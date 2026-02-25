<script setup>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

defineProps({
  timestamp: {
    type: Number,
    required: true
  }
})

function diffFromNow (date) {
  return dayjs.unix(date).fromNow()
}

function humanFriendlyDate (date) {
  return dayjs.unix(date).format('llll')
}

</script>

<template>
  <span :title="humanFriendlyDate(timestamp)">
    {{ diffFromNow(timestamp) }}
  </span>
</template>

<style scoped>

</style>
