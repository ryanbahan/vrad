import React from 'react';
import Login from '../Login/Login';
import AreasContainer from '../AreasContainer/AreasContainer';
import ListingsContainer from '../ListingsContainer/ListingsContainer';
import ListingPage from '../ListingPage/ListingPage';
import Nav from '../Nav/Nav';
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

    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/areas" component={AreasContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
