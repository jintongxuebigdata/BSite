const md5 = require('md5')

const BaseUrl = `${process.env.BASE_URL}/user`

const userList = new Map([
  ['bilibili2333', {
    username: 'bilibili2333',
    password: '666666',
    avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3556742214,4062031476&fm=26&gp=0.jpg',
    nickname: 'bilibili'
  }],
  ['mabaoguo2333', {
    username: 'mabaoguo2333',
    password: '666666',
    avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1508383676,1310190030&fm=11&gp=0.jpg',
    nickname: 'mabaoguo'
  }],
  ['paidaxing2333', {
    username: 'paidaxing2333',
    password: '666666',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607358928191&di=190c198ddb58d74a187ca598fad6ad4a&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201903%2F02%2F20190302150317_YTZyM.thumb.400_0.jpeg',
    nickname: 'paidaxing'
  }]
])

// 用户token存储
const tokenInfo = new Map()

function initTokenExpires (token) {
  const expires = new Date().getTime() + 7 * 24 * 3600 * 1000
  return expires
}

function checkToken (key) {
  if (!tokenInfo.get(key)) {
    return 4003 // 首次登录
  }
  const diffTime = tokenInfo.get(key).expires - new Date().getTime()
  if (diffTime > 0) {
    console.log(diffTime)
    return 2001 // token新鲜
  }
  tokenInfo.delete(key)
  return 4001
}

function refreshToken (key) {
  const token = md5(key + new Date().getTime())
  const expires = initTokenExpires(token)
  return {
    token,
    expires
  }
}

function removeToken (key) {
  tokenInfo.delete(key)
  return true
}

module.exports = {
  // 登录
  [`POST ${BaseUrl}/login`]: (req, res) => {
    const { password, username } = req.body
    if (userList.has(username) && password === userList.get(username).password) {
      const tokenCode = checkToken(username)
      if (req.headers['auth-token'] || tokenCode) {
        console.log(tokenCode)
        if (tokenCode === 2001) {
          return res.json({
            status: 'success',
            msg: '登录成功',
            code: 2001,
            token: req.headers['auth-token'],
            data: userList.get(username)
          })
        } else if (tokenCode === 4001) {
          return res.json({
            status: 'failed',
            msg: '登录已过期请重新登录',
            code: 4001
          })
        } else if (tokenCode === 4003) {
          const { token, expires } = refreshToken(username)
          tokenInfo.set(username, { expires, token })
          return res.json({
            status: 'success',
            msg: '登录成功',
            code: 200,
            token: token,
            data: userList.get(username)
          })
        }
      }
    } else {
      return res.json({
        msg: '请输入正确的用户名和密码',
        status: 'failed',
        code: 4002
      })
    }
  },

  // 登出
  [`GET ${BaseUrl}/logout`]: (req, res) => {
    const { username } = req.query
    if (removeToken(username)) {
      res.json({
        status: 'success',
        code: 200,
        msg: '已退出登录'
      })
    }
  }
}
