Page({
  data:{
    array: ['普通快递', '东购专线',],
    index: '普通快递',
    // prize:429,
    addressList:[],
    howsend:"普通快递",
    item:{
      name:"雅诗兰黛（Estee Lauder）持妆无瑕气垫粉霜 17# SPF30+/PA+++ 12g（1W1 BONE 自然偏白肤色）新老包装随机",
      prize:356,
      yunfei:50,
      tax:23,
      num:1,
      img:"https://img11.360buyimg.com/n7/s370x370_jfs/t22306/277/1526836895/190400/1f662473/5b2c90c8N87f619ac.jpg!q70.jpg"
    }
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: this.data.array[e.detail.value],
      // howsend:this.data.index
    })
  },
  backpage(){
    wx.navigateBack({
      delta:1
    })
  },
  onLoad(){
    var arr = wx.getStorageSync('addressList') || [];
    console.info("缓存数据：" + arr);
    // 更新数据  
    this.setData({
      addressList: arr
    });
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  openConfirm: function () {
    wx.showModal({
      content: '商品总价:'+this.data.item.prize+'\n运费:'+this.data.item.yunfei+'\n税费:'+this.data.item.tax,
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    });
  },
  havepay(){
    wx.navigateTo({
      url: 'payresult/payresult',
    })
  }
})