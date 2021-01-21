
// 根据用户角色动态添加路由 common  member  visitor
import router from './'
import { logstate } from '@/api/user'

// const whiteList = ['/home', '/profile']
router.beforeEach((to, from, next) => {
  // 校验是否需要登录权限

  // 校验登录状态
  const token = Storage.getCookie('auth-token')
  const { username } = Storage.getLocalStorage('user-info')
  if (to.path === '/profile' && token) {
    logstate({ username, token }).then(response => {
      response.data.code === '2001' && next()
      response.data.code === '4001' && next('/profile')
    })
  }
})
