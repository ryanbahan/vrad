import React from 'react';
import Nav from "../Nav/Nav";
import './FavoriteContainer.scss';
import ListingCard from '../ListingCard/ListingCard';
import { fetchFavoriteListingData, updateSavedFavorites } from '../../utils';
import PropTypes from 'prop-types';

class FavoriteContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    fetchFavoriteListingData().then(listings => this.setState({listings: listings}));
  }

  componentDidUpdate() {
    updateSavedFavorites(this.state.listings.map(listing => listing.listingID));
  }

  updateFavoriteCards = (updateID) => {
    const updatedListings = this.state.listings.filter(listing => listing.listingID !== updateID);
    this.setState({listings: updatedListings})
  }

  favoriteCardDisplay = () => {
    return this.state.listings.map(listing => {
      return <ListingCard
      areaID={listing.areaID}
      id={listing.listingID}
      key={listing.listingID}
      name={listing.name}
      toggleFavorite={this.updateFavoriteCards}
      isFavorite={"active"}
      />
    })
  }

  checkForFavoriteListings = () => {
    if(this.state.listings.length === 0) {
      return <section>There are no Favorite Listings</section>
    } else {
      return this.favoriteCardDisplay();
    }
  }

  render() {
    return<main>
    <Nav userInfo={this.props.userInfo} />
    <h1>Favorite Listings</h1>
      <section className="favorites-container">
        {this.checkForFavoriteListings()}
      </section>
    </main>
  }
}

FavoriteContainer.propTypes = {
  userInfo: PropTypes.object
}

export default FavoriteContainer;
