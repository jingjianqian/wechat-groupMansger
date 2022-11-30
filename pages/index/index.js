// index.js
Page({
  data:{

  },
  onLoad: function(options){

  },
  getGroupNameAndGid: function(){
    wx.getShareInfo({
      shareTicket: app.globalData.shareTicket,
      success:(res)=>{
        console.log('===', res);
      }
    })
  }
})
