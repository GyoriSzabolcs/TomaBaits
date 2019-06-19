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
import PromotionalProducts from './../components/PromotionalProducts.jsx';
import ProductSinglePage from './../components/ProductSinglePage.jsx';
import AddReviewToProduct from './../components/AddReviewToProduct.jsx';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {Image, Col, Row, Container, Text} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faUser} from '@fortawesome/free-solid-svg-icons';

class ProductSingle extends React.Component{
  render(){
  return (
    <div className="Register">
    <div className="contentWrap">
    <Navbar />
    <AnimatedGradient text="Product Name"/>
    <ProductSinglePage />
    <AddReviewToProduct />
    <PromotionalProducts />
    </div>
    <Footer />
    </div>
  );
}
}

export default ProductSingle;
