import * as constAction from "./constant";

export const pushLogin = () => {
  return {
    type: constAction.PUSH_LOGIN
  };
};

export const showLoading = () => {
  console.log("show");
  return {
    type: constAction.SHOW_LOADING
  };
};

export const hideLoading = () => {
  console.log("hide");
  return {
    type: constAction.HIDE_LOADING
  };
};
