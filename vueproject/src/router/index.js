import Vue from 'vue'
import Router from 'vue-router'

//最开始页面
import Home from "../com/Home"
import boss from "../com/BOOS"

import Search from "../com/Ldl/Search"

import Classify from '../com/page_xu/Classify_xu'
import Seek from '../com/Seek'

import Indent from '../com/Indent'
import Mine from '../com/Mine'
import Take_Out from '../com/Take_Out'
// import pro from '../com/pro_ge/ProFileGe'



Vue.use(Router);
export default new Router({
  routes: [
    {path:"/",component:Home},
    {path:"/boss",component:boss,children:[
        {path:"/",component:Classify},
        {path:"/Classify",component:Classify},
        {path:"/Seek",component:Seek},
        {path:"/Indent",component:Indent},
        {path:"/Mine",component:Mine},

      ]},
    {path:"/Search",component:Search},
    {path:"/Take_Out",component:Take_Out},
    // {path:"/pro",component:pro},






  ]
})
