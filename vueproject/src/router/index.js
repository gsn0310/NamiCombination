import Vue from 'vue'
import Router from 'vue-router'

//最开始页面
import Home from "../com/Home"
import boss from "../com/BOOS"

import Search from "../com/Ldl/Search"

import Classify from '../com/page_xu/Classify_xu'



Vue.use(Router);

export default new Router({
  routes: [

    {path:"/",component:Home},
    {path:"/boss",component:boss},
    {path:"/Search",component:Search},


  ]
})
