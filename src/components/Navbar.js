import React from 'react';
import './../layout.css';
import './../hover.css'
import logo from './../images/placeholderLogo.png';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {

  render(){
  return (
    <div id="navbar" className="Navbar">
      <img  className ="LogoImage" src={logo} alt="logo" />
      <div className="navbarLinks">
        <Link className="Link hvr-underline-from-left" to="/" disabled={true}>Home</Link>
        <Link className="Link hvr-underline-from-left" to="/Products">Products</Link>
        <Link className="Link hvr-underline-from-left" to="/AboutUs">About Us</Link>
        <Link className="Link hvr-underline-from-left" to="/ContanctUs">Contact Us</Link>
        <Link className="Link hvr-underline-from-left" to="/Login">Login</Link>
        <Link className="Link hvr-underline-from-left" to="/Register">Register</Link>
      </div>
    </div>
  );
}
}

export default Navbar;
