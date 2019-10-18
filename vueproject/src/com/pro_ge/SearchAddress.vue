<template>
   <div class="app1">
     <!--头部-->
     <div class="one1">
       <router-link :to="{path:'/AddAddress'}" class="two"><</router-link>
       <h2>搜索</h2>
     </div>
     <!--搜索地址-->
     <div class="search">
       <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="inputValue">
      <div @click="Search">搜索</div>
     </div>
     <div class="search1" v-if="show">
       <p>找不到地址？</p>
       <p>尝试输入小区，写字楼或学校名</p>
       <p>详细地址（如门牌号等）可稍等输入哦</p>
     </div>
     <div class="search2" v-else v-for="(v,index) in  address">
       <p>{{v.name}}</p>
       <p>{{v.address}}</p>
     </div>
   </div>
</template>

<script>
    export default {
        name: "SearchAddress",
      data(){
          return{
            show:false,
            inputValue:"",
            address:[]

          }
      },
      methods:{
        Search(){
          this.show=false
          this.myaxios.get("https://elm.cangdu.org/v1/pois?city_id=1&keyword="+this.inputValue,(res)=>{
            // this.inputValue=res;
            this.address=res
            console.log(this.address);
          })
        }
      },



    }
</script>

<style scoped>
  .app1 {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .one1 {
    width: 100%;
    height: 3rem;
    background-color: #3190E8;
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
  .search{

    display: flex;
    justify-content: space-between;
    width: 21rem;
    margin: 1rem auto;
  }
  .search>input{
    width: 15rem;
    background-color: #F1F1F1;
    padding: .6rem .5rem;
    border-radius: .2rem;
  }
  .search>div{
    background-color:#3190E8 ;
    padding: 0 1.2rem;
    color: white;
    line-height: 2.5rem;
    border-radius: .2rem;
    font-size: .8rem;
  }
  .search1{
    text-align: center;
    font-size: .8rem;
    color:#AAAAAA ;
    margin-top: 14rem;
  }
  .search1>p{
    margin-bottom: .5rem;
  }
  .search2{
    width: 21rem;
    margin: 1rem auto ;
    border-bottom: .01rem solid #F1ECEC;
    padding: 1rem 0;
  }
  .search2>p:nth-child(1){
    font-size: 1.1rem;
    color: #333;
   margin-bottom: .5rem;
  }
  .search2>p:nth-child(2){
    font-size: 1rem;
    color: #666;
  }
</style>
