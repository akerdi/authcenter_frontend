<template lang="pug">
  el-dialog(:title="editAppDatas.title || '修改'" :before-close="beforeDialogClose" :close="beforeDialogClose" :visible.sync="editAppDatas.visible" :close-on-click-modal="false" width="430px")
    el-form.f-m-t-30(:model="editAppDatas.form" label-width="95px" :rules="formRules" ref="formRef")
      el-form-item(label="应用ID" prop="client_id")
        el-input(v-model="editAppDatas.form.client_id")
      el-form-item(label="应用Secret" prop="client_secret")
        el-input(v-model="editAppDatas.form.client_secret")
      el-form-item(label="应用名称" prop="title")
        el-input(v-model="editAppDatas.form.title")
      el-form-item(label="应用域名" prop="url")
        el-input(v-model="editAppDatas.form.url")
      el-form-item(label="禁止应用" prop="disabled")
        el-checkbox(v-model="editAppDatas.form.disabled")
      el-form-item
        el-button(@click="editApp" type="primary") 确定修改
</template>

<script>
import callAsync from '@/lib/awaitCall'
import { editApp } from '@/service/admin'
import { formApp } from '@/lib/rules'

export default {
  name: "editApp-component",
  data() {
    return {
      formRules: formApp
    }
  },
  methods: {
    async editApp() {
      const form = _.omit(this.editAppDatas.form, "created_at", "updated_at", "deleted_at")
      console.log("editApp: ", form)
      const [err] = await callAsync(editApp(form))
      if (err) return
      this.$emit("formVisibleFunc", 1, true)
    },
    beforeDialogClose(done) {
      this.$emit("formVisibleFunc", 1)
      if (typeof done === "function") done(false)
    }
  },
  props: ["editAppDatas"]
}
</script>

<style lang="scss" scoped>

</style>
