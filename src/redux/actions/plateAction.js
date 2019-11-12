/*
 * @Author: liujia
 * @Date: 2019-08-16 08:32:40
 * @Last Modified by: liujia
 * @Last Modified time: 2019-08-16 08:37:04
 * @description: actions 的定义
 */
import { SET_PLATE } from './actionTypes/plateActionType'

/**
 * @description 设置当前的plate
 * @param {String} plateType 选中的plate
 */
function setPlate (plateType) {
  return {
    type: SET_PLATE,
    plate: plateType
  }
}

export {
  setPlate
}