import * as types from "./constants";
const initialState = {
  changeColorIcon: false,
  checkClickLike: false,
  askId: "",
}
function logoutReducer(state = initialState, action) {
  switch (action.type) {
    // check liked
    case types.CHECK_ACTION_LIKE: {
      return {
        ...state,
        changeColorIcon: true,
      };
    }
    case types.CHECK_ACTION_NOT_LIKE: {
      return {
        ...state,
        changeColorIcon: false,
      };
    }
    case types.CHECK_ON_LIKE_ASK: {
      const { data } = action.payload;
      return {
        ...state,
        changeColorIcon: !state.changeColorIcon,
        checkClickLike: !state.checkClickLike,
        askId: data,
      };
    }
    default:
      return state
  }
}
export default logoutReducer