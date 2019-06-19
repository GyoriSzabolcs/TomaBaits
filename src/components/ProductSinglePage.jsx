import React from 'react';
import logo from './../logo.svg';
import img1 from './../images/img1Placeholder.jpg'
import img2 from './../images/img2Placeholder.jpg'
import img3 from './../images/img3Placeholder.jpg'
import productPlaceholder from './../images/productSinglePlaceholder.jpg'
import {Link} from 'react-router-dom';

import Navbar from './../components/Navbar.js';
import Footer from './../components/Footer.js';
import AnimatedGradient from './../components/AnimatedGradient.jsx';
import LoginForm from './../components/LoginForm.jsx';
import ProductSingleComponent from './../components/ProductSingleComponent.jsx';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {Image, Col, Row, Container,Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faUser} from '@fortawesome/free-solid-svg-icons';

class ProductSinglePage extends React.Component{
  render(){
  return (
    <div className="ProductSinglePage">
      <div className="productSingleImage">
        <Image src={productPlaceholder} fluid />
      </div>
      <p>Aici ceva text despre produs, de exemplu ingrediente, mod de preparare, informatii generale, la ce se foloseste, cum se foloseste. Restul textului e aici doar sa ocupe loc, consectetur adipiscing elit. Donec urna urna, vehicula ac rhoncus vulputate, consequat vel nunc. Aenean et lectus feugiat, pulvinar metus quis, consectetur tortor. Aenean condimentum rhoncus lorem, vel convallis dui euismod ac. Fusce vel eleifend leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam semper turpis ut ligula ornare, id blandit nisl ultrices. Morbi sit amet eleifend mi, sit amet sollicitudin felis. Duis enim diam, semper in diam nec, varius placerat sapien.

Nullam in enim enim. Duis mi elit, finibus ut leo ut, vestibulum tempus diam. Sed imperdiet fermentum vehicula. Cras viverra, odio a feugiat faucibus, sem libero dapibus lectus, et condimentum justo nunc eu dolor. Phasellus sed enim interdum, euismod ipsum ornare, bibendum metus. Proin interdum orci eget sagittis gravida. Maecenas id facilisis tortor. Etiam ultrices tempus ipsum et maximus. Suspendisse tempus mollis pharetra. Nulla dignissim massa ac egestas finibus.
</p>
<h4>Price: 20$ <span style={{textDecoration: 'line-through' }}>35$</span></h4>
<h4> Rating: 4.5/5</h4>
<br />
<Button variant="primary">Add to cart</Button>
    </div>
  );
}
}

export default ProductSinglePage;
