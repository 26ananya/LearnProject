import React from 'react';
//import './contact.css';
//import PropTypes from 'prop-types';

const Header=(props) =>{
    const {branding}=props;
  return (
    <nav className="nav navbar navbar-expand-sm navbar-dark 
    bg-danger mb-3 py-0">
      <div className="container">
      <a href="/" className="navbar-brand">{branding}</a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
        </ul>
      </div>

      </div>
      
      </nav>
    // <div>
    //   <h1>{branding}</h1>
    //   {/* <h1 style={headStyling}>{branding}</h1> */}
    // </div> 
  );
 
};

// const headStyling={
//   color:'red',
//   fontSize:'50px'
// }

Header.defaultProps={
    branding:"My App"
};

Header.propTypes={
    //branding:PropTypes.string.isRequired    -------No error because its expecting string and its also getting string.
   // branding:PropTypes.object.isRequired    -------Error because its expecting object but it is getting string.
}
export default Header;
