import {
  CREATE_USER_REQUESTING, 
  CREATE_USER_HIDDEN,
  CREATE_USER_RE_HIDDEN,
  CREATE_USER_FORM_ERRORS,
  CREATE_USER_NAME_VALID,
  CREATE_USER_PASSWORD_VALID,
  CREATE_USER_RE_PASSWORD_VALID,
  CREATE_USER_FORM_VALID,
  CREATE_USER_CLOSE_ERROR_MODAL,
  CREATE_USER_CLOSE_SUCCESS_MODAL,
} from './constants';

export const requestCreateUser = ({ token, name, newPassword, confirmNewPassword }) => {
  return {
    type: CREATE_USER_REQUESTING,
    token,
    name,
    newPassword,
    confirmNewPassword
  };
};

export const showPassword = () => {
  return {
    type: CREATE_USER_HIDDEN
  };
};

export const showRePassword = () => {
  return {
    type: CREATE_USER_RE_HIDDEN
  };
};

export const getFormErrors = (data) => {
  return {
    type: CREATE_USER_FORM_ERRORS,
    data
  };
};

export const getNameValid = (data) => {
  return {
    type: CREATE_USER_NAME_VALID,
    data
  };
};

export const getPasswordValid = (data) => {
  return {
    type: CREATE_USER_PASSWORD_VALID,
    data
  };
};

export const getRePasswordValid = (data) => {
  return {
    type: CREATE_USER_RE_PASSWORD_VALID,
    data
  };
};

export const getFormValid = () => {
  return {
    type: CREATE_USER_FORM_VALID
  };
};

export const closeModalError = () => {
  return {
    type: CREATE_USER_CLOSE_ERROR_MODAL
  };
};

export const closeModalSuccess = () => {
  return {
    type: CREATE_USER_CLOSE_SUCCESS_MODAL
  };
};
