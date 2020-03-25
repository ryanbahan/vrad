import React from 'react';
import './ListingPage.scss';

class ListingPage extends React.Component {
  constructor({ match, location }) {
    super();
    this.state = {
      listing: null,
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

  render() {
    return <main className="listing-page">test</main>
  }
}

export default ListingPage;
