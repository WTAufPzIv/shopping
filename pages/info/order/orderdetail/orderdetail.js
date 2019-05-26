var jsondata = require('../../../../utils/orderdetaildata.js')
Page({
  data:{
    goods:[],
    address:[],
    order:{
      
    }
  },
  onLoad:function(res){
    var pagenum = res.id
    this.setData({
      goods: jsondata.goods[pagenum],
      address: jsondata.address[pagenum]
    })
  },
  btocpage(){
    wx.navigateTo({
      url: "../../../btocpage/btocpge",
    })
  },
  backpage() {
    wx.navigateBack({
      delta: 1
    })
  },
})