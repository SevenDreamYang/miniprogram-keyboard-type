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
    key: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['↑','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm',]
    ]
  },
  _data: {
    key: [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['↑','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm', ]
    ],
     key2: [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ],
    keyShift: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
    keyShift2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onKey(e){
      var key = e.currentTarget.dataset.key;
      console.log(key)
      switch (key) {
        case '↑':
          this.AaBb()
          break;
        case 'shift':

          break;
        case 'Del':

          break;
      }
    },
    AaBb(){
        let keyArr = this.data.key;
        keyArr.forEach(item => {
          item.map(item2 => {
            var re = /^[a-zA-Z]+$/;
            if (re.test(item2)) {
              item2 = item2.toUpperCase()
              console.log(item2)
            }
          })
        });
        
      setTimeout(() => {
        console.log(keyArr)
          this.setData({
            key: keyArr
          })
      }, 12000);
    }
  }
})