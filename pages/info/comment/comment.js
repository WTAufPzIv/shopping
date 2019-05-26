Page({
  data: {
    time:'2019-03-13',
    img: "../../../images/erji.png",
    name: "NETEASE/网易 漫步者W800X立体声头戴式蓝牙耳机无线运动游戏耳麦",
    price: "199",
    contentimg:[
      "../../../images/comimg1.jpg",
      "../../../images/comimg2.jpg",
    ],
    content:"good,very nice.",
    user:{
      nickanem:"",
      avatar:""
    }
  },
  onLoad(){
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          user: {
            avatar: res.userInfo.avatarUrl,
            nickname: res.userInfo.nickName
          }
        })
      }
    })
  },
  backpage() {
    wx.navigateBack({
      delta: 1
    })
  }
})