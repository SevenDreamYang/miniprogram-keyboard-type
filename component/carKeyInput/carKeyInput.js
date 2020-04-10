const CarNumberCommon = require('../../utils/CarNumberCommon');
Component({
  /**
   * 组件的属性列表
   */
  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  behaviors: [CarNumberCommon],
  properties: {
    value: {
      type: Array,
      value: 6
    },
  },
  observers: {
    'value': function (value) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        focusIdex: value.length
      })
    },
    'CarNumid': function (CarNumid) {
        const {
          typeObj
        } = this.data;
        this.setData({
          valueLength: typeObj[CarNumid].lengths
        })
       this.triggerEvent('ChangeCard', {
          CarNumid: CarNumid
       })
    }
  },
  data: {
    value: [],
    error: '',
    focusIdex: 0,
    CarNumid: 0,
    valueLength:7
  },
  methods: {
    swiperChange(e){
      const current =  e.detail.current;
      this.setData({
        CarNumid: current,
      })
    },
    onClickType(e){
      const current = e.currentTarget.dataset.idex
      this.setData({
        CarNumid: current,
      })
    }
  }
})