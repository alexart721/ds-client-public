import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import { useRouter } from 'next/router';
import { UserLogin } from '../../types';
import { loginUser } from '../../services/apiServices';
import styles from '../../styles/login.module.css';

const initialState: UserLogin = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const router = useRouter();
  const [login, setLogin] = useState<UserLogin>(initialState);

  const handleLogin: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setLogin((oldLogin: UserLogin) => ({ ...oldLogin, [target.name]: target.value }));
  };

  const onFinish = async (values: UserLogin) => {
    try {
      const { accessToken } = await loginUser(values).then((res) => res.json());
      console.log(accessToken);
      localStorage.setItem('accessToken', accessToken);
      router.push({
        pathname: 'http://localhost:3000/app/validate',
        query: { accessToken },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.main}>
        <Form
          name="normal_login"
          className={styles.loginform}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <h2 className={styles.title}>Welcome to DoctorSource!</h2>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              type="Email"
              placeholder="Email"
              value={login.email}
              onChange={handleLogin}
              className={styles.un}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}

          >
            <Input
              className={styles.pass}
              type="password"
              placeholder="Password"
              value={login.password}
              onChange={handleLogin}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.submit}>
              Log in
            </Button>
          </Form.Item>
          <Form.Item className={styles.signuplink}>
            <p>
              No account yet?
              <Link href="/signup" passHref>
                <a><div className={styles.loginLink}>Sign up!</div></a>
              </Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>

  );
};

export default Login;
