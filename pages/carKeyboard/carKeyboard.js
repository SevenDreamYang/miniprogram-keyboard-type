// pages/carKeyboard/carKeyboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    CarNumid: 0
  },
  getValue(e){

    this.setData({
      value: e.detail.value 
    })
  },
  ChangeCard(e){
    this.setData({
      CarNumid: e.detail.CarNumid
    })
  }
})