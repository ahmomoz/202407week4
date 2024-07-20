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
        path: 'products/optical',
        name: '系列鏡框-光學眼鏡',
        component: () => import('@/views/user/UserProductsOpticalView.vue')
      },
      {
        path: 'products/sunglasses',
        name: '系列鏡框-太陽眼鏡',
        component: () => import('@/views/user/UserProductsSunglassesView.vue')
      },
      {
        path: 'stores',
        name: '門市據點',
        component: () => import('@/views/user/UserStoresView.vue')
      },
      {
        path: 'stores/content',
        name: '門市單一頁面',
        component: () => import('@/views/user/UserStoreContentView.vue')
      },
      {
        path: 'blogs',
        name: '部落格',
        component: () => import('@/views/user/UserBlogsView.vue')
      },
      {
        path: 'blog/content',
        name: '部落格單一頁面',
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
