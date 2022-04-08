import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _788d290b = () => interopDefault(import('../pages/course/index.vue' /* webpackChunkName: "pages/course/index" */))
const _8a3f28e8 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _6f571c60 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _1b352b88 = () => interopDefault(import('../pages/teacher/index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _c2501b9a = () => interopDefault(import('../pages/course/_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _8eca53ba = () => interopDefault(import('../pages/player/_vid.vue' /* webpackChunkName: "pages/player/_vid" */))
const _33a86ff0 = () => interopDefault(import('../pages/teacher/_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _1d8e6f16 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/course",
    component: _788d290b,
    name: "course"
  }, {
    path: "/login",
    component: _8a3f28e8,
    name: "login"
  }, {
    path: "/register",
    component: _6f571c60,
    name: "register"
  }, {
    path: "/teacher",
    component: _1b352b88,
    name: "teacher"
  }, {
    path: "/course/:id",
    component: _c2501b9a,
    name: "course-id"
  }, {
    path: "/player/:vid?",
    component: _8eca53ba,
    name: "player-vid"
  }, {
    path: "/teacher/:id",
    component: _33a86ff0,
    name: "teacher-id"
  }, {
    path: "/",
    component: _1d8e6f16,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
