/*
 * @Author: liujia
 * @Date: 2019-10-10 11:37:34
 * @Last Modified by: liujia
 * @Last Modified time: 2019-10-31 16:24:01
 * @description: user相关的api
 */
import { get, put, post } from './commonApi'

/**
 * @description 得到用户的详细信息
 */
const getUserInfo = () => {
  return get('/user')
}

/**
 * @description 用户登录
 * @param {Object} data 登录数据
 */
const userLogin = (data) => {
  return put('/user/login', data)
}

/**
 * @description 修改用户信息
 * @param {Objec} userInfo 用户信息
 */
const userModify = (userInfo) => {
  return put('/user', userInfo)
}

/**
 * @description 注册用户
 * @param {String} userInfo 用户信息
 */
const userRegiste = (userInfo) => {
  return post('/user', userInfo)
}

export {
  getUserInfo,
  userLogin,
  userModify,
  userRegiste
}
