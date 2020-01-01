import { takeLatest, call, put } from 'redux-saga/effects';
import * as api from "./../../constants/endpoint";
import * as host from "./../../constants/host";
import axios from 'axios';
import { push } from 'connected-react-router';
import {
    SIGNIN_REQUESTING,
    SIGNIN_SUCCESS,
    SIGNIN_ERROR,
    SIGNIN_ERROR_CATCH,
    PUSH_SIGNIN,
    SIGNIN_INITIAL_STATE
} from './constants';

const CancelToken = axios.CancelToken;
let cancel;
async function signinApi(email, password) {
    try {
        if (cancel !== undefined) {
            cancel();
        }
        const dataSend = await {
            email: email,
            password: password
        };
        const response = axios.post(`${host.apiUrl}${api.apiSignin}`, JSON.stringify(dataSend), {
            cancelToken: new CancelToken(function executor(c) {
                cancel = c;
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return response;
    } catch (error) {
        if (axios.isCancel(error)) {
            console.log('Canceled request');
        }
    }
}

function* signinFlow(action) {
    try {
        const {
            email,
            password,
            RememberCheckBox
        } = action;
        const response = yield call(signinApi, email, password);
        if(response.status === 200) {
            if (RememberCheckBox) {
                localStorage.setItem('jwtToken', response.data.data.token);
            } else {
                sessionStorage.setItem('jwtToken', response.data.data.token);
            }
            yield put({type: SIGNIN_SUCCESS, response});
            yield put(push('/'));
        }
    } catch (error) {
        if (error.response && error.response.data.error) {
            yield put({ type: SIGNIN_ERROR, error });
        } else {
            console.log(error);
            yield put({ type: SIGNIN_ERROR_CATCH, error });
        }
    }
}

function* pushLogin() {
    localStorage.clear();
    sessionStorage.clear();
    yield put({type: SIGNIN_INITIAL_STATE});
    yield put(push("/signin"));
}

function* signinWatcher() {
    yield takeLatest(SIGNIN_REQUESTING, signinFlow);
    yield takeLatest(PUSH_SIGNIN, pushLogin);
}

export default signinWatcher();