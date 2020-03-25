import React from 'react';
import { Link } from "react-router-dom";
import './ListingCard.scss';

function ListingCard({name, id, areaID}) {
  return <article className="listing-card">
    <section>
      <h1>{name}</h1>
      <section>
        <Link to={"/areas/" + areaID + "/listings/" + id}>
          <button>View Listing</button>
        </Link>
        <button>Add to Favorite</button>
      </section>
    </section>
    <section>
      <img className="listing-img" src= {`/images/${id}_a.jpg`} />
    </section>
  </article>
}

export default ListingCard;
