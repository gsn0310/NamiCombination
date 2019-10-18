<template>
    <div class="point ">
      <!--头部-->
      <div class="one1">
        <router-link :to="{path:'/Benefit'}" class="two"><</router-link>
        <h2>确认订单</h2>
        <div @click="main"> <img src="../../assets/img/rentou.png" />
        </div>
      </div>
      <!--添加收获地址-->
  <router-link :to="{path:'/ChooseAddress'}" class="address1">
    <img src="../../assets/img/add.png" height="200" width="200"/>
    <div>
      请添加一个收获地址
    </div>
    <span> > </span></router-link>
      <!--送达时间-->
      <div class="address2">
        <p>送达时间</p>
        <div>
          <p>尽快送达 | 预计0.5:09</p>
          <p>蜂鸟传送</p>
        </div>
      </div>
      <!--在线支付方式-->
      <div class="address3">
        <div class="address3_add1"  @click="showPopup">
          <div>支付方式</div>
          <div>
            <span>在线支付</span>
           <span>> </span>
          </div>
        </div>
        <div class="address3_add2">
          <div>红包</div>
          <div>暂时只在饿了么app中支持</div>
        </div>

      </div>
      <!--点击支付方式出现下拉弹框-->
      <van-action-sheet v-model="show" class="address3_alter">
        <div class="address3_alter1">支付方式</div>
        <div class="address3_alter2">
          <p>货到付款（商家不支持货到付款）</p>
          <p>√</p>
        </div>
        <div class="address3_alter3">
          <p>在线支付</p>
          <p>√</p>
        </div>
      </van-action-sheet>
      <!--效果演示-->
      <div class="address4">
        <div class="address4_add3">
          <img data-v-4e0d5034="" src="//elm.cangdu.org/img/164ad0b6a3917599.jpg">
          <span>效果演示</span>
        </div>
        <ul class="address5">
          <li>
            <div>我问问-默认</div>
            <span>×2</span>
            <span>￥20</span>
          </li>
          <li>
            <div>的味道切尔奇二群翁</div>
            <span>×3</span>
            <span>￥20</span>
          </li>
          <li>
            <div>222</div>
            <span>×2</span>
            <span>￥20</span>
          </li>
        </ul>
        <!--餐盒-->
        <div class="address6">
          <p>餐盒</p>
          <p>￥8764</p>
        </div>
        <div class="address7">
          <p>配送费</p>
          <p>￥4</p>
        </div>
        <div class="address8">
<p>订单￥8908</p>
          <div>
            <span>待支付</span><br/>
            <span>￥8909</span>
          </div>
        </div>
      </div>
<!--订单备注-->
      <div class="address9">
        <router-link :to="{path:'/Remark'}" class="address9_a1">
          <div>订单设备</div>
          <div>
            <span>{{res}}</span>
            <span>> </span>
          </div>
        </router-link>
        <router-link :to="{path:'/Invoice'}" class="address9_a1 address9_a2">
          <div>发票抬头</div>
          <div>
            <span>不需要开发票</span>
            <span>> </span>
          </div>
        </router-link>
      </div>
      <div class="address10">
        <div>待支付￥8908</div>
        <div>确认下单</div>
      </div>
</div>
</template>

