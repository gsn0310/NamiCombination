<template>
    <div class="laodada">
      <div class="chuangkoudinwei">
      <!--导航头-->
      <div class="myheader">
        <img src="../../assets/img/picture_xu/arrow_left.png" @click="back_Classify">
        <p>{{biaoti_tou}}</p>
      </div>
      <!--分类按钮-->
      <div class="fenlei_kuai">
       <div class="fenlei_button" @click="dianji01">
         <span :style="{color:dianji_bianse}">{{dianji_fenlei}}</span>
         <img :src="dianji_zhuangtai?dianji_src01:dianji_src02">
       </div>
        <div class="fenlei_button fengexian" :style="{color:dianji_bianse02}" @click="dianji02">
          <span>排序</span>
          <img :src="dianji_zhuangtai02?dianji_src01:dianji_src02">
        </div>
        <div class="fenlei_button" :style="{color:dianji_bianse03}" @click="dianji03">
          <span>筛选</span>
          <img :src="dianji_zhuangtai03?dianji_src01:dianji_src02">
        </div>
      </div>
      </div>
      <!--按钮所对应的模块-->
      <!--分类按钮-->
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
         <li v-for="(v,index) in fenlei_juti" :key="index" :class="{colorChange02:index==dynamic02}" @click="dianji_shaixuan(v.name,index,v.id)"><span class="sp1">{{v.name}}</span><span class="sp2">{{v.count}}</span></li>
       </ul>
     </div>
      <!--排序按钮-->
      <div class="anniu_mokuai02" v-show="anniu02_xianshi">
        <ul>
          <li @click="paixu_zhineng" :class="{colorChange02:paixu_yanse01}"><div><img src="../../assets/img/picture_xu/paixu.png"></div><p><span class="span01">智能排序</span><span class="span02"><span class="iconfont icon-htmal5icon22"></span></span></p></li>
          <li @click="paixu_juli" :class="{colorChange02:paixu_yanse02}"><div><img src="../../assets/img/picture_xu/dizhi.png"></div><p><span class="span01">距离最近</span><span class="span02"><span class="iconfont icon-htmal5icon22"></span></span></p></li>
          <li @click="paixu_xiangling" :class="{colorChange02:paixu_yanse03}"><div><img src="../../assets/img/picture_xu/xiaohuomiao.png"></div><p><span class="span01">销量最高</span><span class="span02"><span class="iconfont icon-htmal5icon22"></span></span></p></li>
          <li @click="paixu_jiage" :class="{colorChange02:paixu_yanse04}"><div><img src="../../assets/img/picture_xu/paixu.png"></div><p><span class="span01">起送价最低</span><span class="span02"><span class="iconfont icon-htmal5icon22"></span></span></p></li>
          <li @click="paixu_sudu" :class="{colorChange02:paixu_yanse05}"><div><img src="../../assets/img/picture_xu/biao.png"></div><p><span class="span01">配送速度最快</span><span class="span02"><span class="iconfont icon-htmal5icon22"></span></span></p></li>
          <li @click="paixu_pingfen" :class="{colorChange02:paixu_yanse06}"><div><img src="../../assets/img/picture_xu/xingxing.png"></div><p><span class="span01">评分最高</span><span class="span02"><span class="iconfont icon-htmal5icon22"></span></span></p></li>
        </ul>
      </div>
       <!--筛选按钮正在写-->
       <div class="anniu_mokuai03" v-show="anniu03_xianshi">
         <div class="div_shang">
         <p class="p1">配送方式</p>
         <div class="div_shang01" @click="fengniaozhuansong" :class="{colorChange02:shaixuan_yanse01}"><img src="../../assets/img/picture_xu/fengniao.png" class="img01"><span>蜂鸟专送</span><img src="../../assets/img/picture_xu/duigou.jpg" class="img02" v-show="shaixuan_yanse01"></div>
         <p class="p1">商家属性(可以多选)</p>
         <div class="div_shang02">
           <p @click="pinpaishangjia" :class="{colorChange02:shaixuan_yanse02}"><span class="div_shang02_s1">品</span><span>品牌商家</span><img src="../../assets/img/picture_xu/duigou.jpg" v-show="shaixuan_yanse02"></p>
           <p @click="waimaibao" :class="{colorChange02:shaixuan_yanse03}"><span class="div_shang02_s2">保</span><span>外卖保</span><img src="../../assets/img/picture_xu/duigou.jpg" v-show="shaixuan_yanse03"></p>
           <p @click="zhunshida" :class="{colorChange02:shaixuan_yanse04}"><span class="div_shang02_s1">准</span><span>准时达</span><img src="../../assets/img/picture_xu/duigou.jpg" v-show="shaixuan_yanse04"></p>
           <p @click="xindian" :class="{colorChange02:shaixuan_yanse05}"><span class="div_shang02_s3">新</span><span>新店</span><img src="../../assets/img/picture_xu/duigou.jpg" v-show="shaixuan_yanse05"></p>
           <p @click="zaixianzhifu" :class="{colorChange02:shaixuan_yanse06}"><span class="div_shang02_s3">付</span><span>在线支付</span><img src="../../assets/img/picture_xu/duigou.jpg" v-show="shaixuan_yanse06"></p>
           <p @click="kaifapiao" :class="{colorChange02:shaixuan_yanse07}"><span class="div_shang02_s2">票</span><span>开发票</span><img src="../../assets/img/picture_xu/duigou.jpg" v-show="shaixuan_yanse07"></p>
         </div>
         </div>
         <div class="div_xia">
           <div class="div_xia01" @click="sanji_qingkong">清空</div>
           <div class="div_xia02" @click="sanji_quedin">确定{{shaixuan_geshuchuli}}</div>
         </div>
       </div>
      <!--//商家展示页-->
      <div class="zhanshilan">
        <div class="goods" v-for="(v,index) in goodsArr" :key="index" @click="To_ShangpuXiangqing(v)">
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
            //总分类按钮点击是否变色
            dianji_bianse:'black',
            dianji_bianse02:'black',
            dianji_bianse03:'black',

            //声明一个变量储存所有商铺分类列表
            fenlei_leibian:[],
            //声明一个数组表示是否变色
            dynamic:1,
            dynamic02:-1,
            //声明一个数组储存所有具体分类数据
            fenlei_juti:[],
            //声明一个变量控制按钮组件的显影
            anniu01_xianshi:false,
            anniu02_xianshi:false,
            anniu03_xianshi:false,
            //声明一个数组储存所有商铺信息
            goodsArr:[],
            //从点击筛选拿到需要筛选的商铺种类id
            shaixuanzhonglei_id:0,

            //声明一个变量判断排序按钮点击更改文字颜色
            paixu_yanse01:false,
            paixu_yanse02:false,
            paixu_yanse03:false,
            paixu_yanse04:false,
            paixu_yanse05:false,
            paixu_yanse06:false,
            //声明一个变量储存二级筛选参数
            erji_canshu:"",

            //声明变量储存三级里的一系列点击变色，显对勾,即点击切换状态,即网络请求是否需要添加的参数
            shaixuan_yanse01:false,
            shaixuan_zhuantai01:true,
            shaixuan_canshu01:"",
            shaixuan_yanse02:false,
            shaixuan_zhuantai02:true,
            shaixuan_canshu02:"",
            shaixuan_yanse03:false,
            shaixuan_zhuantai03:true,
            shaixuan_canshu03:"",
            shaixuan_yanse04:false,
            shaixuan_zhuantai04:true,
            shaixuan_canshu04:"",
            shaixuan_yanse05:false,
            shaixuan_zhuantai05:true,
            shaixuan_canshu05:"",
            shaixuan_yanse06:false,
            shaixuan_zhuantai06:true,
            shaixuan_canshu06:"",
            shaixuan_yanse07:false,
            shaixuan_zhuantai07:true,
            shaixuan_canshu07:"",
            //声明一个变量储存所选个数和所选个数字符串显示处理
            shaixuan_suoxuangeshu:0,
            shaixuan_geshuchuli:"",


          }
      },
      created(){
          //获取上一个页面传递过来的值
        this.biaoti_tou = this.$route.query.Xname;
        this.dianji_fenlei = this.$route.query.Xname;

        //获取所有分类列表数据
        Vue.prototype.myaxios.get("https://elm.cangdu.org/shopping/v2/restaurant/category",(data)=>{
          //console.log("这是具体分类的数据",data);
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
          //返回路由跳转
        back_Classify(){
          this.$router.push({path:"/back_Classify"});
        },
        //跳转到商铺详情页
        To_ShangpuXiangqing(v){
          this.$router.push({path:"Shangpuxiangqingye"});
          //并把店铺信息传进vuex
          this.$store.commit("shangpu_data",v);
        },

        dianji01(){
          if (this.dianji_zhuangtai) {
            //下拉
            this.dianji_fenlei="分类";
            this.dianji_bianse='blue';
            this.anniu01_xianshi=true;

            //初始化其他两个按钮
            this.dianji_zhuangtai02=true;
            this.dianji_bianse02='black';
            this.anniu02_xianshi=false;
            if(this.dianji_zhuangtai02 == false){
              this.dianji_zhuangtai02=!this.dianji_zhuangtai02;

            };
            this.dianji_zhuangtai03=true;
            this.dianji_bianse03='black';
            this.anniu03_xianshi = false;
            if (this.dianji_zhuangtai03==false) {
              this.dianji_zhuangtai03=!this.dianji_zhuangtai03;
            };

          }else{
            //收起
            //  this.dianji_fenlei = this.$route.query.Xname;
            this.dianji_bianse='black';
            this.anniu01_xianshi=false;
            //收起时根据所选具体分类筛选数据
            if(this.dianji_fenlei != "分类"){
              //发起网络请求，请求筛选数据
              //console.log(this.shaixuanzhonglei_id);
              //定义一个变量处理网络地址
              let dizhi = "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]="+this.shaixuanzhonglei_id;
              Vue.prototype.myaxios.get(dizhi,(data)=>{
                //console.log(data);
                //把数据覆给所有店铺储存
                this.goodsArr = data;
              })
            }
          }
          //更改点击状态
          this.dianji_zhuangtai = !this.dianji_zhuangtai;
        },
        dianji02(){
          if(this.dianji_zhuangtai02){
            //下拉
            this.dianji_bianse02='blue';
            this.anniu02_xianshi=true;

            //初始化其他两个按钮
            this.dianji_zhuangtai=true;
            this.dianji_bianse='black';
            this.anniu01_xianshi=false;
            if(this.dianji_zhuangtai == false){
              this.dianji_zhuangtai=!this.dianji_zhuangtai;

            };
            this.dianji_zhuangtai03=true;
            this.dianji_bianse03='black';
            this.anniu03_xianshi = false;
            if (this.dianji_zhuangtai03==false) {
              this.dianji_zhuangtai03=!this.dianji_zhuangtai03;
            };

          }else{
            //收起
            this.dianji_bianse02='black';
            this.anniu02_xianshi=false;

          }
          this.dianji_zhuangtai02=!this.dianji_zhuangtai02;
        },
        dianji03(){
          if(this.dianji_zhuangtai03){
            //下拉
            this.dianji_bianse03='blue';
            this.anniu03_xianshi = true;

            //初始化其他两个按钮
            this.dianji_zhuangtai02=true;
            this.dianji_bianse02='black';
            this.anniu02_xianshi=false;
            if(this.dianji_zhuangtai02 == false){
              this.dianji_zhuangtai02=!this.dianji_zhuangtai02;

            };
            this.dianji_zhuangtai=true;
            this.dianji_bianse='black';
            this.anniu01_xianshi = false;
            if (this.dianji_zhuangtai==false) {
              this.dianji_zhuangtai=!this.dianji_zhuangtai;
            };
          }else{
            //收起
            this.dianji_bianse03='black';
            this.anniu03_xianshi = false;

          }
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
        dianji_shaixuan(name,index,shaixuanfenlei_id){
          //控制变文字颜色
          this.dynamic02 = index;
          //显示筛选的类名
          this.dianji_fenlei = name;
          //给筛选分类id赋值
          this.shaixuanzhonglei_id = shaixuanfenlei_id;
      },

        //下面是排序页一系列的点击事件
        paixu_zhineng(){
          //点击更改字体颜色，并把其他标签得值改回来
          this.paixu_yanse01=true;
          this.paixu_yanse02=false;
          this.paixu_yanse03=false;
          this.paixu_yanse04=false;
          this.paixu_yanse05=false;
          this.paixu_yanse06=false;
          //模块收起，初始化动画数据
          this.dianji_zhuangtai02=true;
          this.dianji_bianse02="black";
          this.anniu02_xianshi=false;

          //声明一个变量声明智能筛选需要往网络请求中添加的参数
          let canshu = "&order_by=4";
          //给二级筛选参数赋值
          this.erji_canshu = canshu;
          let wangzhi = "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]="+this.shaixuanzhonglei_id+canshu;
          //发起请求更改展示数据源中的数据
          Vue.prototype.myaxios.get(wangzhi,(data)=>{
            //console.log("这是二级筛选出的数据",data);
            this.goodsArr = data;
          })
        },
        paixu_juli(){
          //点击更改字体颜色，并把其他标签得值改回来
          this.paixu_yanse01=false;
          this.paixu_yanse02=true;
          this.paixu_yanse03=false;
          this.paixu_yanse04=false;
          this.paixu_yanse05=false;
          this.paixu_yanse06=false;
          //模块收起，初始化动画数据
          this.dianji_zhuangtai02=true;
          this.dianji_bianse02="black";
          this.anniu02_xianshi=false;
          //声明一个变量声明智能筛选需要往网络请求中添加的参数
          let canshu = "&order_by=5";
          //给二级筛选参数赋值
          this.erji_canshu = canshu;
          let wangzhi = "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]="+this.shaixuanzhonglei_id+canshu;
          //发起请求更改展示数据源中的数据
          Vue.prototype.myaxios.get(wangzhi,(data)=>{
            //console.log("这是二级筛选出的数据",data);
            this.goodsArr = data;
          })
        },
        paixu_xiangling(){
          //点击更改字体颜色，并把其他标签得值改回来
          this.paixu_yanse01=false;
          this.paixu_yanse02=false;
          this.paixu_yanse03=true;
          this.paixu_yanse04=false;
          this.paixu_yanse05=false;
          this.paixu_yanse06=false;
          //模块收起，初始化动画数据
          this.dianji_zhuangtai02=true;
          this.dianji_bianse02="black";
          this.anniu02_xianshi=false;
          //声明一个变量声明智能筛选需要往网络请求中添加的参数
          let canshu = "&order_by=6";
          //给二级筛选参数赋值
          this.erji_canshu = canshu;
          let wangzhi = "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]="+this.shaixuanzhonglei_id+canshu;
          //发起请求更改展示数据源中的数据
          Vue.prototype.myaxios.get(wangzhi,(data)=>{
            //console.log("这是二级筛选出的数据",data);
            this.goodsArr = data;
          })
        },
        paixu_jiage(){
          //点击更改字体颜色，并把其他标签得值改回来
          this.paixu_yanse01=false;
          this.paixu_yanse02=false;
          this.paixu_yanse03=false;
          this.paixu_yanse04=true;
          this.paixu_yanse05=false;
          this.paixu_yanse06=false;
          //模块收起，初始化动画数据
          this.dianji_zhuangtai02=true;
          this.dianji_bianse02="black";
          this.anniu02_xianshi=false;
          //声明一个变量声明智能筛选需要往网络请求中添加的参数
          let canshu = "&order_by=1";
          //给二级筛选参数赋值
          this.erji_canshu = canshu;
          let wangzhi = "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]="+this.shaixuanzhonglei_id+canshu;
          //发起请求更改展示数据源中的数据
          Vue.prototype.myaxios.get(wangzhi,(data)=>{
            //console.log("这是二级筛选出的数据",data);
            this.goodsArr = data;
          })
        },
        paixu_sudu(){
          //点击更改字体颜色，并把其他标签得值改回来
          this.paixu_yanse01=false;
          this.paixu_yanse02=false;
          this.paixu_yanse03=false;
          this.paixu_yanse04=false;
          this.paixu_yanse05=true;
          this.paixu_yanse06=false;
          //模块收起，初始化动画数据
          this.dianji_zhuangtai02=true;
          this.dianji_bianse02="black";
          this.anniu02_xianshi=false;
          //声明一个变量声明智能筛选需要往网络请求中添加的参数
          let canshu = "&order_by=2";
          //给二级筛选参数赋值
          this.erji_canshu = canshu;
          let wangzhi = "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]="+this.shaixuanzhonglei_id+canshu;
          //发起请求更改展示数据源中的数据
          Vue.prototype.myaxios.get(wangzhi,(data)=>{
            //console.log("这是二级筛选出的数据",data);
            this.goodsArr = data;
          })
        },
        paixu_pingfen(){
          //点击更改字体颜色，并把其他标签得值改回来
          this.paixu_yanse01=false;
          this.paixu_yanse02=false;
          this.paixu_yanse03=false;
          this.paixu_yanse04=false;
          this.paixu_yanse05=false;
          this.paixu_yanse06=true;
          //模块收起，初始化动画数据
          this.dianji_zhuangtai02=true;
          this.dianji_bianse02="black";
          this.anniu02_xianshi=false;
          //声明一个变量声明智能筛选需要往网络请求中添加的参数
          let canshu = "&order_by=3";
          //给二级筛选参数赋值
          this.erji_canshu = canshu;
          let wangzhi = "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]="+this.shaixuanzhonglei_id+canshu;
          //发起请求更改展示数据源中的数据
          Vue.prototype.myaxios.get(wangzhi,(data)=>{
            //console.log("这是二级筛选出的数据",data);
            this.goodsArr = data;
          })
        },

        //下面是三级筛选的一系列点击事件
        fengniaozhuansong(){
          if(this.shaixuan_zhuantai01){
            //点亮
            this.shaixuan_yanse01 = true;
            //所选个数加一，显示处理
            this.shaixuan_suoxuangeshu++;
            this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            //为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu01 = "&delivery_mode[]=1";
          }else{
            //熄灭
            this.shaixuan_yanse01 = false;
            //所选个数减一，显示处理
            this.shaixuan_suoxuangeshu--;
            if (this.shaixuan_suoxuangeshu == 0) {
              this.shaixuan_geshuchuli="";
            }else{
            this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            };
            //取消为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu01 = "";
          }
         this.shaixuan_zhuantai01 = !this.shaixuan_zhuantai01;
        },
        pinpaishangjia(){
          if(this.shaixuan_zhuantai02){
            //点亮
            this.shaixuan_yanse02 = true;
            //所选个数加一，显示处理
            this.shaixuan_suoxuangeshu++;
            this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            //为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu02 = "&support_ids[]=8";
          }else{
            //熄灭
            this.shaixuan_yanse02 = false;
            //所选个数减一，显示处理
            this.shaixuan_suoxuangeshu--;
            if (this.shaixuan_suoxuangeshu == 0) {
              this.shaixuan_geshuchuli="";
            }else{
              this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            };
            //取消为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu02 = "";
          }
          this.shaixuan_zhuantai02 = !this.shaixuan_zhuantai02;
        },
        waimaibao(){
          if(this.shaixuan_zhuantai03){
            //点亮
            this.shaixuan_yanse03 = true;
            //所选个数加一，显示处理
            this.shaixuan_suoxuangeshu++;
            this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            //为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu03 = "&support_ids[]=7";
          }else{
            //熄灭
            this.shaixuan_yanse03 = false;
            //所选个数减一，显示处理
            this.shaixuan_suoxuangeshu--;
            if (this.shaixuan_suoxuangeshu == 0) {
              this.shaixuan_geshuchuli="";
            }else{
              this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            };
            //取消为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu03 = "";
          }
          this.shaixuan_zhuantai03 = !this.shaixuan_zhuantai03;
        },
        zhunshida(){
          if(this.shaixuan_zhuantai04){
            //点亮
            this.shaixuan_yanse04 = true;
            //所选个数加一，显示处理
            this.shaixuan_suoxuangeshu++;
            this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            //为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu04 = "&support_ids[]=9";
          }else{
            //熄灭
            this.shaixuan_yanse04 = false;
            //所选个数减一，显示处理
            this.shaixuan_suoxuangeshu--;
            if (this.shaixuan_suoxuangeshu == 0) {
              this.shaixuan_geshuchuli="";
            }else{
              this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            };
            //取消为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu04 = "";
          }
          this.shaixuan_zhuantai04 = !this.shaixuan_zhuantai04;
        },
        xindian(){
          if(this.shaixuan_zhuantai05){
            //点亮
            this.shaixuan_yanse05 = true;
            //所选个数加一，显示处理
            this.shaixuan_suoxuangeshu++;
            this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            //为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu05 = "&support_ids[]=5";
          }else{
            //熄灭
            this.shaixuan_yanse05 = false;
            //所选个数减一，显示处理
            this.shaixuan_suoxuangeshu--;
            if (this.shaixuan_suoxuangeshu == 0) {
              this.shaixuan_geshuchuli="";
            }else{
              this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            };
            //取消为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu05 = "";
          }
          this.shaixuan_zhuantai05 = !this.shaixuan_zhuantai05;
        },
        zaixianzhifu(){
          if(this.shaixuan_zhuantai06){
            //点亮
            this.shaixuan_yanse06 = true;
            //所选个数加一，显示处理
            this.shaixuan_suoxuangeshu++;
            this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            //为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu06 = "&support_ids[]=3";
          }else{
            //熄灭
            this.shaixuan_yanse06 = false;
            //所选个数减一，显示处理
            this.shaixuan_suoxuangeshu--;
            if (this.shaixuan_suoxuangeshu == 0) {
              this.shaixuan_geshuchuli="";
            }else{
              this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            };
            //取消为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu06 = "";
          }
          this.shaixuan_zhuantai06 = !this.shaixuan_zhuantai06;
        },
        kaifapiao(){
          if(this.shaixuan_zhuantai07){
            //点亮
            this.shaixuan_yanse07 = true;
            //所选个数加一，显示处理
            this.shaixuan_suoxuangeshu++;
            this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            //为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu07 = "&support_ids[]=4";
          }else{
            //熄灭
            this.shaixuan_yanse07 = false;
            //所选个数减一，显示处理
            this.shaixuan_suoxuangeshu--;
            if (this.shaixuan_suoxuangeshu == 0) {
              this.shaixuan_geshuchuli="";
            }else{
              this.shaixuan_geshuchuli="("+this.shaixuan_suoxuangeshu+")";
            };
            //取消为后面添加网络请求的按钮增加参数
            this.shaixuan_canshu07 = "";
          }
          this.shaixuan_zhuantai07 = !this.shaixuan_zhuantai07;
        },
        //三级筛选确定按钮，发送请求，修改所有商铺数据
        sanji_quedin(){
          //处理地址信息
          let dizhi = "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]="+this.shaixuanzhonglei_id+this.erji_canshu+this.shaixuan_canshu01+this.shaixuan_canshu02+this.shaixuan_canshu03+this.shaixuan_canshu04+this.shaixuan_canshu05+this.shaixuan_canshu06+this.shaixuan_canshu07;
          //发起请求
          Vue.prototype.myaxios.get(dizhi,(data)=>{
            //console.log("这是三级请求的数据",data);
            this.goodsArr = data;
          });
          //初始化到为显示页面
          this.dianji_zhuangtai03=true;
          this.dianji_bianse03='black';
          this.anniu03_xianshi=false;
        },
        //三级筛选清空按钮，熄灭所有所选
        sanji_qingkong(){
          this.shaixuan_yanse01=false;
          this.shaixuan_yanse02=false;
          this.shaixuan_yanse03=false;
          this.shaixuan_yanse04=false;
          this.shaixuan_yanse05=false;
          this.shaixuan_yanse06=false;
          this.shaixuan_yanse07=false;
          //以及所选数量，和显示数量的数据源,以及每个点击卡的点击状态
          this.shaixuan_suoxuangeshu=0;
          this.shaixuan_geshuchuli="";
          this.shaixuan_zhuantai01=true;
          this.shaixuan_zhuantai02=true;
          this.shaixuan_zhuantai03=true;
          this.shaixuan_zhuantai04=true;
          this.shaixuan_zhuantai05=true;
          this.shaixuan_zhuantai06=true;
          this.shaixuan_zhuantai07=true;
          //以及每个点击卡的网址参数数据
          this.shaixuan_canshu01="";
          this.shaixuan_canshu02="";
          this.shaixuan_canshu03="";
          this.shaixuan_canshu04="";
          this.shaixuan_canshu05="";
          this.shaixuan_canshu06="";
          this.shaixuan_canshu07="";
        },
      },


    }
</script>

<style scoped lang="less">
  @import '//at.alicdn.com/t/font_1453560_y3anuy3yqp.css';
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
  /*商家展示页样式结束点*/
  /*排序页样式*/
.anniu_mokuai02{
  z-index: 10;
  width: 100%;
  height: 23rem;
  background-color: white;
  box-sizing: border-box;
  position: absolute;
  top: 5.5rem;
  left: 0;
  border: 1px solid #dbdbdb;

  ul{

    li{
      width: 100%;
      height: 3.83rem;
      box-sizing: border-box;

      div{
        width: 15%;
        height: 3.83rem;
        float: left;

        img{
          display: inline-block;
          width: 30%;
          position: relative;
          top: 40%;
          left: 35%;

        }
      }
      p{
        width: 85%;
        height: 3.83rem;
        float: left;
        border-bottom: 1px solid #dbdbdb;
        line-height:3.83rem;
        box-sizing: border-box;

        .span01{
          display: inline-block;
          width: 50%;
          font-size: 0.9rem;
        }
        .span02{
          display: inline-block;
          width: 45%;
          text-align: right;
          font-size: 0.6rem;
        }
      }
    }

  }

}
  /*筛选页样式*/
  .anniu_mokuai03{
    z-index: 10;
    background-color: white;
    width: 100%;
    height: 18rem;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    position: absolute;
    top: 5.5rem;
    left: 0;

    .div_shang{
      width: 100%;
      height: 80%;
      box-sizing: border-box;
     padding-left: 1rem;
      .p1{
        font-size: 0.85rem;
        padding: 0.8rem 0;
        font-weight: 600;
      }
      .div_shang01{
        width: 32%;
        height: 2rem;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        line-height: 2rem;
        border-radius: 3px;
        position: relative;

        .img01{
          display: inline-block;
          width: 18%;
          margin: 0 0.3rem;
          vertical-align: -0.3rem;
        }
        .img02{
          display: inline-block;
          width: 18%;
          position: absolute;
          top: 0.4rem;
          left: 0.3rem;
        }
        span{
          font-size: 0.8rem;
          font-weight: 600;
        }

      }
      .div_shang02{
        width: 100%;
        height: 7.3rem;
        /*border: 1px solid black;*/
        box-sizing: border-box;

        p{
          width: 31%;
          height: 2rem;
          border: 1px solid rgba(0,0,0,0.1);
          box-sizing: border-box;
          float: left;
          margin-right: 0.3rem;
          margin-bottom: 0.3rem;
          line-height:2rem;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 3px;
          position: relative;

          .div_shang02_s1{
            padding: 1px 2px;
            color: #90B4FC;
            border: 1px solid  #90B4FC;
            border-radius: 3px;
            margin: 0 0.3rem;
          }
          .div_shang02_s2{
            padding: 1px 2px;
            color: rgba(0,0,0,0.4);
            border: 1px solid  rgba(0,0,0,0.4);
            border-radius: 3px;
            margin: 0 0.3rem;
          }
          .div_shang02_s3{
            padding: 1px 2px;
            color: orange;
            border: 1px solid  orange;
            border-radius: 3px;
            margin: 0 0.3rem;
          }

          img{
            width: 22%;
            position: absolute;
            top: 0.2rem;
            left: 0.1rem;
          }

        }

      }

    }
    .div_xia{
      width: 100%;
      height: 20%;
      box-sizing: border-box;
      background-color:rgba(0,0,0,0.1);


      .div_xia01{
        display: inline-block;
        width: 45%;
        height: 3rem;
        background-color: white;
        border-radius: 5px;
        font-weight: 500;
        line-height: 3rem;
        font-size: 1.2rem;
        text-align: center;
        margin: 0.3rem 0.5rem 0;
      }
      .div_xia02{
        display: inline-block;
        width: 45%;
        height: 3rem;
        background-color: greenyellow;
        border-radius: 5px;
        font-weight: 500;
        line-height: 3rem;
        font-size: 1.2rem;
        text-align: center;
        margin-top: 0.3rem;
        color: white;
      }

    }

  }



</style>
