import {
  CHANGE_PASSWORD_REQUESTING, 
  CHANGE_PASSWORD_STATE,
  CHANGE_PASSWORD_CUR_HIDDEN,
  CHANGE_PASSWORD_HIDDEN,
  CHANGE_PASSWORD_RE_HIDDEN,
  CHANGE_PASSWORD_FORM_ERRORS,
  CHANGE_PASSWORD_CUR_PASSWORD_VALID,
  CHANGE_PASSWORD_PASSWORD_VALID,
  CHANGE_PASSWORD_RE_PASSWORD_VALID,
  CHANGE_PASSWORD_FORM_VALID,
  CHANGE_PASSWORD_CLOSE_ERROR_MODAL,
  CHANGE_PASSWORD_CLOSE_SUCCESS_MODAL,

} from './constants';

export const requestChangePassword = ({ currentPassword, newPassword, confirmNewPassword }) => {
  return {
    type: CHANGE_PASSWORD_REQUESTING,
    currentPassword,
    newPassword,
    confirmNewPassword
  };
};

export const stateChangePassword = () => {
  return {
    type: CHANGE_PASSWORD_STATE,
  };
};

export const showCurPassword = () => {
  return {
    type: CHANGE_PASSWORD_CUR_HIDDEN
  };
};

export const showPassword = () => {
  return {
    type: CHANGE_PASSWORD_HIDDEN
  };
};

export const showRePassword = () => {
  return {
    type: CHANGE_PASSWORD_RE_HIDDEN
  };
};

export const getFormErrors = (data) => {
  return {
    type: CHANGE_PASSWORD_FORM_ERRORS,
    data
  };
};

export const getCurPasswordValid = (data) => {
  return {
    type: CHANGE_PASSWORD_CUR_PASSWORD_VALID,
    data
  };
};

export const getPasswordValid = (data) => {
  return {
    type: CHANGE_PASSWORD_PASSWORD_VALID,
    data
  };
};

export const getRePasswordValid = (data) => {
  return {
    type: CHANGE_PASSWORD_RE_PASSWORD_VALID,
    data
  };
};

export const getFormValid = () => {
  return {
    type: CHANGE_PASSWORD_FORM_VALID
  };
};

export const closeModalError = () => {
  return {
    type: CHANGE_PASSWORD_CLOSE_ERROR_MODAL
  };
};

export const closeModalSuccess = () => {
  return {
    type: CHANGE_PASSWORD_CLOSE_SUCCESS_MODAL
  };
};