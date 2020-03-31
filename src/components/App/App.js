import React from 'react';
import Login from '../Login/Login';
import AreasContainer from '../AreasContainer/AreasContainer';
import ListingsContainer from '../ListingsContainer/ListingsContainer';
import ListingPage from '../ListingPage/ListingPage';
import FavoriteContainer from "../FavoriteContainer/FavoriteContainer";
import BadPath from '../BadPath/BadPath';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: null,
        email: null,
        accountType: null
      }
    }
  }

  handleSubmit = (userInfo) => {
    this.setState({userInfo})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Login handleSubmit={this.handleSubmit} />}
              />
            <Route
              exact
              path="/areas"
              render={(props) => <AreasContainer userInfo={this.state.userInfo} {...props} />}
            />
            <Route
              exact
              path="/areas/:id"
              render={(props) => <ListingsContainer userInfo={this.state.userInfo} {...props} />}
            />
            <Route
              exact
              path="/areas/:id/listings/:id"
              render={(props) => <ListingPage userInfo={this.state.userInfo} {...props} />}
            />
            <Route
              exact
              path='/favorites'
              render={(props) => <FavoriteContainer userInfo={this.state.userInfo} {...props} />}
              />
            <Route render={() => <BadPath />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
