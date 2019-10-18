import Vue from "vue"
export default ({
  /*注释:
  *
  *   如果需要将值存入localstorage中使用的话
  *   使用方法为
  *   JSON.parse(localStrorage[""]||"{}")
  *   如果想取值的话
  *   例如在state中一个变量key1来接受传递过来的值
  *   key1:JSON.parse(localStorage["key1"] || "{}"),
  *
  * */
  state:{
    //全部城市的值
    AName:{},
    //地址信息
    dizhi_data:[],
    //搜索店铺信息得搜索记录
    cun_dianpusousuojilu:[],

  },
  //方法
  mutations:{
    //获取到全部城市中给的值
    AName(state,res){
      state.AName=res;
    },
    //商铺信息
    shangpu_data(state,res){
      state.shangpu_data=res;
      console.log(state.shangpu_data,"vuex中的数据")
    },
    //地址信息
    dizhi_data(state,res){
      //把添加的值存到数组里
      console.log(123123123, res);
      state.dizhi_data.push(res);
    },
    //搜索店铺信息得搜索记录
    cun_dianpusousuojilu(state,res){
      state.cun_dianpusousuojilu.push(res);
    },
    //删除单个搜索店铺信息得搜索记录
    shanchu_dangelishishuju(state,res){
      state.cun_dianpusousuojilu.splice(state.cun_dianpusousuojilu.indexOf(res),1);
    },
    //清空店铺信息的搜素记录
    qingkong_lishi(state,res){
      state.cun_dianpusousuojilu = [];
    }
  },
  //计算属性
  getters:{

  },
//  异步操作
  action:{

  }


});

