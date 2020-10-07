<template lang='pug'>
  .m-login
    .container
      .box
        el-form(:model="form" label-width="80px" :rules="formRule" ref="form")
          el-form-item(label="用户名" prop="username")
            el-input(v-model="form.username" clearable="")
          el-form-item(label="密    码" prop="password")
            el-input(v-model="form.password" type="password")
          el-form-item
            el-button.login_btn(type="primary" @click.native.prevent="login" :loading="loading") 登录
</template>

<script>
import Vue from 'vue'
import callAsync from '@/lib/awaitCall'
import { login } from '@/service/auth'
export default Vue.extend({
  name: "login",
  data () {
    return {
      form: {
        username: "",
        password: ""
      },
      loading: false,
      formRule: {

      }
    }
  },
  methods: {
    async login () {
      console.log("-----", this.form)
      this.loading = true
      const [err, result] = await callAsync(login(this.form))
      this.loading = false
      if (err) return
      window.location = "/"
    }
  },
  mounted () {

  }
})
</script>

<style lang='scss' scoped>
  .m-login {
    .container {
      .box {
        margin: 0 auto;
        width: 400px;
        height: 600px;
        margin-top: 10vh;
      }
    }
  }
  .box {
    margin: 0 auto;
    width: 400px;
    height: 600px;
  }
</style>