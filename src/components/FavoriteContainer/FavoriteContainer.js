import React from 'react';
import Nav from "../Nav/Nav";
import './FavoriteContainer.scss';

class FavoriteContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      favorite: []
    }
  }

  render() {
    return<main>
    <Nav user={this.props.user} />
    <h1>Display Favorite Card Listing</h1>
    </main>
  }
}

export default FavoriteContainer;
