import React, { Component } from "react";
import PropTypes from 'prop-types';

class Contact extends Component {
   
  render() {
    const propTypes={
        name:PropTypes.object.isRequired,
        email:PropTypes.string.isRequired,
        phoneNo:PropTypes.string.isRequired
    }
      const {name,email,phoneNo}=this.props;
    return (
      <div>
        <h4>{name}</h4>
          <ul>
            <li>{email}</li>
            <li>{phoneNo}</li>
          </ul>
       
      </div>
    );
  }
};
 
//propTypes ---used for validation of the props
// Contact.propTypes={
//     name:PropTypes.object.isRequired,
//     email:PropTypes.string.isRequired,
//     phoneNo:PropTypes.string.isRequired
// };

//---we can write the above propTypes inside the class as well  
export default Contact;
