<template>
    <div class="app1">
      <!--头部-->
      <div class="one1">
        <router-link :to="{path:'/ConfirmOrder'}" class="two"><</router-link>
       <h2>选择地址</h2>
      </div>
      <!--通过传值接收的地址-->
      <div class="address">
        <div>
          <img src="../../assets/img/duihao.png" /></div>
        <div class="address_xinxi">
         <div><span>张</span><span>先生 124566465656</span>
         </div>
          <div><span>2</span><span>加拿大</span></div>
        </div>
      </div>
     <!--新增收获地址-->
      <div class="add">
        <router-link :to="{path:'/AddAddress'}" class="add_a1">
          <img src="../../assets/img/address.png" /><span>新增收获地址</span></router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ChooseAddress"
    }
</script>

<style scoped>
  .app1 {
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
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
  }

  .two {
    text-align: center;
    width: 2rem;
    padding: 0.5rem 0;
    font-size: 1.6rem;
    color: white;
  }

  .one1 > h2 {
    padding: 0.7rem 0;
    text-align: center;
    width: 21rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .add{
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  .add_a1{
    width: 100%;
    display: inline-block;
    padding: 1rem 0;
  }
  .add_a1>span{
    color: #4D9FEB;
  }
  .add_a1>img{
    width: 1.5rem;
    vertical-align: -.3rem;
    margin-right: .5rem;
  }
  .address{
    margin-top:3rem;
    display: flex;
    justify-content: space-around;

    padding: .7rem 0;
    border-bottom: .01rem solid #E8E3E3;
  }
  .address>div:nth-child(1){
    width: 1rem;
    height: 1rem;
   background-color:#4CD964 ;
    border-radius: 50%;
    text-align: center;
   padding: .2rem .2rem;
    margin-top: 1rem;
  }
  .address>div:nth-child(1)>img{
    width: 1rem;
  }
  .address>div:nth-child(2){
    width: 20rem;
  }
 .address_xinxi>div:nth-child(1)>span:nth-child(1){
   font-size: 1.1rem;
   color: black;
   font-weight: bold;
   margin-right: .3rem;
 }
  .address_xinxi>div:nth-child(1)>span:nth-child(2){
    color: #333;
    font-size: .8rem;
  }
  .address_xinxi>div:nth-child(2)>span:nth-child(1){
    background-color: #FF5722;
    font-size: .7rem;
    border-radius: .1rem;
    padding: 0 .3rem;
    color: white;
    margin-right: .3rem;
  }
  .address_xinxi>div:nth-child(2){
    margin: .5rem 0;
  }
  .address_xinxi>div:nth-child(2)>span:nth-child(2){
    font-size: .8rem;
    color:#777777 ;
  }
</style>
