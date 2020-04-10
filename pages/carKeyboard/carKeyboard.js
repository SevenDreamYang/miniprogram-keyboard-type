// pages/carKeyboard/carKeyboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    valueStr:'',
    CarNumid: 0
  },
  getValue(e){
    const value = e.detail.value;
    this.setData({
      value: value,
      valueStr: value.join('').toString()
    })
  },
  ChangeCard(e){
    this.setData({
      CarNumid: e.detail.CarNumid
    })
  }
})