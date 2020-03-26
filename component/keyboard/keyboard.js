// component/keyboard/keyboard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    firstRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    SecondRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ThirdRow: ['↑', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    FourthRow: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ],
    SymbolShift: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
    NumberShift: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    CapsLock: false,
    isShift: false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onKey(e) {
      var key = e.currentTarget.dataset.key;
      console.log(key)
      let {
        SecondRow,
        ThirdRow,
        FourthRow,
        SymbolShift,
        NumberShift,
        CapsLock,
        isShift
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
      }
    },
  }
})