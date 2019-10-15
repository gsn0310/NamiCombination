<template>
  <div class="detail">
    <!--头部-->
    <div class="one1">
      <router-link :to="{path:'/Benefit'}" class="two"><</router-link>
      <!--标题-->
      <h2>{{gettitle}}</h2>
    </div>
    <!--积分问题简介-->
    <div class="context"  >
    {{getcon}}
    <div v-for="(x,y) in con" :key="y" class="text">
      <h3 class="title">{{x[0]}}</h3>
      <p class="p1">{{x[1]}}</p>
    </div>
  </div>
  </div>

</template>

<script>
    export default {
        name: "Description",
      data(){
        return{
          con:[]
        }
      },
      computed:{
        //通过$route接收的标题
        gettitle(){
          return this.$route.query.title
        },
        //通过route接收的红包问题简介
        getcon(){
          let val=this.$route.query.content;
          let everyval=val.split("###")
          for (let i=0;i<everyval.length;i++){
            let v=everyval[i].split("？ ")
            this.con.push(v)
          }

        }
      }
    }
</script>

<style scoped>
  .detail {
    width: 100%;

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
  .context{
    padding-left: 0.5rem;
  }
  .title{
    line-height: 2rem;
    font-size: 1rem;
    color: black;
  }
  .text>p{
    font-size: .9rem;
    color: #666;
    line-height: 1.5rem;
    letter-spacing: .2rem;

  }
</style>
