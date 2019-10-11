<template>
  <div>
    <!--顶部蓝色部分-->
    <div>
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button >ele.me</mt-button>
      </router-link>
      <mt-button  slot="right">登录|注册</mt-button>
    </mt-header>
    </div>
    <!--第二层`-->
    <div class="top">
      <span class="top_1">当前定位城市:</span>
      <span class="top_2">定位不准时,请在城市列表中选择</span>
      <div style="clear: both"></div>
    </div>
    <!--第三层-->
    <div class="Two">
      <span class="two_span"> > </span>
      <div style="clear: both"></div>
    </div>
    <!--热门城市-->
    <div class="hot">
      <div class="hot_text">
        <p>热门城市</p>
      </div>
      <ul class="this_ul">
        <li class="li_span"  v-for="(a,i) in Hot">
          {{a.name}}
        </li>
      </ul>
    </div>
    <!--字母城市-->
    <div class="all">
      <ul>
        <li v-for="(a,i,keys) in All">
          <p class="all_p"> {{i}}(按照字母排序)</p>
          <span v-for="(b,index) in a" class="all_span">
            {{b.name}}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
    export default {
        name: "Home",
      data(){
        return{
          Hot:[],
          All:{}
        }
      },
      methods:{
        objKeySort(obj){
          var newkey=Object.keys(obj).sort();
          var newObj={};
          for (var i=0;i<newkey.length;i++){
            var index=newkey[i];
            newObj[index]=obj[index];
          }
          return newObj;
        },
      },

      created(){
        //热门城市网络请求
        Vue.prototype.myaxios.get("https://elm.cangdu.org/v1/cities?type=hot",(data)=>{
          // console.log(data);
          this.Hot=data;
          console.log(this.Hot,"热门城市的数据获取");

        });
        Vue.prototype.myaxios.get("https://elm.cangdu.org/v1/cities?type=group",(a)=>{
          console.log(a);
          let aaa=this.objKeySort(a);
          // console.log(aaa);
          this.All=aaa
        })
      }
    }
</script>

<style scoped lang="less">
  .top{
    background: white;
    /*height: 2rem;*/
    padding-top: 1rem;
    padding-bottom: .5rem;
    .top_1{
      float: left;
      font-size: .4rem;
      left: 0;
    }
    .top_2{
      font-size: .5rem;
      color: silver;
      float: right;
      right: 0;
    }
    border-bottom: .1rem solid rgb(234,234,234);
  }
  .Two{
    background: white;
    height: 2rem;
    .two_span{
      float: right;
    }
  }
  .hot{
    border-top: .1rem solid rgb(234,234,234);
    margin-top: 1rem;
    background: white;
    .hot_text{
      background: honeydew;
      padding: .5rem 0 .5rem 1rem;
    }
    .this_ul{
      background: white;
      box-sizing: border-box;
      .li_span{
        box-sizing: border-box;
        border: 0.025rem solid #e4e4e4;
        text-align: center;
        width: 25%;
        display: inline-block;
        line-height: 1rem;
        padding-top:1rem;
        padding-bottom: 1rem;
        font-size: .6rem;
        color: #90B4FC;
      }
    }

  }
  .all{
    box-sizing: border-box;
    margin-top: 1rem;
    background: white;

    .all_p{
      line-height: 2rem;
      background: honeydew;
    }
    .all_span{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
      float: left;
      box-sizing: border-box;
      display: inline-block;
      width: 25%;
      line-height: 2rem;
      border: 0.025rem solid #e4e4e4;
    }

  }
</style>
