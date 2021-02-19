import Vue from "vue"
import axios from "axios";
import {message} from 'ant-design-vue';


const service = axios.create({
  timeout: 5000
});
// 添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  config.headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Token":"39046A5AF8CB8DEE5E7232B8C8C53293X1"
  }
  // config.data.Token ="1AB4B14DE0AF1ACBEE8CA44C4CED50C18DC7DCDFCF3AF65120339B00BBFBA2E9F"
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器
service.interceptors.response.use(( { data } )=>{
  // 对响应数据做点什么
  if(data.code != "0")
  message.error(data.msg)
  return data;
},
error =>{
  return Promise.reject(error);
});

export default service