var jsondata = require("../../../utils/orderlistdata.js")
Page({
  data:{
    empty:"none",
    page:"",
    orderclass1:"red",
    orderclass2:"black",
    orderclass3:"black",
    orderclass4:"black",
    orderclass5:"black",
    orderclass6:"black",
    orderList:[]
  },
  onLoad(){
    var that = this;
    setTimeout(function(){
      that.setData({
        page: "ser",
        orderList:jsondata.orderList[0]
      })
    },500)
    setTimeout(function () {
      that.setData({
        page: "all"
      })
    }, 1000)
  },
  allorder(){
    this.setData({
      orderclass1: "red",
      orderclass2: "black",
      orderclass3: "black",
      orderclass4: "black",
      orderclass5: "black",
      orderclass6: "black",
      page:"all",
      orderList: jsondata.orderList[0]
    })
    if(this.data.orderList.length === 0){
      this.setData({
        empty:"block"
      })
    }
    else{
      this.setData({
        empty: "none"
      })
    }
  },
  nopayorder(){
    this.setData({
      orderclass1: "black",
      orderclass2: "red",
      orderclass3: "black",
      orderclass4: "black",
      orderclass5: "black",
      orderclass6: "black",
      page:'nopay',
      orderList: jsondata.orderList[1]
    })
    if (this.data.orderList.length === 0) {
      this.setData({
        empty: "block"
      })
    }
    else {
      this.setData({
        empty: "none"
      })
    }
  },
  nosendorder(){
    this.setData({
      orderclass1: "black",
      orderclass2: "black",
      orderclass3: "red",
      orderclass4: "black",
      orderclass5: "black",
      orderclass6: "black",
      page: 'nosend',
      orderList: jsondata.orderList[2]
    })
    if (this.data.orderList.length === 0) {
      this.setData({
        empty: "block"
      })
    }
    else {
      this.setData({
        empty: "none"
      })
    }
  },
  noaccepyorder(){
    this.setData({
      orderclass1: "black",
      orderclass2: "black",
      orderclass3: "black",
      orderclass4: "red",
      orderclass5: "black",
      orderclass6: "black",
      page: 'noaccept',
      orderList: jsondata.orderList[3]
    })
    if (this.data.orderList.length === 0) {
      this.setData({
        empty: "block"
      })
    }
    else {
      this.setData({
        empty: "none"
      })
    }
  },
  nocommentorder(){
    this.setData({
      orderclass1: "black",
      orderclass2: "black",
      orderclass3: "black",
      orderclass4: "black",
      orderclass5: "red",
      orderclass6: "black",
      page: 'nocomment',
      orderList: jsondata.orderList[4]
    })
    if (this.data.orderList.length === 0) {
      this.setData({
        empty: "block"
      })
    }
    else {
      this.setData({
        empty: "none"
      })
    }
  },

  backpage(){
    wx.navigateBack({
      delta:1
    })
  },
  logisticsPage(){
    wx.navigateTo({
      url: 'logistics/logistics',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  orderdetailPage:function(res){
    var flag = res.target.id;
    wx.navigateTo({
      url: 'orderdetail/orderdetail?id=' + flag,
    })
  },
  havetaken:function(res){
    console.log(res.target.id)
    if (res.target.id === "0"){
      wx.showModal({
      title: '确认收货',
      content: '请确定收到货后再确定收货哦，否则您可能会遭受损失',
      showCancel:true,
      cancelText:"取消",
      cancelColor:"black",
      confirmText:"确认",
      confirmColor:"red",
      success:function(res){
        if(res.confirm){
          wx.showToast({
            title: '已确认收货',
          })
        }
      }
    })
    }
    else if(res.target.id === "2"){
      wx.navigateTo({
        url: 'evaluate/evaluate',
      })
    }
  }
})