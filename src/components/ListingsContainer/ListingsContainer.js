import React from 'react';
import ListingCard from '../ListingCard/ListingCard';
import Nav from '../Nav/Nav';
import './ListingsContainer.scss';

class ListingsContainer extends React.Component {
  constructor({ match, location }) {
    super();
    this.state = {
      listings: [],
      favorites: []
    }
    this.areaID = match.params.id
  }

  componentDidMount() {
    this.fetchListingData();
    this.fetchSavedFavorites();
  }

  componentDidUpdate() {
    this.updateSavedFavorites();
  }

  fetchListingData = () => {
    fetch('http://localhost:3001/api/v1/areas/' + this.areaID)
     .then(res => res.json())
     .then(data => {
      const promises = data.listings.map(listing => {
        return fetch('http://localhost:3001'+ listing)
              .then(res => res.json())
              .then(info => {
                return {name: info.name,
                  listingID: info.listing_id
                  };
              })
      })
      Promise.all(promises).then(listings => this.setState({listings}));
    })
  }

  fetchSavedFavorites = () => {
     if (window.localStorage.getItem("listingFavorites")) {
       const favorites = JSON.parse(window.localStorage.getItem("listingFavorites"));
       this.setState({favorites: favorites});
     };
  }

  updateSavedFavorites = () => {
    const favorites = JSON.stringify(this.state.favorites);
    window.localStorage.setItem("listingFavorites", favorites);
  }

  toggleFavorite = (id) => {
    if (this.state.favorites.find(item => item === id)) {
      const updatedItems = this.state.favorites.filter(item => item !== id);
      this.setState({favorites: updatedItems})
    } else {
      this.setState({favorites: [...this.state.favorites, id]})
    }
  }

  checkFavorite = (id) => {
    if (this.state.favorites.find(item => item === id)) {
      return "active";
    } else {
      return "inactive";
    }
  }

  listingCardDisplay = () => {
    const areaID = this.props.match.params.id;

    return this.state.listings.map(listing => {
      return <ListingCard
      areaID={areaID}
      id={listing.listingID}
      key={listing.listingID}
      name={listing.name}
      toggleFavorite={this.toggleFavorite}
      isFavorite={this.checkFavorite(listing.listingID)}
      />
    })
  }

  render() {
    return <main>
    <Nav user={this.props.user} />
    <h1>Choose Your Listing</h1>
      <section className="listings-container">
        {this.listingCardDisplay()}
      </section>
    </main>
  }
}

export default ListingsContainer;
