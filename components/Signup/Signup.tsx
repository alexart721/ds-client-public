import React, { useState } from 'react';
import Link from 'next/link';
import {
  Form, Input, Button,
} from 'antd';
import { useRouter } from 'next/router';
import styles from '../../styles/signup.module.css';
import { createNewUser } from '../../services/apiServices';
import { User } from '../../types';

interface State {
  firstName: string,
  lastName: string,
  email: string,
  license: number,
  state: string
}

const initialState: State = {
  firstName: '',
  lastName: '',
  email: '',
  license: 0,
  state: '',
};

const Signup: React.FC = () => {
  const [signup, setSignup] = useState<State>(initialState);
  const router = useRouter();

  const handleSignup: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setSignup((oldSignup: State) => ({ ...oldSignup, [target.name]: target.value }));
  };

  const onFinish = async (values: User) => {
    await createNewUser(values).then((res) => res.json());
    router.push('/appReceived');
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.main}>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className={styles.loginform}
        >
          <h2 className={styles.title}>Welcome to DoctorSource!</h2>
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: 'Please input your First Name!' }]}
          >
            <Input
              placeholder="First Name"
              value={signup.firstName}
              onChange={handleSignup}
              className={styles.un}
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[{ required: true, message: 'Please input your Last Name!' }]}
          >
            <Input
              placeholder="Last Name"
              value={signup.lastName}
              onChange={handleSignup}
              className={styles.un}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input
              placeholder="Email"
              value={signup.email}
              onChange={handleSignup}
              className={styles.un}
            />
          </Form.Item>
          <Form.Item
            name="license"
            rules={[{ required: true, message: 'Please input your License!' }]}
          >
            <Input
              type="License"
              placeholder="License"
              value={signup.license}
              onChange={handleSignup}
              className={styles.un}
            />
          </Form.Item>
          <Form.Item
            name="state"
            rules={[{ required: true, message: 'Please input your State!' }]}
          >
            <Input
              placeholder="State"
              value={signup.state}
              onChange={handleSignup}
              className={styles.un}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.submit}>
              Sign Up!
            </Button>
          </Form.Item>
          <Form.Item className={styles.signuplink}>
            <p>
              Already have an account?
              <Link href="/" passHref>
                <button type="button" className={styles.loginLink}> Login </button>
              </Link>
              here
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
