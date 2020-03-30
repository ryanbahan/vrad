import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';

function Nav(props) {

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
      <p>Welcome, {props.userName || "friend!"}</p>
      <p>Your Account Type: {props.accountType || "Other"}</p>
    </section>
    <Link to="/">
      <button>Sign Out</button>
    </Link>
  </nav>
}

export default Nav;
