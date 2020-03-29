import React from 'react';
import Nav from "../Nav/Nav";
import './FavoriteContainer.scss';
import ListingCard from '../ListingCard/ListingCard';

class FavoriteContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      favorites: []
    }
  }

  componentDidMount() {
    this.fetchSavedFavorites();
    this.fetchListingData();
  }

  componentDidUpdate() {
    this.updateSavedFavorites();
  }

  fetchSavedFavorites = () => {
     if (window.localStorage.getItem("listingFavorites")) {
       const favorites = JSON.parse(window.localStorage.getItem("listingFavorites"));
       this.setState({favorites: favorites});
     };
  }

  fetchListingData = () => {
    const favorites = JSON.parse(window.localStorage.getItem("listingFavorites"));
    const promises = favorites.map(listingID => {
      return fetch('http://localhost:3001/api/v1/listings/' + listingID)
      .then(res => res.json())
      .then(data => {
        return {listingID: listingID,
          areaID: data.area_id,
          name: data.name}
      })
    })
    Promise.all(promises).then(listings => this.setState({listings}));
  }

  updateSavedFavorites = () => {
    const favorites = JSON.stringify(this.state.favorites);
    window.localStorage.setItem("listingFavorites", favorites);
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
    <Nav user={this.props.user} />
    <h1>Favorite Listings</h1>
      <section className="favorites-container">
        {this.checkForFavoriteListings()}
      </section>
    </main>
  }
}

export default FavoriteContainer;
