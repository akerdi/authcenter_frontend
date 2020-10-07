<template lang="pug">
  .m-apps
    .container
      el-table(:data="apps" :loading="loading")
        el-table-column(type="index" align="center" width=65)
          template(slot-scope="scope")
            span {{scope.$index+1}}
        el-table-column(label="应用ID" prop="client_id")
          template(slot-scope="scope")
            a(:title="'secret:' + scope.row.client_secret") {{scope.row.client_id}}
        el-table-column(label="应用名称" prop="title")
        el-table-column(label="应用地址" prop="url")
</template>

<script>
import { getApps } from '@/service/admin'
import callAsync from '@/lib/awaitCall'

export default {
  name: "manage-apps",
  data () {
    return {
      apps: [],
      loading: false
    }
  },
  methods: {
    async getApps () {
      this.loading = true
      const [err, res] = await callAsync(getApps())
      this.loading = false
      if (err) return
      console.log("[manage.apps.getApps] result:", res)
      if (!res.data) return
      this.apps = res.data.apps
    }
  },
  mounted () {
    this.getApps()
  }
}
</script>

<style lang="scss" scoped>
  .m-apps {
    .container {
      padding: 30px;
    }
  }
</style>