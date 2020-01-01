
import { call, takeLatest, put, select } from "redux-saga/effects";
import * as types from "./constants";
import * as apiHost from "./../../constants/host";
import * as apiEndPoint from "./../../constants/endpoint";
import { getTopSearchSuccess, getTopSearchError } from "./actions";
import axios from "axios";

const apiGetTopSearch = async (keyword) => {
    let token = await localStorage.getItem("jwtToken");
    if (!token) token = await sessionStorage.getItem("jwtToken");
    let result = await axios.get(`${apiHost.apiUrl}/${apiEndPoint.apiSearch}?q=${keyword}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        timeout: 100000
    });
    return result;
};

function* getTopSearch() {
    try {
        const keyword = yield select(state => state.navBar.keyword);
        const resp = yield call(apiGetTopSearch, keyword);
        const { data, status } = resp;
        if (status === 200) {
            yield put(getTopSearchSuccess(data.data));
        }
    } catch (error) {
        if (error.response && error.response.data.error) {
            yield put(getTopSearchError(error.response.data));
        } else {
            yield put(getTopSearchError(error));
        }
    }
}

function* getSearch() {
    yield takeLatest(types.GET_TOP_SEARCH, getTopSearch);
}

export default getSearch();