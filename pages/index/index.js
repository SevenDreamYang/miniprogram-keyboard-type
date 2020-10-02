//index.js
const app = getApp()

Page({
  onload(){
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline'],
      success(res) {
        console.log(res)
      },
      fail(e) {
        console.log(e)
      }
    })
  },
  onShareAppMessage(){
    
  },
  onShareTimeline(){
    
  },
  btnGo(e) {
    const key = e.currentTarget.dataset.page
    wx.navigateTo({
      url: `/pages/${key}/${key}`
    })
  }
})
