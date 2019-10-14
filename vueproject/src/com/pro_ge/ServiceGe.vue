<template>
  <div class="ser">
    <!--头部-->
    <div class="one1">
      <router-link :to="{path:'/Mine'}" class="two"><</router-link>
      <h2 >服务中心</h2>
    </div>
    <!--第二部分客服联系-->
    <ul class="one2">
      <li class="two1">
        <img src="../../assets/img/kefu.png"/>
        <div @click="server">在线客服</div>
      </li>
      <li class="two1">
        <img src="../../assets/img/dianhua.png"/>
        <div>在线客服</div>
      </li>
    </ul>
    <!--第三部分-->
    <div class="one3">热门问题</div>
    <div class="query" v-for="(v,index) in caption" :key="index" @click="getquery(index)">
      <span>{{v}}</span>
      <span> > </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ServiceGe",
    data() {
      return {
        arr: [],
        caption: [],
        content: []
      }
    },
    methods: {
      //使用router对象用来切换传值
      getquery(v) {
        // console.log(this.content[v])
        this.$router.push({path: "/QuestionDetail", query: {servers: this.content[v],title:this.caption[v]}})

      },
      server(){
        this.$router.push({path:"/ZaiXianKefu"})
      }
    },
    beforeCreate() {
      //获取地址信息
      this.myaxios.get("https://elm.cangdu.org/v3/profile/explain", (data) => {
//  筛选数据标题
        for (let v in data) {
          this.arr.push(v)
          // console.log(this.arr.push(v))
        }
        this.arr.splice(this.arr.indexOf("index"), 1);
        for (let i = 0; i < this.arr.length; i += 2) {
          this.caption.push(data[this.arr[i + 1]]);
          this.content.push(data[this.arr[i]])
        }
      }, (err) => {
        console.log(err);
      })
    }

  }
</script>
<style scoped>
  .ser {
    width: 100%;
    background-color: white;
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

  .one2 {
    margin-top: 3rem;
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid #F6F6F6;
  }

  .one2 > li:nth-child(1) {
    border-right: 1px solid #F6F6F6;
  }

  .two1 {
    float: left;
    text-align: center;
    width: 11.7rem;
    padding: 1.5rem;
    box-sizing: border-box;
    font-size: 0.9rem;
  }

  .two1 > img {
    width: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .one3 {
    width: 100%;
    height: 4rem;
    box-sizing: border-box;
    font-size: 1.1rem;
    color: black;
    padding: 1.5rem 1rem;
    border-bottom: 1px solid #F6F6F6;

  }

  .query {
    width: 100%;
    height: 3.5rem;
    padding: 1rem 0.8rem;
    box-sizing: border-box;
    font-size: 1.4rem;
    color: #666666;
    border-bottom: 1px solid #F6F6F6;
  }

  .query > span:nth-child(1) {
    font-size: 1rem;
    width: 20rem;
    display: inline-block;
    text-align: left;
  }

</style>
