import * as types from "./constants";

export const checkActionLike = () => {
  return {
    type: types.CHECK_ACTION_LIKE,
  };
};
export const checkActionNotLike = () => {
  return {
    type: types.CHECK_ACTION_NOT_LIKE,
  };
};

export const checkOnLikeAsk = (data) => {
  return {
    type: types.CHECK_ON_LIKE_ASK,
    payload: {
      data
    }
  };
};
