import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/user/UserLayoutView.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/user/UserHomeView.vue')
      },
      {
        path: 'products',
        name: '系列鏡框',
        component: () => import('@/views/user/UserProductsView.vue')
      },
      {
        path: 'stores',
        name: '門市據點',
        component: () => import('@/views/user/UserStoresView.vue')
      },
      {
        path: 'blogs',
        name: '部落格',
        component: () => import('@/views/user/UserBlogsView.vue')
      },
      {
        path: 'blog/:id',
        name: '部落格單一內文頁面',
        component: () => import('@/views/user/UserBlogContentView.vue')
      },
      {
        path: 'QA',
        name: '常見問題',
        component: () => import('@/views/user/UserQAView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
