//index.js
const app = getApp()

Page({
  data: {
    valueLength: 6,
    valueString:[],
    sub:0
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
  }
})
