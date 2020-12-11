import { login, logout } from '@/api/user.js'
import { Toast } from 'vant'
import $router from '@/router'

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
  }
}

const actions = {
  async login_action ({ commit }, payload) {
    const { code, msg, token, data } = await login(payload)
    if (code === 4001) {
      Storage.removeCookie('auth-token')
      Storage.removeLocalStorage('user-info')
      Toast.fail(msg)
      return
    } else if (code === 4002) {
      Toast.fail(msg)
      return
    } else if (code === 2001) {
      Toast.success(msg)
      Storage.setLocalStorage('user-info', data)
      $router.push({
        path: '/redirect',
        query: {
          routename: 'profile'
        }
      })
      return
    }
    Toast.success(msg)
    commit('SET_TOKEN', token)
    Storage.setCookie('auth-token', token, { expires: 7 })
    Storage.setLocalStorage('user-info', data)
    $router.push({
      path: '/redirect',
      query: {
        routename: 'profile'
      }
    })
  },
  async logout_action ({ commit }, payload) {
    const { msg } = await logout(payload)
    Toast.success(msg)
    commit('DEL_TOKEN')
    Storage.removeCookie('auth-token')
    Storage.removeLocalStorage('user-info')
    $router.push({
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
