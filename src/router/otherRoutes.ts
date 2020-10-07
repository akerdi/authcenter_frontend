
export const otherRoutes = [
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/error/404.vue'),
    meta: {
      title: '404'
    }
  }
]
