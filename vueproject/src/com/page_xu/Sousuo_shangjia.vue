<template>
  <div class="laodada">
    <!--导航头-->
    <div class="myheader laodada">
      <img src="../../assets/img/picture_xu/arrow_left.png" @click="back_shangyiye">
      <p>搜索</p>
    </div>
    <!--输入框-->
    <div class="shuruquyu">
      <input type="text" placeholder="请输入商家或美食名称" v-model="mingcheng" @input="shuruzhi">
      <div @click="tijiao_anniu">提交</div>
      <span v-show="shurukuang_qingkong" @click="qingkong_shurukuang"><span class="iconfont icon-cha"></span></span>
    </div>
    <!--无搜索结果-->
    <div class="wujieguo" v-show="wujieguo_xianyin">很抱歉!无搜索结果</div>
    <!--搜索历史-->
    <div class="sousuolishi" v-show="sousuolishi_xianyin">
      <div class="div1">搜索历史</div>
      <p v-for="(v,index) in lishijilu_data" :key="index" @click="dianjilishi_sousuo(v)"><span class="sp1">{{v}}</span><span @click="shanchu_dangelishishuju(v)"><span class="iconfont icon-cha"></span></span></p>
      <div class="div2" @click="qingkong_lishi">清空搜索历史</div>
    </div>
    <!--搜索到的商家展示模块-->
    <div class="shagnjaizhanshi" v-show="shangjia_xianyin">
      <p>商家</p>
      <div class="shangjia" v-for="(v,index) in dianpu_data" :key="index">
        <div class="divzou"><img :src="'http://elm.cangdu.org/img/'+v.image_path"></div>
        <div class="divyou">
          <p class="p1"><span class="sp01">{{v.name}}</span><span class="sp02">支付</span></p>
          <p class="p2">月售{{v.recent_order_num}}单</p>
          <p class="p3">{{v.float_minimum_order_amount}}元起送/距离{{v.distance}}</p>
        </div>
      </div>
    </div>


    <!--底部导航按钮-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="to_waimai">外卖</van-tabbar-item>
      <van-tabbar-item icon="search" @click="">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="to_dindan">订单</van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="to_wode">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
  export default {
    name: "Sousuo_shangjia",
    data(){
      return {
        //底部导航按钮位置
        active:1,
        //无搜索结果模块的显隐，默认隐藏
        wujieguo_xianyin:false,
        //搜索历史模块的显隐，默认隐藏
        sousuolishi_xianyin:false,
        //商家模块的显隐，默认隐藏
        shangjia_xianyin:false,
        //输入框的清空按钮，默认隐藏
        shurukuang_qingkong:false,
        //声明变量储存输入框的值
        mingcheng:"",
        //声明变量储存搜索到的店铺信息
        dianpu_data:[],
        //声明变量储存历史记录信息
        lishijilu_data:[],
      }
    },
    methods:{
      //输入框的内容修改事件
      shuruzhi(){
        //判断输入框内是否输入的有值来决定清除输入框值得显隐
        if (this.mingcheng != ""){
          this.shurukuang_qingkong = true;
        }else{
          this.shurukuang_qingkong = false;
          //显示历史记录
          this.sousuolishi_xianyin = true;
          this.wujieguo_xianyin = false;
          this.shangjia_xianyin = false;
        }
      },
      //清空输入框按钮
      qingkong_shurukuang(){
        this.mingcheng = "";
        this.shurukuang_qingkong = false;
        //显示历史记录,隐藏其他页面
        this.lishijilu_data = this.$store.state.vuexone.cun_dianpusousuojilu;
        this.sousuolishi_xianyin = true;
        this.wujieguo_xianyin = false;
        this.shangjia_xianyin = false;
      },
      //提交按钮
      tijiao_anniu(){
        let wangzhi = "https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword="+this.mingcheng;
        this.myaxios.get(wangzhi,(data)=>{
          console.log("这是搜索到得店铺数据",data);
          this.dianpu_data = data;
          if (data.status == 0) {
            //说明没有搜索到数据，无搜索数据模块显示，其他都隐藏
            this.wujieguo_xianyin = true;
            this.sousuolishi_xianyin = false;
            this.shangjia_xianyin = false;
          }else{
            //说明有数据，商家模块显示，其他都隐藏
            this.wujieguo_xianyin = false;
            this.sousuolishi_xianyin = false;
            this.shangjia_xianyin = true;
          }
        });
        //把输入框得搜索信息存到历史记录中
        this.$store.commit("cun_dianpusousuojilu",this.mingcheng);
      },
      //删除单个历史数据按钮
      shanchu_dangelishishuju(v){
        //调用vuex中方法对vuex中数据进行处理
        this.$store.commit("shanchu_dangelishishuju",v);
        //再从vuex中获取数据展示
        this.lishijilu_data = this.$store.state.vuexone.cun_dianpusousuojilu;
        //判断记录数据为空，历史记录模块隐藏
        if (this.lishijilu_data.length == 0) {
          this.sousuolishi_xianyin = false;
        };
      },
      //清空历史数据按钮
      qingkong_lishi(){
        this.$store.commit("qingkong_lishi");
        //隐藏所有展示模块
        this.wujieguo_xianyin = false;
        this.sousuolishi_xianyin = false;
        this.shangjia_xianyin = false;
      },
      //点击历史记录，给输入框赋值，并且发起网络请求请求数据
      dianjilishi_sousuo(v){
        this.mingcheng = v;
        let wangzhi = "https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword="+v;
        this.myaxios.get(wangzhi,(data)=>{
          console.log("这是搜索到得店铺数据",data);
          this.dianpu_data = data;
          if (data.status == 0) {
            //说明没有搜索到数据，无搜索数据模块显示，其他都隐藏
            this.wujieguo_xianyin = true;
            this.sousuolishi_xianyin = false;
            this.shangjia_xianyin = false;
          }else{
            //说明有数据，商家模块显示，其他都隐藏
            this.wujieguo_xianyin = false;
            this.sousuolishi_xianyin = false;
            this.shangjia_xianyin = true;
          }
        });
      },
      //点击返回上一页
      back_shangyiye(){
        this.$router.go(-1);
      },
      //去外卖页
      to_waimai(){
        this.$router.push({path:"/Classify"});
      },
      //去订单页
      to_dindan(){
        this.$router.push({path:"/Indent"});
      },
      //去我的页
      to_wode(){
        this.$router.push({path:"/Mine"});
      },


    },
    created(){
      //页面加载时判断vuex中是否储存的有vux数据
      this.lishijilu_data = this.$store.state.vuexone.cun_dianpusousuojilu;
      //判断如果有值让历史记录模块显示
      if (this.lishijilu_data.length != 0) {
        this.sousuolishi_xianyin = true;
      }else{
        this.sousuolishi_xianyin = false;
      }
    },
  }
