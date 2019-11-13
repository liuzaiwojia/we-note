/*
 * @Author: liujia
 * @Date: 2019-08-01 17:12:42
 * @Last Modified by: liujia
 * @Last Modified time: 2019-11-13 17:36:48
 * @description: 书籍列表
 */
import React from 'react'
import PropTypes from 'prop-types'
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
      <div className="list-container">
        {/* 列表上方的筛选项 */}
        <header>
          <nav>
            <ul className="we-note-ul">
              <li>
                <Link className="nav-item" to="/">热门</Link>
                <Link className="nav-item" to="/">最新</Link>
                <Link className="nav-item" to="/">热榜</Link>
              </li>
            </ul>
          </nav>
        </header>
        <ul className="we-note-ul">
          {
            this.props.initData.map(item => (
              <li key={item.id}>
                <Link className="post-link" to="/">
                  <div className="info-box">
                    <div className="info-row meta-row">
                      <ul className="meta-info">
                        <li className="meta-item">
                          <Link>试验二小班主任</Link>
                        </li>
                        <li className="meta-item">
                          <Link>1小时前</Link>
                        </li>
                        <li className="meta-item">
                          <Link>前端</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="info-row title-row">
                      <Link to="/">前端开发小结</Link>
                    </div>
                    <div className="info-row operate-row">
                      点赞、收藏等
                    </div>
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

BookList.propTypes = {
  focus: PropTypes.string,
  initData: PropTypes.array
}

export default BookList;