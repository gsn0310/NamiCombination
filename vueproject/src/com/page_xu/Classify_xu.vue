<template>
    <div>
      <div class="Top">
        <div>
          <van-icon name="search" class="Top_left" @click="Toseek"/>
          <p class="Top_middle">{{AName}}</p>
          <van-icon name="contact"  class="Top_right"/>
        </div>
        <div>
        </div>
      </div>

      <!--轮播模块-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide fenlei01" id="fenlei011">
            <!--Slide 1-->
            <div v-for="(v,index) in fenlei011" :key="index" class="fenleixiaokuang" @click="To_Xingqingye1">
              <img :src="'https://fuss10.elemecdn.com'+v.image_url">
              <p>{{v.title}}</p>
            </div>

          </div>
          <div class="swiper-slide fenlei02" id="fenlei022">
            <!--Slide 2-->
            <div v-for="(v,index) in fenlei022" :key="index" class="fenleixiaokuang" @click="To_Xingqingye1">
              <img :src="'https://fuss10.elemecdn.com'+v.image_url">
              <p>{{v.title}}</p>
            </div>
          </div>

        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

      </div>
      <!--中间的灰色间隙-->
      <div class="huisejianxi"></div>
      <!--附近商家商品展示栏-->
      <div class="zhanshilan">
        <p class="fujinshangjia">附近商家</p>
        <div class="goods" v-for="(v,index) in goodsArr" :key="index">
          <img :src="'http://elm.cangdu.org/img/'+v.image_path">
          <div class="goods_you">
            <p class="p1"><span class="s1"><span>品牌</span>{{v.name}}</span><span class="s2"><span>保</span><span>准</span><span>票</span></span></p>
            <p class="p2"><span class="s11"><van-rate v-model="v.rating"  :size="10" :gutter="0"/><span class="p2_s1"> {{v.rating}}</span><span class="p2_s2">月销{{v.recent_order_num}}单</span></span><span class="p2_s5"><span class="p2_s3">蜂鸟专送</span><span class="p2_s4">准时达</span></span></p>
            <p class="p3"><span class="p3_s1"><span>￥{{v.float_minimum_order_amount}}起送/配送费约￥{{v.float_delivery_fee}}</span></span><span class="p3_s2"><span>10公里/<span>40分钟</span></span></span></p>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import Swiper from  'swiper';
  import Vue from  'vue'

    export default {
        name: "Classify_xu",
      mounted(){
        new Swiper ('.swiper-container', {
          loop: false,
          // 如果需要分页器
          pagination: '.swiper-pagination',
        })
      },
      data(){
          return{
            //    变量接受传递过来的经纬度
            Geohash:'',
            //  接受请求的值
            AName:'',
            fenlei011:[],
            fenlei022:[],
            goodsArr:[]
          }
      },
      created(){
          //轮播图的网络请求
        Vue.prototype.myaxios.get("https://elm.cangdu.org/v2/index_entry",(data)=>{
         for (let i =0;i<data.length/2;i++){
           this.fenlei011.push(data[i]);
         };
         for (let v=data.length/2;v<data.length;v++) {
           this.fenlei022.push(data[v]);
         }
        },(err)=>{});
        //附近商家商品展示的网络请求
        Vue.prototype.myaxios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762",(data)=>{
          // console.log(data);
         this.goodsArr = data;
        },(err)=>{});

        //  接收到前面传递的值
        // console.log(this.$route.query,"获取到的");
        this.Geohash=this.$route.query.Geohash;
        //  发起请求根据经纬度进行修改值
        Vue.prototype.myaxios.get("https://elm.cangdu.org/v2/pois/"+this.Geohash,(data)=>{
          console.log(data.name);
          this.AName=data.name
        })
      },
      methods:{
        To_Xingqingye1(e){
          //获取点击的具体详情名
          let X_name =e.currentTarget.lastElementChild.innerHTML;
         //点击配置路由发起页面跳转
          this.$router.push({path:"/XingQingYe",query:{Xname:X_name}});
        },
        Toseek(){
          console.log("点击到了");
          this.$router.push({
            path:'/Seek'
          })
        }
      }
    }
</script>

<style scoped>
  html,body{
    width: 100%;
    height: 100%;
  }
.zhanshilan{
  background-color: white;
}


  .swiper-container {
    width: 100%;
    height: 15rem;
    margin: 1.25rem auto;
    margin-top: 0;
    margin-bottom: 0;
    background-color: white;
  }
  /*.fenlei01{*/
    /*!*background-color: aqua;*!*/
    /*overflow: hidden;*/
  /*}*/
  /*.fenlei02{*/
    /*!*background-color: palevioletred;*!*/
    /*overflow: hidden;*/
  /*}*/
  .fenleixiaokuang{
    width: 5.85rem;
    height: 6.81rem;
    float: left;
  }
  .fenleixiaokuang>img{
    display: block;
    width: 70%;
    margin: 0 auto;
  }
  .fenleixiaokuang>p{
    text-align: center;
    font-size:0.87rem;
  }
  .huisejianxi{
    width: 100%;
    height: 1.25rem;
    background-color: rgba(0,0,0,0.1);
  }
  .fujinshangjia{
    font-size: 0.75rem;
    color: rgba(0,0,0,0.5);
    padding: 1rem 0;
    padding-left: 3rem;
    background: url("../../assets/img/shangbu01.png") no-repeat;
    background-position: 1rem center;
    background-size: 1rem;
  }
  .goods{
    box-sizing: border-box;
    width: 100%;
    height: 6.25rem;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding: 0.75rem 0.45rem;
    overflow: hidden;
  }
  .goods>img{
    width: 15%;
    display: inline-block;
    float: left;
  }
  .goods_you{
    display:inline-block;
    width: 83%;
    float: right;
  }
  .p1{
    height: 0.93rem;
  }
  .s1{
    box-sizing: border-box;
    font-size: 0.95rem;
    font-weight: 600;
    display: inline-block;
    width: 70%;
    height: 0.93rem;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .s1>span{
    font-size: 0.8rem;
    font-weight: 600;
    background-color: yellow;
    padding: 0 2px;
    margin: 0 3px;
    border-radius:2px ;
  }
  .s2{
    display: inline-block;
    width: 29%;
    font-size: 12px;
    color: rgba(0,0,0,0.4);
    text-align: right;
  }
  .p2_s5{
    display: inline-block;
    width: 49%;
    font-size: 12px;
    color: rgba(0,0,0,0.4);
    text-align: right;
  }
  .s2 span{
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 1px;
    margin: 0 1px;
    padding: 0 1px;
  }

  .s11{
    display: inline-block;
    width: 50%;
  }
  .p2{
    margin: 0.9rem 0;
  }
  .p2_s1{
    font-size: 0.9rem;
    color:orange;
    padding: 0 2px;
  }
  .p2_s2{
    font-size: 0.5rem;

  }
  .p2_s3{
    border: 1px solid rgba(0,0,0,0.2);
    font-size: 12px;
    color: white;
    background-color: blue;
    border-radius: 2px;
  }
  .p2_s4{
    border: 1px solid rgba(0,0,0,0.2);
    font-size: 12px;
    color: blue;
    border-radius: 2px;
  }
  .p3_s1{
    display: inline-block;
    width: 50%;
    font-size:0.9rem;
  }
  .p3_s2{
    display: inline-block;
    width: 49%;
    font-size:0.8rem;
    text-align: right;
  }
  .p3_s2>span>span{
    color: blue;
  }




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

</style>
