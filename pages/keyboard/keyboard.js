// pages/keyboard/keyboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    value:'',
    isblur:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onblur(e){
    this.setData({
      show:false,
      isblur:true,
    })
  },
  onfocus(e){
    this.setData({
      show:true,
      isblur:false,
    })
  },
  onbutton(e){
    console.log()
    wx.showToast({
      title: JSON.stringify(e.detail.value),
      icon: 'none',
      duration: 3000
    })
  },
  onClickBox(){
    this.setData({
      show:false,
      isblur:true
    })
  },
  getValue(e){
    this.setData({
      value:e.detail.value
    })
  }
})