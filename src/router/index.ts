import { createRouter, createWebHistory } from 'vue-router'
import { getAnalytics, logEvent } from 'firebase/analytics';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: () => import('../pages/PageHome.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'PageNotFound',
      component: () => import('../pages/PageNotFound.vue')
    },
  ],
})

router.afterEach((to) => {
  const analytics = getAnalytics()
  logEvent(analytics, 'page_view', {
    page_path: to.fullPath,
    page_title: document.title
  })
})

export default router