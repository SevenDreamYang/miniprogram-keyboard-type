Component({
  options: {
    pureDataPattern: /^_/, // 指定所有 _ 开头的数据字段为纯数据字段
    addGlobalClass: true
  },
  behaviors: ['wx://form-field'],
  externalClasses: ['typeinput'],
  properties: {
    value: {
      type: String,
      value: 6
    },
    height:{
      type:Number,
      value:40
    },
    lineColor:{
      type:String,
      value:"#999"
    },
    placeholder:{
      type:String,
      value:''
    },
    isBlur:{
      type:Boolean,
      value:true
    }
  },
  data: {
    value: '',
  },
  methods: {
    onfocus(){
      this.triggerEvent('onfocus')
    }
  }
})