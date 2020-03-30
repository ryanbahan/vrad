import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';

function Nav({ userInfo }) {

  return <nav>
    <section>
    <Link to="/areas">
      <h1>VRad!</h1>
    </Link>
    <Link to="/favorites">
      View Favorite Listings: ??
    </Link>
    </section>
    <section>
      <p>Welcome, {userInfo.userName || "friend!"}</p>
      <p>Your Account Type: {userInfo.accountType || "Other"}</p>
    </section>
    <Link to="/">
      <button>Sign Out</button>
    </Link>
  </nav>
}

export default Nav;
