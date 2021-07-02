import React from 'react';
import styles from '../styles/signup.module.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface State {
  firstName: string,
  lastName: string,
  email: string,
  licenseID: number,
  state: string
}

const initialState: State = {
  firstName: '',
  lastName: '',
  email: '',
  licenseID: 0,
  state: ''
}

const register: React.FC = () => {
  const onFinish = (values: string) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      // className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      className={styles.container}
    >
      <h1>Welcome to DocterSource!</h1>
      <Form.Item
        name="FirstName"
        rules={[{ required: true, message: 'Please input your First Name!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
      </Form.Item>
      <Form.Item
        name="LastName"
        rules={[{ required: true, message: 'Please input your Last Name!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
      </Form.Item>
      <Form.Item
        name="Email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="License Number"
        rules={[{ required: true, message: 'Please input your License Number!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="License Number"
          placeholder="License"
        />
      </Form.Item>
      <Form.Item
        name="State"
        rules={[{ required: true, message: 'Please input your State!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="State"
        />
      </Form.Item>
      <Form.Item
        name="Password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign Up!
        </Button>
      </Form.Item>
    </Form>
  )
};


export default register;