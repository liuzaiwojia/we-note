/*
 * @Author: liujia
 * @Date: 2019-10-22 10:43:15
 * @Last Modified by: liujia
 * @Last Modified time: 2019-10-23 15:55:10
 * @description: store
 */
import wenoteApp from './reducers/index'
import { createStore } from 'redux'
import initState from './initState'

const store = createStore(wenoteApp, initState)

export default store
