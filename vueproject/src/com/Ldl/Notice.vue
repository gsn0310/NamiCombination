<template>
    <div>
      <div class="Notice_Top">
        <van-icon name="arrow-left" class="Notice_left" @click="Toseek"/>
        <p class="Notice_middle">商家详情</p>
        <div>
        </div>
      </div>
      <!--活动与属性模块-->
      <div class="huodong">
        <p>活动与属性</p>
        <ul>
          <li><span class="span01">{{goodsArr.activities[0].icon_name}}</span><span>{{goodsArr.activities[0].description}}</span></li>
          <li v-for="(v,index) in huodong_data" :key="index"><span class="span01">{{v.icon_name}}</span><span>{{v.description}}</span></li>

        </ul>
      </div>
      <!--食品监督安全公示-->
      <div class="shipinjiandu">
        <p class="ppp" @click="Shipinjiando"><span>食品监督安全公示</span><span class="sp02">企业认证详情 <span class="iconfont icon-jiantou3"></span></span></p>
        <div class="divxia">
          <div class="zuo"><span class="iconfont icon-kulian"></span></div>
          <div class="you">
            <p class="p1"><span>监督检查结果 :</span><span class="s2">差</span></p>
            <p class="p2">检查日期 :</p>
          </div>
        </div>
      </div>
      <!--商家信息-->
      <div class="shangjiaxinxi">
        <p class="p1">商家信息</p>
        <p>{{goodsArr.name}}</p>
        <p>地址 : {{goodsArr.address}}</p>
        <p>营业时间 : {{goodsArr.opening_hours[0]}}</p>
        <p @click="show = true">营业执照<span class="iconfont icon-jiantou3"></span></p>
        <p @click="show = true">餐饮服务许可证<span class="iconfont icon-jiantou3"></span></p>
      </div>
      <van-overlay :show="show" @click="show = false" />
    </div>
</template>
<script>
    export default {
        name: "Notice",
      data(){
        return{
          goodsArr:'',
          huodong_data:[],
          show: false,
        }
      },
      methods:{
        Shipinjiando(){
          this.$router.push({path:"/Shipinjiando"});
        },
        Toseek(){
          this.$router.push({
            path:'/Shangpuxiangqingye/Shop_One'
        })
        },

      },
      created(){
        this.goodsArr=this.$store.state.vuexone.shangpu_data;
        console.log(this.goodsArr);
        this.huodong_data = this.$store.state.vuexone.shangpu_data.supports;
      },
    }
</script>

<style scoped lang="less">
  @import "//at.alicdn.com/t/font_1459373_3739llpjsey.css";
  .Notice_Top{
    background-color: #3190e8;
    position: static;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.8rem;
    color: white;
    text-align: center;
    position: sticky;
    top: 0;
  .Notice_left{
    position: absolute;
    left: .5rem;
    line-height: 2.8rem;
    font-size: 1.5rem;
  }
  .Notice_middle{
    width: 100%;
    text-align: center;
    line-height: 2.8rem;
    font-weight: bold;
    font-size: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  }
  .huodong{
    background-color: white;
    margin-top: 0.5rem;

    p{
      height: 2.5rem;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      line-height: 2.5rem;
      padding-left: 1rem;
    }
    ul{
      padding: 1rem;
      li:nth-child(1){
        width: 90%;
        height: 1.5rem;
        box-sizing: border-box;
        line-height: 1.5rem;
        font-size: 0.8rem;
        .span01{
          font-size: 0.6rem;
          background-color: red;
          color: white;
          padding: 2px;
          border-radius: 3px;
          margin-right: 1rem;
        }
      }
      li:nth-child(2n){
        width: 90%;
        height: 1.5rem;
        box-sizing: border-box;
        line-height: 1.5rem;
        font-size: 0.8rem;
        .span01{
          font-size: 0.6rem;
          background-color: rgba(0,0,0,0.3);
          color: white;
          padding: 2px;
          border-radius: 3px;
          margin-right: 1rem;
        }
      }
      li:nth-child(3){
        width: 90%;
        height: 1.5rem;
        box-sizing: border-box;
        line-height: 1.5rem;
        font-size: 0.8rem;
        .span01{
          font-size: 0.6rem;
          background-color: blue;
          color: white;
          padding: 2px;
          border-radius: 3px;
          margin-right: 1rem;
        }
      }

    }
  }
  .shipinjiandu{
    background-color: white;
    margin-top: 0.5rem;
    .ppp{
      height: 2.5rem;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      line-height: 2.5rem;
      padding-left: 1rem;
      .sp02{
        color: rgba(0,0,0,0.2);
        margin-left: 6.7rem;
      }
    }
    .divxia{
      width: 100%;
      height: 6rem;
      .zuo{
        width: 20%;
        height: 80%;
        float: left;
        text-align: center;
        padding-top: 0.8rem;
        span{
          font-size: 3.5rem;
          color: red;
        }
      }
      .you{
        width: 80%;
        height: 100%;
        float: left;
        font-size: 0.8rem;
        .p1{
          padding: 2rem 0 1rem 0;
          .s2{
            color: red;
            margin-left: 1rem;
          }
        }
      }
    }
  }
  .shangjiaxinxi{
    background-color: white;
    margin-top: 0.5rem;
    p{
      height: 2.5rem;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      line-height: 2.5rem;
      font-size: 0.7rem;
      color: rgba(0,0,0,0.7);
      position: relative;
      padding-left: 1rem;
      span{
        position: absolute;
        top: 0;
        right: 0.3rem;
      }
    }
    .p1{
      color: black;
      font-size: 1rem;
    }
  }

</style>
