
<template>
  <div id="app">
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
