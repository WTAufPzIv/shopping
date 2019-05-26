// pages/addressList/addressList.js 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[]
  },


  backpage() {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = wx.getStorageSync('addressList') || [];
    console.info("缓存数据：" + arr);
    // 更新数据  
    this.setData({
      addressList: arr
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad();
  },
  addAddress:function(){
    wx.navigateTo({ url: '../address/address' });
  },
  /* 删除item */
  delAddress: function (e) {
    var that = this;
    wx.showModal({
      title: '删除地址',
      content: '确认删除地址？',
      success(res) {
        if (res.confirm) {
          that.data.addressList.splice(e.target.id.substring(3), 1);
          // 更新data数据对象  
          if (that.data.addressList.length > 0) {
            that.setData({
              addressList: that.data.addressList
            })
            wx.setStorageSync('addressList', that.data.addressList);
          } else {
            that.setData({
              addressList: that.data.addressList
            })
            wx.setStorageSync('addressList', []);
          }
        }
      }
    })
  }

})