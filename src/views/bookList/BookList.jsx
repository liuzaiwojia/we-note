/*
 * @Author: liujia
 * @Date: 2019-08-01 17:12:42
 * @Last Modified by: liujia
 * @Last Modified time: 2019-10-25 17:13:51
 * @description: 书籍列表
 */
import React from 'react'
import PropTypes from 'prop-types'
import ListPageTemplate from '../../components/ListPageTemplate'
import { Link } from 'react-router-dom'

class BookList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props
    }
  }

  render () {
    return (
      <ListPageTemplate>
        {/* 列表上方的赛选项 */}
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">热门</Link>
                <Link to="/">最新</Link>
                <Link to="/">热榜</Link>
              </li>
            </ul>
          </nav>
        </header>
        <ul>
          {
            this.props.initData.map(item => (
              <li key={item.id}>
                <Link to="/">
                  <div className="info-box">
                    <div className="info-row meta-row"></div>
                    <div className="info-row title-row"></div>
                    <div className="info-row operate-row"></div>
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </ListPageTemplate>
    );
  }
}

BookList.propTypes = {
  focus: PropTypes.string,
  initData: PropTypes.array
}

export default BookList;