import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';

function Nav({ user }) {

  return <nav>
    <section>
    <Link to="/areas">
      <h1>VRad!</h1>
    </Link>
    <Link to="/favorites">
      View Favorite Listings
    </Link>
    </section>
      <p>Welcome, {user || "friend!"}</p>
    <Link to="/">
      <button>Sign Out</button>
    </Link>
  </nav>
}

export default Nav;
