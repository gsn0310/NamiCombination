<template>
    <div class="app1">
      <!--头部-->
      <div class="one1">
        <router-link :to="{path:'/AccountGe'}" class="two"><</router-link>
        <h2>修改用户名</h2>
      </div>
      <!--输入用户名-->
      <div class="user" v-if="hide">
        <!--账户输入框-->
          <van-field v-model="username" placeholder="输入用户名" class="inputv" @keyup="getInputVal"/>
      </div>
      <div class="user1" v-if="hideShow">用户名只能修改一次(5-24字符之间)</div>
      <!--输入用户名-->
      <div class="user" v-if="!hide">
        <!--账户输入框-->
        <van-field v-model="username" placeholder="输入用户名" class="inputv1" @keyup="getInputVal"/>
      </div>
      <div class="user2" v-if="!hideShow">用户名长度在5到24位之间</div>
      <!--确认修改-->
      <div class="user3" v-if="update">确认修改</div>
      <div class="user4" v-if="!update" @click="login">确认修改</div>
    </div>
</template>

<script>
    export default {
        name: "SetuserName",
      data(){
          return{
            username:"",
            hide:true,
            hideShow:true,
            update:true
          }
      },
      methods:{
        // 判断用户名限制字符才能修改
        getInputVal(){
          if(this.username.length>=1 && this.username.length<5 ){
            //不能修改
            this.hide=false;
            this.hideShow=false;
            this.update=true
          }else  if(this.username.length>=5 && this.username.length<24){
            //能修改
            this.hide=true;
            this.hideShow=true;
            this.update=false
          } else {
            //不能修改
            this.hide=false;
            this.hideShow=false;
            this.update=true
          }
        },
        //修改用户名成功跳转到账户信息
        login(){
  this.$router.push({path:'./AccountGe',query:{names:this.username}})
        }

      }
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
.user{
  width: 22rem;
  margin: .6rem;

}
  .inputv,.inputv1{
    background-color: #F2F2F2;
    border: 1px solid #E8E8E8;
    font-size: 1.1rem;
    color:#757575 ;
    /*border-radius: .5rem;*/
  }
  .inputv1{
    border: 1px solid red;
  }
  .user1,.user2{
    font-size: .8rem;
    margin: 1rem .5rem;
    color:#757575 ;
  }
  .user2{
    color: red;
  }
  .user3,.user4{
    background-color:#3199E8 ;
    color:#8CC6F2;
    width: 22rem;
    margin: 1rem .5rem;
    text-align: center;
    padding: 1rem 0;
  }
  .user4{
    background-color:#3199E8 ;
    color:white;
  }
</style>
