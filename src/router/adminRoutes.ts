export const adminRoutes = [
  {
    path: "/manage/apps",
    name: "manageApps",
    component: () => import("@/pages/manage/apps.vue"),
    meta: {
      access: "admin",
      title: "授权App"
    }
  },
  {
    path: "/manage/users",
    name: "manageUsers",
    component: () => import("@/pages/manage/users.vue"),
    meta: {
      access: "admin",
      title: "管理用户"
    }
  }
]