<template>
    <div>
      <div class="Notice_Top">
        <van-icon name="arrow-left" class="Notice_left" @click="back"/>
        <p class="Notice_middle">食品监督安全公示</p>
        <div>
        </div>
      </div>
      <!--食品监督安全公示-->
      <div class="shipinjiandu">
        <p class="ppp"><span>食品监督安全公示</span></p>
        <div class="divxia">
          <div class="zuo"><span class="iconfont icon-kulian"></span></div>
          <div class="you">
            <p class="p1"><span>监督检查结果 :</span><span class="s2">差</span></p>
            <p class="p2">检查日期 :</p>
          </div>
        </div>
      </div>
      <!--工商登录信息-->
      <div class="shangjiaxinxi">
        <p class="p1">商家信息</p>
        <p>企业名称</p>
        <p>工商执照注册号</p>
        <p>注册资本</p>
        <p>注册地址</p>
        <p>属地监管所</p>
        <p>法定代表人</p>
        <p>经营范围</p>
      </div>
      <!--餐饮许可证-->
      <div class="shangjiaxinxi">
        <p class="p1">餐饮许可证</p>
        <p>经营范围</p>
        <p>许可证有效期</p>
        <p>许可证号</p>
        <p>发证时间</p>
      </div>





    </div>

</template>

<script>
    export default {
        name: "Shipinjiando",
      methods:{
        back(){
          this.$router.go(-1);
        },
      }
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
      line-height: 2.5rem;
      font-size: 0.8rem;
      color: rgba(0,0,0,1);
      position: relative;
      padding-left: 1.5rem;
      span{
        position: absolute;
        top: 0;
        right: 0.3rem;
      }
    }
    .p1{
      padding-left: 1rem;
      color: black;
      font-size: 1rem;
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }
  }
</style>
