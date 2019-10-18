<template>
    <div class="point">
      <!--头部-->
      <div class="one1">
        <router-link :to="{path:'/Benefit'}" class="two"><</router-link>
        <h2>兑换红包</h2>
      </div>
      <div class="change">
        <!--兑换码输入框-->
          <van-field v-model="hbchange" placeholder="请输入兑换码"  class="inputV1" @keyup="getInputValue"/>
      </div>
      <!--输入验证码-->
      <div class="change1">
        <div>
        <van-field v-model="yanzhengma" placeholder="验证码"  class="inputV1" @keyup="getInputValue"/>
        </div>
        <!--获取验证码-->
        <div>
          <img :src="img1" >
          <!--点击事件更换验证码-->
          <div class="change3" @click="ChangeImg">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </div>
      <div class="change4"  v-if="btnshow">兑换</div>
      <div class="change5" @click="LoginAlter"  v-if="!btnshow">兑换</div>
      <!--点击登录弹出提示框-->
      <div class="login1  heartBeat" v-if="hiddens">
        <div>
          <img src="../../assets/img/tanhao.png"/></div>
        <div>{{altermes}}</div>
        <van-button type="primary" class="login2" @click="logine">确认</van-button>

      </div>
    </div>
</template>

<script>
    export default {
        name: "ExChange",
      data(){
          return{
            //获取兑换码
            hbchange:"",
            //获取图片
            img1:"",
            //获取验证码
            yanzhengma:"",
            hiddens:false,
            altermes:"",
            btnshow:true
          }
      },
      methods:{
        //  点击看不清换图片
        ChangeImg(){
          this.myaxios.post("https://elm.cangdu.org/v1/captchas",{},(res)=>{
            this.img1=res.code
            console.log( this.img1);
          })
        },
        //点击时出现弹框
        LoginAlter(){

          this.hiddens=true
          this.myaxios.post("https://elm.cangdu.org/v1/users/:user_id/hongbao/exchange",{exchange_code:this.hbchange,captcha_code:this.yanzhengma},(data)=>{
            this.altermes=data.message
            console.log(data);
          })
        },
        logine(){
this.hiddens=false
        },
        //判断输入框输入时触发按钮
       getInputValue(){
          if(this.hbchange.length>=1 && this.yanzhengma.length==4){
            this.btnshow=false;
          }else {
            this.btnshow=true;
          }
       }
      },
      //通过网络请求获取验证码
      created(){
          this.myaxios.post("https://elm.cangdu.org/v1/captchas",{},(res)=>{
            this.img1=res.code
            console.log( this.img1);
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
  .change{
    margin: 1rem 0.5rem;
    border-radius: .8rem;

  }
  .inputV1{
    border-radius: .5rem;
    font-size: 1rem;
    color: #A4A4A4;
    height: 3rem;
  }
  .change1{
    margin: 1rem 0.2rem;
    border-radius: .8rem;
    display: flex;
    justify-content: center;
  }
  .change1>div:nth-child(2){
    border-radius: .5rem;
    background-color: white;
    margin-left: 0.5rem;
    display: flex;

  }
  .change1>div:nth-child(2)>img{
    width: 5.5rem;
    height: 2.5rem;
    margin: 0 0.3rem;
  }
  .change3{
    font-size: .8rem;
    margin: 0.5rem 0;
    padding-right: 0.3rem;
  }
  .change3>p:nth-child(2){
    color: dodgerblue;
    margin-top: 0.5rem;
  }
  .change4,.change5{
    margin: 0 0.8rem;
    background-color:#CCCCCC ;
    color: white;
    text-align: center;
    padding: 1rem 0;
    border-radius: .5rem;
  }
  .change5{
    background-color: #4CD964;
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
