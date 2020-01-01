import * as types from "./constants";

export const logout = () => {
  return {
    type: types.LOGOUT,
  };
};

export const logoutSuccess = data => {
  return {
    type: types.LOGOUT_SUCCESS,
    payload: {
      data
    }
  };
};

export const logoutError = error => {
  return {
    type: types.LOGOUT_ERROR,
    payload: {
      error
    }
  };
};