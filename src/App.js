import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

import Index from './pages/Index.jsx';

import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import ProductSingle from './pages/ProductSingle.jsx';



class App extends React.Component {
    render(){
      return (
      <Router>
        <Route exact path="/" component={Index} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/ProductSingle" component={ProductSingle} />

      </Router>
    );
  }
}

export default App;
