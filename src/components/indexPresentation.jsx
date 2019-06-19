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
import CaraouselComponent from './../components/Carousel.jsx';
import IndexReviews from './../components/indexReviews.jsx';

import {Carousel} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';

class IndexPresentation extends React.Component{
  render(){
  return (
    <div className="containerPresentation">
    <div className="carouselContainer">
      <CaraouselComponent />
    </div>
    <div className="reviewContainerIndex">
    <IndexReviews />
    </div>
    </div>
  );
}
}

export default IndexPresentation;
