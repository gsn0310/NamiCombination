<template>
  <div class="app3 ">
    <!--顶层部分-->
    <div class="one1">
      <router-link :to="{path:'/Mine'}" class="two"> <</router-link>
      <h2>我的优惠</h2>
    </div>
    <!--第二部分-->
<div class="categroy_title">
  <span class="choose" v-for="(item,index) in itemList" :class="{'red-link':index===isActive}" @click="getItem(item,index)">{{item}}</span>
</div>
    <div class="hongbao" v-if="isFalse">
      <!--红包即将到期-->
      <div class="one3">
        <span class="left">有<span class="red">3</span>个红包即将到期</span>
        <img src="../../assets/img/wh.png"/>
        <span style="color: dodgerblue" @click="Desption">红包说明</span>
      </div>
      <!--红包分类信息-->
      <ul class="one4">
        <li class="two1" v-for="(v,i) in monte" :key="i">

          <div class="three1" >
            <p><span class="y">￥</span>{{v.amount}}</p>
            <p>满{{v.sum_condition}}元可用</p>
          </div>
          <div class="three2">
            <p>{{v.name}}</p>
            <p>{{v.end_date}}到期</p>
            <p>限制收获手机号为 {{v.phone}}</p>
          </div>
          <div class="three3">剩3日</div>
        </li>
        <li class="jiexi">限制类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</li>
      </ul>
      <!--查看历史红包-->
      <router-link :to="{path:'/History'}" class="many">查看历史红包></router-link>
      <ul class="money1">
        <li @click="ExChang">兑换红包</li>
        <li @click="Commend">推存有奖</li>
      </ul>
    </div>

    <!--商家代金券里面的内容-->
