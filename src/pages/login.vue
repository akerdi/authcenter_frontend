<template lang='pug'>
  #login
    .container
      .frosted-glass.box
        .boxContainer
          .login_btn_layer
            img.f-m-b-20(:src="require('@/assets/images/logo100.png')")
          el-form(:model="form" label-width="80px" :rules="formRule" ref="form")
            el-form-item(label="用户名" prop="username")
              el-input(v-model="form.username" clearable="")
            el-form-item(label="密    码" prop="password")
              el-input(v-model="form.password" type="password" @keyup.enter.native="login()")
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
  #login {
    .container {
      position: absolute;
      min-width: 100%;
      min-height: 100%;
      background: url(../assets/images/login_bg.jpg) no-repeat;
      background-size: cover;
      .frosted-glass {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 72vw;
        height: 36vh;
        box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
          0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
          0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(20px);
        transition: 0.5s ease;

        &:hover {
          box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157),
            0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28),
            0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5);
        }
      }

      .box {
        margin: 0 auto;
        width: 400px;
        margin-top: 15vh;
        border-radius: 20px;
        .boxContainer {
          .login_btn_layer {
            display: flex;
            justify-content: center;
            align-items: center;
            .login_btn {
              width: 130px;
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