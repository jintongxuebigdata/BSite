import request from '@/utils/request'

// 登录
export function login (data) {
  return request({
    url: '/bsite/dev-api/user/login',
    method: 'post',
    data
  })
}

// 登出
export function logout (data) {
  return request({
    url: '/bsite/dev-api/user/logout',
    params: data
  })
}

// 校验登录状态
export function logstate (data) {
  return request({
    url: '/bsite/dev-api/user/logstate',
    params: data
  })
}
