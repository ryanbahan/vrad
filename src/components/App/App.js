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
              path='/'
              exact
              render={() => {return <Login handleSubmit={this.handleSubmit}/>}}
              />
            <Route
              exact
              path="/areas"
              render={() => {return <AreasContainer user={this.state.userName}/>}}
            />
            <Route
              exact
              path="/areas/:id"
              component={ListingsContainer}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
