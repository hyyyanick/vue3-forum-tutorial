import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import sourceData from '@/data.json'

export const useUsersStore = defineStore('UsersStore', () => {
  const authId = ref('7uVPJS9GHoftN58Z2MXCYDqmNAh2')
  const users = ref(sourceData.users)

  const authUser = computed(() => users.value.find(u => u.id === authId.value))

  return { authUser }
})
