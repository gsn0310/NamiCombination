<template>
    <div class="ban">
      <!--头部-->
      <div class="one1">
        <router-link :to="{path:'/Benefit'}" class="two"><</router-link>
        <h2>历史红包</h2>
      </div>
      <div style="margin-top: 4rem"></div>
      <!--查看历史红包-->
      <ul class="one4" v-for="(v,i) in monte" :key="i">
        <li class="two1" >
          <div class="three1" >
            <p><span class="y">￥</span>{{v.amount}}<span class="zoom">.0</span> </p>
            <p>满{{v.sum_condition}}元可用</p>
          </div>
          <div class="three2">
            <p>{{v.name}}</p>
            <p>{{v.end_date}}到期</p>
            <p>限制收获手机号为 {{v.phone}}</p>
          </div>
          <div class="three3"><img src="../../assets/img/yiguoqi.png" height="70" width="70"/></div>

        </li>
<li class="zhushi"> 限品类：小吃夜宵</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "History",
      data(){
        return{
          monte:{}
        }
      },
      created(){
          this.myaxios.get("https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0",(res)=>{
            this.monte=res
            console.log(res)
          })
      }
    }
</script>

<style scoped>
  .ban {
    width: 100%;
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
  .one4 {
    margin: 1rem auto ;
    width: 22rem;
    background-color: #F9F9F9;
    border-radius: 0.5rem;
    box-sizing: border-box;
  }
  .two1 {
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAAAXNSR0IArs4c6QAAAHtJREFUKBVjvHv37n8GKgImKpoFNmoYGcjIyAgK6+VA2o6FhUWInZ1dlomJKQDIP40cbIzERApQ01+g5jAFBYV1yJpB7P///zPev39/IpDOBfGJDcNGbIaBDAC5XFFRsQBIHwDxCRoIVPidmZl5CkgxLgBU8w/owl6QPABvmyDiDQUF7gAAAABJRU5ErkJggg==) repeat-x;
    background-size: .6rem .3rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
    display: flex;
    justify-content: space-around;
    width:21rem;
    padding: 1rem 0.5rem;
  }

  .three1 {
    padding-top: 0.5rem;
    margin-right: 0.1rem;
  }
  .y{
    font-size: 0.9rem;
    font-weight: bold;
  }
.zoom{
  font-size:1.2rem;
}
  .three1 > p:nth-child(1) {
    color: #CCCCCC;
    font-size: 1.6rem;
    margin: 0.5rem 0;
    font-weight: bold;
  }

  .three1 > p:nth-child(2) {
    font-size: .8rem;
  }

  .three2 {
    padding-top: 0.5rem;
    border-left: 1px dotted #CCCCCC;
    padding-left: 0.5rem;
    font-size: .8rem;
    float: left;
  }

  .three2 > p {
    margin-bottom: 0.5rem;
  }

  .three2 > p:nth-child(1) {
    color: #666;
    font-size: 1.1rem;
  }
  .zhushi{
    font-size: 0.8rem;
    padding: 0.8rem;
    margin-left: 0.5rem;
    color: #999999;
  }
</style>
