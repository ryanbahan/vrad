import React from 'react';
import Nav from "../Nav/Nav";
import './FavoriteContainer.scss';
import ListingCard from '../ListingCard/ListingCard';
import { fetchFavoriteListingData, fetchSavedFavorites, updateSavedFavorites } from '../../utils';
import PropTypes from 'prop-types';

class FavoriteContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      favorites: []
    }
  }

  componentDidMount() {
    const favorites = fetchSavedFavorites();
    this.setState({favorites: favorites});
    fetchFavoriteListingData().then(listings => this.setState({listings}));
  }

  componentDidUpdate() {
    updateSavedFavorites();
  }

  toggleFavorite = (id) => {
    if (this.state.favorites.find(item => item === id)) {
      this.updateFavoriteCards(id);
    } else {
      this.setState({favorites: [...this.state.favorites, id]})
    }
  }

  updateFavoriteCards = (updateID) => {
    const updatedItems = this.state.favorites.filter(item => item !== updateID);
    this.setState({favorites: updatedItems})
    const updatedListings = this.state.listings.filter(listing => listing.listingID !== updateID);
    this.setState({listings: updatedListings})
  }

  checkFavorite = (id) => {
    if (this.state.favorites.find(item => item === id)) {
      return "active";
    } else {
      return "inactive";
    }
  }

  favoriteCardDisplay = () => {
    return this.state.listings.map(listing => {
      return <ListingCard
      areaID={listing.areaID}
      id={listing.listingID}
      key={listing.listingID}
      name={listing.name}
      toggleFavorite={this.toggleFavorite}
      isFavorite={this.checkFavorite(listing.listingID)}
      />
    })
  }

  checkForFavoriteListings = () => {
    if(this.state.favorites.length === 0) {
      return <section>There are no Favorite Listings</section>
    } else {
      return this.favoriteCardDisplay();
    }
  }

  render() {
    return<main>
    <Nav userInfo={this.props.userInfo}/>
    <h1>Favorite Listings</h1>
      <section className="favorites-container">
        {this.checkForFavoriteListings()}
      </section>
    </main>
  }
}

FavoriteContainer.propTypes = {
  listings: PropTypes.array,
  favorites: PropTypes.array
}

export default FavoriteContainer;
