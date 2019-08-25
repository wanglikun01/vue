<template>
  <div id="app">
    <vheader></vheader>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  import vheader from '@/components/header/header.vue'
export default {
  name: 'App',
  components:{
    vheader
  }
}
</script>

<style>

</style>
