import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.scss';
import { fetchSavedFavorites } from "../../utils";
import PropTypes from 'prop-types';

function Nav(props) {
  return <nav>
    <section>
      <h1>VRad!</h1>
    <NavLink to="/areas">
      Areas
    </NavLink>
    <NavLink to="/favorites">
      Favorites {fetchSavedFavorites().length}
    </NavLink>
    </section>
    <section>
    <p>Welcome, {props.userInfo.name || "friend!"}</p>
    <p>Your Account Type: {props.userInfo.accountType || "Other"}</p>
    <NavLink to="/">
      <button>Sign Out</button>
    </NavLink>
    </section>
  </nav>
}

Nav.propTypes = {
  userInfo: PropTypes.object
}

export default Nav;
