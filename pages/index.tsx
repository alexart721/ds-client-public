import React from 'react';
import styles from '../styles/Home.module.css';
import Login from '../components/Login/Login';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to DoctorSource!</h1>
      <Login />
    </div>
  );
}
