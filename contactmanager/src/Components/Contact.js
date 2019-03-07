import React, { Component } from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './contact.css';
//import Contacts from './Contacts';

class Contact extends Component {
//    static propTypes={
//     name:PropTypes.object.isRequired,
//     email:PropTypes.string.isRequired,
//     phoneNo:PropTypes.string.isRequired
// }
  render() {
    
    const {name,email,phoneNo}=this.props;
    return (
      
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">
            email: {email}
          </li>
          <li className="list-group-item">Phone: {phoneNo}</li>
        </ul>
       
      </div>
    );
  }
};
 
//propTypes ---used for validation of the props
Contact.propTypes={
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    phoneNo:PropTypes.string.isRequired
};

//---we can write the above propTypes inside the class as well  
export default Contact;
