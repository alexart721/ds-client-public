import React from 'react';
import styles from '../../styles/signup.module.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { UserAuth, User } from '../../types';
import { useRouter } from 'next/dist/client/router';
import { setUserPassword } from '../../services/apiServices';

const Register: React.FC<{ user: User, accessToken: string }> = ({ user, accessToken }) => {

  const onFinish = async (values: UserAuth) => {
    try {
      const newAccessToken: string = await setUserPassword(accessToken, values).then(res => res.json());
      localStorage.setItem('accessToken', newAccessToken);
      // Redirct url to authorized home page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Form
        name="normal_login"
        // className="login-form"
        initialValues={user}
        onFinish={onFinish}
      >
        {
          Object.entries(user).map(([key, value]) => (
            <Form.Item name={key}>
              <Input value={value} disabled />
            </Form.Item>
          ))
        }
        <Form.Item
          name="Password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};


export default Register;