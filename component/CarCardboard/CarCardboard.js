import {
  ordinaryCarNum,
  newEnergyCarNum,
  YellowCarNum,
  WhitecCarNum,
  BlackCarNum,
  JUDGE,
} from "../../utils/ChineseCarNumberExp";
const CarNumberCommon = require("../../utils/CarNumberCommon");
const AnimationFunction = require("../../utils/animation.js");
Component({
  options: {
    pureDataPattern: /^_/,
  },
  behaviors: [CarNumberCommon, AnimationFunction],
  properties: {
    valueLength: {
      type: Number,
      value: 7,
    },
    CarNumId: {
      type: Number,
      value: 0,
    },
    isShow: {
      type: Boolean,
      value: false,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: false,
    },
  },
  observers: {
    _valueString: function (_valueString) {
      const length = _valueString.length;
      wx.nextTick(() => {
        const { CarNumId, valueLength, _FNARRAY } = this.data;
        const IS_YWB = /^[034]{1}$/;
        this.setData({
          isProvince: length == 0 || (_valueString[0] == "WJ" && length == 1),
          SecondNotKeyValue: !(length >= 2),
          specialKey: !(IS_YWB.test(CarNumId) && length == valueLength - 1),
          provinceKey: !(length == 0),
          WJkey: !(CarNumId === 3 && length === 0),
          H_Ckey: !JUDGE.IS_HK_MC.test(_valueString.join("")),
          firstKeyValue: !(
            CarNumId === 3 && !JUDGE.IS_WJ.test(_valueString.join(""))
          ),
        });
        this.triggerEvent("ListenValue", {
          value: _valueString || [],
          sub: _valueString.length,
          exp: !(length == valueLength)
            ? {}
            : _FNARRAY[CarNumId](_valueString.join("")),
        });
      });
    },
    CarNumId: function (i) {
      const { typeObj } = this.data;
      this.setData({
        _valueString: [],
        valueLength: typeObj[i].lengths || 0,
      });
    },
    isShow: function (Show) {
      console.log(Show);
      const { _domInit } = this.data;
      if (_domInit) {
        wx.nextTick(() => {
          Show ? this.showKey() : this.closeKey();
        });
      }
    },
  },
  data: {
    firstRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    SecondRow: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ThirdRow: ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Z"],
    FourthRow: ["X", "C", "V", "B", "N", "M"],
    FifthRow: ["港", "澳", "学", "警", "应急"],
    provinceFirstRow: [
      "京",
      "津",
      "冀",
      "晋",
      "蒙",
      "辽",
      "吉",
      "黑",
      "沪",
      "苏",
    ],
    provinceSecondRow: [
      "浙",
      "皖",
      "闽",
      "赣",
      "鲁",
      "豫",
      "鄂",
      "湘",
      "粤",
      "桂",
    ],
    provinceThirdRow: [
      "琼",
      "渝",
      "川",
      "贵",
      "云",
      "藏",
      "陕",
      "甘",
      "青",
      "宁",
    ],
    provinceFourthRow: ["新", "台"],
    isProvince: true, // 省键盘
    isSpecial: false, // 打开特殊
    SecondNotKeyValue: false,
    provinceKey: false,
    specialKey: false,
    _valueString: [],
    H_Ckey: false,
    _domInit: false,
    _FNARRAY: [
      YellowCarNum,
      ordinaryCarNum,
      newEnergyCarNum,
      WhitecCarNum,
      BlackCarNum,
    ],
  },

  lifetimes: {
    attached: function () {
      this.setData({
        firstKeyValue: true,
        isProvince: true,
      });
    },
  },
  pageLifetimes: {
    show: function () {
      // 初始化动画
      this.initAnimation(".showBox");
      setTimeout(() => {
        this.setData({
          _domInit: true,
        });
      }, 300);
    },
  },
  methods: {
    onKey(e) {
      const key = e.currentTarget.dataset.key;
      // console.log(key)
      const { isProvince, isSpecial, _valueString, valueLength } = this.data;
      switch (key) {
        case "省":
        case "ABC":
          this.setData({
            isProvince: !isProvince,
          });
          break;
        case "Del":
          _valueString.pop();
          this.setData({
            _valueString,
            specialKey: true,
          });
          break;
        case "殊":
          this.setData({
            isSpecial: !isSpecial,
          });
          break;
        default:
          if (_valueString.length < valueLength) {
            _valueString.push(key);
            if (/([港澳学警使领|(应急)])/.test(key)) {
              this.setData({
                isSpecial: false,
              });
            }
            this.setData({
              _valueString,
            });
          }
          break;
      }
    },
    onConfirm() {
      this.triggerEvent("onConfirm", {});
    },
  },
});
