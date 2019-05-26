var jsondata = require('../../../../utils/searchpagedata.js')
Page({

  data: {
    imageurl1: "../../../../images/up.png",
    daindex1: 0,
    imageurl2: "../../../../images/up.png",
    daindex2: 0,
    sort1color:"red",
    sort2color:"black",
    sort3color:"black",
    sore:1,
    res:[],
    flag: []
  },
  onLoad(){
    this.setData({
      res:jsondata.res
    })
  },
  choosesort: function (e){
    this.setData({
      sort1color: "red",
      sort2color: "black",
      sort3color: "black",
      sore: 1,
      imageurl1: "../../../../images/up.png",
      imageurl2: "../../../../images/up.png",
      res: jsondata.res
    })
  },


  choosesort1: function (e) {
    if (this.data.daindex1 == 0) {
      this.setData({
        imageurl1: "../../../../images/down1.png",
        imageurl2: "../../../../images/up.png",
        daindex1: 1,
        sort1color: "black",
        sort2color: "red",
        sort3color: "black",
        sore: 2
      })
      var arr = this.data.res;
      var len = arr.length;
      for (var i = 0; i < len-1; i++) {
        for(var j = 0; j < len-1-i; j++){
          if (arr[j].sales < arr[j + 1].sales){
            var flag = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = flag;
          }
        }
      }
      console.log(arr)
      this.setData({
        res:arr
      })
    } else {
      this.setData({
        imageurl1: "../../../../images/up1.png",
        imageurl2: "../../../../images/up.png",
        daindex1: 0,
        sort1color: "black",
        sort2color: "red",
        sort3color: "black",
        sore: 3
      })
      var arr = this.data.res;
      var len = arr.length;
      for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
          if (arr[j].sales > arr[j + 1].sales) {
            var flag = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = flag;
          }
        }
      }
      console.log(arr)
      this.setData({
        res: arr
      })
    }

  },
  choosesort2: function (e) {
    this.setData({
      sort1color: "black",
      sort2color: "black",
      sort3color: "red"
    })
    if (this.data.daindex2 == 0) {
      this.setData({
        imageurl2: "../../../../images/down1.png",
        imageurl1: "../../../../images/up.png",
        daindex2: 1,
        sore: 4
      })
      var arr = this.data.res;
      var len = arr.length;
      for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
          if (arr[j].prize < arr[j + 1].prize) {
            var flag = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = flag;
          }
        }
      }
      console.log(arr)
      this.setData({
        res: arr
      })
    } else {
      this.setData({
        imageurl2: "../../../../images/up1.png",
        imageurl1: "../../../../images/up.png",
        daindex2: 0,
        sore: 5
      })
      var arr = this.data.res;
      var len = arr.length;
      for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
          if (arr[j].prize > arr[j + 1].prize) {
            var flag = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = flag;
          }
        }
      }
      console.log(arr)
      this.setData({
        res: arr
      })
    }

  },

  backpage() {
    wx.navigateBack({
      delta: 1
    })
  }


})