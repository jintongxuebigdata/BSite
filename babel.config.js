module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    development: {
      // 解决热更新速度慢的问题
      // 将所有的import()转化为require()，这样就可以用这个插件将所有异步组件都用同步的方式引入
      plugins: ['dynamic-import-node']
    }
  },
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      // 定制主题-按需引入样式源文件
      style: (name) => `${name}/style/less`
    }, 'vant']
  ]
}
