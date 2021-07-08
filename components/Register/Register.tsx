import React from 'react';
import styles from '../../styles/signup.module.css';
import { Form, Input, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { UserAuth, User } from '../../types';
import { useRouter } from 'next/dist/client/router';
import { setUserPassword } from '../../services/apiServices';

const Register: React.FC<{ user: User, accessToken: string }> = ({ user, accessToken }) => {
  const router = useRouter();

  const onFinish = async (values: UserAuth) => {
    try {
      const newAccessToken: string = await setUserPassword(accessToken, values).then(res => res.json());
      localStorage.setItem('accessToken', newAccessToken);
      router.push({
        pathname: '/app/validate',
        query: { accessToken },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Form
        name="normal_login"
        className={styles.loginform}
        initialValues={user}
        onFinish={onFinish}
      >
        {
          Object.entries(user).map(([key, value]) => (
            <Form.Item name={key}>
              <Input value={value} className={styles.un} disabled />
            </Form.Item>
          ))
        }
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
            className={styles.un}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.submit}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};


export default Register;