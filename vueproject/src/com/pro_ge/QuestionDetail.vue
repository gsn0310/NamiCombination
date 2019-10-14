<template>
   <div class="one">
     <!--头部-->
     <div class="one1">
       <router-link :to="{path:'/server'}" class="two"><</router-link>
       <h2 class="bounceLnRight">{{data.title}}</h2>
     </div>
     <div class="titles bounceLnRight">{{data.servers}}</div>
   </div>
</template>
<script>
    export default {
      data(){
        return{
          data:{}
        }
      },
      created(){
        this.data= this.$route.query
      }
    }
</script>

<style scoped>
.one{
  width: 100%;
  background-color: white;
 height: 100%;
}

.one1 {
  width: 100%;
  height: 3rem;
  background-color: dodgerblue;
  color: white;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
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
.titles{
  margin-top: 3rem;
  padding: 1rem;
  font-size:1.1rem;
  letter-spacing: 0.4rem;
  line-height: 1.2rem;
  color: black;
  background-color: white;
}
</style>
