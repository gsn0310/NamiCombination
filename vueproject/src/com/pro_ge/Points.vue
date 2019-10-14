<template>
<div class="point">
  <!--头部-->
  <div class="one1">
    <router-link :to="{path:'/Mine'}" class="two"><</router-link>
    <h2>我的积分</h2>
  </div>
  <!--第二部分余额提现-->
  <div class="one2">
    <div class="two1">
      <!--积分说明-->
      <div class="three">
        <span >当前积分</span>
        <img src="../../assets/img/wh.png"/>
        <span @click="banlace">积分说明</span>
      </div>
      <div class="three1">
        <span>0</span>
        <span>分</span>
      </div>
      <div class="three2" @click="laterdetail">积分兑换商品</div>
    </div>

  </div>
  <div class="one3">最近30天积分纪录</div>
  <div class="one4">
    <img src="../../assets/img/zwsu.png" height="200" width="215"/>
    <div>最近30天无积分纪录</div>
    <div>快去下单赚取大量积分吧</div>
  </div>
  <!--点击登录弹出提示框-->
  <div class="login1  heartBeat" v-if="hiddens">
    <div>
      <img src="../../assets/img/tanhao.png"/></div>
    <div>快去下单赚取大量积分吧{{}}</div>
    <van-button type="primary" class="login2" @click="logine" >确认</van-button>
  </div>
</div>
</template>

<script>
    export default {
        name: "Points",
      data(){
        return{
          content:[],
          hiddens:false
        }
      },
      methods:{
        //点击按钮弹框出现
        laterdetail(){
          this.hiddens=true
        },
        logine(){
          this.hiddens=false
        },
        banlace(){
          this.$router.push({path:'/Details',query:{requerys:this.content}})
        }
      },
      beforeCreate(){
        this.myaxios.get("https://elm.cangdu.org/v3/profile/explain",(data)=>{
          this.content=data.pointtextContent
          console.log(data);
        })
      }


    }
</script>

<style scoped>
  .point {
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
    background-color: #FE6D47;
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
  .one4>div:nth-child(3){
    margin-top: 0.8rem;
    font-size: 0.7rem;
    color: darkgray;
  }
  .login1{
    width: 18rem;
    background-color: white;
    text-align: center;
    border-radius: 6%;
    position: absolute;
    top: 12rem;
    left: 2.5rem;
  }
  .login1>div:nth-child(1){
    padding:1rem 0;

  }

  .login1>div img{
    width: 4rem;
  }
  .login1>div:nth-child(2) {
    margin-bottom: 1.5rem;
  }
  .login2{
    width: 18rem;
    border-radius: 0 0 1rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
</style>
