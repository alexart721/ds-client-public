import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface State {
  email: string;
  password: string;
}

const initialState: State = {
  email: '',
  password: ''
}

const Login: React.FC = () => {
  const [login, setLogin] = useState<State>(initialState);
  const [loginError, setLoginError] = useState<boolean>(false);

  const handleLogin: React.ChangeEventHandler<HTMLInputElement> = ({target}) => {
    setLogin((oldLogin: State) => ({...oldLogin, [target.name]:target.value}))
    setLoginError(false);
  };

  // const validateForm = () => {
  //   return !login.email || !login.password;
  // };


  const onFinish = (values: string) => {
    console.log('Received values of form: ', values);
  };


  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}

    >
      <Form.Item
        name="Email"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="Email"
          placeholder="Email"
          value={login.email}
          onChange={handleLogin}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={login.password}
          onChange={handleLogin}
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}

      <Form.Item id="login-form-button">
        <Button type="primary" htmlType="submit"  >
          Log in
        </Button>
      </Form.Item>
      <Form.Item>
        <Link href="/signup"><a>No account yet? Sign up!</a></Link>
      </Form.Item>
    </Form>
  );
};

export default Login;


