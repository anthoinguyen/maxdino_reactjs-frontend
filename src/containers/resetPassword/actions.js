import {
  RESET_PASSWORD_REQUESTING, 
  RESET_PASSWORD_HIDDEN,
  RESET_PASSWORD_RE_HIDDEN,
  RESET_PASSWORD_FORM_ERRORS,
  RESET_PASSWORD_PASSWORD_VALID,
  RESET_PASSWORD_RE_PASSWORD_VALID,
  RESET_PASSWORD_FORM_VALID,
  RESET_PASSWORD_CLOSE_SUCCESS_MODAL,
  RESET_PASSWORD_CLOSE_ERROR_MODAL
} from './constants';

export const requestResetPassword = ({ token, newPassword, confirmNewPassword }) => {
  return {
    type: RESET_PASSWORD_REQUESTING,
    token,
    newPassword,
    confirmNewPassword
  };
};

export const showPassword = () => {
  return {
    type: RESET_PASSWORD_HIDDEN
  };
};

export const showRePassword = () => {
  return {
    type: RESET_PASSWORD_RE_HIDDEN
  };
};

export const getFormErrors = (data) => {
  return {
    type: RESET_PASSWORD_FORM_ERRORS,
    data
  };
};

export const getPasswordValid = (data) => {
  return {
    type: RESET_PASSWORD_PASSWORD_VALID,
    data
  };
};

export const getRePasswordValid = (data) => {
  return {
    type: RESET_PASSWORD_RE_PASSWORD_VALID,
    data
  };
};

export const getFormValid = () => {
  return {
    type: RESET_PASSWORD_FORM_VALID
  };
};

export const closeModalSuccess = () => {
  return {
    type: RESET_PASSWORD_CLOSE_SUCCESS_MODAL
  };
};

export const closeModalError = () => {
  return {
    type: RESET_PASSWORD_CLOSE_ERROR_MODAL
  };
};