import React from 'react';
import './../layout.css';
import './../hover.css'
import logo from './../images/placeholderLogo.png';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers, faSignInAlt} from '@fortawesome/free-solid-svg-icons';

class AnimatedGradient extends React.Component {
  render(){
    function Displayed(props){
      if(props.icon){
        return <FontAwesomeIcon icon={props.icon} />;
      }else {
        if(props.text){
          return <p>{props.text}</p>;
        }else {
          return <p>TomaBaits</p>;
        }
      }
    }

  return (
    <div className="gradient">

      <div className="iconImage">
        <Displayed icon={this.props.icon} text={this.props.text}/>
      </div>
    </div>
  );
}
}

export default AnimatedGradient;
