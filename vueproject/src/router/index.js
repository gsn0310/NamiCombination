import Vue from 'vue'
import Router from 'vue-router'
import Home from "../com/Home"
import boss from "../com/BOOS"


Vue.use(Router);

export default new Router({
  routes: [
    {path:"/",component:Home},
    {path:"/boss",component:boss}

  ]
})
