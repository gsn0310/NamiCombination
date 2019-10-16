<template>
   <div class="laodada">
     <!--导航头-->
     <div class="myheader laodada">
       <img src="../../assets/img/picture_xu/arrow_left.png" @click="back_Bianjidizhi">
       <p>新增地址</p>
     </div>
     <!--输入模块-->
     <div class="shurumokuai">
       <input type="text" placeholder="请输入你的姓名" :style="{border:jingshi_panduan01?'1px solid red':'1px solid rgba(0,0,0,0.1)'}" @input="shishicahxun01" v-model="name">
       <p v-if="jingshi_panduan01">请填写你的姓名</p>
       <input type="text" placeholder="小区/写字楼/学校等" v-model="xiaoqu" @click="To_Sousuodizhiye">
       <input type="text" placeholder="请填写详细送餐地址" :style="{border:jingshi_panduan03?'1px solid red':'1px solid rgba(0,0,0,0.1)'}" @input="shishicahxun03" v-model="xiangxidizhi">
       <p v-if="jingshi_panduan03">送餐地址太短了,不能辨识</p>
       <input type="text" placeholder="请填写能够联系到您的手机号" :style="{border:jingshi_panduan04?'1px solid red':'1px solid rgba(0,0,0,0.1)'}" @input="shishicahxun04" v-model="shoujihao">
       <p  v-if="jingshi_panduan04">请输入正确的手机号</p>
       <input type="text" placeholder="备用联系电话(选填)" :style="{border:jingshi_panduan05?'1px solid red':'1px solid rgba(0,0,0,0.1)'}" @input="shishicahxun05" v-model="dianhua">
       <p  v-if="jingshi_panduan05">请输入正确的手机号</p>
     </div>
     <!--确定按钮-->
     <div class="tianjianniu" :style="{color:anniuziti_color?'white':'#e6e6e6'}" @click="tianjiaanniu">新增地址</div>
     <!--弹窗-->
     <div class="login1 animated bounceIn fast two " v-if="hiddens">
       <div>
         <img src="../../assets/img/tanhao.png" /></div>
       <span>详细地址信息错误</span>
       <van-button type="primary" class="login2" @click="logine">确认</van-button>
     </div>



   </div>
</template>

<script>
    export default {
        name: "AddressJuTi",
       data(){
         return {
           //声明变量储存提示信息的显隐
           jingshi_panduan01:false,
           jingshi_panduan03:false,
           jingshi_panduan04:false,
           jingshi_panduan05:false,
           //声明变量控制确定按钮的字体颜色
           anniuziti_color:false,
           //声明变量储存数据框里的值，双向绑定
           name:"",
           xiaoqu:"",
           xiangxidizhi:"",
           shoujihao:"",
           dianhua:"",
           //声明变量控制弹窗的显隐
           hiddens:false,
         }
       },
      methods:{
          //返回编辑地址页
        back_Bianjidizhi(){
          this.$router.push({path:"/address"});
        },
          //弹窗的显隐
        logine(){
          this.hiddens=!this.hiddens
        },
        shishicahxun01(){
          if (this.name == ""){
            //判断如果值为空，出现警示
            this.jingshi_panduan01 = true;
          } else{
            //警示消失
            this.jingshi_panduan01 = false;
          }
        },
        shishicahxun03(){
          if (this.xiangxidizhi.length < 3){
            //判断如果值小于3，出现警示
            this.jingshi_panduan03 = true;
          } else{
            //警示消失
            this.jingshi_panduan03 = false;
          }
        },
        shishicahxun04(){
          //判断如果值不是正常手机号，出现警示
          if (!(/^1[34578]\d{9}$/.test(this.shoujihao-0))){
            this.jingshi_panduan04 = true;

            this.anniuziti_color = false;
          } else{
            //警示消失
            this.jingshi_panduan04 = false;
            //控制确定按钮文字颜色是否点亮
            this.anniuziti_color = true;
          };

        },
        shishicahxun05(){
          //判断如果值不是正常手机号，出现警示
          if (!(/^1[34578]\d{9}$/.test(this.dianhua-0))){
            this.jingshi_panduan05 = true;
          } else{
            //警示消失
            this.jingshi_panduan05 = false;
          }
        },
        //去搜索地址页
        To_Sousuodizhiye(){
          this.$router.push({path:"/Sousuodizhiye",query:{dizhi:this.xiaoqu}});
        },
        //确定添加按钮
        tianjiaanniu(){
          //判断输入框是否格式正确
          if ((this.name != "")&(this.xiangxidizhi.length >= 3)&(!(/^1[34578]\d{9}$/).test(this.dianhua-0))){
            //将信息存入vuex,并切入上一页面
            let a = {name:this.name,shoujihao:this.shoujihao};
            //console.log("这是需要向vuex传入的数据",a);
            this.$store.commit("dizhi_data",a);

             this.$router.push({path:"/address"});
          } else{
            //出现弹窗，提示错误
           this.hiddens = true;
          }
        }
      },
      created(){
          //获取搜索地址页传来的数据
        this.xiaoqu = this.$route.query.dizhi_data;
      },
    }
</script>

<style scoped lang="less">
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
    div{
      font-size: 1rem;
      color: white;
      position: absolute;
      top: 50%;
      right: 1rem;
      transform:translateY(-50%);
    }
  }
  .shurumokuai{
    width: 100%;
    padding:0.1rem 0;
    background-color: white;
    margin: 0.6rem 0;

    input{
      display: block;
      margin: 0.6rem auto;
      width: 90%;
      height: 2rem;
      box-sizing: border-box;
      background-color: rgba(0,0,0,0.1);
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 5px;
      padding-left: 0.5rem;
    }

   p{
     font-size: 0.6rem;
     color: red;
     margin: 0.2rem 0;
     padding-left: 1.2rem;
   }

  }
  .tianjianniu{
    width: 90%;
    height: 2rem;
    margin: 0 auto;
    border: 1px solid green;
    text-align: center;
    line-height: 2rem;
    font-size: 0.9rem;
    font-weight: 600;
    background-color: green;
    border-radius: 5px;
  }

  /*弹窗样式*/
  .login1{
    width: 70%;
    background-color: white;
    text-align: center;
    border-radius: 1rem;
    position: absolute;
    top: 8rem;
    left: 15%;
    img{
      margin-top: 1rem;
      margin-bottom: 1rem;
      width: 50%;
      height: 50%;
    }
    span{
      display: block;
      line-height: 2rem;
    }
    .login2{
      width: 100%;
      border-radius: 0 0 1rem 1rem;
    }
  }
  .two{
    z-index: 100;
  }

</style>
