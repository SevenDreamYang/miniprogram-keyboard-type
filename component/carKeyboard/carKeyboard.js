// component/keyboard/keyboard.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  properties: {
    valueLength: {
      type: Number,
      value: 6
    },
    type: {
      type: String,
      value: ''
    }
  },
  observers: {
    '_valueString': function (_valueString) {
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
      }
    }
  },
  /**
   * 组件的初始数据
   */
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
    _valueString: [],
    _focusIdex: 0,
    firstNotKeyValue: false,
    SecondNotKeyValue: false,
    provinceKey: false,
    specialKey: false,
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
            _valueString
          })
          this.triggerEvent('ListenValue', {
            value: _valueString,
            sub: _valueString.length
          })
          break;
        case '殊':
          this.setData({
            isSpecial: !isSpecial
          })
          break;
        default:
          if (_valueString.length <= valueLength) {
            _valueString.push(key)
            this.setData({
              _valueString
            })
            this.triggerEvent('ListenValue', {
              value: _valueString,
              sub: _valueString.length
            })
          }
          break;
      }
    },

  }
})