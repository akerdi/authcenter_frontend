
export const authRoutes = [
  {
    path: "/authorize",
    name: "authorize",
    component: () => import("@/pages/auth/authorize.vue"),
    meta: {
      access: "public",
      title: "oauth授权"
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/auth/login.vue'),
    meta: {
      access: 'anon',
      title: '登录'
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/pages/auth/register.vue"),
    meta: {
      title: "注册"
    }
  },
]