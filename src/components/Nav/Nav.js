import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';

function Nav({ user }) {

  return <nav>
    <Link to="/">
      <h1>VRad!</h1>
    </Link>
      <p>Welcome, {user || "friend!"}</p>
    <Link to="/">
      <button>Sign Out</button>
    </Link>
  </nav>
}

export default Nav;
