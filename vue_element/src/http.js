// import Vue from 'vue'
// import axios from 'axios'
// import Qs from 'qs';
//
// var instance = axios.create({
//     // baseURL:process.env.BASE_Api,
//     timeout:timeout,
//     responseType:'json',
//     withCredentials: true,   //跨域
//     // headers:{'apikey':'foobar'},
//     transformRequest:function(data,headers){
//       //为了避免qs格式化时对内层对象的格式化先把内层的对象转化
//       //由于使用的form-data传数据所以要格式化
//       if(typeof data == 'string'){
//         headers.post['Content-Type'] = 'application/json;charset=utf-8';
//       }else if(!(data instanceof FormData)){
//         headers.post['Content-Type'] = "application/x-www-form-urlencoded";
//
//         for(let key in data){
//           if(data[key]===undefined){
//             data[key]=null;
//           }
//         }
//         data = Qs.stringify(data);
//       }
//       return data;
//     }
// });
// export default instance;
// Vue.prototype.$http=instance;
