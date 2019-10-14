<template>
  <!--会员中心-->
    <div class="Member_Center">
      <!--顶部页面操作-->
      <div class="Eleme_Top">
        <van-icon name="arrow-left" class="Eleme_left" @click="Toseek"/>
        <p class="Eleme_middle">会员中心</p>
        <div>
        </div>
      </div>
      <p class="Eleme_p">为账户  xxx 购买会员</p>

      <!--会员特权-->
      <div class="member">
        <!--会员特权文字块-->
        <div class="Member_One" @click="Member">
          <span class="Member_One_span">会员特权</span>
          <div class="Member_One_inside">
            <span>会员说明</span>
            <van-icon name="arrow" class="Member_One_inside_i"/>
          </div>
        </div>
        <!--图片块-->
        <div class="Minus">
          <div class="Minus_left">
            <img src="../../assets/img/shengqian.jpg" height="43.641" width="38.797"/></div>

        <div class="Minus_right">
          <h4>见面配送费</h4>
          <span>每月减免30单，每日可减免3单，每单最高减4元</span>
          <span>蜂鸟专送专享</span>
        </div>


        </div>
        <div class="Minus">
          <div class="Minus_left">
            <img src="../../assets/img/shengqian.jpg" height="43.641" width="38.797"/></div>

          <div class="Minus_right">
            <h4>见面配送费</h4>
            <span>每月减免30单，每日可减免3单，每单最高减4元</span>
            <span>蜂鸟专送专享</span>
          </div>


        </div>
      </div>

      <!--开通会员-->
      <div class="dredge">
        <!--开通会员文字-->
        <div class="Member_One">
          <span class="Member_One_span">开通会员</span>
        </div>
        <!--下面开通的子-->
        <div class="Member_One">
          <!--左边两个span-->
          <div class="Member_One_imitation_left">
            <span class="Member_one">一个月</span>
            <span class="Member_two"> ¥20</span>
          </div>
          <div class="Member_One_div" @click="buy">
            <span class="Member_One_imitation_right">购买
          </span>
          </div>

        </div>
      </div>
      <!--兑换会员-->
      <div class="convert">
        <!--兑换会员文字块-->
        <div class="convert_One">
          <span class="convert_One_span">兑换会员</span>
          <div class="convert_One_inside">
            <span>使用卡号卡密</span>
            <van-icon name="arrow" class="convert_One_inside_i"/>
          </div>
        </div>
      </div>
      <!--购买记录-->
      <div class="buy">
        <!--兑换会员文字块-->
        <div class="buy_One">
          <span class="buy_One_span">兑换会员</span>
          <div class="buy_One_inside">
            <span>开发票</span>
            <van-icon name="arrow" class="buy_One_inside_i"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Eleme",
      methods:{
        Toseek(){

        },
      //  会员中心跳转会员特权
        Member(){
          this.$router.push({
            path:'/MyDiscounts'
          })
        },
      //  会员中心跳转购买页面
        buy(){
          this.$router.push({
            path:'/Timer'
          })

        },
      }
    }
</script>

<style scoped lang="less">
  .Eleme_Top{
    background-color: #3190e8;
    position: static;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.8rem;
    color: white;
    text-align: center;
  .Eleme_left{
    position: absolute;
    left: .5rem;
    line-height: 2.8rem;
    font-size: 1.5rem;
  }
  .Eleme_middle{
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
  .Eleme_p{
    padding-left: 1rem;
    line-height: 3rem;
  }
  .member{
    background: white;
    padding-left: 1rem;
    /*会员特权文字*/
    .Member_One{
      height: 3rem;
      vertical-align:middle;
      .Member_One_span{
        position: absolute;
        left: 1rem;
        line-height: 3rem;
        vertical-align:middle;
      }
      width: 100%;
      .Member_One_inside{
        position: absolute;
        line-height: 3rem;
        right: 1rem;
        display: inline-block;
        span{
          font-size: .8rem;
          color: rgb(166,153,176);
          vertical-align:middle;
        }
        .Member_One_inside_i{
          color: rgb(204,204,204);
          vertical-align:middle;
        }

      }

    }
    /*文字加图片部分*/
    .Minus{
      border-top: 1px solid rgb(245,245,245);
      width: 100%;
      display: flex;
      padding: .8rem 0;
      .Minus_right{
        span{
          color: #9999;
          display: inline-block;
          margin-top: .5rem;
          font-size: .5rem;
        }
        height: 4rem;
        margin-left: 1rem;
      }
    }

  }
  .dredge{
    margin-top: .7rem;
    background: white;
    padding-left: 1rem;
    .Member_One{
      height: 3.4rem;
      vertical-align:middle;
      width: 100%;

      /*上面那一层的样式*/
      .Member_One_span{
        position: absolute;
        left: 1rem;
        line-height: 3rem;
        vertical-align:middle;
      }
      .Member_One_inside{
        position: absolute;
        line-height: 3rem;
        right: 1rem;
        display: inline-block;
        span{
          font-size: .8rem;
          color: rgb(166,153,176);
          vertical-align:middle;
        }
        .Member_One_inside_i{
          color: rgb(204,204,204);
          vertical-align:middle;
        }

      }
      /*下面那一层样式*/
      .Member_One_imitation_left{
        display: inline-block;
        line-height: 3rem;
        .Member_one{

        }
        .Member_two{
          color: red;
          font-weight: bold;
        }
      }
      .Member_One_div{
        display: inline-block;
        position: absolute;
        right: 1rem;
        width: 20%;
        text-align: center;
        padding: .7rem  0;
        span{
          display: block;
          border: 1px solid red;
          line-height: 1.5rem;
          border-radius: .2rem;
          color: red;
        }
      }
    }

  }
  .convert{
    margin-top: .7rem;
    background: white;
    padding-left: 1rem;
    .convert_One{
      height: 3rem;
      vertical-align:middle;
      .convert_One_span{
        position: absolute;
        left: 1rem;
        line-height: 3rem;
        vertical-align:middle;
      }
      width: 100%;
      .convert_One_inside{
        position: absolute;
        line-height: 3rem;
        right: 1rem;
        display: inline-block;
        span{
          font-size: .8rem;
          color: rgb(166,153,176);
          vertical-align:middle;
        }
        .convert_One_inside_i{
          color: rgb(204,204,204);
          vertical-align:middle;
        }

      }

    }
  }
  .buy{
    margin-top: .7rem;
    background: white;
    padding-left: 1rem;
    .buy_One{
      height: 3rem;
      vertical-align:middle;
      .buy_One_span{
        position: absolute;
        left: 1rem;
        line-height: 3rem;
        vertical-align:middle;
      }
      width: 100%;
      .buy_One_inside{
        position: absolute;
        line-height: 3rem;
        right: 1rem;
        display: inline-block;
        span{
          font-size: .8rem;
          color: rgb(166,153,176);
          vertical-align:middle;
        }
        .buy_One_inside_i{
          color: rgb(204,204,204);
          vertical-align:middle;
        }

      }

    }
  }

</style>
