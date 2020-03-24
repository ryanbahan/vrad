import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';

function Nav({ items }) {

  const navItems = items.map(item => {
    const path = `/${item}`;
    return <Link to={path} key={item}><li>{item}</li></Link>
  });

  return <nav>
    <div className="nav-left-container">
      <h1>VRad!</h1>
      <ul>
        {navItems}
      </ul>
    </div>
    <Link to="/">
      <button>Sign Out</button>
    </Link>
  </nav>
}

export default Nav;
