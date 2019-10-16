<template>
  <div id="app1">
    <!--头部-->
    <div id="one1">
      <router-link :to="{path:'/Mine'}" class="two"><</router-link>
      <h2>账户信息</h2>
    </div>
    <!--第二部分 用户头像-->
    <div id="one2">
      <div class="accounts">
        <div>头像</div>
        <!--获取头像-->
        <div class="user-header">
          <input type="file" name="image" accept="image/*" @change='onchangeImgFun'
                 class="header-upload-btn user-header-com">
          <img  alt="" :src='imgStr' class="user-header-img user-header-com">
          <!--<p class="tip">图片限制50kb <span class="error">{{errorStr}}</span></p>-->
        </div>

        <span>> </span>
      </div>
      <!-- 用户名-->
      <router-link :to="{path:'/SetuserName'}" class="user">
        <div>用户名</div>
        <span class="usern" style="font-size: 1.1rem">{{names}}</span><span>> </span>
      </router-link>
      <!--收获地址-->
      <router-link :to="{path:'/address'}" class="add">
        <div>收获地址</div>
        <span>> </span>
        <div class="clear"></div>
      </router-link>
    </div>
    <div id="one3">账号绑定</div>
    <div id="one4" @click="PhoneAlter"><img src="../../assets/img/phone.png"/> 手机 <span>> </span></div>
    <div id="one5">安全设置</div>
    <div id="one6">
      <router-link :to="{path:'/SubmitGe'}" class="update">
        登录密码 <span>修改</span><span>> </span>
      </router-link>
    </div>
    <div id="btn" @click="Sign">退出登录</div>
    <!--点击登录弹出提示框-->
    <div class="login1  heartBeat" v-if="hiddens">
      <div>
        <img src="../../assets/img/tanhao.png"/></div>
      <div>是否退出登录</div>
      <div class="login2">
        <div @click="AlterHide">再等等</div>
        <div @click="Logout">退出登录</div>
      </div>
    </div>
<!--遮罩层-->
    <!--<mt-actionsheet v-model="sheetVisible">-->
    <!--</mt-actionsheet>-->
    <van-overlay :show="show" @click="show = false"  />
    <!--点击登录弹出提示框-->
    <div class="Alogin1  heartBeat" v-if="AppAlter">
      <div>
        <img src="../../assets/img/tanhao.png"/></div>
      <div>请在手机APP中设置</div>
      <van-button type="primary" class="Alogin2" @click="AppAlters">确认</van-button>
    </div>

  </div>

</template>

<script>
  export default {
    name: "AccountGe",
    data() {
      return {
        hiddens: false,
        tuichu: "",
        AlterLogout: "",
        names: "",
        AppAlter: false,
        sheetVisible:false,
        show:false,
        //获取头像
        imgStr: require('../../assets/img/default.jpg'),
        errorStr: ''


      }
    },
    //接收修改过的用户名
    // computed: {
    //   getUser(){
    //     return this.$route.query.names
    //   }
    // },
    methods: {
      //点击退出登录弹出框
      Sign() {
        this.hiddens = true;
        this.show=true;

      },
      //点击再等等弹框隐藏
      AlterHide() {
        this.hiddens = false
      },
      //点击弹出框的退出登录返回个人中心
      Logout() {
        this.myaxios.get("https://elm.cangdu.org/v2/signout", (res) => {
          this.tuichu = res.message
          // console.log( res);
          if (res.status == 1) {
            this.$router.push({path: './Mine'})
          }
        });

      },
      //点击弹框手机App隐藏
      AppAlters() {
        this.AppAlter = false
      },
      //点击弹框手机App显示
      PhoneAlter() {
        this.AppAlter = true
      },
      //点击获取本地头像上传
      onchangeImgFun (e) {
        var file = e.target.files[0]
        // console.log(file)
        // 获取图片的大小，做大小限制有用
        let imgSize = file.size
        // console.log(imgSize)
        var _this = this // this指向问题，所以在外面先定义
        // 比如上传头像限制5M大小，这里获取的大小单位是b
        if (imgSize <= 50 * 1024) {
          // 合格
          _this.errorStr = ''
          // console.log('大小合适')

          var reader = new FileReader()
          reader.readAsDataURL(file) // 读出 base64
          reader.onloadend = function () {
            // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
            var dataURL = reader.result
            // console.log(dataURL)
            _this.imgStr = dataURL
            // 下面逻辑处理
          }
        } else {
          console.log('大小不合适')
          _this.errorStr = '图片大小超出范围'
        }
      //  把图片传到vuex中
      // this.$router.push( query:{img:this.imgStr}})
        console.log(e);
        this.$store.commit("imgStr",e)
      },

    },

    created() {
      //通过用户名获取值
      this.myaxios.get("https://elm.cangdu.org/v1/user", (res) => {
        this.names = res.username
      })
    }
  }
</script>

