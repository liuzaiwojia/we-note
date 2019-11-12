/*
 * @Author: liujia
 * @Date: 2019-10-25 16:22:27
 * @Last Modified by: liujia
 * @Last Modified time: 2019-10-25 16:57:42
 * @description: 列表页面的模板
 */
import React from 'react'

class ListPageTemplate extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="list-page-container">
        <div className="list-page-content">
          { this.props.children }
        </div>
        <aside className="list-page-side">
          旁边的内容
        </aside>
      </div>
    )
  }
}

export default ListPageTemplate
