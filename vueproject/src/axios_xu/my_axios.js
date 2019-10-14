import axios from "axios";

axios.defaults.withCredentials = true;

export default {

  get(url, response, exception) {
    axios({
      method: "get",
      url: url,
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    }).then((result) => {
      response(result.data);
    })
  },

  post(url, data, response, exception) {
    axios({
      method: "post",
      url: url,
      data,
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    }).then((result) => {
      response(result.data);
    })
  }

}
