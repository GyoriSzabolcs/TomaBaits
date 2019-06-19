import React from 'react';
import logo from './../logo.svg';
import img1 from './../images/img1Placeholder.jpg'
import img2 from './../images/img2Placeholder.jpg'
import img3 from './../images/img3Placeholder.jpg'
import productPlaceholder from './../images/productPlaceholder.jpg'
import {Link} from 'react-router-dom';

import Navbar from './../components/Navbar.js';
import Footer from './../components/Footer.js';
import AnimatedGradient from './../components/AnimatedGradient.jsx';
import LoginForm from './../components/LoginForm.jsx';
import ProductsList from './../components/ProductsList.jsx';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {Image, Col, Row, Container, Text} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faUser} from '@fortawesome/free-solid-svg-icons';

class NewProducts extends React.Component{
  render(){
  return (
    <div>
    <Link to="/ProductSingle">
    <div className="newProductContainer">
      <Image src={productPlaceholder} rounded fluid />
      <h4>Product Name</h4>
      <p>Short description of the product goes right here</p>
      <p>Price: 20$ <span style={{textDecoration: 'line-through' }}>35$</span></p>
    </div>
    </Link>
    </div>
  );
}
}

export default NewProducts;
