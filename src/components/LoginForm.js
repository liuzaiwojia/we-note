/*
 * @Author: liujia
 * @Date: 2019-10-31 15:05:12
 * @Last Modified by: liujia
 * @Last Modified time: 2019-10-31 16:31:21
 * @description: 登录的form表单
 */
import React from 'react'
import { Form, Modal, Input, Icon, Button } from 'antd'

class LoginForm extends React.Component {

  render () {
    const { form, loginModalVisible, hideLoginModal, handleSubmit } = this.props
    const { getFieldDecorator } = form
    return (
      <Modal
        title={'登录'}
        visible={ loginModalVisible }
        onCancel={ hideLoginModal }
        width={ 400 }
        footer={null}>
        <Form onSubmit={ handleSubmit }>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入手机号或邮箱！' }]
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }}></Icon>} placeholder="请输入手机号或邮箱"></Input>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码！' }]
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, .25)' }}></Icon>} type="password" placeholder="请输入密码"></Input>
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
          <div className="regist-forgot"></div>
        </Form>
      </Modal>
    )
  }
}

const WrappedLoginForm = Form.create({ name: 'WrappedLoginForm' })(LoginForm)

export default WrappedLoginForm