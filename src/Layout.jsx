import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header><NavBar /></header>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
