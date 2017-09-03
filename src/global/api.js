//接口配置

//把全体接口封装在的前端配置文件（序号与接口文档一一对应），多个环境配置时可快速切换整站式的全部接口，不用逐个页面去改。
const config = require('../../config');

let url = {
    // 生产环境时staticPath的值为'./'，开发环境时staticPath的值为'/static/'。
    staticPath: process.env.NODE_ENV !== 'development' ?  config.build.staticPath: config.dev.staticPath
};

//----------------请注意：如果正式环境，不需要本地json数据模拟，请删除以上代码和api中的模拟接口。----------------


export const api = {
    'login':url.staticPath+'/dataJson/login.json',//登录模拟接口，正式环境请删除
    "login":url.staticPath+'/dataJson/login.json',//登录接口
    "onePatient":url.staticPath+'/dataJson/onePatient.json',
    "patient":url.staticPath+'/dataJson/patient.json',
    "patientDetails":url.staticPath+'/dataJson/patientDetails.json',
    "item":url.staticPath+'/dataJson/Project/item.json',
    "meal":url.staticPath+'/dataJson/Project/meal.json',

    "home":url.staticPath+'/json/home.json',
    "personalInto":url.staticPath+'/json/jm-personalInto.json',
    "clinicData":url.staticPath+'/json/ql-clinicData.json',
    "appointment":url.staticPath+'/json/yy-appointment.json',
    "recipe":url.staticPath+'/json/yy-recipe.json',
            
}
    

// export default api