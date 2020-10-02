# 小程序键盘组件

![GitHub](https://img.shields.io/github/license/SevenDreamYang/SDY_keyboard) ![GitHub top language](https://img.shields.io/github/languages/top/SevenDreamYang/SDY_keyboard)  ![npm](https://img.shields.io/npm/dt/miniprogram-keyboard-type)

## 说明

- 当前版本

  **v1.2.0**

- npm 下载

  ```
  npm i miniprogram-keyboard-type -S
  ```

- `* 为新增功能`

- 组件分别为 `弹窗式密码键盘` `车牌式车牌键盘`  `* 输入框车牌键盘`

- * 适配 `DarkMode`   [相关链接](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html)

- 使用说明

  ```JSON
  "usingComponents": {
     "Passwordkeyboard": "/您的路径/Passwordkeyboard/index"
  }	
  ```

  ```html
  <Passwordkeyboard 
      valueLength="{{6}}" 
      title="密码键盘" 
      anonymous 
      isShow="{{isShow}}" 
      bind:onConfirm=""
      bind:onCancel=""
  />
  ```

- 可修改样式(wxss)

  |    class类    |     备注     |
  | :-----------: | :----------: |
  |  `right_key`  | `删除键样式` |
  | `btn-confirm` | `弹窗确认键` |

- 需求参数

  | 参数                     | 说明           | 类型      | 是否必传 | 备注         |
  | ------------------------ | -------------- | --------- | -------- | ------------ |
  | `title`                  | `标题`         | `String`  | `是`     |              |
  | `valueLength`            | `长度`         | `Number`  | `否`     | `默认为6`    |
  | `anonymous`              | `是否密文`     | `Boolean` | `否`     | `UI显示为 *` |
  | `isShow`                 | `显示`         | `Boolean` | `是`     |              |
  | `zIndex`                 | `z-index 层级` | `Number`  | `否`     | `默认为50`   |
  | `safe-area-inset-bottom` | `ios安全底部`  | `Boolean` | `否`     |              |

  

- 事件

  |    事件     |     说明     |         参数         |
  | :---------: | :----------: | :------------------: |
  | `onCancel`  | `取消时触发` |          -           |
  | `onConfirm` | `确认时触发` | `{'value':'123456'}` |

##  输入框车牌键盘

- 说明

  - 请`CarTypeInput` 与 `CarInputboard` 配合使用。
  - `CarTypeInput`  可以在 `from` 中使用 
  - 与 `carKeyboard`与 `CarInputboard` 的不同
    - 除样式相同外,删除了一些在使用`TypeInput`  不必要的参数和方法
    - `CarInputboard`  不包含正则
  - 为了更好的体验需要您帮助组件做个一个模拟失去焦点的功能
    - 需要一个顶级`view`绑定一个点击事件在页面中
    - `CarInputboard` 将它放在顶级`view`外

- 使用说明

  ```JSON
  "CarTypeInput": "/component/CarTypeInput/index",
  "CarInputboard":"/component/CarInputboard/index"
  ```

  ```html
  <CarTypeInput 
      bind:onfocus="onfocus"
      placeholder=""
      name="carNum" 
      value="{{value}}"
      isBlur="{{isblur}}"
   />
  <CarInputboard
      isBlur="{{isblur}}"
      bind:ListenValue="getValue"  
      bind:onConfirm="onConfirm"
      isShow="{{show}}"
  />
  <!-- 需要您做的模拟失去焦点 -->
    <view bindtap="blur">
          <view></view>
          <view></view>
          <TypeInput 
            bind:onfocus="onfocus"
            placeholder=""
            name="carNum" 
            value="{{value}}"
            isBlur="{{isblur}}"
         />
        <view></view>
        <view></view>
    </view>
    <CarInputboard
        isBlur="{{isblur}}"
        bind:ListenValue="getValue"  
        bind:onConfirm="onClickBox"
        isShow="{{show}}"
    />
  ```

  ```js
  Page({
    data: {
      show:false,
      value:'',
      isblur:true,
    },
    //失去焦点时
    blur(e){
      this.setData({
        show:false,
        isblur:true,
      })
    },
  //TypeInput 获取焦点(点击)触发
    onfocus(e){
      this.setData({
        show:true,
        isblur:false,
      })
    },
    //点击键盘完成时触发
    onConfirm(){
      this.setData({
        show:false,
        isblur:true
      })
    },
    getValue(e){
      this.setData({
        value:e.detail.value
      })
    }
  })
  ```

- 可修改样式(wxss)

  - `TypeInput` 

    |   class类   |     备注     |
    | :---------: | :----------: |
    | `typeinput` | `输入框样式` |

- 需求参数

  - `TypeInput`  

    |     参数      |         说明         |   类型   | 是否必传 |       备注        |
    | :-----------: | :------------------: | :------: | :------: | :---------------: |
    |    `value`    |         `值`         | `String` |    是    |                   |
    |   `height`    |      `input高`       | `Number` |    否    |    `默认60px`     |
    | `placeholder` | `输入框为空时占位符` |  String  |    否    |                   |
    |   `isBlur`    |    `是否失去聚焦`    | Boolean  |    是    |                   |
    |  `lineColor`  |      `光标颜色`      |  16进制  |    否    |    `默认#333`     |
    |    `name`     |       `key值`        |  String  |    否    | `from` 内使用必传 |

    - `height` 影响光标高度
    - `name` 在`from` 内使用必传
    - `isBlur` true为失去焦点

  - `CarInputboard` 

    |         参数          |     说明      | 类型   | 是否必传 | 备注 |
    | :-------------------: | :-----------: | ------ | -------- | ---- |
    |       `isShow`        | 是否显示键盘  | String | 是       | 必传 |
    |       `isBlur`        | 是否失去聚焦  | Number | 是       | 必传 |
    | `safeAreaInsetBottom` | `ios安全底部` | String | 否       |      |

    - `isBlur` true为失去焦点

- 事件

  - `TypeInput`  

    |   事件    |     说明     | 参数 |
    | :-------: | :----------: | :--: |
    | `onfocus` | `获取焦点时` |  -   |

  - `CarInputboard` 

    |     事件      |       说明       |                 参数                 |
    | :-----------: | :--------------: | :----------------------------------: |
    | `ListenValue` |   `监听值变化`   | `’value‘:值,‘sub‘:长度,exp:正则信息` |
    |  `onConfirm`  | `点击完成时触发` |                  -                   |

## 车牌式车牌键盘

- 说明

  - 请`carKeyboard` 与 `carKeyInput` 配合使用
  - 注意事项
    - 在需需要您使用`CarCardInput` 的 `onChangeCard` 获取的 `CarNumid` 传递给`CarCardboard` 组件

- 参考资料

  - [中国车牌号规则](http://www.360doc.com/content/19/1018/10/48933397_867582489.shtml)

  - [中华人民共和国民用机动车号牌](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B0%91%E7%94%A8%E6%9C%BA%E5%8A%A8%E8%BD%A6%E5%8F%B7%E7%89%8C)

- 使用说明

  ```JSON
  "CarCardInput": "/您的路径/CarCardInput/index"
  "CarCardboard": "/您的路径/carKeyInput/index"
  ```

  ```HTML
  <CarCardInput  
      value="{{value}}" 
      bind:onChangeCard="onChangeCard"
      bind:onClickBox="onClickBox"
  />
  <CarCardboard 
      bind:ListenValue="getValue"  
      bind:onConfirm="onClickBox"
      CarNumid="{{CarNumid}}"
      isShow="{{show}}"
  />
  ```

  ```js
  Page({
    data: {
      value:"",
      valueStr:'',
      CarNumId: 0,
      show:false
    },
    getValue(e){
      const value = e.detail.value;
      this.setData({
        value: value, // 值为数组
        valueStr: value.join('').toString(), // 获得的车牌字符串
        msg: e.detail.exp.msg || '' // 正则返回信息
      })
    },
    // 当车牌类型卡片改变时触发
    onChangeCard(e) {
      this.setData({
        CarNumId: e.detail.CarNumId
      })
    },
    // 点击完成或点击输入框时触发(键盘展示关闭)
    onClickBox(e){
      const {show} = this.data; 
      this.setData({
        show:!show
      })
    }
  })
  ```

- 需求参数

  - `CarCardInput`

    |    参数    |       说明       |   类型    | 是否必传 | 备注 |
    | :--------: | :--------------: | :-------: | :------: | :--: |
    |  `value`   |     `渲染值`     |  `Array`  |   `是`   |      |
    | `showCard` | `是否显示切换卡` | `Boolean` |   `否`   |      |

  - `CarCardboard`

    |           参数           |      说明      |   类型    | 是否必传 | 备注 |
    | :----------------------: | :------------: | :-------: | :------: | :--: |
    |        `CarNumid`        | `车牌类型下标` | `Number`  |   `是`   |      |
    | `safe-area-inset-bottom` | `ios安全底部`  | `Boolean` |   `否`   |      |
  
- 事件

  - `carKeyInput`

    |     事件     |          说明          |    参数    |
    | :----------: | :--------------------: | :--------: |
    | `ChangeCard` | `当车牌类型卡片改变时` | `CarNumid` |
    | `onClickBox` |      `点击时触发`      |     -      |
  
  - `carKeyInput`
  
    |     事件      |       说明       |                 参数                 |
    | :-----------: | :--------------: | :----------------------------------: |
    | `ListenValue` |   `监听值变化`   | `’value‘:值,‘sub‘:长度,exp:正则信息` |
    |  `onConfirm`  | `点击完成时触发` |                  -                   |

## 乱序英文键盘（移除）

> 项目中留存，npm包中不包含英文乱序键盘

## 体验&作者微信

![体验码](https://gitee.com/SevenDreamYang/miniprogram-keyboard-type/raw/master/asset/1.jpg) ![微信](https://gitee.com/SevenDreamYang/miniprogram-keyboard-type/raw/master/asset/2.png)

## git版本更新

`v1.2.202001002`

- 新增功能
  - `CarCardInput` 新增是否显示切换卡 
  - 适配 DarkMode
- 更新名称
  - `TypeInput(叫TypeInput可能打包不进去？)` ->`CarTypeInput`

`v1.1.20200515`

- 更新名称
  - `CarCardboard->carKeyboard`
  - `CarCardInput->carKeyInput`
- 新增组件
  - `TypeInput` 和 `CarInputboard`
- 修复
  - 修复了`CarCardboard`组件在页面进入如时闪的问题
- 其他
  - 删除了一些不该有的打印日志和不必要参数
  - 作者微信

`v1.1.20200411`

- `carKeyboard`
  - 添加正则(实装)
  - 键盘动画效果
  - 车牌渲染效果

`v1.1.20200410`

- `Passwordkeyboard`
  - 1.修复密码键盘还能多输1位的问题
  - 2.密码键盘`ios`安全底部
  - 3.输入位数提示

- `carKeyboard`
  - 添加正则(未实装)
