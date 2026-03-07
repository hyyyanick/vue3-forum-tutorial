import Home from '@/pages/Home.vue'
import ThreadShow from '@/pages/ThreadShow.vue'
import NotFound from '@/pages/NotFound.vue'
import Forum from '@/pages/Forum.vue'
import Category from '@/pages/Category.vue'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'
import Profile from '@/pages/Profile.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/me',
    component: Profile,
    name: 'Profile',
    meta: { toTop: true, smothScroll: true }
  },
  {
    path: '/me/edit',
    component: Profile,
    name: 'ProfileEdit',
    props: { edit: true }
  },
  {
    path: '/category/:categoryId',
    component: Category,
    name: 'Category',
    props: true
  },
  {
    path: '/forum/:forumId',
    component: Forum,
    name: 'Forum',
    props: true
  },
  {
    path: '/thread/:id',
    component: ThreadShow,
    name: 'ThreadShow',
    props: true,
    beforeEnter: (to, from, next) => {
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      if (threadExists) {
        next()
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substr(1).split('/') }, // keep the wrong url path
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to) {
    const scroll = {}
    if (to.meta.toTop) scroll.top = 0
    if (to.meta.smoothScroll) scroll.behavior = 'smooth'
    return scroll
  }
})

export default router
