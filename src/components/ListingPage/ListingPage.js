import React from 'react';
import Nav from '../Nav/Nav';
import './ListingPage.scss';
import { fetchListingPageData } from '../../utils';

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
    fetchListingPageData(this.state.id).then(listingData => this.setState({listing: listingData}));
    this.checkFavorites();
  }

  componentDidUpdate() {
    this.updateSavedFavorites();
  }

  updateSavedFavorites = async () => {
    const favorites = await JSON.parse(window.localStorage.getItem("listingFavorites"));
    let updatedFavorites;

    if (this.state.isFavorite === true && !favorites.find(item => item === parseInt(this.state.id))) {
      updatedFavorites = [...favorites, parseInt(this.state.id)];
    } else {
      updatedFavorites = favorites.filter(item => parseInt(item) !== parseInt(this.state.id))
    }
    window.localStorage.setItem("listingFavorites", JSON.stringify(updatedFavorites))
  }

  checkFavorites() {
    const favorites = JSON.parse(window.localStorage.getItem("listingFavorites"));
    if (favorites.find(item => item === parseInt(this.state.id))) {
      this.setState({isFavorite: true});
    } else {
      this.setState({isFavorite: false});
    }
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
      <h1>Listing Details</h1>
      <section className="listing-page">
        <div className="top-container">
          <h2 className="listing-title">{name}</h2>
          <p className="address">{address.street}</p>
        </div>
        <img className="main-image" src={"/images/" + this.state.id + "_a.jpg"} alt={`Primary view of ${name}`} />
        <div className="secondary-images">
          <img className="secondary-image-a" src={"/images/" + this.state.id + "_b.jpg"} alt={`Secondary view of ${name}`} />
          <img className="secondary-image-b" src={"/images/" + this.state.id + "_c.jpg"} alt={`Tertiary view of ${name}`} />
        </div>
        <p className="listing-area-shortname">{area}</p>
        <p>{this.checkSuperhost(superhost)}</p>
        <p className="image-lower-bar">{"$" + cost_per_night + " per night / " + beds + " beds / " + baths + " baths"}</p>
        <h3 className="features-title">Features</h3>
        <ul className="features-list">
          {this.getFeatures()}
        </ul>
        <button className="favorite-button-toggle" id={this.state.id} onClick={() => this.toggleFavorite()}>
          <img className="favorite-icon" src= {`/images/star-${this.displayFavoriteIcon()}.svg`} alt="Favorite Listing"/>
        </button>
      </section>
    </main>
  }
}

export default ListingPage;
