import {
    SIGNUP_REQUESTING,
    SIGNUP_CHECKBOX,
    SIGNUP_HIDDEN,
    SIGNUP_RE_HIDDEN,
    SIGNUP_FORM_ERRORS,
    SIGNUP_NAME_VALID,
    SIGNUP_EMAIL_VALID,
    SIGNUP_PASSWORD_VALID,
    SIGNUP_RE_PASSWORD_VALID,
    SIGNUP_FORM_VALID,
    SIGNUP_CLOSE_ERROR_MODAL
  
  } from './constants'
  
  export function requestSignup({ name, email, password, retypePassword }) {
    return {
      type: SIGNUP_REQUESTING,
      name,
      email,
      password,
      retypePassword,
    }
  }
  export const checkBox = () => {
    return {
      type: SIGNUP_CHECKBOX
    };
  };
  
  export const showPassword = () => {
    return {
      type: SIGNUP_HIDDEN
    };
  };
  export const showRePassword = () => {
    return {
      type: SIGNUP_RE_HIDDEN
    };
  };
  
  export const getFormErrors = (data) => {
    return {
      type: SIGNUP_FORM_ERRORS,
      data
    };
  };
  
  export const getNameValid = (data) => {
    return {
      type: SIGNUP_NAME_VALID,
      data
    };
  };

  export const getEmailValid = (data) => {
    return {
      type: SIGNUP_EMAIL_VALID,
      data
    };
  };
  
  export const getPasswordValid = (data) => {
    return {
      type: SIGNUP_PASSWORD_VALID,
      data
    };
  };

  export const getRePasswordValid = (data) => {
    return {
      type: SIGNUP_RE_PASSWORD_VALID,
      data
    };
  };
  
  export const getFormValid = () => {
    return {
      type: SIGNUP_FORM_VALID
    };
  };

  export const closeModalError = () => {
    return {
      type: SIGNUP_CLOSE_ERROR_MODAL
    };
  };
  