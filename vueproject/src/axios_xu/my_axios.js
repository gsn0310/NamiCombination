import axios from "axios";

export default {

  get(url,response,exception){
    axios({
      method:"get",
      url:url,
      timeout:60000,
      header:{
        "Content-Type":"application/json;charset=UTF-8"
      }
    }).then((result)=>{
      response(result.data);
    })

  },

  post(url,response,exception){
    axios({
      method: "post",
      url:url,
      timeout: 60000,
      header: {
        "Content-Type":"application/json;charset=UTF-8"
      }

    }).then((result)=>{
      response(result.data);
    })
  }

}
