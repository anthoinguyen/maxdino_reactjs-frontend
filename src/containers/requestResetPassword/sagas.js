import { takeLatest, call, put } from 'redux-saga/effects'
import * as api from "./../../constants/endpoint";
import * as host from "./../../constants/host";
import axios from 'axios';

import {
    REQUEST_RESET_PASSWORD_REQUESTING,
    REQUEST_RESET_PASSWORD_SUCCESS,
    REQUEST_RESET_PASSWORD_ERROR,
    REQUEST_RESET_PASSWORD_ERROR_CATCH,
    REQUEST_RESET_PASSWORD_OPEN_SUCCESS_MODAL
} from './constants';

async function requestResetPasswordApi(email) {
    let response = await axios.post(`${host.apiUrl}${api.apiRequestResetPassword}`, {
        email: email,
    });
    return response;
};


function* requestResetPasswordFlow(action) {
    try {
        const { email } = action;
        const response = yield call(requestResetPasswordApi, email);
        if(response.status === 200) {
            let contentSuccess = "Successful, Please check your email!";
            yield put({ type: REQUEST_RESET_PASSWORD_SUCCESS, response });
            yield put({ type: REQUEST_RESET_PASSWORD_OPEN_SUCCESS_MODAL, contentSuccess });
        }
    } catch (error) {
        if (error.response && error.response.data.error) {
            yield put({ type: REQUEST_RESET_PASSWORD_ERROR, error });
        } else {
            yield put({ type: REQUEST_RESET_PASSWORD_ERROR_CATCH, error });
        }
    }
}

function* requestResetPasswordWatcher() {
    yield takeLatest(REQUEST_RESET_PASSWORD_REQUESTING, requestResetPasswordFlow);
}

export default requestResetPasswordWatcher();