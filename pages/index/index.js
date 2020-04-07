//index.js
const app = getApp()

Page({
  btnGo(e) {
    const key = e.currentTarget.dataset.page
    wx.navigateTo({
      url: `/pages/${key}/${key}`
    })
  }
})
