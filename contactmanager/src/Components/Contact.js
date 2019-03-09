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
state={};

onShowClick=()=>{

};
  render() {
    
    const {contact}=this.props;
    return (
      
      <div className="card card-body mb-3">
        <h4>{contact.name}
        <i onClick={this.onShowClick} className="fas fa-sort-down"/>
        </h4>
        <ul className="list-group">
          <li className="list-group-item">
            email: {contact.email}
          </li>
          <li className="list-group-item">Phone: {contact.phone}</li>
        </ul>
       
      </div>
    );
  }
};
 
//propTypes ---used for validation of the props
// Contact.propTypes={
//     name:PropTypes.string.isRequired,
//     email:PropTypes.string.isRequired,
//     phoneNo:PropTypes.string.isRequired
// };
Contact.propTypes={
  contact:PropTypes.object.isRequired
 
};


//---we can write the above propTypes inside the class as well  
export default Contact;