<div class="jianquan" v-if="isFalse1">
  <!--商家金券说明-->
 <div class="jianquan1">
   <img src="../../assets/img/wh.png"/>
 <span @click="getCoupon">商家金券说明</span>
 </div>
  <!--中间的图片-->
  <div class="jianquan2">
    <img data-v-841e3554="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACqCAMAAAAgPYI2AAADAFBMVEVMaXHP4O/b6PTz9/zO4PHe5Ojf5/yl0frC6f/e5eH///9mvP/N4PHT4/FWqv5mvP/O3/DT4u1tt/hXtP9tvv3a5OrU4/LO4PL+/v/M3/FnvP9lu//M3/HO4PLN3/L+//9nvP/P4fHO4PLN3/HN4PLP4fDQ4PDR4e/i7fb91aT+/v/N4PHN4PHX4+3+/v/+/v/N3e5mvP9iu/9nu//b5eyjxeMtmvzQ6v7+///R4fH9/v9lu//+//////5nvP+mxuRmvP/R4fJlvP9qvf/Z5OqmxuRpvP8znfz/1p/////5+/3+///N4PH8/f/f5+6kxuPa5Or////c5u0um/ufx+grmv8kk/cum/z81p3M3/H7/P7Y4+nZ5Oo3n/yRwepvwf9wwP/C2e04oPykxuMplvgkkPHR4fFSr/6ZweBTsPyKttspl/nw9frr8vn1+Pv51aX/1qL91qJNrPz/1aIwnf++1+vEzMSUvN//1qJ7v/NQrv250+r////M3/HO4fFnvP/O4PHN4PHP4fItmvzQ4fLR4fI6ofzM4PHR4vLa5Or///9wwf/K3vHH3fBpvv9pvf9lu/9twP/P4fErmfzL3/IwnPzG3O9rv/9guv8znv0llvxmvP//1qL+//9Usf/U4/P5/P3J3fA7ov1juv/W5vRqvv9at/8ilPxPsv82n/xMrP73+v04ofzu9fri7ff7/f/1+fwwnf9Vtv9euP/H3PD9/f8fh+RLsP/x9/vZ6PXf6/bZ5Orr8/no8fnP4fTm7/jN3/IsmvzO4PLg5/B0wv7H5P9RtP+b0fz/1JRCqP7c5ekomP0Tg+nZ5fFZtP6Bx/5Nrv6Tzf3d6vbZ4+lHr///2Ze74f/t+P/N4fPE2u/V4eh6xf6j1//Q4fHk6vDg3teKyv3W5PDM4vi02PXp7fLk9P+iz/cdjO8Tgufc5vGu2vzl0rJKq/6/2/Q1me8Tj/7S4u/Q4fGYv+Bkuf7W7f/H3vPp28n52KzK6P+kxuSqyNa4ys368u7S4O3R4/Lo5OBHu2ueAAAA1HRSTlMAICkYnRQGBAEKMvSGPAydWGsUMiLZM7e27Lju1d2rWnJi9OTLeUhOJCGv+8WMetgPxmTez4eO/uHrodGN+0NgUfp+sMSvJ1b9vc/nwESC3q3xnONNHYa5Y3Rw67l0MPPUlM/v0rTR/kHgy/uijk+GsJ3r5O7GtOLi7tTW/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ueBe6AAABBsSURBVHja7Z15dBPXucCvjY1tMBgDYWnCvjZAWBNKFhrCkjTN3qRJk7Rpmqa8tm9tX/uWM+OxZBuLo1El2fVYxghJlpHlyJYUSdQW2PFDNnYMsY2NCwhjyk7gseQkaZJuvHdnkUb7aMDvvHPl+XlD8uEPfuf7vvnmu3cuQEJCQkJCQkJCQkJC4v+FHzz/TQD55stAQpi/e34VkBBibFoWoNn6IJBIRHY2TMCtW9kMlGQlJmtsFsiZ+jJTr7KkNBTWBb+9LAWVMNlMzVpK/0FCqGAxjn4mhZUQD8zhImvrp2NAdhaQiM9SDLt/HNNefboVSLIEAguDPJoNst/5dDKQSMz9GM3KZx/89G0gIcC3MBb7O9KlUJAZGMeLD8BeVCpZCXkUC/LtObDXGt26cjLT0pampWWOBTEZh4UwYxzIyh6VkqZNys2Y/pMFG+ZvKikZ3jR/w6yFszMWLUmPDJ2VWCgPZ446WenzMhZuKAmlOMiCZ3KXjIkMLZ4xoyuiFq/4SUkkxTxyyLLluRNAgDkvhpStUeVqccYGhaJEQBbDrBXTAMvbzmDNGkWulubOUkAEZXGULc+nJ1er/u1PL814DEbVjDlg1DBhtoJDyBVHQUHBzNw08OCffgbAmHHpOaNI1XQFRFRgFdBsynjn+YlgVDGNViUQWJGyChhktwt+lQNGEZkZjCSxWcihqN20CIwa8udHuxKWVRBC4X2LR0kGPjNcSOLDAoElIKuwMGMU5OK4GTans7l1QGEqFJ+FvCzIrJQPrtcxDmNbIXnnWciSC1KahzEeZ63pjgOLY3oKr66O/RYWyr5aknMlXhbHgmkgRRmzEgvHUYzfaXnnkC1bkqKuvoHpsXAaTcUCWSgkSyabl6KusH1YBF6TghNUCCkWK0tG873UdBWN04RDT6QJLyxRGEpwslhkFjKkXDufsxKLSRteWGgYaG102oxGY/N+EheZhSkZW09j0ejpEmZ0Oh0hRcxHKuIPHKKzkGNeii0jJ4nNR5aI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">
  </div>
  <div class="jinquan3">
    <p>无法使用代金券</p>
    <p>非客户端或客户端版本过低</p>
    <router-link :to="{path:'/xiazai'}" class="xiazai1" >下载或升级客户端</router-link>
  </div>
</div>

  </div>
</template>

<script>
  export default {
    name: "Benefit",
    data() {
      return {
        isActive:0,
        itemList:["红包","商家代金券"],
        isFalse:true,
        isFalse1:false,
        //定义一个获取数据的变量
        monte: {},
        len:"",
        hongbao:[],
        nametitle:[],
        //金券标题
        jintitle:[],
        //金券内容
        jincontent:[]
      }
    },
    methods:{
      //点击时转换出导航条
      getItem(data,index){
        this.isActive=index;
        let con=this.itemList;
        //判断点击时显示隐藏
        for(let i=0;i<con.length;i++){
          if(data==con[i]){
            this.isFalse=false;
            this.isFalse1=true;
          }else {
            this.isFalse=true;
            this.isFalse1=false;
          }
        }
      },
      //点击红包说明跳转通过$router传值
      Desption(){
        this.$router.push({path:'/Description',query:{content:this.hongbao,title:this.nametitle}})
      },
      //点击商家代金券说明跳转通过$router传值
      getCoupon(){
        this.$router.push({path:'/Coupon',query:{jintitle:this.jintitle,jincontext:this.jincontent}})
      },
//通过$router跳转到兑换红包
      ExChang(){
   this.$router.push({path:'/ExChange'})
      },
      //通过$router跳转到推存有奖
      Commend(){
        this.$router.push({path:'/Commend'})
      }
    },
    //通过网络请求地址获取值
    created() {
      this.myaxios.get("https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0", (data) => {
        //获取数据中的值
        this.monte = data;
        //获取数据的长度
        this.len= this.monte.length
        // console.log(this.monte)
      })
      //通过网络请求获取红包说明链接
      this.myaxios.get("https://elm.cangdu.org/v3/profile/explain",(res)=>{
        //获取数据
        this.hongbao=res.discountContent;
        this.nametitle=res.discountCaption;
        this.jintitle=res.couponCaption
        this.jincontent=res.couponContent
       console.log( res)
      })



    }
  }
