/*
 * @Author: liujia
 * @Date: 2019-10-21 19:33:38
 * @Last Modified by: liujia
 * @Last Modified time: 2019-11-07 19:59:01
 * @description: 通用的工具方法
 */
import { getUserInfo } from '../apis/user'
import { getToken, removeToken } from './storage'
import store from '../redux/index'
import { setUser } from '../redux/actions/userAction'
import CryptoJS from 'crypto-js'
import axios from 'axios'

/**
 * @description 初始化系统
 */
const sysInit = async () => {
  // 设置系统token
  if (getToken()) {
    const result = await getUserInfo().catch(() => {
      // token过期等
      removeToken()
      return false
    })
    if (result.data.code === 0) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`
      // 设置redux内容
      store.dispatch(setUser(result.data.data))
    } else {
      store.dispatch(setUser(null))
    }
  } else {
    store.dispatch(setUser(null))
  }
}

/**
 * AES加密算法
 * @param {String} word 需要加密的字符串
 * @param {String} keyStr 密钥
 * @return {String} 返回加密之后的base64
 */
const encrypt = (word, keyStr = '0iYoOxU12wmKyNR0') => {
  const key = CryptoJS.enc.Utf8.parse(keyStr)
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })

  return encrypted.toString()
}

/**
 * AES解密算法
 * @param {String} word 需要解密的字符串
 * @param {String} keyStr 密钥
 * @return {String} 返回解密之后的字符串
 */
const decrypt = (word, keyStr = '0iYoOxU12wmKyNR0') => {
  const key = CryptoJS.enc.Utf8.parse(keyStr)
  const decryptObj = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })

  return CryptoJS.enc.Utf8.stringify(decryptObj).toString()
}

export {
  sysInit,
  encrypt,
  decrypt
}
