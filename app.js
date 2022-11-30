// app.js
App({
  onLaunch: function () {
    //全局设置分享到群的参数  也可以在你分享页设置
    wx.showShareMenu({
      withShareTicket: false,
      success: (res) => {
        console.log("启动成功")
      },
      fail: () => {
        console.log('启动')
      }
    });
  },
  globaData:{
    shareTicket: ''
  },
  onShow: function(options){
    this.globaData.shareTicket = options.shareTicket;
  }
})