import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { UserLogin } from '../../types';
import { loginUser } from '../../services/apiServices';
import { useRouter } from 'next/router';

const initialState: UserLogin = {
  email: '',
  password: ''
}

const Login: React.FC = () => {
  const router = useRouter();
  const [login, setLogin] = useState<UserLogin>(initialState);

  const handleLogin: React.ChangeEventHandler<HTMLInputElement> = ({target}) => {
    setLogin((oldLogin: UserLogin) => ({...oldLogin, [target.name]:target.value}))
  };


  const onFinish = async (values: UserLogin) => {
    try {
      const { accessToken } = await loginUser(values).then(res => res.json());
      localStorage.setItem('accessToken', accessToken);
      // router.push(`http://localhost:3000/${accessToken}`);
      router.push({
        pathname: 'http://localhost:3000/',
        query: { accessToken },
      });
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
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


