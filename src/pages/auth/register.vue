<template lang="pug">
  #register
    .container
      .frosted-glass.box
        .boxContainer
          .registry_btn_layer.f-m-b-20.f-m-t-10
            div
              img(:src="require('@/assets/images/logo100.png')")
            .title
              span 用户注册
          el-form(:model="form" label-width="90px" :rules="formRule" ref="form")
            el-form-item(label="用户名" prop="username")
              el-input(v-model="form.username" :clearable="true")
            el-form-item(label="邮箱" prop="email")
              el-input(v-model="form.email" :clearable="true")
            el-form-item(label="密码" prop="password")
              el-input(v-model="form.password" type="password" @keyup.enter.native="registry")
            el-form-item(label="确认密码" prop="checkPassword")
              el-input(v-model="form.checkPassword" type="password" @keyup.enter.native="registry")
            el-form-item
              .registry_btn_layer
                el-button.registry_btn(type="primary" @click="registry") 注册

</template>

<script>
import callAsync from '@/lib/awaitCall'
import { registry } from '@/service/auth'

export default {
  name: "register",
  data () {
    const validateCheckPassword = (rule, value, callback) => {
      if (this.form.password !== value) {
        return callback(new Error("两次密码不一致"))
      }
      callback()
    }
    return {
      form: {
        username: "",
        email: "",
        password: "",
        checkPassword: ""
      },
      formRule: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur", min: 3, max:20 }],
        email: [{ required: false, message: "请填写关联邮箱", trigger: "blur", type: "email" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur", min: 6, max: 20 }],
        checkPassword: [{ required: true, message: "请输入校验密码", trigger: "blur", validator: validateCheckPassword }]
      }
    }
  },
  methods: {
    async registry () {
      this.$refs.form.validate(async (valid) => {
        if (!valid) return
        console.log("[register.registry] form: ", this.form)
        const [err] = await callAsync(registry(this.form))
        if (err) return
        this.$router.push({name: "login"})
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #register {
    .container {
      position: absolute;
      min-width: 100%;
      min-height: 100%;
      background: url(../../assets/images/registry_bg.jpg) no-repeat;
      background-size: cover;
      .box {
        margin: 0 auto;
        width: 410px;
        margin-top: 15vh;
        border-radius: 20px;
        .boxContainer {
          .registry_btn_layer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .registry_btn {
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
  #register .el-form-item__label {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
</style>