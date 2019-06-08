import React from 'react';
import logo from './../logo.svg';
import Navbar from './../components/Navbar.js';
import Footer from './../components/Footer.js';
import {Link} from 'react-router-dom';


class Index extends React.Component{
  render(){
  return (
    <div>
    <p>Index</p>
    <Link to="/Register">Register page</Link>
    </div>
  );
}
}

export default Index;
