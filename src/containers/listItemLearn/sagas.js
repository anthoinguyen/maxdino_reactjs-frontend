
import { call, takeLatest, put, select } from "redux-saga/effects";
import {
} from "./actions";
import * as types from "./constants";
import * as apiHost from "./../../constants/host";
import * as apiEndPoint from "./../../constants/endpoint";
import { getLearnsSuccess, getLearnsError } from "./actions";
import {
    PUSH_SIGNIN
} from '../signin/constants';
import axios from "axios";

const apiGetLeans = async getStateListItemLearn => {

    const { offset, limit } = getStateListItemLearn.lazyLoading;
    let token = await localStorage.getItem("jwtToken");
    if (!token) token = await sessionStorage.getItem("jwtToken");
    let url = `${apiHost.apiUrl}${apiEndPoint.apiGetLearns}?offset=${offset}&limit=${limit}&sort=desc`;
    let result = await axios({
        method: "GET",
        url: url,
        headers: {
            Authorization: `Bearer ${token}`
        },
        timeout: 100000
    });
    return result;
};

function* getListLean() {
    try {
        const getStateListItemLearn = yield select(state => state.listItemLearn);
        const resp = yield call(apiGetLeans, getStateListItemLearn);
        const { data, status } = resp;
        if (status === 200) {
            yield put(getLearnsSuccess(data.data.listPosts));
        }
    } catch (error) {
        if (error.response && error.response.data.error) {
            yield put(getLearnsError(error.response.data));
            if (error.response.status === 401) {
                yield put({ type: PUSH_SIGNIN });
            }
        } else {
            yield put(getLearnsError(error));
        }
    }
}

function* getListLearn() {
    yield takeLatest(types.GET_LIST_LEARN, getListLean);
}

export default getListLearn();