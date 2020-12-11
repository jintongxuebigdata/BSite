/**
 * mocker-api that creates mocks for REST APIs.
 */
module.exports = {
  // GET请求(默认)
  'GET /api/getUsers': (req, res) => {
    const { owner, repo, ref } = req.params
    return res.json({
      id: 1,
      code: 200,
      owner,
      repo,
      ref,
      data: {
        name: 'haha',
        gender: '1'
      }
    })
  },
  // POST请求
  'POST /api/login/account': (req, res) => {
    const { password, username } = req.body
    if (password === '888888' && username === 'admin') {
      return res.json({
        status: 'ok',
        code: 0,
        token: 'sdfsdfsdfdsf',
        data: {
          id: 1,
          username: 'kenny',
          sex: 6
        }
      })
    }
  }
}
