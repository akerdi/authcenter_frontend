<template lang='pug'>
  #login
    .container
      .frosted-glass.box
        .boxContainer
          .login_btn_layer.f-m-b-20.f-m-t-10
            div
              img(:src="require('@/assets/images/logo100.png')")
            .title
              span 登录服务

          el-form(:model="form" label-width="80px" :rules="formRule" ref="form")
            el-form-item(label="用户名" prop="username")
              el-input(v-model="form.username" :clearable="true")
            el-form-item(label="密    码" prop="password")
              el-input(v-model="form.password" type="password" @keyup.enter.native="login")
            el-form-item
              .login_btn_layer
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

      },
      redirect: null
    }
  },
  methods: {
    async login () {
      this.loading = true
      const [err, result] = await callAsync(login(this.form))
      this.loading = false
      if (err) return
      if (this.redirect) return window.location = this.redirect
      window.location = "/"
    }
  },
  mounted () {
    console.log("@@@@@@", this.$route.query)
    const { redirect } = this.$route.query
    if (redirect) this.redirect = redirect
  }
})
</script>

<style lang='scss' scoped>
  #login {
    .container {
      position: absolute;
      min-width: 100%;
      min-height: 100%;
      background: url(../../assets/images/login_bg.jpg) no-repeat;
      background-size: cover;

      .box {
        margin: 0 auto;
        width: 400px;
        margin-top: 15vh;
        border-radius: 20px;
        .boxContainer {
          .login_btn_layer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .login_btn {
              width: 200px;
            }
            .title {
              font-size: 25px;
              color: white;
              font-weight: bolder;
            }
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  #login .el-form-item__label {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
</style>