// pages/carKeyboard/carKeyboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    valueStr:'',
    CarNumid: 0,
    show:false,
    msg:''
  },
  getValue(e){
    const value = e.detail.value;
    this.setData({
      value: value,
      valueStr: value.join('').toString(),
      msg: e.detail.exp.msg || ''
    })
  },
  onChangeCard(e) {
    this.setData({
      CarNumid: e.detail.CarNumid
    })
  },
  onClickBox(e){
    this.setData({
      show: !this.data.show
    })
  }
})