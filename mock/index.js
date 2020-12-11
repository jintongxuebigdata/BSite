const path = require('path')
const { autoLoadFile } = require('./utils')

process.env.BASE_URL = '/bsite/dev-api'
const proxy = {}

const fileList = autoLoadFile(path.join(__dirname, './mock-data'))
fileList.forEach(item => {
  Object.assign(proxy, item)
})
console.log(proxy)
module.exports = proxy
