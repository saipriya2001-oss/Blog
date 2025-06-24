// src/NavBar.js
import React from 'react';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>Blog APP</div>
      <ul style={styles.navList}>
        <li><a href="#" style={styles.navLink}>Home</a></li>
        <li><a href="#" style={styles.navLink}>Blog</a></li>
        <li><a href="#" style={styles.navLink}>About</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222',
    color: 'white',
    padding: '1rem 2rem',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
  }
};

export default NavBar;
