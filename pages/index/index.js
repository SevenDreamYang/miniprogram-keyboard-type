//index.js
const app = getApp()

Page({
  data: {
    valueLength: 6,
    valueString:[],
    sub:0,
    isTrue:false
  },
  getValue(e){
    const {
      sub, value
    } = e.detail;
    console.log(e)
    this.setData({
      valueString:value,
      sub: sub
    })
  },
  showbtn(){
    this.setData({
      isTrue:!this.data.isTrue
    })
  }
})
