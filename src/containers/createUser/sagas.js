import { takeLatest, call, put } from 'redux-saga/effects'
import * as api from "./../../constants/endpoint";
import * as host from "./../../constants/host";
import axios from 'axios';

import {
    CREATE_USER_REQUESTING,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    CREATE_USER_ERROR_CATCH,
    CREATE_USER_OPEN_SUCCESS_MODAL
} from './constants';

async function createUserApi(token, name, newPassword, confirmNewPassword) {
    let response = await axios.post(`${host.apiUrl}${api.apiCreateUser}`, {
        token: token,
        username: name,
        password: newPassword,
        confirmPassword: confirmNewPassword
    });
    return response;
}

function* createUserFlow(action) {
    try {
        const { token, name, newPassword, confirmNewPassword } = action;
        const response = yield call(createUserApi, token, name, newPassword, confirmNewPassword);
        if(response.status === 200) {
            let contentSuccess = "Create account success!";
            yield put({ type: CREATE_USER_SUCCESS, response });
            yield put({ type: CREATE_USER_OPEN_SUCCESS_MODAL, contentSuccess });
        }
    } catch (error) {
        if (error.response && error.response.data.error) {
            yield put({ type: CREATE_USER_ERROR, error });
        } else {
            yield put({ type: CREATE_USER_ERROR_CATCH, error });
        }
    }
}

function* createUserWatcher() {
    yield takeLatest(CREATE_USER_REQUESTING, createUserFlow);
}

export default createUserWatcher();