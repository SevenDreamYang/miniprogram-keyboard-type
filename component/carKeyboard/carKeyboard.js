const CarNumberCommon = require('../../utils/CarNumberCommon');
import {
  ordinaryCarNum, newEnergyCarNum
} from '../../utils/ChineseCarNumberExp';
Component({
  options: {
    pureDataPattern: /^_/ 
  },
  behaviors: [CarNumberCommon],
  properties: {
    valueLength: {
      type: Number,
      value: 7
    },
    type: {
      type: String,
      value: ''
    },
    CarNumid:{
      type: Number,
      value: 0
    }
  },
  observers: {
    '_valueString': function (_valueString) {
      // console.log(_valueString)
      const length = _valueString.length;
      switch (length) {
        case 0:
          this.setData({
            firstNotKeyValue: true,
            isProvince: true
          })
          break;
        case 1:
          this.setData({
            firstNotKeyValue: false,
            isProvince: false,
            SecondNotKeyValue: true,
            provinceKey: true,
            specialKey: true
          })
          break;
        case 2:
          this.setData({
            SecondNotKeyValue: false
          })
          break;
        case 3:

          break;
        case 4:

          break;
        case 5:

          break;
        case 6:
          
          break;
        // case 7:
        case 8:
          var msg = newEnergyCarNum(_valueString.join(''),true)
          console.log(msg)
          break;
      }
      wx.nextTick(()=>{
         this.triggerEvent('ListenValue', {
          value: _valueString || [],
          sub: _valueString.length
        })
      })
     
    },
    'CarNumid': function (i) {
      const {
        typeObj
      } = this.data;
       this.setData({
         _valueString: [],
         valueLength: typeObj[i].lengths || 0
       })
    }
  },
  data: {
    firstRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    SecondRow: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ThirdRow: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z'],
    FourthRow: ['X', 'C', 'V', 'B', 'N', 'M'],
    FifthRow: ['港', '澳', '学', '警', '应急'],
    provinceFirstRow: ['京', '津', '冀', '晋', '蒙', '辽', '吉', '黑', '沪', '苏'],
    provinceSecondRow: ['浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '桂'],
    provinceThirdRow: ['琼', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '宁'],
    provinceFourthRow: ['新'],
    isProvince: true,
    isSpecial: false,
    firstNotKeyValue: false,
    SecondNotKeyValue: false,
    provinceKey: false,
    specialKey: false, 
    _valueString: [],
  },
  /**
   * 组件的方法列表
   */
  lifetimes: {
    attached: function () {
      this.setData({
        firstKeyValue: true,
        isProvince: true
      })
    },
    detached: function () {
      console.log('移除')
    },
  },
  methods: {
    onKey(e) {
      const key = e.currentTarget.dataset.key;
      console.log(key)
      const {
        isProvince,
        isSpecial,
        _valueString,
        valueLength
      } = this.data;
      switch (key) {
        case '省':
        case 'ABC':
          this.setData({
            isProvince: !isProvince
          })
          break;
        case 'Del':
          _valueString.pop();
          this.setData({
            _valueString,
            specialKey:true
          })
          break;
        case '殊':
          this.setData({
            isSpecial: !isSpecial
          })
          break;
        default:
          if (_valueString.length < valueLength) {
            _valueString.push(key)
            this.setData({
              _valueString,
              isSpecial: (key == '港' || key == '澳' || key == '学' || key == '警' || key == '应急') ? true : false
            })
          }
          break;
      }
    },
  }
})