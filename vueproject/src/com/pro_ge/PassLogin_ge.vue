<template>
  <div class="app2">
    <!--顶层部分-->
    <div class="one1">
      <router-link :to="{path:'/Mine'}" class="two"><</router-link>
      <h2>密码登录</h2>
    </div>
    <!--中间部分-->
    <div class="one2">
      <!--账户输入框-->
      <van-cell-group class="inputV">
        <van-field v-model="username" placeholder="账号"/>
      </van-cell-group>
      <!--密码输入框-->
      <input type="password" placeholder="密码" class="psd" v-model="psd" v-if="ifDisplay"/>
      <input type="text" placeholder="密码" class="psd" v-model="psd" v-else/>
      <!--密码显示隐藏按钮-->
      <mt-switch v-model="ifDisplay" class="show" @click="ifDisplay=!ifDisplay"></mt-switch>
      <!--验证码输入框-->
      <input type="text" placeholder="验证码" class="pwd" v-model="yzm"/>
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
    <!--第三部分-->
    <div class="one3">
      <div>温馨提示：未注册过的账号，登录时将自动注册</div>
      <div>注册过的用户可凭账号密码登录</div>
    </div>
    <!--第四部分登录-->
    <div class="login" @click="ligon">登录</div>
    <!--底部重置密码-->
    <div class="sub">
      <router-link :to="{path:'/submit'}" style="color: dodgerblue">重置密码？</router-link>
    </div>
    <!--点击登录弹出提示框-->
    <div class="login1  heartBeat" v-if="hiddens">
      <div>
        <img src="../../assets/img/tanhao.png"/></div>
      <div>{{altermes}}</div>
      <van-button type="primary" class="login2" @click="logine">确认</van-button>
    </div>

    <div>

    </div>
  </div>

</template>

<script>
  import Vue from "vue";

  export default {
    name: "PassLogin_ge",
    data() {
      return {
        ifDisplay: false,
        psd: '',
        username: "",
        img1: "",
        hiddens: false,
        yzm: "",
        altermes: "",

        show: true,
      }
    },
    methods: {
      clearPassword: function () {
        this.psd = '';
      },
      //刷新验证码
      yanzhengma() {
        //获取验证码请求地址
        Vue.prototype.myaxios.post("https://elm.cangdu.org/v1/captchas", {}, (res) => {
          //验证码显示图片
          this.img1 = res.code;
          // console.log(this.img1);
        })

      },
      ligon() {
//判断账号密码是否为空弹出框
        if (this.username == "") {
          this.hiddens = true;
        } else if (this.psd == "") {
          this.hiddens = true;
        }
        //获取登录验证码
        console.log(this.psd, this.yzm)
        this.myaxios.post("https://elm.cangdu.org/v2/login", {
          username: this.username,
          password: this.psd,
          captcha_code: this.yzm
        }, (res) => {
          console.log(res);
          //判断验证码是否输入正确
          if (res.status == 0) {
            this.hiddens = true
            this.altermes = res.message
            console.log(this.altermes);
          }
          //登录成功跳转到首页
          if (res.__v == 0) {
            this.ruterm();
            console.log("成功");
          }
        }, (eee) => {
          console.log(eee);
        })

      },
      logine() {
        this.hiddens = false
      },
      //跳转到首页
      ruterm() {
        this.$router.push({path: './Mine'})
        console.log(1)
      }
    },
    //获取验证码信息
    created() {
      //获取验证码请求地址
      Vue.prototype.myaxios.post("https://elm.cangdu.org/v1/captchas", {}, (res) => {
        //验证码显示图片
        this.img1 = res.code;
        // console.log(this.img1);
      }, (err) => {
        console.log(err)
      });

    }
  }
</script>

<style scoped>
  .app2 {
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
    height: 9rem;
    background-color: white;
    margin-top: 1rem;
    box-sizing: border-box;
  }

  .inputV {
    border-bottom: 1px solid #FBFBFB;
    font-size: 1.4rem;
    color: #757575;
  }

  .show {
    position: absolute;
    top: 7rem;
    right: 1rem;
  }

  .psd, .pwd {
    width: 20rem;
    margin: 0.8rem;
    font-size: 1rem;
    color: #757575;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #FBFBFB;
    position: relative;
  }

  .pwd {

    margin-top: 0.2rem;
    border-bottom: none;
  }

  .yzm {
    position: absolute;
    right: 4rem;
    top: 10.5rem;
  }

  .yzm1 {
    position: absolute;
    right: 1rem;
    top: 10.5rem;
    font-size: 0.8rem;
  }

  .h {
    display: block;
    margin-top: 0.5rem;
    color: #439AEA;
  }

  .one3 {
    width: 21rem;
    color: red;
    font-size: 0.7rem;
    padding: 0.8rem;
  }

  .one3 > div:nth-child(2) {
    margin-top: 1rem;
  }

  .login {
    margin-left: 0.5rem;
    text-align: center;
    width: 22rem;
    background-color: #4CD964;
    padding: 1rem 0;
    color: white;
    border-radius: 8%;
  }

  .sub {
    width: 100%;
    text-align: right;
    color: #439AEA;
    font-size: 1rem;
    margin-top: 2rem;
  }

  .login1 {
    width: 18rem;
    background-color: white;
    text-align: center;
    border-radius: 6%;
    position: absolute;
    top: 13rem;
    left: 2.5rem;
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
    border-radius: 0 0 1rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
</style>
