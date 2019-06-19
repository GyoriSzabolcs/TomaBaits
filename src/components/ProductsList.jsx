import React from 'react';
import logo from './../logo.svg';
import img1 from './../images/img1Placeholder.jpg'
import img2 from './../images/img2Placeholder.jpg'
import img3 from './../images/img3Placeholder.jpg'
import {Link} from 'react-router-dom';

import Navbar from './../components/Navbar.js';
import Footer from './../components/Footer.js';
import AnimatedGradient from './../components/AnimatedGradient.jsx';
import LoginForm from './../components/LoginForm.jsx';
import ProductSingleComponent from './../components/ProductSingleComponent.jsx';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {Image, Col, Row, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faUser} from '@fortawesome/free-solid-svg-icons';

class ProductsList extends React.Component{
  render(){
  return (
    <div className="newProductsList">
      <Row>
        <Col>
          <ProductSingleComponent />
        </Col>
        <Col>
          <ProductSingleComponent />
        </Col>
        <Col>
          <ProductSingleComponent />
        </Col>
        <Col>
          <ProductSingleComponent />
        </Col>
      </Row>
    </div>
  );
}
}

export default ProductsList;
