<template>
    <div>
      <transition name="fade" mode="out-in">
      <Button></Button>
      </transition>
    </div>
</template>

<script>
    import Button from "./Button";
    import Vue from "vue"
    export default {
        name: "BOOS",
      components: { Button},
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

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