<style scoped>
  #app1 {
    width: 100%;
    height: 100%;
  }

  #one1 {
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

  #one1 > h2 {
    padding: 0.7rem 0;
    text-align: center;
    float: left;
    width: 21rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  #one2 {
    width: 100%;
    height: 10rem;
    background-color: white;
    margin-top: 0.5rem;
    box-sizing: border-box;
  }
  .accounts{
    padding: .18rem 0;

  }
 .user {
    display: block;
    color: black;
    padding: 0.5rem 0;
    border-top: 1px solid #DDDDDD;
  }

  .accounts > div:nth-child(1) {
    float: left;
    width: 15rem;
    margin: 1rem;
  }


  .accounts > span {
    color: darkgray;
    font-size: 1.6rem;
    margin-left: 0.5rem;
    vertical-align: 1rem;
  }
  /*-------设置图片格式大小的样式----------*/
  .user-header{
    position: relative;
    display: inline-block;
    width: 4rem;
    border-radius: 50%;
  }
  .user-header-com{
    width: 4rem;
    height:4rem;
    display: inline-block;
    border-radius: 50%;
  }
  .header-upload-btn{
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    /* 通过定位把input放在img标签上面，通过不透明度隐藏 */
  }
  /*.tip{*/
  /*font-size: 14px;*/
  /*color: #666;*/
  /*}*/
  /*!* error是用于错误提示 *!*/
  /*.error{*/
  /*font-size: 12px;*/
  /*color: tomato;*/
  /*margin-left: 10px;*/
  /*}*/
  /*-----------------------*/
  .usern {
    text-align: right;
    display: inline-block;
    width: 13rem;
  }

  .user > span {
    font-size: 1.6rem;
    color: darkgray;
    margin-left: 0.4rem;
    vertical-align: -0.7rem;
  }

  .user > div {
    float: left;
    width: 6rem;
    font-size: 1.1rem;
    margin: 0.6rem 1rem;
  }

  .add {
    display: block;
    padding: 0.6rem;
    border: 1px solid #DDDDDD;
    border-right: none;
    border-left: none;
  }

  .add > div {
    color: black;
    float: left;
    width: 21rem;
  }

  .add > span {
    display: block;
    font-size: 1.6rem;
    color: darkgray;
  }

  #one3, #one5 {
    font-size: 0.8rem;
    margin: 1rem;
  }

  #one4, #one6 {
    width: 100%;
    height: 3rem;
    background-color: white;
    color: black;
    font-size: 0.8rem;
    padding: 0.5rem 0;
    box-sizing: border-box;
    border: 1px solid #DDDDDD;
  }

  #one4 > img {
    width: 2rem;
    vertical-align: -0.5rem;
  }

  #one4 > span {
    color: darkgray;
    font-size: 1.6rem;
    margin-left: 17.5rem;
  }

  .update {
    display: block;
    padding: 0.2rem 0.8rem 0.4rem;
    color: black;
    font-size: 0.9rem;
  }

  .update > span:nth-child(2) {
    color: darkgray;
    font-size: 1.4rem;
    margin-left: 0.5rem;
  }

  .update > span:nth-child(1) {
    color: darkgray;
    font-size: 1.2rem;
    margin-left: 13.5rem;
  }

  #btn {
    text-align: center;
    color: white;
    font-size: 1rem;
    width: 20rem;
    background-color: #D8584A;
    padding: 1rem;
    margin: 2rem 0.5rem;
    border-radius: 8%;
  }

  .login1 {
    width: 21rem;
    background-color: white;
    text-align: center;
    border-radius: 6%;
    position: absolute;
    top: 10rem;
    left: 1rem;
  }

  .login1 > div:nth-child(1) {
    padding: 1rem 0;

  }

  .login1 > div img {
    width: 6rem;
  }

  .login1 > div:nth-child(2) {
    margin: 1.5rem 0;
    font-size: 1.8rem;
    color: #616161;
  }

  .login2 {
    width: 18rem;
    font-size: 1rem;
    color: white;
    display: flex;
    justify-content: space-around;
    margin: 2.5rem 0 1.8rem;
  }

  .login2 > div:nth-child(1) {
    background-color: #C1C1C1;
    padding: .8rem 1.5rem;
    border-radius: .4rem;
    margin-left: 3rem;
  }

  .login2 > div:nth-child(2) {
    background-color: #DD6B55;
    padding: .8rem 1.5rem;
    border-radius: .4rem;
  }

  .Alogin1 {
    width: 18rem;
    background-color: white;
    text-align: center;
    border-radius: 6%;
    position: absolute;
    top: 13rem;
    left: 2.5rem;
  }

  .Alogin1 > div:nth-child(1) {
    padding: 1rem 0;

  }

  .Alogin1 > div img {
    width: 4rem;
  }

  .Alogin1 > div:nth-child(2) {
    margin-bottom: 1.5rem;
  }

  .Alogin2 {
    width: 18rem;
    border-radius: 0 0 1rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

</style>
