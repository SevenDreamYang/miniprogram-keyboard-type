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
    valueLength: {
      type: Number,
      value: 6
    },
    // error:{
    //   type: String,
    //   value: ''
    // },
  },
  observers: {
    'valueString': function (valueString) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        focusIdex: valueString.length
      })
    },
  },
  data: {
    valueString: [],
  },
  methods: {
   
  }
})