import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import AppDate from '@/components/AppDate.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const forumApp = createApp(App)

forumApp.use(router)
forumApp.use(pinia)

forumApp.component('AppDate', AppDate)
forumApp.mount('#app')
