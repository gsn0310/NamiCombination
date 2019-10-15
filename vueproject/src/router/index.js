import Vue from 'vue'
import Router from 'vue-router'
//最开始页面
import Home from "../com/Home"
//切换城市
import Search from "../com/Ldl/Search"
//下方四个组件跳转
import boss from "../com/BOOS"
//搜索页面
import Seek from '../com/Seek'
//订单页面
import Indent from '../com/Indent'
//会员中心
import Eleme from '../com/Ldl/Eleme'
//会员中心--->会员特权
import MyDiscounts from  '../com/Ldl/MyDiscounts'
//  会员中心--->计时器
import Timer from  '../com/Ldl/Timer'




//外卖页面
import Classify from '../com/page_xu/Classify_xu'
//详情页面
import XingQingYe from '../com/page_xu/XingQingYe'



//个人中心
import Mine from '../com/Mine'
//个人中心->登录页面
import PassLogin_ge from '../com/pro_ge/PassLogin_ge'
//重置密码
import SubmitGe from '../com/pro_ge/SubmitGe'
// //服务中心
import ServiceGe from '../com/pro_ge/ServiceGe'
////个人中心-->服务中心-->问题说明
import QuestionDetail from '../com/pro_ge/QuestionDetail'
////个人中心-->服务中心-->问题说明
import ZaiXianKefu from '../com/pro_ge/ZaiXianKefu'
////个人中心-->我的余额
import Banlance from '../com/pro_ge/Banlance'
//个人中心-->我的余额-->余额说明
import Detail from '../com/pro_ge/Detail'
//个人中心-->我的积分
import Points from '../com/pro_ge/Points'
//个人中心-->我的积分-->积分说明
import Details from '../com/pro_ge/Details'









Vue.use(Router);
export default new Router({
  routes: [
//城市页面
    {path:"/",component:Home},
    //搜索历史页面
    {path:"/Search",component:Search},
    //四个组件路由跳转
    {path:"/boss",component:boss,children:[
        //默认页面展示为外卖页面
        {path:"/",component:Classify},
        //外卖页面
        {path:"/Classify",component:Classify},
        //搜索页面
        {path:"/Seek",component:Seek},
        //订单页面
        {path:"/Indent",component:Indent},
        //个人中心页面
        {path:"/Mine",component:Mine},
      ]},
    //会员中心
    {path:"/Eleme",component:Eleme},
    //  会员中心--->会员特权
    {path:"/MyDiscounts",component:MyDiscounts},
    //  会员中心--->购买计时器
    {path:"/Timer",component:Timer},




    //个人中心-->重置密码
    {path:"/SubmitGe",component:SubmitGe},
    //服务中心
    {path:"/ServiceGe",component:ServiceGe},
    //个人中心-->服务中心-->问题说明
    {path:"/QuestionDetail",component:QuestionDetail},
    //个人中心-->服务中心-->在线客服
    {path:"/ZaiXianKefu",component:ZaiXianKefu},
    //个人中心-->我的余额
    {path:"/Banlance",component:Banlance},
    //个人中心-->我的余额-->余额说明
    {path:"/Detail",component:Detail},
    //个人中心-->我的积分
    {path:"/Points",component:Points},
    //个人中心-->我的积分-->积分说明
    {path:"/Details",component:Details},
    //个人中心-->登录页面
    {path:"/PassLogin_ge",component:PassLogin_ge},



    //外卖页到详情页
    {path:"/XingQingYe",component:XingQingYe},
    //详情页返回外卖页
    {path:"/back_Classify",component:Classify},


  ]
})
