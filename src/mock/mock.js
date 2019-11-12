/*
 * @Author: liujia
 * @Date: 2019-10-22 11:03:09
 * @Last Modified by: liujia
 * @Last Modified time: 2019-10-31 16:37:24
 * @description: mock的主入口
 */
import Mock from 'mockjs'
import * as user from './user'

/**
 * @description 运行mock
 */
const runMock = () => {
  Mock.setup({
    timeout: '200-400'
  })
  const runner = {
    ...user
  }
  const runnerKey = Object.keys(runner)
  runnerKey.forEach(key => {
    runner[key]()
  })
}

export default runMock