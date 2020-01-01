import * as types from "./constants";
const initialState = {
  isLogoutRequest: false,
  isLogoutSuccess: false,
}
function logoutReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGOUT: {
      return {
        ...state,
      };
    }
    case types.LOGOUT_SUCCESS: {
      return {
        ...state,
      };
    }
    case types.LOGOUT_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        errors: error,
        open: true
      };
    }
    default:
      return state
  }
}
export default logoutReducer