</script>

<style scoped>
  .app3 {
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


  .categroy_title{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 3rem;
    background-color: #fff;
  }
  .red-link{
    display: inline-block;
    font-size: 1rem;
    border-bottom:2px solid #3190e8;
    color: #3190e8;
    /*padding-bottom: 0.2rem;*/
  }
  .one3 {
    width: 21.2rem;
    font-size: 0.7rem;
    padding: 1rem;
  }

  .one3 > img {
    width: 0.8rem;
    margin-right: 0.3rem;
    vertical-align: -0.2rem;
  }

  .left {
    display: inline-block;
    width: 16.5rem;
  }

  .red {
    color: #FF5340;
  }

  .one4 {
    margin: 0 auto;
    width: 21rem;
    background-color: #F9F9F9;
    border-radius: 0.5rem;
    box-sizing: border-box;
  }

  .two1 {
    /*margin: 0 auto;*/
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAIBAMAAAALs8LeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURUxpcf9TQf9aS/9TQP9TQP9TQv9TQf9UQP9bSP9TQCdGiZQAAAAJdFJOUwBPEZzKPX2/HKJFz58AAAAkSURBVAjXY5gJBwzEMScHNXpCmQIMDMwQ5jQGIKgEMyeBmJIAtqcnWdDMwKsAAAAASUVORK5CYII=) repeat-x;
    background-size: .6rem .3rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
    /*height: 5.8rem;*/
    width:20rem;
    display: flex;
    justify-content: space-around;
    padding: 1rem 0.5rem;
  }

  .three1 {
    padding-top: 0.5rem;

  }
  .y{
    font-size: 0.9rem;
    font-weight: bold;
  }

  .three1 > p:nth-child(1) {
    color: #FF5340;
    font-size: 1.6rem;
    margin: 0.5rem 0;
  }

  .three1 > p:nth-child(2) {
    font-size: .8rem;
  }

  .three2 {
    padding-top: 0.5rem;
    border-left: 1px dotted #CCCCCC;
    padding-left: 0.5rem;
    font-size: .8rem;
  }

  .three2 > p {
    margin-bottom: 0.5rem;
  }

  .three2 > p:nth-child(1) {
    color: #666;
    font-size: 1.1rem;
  }

  .three3 {
    padding-top: 0.5rem;
    color: #FF5340;
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
  .jiexi{
    font-size: 0.6rem;
    line-height:1rem;
    color: #999999;
    padding: 0.5rem 1rem;
  }
  .many{
    width: 100%;
    height: 4rem;
    line-height: 3rem;
    text-align: center;
    display: inline-block;
    color:#999999 ;
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
  }
  .money1{
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    font-size: 1.1rem;
    margin-top: 1.5rem;
  }
  .money1>li{
    padding: 1rem;
    text-align: center;
    width: 11.5rem;
  }
  .money1>li:nth-child(1){
    border-right: 1px solid #F5F5F5;
  }
  .jianquan1{
    color: dodgerblue;
    font-size: .8rem;
    text-align: right;
    padding: 1rem;
  }
  .jianquan1 img{
    width: 1rem;
    vertical-align: -0.2rem;
    margin-right: 0.2rem;
  }
  .jianquan2{
    margin-top: 7rem;
    text-align: center;
  }
  .jianquan2>img{
    width:8rem;
  }
  .jinquan3{
    text-align: center;
    padding: 1.5rem 0;
    color:#666666 ;
    font-size: 1.1rem;
  }
  .jinquan3>p:nth-child(2){
color: #999999;
    font-size: .8rem;
    margin: 0.8rem 0;
  }
  .xiazai1{
    display: inline-block;
    background-color:#56D176 ;
    color: white;
    padding: .8rem 0.5rem;
    font-size: 1rem;
    border-radius: .5rem;
  }
</style>
