// pages/carKeyboard/carKeyboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    valueStr:'',
    CarNumId: 0,
    show:false,
    msg:''
  },
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
      CarNumId: e.detail.CarNumId
    })
  },
  onClickBox(e){
    this.setData({
      show: !this.data.show
    })
  }
})