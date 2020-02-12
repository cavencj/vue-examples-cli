/*
 * @Author: Caven
 * @Date: 2019-12-23 13:38:32
 * @Last Modified by: Caven
 * @Last Modified time: 2020-02-11 13:09:11
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Home.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/examples',
        name: 'examples',
        component: () => import('../views/examples/index.vue')
      },
      {
        path: '/comps',
        name: 'comps',
        component: () => import('../views/comps/index.vue')
      },
      {
        path: '/tools',
        name: 'tools',
        component: () => import('../views/tools/index.vue')
      },
      {
        path: '/docs',
        name: 'docs',
        component: () => import('../views/docs/index.vue')
      },
      {
        path: '/editor',
        name: 'editor',
        component: () => import('../views/editor/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
