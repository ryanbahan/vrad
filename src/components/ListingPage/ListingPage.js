import React from 'react';
import Nav from '../Nav/Nav';
import './ListingPage.scss';
import { fetchListingPageData, checkFavorites } from '../../utils';
import PropTypes from 'prop-types';

class ListingPage extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      listing: {
        address: {
          street: ""
        },
        details: {
          features: []
        }
      },
      id: match.params.id,
      isFavorite: null
    }
  }

  componentDidMount() {
    const isFavorite = checkFavorites(this.state.id);
    fetchListingPageData(this.state.id).then(listingData => this.setState({listing: listingData}));
    this.setState({isFavorite: isFavorite});
  }

  componentDidUpdate() {
    this.updateSavedFavorites();
  }

  updateSavedFavorites = async () => {
    const favorites = await JSON.parse(window.localStorage.getItem("listingFavorites"));
    let updatedFavorites;

    if (this.state.isFavorite === true && !favorites.find(item => item === parseInt(this.state.id))) {
      updatedFavorites = [...favorites, parseInt(this.state.id)];
    } else if (favorites !== null) {
      updatedFavorites = favorites.filter(item => parseInt(item) !== parseInt(this.state.id))
    }
    window.localStorage.setItem("listingFavorites", JSON.stringify(updatedFavorites))
  }

  displayFavoriteIcon() {
    if (this.state.isFavorite) {
      return 'active';
    } else {
      return 'inactive';
    }
  }

  getFeatures = () => {
    const features = this.state.listing.details.features;
    return features.map(feature => {
      return <li key={feature}>{feature}</li>
    })
  }

  toggleFavorite = () => {
    this.setState({isFavorite: !this.state.isFavorite});
  }

  checkSuperhost = (superhost) => {
    if (superhost) {
      return "Superhost"
    } else {
      return null;
    }
  }

  render() {
    const { name, area, address } = this.state.listing;
    const { baths, beds, cost_per_night, superhost } = this.state.listing.details;

    return <main>
      <Nav userInfo={this.props.userInfo}/>
      <section className="listing-page">
        <div className="top-container">
          <h2 className="listing-title">{name}</h2>
          <div className="top-inner-wrapper">
            <p className="address">{address.street}</p>
            <button className="favorite-button-toggle" id={this.state.id} onClick={() => this.toggleFavorite()}>
              <img className="favorite-icon" src= {`/images/star-${this.displayFavoriteIcon()}.svg`} alt="Favorite Listing"/>
            </button>
          </div>
        </div>
        <div className="images-wrapper">
          <img className="main-image" src={"/images/" + this.state.id + "_a.jpg"} alt={`Primary view of ${name}`} />
          <div className="secondary-images">
            <img className="secondary-image-a" src={"/images/" + this.state.id + "_b.jpg"} alt={`Secondary view of ${name}`} />
            <img className="secondary-image-b" src={"/images/" + this.state.id + "_c.jpg"} alt={`Tertiary view of ${name}`} />
          </div>
        </div>
        <div className="bottom-flex">
          <p className="image-lower-bar">{"$" + cost_per_night + " per night / " + beds + " beds / " + baths + " baths"}</p>
          <p className="superhost">{this.checkSuperhost(superhost)}</p>
        </div>
        <h3 className="features-title">Features</h3>
        <ul className="features-list">
          {this.getFeatures()}
        </ul>
      </section>
    </main>
  }
}

ListingPage.propTypes = {
  userInfo: PropTypes.object
}

export default ListingPage;
