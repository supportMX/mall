import axios from 'axios'

export function request(config) {
    // 1 创建axios 示例和单独的配置
    const instance1 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000,
    })

    // 2.拦截器的设置
    // **vue2 使用instance1.interceptors.request
    // **Vue3 使用instance1.interceptors.request.use
    // 2.1请求拦截
    instance1.interceptors.request.use(
        config => {
            // 此处未请求前拦截器，通常用于处理请求之前的处理，例如显示uiload标识，更改配置信息，增加header
            // console.log(config)
            return config
        },
        err => {
            // 此处为请求失败拦截器，通常断网，服务器无响应会到这里
            // console.log(err)
            return err
        },
    )
    // 2.2 响应拦截
    instance1.interceptors.response.use(
        res => {
            // console.log(res)
            return res.data
        },
        err => {
            // console.log(err)
            return err
        },
    )

    // 3.发送请求，并将返回结果返回给调用方处理
    // 考虑到扩展换插件的事情暂未发生，这里直接返回axiosPromise即可
    return instance1(config.BaseConfig)
}
