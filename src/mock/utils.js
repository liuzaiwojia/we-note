/*
 * @Author: liujia
 * @Date: 2019-10-22 15:11:55
 * @Last Modified by: liujia
 * @Last Modified time: 2019-10-22 15:13:31
 * @description: mock数据的工具模块
 */
const handleResultCode = (data) => {
  return {
    code: 0,
    data: data,
    message: 'success'
  }
}

export {
  handleResultCode
}