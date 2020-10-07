<template lang="pug">
  #app.g-content
    .m-header(v-if="$store.getters['user/isLoggedIn']")
      m-header
    .g-bd.f-beautify-scrollbar
      .g-warpper
        router-view
      .g-ft
        .f-fc-ccc.f-fs-14.f-tac.f-m-b-10 © 2015-{{ new Date().getFullYear() }} 登录服务
</template>

<script>
import header from './components/header'
export default {
  name: 'App',
  components: {
    'm-header': header
  }
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.m-header{
  height: 64px;
  flex: none;
}
.g-bd{
  flex: auto;
  overflow: auto;
  padding: 0 0px;
  height: 100%;
}
.g-warpper{
  min-height: calc(100% - 70px);
}
</style>
