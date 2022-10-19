import axios from 'axios'

let serve = new axios.create({
    baseURL:"http://192.168.210.78:9527/api",
    timeout:3000
})


serve.interceptors.request.use(config=>{
    // console.log('请求拦截器.....');
    // ....
    return config
})

serve.interceptors.response.use(result=>{
    // console.log('响应拦截器。。。。');
    let data = result.data;
    // ....
    return data;
})

export default serve