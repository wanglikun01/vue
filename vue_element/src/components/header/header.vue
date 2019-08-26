<template>
  <div class="header">
      <div>{{msg}}</div>
      <div class="name">wecome smile</div>
    <!--<vhello></vhello>-->
    <!--<router-view/>-->
  </div>
</template>

<script>
  // import vhello from '@/components/hello.vue'
export default {
  name: 'HelloWorld',
  // components:{
  //   vhello
  // },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "header.scss";
</style>
