import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>About</Link>
      <Link to="/services" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Services</Link>
      <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;