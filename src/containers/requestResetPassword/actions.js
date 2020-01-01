import {
  REQUEST_RESET_PASSWORD_REQUESTING, 
  REQUEST_RESET_PASSWORD_FORM_ERRORS,
  REQUEST_RESET_PASSWORD_EMAIL_VALID,
  REQUEST_RESET_PASSWORD_FORM_VALID,
  REQUEST_RESET_PASSWORD_CLOSE_ERROR_MODAL,
  REQUEST_RESET_PASSWORD_CLOSE_SUCCESS_MODAL,
} from './constants';

export const requestRequestResetPassword = ({ email }) => {
  return {
    type: REQUEST_RESET_PASSWORD_REQUESTING,
    email,
  };
};

export const getFormErrors = (data) => {
  return {
    type: REQUEST_RESET_PASSWORD_FORM_ERRORS,
    data
  };
};

export const getEmailValid = (data) => {
  return {
    type: REQUEST_RESET_PASSWORD_EMAIL_VALID,
    data
  };
};

export const getFormValid = () => {
  return {
    type: REQUEST_RESET_PASSWORD_FORM_VALID
  };
};

export const closeModalError = () => {
  return {
    type: REQUEST_RESET_PASSWORD_CLOSE_ERROR_MODAL
  };
};

export const closeModalSuccess = () => {
  return {
    type: REQUEST_RESET_PASSWORD_CLOSE_SUCCESS_MODAL
  };
};
