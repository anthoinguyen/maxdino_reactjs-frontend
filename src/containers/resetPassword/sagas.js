import { takeLatest, call, put } from 'redux-saga/effects'
import * as api from "./../../constants/endpoint";
import * as host from "./../../constants/host";
import axios from 'axios';

import {
    RESET_PASSWORD_REQUESTING,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    RESET_PASSWORD_ERROR_CATCH,
    RESET_PASSWORD_OPEN_SUCCESS_MODAL
} from './constants';

async function resetPasswordApi(token, newPassword, confirmNewPassword) {
    let response = await axios.post(`${host.apiUrl}${api.apiResetPassword}`, {
        token: token,
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword
    });
    return response;
}

function* resetPasswordFlow(action) {
    try {
        const { token, newPassword, confirmNewPassword } = action;
        const response = yield call(resetPasswordApi, token, newPassword, confirmNewPassword);
        if(response.status === 200) {
            let contentSuccess = "Reset password success";
            yield put({ type: RESET_PASSWORD_SUCCESS, response });
            yield put({ type: RESET_PASSWORD_OPEN_SUCCESS_MODAL, contentSuccess });
        }
    } catch (error) {
        if (error.response && error.response.data.error) {
            yield put({ type: RESET_PASSWORD_ERROR, error });
        } else {
            yield put({ type: RESET_PASSWORD_ERROR_CATCH, error });
        }
    }
}

function* resetPasswordWatcher() {
    yield takeLatest(RESET_PASSWORD_REQUESTING, resetPasswordFlow);
}

export default resetPasswordWatcher();