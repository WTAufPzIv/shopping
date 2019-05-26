Page({
  data:{
    nomessage:"none",
    havemessage: "block",
    messageNum:0,
     short1:"",
    short2: "",
    message:[
      {
        img:"https://wx.qlogo.cn/mmopen/vi_32/TTPicMEZ5s1xSphoQMTtn7icxianRSMX7MpKWYibMnqNvusJ0aUTDH9II3JB0W6Rj7VyWNiau204q70JVgWXcibl7QoQ/132",
        nickname:"Tuuffy",
        message:"",
        time:"2019/03/08"
      },
      {
        img: "../../../images/mzy.jpg",
        nickname: "马征宇",
        message: "亲，您的商品暂时无货哦",
        time: "2019/03/08"
      }
    ]
  },

  chatpage:function(res){
    
console.log(res.target.id)
    wx.navigateTo({
      url: 'chat/chat?id='+res.target.id,
    })
    // wx.redirectTo({
    //   url: 'chat/chat',
    // })
  },


  backpage() {
    // wx.navigateBack({
    //   delta: 1
    // })
    wx.navigateBack({
      delta:1
    })
  },
  onLoad:function(res){
    this.setData({
      short1:res.last1,
      short2:res.last2
    })
    console.log("这是消息页面")
  }


})