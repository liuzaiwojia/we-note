/*
 * @Author: liujia
 * @Date: 2019-08-29 22:14:22
 * @Last Modified by: liujia
 * @Last Modified time: 2019-10-23 15:56:42
 * @description: focus的reducer
 */
import { SET_FOCUS, SET_FOCUS_LIST } from '../actions/actionTypes/focusActionType'

const focus = (state = 'all', action) => {
  switch (action.type) {
    case SET_FOCUS:
      return action.focus
    default:
      return state
  }
};

const focusList = (state = [], action) => {
  switch (action.type) {
    case SET_FOCUS_LIST:
      return action.focusList
    default:
      return state
  }
};

export {
  focus,
  focusList
}