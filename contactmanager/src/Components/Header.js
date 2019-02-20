import React from 'react';
//import PropTypes from 'prop-types';

const Header=(props) =>{
    const {branding}=props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
 
};
Header.defaultProps={
    branding:"My App"
};

Header.propTypes={
    //branding:PropTypes.string.isRequired    -------No error because its expecting string and its also getting string.
   // branding:PropTypes.object.isRequired    -------Error because its expecting object but it is getting string.
}
export default Header;
