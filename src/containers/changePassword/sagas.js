import { takeLatest, call, put } from 'redux-saga/effects'
import * as api from "./../../constants/endpoint";
import * as host from "./../../constants/host";
import axios from 'axios';

import {
    CHANGE_PASSWORD_REQUESTING,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_ERROR,
    CHANGE_PASSWORD_ERROR_CATCH,
    CHANGE_PASSWORD_OPEN_SUCCESS_MODAL
} from './constants';

async function changePasswordApi(currentPassword, newPassword, confirmNewPassword) {
    let token = await localStorage.getItem("jwtToken");
    if (!token) token = await sessionStorage.getItem("jwtToken");
    let dataSend = await {
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword
    };
    let response = await axios({
        method: "PUT",
        url: `${host.apiUrl}${api.apiChangePassword}`,
        data: dataSend,
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      return response;
}

function* changePasswordFlow(action) {
    try {
        const { currentPassword, newPassword, confirmNewPassword } = action;
        const response = yield call(changePasswordApi, currentPassword, newPassword, confirmNewPassword);
        if(response.status === 200) {
            let contentSuccess = "change password success!"; 
            yield put({ type: CHANGE_PASSWORD_SUCCESS, response });
            yield put({ type: CHANGE_PASSWORD_OPEN_SUCCESS_MODAL, contentSuccess });
        }
    } catch (error) {
        if (error.response && error.response.data.error) {
            yield put({ type: CHANGE_PASSWORD_ERROR, error });
        } else {
            yield put({ type: CHANGE_PASSWORD_ERROR_CATCH, error });
        }
    }
}

function* changePasswordWatcher() {
    yield takeLatest(CHANGE_PASSWORD_REQUESTING, changePasswordFlow);
}

export default changePasswordWatcher();