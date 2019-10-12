// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

//引入vuex
import Vuex from "vuex"
Vue.use(Vuex);
import vuexone from "./Vuex/Vuex";
const store=new Vuex.Store({
  plugins: [createPersistedState()],
  modules:{
    vuexone
  }
});
//结合localstorage和vuex
import createPersistedState from 'vuex-persistedstate'

//全局引入swiper
import 'swiper/dist/css/swiper.css'


//引入自己封装的axios请求
import myaxios from "./axios_xu/my_axios"
Vue.prototype.myaxios = myaxios;

//刚哥发的网址
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

//引入vant插件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
