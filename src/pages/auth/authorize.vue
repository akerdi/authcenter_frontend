<template lang="pug">
  .m-authorize
    .container
      .box
        .layer
          el-button(@click="authorize") 授权

</template>

<script lang="ts">
import Vue from 'vue'
import callAsync from '@/lib/awaitCall'

import { authorize } from '@/service/auth'

export default Vue.extend({
  name: "authorize",
  data () {
    return {
      formRule: {

      },

    }
  },
  methods: {
    async authorize () {
      const [err, result] = await callAsync(authorize(this.$route.query as any))
      console.log(">>>DSFASDF>SDAF>SDAF ", err)
      if (err) return
      console.log("========", result)
    }
  },
  mounted () {
    console.log("==========", this.$route.query)
  }
})
</script>

<style lang="scss">
  .m-authorize {
    .container {
      width: 90%;
      .box {
        margin: 0 auto;
        margin-top: 10vh;
        max-width: 400px;
        max-height: 410px;
        min-height: 100px;
        background-color: rgba($color: #555555, $alpha: 0.05);
        .layer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
        }
      }
    }
  }
</style>