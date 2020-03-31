import React from 'react';
import { Link } from "react-router-dom";
import './ListingCard.scss';
import PropTypes from 'prop-types';

function ListingCard({name, id, areaID, toggleFavorite, isFavorite}) {
  return <article className="listing-card">
    <section>
      <h1>{name}</h1>
      <section>
        <button className={`favorite-button-${isFavorite}`} data-testid="listing-card-favorite-button" id={id} onClick={() => toggleFavorite(id)}>
          <img className="favorite-icon" src= {`/images/star-${isFavorite}.svg`} alt="Favorite listing"/>
        </button>
        <Link to={"/areas/" + areaID + "/listings/" + id} data-testid={"link"}>
        <button>View Listing</button>
        </Link>
      </section>
    </section>
    <section>
      <img className="listing-img" src= {`/images/${id}_a.jpg`} alt={name}/>
    </section>
  </article>
}

ListingCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  areaID: PropTypes.string,
  toggleFavorite: PropTypes.func,
  isFavorite: PropTypes.string
}

export default ListingCard;