<script>
    export default {
        name: "ConfirmOrder",
      data(){
          return{
            show: false,
            res:""
          }
      },

      methods:{
        main(){
          this.$router.push({path:'./Mine'})
        },
        showPopup() {
          this.show = true;
        },
      //  订单设备传过来的值

      },
      created(){
        this.res= this.$route.query.name;
          if(this.res==""){
           this.res="没接收到"
          }else {
            this.res= this.$route.query.name;
          }
        console.log(this.$route.query.name)
          this.myaxios.get("https://elm.cangdu.org/bos/v2/users/:user_id/orders",(res)=>{
            console.log(res);
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
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 3rem;
    background-color:#3190E8;
    color: white;
    display: flex;
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
    width: 20rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .one1>div>img{
    padding-top: .7rem;
    width: 2rem;
  }
  .address1{
    margin-top: 3rem;
    width:22.2rem;
    background:white url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR0IArs4c6QAAANxJREFUOBFjZICCpoUPWhn+M7rD+OTQjP8ZztQmymfg0/tr95JlDAz/I/GpISTHyMiwj9Ul1hmbOiaQYNfSx6qUegZkDisD01QQjQv837NMD+iYCFzyxIr/Z2asxqWWBSTx49e/LAZGXEqIFP/PcLgiUfYyPtV/GP62/P9PmU3AANnM6hhzApc9TB3zH+sCrbDFpYBYcQ42pmn41P7av8QC6BlffGoIyTEyMv5nYWCuwaeO6TfDv2x8CoiSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=) 0 100% repeat-x;
    background-size:auto .2rem ;
    display: flex;
    justify-content:space-between ;
    align-items: center;
    min-height: 5rem;
    padding: 0 .6rem;
  }
  .address1>img{
    width: 1.5rem;
    height: 1.5rem;
  }
  .address1>div{
    display: flex;
    justify-content: space-between;
    margin-left: -10rem;
    color: #333333;
  }
  .address1>span{
    font-size: 1.4rem;
    color:#999999 ;
  }
  .address2{
    border-left: .3rem solid #3190e8;
    min-height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .4rem;
    background-color: white;padding: 0 .7rem;
  }
  .address2>p{
    font-size: 1.2rem;
    color: #333;
    font-weight: 700;
    padding-left: .3rem;
  }
  .address2>div{
    display: flex;
   flex-direction: column;
    align-items: flex-end;
  }
  .address2>div>p:nth-child(1){
font-size: 1rem;
    color:#3190e8 ;
  }
  .address2>div>p:nth-child(2){
    font-size: .6rem;
    color: white;
    background-color:#3190e8;
    width: 3rem;
    margin-top: .5rem;
    text-align: center;
    border-radius: .12rem;
    padding: .2rem;
  }
 .address3{
   background-color: white;
   margin-top: .4rem;
   padding: 0 .7rem;
 }
  .address3_add1,.address3_add2{
    padding-top: .3rem;
    display: flex;
    justify-content: space-between;
    line-height:2.5rem;
    border-bottom: 1px solid #F7F7F7;
  }
  .address3_add1>div:nth-child(1){
    font-size: 1rem;
    color: #333;
  }
  .address3_add1>div:nth-child(2){
    color: #aaa;
    box-sizing: border-box;
   font-size: .9rem;
  }
  .address3_add1>div:nth-child(2)>span:nth-child(2){
    font-size: 1.2rem;
  }
  .address3_add2>div{
    color: #AAAAAA;
    font-size: .9rem;
  }
  .address3_alter{
    border-radius: 0;
  }
  .address3_alter1{
    background-color:#FAFAFA ;
    text-align: center;
    line-height: 3rem;
    color: #717171;
    font-size: 1.1rem;
  }
  .address3_alter2,.address3_alter3{
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 1rem;
    font-size: 1.1rem;
    color:#D0D0D0;
  }
  .address3_alter2>p:nth-child(2),.address3_alter3>p:nth-child(2){
    background-color:#EEEEEE ;
    color: white;
    width: 1rem;
    height: 1rem;
    text-align: center;
    font-size: 1.2rem;
    padding: .2rem;
    border-radius: 50%;
  }
  .address3_alter3{
    margin-bottom: 5rem;
  }
  .address3_alter3>p:nth-child(1){
    color: #333;
  }
.address3_alter3>p:nth-child(2){
  background-color:#4CD964 ;
}
  .address4{
    background-color: white;
    margin-top: .4rem;
  }
  .address4_add3{
    padding: .7rem;
    border-bottom:.1rem solid #f5f5f5 ;
  }
  .address4_add3>img{
    width: 2rem;
    vertical-align: -.5rem;

  }
  .address4_add3>span{
    font-size: 1.2rem;
    color: #333;
  }
  .address5{
    background-color: white;
    padding-top: .7rem;
  }
  .address5>li,.address6,.address7,.address8{
    display: flex;
    justify-content: space-between;
    line-height: 2.5rem;
    padding: 0 .7rem;
  }
  .address5>li>div{
    font-size: .9rem;
    color: #666;
    width: 16rem;
  }
  .address5>li>span:nth-child(2){
    color: #f60;
  }
.address7{
  border-bottom:.1rem solid #f5f5f5;
}
  .address8{
    padding: .3rem .7rem;
  }
  .address8>div{
    color: #f60;
    text-align: center;
    margin-right: 2rem;
  }
  .address9{
    background-color: white;
    margin-top: .4rem;
    padding: 0 .7rem;
    margin-bottom: 5rem;
  }
  .address9_a1{
    display: flex;
    justify-content: space-between;
    line-height: 3rem;
  }
  .address9_a1>div:nth-child(1){
    color: #333;
    font-size: 1.1rem;
  }
  .address9_a1>div:nth-child(2){
    color: #999;
    font-size: .9rem;
  }
  .address9_a1>div:nth-child(2)>span:nth-child(1){
    display: inline-block;
   white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width:15rem;
text-align: right;
  }

  .address9_a1>div:nth-child(2)>span:nth-child(2){
    font-size: 1.4rem;
vertical-align: 1rem;
  }
  .address9_a2{
    border-top: .1rem solid #f5f5f5;
  }
 .address10{
   display: flex;
   justify-content: space-between;
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 3rem;
 }
  .address10>div:nth-child(1){
    background-color: #3c3c3c;
    padding: 1rem;
    flex: 5;
   color: white;
  }
  .address10>div:nth-child(2){
    flex: 2;
    background-color: #56d176;
    text-align: center;
    color: white;
    padding: 1rem;
    font-size: 1.1rem;
  }
</style>
