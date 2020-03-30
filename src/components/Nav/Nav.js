import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';

function Nav({ user, accountType }) {

  return <nav>
    <section>
    <Link to="/areas">
      <h1>VRad!</h1>
    </Link>
    <Link to="/favorites">
      View Favorite Listings
    </Link>
    </section>
    <section>
      <p>Welcome, {user || "friend!"}</p>
      <p>{accountTypeMessage(accountType) || "This is VRad!"}</p>
    </section>
    <Link to="/">
      <button>Sign Out</button>
    </Link>
  </nav>
}

function accountTypeMessage(accountType) {
  const typeMessage = {vacation: "This is Vacation View",
    business: "This is Business View",
    other: "This is Other View"};

  return typeMessage[accountType]
}

export default Nav;
