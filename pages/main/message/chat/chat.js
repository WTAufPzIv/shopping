var app = getApp();
const appsecret = "251c53e492f26363a9f87a3f6d82dfe6"
Page({
  data: {
    targetid:"",
    connectemojiO: ['😊', '😅', '😲', '😭', '😂', '😄', '😩', '😞', '😵', '😒', '😍',
      '😤', '😜', '😝', '😋', '😘', '😚', '😷', '😳', '😃', '😆', '😁', '😢', '😨',
      '😠', '😣', '😌', '😖', '😔', '😰', '😱', '😪', '😏', '😓'
    ],
    socket_open: false,//判断连接是否打开
    increase: false,//图片添加区域隐藏
    chooseEmoj:"none",
    aniStyle: true,
    last1:"",
    last2:"",
    sendText: "",//发送的消息
    serverMsg: [],//接受的服务端的消息
    userInfo: {
      avatar:'',
      nickname:'',
      target:"fgsfdhdhdg"
    },//app.appData.userInfo,
    scrolltop: 999,
    openid: ""
  },
  clickEmoj:function(res){
    var old = this.data.sendText;
    var add = res.target.id;
    var newstr = old + add;
    console.log(newstr)
    this.setData({
      sendText: newstr
    })
  },
  increase() {
    this.setData({
      increase: true,
      aniStyle: true
    })
  },
  backpage() {
    wx.navigateBack({
      delta: 1
    })
    wx.closeSocket({
      success:function(){
        console.log("已关闭")
      }
    })
    // wx.redirectTo({
    //   url: '../message',
    // })
    // wx.reLaunch({
    //   url: '../message?last1='+this.data.last1+"&last2="+this.data.last2,
    // })
  },
  /**输入内容 */
  sendTextBind: function (e) {
    this.setData({
      sendText: e.detail.value
    });
    console.log(this.data.sendText);
  },
  /**发送消息 */ 
  sendBtn: function (e) {
    console.log('发送消息事件！');
    console.log(this.data.id);
    var msgJson = {
      openid:this.data.openid,
      msg: this.data.sendText,//发送的消息
      nickname:this.data.userInfo.nickname,
      avatar:this.data.userInfo.avatar,
      target:this.data.targetid,
      imgornot: "none",
    }
    //发送消息
    this.send_socket_message(JSON.stringify(msgJson));
    this.setData({
      sendText: ""//发送消息后，清空文本框
    });
  },
  onLoad: function (options) {
    var id = options.id;
    this.setData({
      targetid:id
    })
    console.log(options.id+232323)
    var that = this;
    //获取用户昵称和头像
   
       wx.getUserInfo({
         success:function(res){
           console.log(res)
           that.setData({
             userInfo:{
               avatar:res.userInfo.avatarUrl,
               nickname:res.userInfo.nickName,
               target: res.userInfo.nickName
             }
           })
         }
       })
           
      
    


    //获取openID
      wx.login({
        success: function (res) {
          console.log(res.code)
          //发送请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxa18869d095abf755&secret='+appsecret+'&js_code='+res.code+'&grant_type=authorization_code', //接口地址
            data: {},
            header: {
              'content-type': 'application/json' //默认值
            },
            success: function (info) {
              console.log(info.data)
              console.log("修改之前")
              that.changid(info.data.openid);
              console.log("修改之后")
            }
          })
        }
      })
    
    this.wssInit();
  },
  changid(e){
    this.setData({
      openid: e
    });
    console.log("正在修改")
  },

  wssInit() {
    var that = this;
    //建立连接
    wx.connectSocket({
      url: 'ws://192.168.31.74'//本地服务器socket地址
      //app.appData.socket
    })
    //监听WebSocket连接打开事件。
    wx.onSocketOpen(function (res) {
      console.log('WebSocket连接已打开！');
      that.setData({
        socket_open: true
      });
    });
    //监听WebSocket接受到服务器的消息事件。
    wx.onSocketMessage(function (res) {
      var them = that
      // console.log('收到服务器内容：', res.data);
      var server_msg = JSON.parse(res.data);
      // console.log(server_msg);
      if (server_msg != null) {
        var msgnew = [];
        var flag;
        for (var i = 0; i < server_msg.length; i++) {
          msgnew.push(JSON.parse(server_msg[i].msg));
           console.log(JSON.parse(server_msg[i].msg))
           flag = i;
        }
        console.log("最后的消息",msgnew[flag].msg)
        them.setData({
          last1: msgnew[flag].msg
        })
        // console.log(msgnew[length-1])
        msgnew = that.data.serverMsg.concat(msgnew);
        that.setData({
          serverMsg: msgnew,
          scrolltop: msgnew.length * 100
        });
        // console.log("格式化后的服务端消息"+that.data.serverMsg);
      }
    });
    //监听WebSocket错误。
    wx.onSocketError(function (res) {
      console.log('WebSocket连接打开失败，请检查！', res)
    });

  },
  send_socket_message: function (msg) {
    //socket_open，连接打开的回调后才会为true，然后才能发送消息
    if (this.data.socket_open) {
      console.log(msg)
      wx.sendSocketMessage({
        data:msg
      })
    }
  },


  chooseImage() {

    var that = this

    wx.chooseImage({

      count: 1, // 默认9

      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有

      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有

      success: function (res) {

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片

        var tempFilePaths = res.tempFilePaths

         console.log(res)

        wx.uploadFile({

          url: 'http://localhost:8083/profile', //服务器地址

          filePath: tempFilePaths[0],

          name: 'file',

          headers: {

            'Content-Type': 'form-data'

          },

          success: function (res) {
            console.log(res)
           // conlose.log(JSON.parse(res.data))
            var imgdata = JSON.parse(res.data)
            console.log(imgdata)
            if (res.data) {

              that.setData({

                increase: false

              })
              var msgJson = {
                openid: that.data.openid,
                msg: that.data.sendText,//发送的消息
                nickname: that.data.userInfo.nickname,
                avatar: that.data.userInfo.avatar,
                target: that.data.targetid,
                imgornot: "block",
                imgUrl:imgdata.filePath
              }
              that.send_socket_message(JSON.stringify(msgJson));

               that.bottom()

            }

          }

        })

      }

    })

  },

  chooseEmoj(){
    this.setData({
      chooseEmoj:"block"
    })
  },

close(){
  this.setData({
    chooseEmoj: "none"
  })
  console.log("666")
},
  close1() {
    this.setData({
      increase: false,
      aniStyle: false,
      chooseEmoj:"none"
    })
    console.log("666")
  }
  
})
