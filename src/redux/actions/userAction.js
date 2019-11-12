import { SET_USER } from './actionTypes/userActionType'

/**
 * @description 设置用户信息
 * @param {Object} user 用户信息
 */
function setUser (user) {
  return {
    type: SET_USER,
    user: user
  }
}

export {
  setUser
}