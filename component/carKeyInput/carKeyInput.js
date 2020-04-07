// component/carKeyInput/carKeyInput.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  behaviors: [],
  properties: {
    value: {
      type: Array,
      value: 6
    },
  },
  observers: {
    'value': function (valueString) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        focusIdex: valueString.length
      })
    },
  },
  data: {
    value: [],
    typeObj: [{
      type: '黄牌',
      lengths: 7
    }, {
      type: '蓝牌',
      lengths: 7
    }, {
      type: '新能源',
      lengths: 8
    }, {
      type: '白牌',
      lengths: 7
    }, {
      type: '黑牌',
      lengths: 7
    }],
    error: '',
    focusIdex: 0
  },
  methods: {
      
  }
})