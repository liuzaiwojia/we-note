/*
 * @Author: liujia
 * @Date: 2019-09-23 19:48:26
 * @Last Modified by: liujia
 * @Last Modified time: 2019-11-12 10:54:49
 * @description: svg的图标
 */
import React from 'react'

export default class CommonIcon extends React.Component {

  constructor (props) {
    super(props)
    this.state = Object.assign({}, props)
  }

  render () {
    return (
      <img src={`/${this.props.name}.png`} className="common-icon">
      </img>
    )
  }
}
