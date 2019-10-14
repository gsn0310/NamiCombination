<template>
    <div>
      <!--顶部操作-->
      <div class="Timer_Top">
        <van-icon name="arrow-left" class="Timer_left" @click="Toseek"/>
        <p class="Timer_middle">会员中心</p>
        <div>
        </div>
      </div>
      <!--倒计时-->
      <div class="Time">
        <span class="Time_span">支付剩余时间</span>
        <van-count-down :time="time" class="Time_time"/>
      </div>
      <span class="zhifu">选择支付方式</span>
      <!--选择支付方式-->
      <div class="way">
        <!--支付宝-->
        <div class="Alipay">
          <div class="Alipay_zfb"><img src="../../assets/img/zhifubao.png" height="35" width="35"/></div>
          <span>支付宝</span>
          <div class="Alipay_i"><van-checkbox v-model="checked" checked-color="#07c160"></van-checkbox></div>

        </div>
        <!--微信-->
        <div class="WeChat">
            <div class="WeChat_zfb">
              <img src="../../assets/img/weixin.png" height="35" width="35"/></div>
            <span>支付宝</span>
            <div class="WeChat_i"><van-checkbox v-model="checkedone" checked-color="#07c160"></van-checkbox></div>
        </div>

      </div>
      <!--弹框跳出来-->
      <div class="login1 bounceIn one faster" v-if="hiddens">
        <div>
          <img src="../../assets/img/tanhao.png" /></div>
        <div>暂不支持支付功能</div>
        <van-button type="primary" class="login2" @click="logine">确认</van-button>
      </div>
     <!--第二个弹窗-->
      <div class="login1 animated bounceIn fast  two " v-if="hiddens_two">
        <div>
          <img src="../../assets/img/tanhao.png" /></div>
        <div>当前环境无法支付,请打开官方APP进行付款</div>
        <van-button type="primary" class="login2" @click="logine_two">确认</van-button>
      </div>

      <div class="button_anniu">
        <van-button type="primary" class="anniu" @click="anniu">确认支付</van-button>
      </div>


    </div>
</template>

<script>
    export default {
        name: "Timer",
      data(){
          return{
            //复选框
            checked:true,
            //第二个复选框
            checkedone:true,
            //弹框
            hiddens:false,
            //第二个弹窗
            hiddens_two:false,

            time: 30 * 60 * 60 * 1000
          }
      },
      methods:{
        logine(){
          this.hiddens=false
        },
        logine_two(){
          this.hiddens_two=!this.hiddens_two
          this.$router.push({
            path:'/Indent'
          })
        },
        anniu(){
          console.log("主要那牛");
          this.hiddens_two=!this.hiddens_two
        },
        Toseek(){
              localStorage.removeItem("yes");
              this.$router.push({
                path:'/Eleme'
              })
        },
      },
      created(){
          let aaa=localStorage.getItem("yes");
        console.log(aaa);
        if(aaa==null){
            this.hiddens=true;
            localStorage.yes=this.hiddens;
            console.log(this.hiddens);
        }else {
            this.hiddens=false
          }

      }
    }
</script>

<style scoped lang="less">
  .login1{
    width: 70%;
    background-color: white;
    text-align: center;
    border-radius: 1rem;
    position: absolute;
    top: 8rem;
    left: 15%;
  }
  .two{
    z-index: 100;
  }
  .one{
    z-index: 100;
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
    width: 100%;
    border-radius: 0  0 1rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .Timer_Top{
    background-color: #3190e8;
    position: static;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.4rem;
    color: white;
    text-align: center;
  .Timer_left{
    position: absolute;
    left: .5rem;
    line-height: 2.8rem;
    font-size: 1.5rem;
  }
  .Timer_middle{
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
  .Time{
    height: 7.6rem;
    background: white;
    text-align: center;
    .Time_span{
      display: inline-block;
      font-size: .5rem;
      margin-top: 2rem;
    }
    .Time_time{
      letter-spacing:8px;
      font-size: 1.6rem;
      margin-top: 1.5rem;
    }

  }
  .zhifu{
    line-height: 2rem;
    padding-left: 1rem;
  }
  .way{
    background: white;
    padding-left: 1rem;
    .Alipay{
      padding: 1rem 0;
      vertical-align: bottom;
      .Alipay_i{
        margin-left: 15rem;
        vertical-align: middle;
        display: inline-block;
      }
      .Alipay_zfb{
        display: inline-block;
        vertical-align: middle;
      }
      span{
        line-height: 2rem;
        vertical-align: middle;
      }

      /*display: flex;*/


    }
    .WeChat{
      padding: 1rem 0;
      vertical-align: bottom;
      .WeChat_i{
        margin-left: 15rem;
        vertical-align: middle;
        display: inline-block;
      }
      .WeChat_zfb{
        display: inline-block;
        vertical-align: middle;
        img{
          border-radius: 50%;
        }
      }
      span{
        line-height: 2rem;
        vertical-align: middle;
      }
    }
  }
  .button_anniu{
    text-align: center;
    width: 100%;
    margin-top: 1rem;
    border-radius: 5%;
    .anniu{
      width: 80%;
      color: white;
      font-size: 1rem;
    }
  }

</style>
