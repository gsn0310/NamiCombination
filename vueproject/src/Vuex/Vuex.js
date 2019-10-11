import Vue from "vue"
export default ({
  /*注释:
  *
  *   如果需要将值存入localstorage中使用的话
  *   使用方法为
  *   JSON.parse(localStrorage[""]||"{}")
  *   如果想取值的话
  *
  * */
  state:{
    //全部城市的值
    AName:{},
  },
  //方法
  mutations:{
    //获取到全部城市中给的值
    AName(state,res){
      state.AName=res;
      console.log(state.AName,"vuex中的数据")
    }
  },
  //计算属性
  getters:{

  },
//  异步操作
  action:{

  }


});

