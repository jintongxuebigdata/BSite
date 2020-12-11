import axios from 'axios'
// import { Toast } from 'vant'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
  // withCredentials: true, // 跨域请求时,发送cookie
})

// 请求拦截
service.interceptors.request.use(
  config => {
    if (Storage.getCookie('auth-token')) {
      config.headers['auth-token'] = Storage.getCookie('auth-token')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  err => {
    return Promise.reject(err)
  }
)

export default service
