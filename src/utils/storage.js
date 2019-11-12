/*
 * @Author: liujia
 * @Date: 2019-10-22 09:58:50
 * @Last Modified by: liujia
 * @Last Modified time: 2019-11-07 19:21:38
 * @description: 系统存储的api
 */
/**
 * @description 存储内容
 * @param {String} name storage的名称
 * @param {any} data 要存储的内容
 */
const setStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data))
}

/**
 * @description 获取存储内容
 * @param {String} name storage的名称
 */
const getStorage = (name) => {
  return localStorage.getItem(name)
}

/**
 * @description 对cookie做转换
 */
const translateCookie = () => {
  const cookie = document.cookie
  const cookieArr = cookie.split(';')
  return cookieArr.map(item => {
    const cookieItem = item.split('=')
    return {
      key: cookieItem[0].trim(),
      value: cookieItem[1]
    }
  })
}

/**
 * @description 设置cookie
 * @param {String} name cookie的键
 * @param {String} str 要设置的cookie的值
 */
const setCookie = (name, str) => {
  const days = 7
  const exp = new Date(Date.now() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${str}; expires=${exp.toUTCString()}`
}

/**
 * @description 得到cookie
 * @param {String} name cookie的键
 */
const getCookie = (name) => {
  const translatedCookie = translateCookie()
  const thatItem = translatedCookie.find(item => item.key === name)
  if (thatItem) {
    return thatItem.value
  }
  return ''
}

/**
 * @description 删除cookie
 * @param {String} name cookie的键
 */
const deleteCookie = (name) => {
  const prevValue = getCookie(name)
  const exp = new Date(Date.now() - 1)
  document.cookie = `${name}=${prevValue}; expires=${exp.toUTCString()}`
}

/**
 * @description 设置token
 * @param {String} token token
 */
const setToken = (token) => {
  setCookie('token', token)
}

/**
 * @description 得到token
 */
const getToken = () => {
  return getCookie('token')
}

/**
 * @description 删除token
 */
const removeToken = () => {
  deleteCookie('token')
}

export {
  setStorage,
  getStorage,
  setToken,
  getToken,
  removeToken,
  setCookie,
  getCookie,
  deleteCookie
}
