import React from 'react';
import './../layout.css';
import './../hover.css'
import 'semantic-ui-react'
import logo from './../images/placeholderLogo.png';
import {Link} from 'react-router-dom';
import {InputGroup, FormControl, Form, Button} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';

class RegisterForm extends React.Component {
  render(){
  return (
    <div className="registerBody">
    <h1 className="formTitle">Register</h1>

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

        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email Address:</Form.Label>
        <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose an Email Address.
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

        <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password:</Form.Label>
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
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            required
            label="Do you want to subscribe to our newsletter?"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="registerButton">
          Submit
        </Button>
      </Form>
      <div className="underForm">
      <p>Or log in with one of the following:</p>
        <Link to="/Register">Facebook  </Link>
        <Link to="/Register">  Google</Link>
        <hr />
      <p>Or if you already have an account log in here:</p>
      <Link to="/Login">Log In</Link>
      </div>
    </div>
  );
}
}

export default RegisterForm;
