<template>
    <div>

      <!--顶部页面操作-->
      <div class="Indent_Top">
        <van-icon name="arrow-left" class="Indent_left" @click="Toseek"/>
        <p class="Indent_middle">订单页面</p>
        <div>
        </div>
      </div>
        <div>

      </div>
      订单页面
    </div>
</template>

<script>
  import  Vue from "vue"
    export default {
        name: "Indent",
      data(){
        return{
          // 变量接受传递过来的经纬度
          Geohash:'',
          //  接受请求的值
          AName:'',
        }
      },
      methods:{
        Toseek(){
          console.log("点击到了");
          this.$router.push({
            path:'/Seek'
          })
        }
      },
      created(){
        //  接收到前面传递的值
        // console.log(this.$route.query,"获取到的");
        this.Geohash=this.$route.query.Geohash;
        //  发起请求根据经纬度进行修改值
        Vue.prototype.myaxios.get("https://elm.cangdu.org/v2/pois/"+this.Geohash,(data)=>{
          console.log(data.name);
          this.AName=data.name
        })
      }
    }
</script>

<style scoped lang="less">
  .Indent_Top{
    background-color: #3190e8;
    position: static;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.8rem;
    color: white;
    text-align: center;
  .Indent_left{
    position: absolute;
    left: .5rem;
    line-height: 2.8rem;
    font-size: 1.5rem;
  }
  .Indent_middle{
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

</style>