</script>

<style scoped lang="less">
  @import "//at.alicdn.com/t/font_1462659_vwb0plpg5oe.css";
  .laodada{
    position: relative;
  }
  .myheader{
    z-index: 10;
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
    margin-bottom: 0.2rem;
    position: relative;
    input{
      width: 70%;
      height: 2rem;
      box-sizing: border-box;
      background-color: rgba(0,0,0,0.1);
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 5px;
      padding-left: 0.5rem;
      margin: 0.5rem 0 0 1rem;
      padding-right: 2rem;
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
    span{
      position: absolute;
      top: 0.55rem;
      right: 3.5rem;
    }
  }
  .wujieguo{
    width: 100%;
    height: 2rem;
    background-color: white;
    box-sizing: border-box;
    line-height: 2rem;
    text-align: center;
    font-size: 0.9rem;
  }
  .sousuolishi{
    .div1{
      width: 100%;
      height: 2.5rem;
      font-size: 0.9rem;
      font-weight: 600;
      box-sizing: border-box;
      line-height: 2.5rem;
      padding-left: 1rem;
    }
    p{
      width: 100%;
      height: 2.7rem;
      box-sizing: border-box;
      background-color: white;
      line-height: 2.7rem;
      font-size: 1.1rem;
      padding-left: .9rem;
      border-bottom: 1px solid rgba(0,0,0,0.1);

      .sp1{
        display: inline-block;
        width: 93%;
      }
    }
    .div2{
      width: 100%;
      height: 2.7rem;
      background-color: white;
      font-size: 1rem;
      font-weight: 600;
      line-height: 2.7rem;
      text-align: center;
      color: blue;
    }
  }
  .shagnjaizhanshi{
    p{
      width: 100%;
      height: 2.7rem;
      box-sizing: border-box;
      padding-left:1rem;
      line-height: 2.7rem;
      font-size: 0.9rem;
      font-weight: 600;
    }
    .shangjia{
      width: 100%;
      height: 8rem;
      box-sizing: border-box;
      background-color: white;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      padding: 0.7rem;

      .divzou{
        width: 15%;
        height: 100%;
        float: left;
        img{
          width: 100%;
        }
      }
      .divyou{
        width: 85%;
        height: 100%;
        float: left;
        font-size: 0.6rem;
        p{
          width: 100%;
          height: 2rem;
        }
        .p1{
          .sp02{
            color: orangered;
            border: 1px solid orangered;
            border-radius: 40% 0 40% 0;
          }
        }
        .p3{
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
      }

    }
  }
</style>
