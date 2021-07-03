import React, {useState} from 'react';
import styles from '../../styles/signup.module.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface State {
  firstName: string,
  lastName: string,
  email: string,
  licenseID: string,
  state: string,
  password: string
}

const initialState: State = {
  firstName: '',
  lastName: '',
  email: '',
  licenseID: '',
  state: '',
  password: ''
}

const Register: React.FC = () => {
  const [register, setRegister] = useState<State>(initialState);
  const [registerError, setRegisterError] = useState<boolean>(false);

  const handleRegister: React.ChangeEventHandler<HTMLInputElement> = ({target}) => {
    setRegister((oldRegister: State) => ({...oldRegister, [target.name]:target.value}))
    setRegisterError(false);
  };

  const onFinish = (values: string) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to DocterSource!</h1>
      <div>First Name:{register.firstName}</div>
      <div>Last Name:{register.lastName}</div>
      <div>Email:{register.email}</div>
      <div>LicenseID:{register.licenseID}</div>
      <div>State:{register.state}</div>
      <Form
        name="normal_login"
        // className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >

        <Form.Item
          name="Password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
            value={register.licenseID}
            onChange={handleRegister}
          />
        </Form.Item>
        <Form.Item>
          <Link href='/appRecieved'>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Register
            </Button>
          </Link>

        </Form.Item>
      </Form>
    </div>
  )
};


export default Register;