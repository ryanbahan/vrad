import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';
import { fetchSavedFavorites } from "../../utils";

function Nav(props) {
  return <nav>
    <section>
    <Link to="/areas">
      <h1>VRad!</h1>
    </Link>
    <Link to="/favorites">
      Favorites {fetchSavedFavorites().length}
    </Link>
    </section>
    <section>
      <p>Welcome, {props.userInfo.name || "friend!"}</p>
      <p>Your Account Type: {props.userInfo.accountType || "Other"}</p>
    </section>
    <Link to="/">
      <button>Sign Out</button>
    </Link>
  </nav>
}

export default Nav;
