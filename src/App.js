import {Route,Redirect, Switch} from "react-router-dom";
import Movies from "./components/movies";
import Customers from './components/customers'
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import React, { Component } from "react";
import NavBar from './components/navbar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegistrationForm from './components/registrationForm';

import './App.css';

class App extends Component {
  render () {
    return (
      <React.Fragment>
       <NavBar/>
      <main className="container">
      <Switch>
        <Route path="/login" component={LoginForm}/>
         <Route path="/registration" component={RegistrationForm}/>
        <Route path="/movies/:id" component={MovieForm}/>
       <Route path="/movies" component={Movies}></Route>
       <Route path="/movies/new" component={MovieForm}/>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/notFound" component={NotFound}></Route>
      <Redirect from="/" exact to="/movies"/>
      <Redirect to="/notFound"/>
      </Switch>
     
      </main>
      </React.Fragment> 

    );//project commit 
  }
}

export default App;
