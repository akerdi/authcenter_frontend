<template lang="pug">
  .m-apps
    .container
      el-button(@click="createApp" type="primary") 创建应用
      el-table.f-m-t-10(:data="apps" :loading="loading")
        el-table-column(type="index" align="center" width=65)
          template(slot-scope="scope")
            span {{scope.$index+1}}
        el-table-column(label="应用ID" prop="client_id")
          template(slot-scope="scope")
            a(:title="'secret:' + scope.row.client_secret") {{scope.row.client_id}}
        el-table-column(label="应用名称" prop="title")
        el-table-column(label="应用地址" prop="url")
        el-table-column(label="")
          template(slot-scope="scope")
            el-button(icon="el-icon-edit" @click="editApp(scope.row)")
    AddApp(v-if="addAppDatas.visible" :addAppDatas="addAppDatas"
      @formVisibleFunc="formVisibleFunc")
    EditApp(v-if="editAppDatas.visible" :editAppDatas="editAppDatas"
      @formVisibleFunc="formVisibleFunc")
</template>

<script>
import { getApps } from '@/service/admin'
import callAsync from '@/lib/awaitCall'

import AddApp from '@/components/manage/addApp.vue'
import EditApp from '@/components/manage/editApp.vue'

export default {
  components: {
    AddApp, EditApp
  },
  name: "manage-apps",
  data () {
    return {
      apps: [],
      loading: false,
      addAppDatas: {
        visible: false,
        form: null
      },
      editAppDatas: {
        visible: false,
        form: null
      }
    }
  },
  methods: {
    async createApp() {
      this.addAppDatas.visible = true
      this.addAppDatas.form = {}
    },
    async editApp(app) {
      console.log("apap:: ", app)
      this.editAppDatas.visible = true
      this.editAppDatas.form = _.assign({}, app)
    },
    async getApps() {
      this.loading = true
      const [err, res] = await callAsync(getApps())
      this.loading = false
      if (err) return
      if (!res.data) return
      this.apps = res.data.apps
    },
    // type [0 === create] [1 === edit]
    formVisibleFunc(type=0, shouldReload=false) {
      switch (type) {
        case 0: this.addAppDatas.visible = false; break;
        default: this.editAppDatas.visible = false; break;
      }
      if (shouldReload) this.getApps()
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