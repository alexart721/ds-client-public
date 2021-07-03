import React from 'react'
import styles from '../styles/Home.module.css';


const appRecieved = () => {
  return (
    <div className={styles.container}>
      <h1>THANKS FOR YOUR APPLICATION </h1>
      <h2>We will review your application, and email you as soon as possible!</h2>
    </div>
  )
}

export default appRecieved;
