
import { call, takeLatest, put } from "redux-saga/effects";
import {
} from "./actions";
import * as types from "./constants";
import * as apiHost from "./../../constants/host";
import * as apiEndPoint from "./../../constants/endpoint";
import { getVideoSuccess, getVideoError } from "./actions";
import { push } from 'connected-react-router';
import axios from "axios";

const apiGetVideos = async () => {
    let token = await localStorage.getItem("jwtToken");
    if (!token) token = await sessionStorage.getItem("jwtToken");
    let result = await axios.get(`${apiHost.apiUrl}/${apiEndPoint.apiGetVideos}?offset=0&limit=3&sort=desc`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        timeout: 10000
    });
    return result;
};

function* getSectionVideo() {
    try {
        const resp = yield call(apiGetVideos);
        const { data, status } = resp;
        if (status === 200) {
            yield put(getVideoSuccess(data.data.listVideos));
        }
    } catch (error) {
        if (error.response && error.response.data.error) {
            yield put(getVideoError(error.response.data));
            console.log(error.response.data);
        } else {
            yield put(getVideoError(error));
            yield put(push("/500"));
        }
    }
}

function* getListLearn() {
    yield takeLatest(types.GET_VIDEO_LEARN, getSectionVideo);
}

export default getListLearn();