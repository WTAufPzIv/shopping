Page({
  data:{
    wuliu: ['已接收', '抵达武汉', '发往武汉'],
  },
  backpage() {
    wx.navigateBack({
      delta: 1
    })
  },
})