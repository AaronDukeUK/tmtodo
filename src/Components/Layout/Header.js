import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to='/'>HOME</Link>
      <Link style={linkStyle} to='/about'>ABOUT</Link>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  padding: '0 20px',
  color: 'white'
}

export default Header;
