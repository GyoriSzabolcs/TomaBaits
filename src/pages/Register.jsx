import React from 'react';
import logo from './../logo.svg';

import Navbar from './../components/Navbar.js';
import Footer from './../components/Footer.js';
import AnimatedGradient from './../components/AnimatedGradient.jsx';
import RegisterForm from './../components/RegisterForm.jsx';

import {faUsers, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Register extends React.Component {
  render(){

    var registerText = 'Register';

    return (
      <div className="Register">
      <div className="contentWrap">
      <Navbar />
      <AnimatedGradient icon={faUsers} />
      <RegisterForm />
      </div>
      <Footer />
      </div>
    );
}
}

export default Register;
