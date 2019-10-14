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
    </div>
</template>

<script>
  import Vue from  "vue"
    export default {
        name: "Top",
      data(){
          return{
            //    变量接受传递过来的经纬度
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

<style scoped >
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
