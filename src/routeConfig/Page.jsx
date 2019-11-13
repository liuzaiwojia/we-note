/*
 * @Author: liujia
 * @Date: 2019-08-01 16:24:40
 * @Last Modified by: liujia
 * @Last Modified time: 2019-10-25 16:02:42
 * @description: 正常页面的模板
 */
import React from 'react'
import Header from '../components/Header'
import PostList from '../views/postList/PostList'
import BookList from '../views/bookList/BookList'
import SideBar from '../components/SideBar'
import Axios from 'axios'

class Page extends React.Component {
  constructor (props) {
    super(props)
    let initialData
    // props.staticContext  is only available on server
    // props.staticContext is exposed by <StaticRouter> 
    if (props.staticContext) {
      initialData = props.staticContext.initData
    }

    // on client component can't receive props that has initialData
      // so we get initialData from the template that comes from server
    else {
      initialData = window.__initialData__
      delete window.__initialData__
    }
    this.state = { news: initialData }
  }

  static requestInitData (url) {
    return Axios('http://localhost:3000/api/news')
    .then(result => result.data)
  }

  render () {
    const plate = this.props.match.params.plate || 'books'
    const focus = this.props.match.params.focus || 'all'
    return (
      <div className="page-container">
        <div className="header-container">
          <Header plate={plate} focus={focus}></Header>
        </div>
        <div className="content-container">
          <div className="post-container">
            {
              plate === 'books' ? <BookList initData={ [] } focus={focus}></BookList> : <PostList initData={ [] } focus={focus}></PostList>
            }
          </div>
          <div className="focus-container">
            <SideBar plate={plate} focus={focus}></SideBar>
          </div>
        </div>
      </div>
    );
  }
}

export default Page
