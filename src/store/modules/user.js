import { login, logout } from '@/api/user.js'
import { Toast } from 'vant'
import router from '@/router'

const state = {
  token: '',
  name: '',
  avatar: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  DEL_TOKEN: (state) => {
    state.token = ''
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // 登录
  async login_action ({ commit }, payload) {
    const { msg, token, data } = await login(payload)
    Toast.success(msg)
    commit('SET_TOKEN', token)
    // commit('SET_ROLES', data.roles)
    Storage.setCookie('auth-token', token, { expires: 7 })
    Storage.setLocalStorage('user-info', data)
    router.push({
      path: '/redirect',
      query: {
        routename: 'profile'
      }
    })
  },
  // 登出
  async logout_action ({ commit }, payload) {
    const { msg } = await logout(payload)
    Toast.success(msg)
    commit('DEL_TOKEN')
    Storage.removeCookie('auth-token')
    Storage.removeLocalStorage('user-info')
    router.push({
      path: '/redirect',
      query: {
        routename: 'profile'
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
