/*
 * @Author: liujia
 * @Date: 2019-10-24 14:51:33
 * @Last Modified by: liujia
 * @Last Modified time: 2019-11-07 09:15:09
 * @description: 项目的通用入口
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './assets/style/main.scss'
import 'antd/dist/antd.css'
import RouteConfig from './routeConfig/RouteConfig'
import { sysInit } from './utils/commonUtil'

class App extends React.Component {

  componentDidMount () {
    sysInit()
  }

  render () {
    return (
      <Switch>
        { RouteConfig.map((item, index) => (<Route key={index} {...item}></Route>)) }
      </Switch>
    );
  }
}

export default App