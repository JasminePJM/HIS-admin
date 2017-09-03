import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Index from '@/view/Index/index'
import Booking from '@/view/yy-appointment'
import yydDetails from '@/view/yy-details'
import Project from '@/view/project'
import Patient from '@/view/patient'
import PersonalInfo from '@/view/personalInfo'
/*2017/8/5---lxy*/
import Register from '@/view/register'
import Login from '@/view/login'
/*2017/8/5---ljx*/
import PatientInfo from '@/view/patientInfo'
import PatientDetails from '@/view/patientDetails'

/*2017/8/3-----lxy*/
import Item from '@/view/Project/Item'
import Meal from '@/view/Project/Meal'
import regFee from '@/view/Project/regFee'
import addItem from '@/view/Project/addItem'
import addMeal from '@/view/Project/addMeal'

/*ql*/
import Clinic from '@/view/ql-clinic'
import Count from '@/view/ql-count'
import countTubiao1  from '@/view/count/yiliao-bingren-tubiao'
import countHz1  from '@/view/count/yiliao-br-huizong'
import countMx1  from '@/view/count/yiliao-br-mingxi'

/*styy*/
import yyDetails from '@/view/yy-details'
import yyNewAppoint from '@/view/yy-newAppoint'
import yyNewAppointFirst from '@/view/yy-newAppointFirst'
import Recipe from '@/view/yy-recipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'index',
      component: Index,
      redirect:'/home',
      children:[
        {
          path: '/home',
          name:'首页',
          component: Home
        },
        {
          path: '/personalInfo',
          name:'个人信息',
          component: PersonalInfo
        },
        {
          path: '/booking',
          name:' 预约',
          component: Booking
        },
        {
          path:'/booking/details',
          name:' 预约 / 预约详情',
          component: yydDetails
        },
        {
          path: '/recipe',
          name:'处方',
          component: Recipe
        },
        {
          path: '/patient',
          name:'患者',
          component: Patient
        },
        {
          path: '/patientInfo',
          name:'患者信息',
          component: PatientInfo
        },
        {
          path: '/patientInfo',
          name:'患者详情',
          component: PatientInfo
        },
        {
          path: '/patientDetails',
          name:'患者',
          component: PatientDetails
        },
        /*ql*/
        {
          path: '/clinic',
          name:'诊所',
          component: Clinic
        },
        {
          path: '/count',
          component: Count,
          name:'统计',
          children:[
          {
            path:'/yiliao-bingren-tubiao',
            name:'图表',
            component: countTubiao1
          },{
            path:'/yiliao-bingren-huizong',
            name:'汇总表',
            component: countHz1
          },{
            path:'/yiliao-bingren-mingxi',
            name:'明细表',
            component: countMx1
          }]
        },
        {
            path:'/booking/newAppoint',
            name:' 预约 / 新增预约',
            component: yyNewAppoint
        },
        {
            path:'/booking/newAppointFirst',
            name:' 预约 / 新增预约',
            component: yyNewAppointFirst
        },
        {
          path: '/project', 
          component: Project,
          redirect:'/project/item',
          children: [
            { path: '/project/item', component: Item, name:'项目' }, 
            { path: '/project/meal', component: Meal, name:'套餐'},
            { path: '/project/regFee', component: regFee, name:'挂号费'}, 
          ]
        },
        { path: '/project/addItem', component: addItem, name:'新增项目'}, 
        { path: '/project/addMeal', component: addMeal, name:'新增套餐'}, 
      ]
    },
    {
      path: '/login',
      name:'登录',
      component: Login
    },
    { 
      path: '/register', 
      component: Register, 
      name:'注册'
    },

  ]
})