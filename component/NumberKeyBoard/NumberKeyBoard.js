// component/keyboard/keyboard.js
import {
  windowHeight
} from '../../utils/util';
var AnimationFunction = require('../../utils/animation.js');
Component({
  /**
   * 组件的属性列表
   */
  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  behaviors: [AnimationFunction],
  properties: {
    valueLength: {
      type: Number,
      value: 6
    },
    anonymous: {
      type: Boolean,
      value: false
    },
    isShow:{
      type: Boolean,
      value: false
    }
  },
  observers: {
    'valueString': function (valueString) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        focusIdex: valueString.length
      })
    },
    'isShow': function (Show) { 
      Show ? this.showkey() : false;
    }
  },
  data: {
    firstRow: [1, 2, 3],
    SecondRow: [4, 5, 6],
    ThirdRow: [7, 8, 9],
    FourthRow: [0],
    windowHeight: windowHeight,
    valueString: [],
    _valueString: [],
    focusIdex: 0,
  },
  lifetimes: {
    attached: function () {

    },
    detached: function () {
      console.log('移除')
    },
  },
  pageLifetimes: {
    show: function () { 
      console.log('show')
    },
    hide: function () {
      console.log('hide')
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onKey(e) {
      let key = e.target.dataset.key;
      var {
        valueString,
        valueLength,
        _valueString,
        anonymous
      } = this.data;
      switch (key) {
        case 'Del':
          valueString.pop();
          _valueString.pop();
          this.setData({
            valueString,
            _valueString
          })
          break;
        default:
          if (valueString.length <= valueLength) {
            valueString.push(!anonymous ? key : '*')
            _valueString.push(key)
            this.setData({
              valueString,
              _valueString
            })
          }
          break;
      }
    },
    cleanKey(e){
      this.setData({
        valueString:[],
        _valueString:[]
      })
    },
    showkey(){
      this.initAnimation('.SevenDreamY_Numberboard');
      this.showKey();
    },
    cancel() {
      this.triggerEvent('onCancel', {})
    },
    confirm() {
      this.triggerEvent('onConfirm', {
        value: this.data._valueString.join('')
      })
    }
  }
})