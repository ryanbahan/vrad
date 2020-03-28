import React from 'react';
import Nav from "../Nav/Nav";
import './FavoriteContainer.scss';

class FavoriteContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    this.fetchListingData();
  }

  fetchListingData = () => {
    const favorites = JSON.parse(window.localStorage.getItem("listingFavorites"));
    const promises = favorites.map(listingID => {
      return fetch('http://localhost:3001/api/v1/listings/' + listingID)
      .then(res => res.json())
      .then(data => {
        return {id: listingID,
          areaID: data.area_id,
          name: data.name}
      })
    })
    Promise.all(promises).then(listings => this.setState({listings}));
  }


  render() {
    return<main>
    <Nav user={this.props.user} />
    <h1>Favorite Listing</h1>
      <section>
        lll
      </section>
    </main>
  }
}

export default FavoriteContainer;
