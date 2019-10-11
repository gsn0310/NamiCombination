<template>
    <div id="app1">
      <div id="one1">
        <span><</span>
        <h2>账户信息</h2>
      </div>
      <div id="one2">
       <router-link :to="{path:'/account'}" class="accounts">
        <div>头像</div>
        <img src="../../assets/img1/default.jpg" height="50" width="50"/><span>> </span>
      </router-link>
        <router-link :to="{path:'/user'}" class="user">
          <div>用户名</div>
        <span style="font-size: 1rem">sdgdh</span><span>> </span>
        </router-link>
        <router-link :to="{path:'/address'}" class="add">
          <div>收获地址</div>
         <span>> </span>
          <div class="clear"></div>
        </router-link>
      </div>
      <div id="one3">账号绑定</div>
    </div>
</template>

<script>
    export default {
        name: "AccountGe"
    }
</script>

<style scoped>
#app1{
  width: 100%;
  height: 100%;
}
  #one1{
    width: 100%;
    height: 3rem;
    background-color: dodgerblue;
    color: white;
    box-sizing: border-box;
  }
#one1>span{
  text-align: center;
  float: left;
  width: 2rem;
  padding: 0.5rem 0;
  font-size: 1.6rem;
}
#one1>h2{
  padding: 0.7rem 0;
  text-align: center;
  float: left;
  width: 21rem;
  font-size: 1.2rem;
  font-weight: bold;
}
  #one2{
    width: 100%;
    height: 10rem;
    background-color: white;
    margin-top: 0.5rem;
    box-sizing: border-box;
  }
.accounts,.user{
  display: block;
  color: black;
  padding: 0.5rem 0;
  border-top:1px solid  #DDDDDD;
}
.accounts>div{
  float: left;
  width: 16rem;
  margin: 1rem;

}
.accounts>img{
  border-radius: 50%;
}
.accounts>span{
  color: darkgray;
  font-size: 1.6rem;
  margin-left: 0.5rem;
vertical-align: 1rem;
}
  .user>span{
    font-size: 1.6rem;
color: darkgray;
   margin-left: 0.4rem;
    vertical-align: -0.7rem;
  }
  .user>div{
    float: left;
    width: 16rem;
    margin: 0.6rem 1rem ;
  }
  .add{
    display: block;
    padding: 0.6rem;
border: 1px solid #DDDDDD;
    border-right: none;
    border-left: none;
  }
  .add>div{
    color: black;
    float: left;
    width: 21rem;
  }
  .add>span{
    display: block;
    font-size: 1.6rem;
    color:darkgray ;
  }
#one3{
  font-size:0.8rem;
  margin: 1rem;
  background-color: #90B4FC;
}
</style>
