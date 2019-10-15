<template>
  <div class="point">
    <!--头部-->
    <div class="one1">
      <router-link :to="{path:'/Benefit'}" class="two"><</router-link>
      <h2>推存有奖</h2>
    </div>
    <div class="com">
      <img src="../../assets/img/activity.png" height="457" width="750"/></div>
    <!--通过不同的方式邀请好友-->
    <ul class="com1">
      <li>
        <img src="../../assets/img/weixin.png" @click="getAlter"/>
        <div>邀请微信好友</div>
      </li>
      <li>
        <img src="../../assets/img/qq.png" @click="getAlter"/>
        <div>邀请QQ好友</div>
      </li>
      <li>
        <img src="../../assets/img/mdm.png" @click="getAlter"/>
        <div>面对面邀请</div>
      </li>
    </ul>
    <!--累计收益邀请人数-->
    <ul class="com2">
      <li>
        <div>累计收益</div>
        <div><span>0</span>元</div>
      </li>
      <li>
        <div>成功邀请</div>
        <div><span style="color: #666666">0</span>人</div>
      </li>
    </ul>
    <!--收益明细-->
    <div class="com3">-收益明细-</div>
    <!--红包图-->
    <div class="com4">
      <img src="../../assets/img/hb.png"  />
    <div>还不赶紧去邀请好友</div>
    </div>
    <div class="login1  heartBeat" v-if="hiddens">
      <div>
        <img src="../../assets/img/tanhao.png"/></div>
      <div>请在饿了么APP中打开</div>
      <van-button type="primary" class="login2" @click="logine">确认</van-button>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Commend",
    data(){
      return{
        hiddens:false
      }
    },
    methods:{
      //点击时出现弹框
      getAlter(){
        this.hiddens=true
      },
      //点击时隐藏弹框
      logine(){
        this.hiddens=false
      }
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

  .com {
    width: 100%;
    height: 14.5rem;
    font-size: 0;
  }

  .com > img {
    width: 100%;
    height: 100%;

  }

  .com1 {
    background-color: white;
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: space-around;
    padding: 1.2rem 0;
    font-size: .8rem;
    color: #333333;
  }

  .com1 > li > img {
    width: 4rem;
    margin-bottom: 0.2rem;
  }
  .com2{
    display: flex;
    justify-content:space-around;
    padding: .8rem 0;
  }
  .com2>li{
    width: 12rem;
    text-align: center;
    font-size: .8rem;
  }
  .com2>li:nth-child(1){
    border-right: 1px solid #DDDDDD;

  }
  .com2>li>div{
    margin-bottom: .5rem;
  }
  .com2>li>div>span{
    font-size: 1.2rem;
    font-weight: bold;
    color:#FF5633 ;
  }
  .com3{
    font-size: .8rem;
    text-align: center;
  }
  .com4{
    margin-top: 2rem;
    text-align: center;
    font-size: .8rem;
    color: #999999;
  }
  .com4>img{
    width: 3rem;
    margin-bottom: .5rem;
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
    font-size: 1.3rem;
    font-weight: bold;
    background-color:#4CD964 ;
  }

</style>
