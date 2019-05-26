Page({
  data: {
    commentlist:[
      {
        time: '2019-03-13',
        nickname: "Rhm-B WT",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/1wibHNInZ2sQGZHLialfrd6WiaVYnib1yRwz5dyBHd1ZqjdaDP1jicEY7wm97Yqsq1uqRqZ6dQ9Ewh7mVvKK8fRB7AA/132",
        contentimg: [
          "https://img.alicdn.com/bao/uploaded/i3/O1CN01zezpEE28y323QNJF7_!!0-rate.jpg_400x400.jpg",
          "https://img.alicdn.com/bao/uploaded/i3/O1CN014mLEta28y324GtHHs_!!0-rate.jpg_400x400.jpg",
          "https://img.alicdn.com/bao/uploaded/i3/O1CN01HFjKJm28y324P6UA5_!!0-rate.jpg_400x400.jpg"
        ],
        content: "good,very nice.",
      },
      {
        time: '2019-03-13',
        nickname: "Tuuffy",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/TTPicMEZ5s1xSphoQMTtn7icxianRSMX7MpKWYibMnqNvusJ0aUTDH9II3JB0W6Rj7VyWNiau204q70JVgWXcibl7QoQ/132",
        contentimg: [
          "https://img.alicdn.com/bao/uploaded/i4/O1CN01DPbNd01lLMPe7dQJB_!!0-rate.jpg_400x400.jpg",
          "https://img.alicdn.com/bao/uploaded/i2/O1CN01joLU9c1lLMPf8s0v7_!!0-rate.jpg_400x400.jpg",
          "https://img.alicdn.com/bao/uploaded/i2/O1CN01AQl6F51lLMPhPwZsN_!!0-rate.jpg_400x400.jpg"
        ],
        content: "嗯嗯，还行，蛮不错的",
      }
    ]
  },
  backpage() {
    console.log(111)
    wx.navigateBack({
      url: "../main/main"
    })
  },
})