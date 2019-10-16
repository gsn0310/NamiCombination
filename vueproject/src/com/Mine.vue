<template>
  <div id="appone">
    <div class="Top">
      <div >
        <van-icon name="search" class="Top_left" @click="Toseek"/>
        <p class="Top_middle">{{AName}}</p>
        <van-icon name="contact"  class="Top_right"/>
      </div>
      <div>
      </div>
    </div>
    <div id="tou">
      <div id="tou2">
        <router-link :to="names=='登录/注册'?{path:'/PassLogin_ge'}:{path:'/AccountGe'}" id="toua">
          <div class="img1">
            <img src=".././assets/img/default.jpg" /></div>
          <div class="zj">
            <div>{{names}}</div>
            <div><img src=".././assets/img/sj.png" height="20" width="20"/><span>暂无绑定手机号</span>
            </div>
          </div>
          <div class="right1">> </div>
          <div class="clear"></div>
        </router-link>
      </div>
    </div>
    <!--第二部分-->
    <ul id="yue">
      <li>
        <router-link :to="{path:'/Banlance'}" class="yue1">
          <span>0.00</span><span>元</span>
          <div>我的余额</div>
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/Benefit'}" class="yue1">
          <span style="color: #FF5F3E">3</span><span>个</span>
          <div>我的优惠</div>
        </router-link>

      </li>
      <li>
        <router-link :to="{path:'/Points'}" class="yue1">
          <span style="color:#6AC20B ">0</span><span>分</span>
          <div>我的积分</div>
        </router-link>
      </li>
    </ul>
    <!--第三部分-->
    <div id="dd">
      <router-link :to="{path:'/Order'}" class="dd1">
        <img src=".././assets/img/alignleft.png" height="20" width="20"/>
        <div>我的订单  <span>> </span></div>
      </router-link>
      <router-link :to="{path:'/integrals'}" class="dd1">
        <img src=".././assets/img/jifen.png" height="20" width="20"/>
        <div>积分商城  <span>> </span></div>
      </router-link>
      <router-link :to="{path:'/Eleme'}" class="dd1">
        <img src=".././assets/img/hg.png" height="20" width="20"/>
        <div style="border-bottom: none">饿了么会员卡  <span style="margin-left: 13rem">> </span></div>
      </router-link>
    </div>
    <!--第四部分-->
    <div id="fw">
      <!--服务中心-->
      <router-link :to="{path:'/ServiceGe'}" class="dd1">
        <img src=".././assets/img/fk.png" height="20" width="20"/>
        <div>服务中心  <span>> </span></div>
      </router-link>
      <!--下载饿了么app-->
      <router-link :to="{path:'/'}" class="dd1">
        <img src=".././assets/img/E.png" height="20" width="20"/>
        <div style="border: none">下载饿了么app  <span style="margin-left: 12.1rem">> </span></div>
      </router-link>
    </div>
  </div>

</template>

<script>
  import Vue from "vue"
  export default {
    name: "ProFileGe",
    data(){
      return{
        //    变量接受传递过来的经纬度
        Geohash:'',
        //  接受请求的值
        AName:'',
        names:''
      }
    },
    methods:{
      Toseek(){
        console.log("点击到了");
        this.$router.push({
          path:'/Seek'
        })
      },
    //  接受头像
      imgs(){
        return this.$route.query.imgs
      }
    },
    created(){
      //  接收到前面传递的值
      // console.log(this.$route.query,"获取到的");
      this.Geohash=this.$route.query.Geohash;
      //  发起请求根据经纬度进行修改值
      Vue.prototype.myaxios.get("https://elm.cangdu.org/v2/pois/"+this.Geohash,(data)=>{
        // console.log(data.name);
        this.AName=data.name
      });
      //获取用户信息
      this.myaxios.get("https://elm.cangdu.org/v1/user",(res)=>{
        console.log(1);
        if(res.status==0) {
          this.names = "登录/注册"
        }
        if(res.__v==0){
          this.names=res.username
        }

        console.log(res);
      },(err)=>{
        console.log("失败")
      })
    }
  }
</script>

<style scoped>
  .Top{
    background-color: #3190e8;
    position: static;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 3.35rem;
    color: white;
    text-align: center;
  }
  .Top_left{

    float: left;
    line-height: 3.35rem;
    left: 2rem;
    font-size: 1.5rem;

  }
  .Top_middle{
    display: inline-block;
    line-height: 3.35rem;
    width: 40%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .Top_right{
    float: right;
    line-height: 3.35rem;
    right: 2rem;
    font-size: 1.5rem;
  }

  #appone{
    width: 100%;
    height: 100%;
    background-color:#F5F5F5 ;
  }
  #tou{
    background:#3190e8;
    width: 100%;
    height: 7rem;
  }

  #tou2{
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    font-size: 1.2rem;
  }
  #toua{
    color: white;
  }
  .img1{
    float: left;
    width: 4rem;
  }
  .img1 img{
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  .zj{
    float: left;
    width: 12rem;
    margin: 0.5rem  0.6rem 0;
  }
  .zj>div{
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
  .zj>div>span{
    font-size: 0.8rem;
    vertical-align: 0.2rem;
    margin-left: 0.2rem;
  }
  .right1{
    text-align:right;
    width: 2rem;
    float: right;
    margin: 1.5rem 0;
  }
  #yue{
    width: 100%;
    height: 6rem;
    background-color: white;
    box-sizing: border-box;
  }
  #yue>li{
    text-align: center;
    width:7.8rem;
    padding: 1.6rem;
    float:left;
    box-sizing: border-box;
    border-right: 1px solid #F1F1F1;
  }
  #yue>li:nth-child(3){
    border-right:none;
  }
  .yue1>span:nth-child(1){
    font-size: 1.5rem;
    font-weight: bold;
    color: #FF9900;
  }
  .yue1>span:nth-child(2){
    color: black;
    font-size: 0.6rem;
  }
  .yue1>div{
    color:#666;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
  #dd{
    width: 100%;
    height: 9rem;
    background-color: white;
    margin: 0.6rem 0;
    box-sizing: border-box;
  }
  .dd1{
    display: block;
    color: black;
    font-size:1rem;
    padding: 0.2rem 0;
  }
  .dd1>div{
    padding: 0.7rem 0.5rem;
    float: right;
    border-bottom: 1px solid #F1F1F1;
  }
  .dd1>div>span{
    margin-left: 15rem;
    color: darkgray;
  }

  .dd1>img{
    /*float: left;*/
    margin: 0.5rem ;

  }
  #fw{
    width: 100%;
    height: 5.5rem;
    background-color: white;
  }
  .clear{
    clear: both;
  }

</style>
