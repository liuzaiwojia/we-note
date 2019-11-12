/*
 * @Author: liujia
 * @Date: 2019-08-01 15:20:27
 * @Last Modified by: liujia
 * @Last Modified time: 2019-10-24 14:53:55
 * @description: 项目的路由配置
 */
import Page from './Page'

const RouteConfig = [
  {
    path: '/',
    exact: true,
    component: Page
  },
  {
    path: '/:plate/:focus',
    exact: false,
    component: Page
  }
]

export default RouteConfig