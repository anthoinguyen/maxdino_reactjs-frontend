import { all } from "redux-saga/effects";
import onSiginSaga from "./../containers/signin/sagas";
import onSigupSaga from "./../containers/signup/sagas";
import onLogoutSaga from "./../containers/logout/sagas";
import requestResetPasswordSaga from "./../containers/requestResetPassword/sagas";
import resetPasswordSaga from "./../containers/resetPassword/sagas";
import createUserSaga from "./../containers/createUser/sagas";
import changePasswordSaga from "./../containers/changePassword/sagas";
import onLearnSaga from "./../containers/learnPage/sagas";
import getAskPage from "./../containers/askPage/sagas";
import navBar from "./../containers/search/sagas";
import listItemLearn from "./../containers/listItemLearn/sagas";
import learnDetail from "./../containers/learnDetailPage/sagas";

function* rootSaga() {
  yield all([
    onLearnSaga,
    getAskPage,
    onSiginSaga,
    onSigupSaga,
    onLogoutSaga,
    requestResetPasswordSaga,
    resetPasswordSaga,
    createUserSaga,
    changePasswordSaga,
    navBar,
    listItemLearn,
    learnDetail,
  ]);
}

export default rootSaga;
