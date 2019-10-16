<template>
    <div>
      <!--导航头-->
      <div class="myheader laodada">
        <img src="../../assets/img/picture_xu/arrow_left.png" @click="back_AddressJuTi">
        <p>搜索地址</p>
      </div>
      <!--输入框-->
      <div class="shuruquyu">
        <input type="text" placeholder="小区/写字楼/学校等" v-model="dizhi">
        <div @click="dianjiisousuo">确认</div>
      </div>
      <!--提示语句-->
      <div class="tishiyuju">为了满足商家的送餐要求,建议您从列表中选择地址</div>
      <!--提醒用户找地址的语句-->
      <div class="zhaodizhi" v-if="wenzhi_xianyin">
        <div>
          <p>找不到地址?</p>
          <p>请尝试输入小区,写字楼或学校名</p>
          <p>详细地址 (如门牌号) 可稍后输入哦。</p>
        </div>
      </div>
      <!--搜索出来的信息展示-->
      <div v-else class="dizhixinxi">
        <div v-for="(v,index) in dizhi_data" :key="index" @click="To_AddressJuTi(v.name)">
          <p class="p1">{{v.name}}</p>
          <p class="p2">{{v.address}}</p>
        </div>
      </div>

    </div>
</template>

<script>
  import Vue from 'vue';
    export default {
        name: "Sousuodizhiye",
        data(){
          return {
            //储存需要使用的地址
            dizhi:"",
            //声明变量储存详细地址信息
            dizhi_data:[],
            //声明变量储存详细地址信息是否显示的状态，也就是文字提示是否隐藏
            wenzhi_xianyin:true,
          }
        },
      created(){
          //获取上一个页面传来的地址信息
           this.dizhi=this.$route.query.dizhi;
           console.log(this.dizhi);
      },
      methods:{
        dianjiisousuo(){
          //点击文字提示信息隐藏，详细地址信息显示
          this.wenzhi_xianyin = false;
          //点击发起搜索地址信息的网络请求
          let wangzhi = "https://elm.cangdu.org/v1/pois?city_id=1&keyword="+this.dizhi;
          this.myaxios.get(wangzhi,(data)=>{
            //console.log("这是请求到的详细地址信息",data);
            this.dizhi_data = data;
          })
        },
        back_AddressJuTi(){
          //返回上一页
          this.$router.push({path:"/addressJuTi"});
        },
        To_AddressJuTi(v){
          //返回上一页带地址数据
          this.$router.push({path:"/addressJuTi",query:{dizhi_data:v}});
        },
      },

    }
</script>

<style scoped lang="less">
  .laodada{
    position: relative;
  }
  .myheader{
    width: 100%;
    height: 3rem;
    background-color: blue;
    position: sticky;
    top:0;
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
  .shuruquyu{
    width: 100%;
    height: 3rem;
    background-color: white;

    input{
      width: 70%;
      height: 2rem;
      box-sizing: border-box;
      background-color: rgba(0,0,0,0.1);
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 5px;
      padding-left: 0.5rem;
      margin: 0.5rem 0 0 1rem;
    }
    div{
      display: inline-block;
      width: 20%;
      height: 2rem;
      box-sizing: border-box;
      line-height: 2rem;
      text-align: center;
      color: white;
      background-color: blue;
      border: 1px solid blue;
      border-radius: 5px;
      margin: 0.5rem 0;
    }
  }
  .tishiyuju{
    width: 100%;
    height: 1.6rem;
    text-align: center;
    font-size: 0.6rem;
    line-height: 1.6rem;
    color: orangered;
    background-color: cornsilk;
  }
  .zhaodizhi{
    div{
      margin: 7rem 0 0 0;

      p{
        width: 100%;
        height: 2rem;
        box-sizing: border-box;
        text-align: center;
        line-height: 2rem;
        color: #595757;
      }
    }
  }
  .dizhixinxi{
    div{
      width: 100%;
      height: 4rem;
      box-sizing: border-box;
      background-color: white;
      padding-left: 1rem;
      /*border-bottom: 1px solid rgba(0,0,0,0.2);*/
      border-top: 1px solid rgba(0,0,0,0.2);
      .p1{
          width: 100%;
          height: 2rem;
         box-sizing: border-box;
          line-height: 2rem;
          font-size: 0.9rem;
        }
      .p2{
        width: 100%;
        height: 2rem;
        box-sizing: border-box;
        line-height: 2rem;
        font-size: 0.6rem;
        color: rgba(0,0,0,0.5);
      }
    }
  }
</style>
