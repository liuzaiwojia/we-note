/*
 * @Author: liujia
 * @Date: 2019-08-29 22:33:24
 * @Last Modified by: liujia
 * @Last Modified time: 2019-08-29 22:40:08
 * @description: 用户关注的列表
 */
import React from 'react'
import { connect } from 'react-redux'

class SideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = Object.assign({}, props)
  }

  render () {
    return (
      <aside>
      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focusList: state.focusList
  }
}

export default connect(mapStateToProps)(SideBar)