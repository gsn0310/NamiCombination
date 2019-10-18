<template>
    <div class="ban">
      <!--头部-->
      <div class="one1">
        <router-link :to="{path:'/ConfirmOrder'}" class="two"><</router-link>
        <h2>订单设备</h2>
      </div>
      <!--快速备注-->
      <div class="remark">
        <div>快速备注</div>
      <div class="remark_am">
        <div>
          <span :class="{bluebg:blue1==1}" @click="blue1=1">不要辣</span><span :class="{bluebg:blue1==2}" @click="blue1=2">少点辣</span><span :class="{bluebg:blue1==3}" @click="blue1=3">多点辣</span>
        </div>
        <div :class="{bluebg:blue2}" @click="bgblue1">不要香菜</div>
      </div>
        <div class="remark_am1">
          <div :class="{bluebg:blue3}" @click="bgblue2">不要洋葱</div>
          <div :class="{bluebg:blue4}" @click="bgblue3">多点醋</div>
          <div :class="{bluebg:blue5}" @click="bgblue4">多点葱</div>
        </div>
        <div class="remark_am2">
          <span :class="{bluebg:blue6==1}" @click="blue6=1" >去冰</span><span :class="{bluebg:blue6==2}" @click="blue6=2" >少冰</span>
        </div>
      </div>
      <!--其他备注-->
      <div class="remark1">
        <div>其他备注</div>
        <textarea placeholder="请输入备注内容(可不填)" v-model="text" class="remark1_text" />
      </div>
      <div class="remark2" @click="remark">确定</div>
    </div>
</template>

<script>
    export default {
        name: "Remark",
      data(){
          return{
            //文本输入备注
            text:"",
            blue1:0,
            blue2:false,
            blue3:false,
            blue4:false,
            blue5:false,
            blue6:0,
          }
      },
      methods:{
        bgblue1(){
          this.blue2=true
        },
        bgblue2(){
          this.blue3=true
        },
        bgblue3(){
          this.blue4=true
        },
        bgblue4(){
          this.blue5=true
        },

        remark(){
        let lab=""
         switch (this.blue1) {
           case 1:
             lab=lab+"不要辣";
             break;
           case 2:
             lab=lab+"少点辣";
             break;
           case 3:
             lab=lab+"多点辣";
             break
         }
         if(this.blue2){
           lab=lab+"不要香菜";
         }
         if(this.blue3){
           lab=lab+"不要洋葱";
         }
         if(this.blue4){
           lab=lab+"多点醋";
         }
         if (this.blue5){
           lab=lab+"多点葱";
         }
         switch (this.blue6) {
           case 1:
             lab=lab+"去冰";
             break;
           case 2:
             lab=lab+"少冰"
         }
         lab=lab+this.text
this.$router.push({path:'./ConfirmOrder',query:{name:lab}})
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
  .remark{
    background-color: white;
   width: 21.5rem;
    margin-top: .7rem;
    padding: 1rem;
  }
  .remark_am{
    display: flex;
    justify-items: left;
    margin: .7rem 0;
    color: black;
    font-size: .8rem;
  }
  .remark_am>div:nth-child(1){
    border: .05rem solid #3190E8;
    border-radius: .3rem;

  }
  .remark_am>div:nth-child(1)>span{
    display: inline-block;
    padding: .7rem;
    border-right: .01rem solid #3190E8;
  }
  .remark_am>div:nth-child(1)>span:nth-child(3){
    border-right: none;
  }
  .remark_am>div:nth-child(2){
    margin-left: 1rem;
    border: .05rem solid #3190E8;
    border-radius: .3rem;
   padding: .7rem;
  }
  /*点击时改变背景色*/
  .bluebg{
    background-color:#3190E8 ;
    color: white;
  }
  .remark_am1{
    display: flex;
    justify-content: left;
    color: black;
    font-size: .8rem;
  }
  .remark_am1>div{
   margin-right: .8rem;
    border: .05rem solid #3190E8;
    border-radius: .3rem;
    padding: .5rem;
  }
  .remark_am2{
   margin: 1rem 0;
    width: 8rem;
    border: .05rem solid #3190E8;
    border-radius: .3rem;
    color: black;
    font-size: .8rem;
    box-sizing: border-box;
  }
  .remark_am2>span{
    width:2.8rem;
    display: inline-block;
    text-align: center;
    padding: .56rem;
    line-height: .5rem;
  }
  .remark_am2>span:nth-child(1){
    border-right:.05rem solid #3190E8 ;
  }
  .remark1{
    width: 21.5rem;

    margin-top: .8rem;
    background-color:white;
    padding: 1rem;
  }
  .remark1>div:nth-child(1){
    color: black;
    font-size: .9rem;
    margin-bottom: .2rem;
  }
  .remark1_text{
    width:20rem;
    height: 6rem;
    border: .01rem solid #E2E0E0;
    background-color: #F9F9F9;
    padding: .8rem;
    margin-bottom: 1rem;
  }
  .remark2{
    background-color: #4CD964;
    color: white;
    width: 21rem;
    margin: 0 auto;
    text-align: center;
    border-radius: .3rem;
    line-height: 2.5rem;
  }
</style>
