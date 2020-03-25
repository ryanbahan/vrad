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

  render() {
    return <main>
    <Nav user={this.props.user} />
    <h1>Choose Your Destination</h1>
      <section className="listings-container">
        'cards go here'
      </section>
    </main>
  }

}

export default ListingsContainer;
