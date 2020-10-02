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
    showCard:{
      type:Boolean,
      value:true
    }
  },
  observers: {
    'value': function (value) {
      const newValue = Array.from(value)
      const {
        CarNumId
      } = this.data;
      CarNumId == 3 ? newValue.splice(2, 0, ' '):newValue.splice(2, 0, '·')
      this.setData({
        focusIdex: value.length,
        valueStr: value.length > 2 ?  newValue.join('') : value.join('')
      })
    },
  },
  data: {
    value: [],
    error: '',
    focusIdex: 0,
    CarNumId: 0,
    valueLength: 7,
    valueStr: ''
  },
  methods: {
    swiperChange(e) {
      const {
        typeObj
      } = this.data;
      const current = e.detail.current;
      this.setData({
        CarNumId: current,
        valueLength: typeObj[current].lengths
      })
      this.triggerEvent('onChangeCard', {
        CarNumId: current
      })
    },
    onClickType(e) {
      const current = e.currentTarget.dataset.idex
      this.setData({
        CarNumId: current,
      })
      this.triggerEvent('onChangeCard', {
        CarNumId: current
      })
    },
    onClickBox(e) {
      this.triggerEvent('onClickBox')
    }
  }
})