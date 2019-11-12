/*
 * @Author: liujia
 * @Date: 2019-10-22 11:02:53
 * @Last Modified by: liujia
 * @Last Modified time: 2019-11-06 18:13:43
 * @description: 模拟用户相关的接口
 */
import Mock from 'mockjs'
import { operateUrl } from '../apis/commonApi'
import { handleResultCode } from './utils'

const getUserInfoMock = () => {
  Mock.mock(operateUrl('/user'), 'get', handleResultCode({
    id: '001',
    email: 'liuzaiwojia@sina.com',
    userName: 'liujia',
    image: Mock.Random.image(),
    profile: '很帅',
    company: '武汉壹叮科技有限公司',
    position: '前端工程师',
    phoneNumber: '13018030946',
    homePage: 'https://liuzaiwojia.com'
  }))
}

const userLoginMock = () => {
  Mock.mock(operateUrl('/user/login'), 'put', handleResultCode('tokenOnlyForTest'))
}

const userModifyMock = () => {
  Mock.mock(operateUrl('/user'), 'put', handleResultCode({
    id: '001',
    email: 'liuzaiwojia@sina.com',
    userName: 'liujia',
    image: Mock.Random.image(),
    profile: '很帅',
    company: '武汉壹叮科技有限公司',
    position: '前端工程师',
    phoneNumber: '13018030946',
    homePage: 'https://liuzaiwojia.com'
  }))
}

const userRegisteMock = () => {
  Mock.mock(operateUrl('/user'), 'post', handleResultCode({
    id: '001',
    email: 'liuzaiwojia@sina.com',
    userName: 'liujia',
    image: Mock.Random.image(),
    profile: '很帅',
    company: '武汉壹叮科技有限公司',
    position: '前端工程师',
    phoneNumber: '13018030946',
    homePage: 'https://liuzaiwojia.com'
  }))
}

export {
  getUserInfoMock,
  userLoginMock,
  userModifyMock,
  userRegisteMock
}