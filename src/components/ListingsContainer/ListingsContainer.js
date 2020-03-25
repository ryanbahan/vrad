import React from 'react';
import ListingCard from '../ListingCard/ListingCard';
import Nav from '../Nav/Nav';
import './ListingsContainer.scss';

class ListingsContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      listings: []
    }
  }

  fetchListingData = () => {
    fetch('http://localhost:3001/api/v1/areas/' + 590)
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

  componentDidMount = () => {
    this.fetchListingData();
  }

  listingCardDisplay = () => {
    return this.state.listings.map(listing => {
      return <ListingCard
      id={listing.listingID}
      key={listing.listingID}
      name={listing.name}
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
