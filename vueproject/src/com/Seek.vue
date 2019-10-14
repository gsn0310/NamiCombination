<template>
    <div>
      <!--顶部页面操作-->
      <div class="Seek_Top">
          <van-icon name="arrow-left" class="Seek_left" @click="Toseek"/>
          <p class="Seek_middle">搜索页面</p>
        <div>
        </div>
      </div>
      <!--输入框部分-->
      <div class="up">
        <div class="up_div">
            <van-field
              v-model="username"
              clearable
              class="up_input"
              placeholder="请输入用户名"
            ></van-field>
            <van-button type="info" class="up_button" @click="present">提交</van-button>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from "vue"
    export default {
        name: "Seek",
      data(){
        return{
          //    变量接受传递过来的经纬度
          Geohash:'',
          //  接受请求的值
          AName:'',
          //输入框的值
          username:""
        }
      },
      methods:{
        //点击提交按钮
        present(){
          //进行请求
          Vue.prototype.myaxios.get("",(data)=>{

          });
          console.log(this.username)

        },
        //返回到外卖
        Toseek(){
          console.log("点击到了");
          this.$router.push({
            path:'/Classify'
          })
        }
      },
      created(){
        //  接收到前面传递的值
        // console.log(this.$route.query,"获取到的");
        this.Geohash=this.$route.query.Geohash;
        //  发起请求根据经纬度进行修改值
        Vue.prototype.myaxios.get("https://elm.cangdu.org/v4/restaurants?geohash=39.142979,117.276199&keyword=11",(data)=>{
          console.log(data);
        });
        console.log(this.$store.state.vuexone,"vuex中数据");
        let o=this.$store.state.vuexone

      }
    }
</script>

<style scoped lang="less">
  .Seek_Top{
    background-color: #3190e8;
    position: static;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.8rem;
    color: white;
    text-align: center;
    .Seek_left{
      position: absolute;
      left: .5rem;
      line-height: 2.8rem;
      font-size: 1.5rem;
    }
    .Seek_middle{
      width: 100%;
      text-align: center;
       line-height: 2.8rem;
       font-weight: bold;
       font-size: 1.2rem;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
     }
  }
  .up{
    background: white;
    padding: .5rem .5rem;
    .up_div{

      box-sizing: border-box;
      height: 2.7rem;
      .up_button{
        vertical-align: bottom;

        line-height: 2.7rem;
        width: 30%;
      }
      .up_input{
        vertical-align: bottom;
        display: inline-block;
        width: 60%;
        height: 2.6rem;
        background: rgb(242,242,242);
        color: black;
        border-radius: 2%;
        border: .05rem solid rgb(210,211,218);
        padding-left: .3rem;
      }
    }




    
  }
</style>
