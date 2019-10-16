<template>
    <div class="laodada">
      <!--导航头-->
      <div class="myheader laodada">
        <img src="../../assets/img/picture_xu/arrow_left.png" @click="back_AccountGe">
        <p>编辑地址</p>
        <div @click="dianjibianzi">{{zhuangtai}}</div>
      </div>
      <div class="fengexian">
         <div v-for="(v,index) in dizhi_data" :key="index">
           <p class="p1">{{v.name}}</p>
           <p class="p2">{{v.shoujihao}}</p>
         </div>
      </div>
      <p class="dizhikuang" @click="to_addressJuTi">
        <span class="sp01">新增地址</span>
        <span class="sp02"><span class="iconfont icon-jiantou3"></span></span>
      </p>

    </div>
</template>

<script>
    export default {
        name: "Bianjidizhi_xu",
      data(){
          return {
            zhuangtai:"编辑",
            dianji_zhuangtai:true,
            //声明变量储存编辑好的地址信息
            dizhi_data:[],
          }
      },
      methods:{
        back_AccountGe(){
          this.$router.push({path:"/AccountGe"});
        },
        dianjibianzi(){
          if (this.dianji_zhuangtai) {
            this.zhuangtai = "完成";
          }else{
            this.zhuangtai = "编辑";
          }
          this.dianji_zhuangtai = !this.dianji_zhuangtai;
        },
        to_addressJuTi(){
          this.$router.push({path:"/addressJuTi"});
        }
      },
      created(){
          //从vuex中获取地址信息，存在定义好的变量里
        this.dizhi_data = this.$store.state.vuexone.dizhi_data;
        //console.log("这是编辑的地址信息",this.$store.state.vuexone.dizhi_data);
      },
    }
</script>

<style scoped lang="less">
  @import "//at.alicdn.com/t/font_1459373_cpotpjq7sp7.css";
  .laodada{
     position: relative;
   }
  .myheader{
    width: 100%;
    height: 3rem;
    background-color: blue;
    position: relative;
    img{
      width: 10%;
      position: absolute;
      top: 50%;
      transform:translateY(-50%);
    }
    p{
      color: white;
      font-size: 1.3rem;
      font-weight: 600;
      text-align: center;
      line-height: 3rem;
    }
    div{
      font-size: 1rem;
      color: white;
      position: absolute;
      top: 50%;
      right: 1rem;
      transform:translateY(-50%);
    }
  }
  .fengexian{
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    margin: 0.5rem 0;
    background-color: white;
    div{
      border-top: 1px solid rgba(0,0,0,0.2);

      .p1{
        margin:0.2rem 0;
      }
      .p2{
        margin:0.2rem 0;
      }
    }
  }
  .dizhikuang{
    width: 100%;
    height: 3rem;
    box-sizing: border-box;
    background-color: white;
    border-top: 1px solid rgba(0,0,0,0.1);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    line-height: 3rem;
    padding:0 0.7rem;

    .sp01{
      display: inline-block;
      width: 70%;
    }
    .sp02{
      display: inline-block;
      width: 28%;
      text-align: right;
    }

  }
</style>
