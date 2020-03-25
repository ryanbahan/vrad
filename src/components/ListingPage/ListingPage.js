import React from 'react';
import './ListingPage.scss';

class ListingPage extends React.Component {
  constructor({ match, location }) {
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
      id: match.params.id
    }
  }

  fetchListingPageData = () => {
    fetch("http://localhost:3001/api/v1/listings/" + this.state.id)
    .then(res => res.json())
    .then(listingData => this.setState({listing: listingData}))
  }

  componentDidMount() {
    this.fetchListingPageData();
  }

  getFeatures = () => {
    const features = this.state.listing.details.features;
    return features.map(feature => {
      return <li key={feature}>{feature}</li>
    })
  }

  render() {
    const { name, area, address } = this.state.listing;
    const { baths, beds, cost_per_night, superhost } = this.state.listing.details;

    return <main className="listing-page">
      <div className="top-container">
        <h2 className="listing-title">{name}</h2>
        <p className="address">{address.street}</p>
      </div>
      <img className="main-image" src={"/images/" + this.state.id + "_a.jpg"} />
      <div className="secondary-images">
        <img className="secondary-image-a" src={"/images/" + this.state.id + "_b.jpg"} />
        <img className="secondary-image-b" src={"/images/" + this.state.id + "_c.jpg"} />
      </div>
      <p className="listing-area-shortname">{area}</p>
      <p className="image-lower-bar">{"$" + cost_per_night + " per night / " + beds + " beds / " + baths + " baths"}</p>
      <h3 className="features-title">Features</h3>
      <ul className="features-list">
        {this.getFeatures()}
      </ul>
      <button type="button" className="favorite-button">Favorite</button>
    </main>
  }
}

export default ListingPage;
