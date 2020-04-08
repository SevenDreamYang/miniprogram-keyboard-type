# 键盘组件

![GitHub](https://img.shields.io/github/license/SevenDreamYang/SDY_keyboard)
![GitHub top language](https://img.shields.io/github/languages/top/SevenDreamYang/SDY_keyboard)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/SevenDreamYang/SDY_keyboard)

## 密码键盘

- 进程
  -  - [x] 样式
  -  - [x] 逻辑
  -  - [ ] 异步	

- 使用说明

  ```JSON
  "usingComponents": {
     "Passwordkeyboard": "/component/Passwordkeyboard/Passwordkeyboard"
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

- 需求参数
    | 参数        | 说明         | 类型    | 是否必传 | 备注       |
    | ----------- | ------------ | ------- | -------- | ---------- |
    | title       | 标题         | String  | 是       |            |
    | valueLength | 长度         | Number  | 否       | 默认为6    |
    | anonymous   | 是否密文     | Boolean | 否       | UI显示为 * |
    | isShow      | 显示         | Boolean | 是       |            |
    | zIndex      | z-index 层级 | Number  | 否       | 默认为50   |

- 事件

    |   事件    |    说明    |           参数           |
    | :-------: | :--------: | :----------------------: |
    | onConfirm | 取消时触发 |            -             |
    | onCancel  | 确认时触发 | ’value‘:值 ‘length‘:长度 |

## 车牌键盘(完善中)

- 说明
  
    - 请carKeyboard 与 carKeyInput 配合使用
    
- 参考资料
  - [中国车牌号规则](http://www.360doc.com/content/19/1018/10/48933397_867582489.shtml)
  
  - [中华人民共和国民用机动车号牌](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B0%91%E7%94%A8%E6%9C%BA%E5%8A%A8%E8%BD%A6%E5%8F%B7%E7%89%8C)
  
- 进程

    -  - [x] 样式
    -  - [x] 逻辑
    -  - [ ] 车牌正则

- 使用说明

  ```JSON
   "carKeyboard": "/component/carKeyboard/carKeyboard",
   "carKeyInput": "/component/carKeyInput/carKeyInput"
  ```

  ```HTML
  <carKeyInput  
      value="{{value}}" 
      bind:ChangeCard=""
  />
  <carKeyboard 
      bind:ListenValue=""  
      CarNumid="{{CarNumid}}"
  />
  ```

- 需求参数
  
    - `carKeyInput`
    
    | 参数        | 说明         | 类型    | 是否必传 | 备注       |
    | :---------: | :----------: | :-----: | :------: | :--------: |
    | value |渲染值|Array|是||
    
    - `carKeyboard`
    
    | 参数        | 说明         | 类型    | 是否必传 | 备注       |
    | :---------: | :----------: | :-----: | :------: | :--------: |
    | CarNumid |车牌类型下标|Number|是||
    
- 事件
  
    - `carKeyInput`
    
    |    事件    |         说明         |   参数   |
    | :--------: | :------------------: | :------: |
    | ChangeCard | 当车牌类型卡片改变时 | CarNumid |
    
    - `carKeyInput`
    
    |     事件      |    说明    |         参数          |
    | :-----------: | :--------: | :-------------------: |
    | *ListenValue* | 监听值变化 | ’value‘:值 ‘sub‘:长度 |

## 乱序英文键盘（废弃）

- 进程
    -  - [x] 样式
    -  - [x] 逻辑
    -  - [ ] 异步	


## 体验

![体验码](https://github.com/SevenDreamYang/miniprogram-keyboard-type/blob/master/asset/1.jpg)
