import React from 'react';
import './ListingCard.scss';

function ListingCard(props) {
  return <article className="listing-card">
    <section>
      <h1>{props.name}</h1>
      <button>View Listing</button>
      <button>Add to Favorite</button>
    </section>
    <section>
      <img src= {`/images/${props.id}_a.jpg`} />
    </section>
  </article>
}

export default ListingCard;
