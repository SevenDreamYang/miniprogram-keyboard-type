/*!
 * ChineseCarNumberExp.js
 * SevenDreamYang - v1.0.0 (Thu Apr 10 2020 15:16:50 GMT+0800)
 * https: //github.com/SevenDreamYang | Released under MIT license
 */

//车牌正则
const CARNUMBER_REGEXP = {
    COMMON: /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/,
    ORDINARY: /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-HJ-NP-Y]{1}[A-HJ-NP-Y0-9]{5})$/,
    Y_COMMON: /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学]{1})/,
    STRICT_NEWERGY_THIRD: /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-HJ-NP-Y]{1}[DF]{1}[A-HJ-NP-Z1-9]{1}[\d]{4})$/,
    STRICT_NEWERGY_EIGHTH: /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-HJ-NP-Y]{1}[\d]{5}[DF]{1}$/,
    NOT_STRICT_NEWERGY: /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-HJ-NP-Y]{1}[1-9DF]{1}[A-HJ-NP-Z1-9]{1}[\d]{3}[1-9DF]{1})$/,
    HK_MC: /^(粤Z)[A-HJ-NP-Y0-9]{4}[港澳]{1}$/, //港澳车牌
    PLA: /^([QVKHBSLJNGCEZ]{1}[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-HJ-NP-Y0-9]{5})$/,
    P_M: /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-HJ-NP-Y]{1}[A-HJ-NP-Y0-9]{4}(警|应急))$/,
    WJ: /^(WJ)([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-HJ-NP-Y]{1}[A-HJ-NP-Y0-9]{4}|[A-HJ-NP-Y0-9]{5})$/, //武警
    EC: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-HJ-NP-Y]{1}[A-HJ-NP-Y0-9]{4}[使领]{1}$/ //使领馆
}
//判断车牌
export const JUDGE = {
    IS_HK_MC: /^(粤Z)/, //是不是港澳车牌 
    IS_WJ: /^(WJ)/, //是不是WJ车牌,
    IS_EC: /([使领]{1})$/,
    IS_P_M: /(警|应急)$/,
    NEWERGY_THIRD: /^..([DF])/,
    NEWERGY_EIGHTH: /^.{7}([DF])$/
}


/* ordinaryCarNum 普通车牌类型
 * @param { String } params 
 * @return {Object} status(匹配状态) msg(匹配信息)
 */
export function ordinaryCarNum(CarNum) {
    console.log(CarNum)
    const value = CARNUMBER_REGEXP.ORDINARY.test(CarNum)
    return {
        status: value,
        msg: value ? '匹配成功' : `匹配失败${CarNum}`,
    }
}
/**
 * newEnergyCarNum 新能源类型
 * @param {String} CarNum 
 * @param {Boolean} strict
 * @return {Object} status(匹配状态) msg(匹配信息)
 */
export function newEnergyCarNum(CarNum, strict) {
    if (!strict) {
        console.log(CarNum)
        let value = CARNUMBER_REGEXP.NOT_STRICT_NEWERGY.test(CarNum);
        console.log(value, CarNum.length)
        return {
            status: value,
            msg: value ? '匹配成功' : '1.第三位于第四位只能是1到9的数字或D和F字母.2.第五位到第7位只能是0到9的数字.',
        }
    } else {
        return (JUDGE.NEWERGY_THIRD.test(CarNum)) ? {
            status: CARNUMBER_REGEXP.STRICT_NEWERGY_THIRD.test(CarNum),
            msg: (CARNUMBER_REGEXP.STRICT_NEWERGY_THIRD.test(CarNum)) ? '匹配成功' : '当第3位为D/F时，第4位可字母和数字，第5-8位必须纯数字.',
            type: "当第3位为D/F时"
        } : (JUDGE.NEWERGY_EIGHTH.test(CarNum)) ? {
            status: CARNUMBER_REGEXP.STRICT_NEWERGY_EIGHTH.test(CarNum),
            msg: (CARNUMBER_REGEXP.STRICT_NEWERGY_EIGHTH.test(CarNum)) === true ? '匹配成功' : '当第8位为D/F时，第3-7位必须纯数字.',
            type: "当第8位为D/F时"
        } : {
            status: CARNUMBER_REGEXP.NOT_STRICT_NEWERGY.test(CarNum),
            msg: (CARNUMBER_REGEXP.NOT_STRICT_NEWERGY.test(CarNum)) ? '匹配成功' : '1.第三位于第四位只能是1到9的数字或D和F字母.2.第五位到第7位只能是0到9的数字.',

        }
    }
}
/**
 * YellowCarNum() 黑色车牌类型(使馆或)
 *  @param {String} CarNum 
 *  @return {Object} status(匹配状态) msg(匹配信息)
 */
export function YellowCarNum(CarNum) {
    const value = CARNUMBER_REGEXP.Y_COMMON.test(CarNum)
    return {
        status: value,
        msg: value ? '匹配成功' : '匹配失败',
    }
}

/**
 * WhitecCarNum() 白色车牌类型
 */
export function WhitecCarNum(CarNum) {
    return (JUDGE.IS_WJ.test(CarNum)) ? {
        status: CARNUMBER_REGEXP.WJ.test(CarNum),
        msg: (CARNUMBER_REGEXP.WJ.test(CarNum)) ? '匹配成功' : '匹配失败',
        type: "WJ"
    }: (JUDGE.IS_P_M.test(CarNum)) ?{
        status: CARNUMBER_REGEXP.P_M.test(CarNum),
        msg: (CARNUMBER_REGEXP.P_M.test(CarNum)) ? '匹配成功' : '匹配失败',
        type: "P_M"
    }:{
        status: CARNUMBER_REGEXP.PLA.test(CarNum),
        msg: (CARNUMBER_REGEXP.PLA.test(CarNum)) ? '匹配成功' : '匹配失败',
        type: "PLA"
    }
}

/**
 *  BlackCarNum() 黑色车牌类型(使馆或)
 *  @param {String} CarNum 
 *  @return {Object} status(匹配状态) msg(匹配信息)
 */
export function BlackCarNum(CarNum) {
    return (JUDGE.IS_HK_MC.test(CarNum)) ? {
        status: CARNUMBER_REGEXP.HK_MC.test(CarNum),
        msg: (CARNUMBER_REGEXP.HK_MC.test(CarNum)) ? '匹配成功' : '匹配失败',
    } : {
        status: CARNUMBER_REGEXP.EC.test(CarNum),
        msg: (CARNUMBER_REGEXP.EC.test(CarNum)) ? '匹配成功' : '匹配失败',
    }

}

/**
 *  CommonCarNum() 通用类型
 *  @param {String} params 
 *  @return {Object} status(匹配状态) msg(匹配信息)
 */
export function CommonCarNum(CarNum) {
    return {
        status: CARNUMBER_REGEXP.COMMON.test(CarNum),
        msg: (CARNUMBER_REGEXP.COMMON.test(CarNum)) ? '匹配成功' : '匹配失败',
    }
}