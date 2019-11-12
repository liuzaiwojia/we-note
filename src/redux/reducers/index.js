/*
 * @Author: liujia
 * @Date: 2019-08-16 08:48:24
 * @Last Modified by: liujia
 * @Last Modified time: 2019-08-30 09:25:53
 * @description: 合并各个reducers为一个reducer
 */
import { combineReducers } from 'redux'
import { plate, plateList } from './plateReducer'
import user from './userReducer'
import { focus, focusList } from './focusReducer'

export default combineReducers({
  plate,
  plateList,
  user,
  focus,
  focusList
})
