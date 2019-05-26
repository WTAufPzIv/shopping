const ajax = require('../../../utils/ajax.js');
const utils = require('../../../utils/util.js');
Page({

  data: {
    classifyItems: [
      {
        "id": 0,
        "name": "产地",
        "ishaveChild": true,
        "shopClassifyDtoList": [
          {
            name:"中国大陆",
            imgUrl:"../../../images/china.png"
          },
          {
            name: "中国台湾",
            imgUrl: "../../../images/china.png"
          },
          {
            name: "中国香港",
            imgUrl: "../../../images/china.png"
          },
          {
            name: "美国",
            imgUrl: "../../../images/USA.png"
          },
          {
            name: "日本",
            imgUrl: "../../../images/japan.png"
          },
          {
            name: "韩国",
            imgUrl: "../../../images/bangzi.png"
          },
          {
            name: "俄罗斯",
            imgUrl: "../../../images/ru.png"
          },
          {
            name: "澳大利亚",
            imgUrl: "../../../images/aus.png"
          },
          {
            name: "印度",
            imgUrl: "../../../images/three.png"
          },
          {
            name: "泰国",
            imgUrl: "../../../images/tai.png"
          },
          {
            name: "英国",
            imgUrl: "../../../images/UK.png"
          },
          {
            name: "法国",
            imgUrl: "../../../images/france.png"
          },
          {
            name: "德国",
            imgUrl: "../../../images/E100.png"
          },
          {
            name: "瑞士",
            imgUrl: "../../../images/ruishi.png"
          },
          {
            name: "荷兰",
            imgUrl: "../../../images/荷兰.png"
          },
         
          {
            name: "瑞典",
            imgUrl: "../../../images/strv.png"
          },
          {
            name: "意大利",
            imgUrl: "../../../images/boom.png"
          },
          {
            name: "加拿大",
            imgUrl: "../../../images/canada.png"
          }
        ]
      },
      {
        "id": 1,
        "name": "个人护理",
        "ishaveChild": true,
        "shopClassifyDtoList": [
          {
            "id": 2,
            "name": "洗护套装",
            "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/category/2017/11/06/142/62863029-eb85-4d1a-bdf6-8a67fa91ce3b_300x375_80.jpg"
          },
          {
            "id": 3,
            "name": "卸妆",
            "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/category/2017/02/24/134/6d33dac3-8de7-4980-86be-907a112b1ecf_300x375_80.jpg"
          },
          {
            "id": 4,
            "name": "护肤套装",
            "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/category/2018/06/22/46/96f4e409-faaa-487c-ba8e-a2685e07b62c_300x375_80.png"
          }
        ]
      },
      {
        "id": 5,
        "name": "护肤彩妆",
        "ishaveChild": true,
        "shopClassifyDtoList": [
          {
            "id": 6,
            "name": "面膜",
            "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/06/22/117/15296371356181_300x375_80.png"
          },
          {
            "id": 7,
            "name": "面霜",
            "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/06/25/183/15299035136290_300x375_80.png"
          },
          {
            "id": 8,
            "name": "晚霜",
            "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/07/06/72/15308438751848_300x375_80.jpg"
          },
          {
            "id": 9,
            "name": "香水",
            "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/category/2018/05/02/31/e94cfce3-b13d-45de-90e9-baaa15263338_300x375_80.png"
          }
        ]
      },
      {

        "id": 11,
        "name": "护肤",
        "ishaveChild": true,
        "shopClassifyDtoList": [
          {
            "id": 12,
            "name": "气垫bb",
            "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381301.jpg"
          },
          {
            "id": 13,
            "name": "隔离霜",
            "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161215/148179053369.jpg"
          },
          {
            "id": 14,
            "name": "修容/高光",
            "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381411.jpg"
          },
          {
            "id": 15,
            "name": "遮瑕",
            "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153815181.jpg"
          },
          {
            "id": 16,
            "name": "腮红",
            "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153815759.jpg"
          },
          {
            "id": 17,
            "name": "粉底",
            "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153817721.jpg"
          },
          {
            "id": 18,
            "name": "粉饼",
            "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153816983.jpg"
          },
          {
            "id": 19,
            "name": "蜜粉/散粉",
            "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153819354.jpg"
          }
        ]
      }, 
      {

        "id":20,
        "name": "电子数码",
        "ishaveChild": true,
        "shopClassifyDtoList": [
          {
            "id": 23,
            "name": "Apple",
            "imgUrl": "http://www.logoids.com/upload/image/201801/15158283677962278.jpg"
          },
          {
            "id": 24,
            "name": "华为",
            "imgUrl": "http://www.logoids.com/upload/image/201801/15151421217019377.jpg"
          },
          {
            "id": 25,
            "name": "小米",
            "imgUrl": "http://www.logoids.com/upload/image/201801/15151432285720792.jpg"
          },
          {
            "id": 26,
            "name": "OPPO",
            "imgUrl": "http://www.logoids.com/upload/image/201801/15153037753503477.jpg"
          },
          {
            "id": 27,
            "name": "VIVO",
            "imgUrl": "http://www.logoids.com/upload/image/201801/15153035096646940.jpg"
          },
          {
            "id": 28,
            "name": "魅族",
            "imgUrl": "http://www.logoids.com/upload/image/201801/15153026524406141.jpg"
          },
          {
            "id": 29,
            "name": "三星",
            "imgUrl": "http://www.logoids.com/upload/image/201801/15150561539127516.jpg"
          },
          {
            "id": 30,
            "name": "锤子",
            "imgUrl": "http://www.logoids.com/upload/image/201801/15153040763667173.jpg"
          },
          {
            "id": 31,
            "name": "老人机",
            "imgUrl": "https://img14.360buyimg.com/n7/jfs/t7183/165/1486289850/149007/7ed24019/598bd77eNa366c08c.jpg"
          },
          {
            "id": 32,
            "name": "平板电脑",
            "imgUrl": "http://www.logoids.com/upload/image/201801/15171908865612577.jpg"
          },
          {
            "id": 33,
            "name": "音响",
            "imgUrl": "https://img10.360buyimg.com/n7/jfs/t1/8774/17/13446/184541/5c467b3eEca070206/a46c0c6885a870e4.jpg"
          }, {
            "id": 34,
            "name": "相机",
            "imgUrl": "https://img10.360buyimg.com/n7/jfs/t25273/285/908312006/255926/5b11672/5b7fca34N6dae91f9.jpg"
          },
          {
            "id": 35,
            "name": "行车记录仪",
            "imgUrl": "https://img14.360buyimg.com/n7/jfs/t1/21899/36/5346/143158/5c3d7ff2E644ec286/c89a5796fbf6c020.jpg"
          },
          {
            "id": 35,
            "name": "智能手表",
            "imgUrl": "https://img11.360buyimg.com/n7/jfs/t1/20877/27/5366/272656/5c3be817E4b4b4af8/b59cb66214e9a022.jpg"
          },
          {
            "id": 35,
            "name": "存储设备",
            "imgUrl": "https://img12.360buyimg.com/n7/jfs/t26587/327/1011652961/249231/fdddf51c/5bbefb44Nba7c35d0.jpg"
          }
        ]
      }, 
      {
        "id": 36,
        "name": "潮流穿搭",
        "ishaveChild": true,
        "shopClassifyDtoList": [ 
        ]
      },
      {
        "id": 37,
        "name": "家用电器",
        "ishaveChild": true,
        "shopClassifyDtoList": [
        ]
      },
      {
        "id": 38,
        "name": "鞋靴箱包",
        "ishaveChild": true,
        "shopClassifyDtoList": [
        ]
      },
      {
        "id": 39,
        "name": "运动户外",
        "ishaveChild": true,
        "shopClassifyDtoList": [
        ]
      },
      {
        "id": 40,
        "name": "电脑办公",
        "ishaveChild": true,
        "shopClassifyDtoList": [
        ]
      },
      {
        "id": 41,
        "name": "家居建材",
        "ishaveChild": true,
        "shopClassifyDtoList": [
        ]
      },
      {
        "id": 42,
        "name": "母婴童装",
        "ishaveChild": true,
        "shopClassifyDtoList": [
        ]
      },
      {
        "id": 43,
        "name": "玩具乐器",
        "ishaveChild": true,
        "shopClassifyDtoList": [
        ]
      },
      {
        "id": 44,
        "name": "进口美食",
        "ishaveChild": true,
        "shopClassifyDtoList": [
        ]
      },
      {
        "id": 45,
        "name": "时尚钟表",
        "ishaveChild": true,
        "shopClassifyDtoList": [
        ]
      }
    ],
    curNav: 0,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    var that = this;
    //that.classifyShow();
  },


  classifyShow: function (success) {
    var that = this;
    ajax.request({
      method: 'GET',
      url: 'classify/getShopClassifyList?key=' + utils.key,
      success: data => {
        that.setData({
          classifyItems: data.result
        })
        console.log(data.result)
      }
    })
  },

  backpage() {
    wx.navigateBack({
      delta: 1
    })
  }
  
})