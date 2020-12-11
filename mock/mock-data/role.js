const BaseUrl = `${process.env.BASE_URL}/role`

module.exports = {
  [`GET ${BaseUrl}/right`]: (req, res) => {
    return res.json({
      status: 'ok',
      code: 0,
      data: ['home', 'about']
    })
  }
}
