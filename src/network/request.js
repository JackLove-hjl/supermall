import axios from 'axios'

export function request(config) {

    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })

    // 2.axios拦截器
    // 拦截请求
    instance.interceptors.request.use(config => {
        // console.log(config)
        //拦截目的：
        // 比如：config信息不符合服务器要求
        //某些网络请求（登录），必须携带一些特殊的信息
        //拦截之后必须返回出去
        return config
    }, err => {
        // console.log(err);
    })

    //拦截响应(服务器返回的结果)
    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data
    }, err => {
        console.log(err);
    })

    return instance(config)

}