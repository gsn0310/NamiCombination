<template>
  <div class="detail">
    <!--头部-->
    <div class="one1">
      <router-link :to="{path:'/balance'}" class="two"><</router-link>
      <h2>余额问题</h2>
    </div>
    <div class="one2">{{detal.requerys}}</div>
  </div>

</template>

<script>
    export default {
        name: "Detail",
      data(){
          return{
            detal:{}
          }
      },
      created(){
          this.detal=this.$route.query
      }
    }
</script>

<style scoped>
  .detail {
    width: 100%;
    height: 100%;
background-color: white;
  }

  .one1 {
    width: 100%;
    height: 3rem;
    background-color: dodgerblue;
    color: white;
    box-sizing: border-box;
  }

  .two {
    text-align: center;
    float: left;
    width: 2rem;
    padding: 0.5rem 0;
    font-size: 1.6rem;
    color: white;
  }

  .one1 > h2 {
    padding: 0.7rem 0;
    text-align: center;
    float: left;
    width: 21rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .one2{
    padding: 0.8rem;
    font-size: 1rem;
    letter-spacing: 0.3rem;
    line-height:1rem;
  }
</style>
