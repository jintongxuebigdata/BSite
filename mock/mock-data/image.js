const BaseUrl = `${process.env.BASE_URL}/img`

module.exports = {
  // GET请求(默认)
  [`GET ${BaseUrl}/swiper`]: (req, res) => {
    return res.json({
      id: 1,
      code: 200,
      data: {
        swiperList: [
          'https://i0.hdslb.com/bfs/archive/e4acc5ad801a6f7dc1c5a0d03a279700df194717.jpg@880w_388h_1c_95q',
          'https://i0.hdslb.com/bfs/sycp/creative_img/202012/bd81f0818617ffef2de0d2f7a4513001.jpg@880w_388h_1c_95q',
          'https://i0.hdslb.com/bfs/archive/dd2b00525dc71b42b85c70d13a6bd6b2e3840d33.jpg@880w_388h_1c_95q'
        ]
      }
    })
  }
}
