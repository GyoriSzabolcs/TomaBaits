import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

import Index from './pages/Index.jsx';
import Register from './pages/Register.jsx'

class App extends React.Component {
    render(){
      return (
      <Router>
        <Route exact path="/" component={Index} />
        <Route exact path="/Register" component={Register} />
      </Router>
    );
  }
}

export default App;
