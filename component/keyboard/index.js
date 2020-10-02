// component/keyboard/keyboard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isDisorder: {
      type: Boolean,
      value: false
    },
    isShow:{
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    firstRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    SecondRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ThirdRow: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    FourthRow: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ],
    SymbolShift: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
    NumberShift: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    CapsLock: false,
    isShift: false
  },
  lifetimes: {
    attached: function () {
      if (this.data.isDisorder) {
          this.disorder();
      }
      console.log(this.data.windowHeight)
    },
    detached: function () {
      console.log('移除')
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onKey(e) {
      var key = e.currentTarget.dataset.key;
      console.log(key)
      const {
        SecondRow,
        ThirdRow,
        FourthRow,
        SymbolShift,
        NumberShift,
        CapsLock,
        isShift,
        isDisorder
      } = this.data;
      switch (key) {
        case '↑':
          this.setData({
            CapsLock: !CapsLock,
            SecondRow: SecondRow.map(item => !CapsLock ? item.toUpperCase() : item.toLowerCase()),
            ThirdRow: ThirdRow.map(item => !CapsLock ? item.toUpperCase() : item.toLowerCase()),
            FourthRow: FourthRow.map(item => !CapsLock ? item.toUpperCase() : item.toLowerCase())
          })
          break;
        case 'shift':
          this.setData({
            isShift: !isShift,
            firstRow: !isShift ? SymbolShift : NumberShift
          })
          break;
        case 'Del':
          console.log('Del')
          break;
        default:
          if (isDisorder) {
            this.disorder();
          }
          wx.showToast({
            title: `键${key}`,
            icon: 'none',
            duration: 500
          })
        break;
    }
    },
    disorder() {
      const {
        FourthRow, ThirdRow, SecondRow
      } = this.data;
      let arr = [...FourthRow, ...ThirdRow,...SecondRow];
      var newArr = [];
      for (var i = 0, len = arr.length; i < len; i++) {
        var j = Math.floor(Math.random() * (len - i));
        newArr[i] = arr[j];
        arr.splice(j, 1)
      }
      var arrStr = newArr.join('');
      this.setData({
        SecondRow: arrStr.slice(0, 10).split(''),
        ThirdRow: arrStr.slice(10, 19).split(''),
        FourthRow: arrStr.slice(19, 26).split('')
      })
    }
  }
})