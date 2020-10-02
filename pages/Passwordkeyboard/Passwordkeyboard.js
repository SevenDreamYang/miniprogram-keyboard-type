// pages/NumberKeyBoard/NumberKeyBoard.js
Page({
  data: {
    isShow:false,
    anonymous:false
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
  openkey(){
    const isShow = this.data.isShow
    this.setData({
      isShow: !isShow
    })
  },
  onConfirm(e){
    const value = JSON.stringify(e.detail)
    const isShow = this.data.isShow
    wx.showModal({
      title: '值',
      content: value,
      showCancel:false,
      success:(res)=> {
        if (res.confirm) {
          this.setData({
            isShow: !isShow
          })
        }
      }
    })
  },
  switch1Change(e){
    this.setData({
      anonymous: e.detail.value
    })
  }
})