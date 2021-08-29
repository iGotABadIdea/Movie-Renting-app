import Movies from "./components/movies";
import Customers from './components/customers'
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import {Route,Redirect} from "react-router-dom";
import React, { Component } from "react";
import NavBar from './components/common/navbar';

import './App.css';

class App extends Component {
  render () {
    return (
      <main className="container">
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/notFound" component={NotFound}></Route>
      <Redirect from="/" to="/movies"/>
      </main>

    );
  }
}

export default App;
