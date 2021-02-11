<template lang="pug">
  el-dialog(:title="addAppDatas.title || '添加'" :before-close="beforeDialogClose" :close="beforeDialogClose" :visible.sync="addAppDatas.visible" :close-on-click-modal="false" width="430px")
    el-form.f-m-t-30(:model="addAppDatas.form" label-width="95px" :rules="formRules" ref="formRef")
      el-form-item(label="应用ID" prop="client_id")
        el-input(v-model="addAppDatas.form.client_id")
      el-form-item(label="应用Secret" prop="client_secret")
        el-input(v-model="addAppDatas.form.client_secret")
      el-form-item(label="应用名称" prop="title")
        el-input(v-model="addAppDatas.form.title")
      el-form-item(label="应用域名" prop="url")
        el-input(v-model="addAppDatas.form.url")
      el-form-item(label="禁止应用" prop="disabled")
        el-checkbox(v-model="addAppDatas.form.disabled")
      el-form-item
        el-button(@click="createApp" type="primary") 创建
</template>

<script>
import callAsync from '@/lib/awaitCall'
import { createApp } from '@/service/admin'
import { formApp } from '@/lib/rules'

export default {
  name: "addApp-component",
  data() {
    return {
      formRules: formApp
    }
  },
  methods: {
    async createApp() {
      const [err] = await callAsync(createApp(this.addAppDatas.form))
      if (err) return
      this.$emit("formVisibleFunc", 0, true)
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
