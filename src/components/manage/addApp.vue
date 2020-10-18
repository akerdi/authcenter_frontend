<template lang="pug">
  el-dialog(:title="addAppDatas.title || '添加'" :before-close="beforeDialogClose" :close="beforeDialogClose" :visible.sync="addAppDatas.visible" :close-on-click-modal="false" width="430px")
    el-form.f-m-t-30(:model="addAppDatas.addForm" label-width="95px" :rules="addFormRules" ref="addFormRef")
      el-form-item(label="应用ID" prop="client_id")
        el-input(v-model="addAppDatas.addForm.client_id")
      el-form-item(label="应用Secret" prop="client_secret")
        el-input(v-model="addAppDatas.addForm.client_secret")
      el-form-item(label="应用名称" prop="title")
        el-input(v-model="addAppDatas.addForm.title")
      el-form-item(label="应用域名" prop="url")
        el-input(v-model="addAppDatas.addForm.url")
      el-form-item(label="禁止应用" prop="disabled")
        el-checkbox(v-model="addAppDatas.addForm.disabled")
      el-form-item
        el-button(@click="createApp" type="primary") 创建
</template>

<script>
import callAsync from '@/lib/awaitCall'
import { createApp } from '@/service/admin'

export default {
  name: "addApp-component",
  data() {
    return {
      addFormRules: {
        url: [{ required: true }],
        client_id: [{ required: true }],
        client_secret: [{ required: true }]
      }
    }
  },
  methods: {
    async createApp() {
      const [err, result] = await callAsync(createApp(this.addAppDatas.addForm))
      if (err) return
      this.$emit("formVisibleFunc", true)
    },
    beforeDialogClose(done) {
      this.$emit("formVisibleFunc")
      if (typeof done === "function") done(false)
    }
  },
  props: ['addAppDatas']
}
</script>

<style lang="scss" scoped>

</style>
