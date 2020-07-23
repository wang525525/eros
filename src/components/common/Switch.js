import React from 'react';
import PropTypes from 'prop-types';

const SwitchButton =  ({ customContainer,  outerClass, switchButtonID, inputClass, helperClass, onChange, title, disabled, ...rest }) => {
  return (
    customContainer  
    ?  customContainer
    : ( <span className={outerClass}>
        <input id={switchButtonID} className={inputClass} type="checkbox" {...rest} onChange={(e) => onChange(e)} disabled={disabled} />
        <label htmlFor={switchButtonID} className={helperClass} title={title} style={{margin: "0px"}}></label>
      </span> )
  );
}

SwitchButton.propTypes = {
  outerClass: PropTypes.string,
  switchButtonID: PropTypes.any.isRequired,
  inputClass: PropTypes.string,
  helperClass: PropTypes.string,
  onChange: PropTypes.func,
  title: PropTypes.any,
  disabled: PropTypes.bool
} 

SwitchButton.defaultProps = {
  outerClass: "padding-bt-5 padding-tp-5 padding-lt-10 pull-left",
  switchButtonID: "reactSwitchButtonID",
  inputClass: "ts-input",
  helperClass: "ts-helper",
  onChange: () => {},
  title: "",
  disabled: false
};

export default SwitchButton;