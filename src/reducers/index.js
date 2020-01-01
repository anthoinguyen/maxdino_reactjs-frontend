import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as form } from 'redux-form'
import signin from "../containers/signin/reducers";
import signup from "../containers/signup/reducers";
import logout from "../containers/logout/reducers";
import requestResetPassword from "../containers/requestResetPassword/reducers";
import resetPassword from "../containers/resetPassword/reducers";
import createUser from "../containers/createUser/reducers";
import changePassword from "../containers/changePassword/reducers";
import askPage from "./../containers/askPage/reducers";
import learnPage from "./../containers/learnPage/reducers";
import navBar from "./../containers/search/reducers";
import listItemLearn from "./../containers/listItemLearn/reducers";
import learnDetail from "./../containers/learnDetailPage/reducers";
import reactionAsk from "../containers/reactionAsk/reducers";

export default history =>
  combineReducers({
    router: connectRouter(history),
    form,
    signin,
    signup,
    logout,
    requestResetPassword,
    resetPassword,
    createUser,
    changePassword,
    askPage,
    learnPage,
    navBar,
    listItemLearn,
    learnDetail,
    reactionAsk,
  });
