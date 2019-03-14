import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup=(props)=> {
  return (
   
      <div className="form-group">
                                  <label htmlFor={props.name}>{props.label}</label>
                                  <input type={props.type} name={props.name}
                                  className ={classnames('form-control form-control-lg',
                                  {'is-invalid':props.error})}
                                  placeholder={props.placeholder}
                                  value={props.value}
                                  onChange={props.onChange}
                                  error={props.error}/>
                                  {console.log(props.error)}
                                 {props.error && <div className="invalid-feedback">{props.error}</div>} 
                              </div>
                             
  
  )
};

TextInputGroup.propTypes={
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    error:PropTypes.string
}
TextInputGroup.defaultProps={
    type:'text'
}

export default TextInputGroup;
