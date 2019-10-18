<template>
    <div class="ban">
      <!--头部-->
      <div class="one1">
        <router-link :to="{path:'/ConfirmOrder'}" class="two"><</router-link>
        <h2>选择发票抬头</h2>
      </div>
      <!--不需要开发票-->
      <div class="fapiao">
        <div>不需要开发票</div>
        <div class="radio" v-if="show" @click="showRadio">
          <img src="../../assets/img/duihao.png" />
        </div>
        <div class="radio radio1" v-else @click="showRadio1">
          <img src="../../assets/img/duihao.png" />
        </div>
      </div>
      <div class="invoice1" @click="inviteBtn">确定</div>
    </div>
</template>

<script>
    export default {
        name: "Invoice",
      data(){
          return{
            show:true
          }
      },
      methods:{
        bgn(){
          this.greens=true
        },
        showRadio(){
          this.show=false
        },
        showRadio1(){
          this.show=true
        },
        // 点击确定跳转到确认订单
        inviteBtn(){
          this.$router.push({path:'./ConfirmOrder'})
        },
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
    background-color: #3190E8;
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
  .fapiao{
    background-color: white;
    width:22rem;
    display: flex;
    justify-content: space-between;
    padding: .7rem;
    margin-top: .7rem;
    color: black;
  }
  .radio{
    background-color:#999999 ;
    border-radius: 50%;

  }
  .radio1{
    background-color:#4CD964 ;
  }
  .radio>img{
    width: 1rem;
    padding: .2rem;
  }
  .invoice1{
    background-color:#4CD964 ;
    width: 21rem;
    margin: .7rem auto;
    text-align: center;
    line-height: 3rem;
    border-radius: .2rem;
    color: white;
  }
</style>
