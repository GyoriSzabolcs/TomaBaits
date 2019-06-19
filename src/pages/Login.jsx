import React from 'react';
import logo from './../logo.svg';

import Navbar from './../components/Navbar.js';
import Footer from './../components/Footer.js';
import AnimatedGradient from './../components/AnimatedGradient.jsx';
import LoginForm from './../components/LoginForm.jsx';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers, faSignInAlt} from '@fortawesome/free-solid-svg-icons';

class Login extends React.Component {
  render(){

    var registerText = 'Register';

    return (
      <div className="Register">
      <div className="contentWrap">
      <Navbar />
      <AnimatedGradient icon={faSignInAlt} />
      <LoginForm />
      </div>
      <Footer />
      </div>
    );
}
}

export default Login;
