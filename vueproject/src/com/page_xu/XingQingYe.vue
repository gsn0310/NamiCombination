<template>
    <div class="laodada">
      <div class="chuangkoudinwei">
      <!--导航头-->
      <div class="myheader">
        <img src="../../assets/img/picture_xu/arrow_left.png" alt="">
        <p>{{biaoti_tou}}</p>
      </div>
      <!--分类按钮-->
      <div class="fenlei_kuai">
       <div class="fenlei_button" @click="dianji01">
         <span :style="{color:dianji_bianse}">{{dianji_fenlei}}</span>
         <img :src="dianji_zhuangtai?dianji_src01:dianji_src02">
       </div>
        <div class="fenlei_button fengexian" @click="dianji02">
          <span>排序</span>
          <img :src="dianji_zhuangtai02?dianji_src01:dianji_src02">
        </div>
        <div class="fenlei_button" @click="dianji03">
          <span>筛选</span>
          <img :src="dianji_zhuangtai03?dianji_src01:dianji_src02">
        </div>
      </div>
      </div>
      <!--按钮所对应的模块-->
     <div class="anniu_mokuai01" v-show="anniu01_xianshi">
       <!--具体分类-->
       <ul class="mokuai01_zuo">
         <li v-for="(v,index) in fenlei_leibian" :key="index" :class="{colorChange:index==dynamic}" @click="getMoney(index)">
           <!--左-->
           <div class="zuo"><img :src="'https://fuss10.elemecdn.com/'+v.image_url+'.png'"><span>{{v.name}}</span></div>
           <!--右-->
           <div class="you"><span>{{v.count}}</span><img src="../../assets/img/picture_xu/arrow_right.png"></div>
         </li>
       </ul>
       <!--具体筛选类-->
       <ul class="mokuai01_you">
         <li v-for="(v,index) in fenlei_juti" :key="index" :class="{colorChange02:index==dynamic02}" @click="dianji_shaixuan(v.name,index)"><span class="sp1">{{v.name}}</span><span class="sp2">{{v.count}}</span></li>
       </ul>
     </div>

      <!--//商家展示页-->
      <div class="zhanshilan">
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
  import Vue from  'vue';

    export default {
        name: "XiangQingYe",
      data(){
          return {
            biaoti_tou:"",
            //声明一个变量储存点击时下拉/收起
            dianji_zhuangtai:true,
            dianji_zhuangtai02:true,
            dianji_zhuangtai03:true,
            dianji_fenlei:"",
            dianji_src01:require('../../assets/img/picture_xu/show_more.png'),
            dianji_src02:require('../../assets/img/picture_xu/show_less.png'),
            dianji_bianse:'black',

            //声明一个变量储存所有商铺分类列表
            fenlei_leibian:[],
            //声明一个数组表示是否变色
            dynamic:1,
            dynamic02:-1,
            //声明一个数组储存所有具体分类数据
            fenlei_juti:[],
            //声明一个变量控制按钮1组件的显影
            anniu01_xianshi:false,
            //声明一个数组储存所有商铺信息
            goodsArr:[],
          }
      },
      created(){
          //获取上一个页面传递过来的值
        this.biaoti_tou = this.$route.query.Xname;
        this.dianji_fenlei = this.$route.query.Xname;

        //获取所有分类列表数据
        Vue.prototype.myaxios.get("https://elm.cangdu.org/shopping/v2/restaurant/category",(data)=>{
          console.log(data);
          this.fenlei_leibian = data;
          //从data页获取所有具体分类数据,暂存首页展示的数据
          this.fenlei_juti = data[1].sub_categories.splice(1,data[1].sub_categories.length);
        },(err)=>{});

        //所有商铺信息展示的网络请求
        Vue.prototype.myaxios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762",(data)=>{
          // console.log(data);
          this.goodsArr = data;
        },(err)=>{});
      },
      methods:{
        dianji01(){
          if (this.dianji_zhuangtai) {
            //下拉
            this.dianji_fenlei="分类";
            this.dianji_bianse='blue';
            this.anniu01_xianshi=true;
          }else{
            //收起
            //  this.dianji_fenlei = this.$route.query.Xname;
            this.dianji_bianse='black';
            this.anniu01_xianshi=false;
          }
          //更改点击状态
          this.dianji_zhuangtai = !this.dianji_zhuangtai;
        },
        dianji02(){
          this.dianji_zhuangtai02=!this.dianji_zhuangtai02;
        },
        dianji03(){
          this.dianji_zhuangtai03=!this.dianji_zhuangtai03;
        },
        //具体分类的点击事件
        getMoney: function (index) {
          if (index != this.dynamic) {
            //console.log(index);
            //点击添加字体颜色，其他的删除class名称
            this.dynamic = index;
            //点击时更改具体分类里数据
            let arr = this.fenlei_leibian[index].sub_categories;
            this.fenlei_juti = arr.filter(function(ele,idx,arr){
              return idx !== 0;
            });
            //跳转具体筛选时，重置具体筛选项的文字颜色
            this.dynamic02 = -1;
          }


        },
        //具体分类之后的筛选
        dianji_shaixuan(name,index){

          //控制变文字颜色
          this.dynamic02 = index;
          //显示筛选的类名
          this.dianji_fenlei = name;
      }
      },


    }
