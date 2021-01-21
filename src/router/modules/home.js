// const subViewFiles = require.context('@/views/home/subview', true, /\.vue$/)

// const subViewRouters = subViewFiles.keys().map(subViewPath => {
//   const subViewPathOrName = subViewPath.split('/')[1]
//   const subViewRouteObj = {
//     path: `/home/${subViewPathOrName}`,
//     name: subViewPathOrName,
//     // webpack4 中动态import参数不支持变量的方式
//     // () => import(`@/views/home/subview${subViewPath.slice(1)}`)
//     // Error: Cannot find module ‘@/views/xxx‘ at webpackEmptyContext
//     component: (resolve) => require([`@/views/home/subview${subViewPath.slice(1)}`], resolve)
//   }
//   return subViewRouteObj
// })
const homeRouter = {
  path: '/home',
  name: 'home',
  component: () =>
    import('@/views/home')
  // redirect: '/home/recommend',
  // children: [
  //   ...subViewRouters
  // ]
}

export default homeRouter
