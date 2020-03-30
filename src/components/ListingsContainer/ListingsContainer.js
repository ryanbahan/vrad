import React from 'react';
import ListingCard from '../ListingCard/ListingCard';
import Nav from '../Nav/Nav';
import './ListingsContainer.scss';
import { fetchListingData, fetchSavedFavorites, updateSavedFavorites } from '../../utils';
import PropTypes from 'prop-types';

class ListingsContainer extends React.Component {
  constructor({ match, location }) {
    super();
    this.state = {
      listings: [],
      favorites: [],
      areaID: match.params.id
    }
  }

  componentDidMount() {
    fetchListingData(this.state.areaID).then(listings => this.setState({listings}));
    const favorites = fetchSavedFavorites();
    this.setState({favorites: favorites});
  }

  componentDidUpdate() {
    updateSavedFavorites(this.state.favorites);
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
    const areaID = this.state.areaID;

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
    <Nav userInfo={this.props.userInfo} />
    <h1>Choose Your Listing</h1>
      <section className="listings-container">
        {this.listingCardDisplay()}
      </section>
    </main>
  }
}

ListingsContainer.propTypes = {
  listings: PropTypes.array,
  favorites: PropTypes.array,
  areaID: PropTypes.string
}

export default ListingsContainer;
