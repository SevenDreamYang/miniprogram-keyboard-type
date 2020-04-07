// pages/carKeyboard/carKeyboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:""
  },
  getValue(e){
    console.log(e.detail.value)
    this.setData({
      value: e.detail.value
    })
  }
})