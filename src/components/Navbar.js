import React from 'react';
import './../layout.css';
import './../hover.css'
import logo from './../images/placeholderLogo.png';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  render(){
  return (
    <div id="navbar" className="Navbar">
      <img  className ="LogoImage" src={logo} alt="logo" />
      <div className="navbarLinks">
        <Link className="Link" to="/"><span className="hvr-underline-from-left">Home</span></Link>
        <Link className="Link hvr-underline-from-left" to="/Products">Products</Link>
        <Link className="Link hvr-underline-from-left" to="/AboutUs">About Us</Link>
        <Link className="Link hvr-underline-from-left" to="/ContanctUs">Contact Us</Link>
      </div>
    </div>
  );
}
}

export default Navbar;
