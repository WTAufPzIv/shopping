Page({
  backpage() {
    wx.navigateBack({
      delta: 1
    })
  },
  gotoorder() {
    wx.switchTab({
      url: '../../../info/info',
    })
  }
})