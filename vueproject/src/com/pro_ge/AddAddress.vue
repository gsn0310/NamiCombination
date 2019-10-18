<template>
    <div class="app1">
      <!--头部-->
      <div class="one1">
        <router-link :to="{path:'/ChooseAddress'}" class="two"><</router-link>
        <h2>添加地址</h2>
      </div>
      <!--联系人-->
      <div class="xinzengs">
      <div class="xinzeng">
        <div>联系人</div>
        <div>
            <van-field v-model="username" placeholder="你的名字" class="xinzeng_name" />

          <van-radio-group v-model="radio" class="xinzeng_radio">
            <van-radio name="1" checked-color="#07c160" class="xinzeng_radio1">先生</van-radio>
            <van-radio name="2" checked-color="#07c160">女士</van-radio>
          </van-radio-group>
        </div>
      </div>
      <!--联系电话-->
      <div class="xinzeng1">
       <div>联系电话</div>
        <div>
          <div class="xinzeng1_phone">
          <van-field v-model="phone" placeholder="你的手机号" class="xinzeng1_phone1" />
            <img src="../../assets/img/address1.png" @click="Phones" /></div>
          <van-field v-model="phone1" placeholder="备用电话" class="xinzeng1_phone1" v-if="show"/>
        </div>
      </div>
      <!--送餐地址-->
      <div class="xinzeng1 ">
        <div>送餐地址</div>
        <div>
          <van-field v-model="xiaoqulou" placeholder="小区/写字楼/学校楼等" class="xinzeng2_add1" @click="searchadd"/>
          <van-field
            v-model="address"
            placeholder="详细地址 (如门牌号等)"
         class="xinzeng2_add2" />
        </div>
      </div>
      <!--标签备注-->
      <div class="xinzeng1 xinzeng3">
        <div>标签</div>
        <div>
          <van-field
            v-model="biaoqian"
            placeholder="无/家/学校/公司"
            class="xinzeng2_add2" />
        </div>
      </div>
      </div>
      <!--按钮-->
      <div class="xinzeng4_btn" @click="LoginAlter">确定</div>

      <!--点击登录弹出提示框-->
      <div class="login1  heartBeat" v-if="hiddens">
        <div>
          <img src="../../assets/img/tanhao.png"/></div>
        <div>请输入姓名</div>
        <van-button type="primary" class="login2" @click="logine">确认</van-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AddAddress",
      data(){
          return{
            //用户名
            username:"",
            //按钮判断男女
            radio:"",
            //手机号
            phone:"",
            //备用手机号
            phone1:"",
            //备用手机号隐藏
            show:false,
            //添加地址详情
            address:"",
            //添加备注
            biaoqian:"",
            //弹框隐藏
            hiddens:false,
            xiaoqulou:""

          }
      },
      methods:{
        //  点击加号输入备用手机号
        Phones(){
          this.show=truexvdb
        },
        // 通过传值跳转到搜索地址页
        searchadd(){
          this.$router.push({path:'/SearchAddress'})
        },
        //点击确定出现弹框
        LoginAlter(){
          this.hiddens=true;
          let a = 0;
          if (this.biaoqian == "家") {
            a = 2;
          }else if(this.biaoqian == "学校"){
            a = 3;
          }else if (this.biaoqian == "公司") {
            a = 4;
          }

         //获取收获地址

          this.myaxios.post("https://elm.cangdu.org/v1/users/7875275/addresses",
            {
              "user_id":7875275,
              name:this.username,
              sex:(this.radio-0),
              phone:this.phone,
              phone_bk:this.phone1,
              address_detail:this.address,
              tag_type:a,
              address:this.xiaoqulou,
              geohash:"31.22967,121.4762",
              tag:"vdbdb",
              poi_type:123,

            },(res)=>{
              console.log(res);
            })
        },
        //点击确定出现隐藏弹框
        logine(){
          this.hiddens=false
        }
      },
      created(){
          this.myaxios.post("https://elm.cangdu.org/v1/users/7875275/addresses",{},(res)=>{
            console.log(res);
          });

      },
    }
</script>

<style scoped>
  .app1 {
    width: 100%;
    height: 100%;
  }

  .one1 {
    width: 100%;
    height: 3rem;
    background-color: dodgerblue;
    color: white;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
  }

  .two {
    text-align: center;
    width: 2rem;
    padding: 0.5rem 0;
    font-size: 1.6rem;
    color: white;
  }

  .one1 > h2 {
    padding: 0.8rem 0;
    text-align: center;
    width: 21rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .xinzengs{
    background-color: white;
  }
  .xinzeng,.xinzeng1{
    display: flex;
    justify-content: space-around;
    border-bottom: 0.01rem solid #F3EFEF;
    margin: 0 auto;
    width: 22rem;
  }
  .xinzeng>div:nth-child(1){
    flex: 2;
    padding: 1rem 0 0 1rem;
    color: #333;
    font-size: 1.1rem;
  }
  .xinzeng>div:nth-child(2){
    flex:5;
  }
  .xinzeng_radio{
    display: flex;
    justify-content: left;
    padding: 1rem 0 ;
  }
  .xinzeng_name{
    font-size: 1rem;
    color: #666;
    border-bottom: .01rem solid #F3EFEF;
  }
  .xinzeng_radio1{
    margin-right: 1rem;
  }

  .xinzeng1>div:nth-child(1){
    flex: 2;
    padding: 1rem 0 0 1rem;
    color: #333;
    font-size: 1.1rem;
  }
  .xinzeng1>div:nth-child(2){
    flex: 5;
  }
  .xinzeng1_phone>img{
    width: 1.5rem;
    height: 1.5rem;
    padding-top: .5rem;
  }
  .xinzeng1_phone{
    display: flex;
    justify-content: space-between;
  }
  .xinzeng1_phone1{
    font-size: 1.1rem;
    color: #A4A4A4;
  }
  .xinzeng2_add1{
    display: inline-block;
    color:#757575 ;
    font-size: 1.1rem;
    padding: 1rem 0;
    width: 15rem;
    border-bottom: 0.01rem solid #F3EFEF;
  }
  .xinzeng2_add2{
    font-size: 1.1rem;
    color:#757575 ;
   padding: 1rem 0;
  }
  .xinzeng3>div{
    padding-bottom: .5rem;
  }
  .xinzeng4_btn{
    margin: 1rem auto;
    width: 21rem;
    background-color:#4CD964 ;
    text-align: center;
    color: white;
line-height: 3rem;
    border-radius: .3rem;
  }

  .login1 {
    width: 18rem;
    background-color: white;
    text-align: center;
    border-radius: 1rem;
    position: absolute;
    top: 10rem;
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
    background-color:#4CD964  ;
  }
</style>
