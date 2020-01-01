import React from 'react';
import './styles.css';


export const FormErrors = ({formErrors}) =>
  <div className="formErrors form-warning">
      { formErrors
        ? <img className="warning-config" src="/images/warning.svg" alt="warning" />
        : ''
      }
    <span>{formErrors}</span>  
  </div>