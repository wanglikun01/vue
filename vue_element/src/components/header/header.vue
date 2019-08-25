<template>
  <div class="header">
      <div>{{msg}}</div>
      <div class="name">wecome smile</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      msg: 'Welcome to Your Vue.js App',
      visible: false,
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "header.scss";
</style>
