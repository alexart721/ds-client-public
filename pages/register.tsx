import React from 'react';
import Register from '../components/Register/Register';
import styles from '../styles/signup.module.css';

const RegisterPage: React.FC= () => {
  return (
    <div className={styles.container}>
      <Register />
    </div>
  )

};


export default RegisterPage;