<template>
  <div class="ban">
    <!--头部-->
    <div class="one1">
      <router-link :to="{path:'/Mine'}" class="two"><</router-link>
      <h2>我的余额</h2>
    </div>
    <!--第二部分余额提现-->
    <div class="one2">
      <div class="two1">
        <div class="three">
          <span >当前余额</span>
          <img src="../../assets/img/wh.png"/><span @click="banlace">余额说明</span>
        </div>
        <div class="three1">
          <span>0.00</span>
        <span>元</span>
        </div>
        <div class="three2">提现</div>
      </div>
    </div>
    <div class="one3">交易明细</div>
    <div class="one4">
      <img src="../../assets/img/zwsu.png" height="200" width="215"/>
    <div>暂无明细记录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Banlance",
    data(){
      return{
        content:[]
      }
    },
    methods:{
      banlace(){
this.$router.push({path:'/Detail',query:{requerys:this.content}})
      }
    },
   beforeCreate(){
      this.myaxios.get("https://elm.cangdu.org/v3/profile/explain",(data)=>{
        this.content=data.balanceContent
        // console.log(this.content);
      })
    }

  }
</script>

<style scoped>
  .ban {
    width: 100%;
    height: 100%;

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

  .one2 {
    width: 100%;
    height: 10rem;
    background-color: dodgerblue;
    overflow: hidden;
  }

  .two1 {
    margin: 0.5rem auto;
    background-color: white;
    width: 22rem;
    height: 9rem;
  }
  .three{
   padding: 0.5rem;
    font-size: 0.8rem;
  }
  .three>img{
    width: 1rem;
    height: 1rem;
    vertical-align: -0.2rem;
    margin-right: 0.2rem;
  }
  .three>span:nth-child(1){
    display: inline-block;
    width: 16rem;
  }
  .three>span:nth-child(3){
    color:dodgerblue ;
  }
  .three1{
    padding: 0.5rem;
    font-size: 0.8rem;
    color: black;
  }
  .three1>span:nth-child(1){
    font-size: 2rem;
  }
  .three2{
    margin: 1.2rem auto 1rem;
    width: 20rem;
    background-color: #CCCCCC;
    text-align: center;
    color: white;
    font-size: 1.2rem;
    padding: 0.6rem 0;
    border-radius: 5%;
  }
  .one3{
    margin: 0.8rem;
    font-size: 1rem;
  }
  .one4{
    text-align: center;
    margin-top: 5rem;
  }
  .one4>img{
    width: 5rem;
    height: 5rem;
    margin-bottom: 1rem;
  }

</style>
