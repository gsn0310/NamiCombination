
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import "./assets/css/reset.css"
  import "./assets/js/resize"
  import Home from "./com/Home";
export default {
  name: 'App',
  components: {Home},
}




</script>




<style>

  html,body{
    background: rgb(245,245,245);
    height: 100%;
  }
#app{
  height: 100%;
}
</style>
