/*
 * @Author: liujia
 * @Date: 2019-08-16 08:40:16
 * @Last Modified by: liujia
 * @Last Modified time: 2019-10-23 15:56:34
 * @description: plate的reducer
 */
import { SET_PLATE, SET_PLATE_LIST } from '../actions/actionTypes/plateActionType'

/**
 * @description 设置当前的板块
 * @param {Object} state
 * @param {Object} action 格式：{ type: SET_PLATE, plate: string }
 */
const plate = (state = 'Books', action) => {
  switch (action.type) {
    case SET_PLATE:
      return action.plate
    default:
      return state
  }
};

const plateList = (state = [], action) => {
  switch (action.type) {
    case SET_PLATE_LIST:
      return action.plateList
    default:
      return state
  }
};

export {
  plate,
  plateList
}
