Page({
  data: {
    sort1color: "red",
    sort2color: "black",
    page1:"block",
    page2:'none',
    sore: 1,
    res: [
      {
        img: "https://img.alicdn.com/imgextra/i1/2099020602/O1CN01cfcf951GJkuaxoztU_!!2099020602.jpg",
        title: "全新Kindle Paperwhite4 亚马逊电子书阅读器 纯平电子墨水屏 电纸书 开学季文具",
        prize: "998",
        sales: "183",
        id:1
      },
      {
        img: "https://gd3.alicdn.com/imgextra/i2/2430629269/TB2eKsOj9CWBuNjy0FhXXb6EVXa_!!2430629269.jpg_400x400.jpg",
        title: "Apple/苹果 iPad air3 2017新款ipad 平板电脑 新ipad air2升级版",
        prize: "2400",
        sales: "11",
        id:2
      },
      {
        img: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/1085315961/O1CN0142ooqq1tuBQLPm8cB_!!1085315961.jpg_430x430q90.jpg",
        title: "雷蛇 曼巴眼镜蛇 RGB幻彩 5G有线/无线鼠标",
        prize: "799",
        sales: "3",
        id:3
      },
      {
        img: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2398662401/O1CN01cWxAoV1TbhSXjulEV_!!2398662401.jpg_430x430q90.jpg",
        title: "拜尔电动牙刷成人充电式声波超自动软毛防水美白情侣套装男女智能",
        prize: "188",
        sales: "271141",
        id:4
      }
    ],
    store: [
      {
        img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4//00/44/TB17ZcvPXXXXXX3XVXXSutbFXXX.jpg_70x70.jpg_.webp',
        name: '小槑同学文具店',
        num: 300,
        imgUrl: [
          "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/3043575644/O1CN016GSeFL1rYztYMegKI_!!0-item_pic.jpg_160x160.jpg_.webp",
          "https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/3043575644/O1CN01rAAxHc1rYztTsGmhz_!!0-item_pic.jpg_160x160.jpg_.webp",
          "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/3043575644/O1CN013znFMd1rYztY9LbBu_!!0-item_pic.jpg_160x160.jpg_.webp",
          "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/3043575644/O1CN013znFMd1rYztY9LbBu_!!0-item_pic.jpg_160x160.jpg_.webp",
          "https://gd1.alicdn.com/imgextra/i3/0/O1CN01u1Wm5m1rYztY9NTYO_!!0-item_pic.jpg_400x400.jpg",
          "https://gd4.alicdn.com/imgextra/i2/0/O1CN014MbWEt1rYztUaQBzs_!!0-item_pic.jpg_400x400.jpg"
        ]
      },
      {
        img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4//b9/b6/TB1TIfqGFXXXXXLXFXXSutbFXXX.jpg_70x70.jpg_.webp',
        name: '当当网',
        num: 300,
        imgUrl: [
    "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/1049653664/O1CN01CLhb8h1cw9f8AEixj_!!0-item_pic.jpg_160x160.jpg_.webp",
          "https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1049653664/O1CN013XUMUb1cw9f30dX5P_!!0-item_pic.jpg_160x160.jpg_.webp",
          "https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/1049653664/TB1WEn5elfH8KJjy1XbXXbLdXXa_!!0-item_pic.jpg_160x160.jpg_.webp",
          "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/1049653664/TB1IBMIev9TBuNjy0FcXXbeiFXa_!!0-item_pic.jpg_160x160.jpg_.webp",
          "https://img.alicdn.com/imgextra/i3/1049653664/O1CN01x8RxLN1cw9gR94yGm_!!0-item_pic.jpg_430x430q90.jpg",
          "https://img.alicdn.com/imgextra/i1/1049653664/O1CN011cw9eU4I0aUy91V_!!2-item_pic.png_430x430q90.jpg"
        ]
      }
    ]
  },
  backpage() {
    wx.navigateBack({
      delta: 1
    })
  },
  choosesort(){
    this.setData({
      sort1color:"red",
      sort2color:"black",
      page1:"block",
      page2:"none"
    })
  },
  choosesort1() {
    this.setData({
      sort1color: "black",
      sort2color: "red",
      page1: "none",
      page2: "block"
    })
  },
  goodspage:function(res){
    console.log(res.target.id)
    wx.navigateTo({
      url: '../goods/goods?Id='+res.target.id,
    })
  }
});