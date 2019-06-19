import React from 'react';
import './../layout.css';
import './../hover.css'
import 'semantic-ui-react'
import logo from './../images/placeholderLogo.png';
import {Link} from 'react-router-dom';
import {InputGroup, FormControl, Form, Button} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faLock, faSignInAlt} from '@fortawesome/free-solid-svg-icons';

class LoginForm extends React.Component {
  render(){
  return (
    <div className="registerBody">
    <h1 className="formTitle">Login</h1>

      <Form className="RegisterFormAll">
        <Form.Group controlId="formBasicUsername">
        <Form.Label>Username:</Form.Label>
        <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faUser}/></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Button variant="primary" type="submit" className="registerButton">
          Login
        </Button>
      </Form>
      <div className="underForm">
      <p>Or log in with one of the following:</p>
        <Link to="/Register">Facebook  </Link>
        <Link to="/Register">  Google</Link>
        <hr />
      <p>Or if you don't have an account:</p>
      <Link to="/Register">Register</Link>
      </div>
    </div>
  );
}
}

export default LoginForm;