</script>

<style scoped lang="less">
  .chuangkoudinwei{
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .colorChange {
    background-color: white;
  }
.colorChange02{
  color: blue;
}

  .laodada{
    position: relative;
  }

.myheader{
  width: 100%;
  height: 3rem;
  background-color: blue;
  position: relative;
  img{
    width: 10%;
    position: absolute;
    top: 50%;
    transform:translateY(-50%);
  }
  p{
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    line-height: 3rem;
  }
}
  .fenlei_kuai{
    width: 100%;
    height: 2.5rem;
    background-color: white;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0.5rem 0;

    .fengexian{
      border-left: 1px solid rgba(0,0,0,0.1);
      border-right: 1px solid rgba(0,0,0,0.1);
    }
    .fenlei_button{
      height: 1.5rem;
      width: 33.33%;
      box-sizing: border-box;
     font-size:0.9rem;
      font-weight: 600;
      text-align: center;
      line-height: 1.5rem;
      float: left;


      span{
        vertical-align: 0.35rem;
      }
      img{
        width: 20%;
        display: inline-block;

      }



    }
  }
  .anniu_mokuai01{
    width: 100%;
    height: 23rem;
    background-color: white;
    box-sizing: border-box;
    position: absolute;
    top: 5.5rem;
    left: 0;
    border: 1px solid #dbdbdb;
    z-index: 10;

    .mokuai01_zuo{
      width: 50%;
      height: 100%;
      background-color: rgba(0,0,0,0.1);
      float: left;
      overflow: auto;

      li{
        width: 100%;
        height: 2.55rem;
        /*background-color: white;*/
        box-sizing: border-box;
        padding: 0 0.2rem;

        .zuo{
          width: 50%;
          height: 100%;
          float: left;
          text-align: left;
          font-size: 0.85rem;
          line-height: 2.55rem;
          box-sizing: border-box;

          img{
            width: 20%;
            display: inline-block;
            margin: 0 0.2rem;
            vertical-align: -0.28rem;
          }
        }
        .you{
          width: 50%;
          height: 100%;
          float: left;
          text-align: right;
          font-size: 0.85rem;
          line-height: 2.55rem;
          box-sizing: border-box;

          span{
            color: white;
            background-color: rgba(0,0,0,0.2);
            padding: 2px 4px;
            border-radius: 30%;
          }

          img{
            width: 20%;
            display: inline-block;
            margin: 0 0.2rem;
            vertical-align: -0.28rem;
          }

        }

      }

    }
    .mokuai01_you{
      width: 50%;
      height: 100%;
      float: left;
      box-sizing: border-box;
      padding-left: 0.4rem;
      overflow: auto;

      li{
        width: 100%;
        height: 2.55rem;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(0,0,0,0.1);

        .sp1{
          display: inline-block;
          width: 50%;
          font-size: 0.9rem;
          line-height: 2.55rem;
        }
        .sp2{
          display: inline-block;
          width: 45%;
          font-size: 0.9rem;
          line-height: 2.55rem;
          text-align: right;
        }

      }




    }



  }

/*商家展示页的样式*/
  .zhanshilan{
    background-color: white;
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

</style>
