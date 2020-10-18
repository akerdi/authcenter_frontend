<template lang="pug">
  .m-users
    .container
      el-table(:data="users" :loading="loading")
        el-table-column(type="index" align="center" width=65)
          template(slot-scope="scope")
            span {{scope.$index+1}}
        el-table-column(label="用户ID" prop="id")
        el-table-column(label="用户邮箱" prop="email")
        el-table-column(label="用户名称" prop="username")
        el-table-column(label="用户昵称" prop="nickname")
        el-table-column(label="用户权限" prop="roles")
</template>

<script>
import { getUsers } from '@/service/admin'
import callAsync from '@/lib/awaitCall'

export default {
  name: "manage-users",
  data () {
    return {
      users: [],
      loading: false
    }
  },
  methods: {
    async getUsers () {
      this.loading = true
      const [err, res] = await callAsync(getUsers())
      this.loading = false
      if (err) return
      console.log("[manage.users.getUsers] res:", res)
      if (!res.data) return
      this.users = res.data.users
    }
  },
  mounted () {
    this.getUsers()
  }
}
</script>

<style lang="scss" scoped>
  .m-users {
    .container {
      padding: 30px;
    }
  }
</style>