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
  externalClasses: ['right_key', 'btn-confirm'],
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
    },
    title:{
      type: String,
      value: ''
    },
    zIndex:{
      type: Number,
      value: 50000 
    },
    safeAreaInsetBottom:{
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
      Show ? this.showkey() : this.setData({
        valueString:[],
        _valueString:[]
      });
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
    errText: ''
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      this.initAnimation('.SevenDreamY_Numberboard');
    },
  },

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
          console.log(valueString.length, valueLength)
          if (valueString.length < valueLength) {
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
      this.showKey();
      this.setData({
        errText: ''
      })
    },
    cancel() {
      this.triggerEvent('onCancel', {})
    },
    confirm() {
      const {
        _valueString,
        valueLength
      } = this.data;
      if (_valueString.length !== valueLength) {
        this.setData({
           errText: '密码长度不足'
        })
        return false;
      }
      this.triggerEvent('onConfirm', {
        value:_valueString.join('')
      })
    }
  }
})