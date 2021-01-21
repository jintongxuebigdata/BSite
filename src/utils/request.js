import axios from 'axios'
import router from '../router'
import { Toast } from 'vant'

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
    // 接口权限校验放到响应拦截中
    // token过期或错误
    if (response.data.code === '4001' || response.data.code === '4002' || response.data.code === '4003') {
      Storage.removeCookie('auth-token')
      Storage.removeLocalStorage('user-info')
      Toast.fail(response.data.msg)
      router.push('/profile')
    }
    const res = response.data
    return res
  },
  err => {
    return Promise.reject(err)
  }
)

export default service
