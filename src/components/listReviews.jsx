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

import {Image, Col, Row, Form, Text, Dropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faUser} from '@fortawesome/free-solid-svg-icons';

class ListReviews extends React.Component{
  render(){
  return (
    <div className="listReviews">
    <h2 className="newProductsTitle">Recenzii:</h2>
    <div className="reviewProductSingle">
    <h4>Prenume Nume</h4>
    <p>Scor: 4/5</p>
    <p>Text de la review aici</p>
    <hr />
    </div>
    <div className="reviewProductSingle">
    <h4>Prenume Nume</h4>
    <p>Scor: 5/5</p>
    <p>Text de la review aici</p>
    <hr />
    </div>
    <div className="reviewProductSingle">
    <h4>Prenume Nume</h4>
    <p>Scor: 4/5</p>
    <p>Text de la review aici</p>
    </div>
    </div>
  );
}
}

export default ListReviews;
