import React, {useState} from 'react';
import styles from '../../styles/signup.module.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { createNewUser } from '../../services/apiServices';
import { User } from '../../types';

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

const Signup: React.FC = () => {
  const [signup, setSignup] = useState<State>(initialState);
  const router = useRouter();

  const handleSignup: React.ChangeEventHandler<HTMLInputElement> = ({target}) => {
    setSignup((oldSignup: State) => ({...oldSignup, [target.name]:target.value}))
  };

  const onFinish = async (values: User) => {
    const newUser = await createNewUser(values).then(res => res.json());
    // Logic to generate email and send to admin
    router.push('/appReceived');
  };

  return (
    <Form
      name="normal_login"
      //className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      className={styles.container}
    >
      <h1>Welcome to DocterSource!</h1>
      <Form.Item
        name="FirstName"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined
          className="site-form-item-icon" />}
          placeholder="First Name"
          value={signup.firstName}
          onChange={handleSignup}
        />
      </Form.Item>
      <Form.Item
        name="LastName"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Last Name"
          value={signup.lastName}
          onChange={handleSignup}
        />
      </Form.Item>
      <Form.Item
        name="Email"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          value={signup.email}
          onChange={handleSignup}
        />
      </Form.Item>
      <Form.Item
        name="License ID"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="License ID"
          placeholder="License ID"
          value={signup.licenseID}
          onChange={handleSignup}
        />
      </Form.Item>
      <Form.Item
        name="State"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="State"
          value={signup.state}
          onChange={handleSignup}
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


export default Signup;