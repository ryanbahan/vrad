import React from 'react';
import { Link } from "react-router-dom";
import './AreaCard.scss';

function AreaCard({ id, name, shortname, about }) {
  return <article className="area-card">
      <section>
        <h1>{name}</h1>
        <h4>({shortname})</h4>
      </section>
      <p>{about}</p>
      <Link to={"/areas/" + id}>
        <button>View Listings</button>
      </Link>
    </article>
}

export default AreaCard;
