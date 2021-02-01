<!--  -->
<template>
  <div>
    首页
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
//(1)引入底部导航栏组件
import FooterGuide from "../../components/FooterGuide/FooterGuide.vue"
export default {
  data () {
    return {
    };
  },
  //(2)注册组件
  components: {
    FooterGuide
  },

  computed: {},

  methods: {}
}

</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
</style>