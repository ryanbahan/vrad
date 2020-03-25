import React from 'react';
import Login from '../Login/Login';
import AreasContainer from '../AreasContainer/AreasContainer';
import ListingsContainer from '../ListingsContainer/ListingsContainer';
import ListingPage from '../ListingPage/ListingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: null
    }
  }

  handleSubmit = (name) => {
    this.setState({userName: name})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Login handleSubmit={this.handleSubmit}/>}
              />
            <Route
              exact
              path="/areas"
              render={() => <AreasContainer user={this.state.userName}/>}
            />
            <Route
              exact
              path="/areas/:id"
              render={(props) => <ListingsContainer user={this.state.userName} {...props}/>}
            />
            <Route
              exact
              path="/areas/:id/listings/:id"
              render={(props) => <ListingPage {...props}/>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
