import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1>Hello</h1>
      <button>Login</button>
    </div>
  );
};

export default Header;