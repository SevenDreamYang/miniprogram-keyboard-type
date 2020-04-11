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
      const newValue = Array.from(value)
      newValue.splice(2, 0, '·')
      this.setData({
        focusIdex: value.length,
        valueStr: value.length > 2 ? newValue.join('') : value.join('')
      })
    },
    'CarNumid': function (CarNumid) {
      const {
        typeObj
      } = this.data;
      this.setData({
        valueLength: typeObj[CarNumid].lengths
      })
      this.triggerEvent('onChangeCard', {
        CarNumid: CarNumid
      })
    }
  },
  data: {
    value: [],
    error: '',
    focusIdex: 0,
    CarNumid: 0,
    valueLength: 7,
    valueStr: ''
  },
  methods: {
    swiperChange(e) {
      const current = e.detail.current;
      this.setData({
        CarNumid: current,
      })
    },
    onClickType(e) {
      const current = e.currentTarget.dataset.idex
      this.setData({
        CarNumid: current,
      })
    },
    onClickBox(e) {
      this.triggerEvent('onClickBox', {})
    }
  }
})