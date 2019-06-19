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
import IndexPresentation from './../components/indexPresentation.jsx';
import NewProducts from './../components/NewProducts.jsx';
import BestSold from './../components/BestSold.jsx';
import PromotionalProducts from './../components/PromotionalProducts.jsx';

import {Carousel} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';


class Index extends React.Component{
  render(){
  return (

    <div className="Register">
    <div className="contentWrap">
    <Navbar />
    <AnimatedGradient />
    <IndexPresentation />
    <NewProducts />
    <BestSold />
    <PromotionalProducts />
    </div>
    <Footer />

    </div>
  );
}
}

export default Index;
