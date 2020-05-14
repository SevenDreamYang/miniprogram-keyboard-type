import {
  windowHeight
} from '../../utils/util';
const AnimationFunction = require('../../utils/animation.js');
Component({
  options: {
    pureDataPattern: /^_/
  },
  behaviors: [AnimationFunction],
  properties: {
    isShow: {
      type: Boolean,
      value: false
    },
    isBlur:{
      type:Boolean,
      value:true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: false
    }
  },
  observers: {
    '_valueString': function (_valueString) {
      const length = _valueString.length;
      wx.nextTick(() => {
        this.setData({
          isProvince: (length == 0),
          SecondNotKeyValue: !(length >= 2) ,
          specialKey: !(/^(粤Z)/.test(_valueString.join(''))),
          provinceKey: !(length == 0),
        })
        this.triggerEvent('ListenValue', {
          value: _valueString.join('')||'',
        })
      })
    },
    'isShow': function (Show) {
      const {_domInit,isBlur,_openBoard} = this.data;
      if(_domInit){
        wx.nextTick(() => {
          if(Show && !isBlur && !_openBoard ){
            this.showKey()
            this.setData({
              _openBoard:true
            })
          }else if(!Show && isBlur && _openBoard){
            this.closeKey()
            this.setData({
              _openBoard:false
            })
          }
        });
      }
    }
  },
  data: {
    windowHeight:windowHeight,
    _valueLength:8,
    firstRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    SecondRow: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ThirdRow: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z'],
    FourthRow: ['X', 'C', 'V', 'B', 'N', 'M'],
    FifthRow: ['港', '澳', '学', '警', '应急'],
    provinceFirstRow: ['京', '津', '冀', '晋', '蒙', '辽', '吉', '黑', '沪', '苏'],
    provinceSecondRow: ['浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '桂'],
    provinceThirdRow: ['琼', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '宁'],
    provinceFourthRow: ['新','台'],
    isProvince: true, // 省键盘数字切换
    SecondNotKeyValue: false,
    provinceKey: false,
    specialKey: false,
    _valueString: [],
    _domInit:false,
    _openBoard:false
  },
  pageLifetimes: {
    show: function () {
      // 初始化动画
      this.initAnimation('.showBox');
      setTimeout(()=>{
        this.setData({
          _domInit:true
        })
      },300)
    },
  },
  methods: {
    onKey(e) {
      const key = e.currentTarget.dataset.key;
      const {
        _valueString,
        _valueLength
      } = this.data;
      switch (key) {
        case 'Del':
          _valueString.pop();
          this.setData({
            _valueString,
            specialKey: true
          })
          break;
        default:
          if (_valueString.length < _valueLength) {
            _valueString.push(key)
            this.setData({
              _valueString
            })
          }
          break;
      }
    },
    onConfirm(){
       this.triggerEvent('onConfirm', {})
    }
  }
})