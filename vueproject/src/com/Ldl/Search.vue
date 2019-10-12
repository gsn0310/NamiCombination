<template>
    <div>
      <!--顶部部分-->
      <div>
        <mt-header title="">
          <router-link to="/" slot="left">
            <mt-button icon="back">{{city_name}}</mt-button>
            <mt-button></mt-button>
          </router-link>
          <mt-button  slot="right">切换城市</mt-button>
        </mt-header>
      </div>
      <!--输入框部分-->
      <div class="Search_top">
        <van-cell-group class="inputs" >
          <van-field  placeholder="输入学校.商务楼,地址"  v-model="input1"/>
        </van-cell-group>
        <mt-button type="primary" class="primart" @click="submit">提交</mt-button>
      </div>
      <!--下面搜索历史部分-->
      <div class="Search_Button" v-if="History_Hidden">
          <p class="Search_Button_p">搜索历史</p>
          <ul class="result">
            <li v-for="(a,i) in history_search" class="result_li">
              <p class="result_li_p1">{{a.name}}</p>
              <p class="result_li_p2">{{a.address}}</p>
            </li>
          </ul>
          <p class="result1" @click="empty" v-if="ojbk">清空所有</p>
        </div>

      <!--搜索结果-->
      <ul class="result" v-if="search_hidden" @click="skip">
        <li v-for="(a ,i) in Submit" class="result_li" @click="Click_the_jump(a)">
            <p class="result_li_p1">{{a.name}}</p>
            <p class="result_li_p2">{{a.address}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
  import Vue from "vue"
    export default {
        name: "Search",
      data(){
          return{
            ojbk:true,
            //搜索历史显示隐藏
            History_Hidden:true,
            //搜索结果显示隐藏
            search_hidden:false,
            //双向数据绑定获取到输入框里面的值
            input1:'',
          // 前面传递到的城市id
            city_id:'',
          //  前面传递到的名字
            city_name:'',
          //  获取到通过输入框获取到的值进行接收
            Submit:[],
          //  用一个数组接受点击后搜索历史即将存入的值
            search_history:[],
          //  接受刷新页面时候出来的值
            history_search:[],
          }
      },
      //方法
      methods:{
        //  跳转到商品页面
        skip(){
          console.log("点击到了")
          this.$router.push({
            path:"/boss"
          })
        },
        //  点击提交按钮
        submit(){
          // console.log("点击到了",this.input1);
          // 发起请求
          Vue.prototype.myaxios.get("https://elm.cangdu.org/v1/pois?city_id=" + this.city_id + "&keyword=" + this.input1,(data)=>{
            // console.log(data);
            this.Submit=data
          });
        //  点击提交搜索历史隐藏
          this.History_Hidden=false;
          this.search_hidden=true

        },
        //点击搜索结果
        Click_the_jump(a){
          console.log("点击到了",a);
          //做判断如果
          let c=this.search_history.find((err)=>{
            return err.name==a.name
          });
          if(!c){
            let b={name:a.name,address:a.address};
            this.search_history.push(b);
          }
          let search_history1=JSON.stringify(this.search_history);
          localStorage.setItem("search_history",search_history1);
          console.log(this.search_history)


        },
        //点击清空所有
        empty(){
          localStorage.removeItem('search_history');
          this.history_search=[];
          this.History_Hidden=false
        }
      },
      // 创造前
      created(){
        // console.log(this.$store.state.vuexone,"页面获取");
        let a=this.$store.state.vuexone.AName;
        // console.log(a);
        this.city_name=a.name;
        this.city_id=a.id;

      //  接受点击后的搜索历史
      //  转义json
        var ojk=localStorage.getItem("search_history");
        ojk=JSON.parse(ojk);
        this.history_search=ojk;
        console.log(this.history_search);

        //创建初期搜索结果是隐藏的
        this.search_hidden=false;
        console.log(this.history_search);
        if(this.history_search==null){
          this.ojbk=false;
        }else {
          this.ojbk=true;
        }
      }
    }
</script>

<style scoped lang="less">
  .Search_top{
  text-align: center;
  margin-top: .5rem;
  /*height: 10rem;*/
  width: 100%;
  background: white;
  padding-top: .5rem;
  .inputs{
    height: 1.7rem;
    width: 80%;
    border: 1px solid lavender;
    margin: 0 auto
  }
  .van-cell{
    padding: .1rem;
  }
  .primart{
    margin:  .6rem 0;
    height: 1.6rem;
    width: 80%;
    font-size: .4rem;
  }

}


  .Search_Button{

    .Search_Button_p{
      font-size: .6rem;
      margin: .4rem .4rem;
    }
    .Search_history{
      height: 4rem;
      background: white;
    }
  }
  .result1{
    background: white;
    text-align: center;
    border-top: 2px solid rgb(248,248,248);
    line-height: 3rem;
  }
  .result{
    background: white;
    border-top: 2px solid rgb(248,248,248);
    .result_li{
      padding: .5rem 0 1rem 1.5rem;
      border-top: 1px solid rgb(248,248,248);
      height: 4rem;
      .result_li_p1{
        line-height: 2rem;
      }
      .result_li_p2{
        line-height: 1.5rem;
        font-size: .5rem;
      }
    }
  }
</style>
