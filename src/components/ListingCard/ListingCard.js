import React from 'react';
import { Link } from "react-router-dom";
import './ListingCard.scss';

function ListingCard({name, id, areaID}) {
  return <article className="listing-card">
    <section>
      <h1>{name}</h1>
      <section>
        <button className="favorite-button-toggle">
          <img className="favorite-icon" src= {`/images/star.svg`} />
        </button>
        <Link to={"/areas/" + areaID + "/listings/" + id}>
        <button>View Listing</button>
        </Link>
      </section>
    </section>
    <section>
      <img className="listing-img" src= {`/images/${id}_a.jpg`} />
    </section>
  </article>
}

export default ListingCard;
