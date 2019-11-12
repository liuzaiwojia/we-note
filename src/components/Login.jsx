/*
 * @Author: liujia
 * @Date: 2019-09-16 19:28:34
 * @Last Modified by: liujia
 * @Last Modified time: 2019-11-12 15:34:58
 * @description: 当前用户登录情况
 */
import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { encrypt, sysInit } from '../utils/commonUtil'
import { userLogin } from '../apis/user'
import { setToken } from '../utils/storage'
import { Avatar } from 'antd'

class Login extends React.Component {

  state = {
    loginModalVisible: false
  };

  /**
   * @description 展示login的弹框
   */
  showLoginModal = () => {
    this.setState({
      loginModalVisible: true
    })
  }

  hideLoginModal = () => {
    this.setState({
      loginModalVisible: false
    })
  }

  /**
   * @description 处理登录
   */
  handleSubmit = (e) => {
    e.preventDefault()
    const { form } = this.formRef.props
    form.validateFields(async (err, values) => {
      if (err) {
        return
      }
      const result = await userLogin(Object.assign({}, values, {
        password: encrypt(values.password)
      }))
      if (result.data.code === 0) {
        setToken(result.data.data)
        await sysInit()
        this.hideLoginModal()
      } else {
        console.log('fail')
      }
    })
  }

  /**
   * @description 保存对loginFrom的表单引用
   */
  saveFormRef = (fromRef) => {
    this.formRef = fromRef
  }

  render () {
    const { loginModalVisible } = this.state
    return this.props.user ? (
      <Avatar shape="square" icon="user" size="small"></Avatar>
    ) : (
      <div className="create-container">
        <span onClick={ this.showLoginModal } className="link-content">登录</span>
        <span className="split-content">·</span>
        <span className="link-content">注册</span>
        <LoginForm
          wrappedComponentRef={ this.saveFormRef }
          loginModalVisible={ loginModalVisible }
          hideLoginModal={ this.hideLoginModal }
          handleSubmit={ this.handleSubmit }></LoginForm>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login)
