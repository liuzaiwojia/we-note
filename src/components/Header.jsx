/*
 * @Author: liujia
 * @Date: 2019-08-29 22:20:45
 * @Last Modified by: liujia
 * @Last Modified time: 2019-11-08 14:15:46
 * @description: 页面头部展现
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import { Input } from 'antd'
import CommonIcon from './CommonIcon'
import PropTypes from 'prop-types'

const { Search } = Input

// heaer的展示组件
class Header extends React.Component {
  constructor (props) {
    super(props)
  }

  handleSearch (e) {
    console.log(e)
  }

  render () {
    return (
      <header className="main-header">
        {/* 网站logo */}
        <Link className="logo flex-middle-height" to="/">
          <CommonIcon name="note"></CommonIcon>
          <span>众记</span>
        </Link>
        {/* 网站头部tab切换 */}
        <nav className="switch-tab">
          <ul className="we-note-ul flex-middle-height">
            {
              this.props.plateList.map(item => (
                <li key={item.key} className="tab-item">
                  <Link className={ item.key === this.props.plate ? 'link-content' : 'text-in-dark' } to={`/${item.key}/${this.props.focus}`}>
                    {item.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
        {/* 输入框 */}
        <div className="search-container">
          <Search placeholder="搜索众记" onSearch={(e) => this.handleSearch(e)}></Search>
        </div>
        {/* 写文章等 */}
        <nav>
          <Link to="/">编书</Link>
          <Link to="/">写文章</Link>
        </nav>
        {/* 登录状态 */}
        <Login></Login>
      </header>
    );
  }
}

Header.propTypes = {
  // 网站当前的板块：包括书单、文章等
  plate: PropTypes.string,
  // 当前关注的领域：计算机、化工等
  focus: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    plateList: state.plateList
  }
}

export default connect(mapStateToProps)(Header)
