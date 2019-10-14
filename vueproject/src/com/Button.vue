<template>
    <div>
      <!--<h1>这是button组件</h1>-->
      <van-tabbar >
        <van-tabbar-item icon="home-o" @click="Take_Out">外卖</van-tabbar-item>
        <van-tabbar-item icon="search" @click="seek">搜索</van-tabbar-item>
        <van-tabbar-item icon="friends-o" @click="indent">订单</van-tabbar-item>
        <van-tabbar-item icon="setting-o" @click="mine">我的</van-tabbar-item>
      </van-tabbar>
      <transition name="fade" mode="out-in">
      <RouterView></RouterView>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "Button",
      data(){
          return{
            active: 0
          }
      },
      methods:{
        Take_Out(){
          console.log("点击跳转到外卖");
          this.$router.push({
            path:'/Classify'
          })
        },
        seek(){
          console.log("点击跳转到搜索");
          this.$router.push({
            path:'./Seek'
          })
        },
        indent(){
          console.log("点击到订单页面");
          this.$router.push({
            path:'./Indent'
          })
        },
        mine(){
          console.log("点击到我的页面");
          this.$router.push({
            path:'./Mine'
          })
        }
      },


    }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
