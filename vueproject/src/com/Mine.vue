<template>
  <div id="appone">
    <div id="tou">
      <div id="tou1">
        <span><</span>
        <h2>我的</h2>
        <div class="clear"></div>
      </div>
      <div id="tou2">
        <router-link :to="{path:'/xinxi'}" id="toua">
          <div class="img1">
            <img src=".././assets/img/default.jpg" /></div>
          <div class="zj">
            <div>svdasd</div>
            <div><img src=".././assets/img/sj.png" height="20" width="20"/><span>暂无绑定手机号</span>
            </div>
          </div>
          <div class="right1">> </div>
          <div class="clear"></div>
        </router-link>
      </div>
    </div>
    <ul id="yue">
      <li>
        <router-link :to="{path:'/balance'}" class="yue1">
          <span>0.00</span><span>元</span>
          <div>我的余额</div>
        </router-link>

      </li>
      <li>
        <router-link :to="{path:'/discount'}" class="yue1">
          <span style="color: #FF5F3E">3</span><span>个</span>
          <div>我的优惠</div>
        </router-link>

      </li>
      <li>
        <router-link :to="{path:'/integral'}" class="yue1">
          <span style="color:#6AC20B ">0</span><span>分</span>
          <div>我的积分</div>
        </router-link>

      </li>
    </ul>
    <div id="dd">
      <router-link :to="{path:'/Order'}" class="dd1">
        <img src=".././assets/img/alignleft.png" height="20" width="20"/>
        <div>我的订单  <span>> </span></div>
      </router-link>
      <router-link :to="{path:'/integrals'}" class="dd1">
        <img src=".././assets/img/jifen.png" height="20" width="20"/>
        <div>积分商城  <span>> </span></div>
      </router-link>
      <router-link :to="{path:'/card'}" class="dd1">
        <img src=".././assets/img/hg.png" height="20" width="20"/>
        <div style="border-bottom: none">饿了么会员卡  <span style="margin-left: 13rem">> </span></div>
      </router-link>
    </div>
    <div id="fw">
      <router-link :to="{path:'/'}" class="dd1">
        <img src=".././assets/img/fk.png" height="20" width="20"/>
        <div>服务中心  <span>> </span></div>
      </router-link>
      <router-link :to="{path:'/'}" class="dd1">
        <img src=".././assets/img/E.png" height="20" width="20"/>
        <div style="border: none">下载饿了么app  <span style="margin-left: 12.1rem">> </span></div>
      </router-link>
    </div>
  </div>

</template>

<script>
  export default {
    name: "ProFileGe"
  }
</script>

<style scoped>
  #appone{
    width: 100%;
    height: 100%;
    background-color:#F5F5F5 ;
  }
  #tou{
    background: dodgerblue;
    width: 100%;
    height: 9rem;
  }
  #tou1{
    text-align: center;
    width: 100%;
    height: 2.5rem;
    color: white;
    box-sizing: border-box;
  }
  #tou1 >span{
    width: 2rem;
    float: left;
    font-size:1.8rem;
    padding: 0.4rem 0;
  }
  #tou1 >h2{
    padding: 0.6rem 0;
    width: 21rem;
    float: left;
    font-size: 1.2rem;
    font-weight: bold;
  }
  #tou2{
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    font-size: 1.2rem;
  }
  #toua{
    color: white;
  }
  .img1{
    float: left;
    width: 4rem;
  }
  .img1 img{
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  .zj{
    float: left;
    width: 12rem;
    margin: 0.5rem  0.6rem 0;
  }
  .zj>div{
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
  .zj>div>span{
    font-size: 0.8rem;
    vertical-align: 0.2rem;
    margin-left: 0.2rem;
  }
  .right1{
    text-align:right;
    width: 2rem;
    float: right;
    margin: 1.5rem 0;
  }
  #yue{
    width: 100%;
    height: 6rem;
    background-color: white;
    box-sizing: border-box;
  }
  #yue>li{
    text-align: center;
    width:7.8rem;
    padding: 1.6rem;
    float:left;
    box-sizing: border-box;
    border-right: 1px solid #F1F1F1;
  }
  #yue>li:nth-child(3){
    border-right:none;
  }
  .yue1>span:nth-child(1){
    font-size: 1.5rem;
    font-weight: bold;
    color: #FF9900;
  }
  .yue1>span:nth-child(2){
    color: black;
    font-size: 0.6rem;
  }
  .yue1>div{
    color:#666;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
  #dd{
    width: 100%;
    height: 9rem;
    background-color: white;
    margin: 0.6rem 0;
    box-sizing: border-box;
  }
  .dd1{
    display: block;
    color: black;
    font-size:1rem;
    padding: 0.2rem 0;
  }
  .dd1>div{
    padding: 0.7rem 0.5rem;
    float: right;
    border-bottom: 1px solid #F1F1F1;
  }
  .dd1>div>span{
    margin-left: 15rem;
    color: darkgray;
  }

  .dd1>img{
    /*float: left;*/
    margin: 0.5rem ;

  }
  #fw{
    width: 100%;
    height: 5.5rem;
    background-color: white;
  }
  .clear{
    clear: both;
  }

</style>
