<template>
  <div class="app3">
    <!--顶层部分-->
    <div class="one1">
      <router-link :to="{path:'/pass'}" class="two"> <</router-link>
      <h2>重置密码</h2>
    </div>
    <!--中间部分-->
    <div class="one2">
      <!--输入账号-->
      <van-cell-group class="inputV1">
        <van-field
          v-model="username"
          placeholder="账号"
        />
      </van-cell-group>
      <!--输入旧密码-->
      <van-cell-group class="inputV1">
        <van-field
          v-model="password"
          type="password"
          placeholder="旧密码"
        />

      </van-cell-group>
      <!--输入新密码-->
      <van-cell-group class="inputV1">
        <van-field
          v-model="password1"
          type="password"
          placeholder="请输入新密码"
        />
      </van-cell-group>
      <!--输入确定密码-->
      <van-cell-group>
        <van-field
          v-model="password2"
          type="password"
          placeholder="请确认密码"
        />
      </van-cell-group>
      <!--验证码输入框-->
      <input type="text" placeholder="验证码" class="pwd" v-model="psd"/>
      <!--获取验证码-->
      <div class="yzm">
        <img :src="img1" alt="">
      </div>
      <!--刷新页面-->
      <div class="yzm1" @click="yanzhengma">
        <span>看不清</span><br/>
        <span class="h">换一张</span>
      </div>
    </div>
    <!--底部点击确认修改-->
    <van-button type="primary" class="btns" @click="update">确认修改</van-button>
    <!--点击登录弹出提示框-->
    <div class="login1  heartBeat" v-if="hiddens">
      <div>
        <img src="../../assets/img/tanhao.png"/></div>
      <div>{{alertnew}}</div>
      <van-button type="primary" class="login2" @click="logine">确认</van-button>
    </div>

  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "SubmitGe",
    data() {
      return {
        username: "",
        password: "",
        password1: "",
        password2: "",
        psd: "",
        img1: "",
        hiddens: false,
        alertnew: ""
      }
    },
    methods: {
      yanzhengma() {
        Vue.prototype.myaxios.post("https://elm.cangdu.org/v1/captchas", {}, (res) => {
          this.img1 = res.code
        })
      },
      //点击确认修改时显示
      update() {
        if(this.username==""){
          this.hiddens = true
        }else if(this.password==""){
          this.hiddens=true
        }else if(this.password1==this.password2){
          this.hiddens=true
        }

        //  修改密码连接
        this.myaxios.post("https://elm.cangdu.org/v2/changepassword", {
          username: this.username,
          oldpassWord: this.password,
          newpassword: this.password1,
          confirmpassword: this.password2,
          captcha_code: this.psd
        }, (res) => {
          //判断验证码输入是否正确
          this.status=res
          if (this.status.status == 0) {
            this.hiddens = true
            this.alertnew = this.status.message
            console.log( this.status.message)
          }
          if(res.__v==0){
            this.$router.push({path:'./Mine'})
          }
        })
      },
      //点击确认修改时隐藏
      logine() {
        this.hiddens = false
      },

    },
    //获取验证码
    created() {
      Vue.prototype.myaxios.post("https://elm.cangdu.org/v1/captchas", {}, (res) => {
        this.img1 = res.code
        console.log(res)
      })
    }
  }
</script>

<style scoped>
  .app3 {
    width: 100%;
    height: 100%;
  }

  .one1 {
    width: 100%;
    height: 3rem;
    background-color: dodgerblue;
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

  .one2 {
    width: 100%;
    background-color: white;
    margin-top: 1rem;
    box-sizing: border-box;
  }

  .inputV1 {
    border-bottom: 1px solid #666;
    color: #333;
  }

  .pwd {
    width: 20rem;
    margin: 1rem 0.8rem;
    font-size: 1rem;
    color: #757575;
    padding-bottom: 0.5rem;
    position: relative;
  }

  .pwd {
    margin-top: 0.8rem;
  }

  .yzm {
    position: absolute;
    right: 4rem;
    top: 16rem;
  }

  .yzm1 {
    position: absolute;
    right: 1rem;
    top: 16rem;
    font-size: 0.8rem;
  }

  .h {
    display: block;
    margin-top: 0.5rem;
    color: #439AEA;
  }

  .btns {
    width: 21rem;
    margin-top: 1rem;
    margin-left: 1rem;
    border-radius: 8%;
    font-size: 1.2rem;
  }

  .login1 {
    width: 18rem;
    background-color: white;
    text-align: center;
    border-radius: 6%;
    position: absolute;
    top: 13rem;
    left:2.5rem;
  }

  .login1 > div:nth-child(1) {
    padding: 1rem 0;

  }

  .login1 > div img {
    width: 4rem;
  }

  .login1 > div:nth-child(2) {
    margin-bottom: 1.5rem;
  }

  .login2 {
    width: 18rem;
    margin: 0 auto;
    border-radius: 0 0 0.8rem 0.8rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
</style>
