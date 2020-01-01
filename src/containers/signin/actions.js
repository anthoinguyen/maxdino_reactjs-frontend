import {
  SIGNIN_REQUESTING, 
  PUSH_SIGNIN,
  SIGNIN_REMEMBER,
  SIGNIN_HIDDEN,
  SIGNIN_FORM_ERRORS,
  SIGNIN_EMAIL_VALID,
  SIGNIN_PASSWORD_VALID,
  SIGNIN_FORM_VALID,
  SIGNIN_CLOSE_ERROR_MODAL
} from './constants';

export const requestSignin = ({ email, password, RememberCheckBox }) => {
  return {
    type: SIGNIN_REQUESTING,
    email,
    password,
    RememberCheckBox
  }
}
export const pushLogin = () => {
  return {
    type: PUSH_SIGNIN
  };
};

export const remember = () => {
  return {
    type: SIGNIN_REMEMBER
  };
};

export const showPassword = () => {
  return {
    type: SIGNIN_HIDDEN
  };
};

export const getFormErrors = (data) => {
  return {
    type: SIGNIN_FORM_ERRORS,
    data
  };
};

export const getEmailValid = (data) => {
  return {
    type: SIGNIN_EMAIL_VALID,
    data
  };
};

export const getPasswordValid = (data) => {
  return {
    type: SIGNIN_PASSWORD_VALID,
    data
  };
};

export const getFormValid = () => {
  return {
    type: SIGNIN_FORM_VALID
  };
};

export const closeModalError = () => {
  return {
    type: SIGNIN_CLOSE_ERROR_MODAL
  };
};
