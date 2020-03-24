import React from 'react';
import './AreaCard.scss';

function AreaCard({ id, key, name, shortname, about }) {
  return <article className="area-card">
      <section>
        <h1>{name}</h1>
        <h4>({shortname})</h4>
      </section>
      <p>{about}</p>
        <button>View Listing</button>
    </article>
}

export default AreaCard;
