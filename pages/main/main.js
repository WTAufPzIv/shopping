const ajax = require('../../utils/ajax.js');
const utils = require('../../utils/util.js');
var sectionData = []; 
var ifLoadMore = null;
var page = 1;//默认第一页
Page({
  data:{
    height:"",
    hidden: false,
    lunbo:[
      "http://mz.djmall.xmisp.cn/files/banner/20161222/14823895573.png",
      "http://pic1.ymatou.com/G02/M07/7C/CE/CgvUBFrNzZaAMSW8AAFEr6p5z9M050_75_52_o.jpg",
      "http://m.360buyimg.com/babel/s1120x448_jfs/t16888/181/1508937864/193227/98374bc0/5acdd4c3N8e1f4ba1.jpg",
      "http://mz.djmall.xmisp.cn/files/banner/20161222/148238831285.png"
    ],
    brands:[
      {
        "name": "雅诗兰黛EsteeLauder化妆品", 
        "imgUrl": "https://a.vimage1.com/upcb/2018/04/20/175/ias_152423133788119_604x290_80.jpg"
      },
      {
        "name": "欧莱雅Loreal化妆品", 
        "imgUrl": "https://a.vimage1.com/upcb/2018/05/04/6/ias_152542727279118_604x290_80.jpg"
      },
      {
        "name": "兰蔻Lancome化妆品",
         "imgUrl": "https://a.vimage1.com/upcb/2018/05/04/82/ias_152541360171054_604x290_80.jpg"
      }
    ]
  },
  navbarTap: function (e) {
    console.debug(e);
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  goodspage(){
    wx.navigateTo({
      url: '../goods/goods?Id=0',
    })
  },
  newGoodsShow: function (success) {
    var that = this;
    ajax.request({
      method: 'GET',
      url: 'goods/getHotGoodsList?key=' + utils.key + '&page=' + page + '&size=10',
      success: data => {
        var newGoodsData = data.result.list;
        page += 1;
        if (ifLoadMore) {
          //加载更多
          if (newGoodsData.length > 0) {
            console.log(newGoodsData)
            //日期以及title长度处理
            for (var i in newGoodsData) {
              //商品名称长度处理
              var name = newGoodsData[i].name;
              if (name.length > 26) {
                newGoodsData[i].name = name.substring(0, 23) + '...';
              }
            }
            sectionData['newGoods'] = sectionData['newGoods'].concat(newGoodsData);

          } else {
            ifLoadMore = false;
            this.setData({
              hidden: true
            })
            wx.showToast({
              title: '暂无更多内容！',
              icon: 'loading',
              duration: 2000
            })
          }

        } else {
          if (ifLoadMore == null) {
            ifLoadMore = true;

            //日期以及title长度处理
            for (var i in newGoodsData) {
              //商品名称长度处理
              var name = newGoodsData[i].name;
              if (name.length > 26) {
                newGoodsData[i].name = name.substring(0, 23) + '...';
              }
            }
            sectionData['newGoods'] = newGoodsData;//刷新
          }

        }
        that.setData({
          newGoods: sectionData['newGoods'],
          // isHideLoadMore: true
        });
        wx.stopPullDownRefresh();//结束动画
      }
    })
  },
  onReachBottom: function () {
    console.log("上拉");
    var that = this;
    console.log('加载更多');
    if (ifLoadMore != null) {
      that.newGoodsShow();

    }
  },
  messagepage(){
    wx.navigateTo({
      url: 'message/message',
    })
  },
//   lower(){
//     var result = this.data.res;
//     var resArr = [];
//     for(let i = 0; i< 10; i++) {
//       resArr.push(i);
//     };
//     //上面接后台数据
//     var cont = result.concat(resArr);
//     console.log(resArr.length);
//     if (cont.length >= 100) {
//     wx.showToast({ //如果全部加载完成了也弹一个框
//       title: '暂时就这么多了哦',
//       icon: 'success',
//       duration: 300
//     });
//     return false;
//     } 
//     else {
//       wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
//       title: '努力载入中',
//       icon: 'loading',
//     });
//   setTimeout(() => {
//     this.setData({
//       res: cont
//     });
//     wx.hideLoading();
//   }, 0)
// }
//   },

  searchpage(){
    wx.navigateTo({
      url: 'search/search',
    })
    console.log("11111111");
  },


  searchpage1() {
    wx.navigateTo({
      url: 'classitem/classitem?id=0',
    })
   
  },
  searchpage2() {
    wx.navigateTo({
      url: 'classitem/classitem?id=1',
    })

  },
  searchpage3() {
    wx.navigateTo({
      url: 'classitem/classitem?id=2',
    })

  },
  searchpage4() {
    wx.navigateTo({
      url: 'classitem/classitem?id=3',
    })

  },


  moreclass(){
    wx.navigateTo({
      url: 'class/class',
    })
  },


  onLoad: function(options){
    var that = this;
    //今日精选请求
    //that.brandShow();
    that.newGoodsShow();
    wx.getSystemInfo({
      success: function(res) {
        this.setData({
          height:res.windowHeight
        })
      },
    })
  },


//今日精选请求
  brandShow: function (success) {
    var that = this;
    ajax.request({
      method: 'GET',
      url: 'activity/brands?key=' + utils.key + '&type=temai&page=1&size=5',
      success: data => {

        that.setData({
          brands: data.result.list
        })
        console.log("brands：" + data.result.list)
      }
    })
  },
  catchTapCategory(){
    wx.navigateTo({
      url: '../goods/goods?Id=0',
    })
  }
});