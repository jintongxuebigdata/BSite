import cookies from 'js-cookie'

export default {
  // Cookie CURD
  setCookie (key, value, options = {}) {
    cookies.set(key, JSON.stringify(value), options)
  },

  getCookie (key, options = {}) {
    const res = cookies.get(key, options)
    return res
  },

  removeCookie (key, options = {}) {
    cookies.remove(key, options)
  },

  // LocalStorage CURD
  /**
   *
   * @param {*} key
   * @param {*} value
   * @param {*} expires the life cycle of key(day)
   */
  setLocalStorage (key, value, expires = 0) {
    const obj = {
      value,
      endTime: expires
    }
    if (!expires) {
      localStorage.setItem(key, JSON.stringify(obj))
      return
    }
    const endTime = new Date().getTime() + expires * 24 * 3600 * 1000
    obj.endTime = endTime
    localStorage.setItem(key, JSON.stringify(obj))
  },

  getLocalStorage (key) {
    const value = JSON.parse(localStorage.getItem(key))
    const nowTime = new Date().getTime()
    const diffTime = nowTime - value.endTime
    let res = null
    if (!value.endTime || diffTime > 0) {
      res = JSON.parse(localStorage.getItem(key))
      return res.value
    }
    localStorage.removeItem(key)
    return null
  },

  removeLocalStorage (key) {
    localStorage.removeItem(key)
  }
}
